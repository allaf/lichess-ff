'use strict';

// TODO db sur le cloud ?

/* eslint-disable no-undef */
const jQuery = $;
const rx = rxjs;
const Utils = utils;
const ApiUtils = apiUtils;
const brw = browser;
/* eslint-enable no-undef */

console.log('content script starts');

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

  updateGame(true);

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
      let suggHtml =
        buildHtmlTips(gameSubject.getValue()) + '<br>' + Date.now();
      contentObj.html(suggHtml);
    } else {
      jQuery('.tips-content').empty();
    }
  });
  jQuery('.mchat__tab.tips').click();

  monitorBoard();
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
  // console.log('jsonPieces', jsonPieces);
  return jsonPieces;
}

function buildHtmlTips(currentGame) {
  let positionList = fetchTipsFor(currentGame);
  console.log('positionList found', positionList.length);
  let html = positionList.length
    ? '<ul style="padding:.5em 0 .5em 10px">' +
      getListLinks(positionList) +
      '</ul>'
    : 'rien :(';
  return html;
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
  jQuery('cg-board').on('DOMSubtreeModified', function (e) {
    console.log('DOMSubtreeModified', e);
    console.log('TRURN =>', isMyTurn());
    // if (isMyTurn()) {
    updateGame();
    // } else {
    // console.log('I could update but it is not my turn :/');
    // }
  });
}

function isMyTurn() {
  console.log('TURN DEB =>');
  let nbMoves = jQuery('.moves > m2').length;
  let myColor = gameSubject.getValue().color;
  return (
    (myColor === 'white' && !(nbMoves % 2)) ||
    (myColor === 'black' && nbMoves % 2)
  );
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
    g.fen = fen;
    gameSubject.next(g);
  }
}

function fetchTipsFor(currentGame) {
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
          gameSubject.next(g);

          //
          main();
        });
    }
  });
});

console.log('content script ends');
