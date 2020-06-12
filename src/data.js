// eslint-disable-next-line no-unused-vars
function getDb() {
  return {
    games: [
      {
        name: 'Englund gambit suite',
        fen: 'rnbqkbnr/pppp1ppp/8/4P3/8/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
        url: 'https://youtu.be/tYOnym3ZINU?t=475',
        nextMoves: ['Nc6'],
      },

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
        // eslint-disable-next-line quotes
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
