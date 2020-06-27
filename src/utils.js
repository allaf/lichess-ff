var utils = {
  isOnAnalysisPage: (url) => {
    return url.match(/https:\/\/.*lichess\.org\/analysis/);
  },

  fetchTips: (currentGame, db) => {
    return db.games.filter(
      (game) =>
        currentGame.variant.name === game.variant &&
        game.positions.filter(
          (pos) =>
            pos.fen.split(' ')[0] === currentGame.fen &&
            pos.fen.split(' ')[1] === currentGame.color.substr(0, 1)
        ).length
    );
  },

  extractTitle: (pgn) => {
    const regexpEvent = /\[Event "[^:]*: (.*)"\]/gm;
    return regexpEvent.exec(pgn)[1];
  },

  tipTuple: (tip, gameFen) => {
    const posIdx = tip.positions.findIndex(
      (p) => p.fen.split(' ')[0] === gameFen
    );
    return { url: tip.url, move: tip.positions[posIdx].move, name: tip.name };
  },

  tupleToHtml: (tuple) => {
    return `<li><span class="tip-move">${tuple.move}</span> : <a target="_blank" href="${tuple.url}">${tuple.name}</a></li>`;
  },

  getSortedTuples: (tips, gameFen) =>
    tips
      .map((t) => utils.tipTuple(t, gameFen))
      .sort((x, y) => (x.move === y.move ? x.name > y.name : x.move > y.move)),

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
    return pgn
      .split('[Event')
      .map((event) => {
        event = event.replace(/\[Opening.*/g, '');
        const regexpEvent = /.*"[^:]*: (.*)"\][\s\S]+?1\.\s/m;
        const regexpSite = /\[Site "(https:\/\/lichess\.org\/study\/.*)"]/gm;
        const siteFound = regexpSite.exec(event);
        const found = regexpEvent.exec(event);
        return found ? { name: found[1], val: siteFound[1] } : null;
      })
      .filter((x) => !!x);
  },

  squareNameToPxCoord: (square, boardWidth, color) => {
    const unit = boardWidth / 8;
    let col, line;
    if (color === 'white') {
      col = square.substr(0, 1).charCodeAt(0) - 96 - 1;
      line = 8 - Number(square.substr(1, 1));
    } else if (color === 'black') {
      col = 8 - (square.substr(0, 1).charCodeAt(0) - 96);
      line = Number(square.substr(1, 1)) - 1;
    }
    return { x: col * unit, y: line * unit };
  },
};

try {
  module.exports = utils;
} catch (error) {
  console.warn('module export failed', error);
}
