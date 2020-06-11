'use strict';
// TODO db sur le cloud ?

console.log('content script starts');

// let { BehaviorSubject } = rxjs;

const gameSubject = new rxjs.BehaviorSubject();
// const unSubject = new rxjs.BehaviorSubject();

// unSubject.subscribe((x) => {
// console.log('un sujet receives', x);
// });

gameSubject.subscribe((game) => {
  // console.log('GameSubject receives ', game);
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
      utils2
        .getCurrentGame(window.location.href, storage.token)
        .subscribe((g) => {
          gameSubject.next(g);

          //
          main();
        });
    }
  });
});

function getDb() {
  return {
    games: [
      {
        name: 'Englund gambit',
        fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
        url: 'https://youtu.be/tYOnym3ZINU?t=475',
        nextMoves: ['e5', 'dxe5', 'Nc6'],
      },
      {
        name: 'Venus trap',
        fen: 'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
        url: 'https://youtu.be/L-jTuKWJAG8?t=522',
        nextMoves: ['Kb3'],
      },
      {
        name: 'Mars trap',
        fen: 'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
        url: 'https://youtu.be/L-jTuKWJAG8?t=386',
        nextMoves: ['Kb3'],
      },
      {
        name: 'Hercule trap',
        fen: 'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
        url: 'https://youtu.be/L-jTuKWJAG8?t=67',
        nextMoves: [],
      },
      {
        name: 'Italienne débutant trap',
        fen:
          'r1bqk2r/pppp1ppp/1bn2n2/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 1',
        url: 'https://youtu.be/L-jTuKWJAG8?t=16',
        nextMoves: [],
      },
      {
        name: "Legal's trap",
        fen:
          'r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R w KQkq - 1 6',
        url: 'https://youtu.be/tYOnym3ZINU?t=71',
        nextMoves: ['Nxe5'],
      },
      {
        name: 'Blackburne Shilling Gambit ',
        fen: 'r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        url: 'https://youtu.be/tYOnym3ZINU?t=126',
        nextMoves: ['Nd4'],
      },
      {
        name: 'Gambit Evans 1 Ba5',
        fen:
          'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        url: 'https://youtu.be/LGAm_8rbeMc?t=205',
        nextMoves: ['b4'],
      },
      {
        name: 'Gambit Evans (piège Bobby Fischer)',
        fen: 'r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R w KQkq - 0 7',
        url: 'https://youtu.be/rOe8lcOFhCI?t=79',
        nextMoves: ['O-O'],
      },
      {
        name: 'Gambit Evans (piège Fly in the ointment)',
        fen: 'r1b1k1nr/ppppqppp/2n5/b7/2B1P3/1Qp2N2/P4PPP/RNB2RK1 w kq - 2 9',
        url: 'https://youtu.be/0ha5ggCwA6w?t=53',
        nextMoves: ['Nxc3'],
      },
      {
        name: 'Gambit Evans 2',
        fen: 'r1b1k2r/ppppqppp/2n2n2/b7/2B1P3/1QN2N2/P4PPP/R1B2RK1 w kq - 1 10',
        url: 'https://youtu.be/WbQ35VtsXys?t=71',
        nextMoves: ['Nd5'],
      },
      {
        name: 'Scandi Rosen Trap',
        fen: 'rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4',
        url: 'https://youtu.be/6IBDe-f_PCc?t=1764',
        nextMoves: ['b4'],
      },
      {
        name: 'Scandi Rosen Trap2',
        fen: 'rn1qkb1r/ppp1pppp/5n2/3P4/2B3b1/8/PPPP1PPP/RNBQK1NR w KQkq - 3 4',
        url: 'https://youtu.be/6IBDe-f_PCc?t=1906',
        nextMoves: ['f3'],
      },
      {
        name: '4 knights scotsh',
        fen:
          'r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5',
        url: 'https://youtu.be/6IBDe-f_PCc?t=2230',
        nextMoves: ['Nd5'],
      },
      {
        name: 'French, advance, just a pawnMilner-Barry gambit',
        fen:
          'r2qkbnr/pp1b1ppp/2n1p3/1BppP3/3P4/2P2N2/PP3PPP/RNBQK2R b KQkq - 4 6',
        url: 'https://youtu.be/6IBDe-f_PCc?t=678',
        nextMoves: ['Nxe5'],
      },
      {
        name: 'Scandi win queen',
        fen: 'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
        url: 'https://youtu.be/XZtVxicqkAs?t=95',
        nextMoves: ['Nf3'],
      },
    ],
  };
}

console.log('content script ends');
