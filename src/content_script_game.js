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
  /* eslint-enable no-undef */

  const SAD_HORSEY = brw.runtime.getURL('img/lichess_logo_500_sad.png');
  const HAPPY_HORSEY = brw.runtime.getURL('img/lichess_logo_500.png');
  let START_COLOR = '';
  let DEST_COLOR = '';
  let SHOW_SQUARES = '';
  let DB = [];

  const local = brw.storage.local.get();
  local.then((storage) => {
    START_COLOR = storage.startColor;
    DEST_COLOR = storage.destColor;
    SHOW_SQUARES = storage.showSquares;
  });

  const gameSubject = new rx.BehaviorSubject();
  gameSubject.subscribe((game) => {
    if (game) {
      const tipsDiv = jQuery('.mchat__content.tips-content');
      if (tipsDiv) {
        tipsDiv.empty();
        tipsDiv.append(buildHtmlTips(game));
        jQuery('#tips-refresh').removeClass('working');
      }
    }
  });

  function showSquares(tips, currentGame) {
    if (tips.length) {
      const distinctMoves = Utils.getDistinctMoves(tips, currentGame.fen);
      const width = jQuery('cg-container').innerWidth();
      const chess = new ChessJs(
        `${currentGame.fen} ${currentGame.color.substr(0, 1)} - - 1 1`
      );
      jQuery('square.tip-square').remove();
      distinctMoves.forEach((tip) => {
        drawMove(tip, currentGame.color, width, chess, jQuery('cg-board'));
      });
    }
  }

  function removeSquares() {
    jQuery('square.tip-square').remove();
  }

  jQuery(window).resize(function () {
    const local = brw.storage.local.get();
    local.then((storage) => {
      if (storage.showSquares) {
        // redraw higlhights
        const currentGame = gameSubject.getValue();
        const tips = Utils.fetchTips(currentGame, DB);
        showSquares(tips, currentGame);
      }
    });
  });

  function drawMove(move, color, boardWidth, chess, jBoard) {
    chess.move(move);
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
        tipsDiv.append(buildHtmlTips(gameSubject.getValue()));
      } else {
        const contentObj = jQuery('.mchat__content');
        jQuery('.tips-content').empty();
        contentObj.removeClass('tips-content');
      }
    });
    jQuery('.mchat__tab.tips').click();
  }

  function buildHtmlTips(currentGame) {
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

      if (SHOW_SQUARES) {
        showSquares(tips, currentGame);
      }
    } else {
      backUrl = SAD_HORSEY;
      infoText = 'No tips found :(';
    }

    const check = jQuery('<input/>', {
      id: 'showSquares',
      type: 'checkbox',
      checked: SHOW_SQUARES,
    }).click((x) => {
      if (x.target.checked) {
        showSquares(tips, currentGame);
      } else {
        removeSquares();
      }
    });

    const tipInfo = jQuery('<span/>', { class: 'tip-info' }).append(infoText);
    if (SHOW_SQUARES && false) {
      tipInfo.append(check);
    }
    const ul = jQuery('<ul/>', { class: 'tip' }).html(linkText);

    const divTipContent = jQuery('.tips-content');
    if (divTipContent) {
      divTipContent.css('background-image', `url('${backUrl}')`);
    }
    //TODO draw arrows ?

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
