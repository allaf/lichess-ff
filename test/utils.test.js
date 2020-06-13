'use strict';

const testData = require('../src/data');
const utils = require('../src/utils');

describe('utils.test.js ', () => {
  test('pieceTranslationToPos', () => {
    let res = utils.pieceTranslationToPos(398.533, testData.pieces1);
    expect(testData.pieces1.length).toBe(32);
    expect(res[0].idx.x).toBe(0);
    expect(res[0].idx.y).toBe(0);

    expect(res[16].idx.x).toBe(3);
    expect(res[16].idx.y).toBe(5);
  });

  test('generate Fen rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR', () => {
    let withIdx = utils.pieceTranslationToPos(398.533, testData.pieces1);
    let fen = utils.piecesIdxToFen(withIdx, 'white');
    let expected = 'rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR';
    expect(fen).toBe(expected);
  });

  test('generate Fen 1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3P2/3B1R2/PP1PP1PP/1NBQK1N1', () => {
    let withIdx = utils.pieceTranslationToPos(401.2, testData.pieces2);
    let fen = utils.piecesIdxToFen(withIdx, 'white');
    let expected =
      '1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3P2/3B1R2/PP1PP1PP/1NBQK1N1';
    expect(fen).toBe(expected);
  });

  test('generate Fen 1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3PN1/3B1R2/PP1PP1PP/1NBQK3', () => {
    let withIdx = utils.pieceTranslationToPos(414.267, testData.pieces3);
    let fen = utils.piecesIdxToFen(withIdx, 'white');
    let expected =
      '1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3PN1/3B1R2/PP1PP1PP/1NBQK3';
    expect(fen).toBe(expected);
  });

  test('generate Fen as black rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR', () => {
    let withIdx = utils.pieceTranslationToPos(469.867, testData.pieces4);
    let fen = utils.piecesIdxToFen(withIdx, 'black');
    let expected = 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR';
    expect(fen).toBe(expected);
  });
});
