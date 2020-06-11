var utils = {
  executeScripts: (tabId, injectDetailsArray) => {
    function createCallback(tabId, injectDetails, innerCallback) {
      return function () {
        browser.tabs.executeScript(tabId, injectDetails, innerCallback);
      };
    }
    var callback = null;
    for (var i = injectDetailsArray.length - 1; i >= 0; --i)
      callback = createCallback(tabId, injectDetailsArray[i], callback);
    if (callback !== null) callback(); // execute outermost function
  },

  calcIndex: (width, x) => {
    let unit = width / 8;
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
      let hIdx = utils.calcIndex(width, p.x);
      let vIdx = utils.calcIndex(width, p.y);
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

  piecesIdxToFen(pieces, color = 'white') {
    var board = [];
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
        let p = board[i][j];

        if (j === 7 && !p) {
          fen += count + 1;
          count = 0;
        }

        if (p) {
          if (count) {
            fen += count;
            count = 0;
          }
          fen += this.pieceToFen(p);
        } else {
          count++;
        }
      }
    }
    return color === 'black' ? fen.split('').reverse().join('') : fen;
  },
};

// uncomment to test with jest
// module.exports = utils;
