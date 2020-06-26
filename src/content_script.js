'use strict';

/* eslint-disable no-undef */
const jQuery = $;
const rx = rxjs;
const Utils = utils;
const ApiUtils = apiUtils;
const brw = browser;
/* eslint-enable no-undef */

const sadHorsey = brw.runtime.getURL('img/lichess_logo_500_sad.png');
const happyHorsey = brw.runtime.getURL('img/lichess_logo_500.png');

let DB = [];

const gameSubject = new rx.BehaviorSubject();
gameSubject.subscribe((game) => {
  if (game) {
    const tipsDiv = jQuery('.mchat__content.tips-content');
    if (tipsDiv) {
      tipsDiv.html(buildHtmlTips(game));
      jQuery('#tips-refresh').removeClass('working');
    }
  }
});

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
      const contentObj = jQuery('.mchat__content');
      contentObj.empty();
      contentObj.removeClass();
      contentObj.addClass('mchat__content');
      contentObj.addClass('tips-content');
      contentObj.html(buildHtmlTips(gameSubject.getValue()));
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
  let html = '';
  let backUrl;
  let bottomText = '';
  let linkText = '';
  if (tips.length) {
    backUrl = happyHorsey;
    const links = Utils.getListLinks(tips, currentGame.fen);
    const distinctMoves = Utils.getDistinctMoves(tips, currentGame.fen);
    bottomText = Array.from(distinctMoves).join(' ');
    linkText = links.join('');
  } else {
    backUrl = sadHorsey;
    bottomText = 'No tips found :(';
  }
  html += `<span class="tip-info">${bottomText}</span>`;
  html += `<ul class="tip">${linkText}</ul>`;

  const divTipContent = jQuery('.tips-content');
  if (divTipContent) {
    divTipContent.css('background-image', `url('${backUrl}')`);
  }

  return html;
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
