'use strict';
// TODO db sur le cloud ?

console.log('content script starts');

const gameSubject = new rxjs.BehaviorSubject();

gameSubject.subscribe((game) => {
  if (game) {
    var div = $('.mchat__content.tips-content');
    if (div) {
      console.log('am updating the suggestions => ');
      div.html(buildHtmlSuggestions(game));
    }
  }
});

function main() {
  insertHtmlTab();

  updateGame(true);

  $('.mchat__tab').click(function () {
    var jThis = $(this);
    var activeTabClass = 'mchat__tab-active';
    $('.' + activeTabClass).removeClass(activeTabClass);
    jThis.addClass(activeTabClass);

    if (jThis.hasClass('tips')) {
      let contentObj = $('.mchat__content');
      contentObj.empty();
      contentObj.removeClass();
      contentObj.addClass('mchat__content');
      contentObj.addClass('tips-content');
      let suggHtml =
        buildHtmlSuggestions(gameSubject.getValue()) + '<br>' + Date.now();
      contentObj.html(suggHtml);
    } else {
      $('.tips-content').empty();
    }
  });
  monitorBoard();
}

////////////////////////////////////////////////
function parsePieces(color) {
  let domPieces = $('cg-board > piece').toArray();

  let jsonPieces = domPieces.map((domPiece) => {
    const jp = $(domPiece);
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

function buildHtmlSuggestions(currentGame) {
  let positionList = fetchSuggestionsFor(currentGame);
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
  $('.mchat__tabs.nb_2').append(
    '<div id="alex" class="mchat__tab tips"><span>Suggestions</span></div>'
  );
}

function monitorBoard() {
  $('cg-board').on('DOMSubtreeModified', function (e) {
    // console.log('DOMSubtreeModified => update game');
    updateGame();
  });
}

function updateGame(force = false) {
  let pieces = parsePieces();
  let width = $('cg-container').innerWidth();
  let piecesWithIdx = utils.pieceTranslationToPos(width, pieces);
  let fen = utils.piecesIdxToFen(piecesWithIdx, gameSubject.getValue().color);

  let g = gameSubject.getValue();
  console.log('current Fen', g.fen);
  console.log('parsed  Fen', fen);
  if (g.fen !== fen || force) {
    g.fen = fen;
    gameSubject.next(g);
  }
}

function fetchSuggestionsFor(currentGame) {
  return getDb()
    .games.filter((g) => g.fen.split(' ')[0] === currentGame.fen)
    .filter((g) => g.fen.split(' ')[1] === currentGame.color.substr(0, 1));
}

$(document).ready(function () {
  browser.storage.local.get('token').then((storage) => {
    if (storage.token) {
      apiUtils
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
