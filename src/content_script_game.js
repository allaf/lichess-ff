'use strict';

(function () {
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /* eslint-disable no-undef */
  const jQuery = $;
  const rx = rxjs;
  const Utils = utils;
  const ApiUtils = apiUtils;
  const brw = browser;
  const ChessJs = Chess;
  const D3 = d3;
  /* eslint-enable no-undef */

  const SAD_HORSEY = brw.runtime.getURL('img/lichess_logo_500_sad.png');
  const HAPPY_HORSEY = brw.runtime.getURL('img/lichess_logo_500.png');
  let START_COLOR = '';
  let DEST_COLOR = '';
  let ARROWS_COLOR = '';
  let SHOW_SQUARES = '';
  let SHOW_ARROWS = '';
  let DB = [];

  const local = brw.storage.local.get();
  local.then((storage) => {
    START_COLOR = storage.startColor;
    DEST_COLOR = storage.destColor;
    SHOW_SQUARES = storage.showSquares;
    SHOW_ARROWS = storage.showArrows;
    ARROWS_COLOR = storage.arrowsColor;
  });

  const gameSubject = new rx.BehaviorSubject();
  gameSubject.subscribe((game) => {
    if (game) {
      const tipsDiv = jQuery('.mchat__content.tips-content');
      if (tipsDiv) {
        tipsDiv.empty();
        tipsDiv.append(buildHtmlTipsAndShowTips(game));
        showTipsOnBoard(game);
        jQuery('#tips-refresh').removeClass('working');
      }
    }
  });

  function showSquares(currentGame, distinctMoves) {
    const width = jQuery('cg-container').innerWidth();
    const col = currentGame.color.substr(0, 1);
    const fullFen = `${currentGame.fen} ${col} KQkq - 1 1`;
    const chess = new ChessJs(fullFen);

    removeTipSquares();
    distinctMoves.forEach((tip) => {
      drawMove(tip, currentGame.color, width, chess, jQuery('cg-board'));
    });
  }

  function removeTipSquares() {
    return jQuery('square.tip-square').remove();
  }

  function removeArrows() {
    return jQuery('cg-board>svg#svg-tips').remove();
  }

  jQuery(window).resize(function () {
    const currentGame = gameSubject.getValue();
    const tips = Utils.fetchTips(currentGame, DB);
    const distinctMoves = Utils.getDistinctMoves(tips, currentGame.fen);
    if (tips.length) {
      if (SHOW_SQUARES) {
        showSquares(currentGame, distinctMoves);
      }
      if (SHOW_ARROWS) {
        drawArrows(currentGame, distinctMoves);
      }
    }
  });

  function drawMove(move, color, boardWidth, chess, jBoard) {
    try {
      if (null === chess.move(move)) {
        return;
      }
    } catch (error) {
      console.warn('chess.js cannot make move ' + move, error);
      return;
    }
    const { from, to } = chess.history({ verbose: true })[0];
    chess.undo();
    highlightSquare(
      Utils.squareNameToPxCoord(from, boardWidth, color),
      true,
      from,
      jBoard
    );
    highlightSquare(
      Utils.squareNameToPxCoord(to, boardWidth, color),
      false,
      to,
      jBoard
    );
  }

  function highlightSquare(pos, from = true, square, jBoard) {
    const cssClass = from ? 'square-from' : 'square-to';
    const col = from ? START_COLOR : DEST_COLOR;
    const style = `transform: translate(${pos.x}px, ${pos.y}px);
     background-color:${col}`;

    if (jQuery(`square#${square}`).length === 0) {
      jBoard.append(
        `<square id="${square}" class="tip-square ${cssClass}" style="${style}" />`
      );
    }
  }

  function main() {
    monitorChange();
    insertTipTab();
    updateGame();

    jQuery('.mchat__tab').click(function () {
      const jThis = jQuery(this);
      const activeTabClass = 'mchat__tab-active';
      jQuery('.' + activeTabClass).removeClass(activeTabClass);
      jThis.addClass(activeTabClass);

      if (jThis.hasClass('tips')) {
        const tipsDiv = jQuery('.mchat__content');
        tipsDiv.empty();
        tipsDiv.removeClass();
        tipsDiv.addClass('mchat__content');
        tipsDiv.addClass('tips-content');
        const currentGame = gameSubject.getValue();
        var htmlTips = buildHtmlTipsAndShowTips(gameSubject.getValue());
        tipsDiv.append(htmlTips);

        showTipsOnBoard(currentGame);
      } else {
        const contentObj = jQuery('.mchat__content');
        jQuery('.tips-content').empty();
        contentObj.removeClass('tips-content');
      }
    });
    jQuery('.mchat__tab.tips').click();
  }

  function drawArrows(currentGame, distinctMoves) {
    const width = jQuery('cg-container').innerWidth();
    const col = currentGame.color.substr(0, 1);
    const fullFen = `${currentGame.fen} ${col} KQkq - 1 1`;
    const chess = new ChessJs(fullFen);
    const drawColor = ARROWS_COLOR;

    removeArrows();

    if (!jQuery('cg-board>svg#svg-tips').length) {
      var svgTips = D3.select('cg-board').append('svg').attr('id', 'svg-tips');
      svgTips
        .append('defs')
        .attr('id', 'tips-defs')
        .append('marker')
        .attr('id', 'arrowhead-tip')
        .attr('orient', 'auto')
        .attr('markerWidth', 4)
        .attr('markerHeight', 8)
        .attr('refX', 2.05)
        .attr('refY', 2.01)
        .append('path')
        .attr('d', 'M0,0 V4 L3,2 Z')
        .attr('fill', drawColor);

      distinctMoves.forEach((move) => {
        try {
          if (null === chess.move(move)) {
            return;
          }
        } catch (error) {
          console.warn('chess.js cannot make move ' + move, error);
          return;
        }
        const { from, to } = chess.history({ verbose: true })[0];
        chess.undo();
        const col = currentGame.color;
        const offset = { x: width / 16, y: width / 16 };
        const pos1 = Utils.squareNameToPxCoord(from, width, col, offset);
        const pos2 = Utils.squareNameToPxCoord(to, width, col, offset);

        svgTips
          .append('line')
          .attr('stroke', drawColor)
          .attr('stroke-linecap', 'round')
          .attr('stroke-width', width / 52)
          .attr('x1', pos1.x)
          .attr('y1', pos1.y)
          .attr('x2', pos2.x)
          .attr('y2', pos2.y)
          .attr('marker-end', 'url(#arrowhead-tip)');
      });
    }
  }

  function showTipsOnBoard(currentGame) {
    const tips = Utils.fetchTips(currentGame, DB);
    if (tips.length) {
      const distinctMoves = Utils.getDistinctMoves(tips, currentGame.fen);
      if (SHOW_SQUARES) {
        showSquares(currentGame, distinctMoves);
      }
      if (SHOW_ARROWS) {
        drawArrows(currentGame, distinctMoves);
      }
    } else {
      if (SHOW_SQUARES) {
        removeTipSquares();
      }
      if (SHOW_ARROWS) {
        removeArrows();
      }
    }
  }

  function buildHtmlTipsAndShowTips(currentGame) {
    const tips = Utils.fetchTips(currentGame, DB);
    let backUrl;
    let infoText = '';
    let linkText = '';
    if (tips.length) {
      backUrl = HAPPY_HORSEY;
      const links = Utils.getListLinks(tips, currentGame.fen);
      const distinctMoves = Utils.getDistinctMoves(tips, currentGame.fen);
      infoText = Array.from(distinctMoves).join(' ');
      linkText = links.join('');
    } else {
      backUrl = SAD_HORSEY;
      infoText = 'No tips found :(';
    }

    const tipInfo = jQuery('<span/>', { class: 'tip-info' }).append(infoText);
    const ul = jQuery('<ul/>', { class: 'tip' }).html(linkText);
    const divTipContent = jQuery('.tips-content');
    if (divTipContent) {
      divTipContent.css('background-image', `url('${backUrl}')`);
    }

    return [tipInfo, ul];
  }

  function boardToFen() {
    const pieces = parsePieces();
    const width = jQuery('cg-container').innerWidth();
    const piecesWithIdx = Utils.pieceTranslationToPos(width, pieces);
    return Utils.piecesIdxToFen(piecesWithIdx, gameSubject.getValue().color);
  }

  function parsePieces() {
    const domPieces = jQuery('cg-board > piece').toArray();

    const jsonPieces = domPieces.map((domPiece) => {
      const jp = jQuery(domPiece);
      const coords = jp
        .css('transform')
        .match(/matrix\(1, 0, 0, 1, (.*), (.*)\)$/);
      return {
        color: jp.hasClass('black') ? 'black' : 'white',
        piece: jp.attr('class').split(/[ ]/).pop(),
        x: Number(coords[1]),
        y: Number(coords[2]),
      };
    });
    return jsonPieces;
  }

  function insertTipTab() {
    const btClass = 'fbt';
    jQuery('.mchat__tabs.nb_2').append(`
    <div id="tips" class="mchat__tab tips"><span>Tips</span>
      <button id="tips-refresh" data-icon="P" class="${btClass}"></button>
    </div>
    `);

    jQuery('#tips-refresh').click(() => {
      updateGame();
    });
  }

  function monitorChange() {
    brw.storage.local.get().then((storage) => {
      const delay = 500;
      if (!storage.delay) {
        brw.storage.local.set({ delay });
      }

      jQuery('.rmoves').on('DOMSubtreeModified', () => {
        setTimeout(
          function () {
            if (isMyTurn()) {
              jQuery('#tips-refresh').addClass('working');
              updateGame();
            }
          },
          storage.delay ? storage.delay : delay
        );
      });
    });
  }

  function updateGame() {
    const fen = boardToFen();
    if (fen.includes('a')) {
      console.error('BAD FEN, please manually reload', fen);
      return;
    }

    const game = gameSubject.getValue();
    game.fen = fen;
    gameSubject.next(game);
  }

  function isMyTurn() {
    const nbMoves = jQuery('.moves > m2').length;
    const myColor = gameSubject.getValue().color;
    return (
      (myColor === 'white' && !(nbMoves % 2)) ||
      (myColor === 'black' && nbMoves % 2)
    );
  }

  jQuery(document).ready(function () {
    brw.storage.local.get('token').then((storage) => {
      ApiUtils.getCurrentGameForUrl(
        window.location.href,
        storage.token
      ).subscribe((g) => {
        brw.runtime.sendMessage('get-data').then((reply) => {
          DB = reply;
          gameSubject.next(g);
          main();
        });
      });
    });
  });
})();
