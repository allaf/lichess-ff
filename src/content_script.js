'use strict';

console.log('content starts');

/* eslint-disable no-undef */
const jQuery = $;
const rx = rxjs;
const Utils = utils;
const ApiUtils = apiUtils;
const brw = browser;
/* eslint-enable no-undef */

let DB = [];

const gameSubject = new rx.BehaviorSubject();
gameSubject.subscribe((game) => {
  if (game) {
    var div = jQuery('.mchat__content.tips-content');
    if (div) {
      console.log('am updating the tips => ');
      div.html(buildHtmlTips(game));
    }
  }
});

function main() {
  insertHtmlTab();

  updateGame(false);

  jQuery('.mchat__tab').click(function () {
    var jThis = jQuery(this);
    var activeTabClass = 'mchat__tab-active';
    jQuery('.' + activeTabClass).removeClass(activeTabClass);
    jThis.addClass(activeTabClass);

    if (jThis.hasClass('tips')) {
      let contentObj = jQuery('.mchat__content');
      contentObj.empty();
      contentObj.removeClass();
      contentObj.addClass('mchat__content');
      contentObj.addClass('tips-content');
      let suggHtml = buildHtmlTips(gameSubject.getValue());
      contentObj.html(suggHtml);
    } else {
      jQuery('.tips-content').empty();
    }
  });
  jQuery('.mchat__tab.tips').click();

  monitorBoard();
}

function buildHtmlTips(currentGame) {
  let tipsList = fetchTips(currentGame);
  console.log('buildHtmlTips ====> tips found : ', tipsList.length);
  let html = tipsList.length
    ? '<ul style="flex: 1 1 auto; padding:.5em 0 .5em 10px;">' +
      getListLinks(tipsList) +
      '</ul>'
    : '<div style="flex: 1 1 auto;padding:.5em 0 .5em 10px"><span>rien :(</span> </div>';

  let lastMove = $('.moves > m2.active').text();
  html +=
    '<span style="padding: 3px 20px 3px 4px;border-top: 1px solid #404040;">last move is <strong>' +
    lastMove +
    '</strong></span>';
  return html;
}

function parsePieces() {
  let domPieces = jQuery('cg-board > piece').toArray();

  let jsonPieces = domPieces.map((domPiece) => {
    const jp = jQuery(domPiece);
    let coords = jp.css('transform').match(/matrix\(1, 0, 0, 1, (.*), (.*)\)$/);
    return {
      color: jp.hasClass('black') ? 'black' : 'white',
      piece: jp.attr('class').split(/[ ]/).pop(),
      x: Number(coords[1]),
      y: Number(coords[2]),
    };
  });
  return jsonPieces;
}

function getListLinks(gameList) {
  return gameList
    .map(
      (g) =>
        '<li><a href="' +
        g.url +
        '" >' +
        g.name +
        ' ' +
        g.nextMoves +
        '</a></li>'
    )
    .join('');
}

function insertHtmlTab() {
  jQuery('.mchat__tabs.nb_2').append(
    '<div id="tips" class="mchat__tab tips"><span>Tips</span></div>'
  );
}

function monitorBoard() {
  console.log('MONITORIG BOARD');
  jQuery('cg-board').on('DOMSubtreeModified', () => {
    console.log('DOMSubtreeModified');
    //TODO check myturn
    updateGame();
  });
}

function updateGame(force = false) {
  let pieces = parsePieces();
  let width = jQuery('cg-container').innerWidth();
  let piecesWithIdx = Utils.pieceTranslationToPos(width, pieces);
  let fen = Utils.piecesIdxToFen(piecesWithIdx, gameSubject.getValue().color);

  let g = gameSubject.getValue();
  console.log('current Fen', g.fen);
  console.log('parsed  Fen', fen);
  if (g.fen !== fen || force) {
    console.log('nexting game');
    g.fen = fen;
    gameSubject.next(g);
  } else {
    console.log('not game');
  }
}

function isMyTurn() {
  let nbMoves = jQuery('.moves > m2').length;
  let myColor = gameSubject.getValue().color;
  return (
    (myColor === 'white' && !(nbMoves % 2)) ||
    (myColor === 'black' && nbMoves % 2)
  );
}

function getDb() {
  return DB;
}

function fetchTips(currentGame) {
  // eslint-disable-next-line no-undef
  return getDb()
    .games.filter((g) => g.fen.split(' ')[0] === currentGame.fen)
    .filter((g) => g.fen.split(' ')[1] === currentGame.color.substr(0, 1));
}

// eslint-disable-next-line no-undef
jQuery(document).ready(function () {
  brw.storage.local.get('token').then((storage) => {
    if (storage.token) {
      ApiUtils
        // eslint-disable-next-line no-undef
        .getCurrentGame(window.location.href, storage.token)
        .subscribe((g) => {
          brw.runtime.sendMessage('get-data').then((reply) => {
            DB = reply;
            console.log('DB recup', DB);
            gameSubject.next(g);
            main();
          });
        });
    }
  });
});

console.log('content end');
