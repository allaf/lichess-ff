var utils = {
  isOnAnalysisPage: (url) => {
    return url.match(/https:\/\/.*lichess\.org\/analysis/);
  },

  fetchTips: (currentGame, db) => {
    // eslint-disable-next-line no-undef
    return db.games.filter((game) => {
      return (
        currentGame.variant.name === game.variant &&
        game.fen.filter(
          (fen) =>
            fen.split(' ')[0] === currentGame.fen &&
            fen.split(' ')[1] === currentGame.color.substr(0, 1)
        ).length
      );
    });
  },

  extractTitle: (pgn) => {
    const regexpEvent = /\[Event "[^:]*: (.*)"\]/gm;
    return regexpEvent.exec(pgn)[1];
  },

  tipTuple: (tip, gameFen) => {
    const moveIdx = tip.fen.findIndex((f) => f.split(' ')[0] === gameFen);
    return { url: tip.url, move: tip.nextMoves[moveIdx], name: tip.name };
  },

  tupleToHtml: (tuple) => {
    return `<li><span class="tip-move">${tuple.move}</span> : <a target="_blank" href="${tuple.url}">${tuple.name}</a></li>`;
  },

  getSortedTuples: (tips, gameFen) =>
    tips
      .map((t) => utils.tipTuple(t, gameFen))
      .sort((x, y) => (x.move === y.move ? x.name < y.name : x.move < y.move)),

  getListLinks: (tips, gameFen) =>
    utils.getSortedTuples(tips, gameFen).map(utils.tupleToHtml),

  getDistinctMoves: (tips, gameFen) =>
    new Set(utils.getSortedTuples(tips, gameFen).map((x) => x.move)),

  executeScripts: (tabId, injectDetailsArray) => {
    function createCallback(tabId, injectDetails, innerCallback) {
      return function () {
        // eslint-disable-next-line no-undef
        browser.tabs.executeScript(tabId, injectDetails, innerCallback);
      };
    }
    var callback = null;
    for (var i = injectDetailsArray.length - 1; i >= 0; --i) {
      callback = createCallback(tabId, injectDetailsArray[i], callback);
    }
    if (callback !== null) {
      // execute outermost function
      callback();
    }
  },

  calcIndex: (width, x) => {
    const unit = width / 8;
    return Math.round(x / unit);
  },

  compareFct: (a, b) => {
    if (a.y < b.y) {
      return -1;
    } else if (a.y > b.y) {
      return 1;
    } else {
      return a.x < b.x ? -1 : 1;
    }
  },

  pieceTranslationToPos: (width, pieces) => {
    pieces.sort(utils.compareFct);
    pieces.forEach((p) => {
      p.idx = {
        x: utils.calcIndex(width, p.x),
        y: utils.calcIndex(width, p.y),
      };
    });

    return pieces;
  },

  pieceToFen: (p) => {
    let res = '';
    switch (p.piece) {
      case 'knight':
        res = 'n';
        break;
      default:
        res = p.piece.substr(0, 1);
    }
    return p.color === 'white' ? res.toUpperCase() : res;
  },

  piecesIdxToFen: (pieces, color = 'white') => {
    const board = [];
    for (var x = 0; x < 8; x++) {
      board[x] = new Array(8);
    }

    pieces.forEach((p) => {
      board[p.idx.y][p.idx.x] = p;
    });

    let fen = '';
    let count = 0;

    for (var i = 0; i < 8; i++) {
      fen += i === 0 ? '' : '/';
      count = 0;
      for (var j = 0; j < 8; j++) {
        const p = board[i][j];
        if (j === 7 && !p) {
          fen += count + 1;
          count = 0;
        }
        if (p) {
          if (count) {
            fen += count;
            count = 0;
          }
          fen += utils.pieceToFen(p);
        } else {
          count++;
        }
      }
    }
    return color === 'black' ? fen.split('').reverse().join('') : fen;
  },
  purge: (str) => {
    return str.replace(/[\s`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  },
  parseChapters: (pgn) => {
    const regexpEvent = /\[Event "[^:]*: (.*)"\]/gm;
    const regexpSite = /\[Site "(https:\/\/lichess\.org\/study\/.*)"]/gm;
    const matchesEvent = [...pgn.matchAll(regexpEvent)];
    const matchesSite = [...pgn.matchAll(regexpSite)];

    const mapped = matchesEvent.map((x, i) => {
      return { name: x[1], val: matchesSite[i][1] };
    });

    return mapped;
  },
};

try {
  module.exports = utils;
} catch (error) {
  console.warn('module export failed', error);
}
