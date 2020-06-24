'use strict';

const testData = require('./data');
const utils = require('../src/utils');
const { games } = require('./data');

describe('utils.test.js ', () => {
  it('Should check isOnAnalysisPage()', () => {
    expect(
      utils.isOnAnalysisPage('https://mail.google.com/mail/u/0/#inbox')
    ).toBeFalsy();
    expect(
      utils.isOnAnalysisPage('https://mail.google.com/analysis')
    ).toBeFalsy();
    expect(utils.isOnAnalysisPage('https://lichess.org/ePK1JEZ6')).toBeFalsy();

    expect(utils.isOnAnalysisPage('https://lichess.org/analysis')).toBeTruthy();
    expect(
      utils.isOnAnalysisPage('https://lichess.org/analysis/kingOfTheHill')
    ).toBeTruthy();
    expect(
      utils.isOnAnalysisPage('https://lichess.org/analysis/horde')
    ).toBeTruthy();
    expect(
      utils.isOnAnalysisPage('https://lichess.org/analysis/standard#1')
    ).toBeTruthy();
  });

  it('pieceTranslationToPos', () => {
    let res = utils.pieceTranslationToPos(398.533, testData.pieces1);

    expect(testData.pieces1.length).toBe(32);
    expect(res[0].idx.x).toBe(0);
    expect(res[0].idx.y).toBe(0);
    expect(res[16].idx.x).toBe(3);
    expect(res[16].idx.y).toBe(5);
  });

  it('generate Fen rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR', () => {
    let withIdx = utils.pieceTranslationToPos(398.533, testData.pieces1);
    let fen = utils.piecesIdxToFen(withIdx, 'white');
    let expected = 'rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR';

    expect(fen).toBe(expected);
  });

  it('generate Fen 1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3P2/3B1R2/PP1PP1PP/1NBQK1N1', () => {
    let withIdx = utils.pieceTranslationToPos(401.2, testData.pieces2);
    let fen = utils.piecesIdxToFen(withIdx, 'white');
    let expected =
      '1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3P2/3B1R2/PP1PP1PP/1NBQK1N1';
    expect(fen).toBe(expected);
  });

  it('generate Fen 1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3PN1/3B1R2/PP1PP1PP/1NBQK3', () => {
    let withIdx = utils.pieceTranslationToPos(414.267, testData.pieces3);
    let fen = utils.piecesIdxToFen(withIdx, 'white');

    let expected =
      '1n1q1b2/pp1p1ppp/1bp2k1n/2P1p3/1r3PN1/3B1R2/PP1PP1PP/1NBQK3';
    expect(fen).toBe(expected);
  });

  it('generate Fen as black rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR', () => {
    let withIdx = utils.pieceTranslationToPos(469.867, testData.pieces4);
    let fen = utils.piecesIdxToFen(withIdx, 'black');
    let expected = 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR';

    expect(fen).toBe(expected);
  });

  // 286.133 pieces5
  it('generate Fen simple fen', () => {
    let withIdx = utils.pieceTranslationToPos(286.133, testData.pieces5);
    let fen = utils.piecesIdxToFen(withIdx, 'white');
    let expected = 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR';

    expect(fen).toBe(expected);
  });

  it('Should fetchTips as white', () => {
    let currentGame = {
      fen: 'r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R',
      color: 'white',
      variant: { name: 'Standard' },
    };

    let res = utils.fetchTips(currentGame, testData);

    expect(res.length).toBe(1);
    expect(res[0].name).toBe("Legal's trap");
  });

  it('Should fetchTips as black, mutliple fens', () => {
    let currentGame = {
      fen: 'r1b1kbnr/ppppqppp/2n5/4P3/5B2/5N2/PPP1PPPP/RN1QKB1R',
      color: 'black',
      variant: { name: 'Standard' },
    };

    let res = utils.fetchTips(currentGame, testData);

    expect(res.length).toBe(1);
    expect(res[0].name).toBe('Englund gambit (scandi)');
  });

  it('Should getListLinks with pos in line', () => {
    let tips = testData.games.filter(
      (t) => t.url === 'https://youtu.be/tYOnym3ZINU?t=475'
    );
    tips = utils.getListLinks(tips, tips[0].positions[4].fen.split(' ')[0]);

    expect(tips.length).toBe(1);
    expect(tips[0]).toBe(
      '<li><span class="tip-move">Qb4+</span> : <a target="_blank" href="https://youtu.be/tYOnym3ZINU?t=475">Englund gambit (scandi)</a></li>'
    );
  });

  it('Should getListLinks with multiple tips', () => {
    let tips = testData.games.filter(
      (t) =>
        t.positions.filter(
          (x) =>
            x.fen ===
            'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7'
        ).length
    );
    let links = utils.getListLinks(
      tips,
      'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R'
    );

    expect(tips.length).toBe(3);
    expect(links[0]).toBe(
      '<li><span class="tip-move">Nc3</span> : <a target="_blank" href="https://youtu.be/L-jTuKWJAG8?t=522">Venus trap</a></li>'
    );
    expect(links[1]).toBe(
      '<li><span class="tip-move">Nc3</span> : <a target="_blank" href="https://youtu.be/L-jTuKWJAG8?t=386">Mars trap</a></li>'
    );
    expect(links[2]).toBe(
      '<li><span class="tip-move">Nc3</span> : <a target="_blank" href="https://youtu.be/L-jTuKWJAG8?t=67">Hercule trap</a></li>'
    );
  });

  it('Study pgn parse chapter', () => {
    let res = utils.parseChapters(testData.studyPgn);
    expect(res).toEqual([
      {
        name: 'Introduction',
        val: 'https://lichess.org/study/nsIdXAP4/dTh2YVca',
      },
      {
        name: 'Kostic trap',
        val: 'https://lichess.org/study/nsIdXAP4/pcltmSpW',
      },
      {
        name: 'Fishing Pole trap',
        val: 'https://lichess.org/study/nsIdXAP4/HDfsRKmI',
      },
      {
        name: 'Center Game Trap 2: Black',
        val: 'https://lichess.org/study/nsIdXAP4/SqyV0896',
      },
    ]);
  });
});
