// eslint-disable-next-line no-unused-vars
const testData = {
  games: [
    {
      name: 'Tennison Gambit (scandi as white)',
      fen: [
        'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
        'rnbqkbnr/ppp1pppp/8/8/4p3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3',
        'rnbqkb1r/ppp1pppp/5n2/6N1/4p3/8/PPPP1PPP/RNBQKB1R w KQkq - 2 4',
        'rnbqkb1r/ppp1pppp/5n2/6N1/8/3p4/PPP2PPP/RNBQKB1R w KQkq - 0 5',
        'rnbqkb1r/ppp1ppp1/5n1p/6N1/8/3B4/PPP2PPP/RNBQK2R w KQkq - 0 6',
        'rnbq1b1r/ppp1pkp1/5n1p/8/8/3B4/PPP2PPP/RNBQK2R w KQ - 0 7',
        'rnbq1b1r/ppp1p1p1/5nkp/8/8/8/PPP2PPP/RNBQK2R w KQ - 0 8',
      ],
      url: 'https://youtu.be/XZtVxicqkAs?t=99',
      nextMoves: ['Nf3', 'Ng5', 'd3', 'Bxd3', 'Nxf7', 'Bg6+', 'Qxd8'],
    },
    {
      name: 'Englund gambit (scandi)',
      fen: [
        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
        'rnbqkbnr/pppp1ppp/8/4P3/8/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2',
        'r1bqkbnr/pppp1ppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R b KQkq - 2 3',
        'r1bqkbnr/pppp1ppp/2n5/4P3/5B2/8/PPP1PPPP/RN1QKBNR b KQkq - 2 3',
        'r1b1kbnr/ppppqppp/2n5/4P3/5B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 4 4',
        'r1b1kbnr/pppp1ppp/2n5/4P3/1q6/5N2/PPPBPPPP/RN1QKB1R b KQkq - 6 5',
        'r1b1kbnr/pppp1ppp/2n5/4P3/8/2B2N2/PqP1PPPP/RN1QKB1R b KQkq - 1 6',
      ],
      url: 'https://youtu.be/tYOnym3ZINU?t=475',
      nextMoves: ['e5', 'Nc6', 'Qe7', 'Qe7', 'Qb4+', 'Qxb2', 'Bb4'],
    },
    {
      name: 'Venus trap',
      fen: ['r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7'],
      url: 'https://youtu.be/L-jTuKWJAG8?t=522',
      nextMoves: ['Kb3'],
    },
    {
      name: 'Mars trap',
      fen: [
        'xxxx w KQkq - 1 7',
        'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
      ],
      url: 'https://youtu.be/L-jTuKWJAG8?t=386',
      nextMoves: ['fake', 'Kb3'],
    },
    {
      name: 'Hercule trap',
      fen: ['r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7'],
      url: 'https://youtu.be/L-jTuKWJAG8?t=67',
      nextMoves: ['Nb3'],
    },
    {
      name: 'Italienne débutant trap',
      fen: [
        'r1bqk2r/pppp1ppp/1bn2n2/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 1',
      ],
      url: 'https://youtu.be/L-jTuKWJAG8?t=16',
      nextMoves: ['dxe'],
    },
    {
      // eslint-disable-next-line quotes
      name: "Legal's trap",
      fen: [
        'r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R w KQkq - 1 6',
        'r2qkbnr/ppp2ppp/2np4/4N3/2B1P3/2N4P/PPPP1PP1/R1BbK2R w KQkq - 1 6',
      ],
      url: 'https://youtu.be/tYOnym3ZINU?t=71',
      nextMoves: ['Nxe5', 'Bxf7+'],
    },
    {
      name: 'Blackburne Shilling Gambit ',
      fen: ['r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4'],
      url: 'https://youtu.be/tYOnym3ZINU?t=126',
      nextMoves: ['Nd4'],
    },
    {
      name: 'Gambit Evans 1 Ba5',
      fen: [
        'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
      ],
      url: 'https://youtu.be/LGAm_8rbeMc?t=205',
      nextMoves: ['b4'],
    },
    {
      name: 'Gambit Evans (piège Bobby Fischer)',
      fen: ['r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R w KQkq - 0 7'],
      url: 'https://youtu.be/rOe8lcOFhCI?t=79',
      nextMoves: ['O-O'],
    },
    {
      name: 'Gambit Evans (piège Fly in the ointment)',
      fen: ['r1b1k1nr/ppppqppp/2n5/b7/2B1P3/1Qp2N2/P4PPP/RNB2RK1 w kq - 2 9'],
      url: 'https://youtu.be/0ha5ggCwA6w?t=53',
      nextMoves: ['Nxc3'],
    },
    {
      name: 'Gambit Evans 2',
      fen: ['r1b1k2r/ppppqppp/2n2n2/b7/2B1P3/1QN2N2/P4PPP/R1B2RK1 w kq - 1 10'],
      url: 'https://youtu.be/WbQ35VtsXys?t=71',
      nextMoves: ['Nd5'],
    },
    {
      name: 'Scandi Rosen Trap',
      fen: ['rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4'],
      url: 'https://youtu.be/6IBDe-f_PCc?t=1764',
      nextMoves: ['b4'],
    },
    {
      name: 'Scandi Rosen Trap2',
      fen: ['rn1qkb1r/ppp1pppp/5n2/3P4/2B3b1/8/PPPP1PPP/RNBQK1NR w KQkq - 3 4'],
      url: 'https://youtu.be/6IBDe-f_PCc?t=1906',
      nextMoves: ['f3'],
    },
    {
      name: '4 knights scotsh',
      fen: [
        'r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5',
      ],
      url: 'https://youtu.be/6IBDe-f_PCc?t=2230',
      nextMoves: ['Nd5'],
    },
    {
      name: 'French, advance, just a pawnMilner-Barry gambit',
      fen: [
        'r2qkbnr/pp1b1ppp/2n1p3/1BppP3/3P4/2P2N2/PP3PPP/RNBQK2R b KQkq - 4 6',
      ],
      url: 'https://youtu.be/6IBDe-f_PCc?t=678',
      nextMoves: ['Nxe5'],
    },
  ],

  pieces1: [
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
  ],

  pieces2: [
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
  ],
  pieces3: [
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
  ],

  pieces4: [
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
  ],
};

try {
  module.exports = testData;
} catch (error) {
  console.warn('module export failed', error);
}
