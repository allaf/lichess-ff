'use strict';

const utils = require('../src/utils');

describe('utils.test.js ', () => {
  test('pieceTranslationToPos', () => {
    let res = utils.pieceTranslationToPos(398.533, pieces1);
    expect(pieces1.length).toBe(32);
    expect(res[0].idx.x).toBe(0);
    expect(res[0].idx.y).toBe(0);

    expect(res[16].idx.x).toBe(3);
    expect(res[16].idx.y).toBe(5);
  });

  test('pieceTranslationToPos 1', () => {
    let withIdx = utils.pieceTranslationToPos(398.533, pieces1);
    let fen = utils.piecesIdxToFen(withIdx, 'white');
    let expected = 'rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR';
    expect(fen).toBe(expected);
  });

  test('pieceTranslationToPos 2', () => {
    let withIdx = utils.pieceTranslationToPos(401.2, pieces2);
    let fen = utils.piecesIdxToFen(withIdx, 'white');
    let expected =
      '1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3P2/3B1R2/PP1PP1PP/1NBQK1N1';
    expect(fen).toBe(expected);
  });

  test('pieceTranslationToPos 3', () => {
    let withIdx = utils.pieceTranslationToPos(414.267, pieces3);
    let fen = utils.piecesIdxToFen(withIdx, 'white');
    let expected =
      '1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3PN1/3B1R2/PP1PP1PP/1NBQK3';
    expect(fen).toBe(expected);
  });

  test('pieceTranslationToPos as black', () => {
    let withIdx = utils.pieceTranslationToPos(469.867, pieces4);
    let fen = utils.piecesIdxToFen(withIdx, 'black');
    let expected = 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR';
    expect(fen).toBe(expected);
  });
});

let pieces4 = [
  {
    color: 'white',
    piece: 'rook',
    x: 0,
    y: 0,
    idx: {
      x: 0,
      y: 0,
    },
  },
  {
    color: 'white',
    piece: 'knight',
    x: 58.7333,
    y: 0,
    idx: {
      x: 1,
      y: 0,
    },
  },
  {
    color: 'white',
    piece: 'bishop',
    x: 117.467,
    y: 0,
    idx: {
      x: 2,
      y: 0,
    },
  },
  {
    color: 'white',
    piece: 'king',
    x: 176.2,
    y: 0,
    idx: {
      x: 3,
      y: 0,
    },
  },
  {
    color: 'white',
    piece: 'queen',
    x: 234.933,
    y: 0,
    idx: {
      x: 4,
      y: 0,
    },
  },
  {
    color: 'white',
    piece: 'bishop',
    x: 293.667,
    y: 0,
    idx: {
      x: 5,
      y: 0,
    },
  },
  {
    color: 'white',
    piece: 'knight',
    x: 352.4,
    y: 0,
    idx: {
      x: 6,
      y: 0,
    },
  },
  {
    color: 'white',
    piece: 'rook',
    x: 411.133,
    y: 0,
    idx: {
      x: 7,
      y: 0,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 0,
    y: 58.7333,
    idx: {
      x: 0,
      y: 1,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 58.7333,
    y: 58.7333,
    idx: {
      x: 1,
      y: 1,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 117.467,
    y: 58.7333,
    idx: {
      x: 2,
      y: 1,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 176.2,
    y: 58.7333,
    idx: {
      x: 3,
      y: 1,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 293.667,
    y: 58.7333,
    idx: {
      x: 5,
      y: 1,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 352.4,
    y: 58.7333,
    idx: {
      x: 6,
      y: 1,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 411.133,
    y: 58.7333,
    idx: {
      x: 7,
      y: 1,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 234.933,
    y: 176.2,
    idx: {
      x: 4,
      y: 3,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 0,
    y: 352.4,
    idx: {
      x: 0,
      y: 6,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 58.7333,
    y: 352.4,
    idx: {
      x: 1,
      y: 6,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 117.467,
    y: 352.4,
    idx: {
      x: 2,
      y: 6,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 176.2,
    y: 352.4,
    idx: {
      x: 3,
      y: 6,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 234.933,
    y: 352.4,
    idx: {
      x: 4,
      y: 6,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 293.667,
    y: 352.4,
    idx: {
      x: 5,
      y: 6,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 352.4,
    y: 352.4,
    idx: {
      x: 6,
      y: 6,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 411.133,
    y: 352.4,
    idx: {
      x: 7,
      y: 6,
    },
  },
  {
    color: 'black',
    piece: 'rook',
    x: 0,
    y: 411.133,
    idx: {
      x: 0,
      y: 7,
    },
  },
  {
    color: 'black',
    piece: 'knight',
    x: 58.7333,
    y: 411.133,
    idx: {
      x: 1,
      y: 7,
    },
  },
  {
    color: 'black',
    piece: 'bishop',
    x: 117.467,
    y: 411.133,
    idx: {
      x: 2,
      y: 7,
    },
  },
  {
    color: 'black',
    piece: 'king',
    x: 176.2,
    y: 411.133,
    idx: {
      x: 3,
      y: 7,
    },
  },
  {
    color: 'black',
    piece: 'queen',
    x: 234.933,
    y: 411.133,
    idx: {
      x: 4,
      y: 7,
    },
  },
  {
    color: 'black',
    piece: 'bishop',
    x: 293.667,
    y: 411.133,
    idx: {
      x: 5,
      y: 7,
    },
  },
  {
    color: 'black',
    piece: 'knight',
    x: 352.4,
    y: 411.133,
    idx: {
      x: 6,
      y: 7,
    },
  },
  {
    color: 'black',
    piece: 'rook',
    x: 411.133,
    y: 411.133,
    idx: {
      x: 7,
      y: 7,
    },
  },
];

let pieces3 = [
  {
    color: 'black',
    piece: 'knight',
    x: 51.7833,
    y: 0,
    idx: {
      x: 1,
      y: 0,
    },
  },
  {
    color: 'black',
    piece: 'queen',
    x: 155.35,
    y: 0,
    idx: {
      x: 3,
      y: 0,
    },
  },
  {
    color: 'black',
    piece: 'bishop',
    x: 258.917,
    y: 0,
    idx: {
      x: 5,
      y: 0,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 0,
    y: 51.7833,
    idx: {
      x: 0,
      y: 1,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 51.7833,
    y: 51.7833,
    idx: {
      x: 1,
      y: 1,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 155.35,
    y: 51.7833,
    idx: {
      x: 3,
      y: 1,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 258.917,
    y: 51.7833,
    idx: {
      x: 5,
      y: 1,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 310.7,
    y: 51.7833,
    idx: {
      x: 6,
      y: 1,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 362.483,
    y: 51.7833,
    idx: {
      x: 7,
      y: 1,
    },
  },
  {
    color: 'black',
    piece: 'bishop',
    x: 51.7833,
    y: 103.567,
    idx: {
      x: 1,
      y: 2,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 103.567,
    y: 103.567,
    idx: {
      x: 2,
      y: 2,
    },
  },
  {
    color: 'black',
    piece: 'king',
    x: 258.917,
    y: 103.567,
    idx: {
      x: 5,
      y: 2,
    },
  },
  {
    color: 'black',
    piece: 'knight',
    x: 362.483,
    y: 103.567,
    idx: {
      x: 7,
      y: 2,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 103.567,
    y: 155.35,
    idx: {
      x: 2,
      y: 3,
    },
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 207.133,
    y: 155.35,
    idx: {
      x: 4,
      y: 3,
    },
  },
  {
    color: 'black',
    piece: 'rook',
    x: 51.7833,
    y: 207.133,
    idx: {
      x: 1,
      y: 4,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 258.917,
    y: 207.133,
    idx: {
      x: 5,
      y: 4,
    },
  },
  {
    color: 'white',
    piece: 'knight',
    x: 310.7,
    y: 207.133,
    idx: {
      x: 6,
      y: 4,
    },
  },
  {
    color: 'white',
    piece: 'bishop',
    x: 155.35,
    y: 258.917,
    idx: {
      x: 3,
      y: 5,
    },
  },
  {
    color: 'white',
    piece: 'rook',
    x: 258.917,
    y: 258.917,
    idx: {
      x: 5,
      y: 5,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 0,
    y: 310.7,
    idx: {
      x: 0,
      y: 6,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 51.7833,
    y: 310.7,
    idx: {
      x: 1,
      y: 6,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 155.35,
    y: 310.7,
    idx: {
      x: 3,
      y: 6,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 207.133,
    y: 310.7,
    idx: {
      x: 4,
      y: 6,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 310.7,
    y: 310.7,
    idx: {
      x: 6,
      y: 6,
    },
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 362.483,
    y: 310.7,
    idx: {
      x: 7,
      y: 6,
    },
  },
  {
    color: 'white',
    piece: 'knight',
    x: 51.7833,
    y: 362.483,
    idx: {
      x: 1,
      y: 7,
    },
  },
  {
    color: 'white',
    piece: 'bishop',
    x: 103.567,
    y: 362.483,
    idx: {
      x: 2,
      y: 7,
    },
  },
  {
    color: 'white',
    piece: 'queen',
    x: 155.35,
    y: 362.483,
    idx: {
      x: 3,
      y: 7,
    },
  },
  {
    color: 'white',
    piece: 'king',
    x: 207.133,
    y: 362.483,
    idx: {
      x: 4,
      y: 7,
    },
  },
];

let pieces2 = [
  {
    color: 'black',
    piece: 'knight',
    x: 50.15,
    y: 0,
  },
  {
    color: 'black',
    piece: 'queen',
    x: 150.45,
    y: 0,
  },
  {
    color: 'black',
    piece: 'bishop',
    x: 250.75,
    y: 0,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 0,
    y: 50.15,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 50.15,
    y: 50.15,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 150.45,
    y: 50.15,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 250.75,
    y: 50.15,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 300.9,
    y: 50.15,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 351.05,
    y: 50.15,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 0,
    y: 300.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 50.15,
    y: 300.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 150.45,
    y: 300.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 200.6,
    y: 300.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 300.9,
    y: 300.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 351.05,
    y: 300.9,
  },
  {
    color: 'white',
    piece: 'knight',
    x: 50.15,
    y: 351.05,
  },
  {
    color: 'white',
    piece: 'bishop',
    x: 100.3,
    y: 351.05,
  },
  {
    color: 'white',
    piece: 'queen',
    x: 150.45,
    y: 351.05,
  },
  {
    color: 'white',
    piece: 'king',
    x: 200.6,
    y: 351.05,
  },
  {
    color: 'white',
    piece: 'knight',
    x: 300.9,
    y: 351.05,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 100.3,
    y: 150.45,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 250.75,
    y: 200.6,
  },
  {
    color: 'white',
    piece: 'bishop',
    x: 150.45,
    y: 250.75,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 200.6,
    y: 150.45,
  },
  {
    color: 'black',
    piece: 'bishop',
    x: 50.15,
    y: 100.3,
  },
  {
    color: 'black',
    piece: 'king',
    x: 250.75,
    y: 100.3,
  },
  {
    color: 'black',
    piece: 'knight',
    x: 351.05,
    y: 100.3,
  },
  {
    color: 'black',
    piece: 'rook',
    x: 50.15,
    y: 200.6,
  },
  {
    color: 'white',
    piece: 'rook',
    x: 250.75,
    y: 250.75,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 100.3,
    y: 100.3,
  },
];

let pieces1 = [
  {
    color: 'black',
    piece: 'rook',
    x: 0,
    y: 0,
  },
  {
    color: 'black',
    piece: 'knight',
    x: 49.8167,
    y: 0,
  },
  {
    color: 'black',
    piece: 'bishop',
    x: 99.6333,
    y: 0,
  },
  {
    color: 'black',
    piece: 'queen',
    x: 149.45,
    y: 0,
  },
  {
    color: 'black',
    piece: 'king',
    x: 199.267,
    y: 0,
  },
  {
    color: 'black',
    piece: 'bishop',
    x: 249.083,
    y: 0,
  },
  {
    color: 'black',
    piece: 'knight',
    x: 298.9,
    y: 0,
  },
  {
    color: 'black',
    piece: 'rook',
    x: 348.717,
    y: 0,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 0,
    y: 49.8167,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 49.8167,
    y: 49.8167,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 99.6333,
    y: 49.8167,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 149.45,
    y: 49.8167,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 199.267,
    y: 49.8167,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 249.083,
    y: 49.8167,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 298.9,
    y: 49.8167,
  },
  {
    color: 'black',
    piece: 'pawn',
    x: 348.717,
    y: 49.8167,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 149.45,
    y: 249.083,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 0,
    y: 298.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 49.8167,
    y: 298.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 99.6333,
    y: 298.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 199.267,
    y: 298.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 249.083,
    y: 298.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 298.9,
    y: 298.9,
  },
  {
    color: 'white',
    piece: 'pawn',
    x: 348.717,
    y: 298.9,
  },
  {
    color: 'white',
    piece: 'rook',
    x: 0,
    y: 348.717,
  },
  {
    color: 'white',
    piece: 'knight',
    x: 49.8167,
    y: 348.717,
  },
  {
    color: 'white',
    piece: 'bishop',
    x: 99.6333,
    y: 348.717,
  },
  {
    color: 'white',
    piece: 'queen',
    x: 149.45,
    y: 348.717,
  },
  {
    color: 'white',
    piece: 'king',
    x: 199.267,
    y: 348.717,
  },
  {
    color: 'white',
    piece: 'bishop',
    x: 249.083,
    y: 348.717,
  },
  {
    color: 'white',
    piece: 'knight',
    x: 298.9,
    y: 348.717,
  },
  {
    color: 'white',
    piece: 'rook',
    x: 348.717,
    y: 348.717,
  },
];
