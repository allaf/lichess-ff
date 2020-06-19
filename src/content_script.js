'use strict';

console.log('content starts');

/* eslint-disable no-undef */
const jQuery = $;
const rx = rxjs;
const Utils = utils;
const ApiUtils = apiUtils;
const brw = browser;
/* eslint-enable no-undef */

const DELAY_MONITOR = 2000;
const imgSrc = brw.runtime.getURL('img/ajax-loader.gif');
const sadHorsey = brw.runtime.getURL('img/lichess_logo_500_sad.png');
const happyHorsey = brw.runtime.getURL('img/lichess_logo_500.png');

let DB = [];

const gameSubject = new rx.BehaviorSubject();
gameSubject.subscribe((game) => {
  if (game) {
    console.log('SUBJ SUB', game);

    var tipsDiv = jQuery('.mchat__content.tips-content');
    if (tipsDiv) {
      console.log('am updating the tips for new fen => ', game.fen);
      jQuery('#tips-wait').show();
      tipsDiv.html(buildHtmlTips(game));
      jQuery('#tips-wait').hide();
    }
  }
});

function main() {
  monitorChange(DELAY_MONITOR);

  insertTipTab();

  updateGame();

  jQuery('.mchat__tab').click(function () {
    var jThis = jQuery(this);
    var activeTabClass = 'mchat__tab-active';
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
      jQuery('.tips-content').empty();
    }
  });
  jQuery('.mchat__tab.tips').click();
}

function buildHtmlTips(currentGame) {
  const tips = Utils.fetchTips(currentGame, DB);
  console.log('=> tips found : ', tips.length);
  let html;
  let backUrl;
  let happy = false;
  if (tips.length) {
    happy = true;
    backUrl = happyHorsey;
    html =
      '<ul style="flex: 1 1 auto; padding:.5em 0 .5em 10px;">' +
      Utils.getListLinks(tips, currentGame.fen).join('') +
      '</ul>';
  } else {
    backUrl = sadHorsey;
    html =
      '<div style="flex: 1 1 auto;padding:.5em 0 .5em 10px;">No tips found :(</div>';
  }

  const divContent = jQuery('.tips-content');
  if (divContent) {
    // eslint-disable-next-line quotes
    divContent.css('background-image', "url('" + backUrl + "')");
    divContent.css('background-size', '30%');
    divContent.css('background-repeat', 'no-repeat');
    divContent.css('background-position', 'center center');
    if (happy) {
    }
  }

  var today = new Date();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  html +=
    '<span style="padding: 3px 20px 3px 4px;border-top: 1px solid #404040;"><strong>' +
    ' (' +
    time +
    ') </strong></span>';
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
      <img id="tips-wait" style="padding-left:3px;" src="${imgSrc}">
    </div>
    `);

  jQuery('#tips-refresh').click(() => {
    updateGame();
  });
}

function monitorChange(delay = 1000) {
  jQuery('.rmoves').on('DOMSubtreeModified', () => {
    console.log('monitor event');
    setTimeout(function () {
      if (isMyTurn()) {
        updateGame();
      }
    }, delay);
  });
}

function updateGame() {
  const fen = boardToFen();
  console.log('Fen extracted from html : ', fen);
  if (fen.includes('a')) {
    console.error('BAD FEN, please manually reload');
    return;
  }

  const game = gameSubject.getValue();
  console.log('nexting game');
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

console.log('content end');
