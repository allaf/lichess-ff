const testData = {
  games: [
    {
      id: 'dev',
      name: 'dev tip',
      fen: [],
      url: 'xxx',
      nextMoves: [],
      variant: 'Standard',
    },
    {
      id: 'kostic',
      name: 'Kostic trap',
      fen: [
        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
        'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
        'r1b1kbnr/pppp1Npp/8/6q1/2BnP3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5',
        'r1b1kbnr/pppp1Npp/8/8/2BnP3/8/PPPP1PqP/RNBQKR2 b Qkq - 1 6',
      ],
      url: 'https://lichess.org/study/nsIdXAP4',
      nextMoves: ['e5', 'Nc6', 'Nd4', 'Qxg2', 'Qxe4+'],
      variant: 'Standard',
    },
    {
      id: 'tenisson',
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
      variant: 'Standard',
    },
    {
      id: 'englund',
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
      variant: 'Standard',
    },
    {
      variant: 'Standard',
      id: 'venus',
      name: 'Venus trap',
      fen: [
        'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5',
        'r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6',
        'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
        'r1bqk2r/pppp1ppp/2n5/8/1bBPn3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 8',
        'r1bqk2r/pppp1ppp/2n5/8/2BPn3/2b2N2/PP3PPP/R1BQ1RK1 w kq - 0 9',
        'r1bqk2r/pppp1ppp/8/3Pn3/2B1n3/2b2N2/PP3PPP/R1BQ1RK1 w kq - 1 10',
        'r1bqk2r/pppp1ppp/8/3P4/2n1n3/2P2N2/P4PPP/R1BQ1RK1 w kq - 0 11',
        'r1bqk2r/pppp1ppp/3n4/3P4/2nQ4/2P2N2/P4PPP/R1B2RK1 w kq - 2 12',
        'r1bqkr2/pppp1pQp/3n4/3P4/2n5/2P2N2/P4PPP/R1B2RK1 w q - 1 13',
        'r1b1kr2/ppppqpQp/3n4/3P4/2n5/2P2N2/P4PPP/R1B1R1K1 w q - 3 14',
        'r1b2r2/ppppkpQp/3n4/3P4/2n5/2P2N2/P4PPP/R1B3K1 w - - 0 15',
        'r1b1kr2/pppp1pQp/3n4/3P2B1/2n5/2P2N2/P4PPP/R5K1 w - - 2 16',
      ],
      url: 'https://youtu.be/L-jTuKWJAG8?t=522',
      nextMoves: [
        'd4',
        'cxd4',
        'Nc3',
        'O-O',
        'd5',
        'bxc3',
        'Qd4',
        'Qwg7',
        'Re1+',
        'Rxe7+',
        'Bg5+',
        'Re1+',
      ],
    },
    {
      variant: 'Standard',
      id: 'mars',
      name: 'Mars trap',
      fen: [
        'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5',
        'r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6',
        'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
        'r1bqk2r/pppp1ppp/2n5/8/1bBPn3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 8',
        'r1bqk2r/pppp1ppp/2n5/8/1bBP4/2n2N2/PP3PPP/R1BQ1RK1 w kq - 0 9',
        'r1bqk2r/ppppbppp/2n5/8/2BP4/2P2N2/P4PPP/R1BQ1RK1 w kq - 1 10',
        'r1bqk2r/ppppbppp/8/n2P4/2B5/2P2N2/P4PPP/R1BQ1RK1 w kq - 1 11',
        'r1bqk2r/pppp1ppp/3b4/n7/2B5/2P2N2/P4PPP/R1BQ1RK1 w kq - 0 12',
        'r1bqk2r/ppppbppp/8/n7/2B5/2P2N2/P4PPP/R1BQR1K1 w kq - 2 13',
        'r1bqk2r/ppppb1pp/5p2/n5B1/2B5/2P2N2/P4PPP/R2QR1K1 w kq - 0 14',
        'r1bqk2r/ppppb2p/5p2/n7/2B5/2P2N2/P4PPP/R2QR1K1 w kq - 0 15',
        'r1bqk2r/ppppb2p/8/n3p3/2B5/2P5/P4PPP/R2QR1K1 w kq - 0 16',
        'r1bq1k1r/ppppb2p/8/n3p2Q/2B5/2P5/P4PPP/R3R1K1 w - - 2 17',
      ],
      url: 'https://youtu.be/L-jTuKWJAG8?t=386',
      nextMoves: [
        'd4',
        'cxd4',
        'Nc3',
        'O-O',
        'bxc3',
        'd5',
        'd6',
        'Re1+',
        'Bg5',
        'Bxf6',
        'Ne5',
        'Qh5+',
        'Qf7#',
      ],
    },
    {
      variant: 'Standard',
      id: 'hercule',
      name: 'Hercule trap',
      fen: [
        'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5',
        'r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6',
        'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
        'r1bqk2r/pppp1ppp/2n5/8/1bBPn3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 8',
        'r1bqk2r/pppp1ppp/2n5/8/1bBP4/2n2N2/PP3PPP/R1BQ1RK1 w kq - 0 9',
        'r1bqk2r/pppp1ppp/2n5/8/2BP4/2b2N2/P4PPP/R1BQ1RK1 w kq - 0 10',
        'r1bqk2r/pppp1ppp/2n5/8/2BP4/1Q3N2/P4PPP/b1B2RK1 w kq - 0 11',
        'r1bq1k1r/pppp1Bpp/2n5/8/3P4/1Q3N2/P4PPP/b1B2RK1 w - - 1 12',
        'r1bq1k1r/ppppnBpp/8/6B1/3P4/1Q3N2/P4PPP/b4RK1 w - - 3 13',
        'r1bq1k1r/ppp1nBpp/3p4/6B1/3P4/1Q3N2/P4PPP/b3R1K1 w - - 0 14',
        'r1b2k1r/ppp1qBpp/3p4/8/3P4/1Q3N2/P4PPP/b3R1K1 w - - 0 15',
        'r1b4r/ppp1kBpp/3p4/8/3P4/1Q3N2/P4PPP/b5K1 w - - 0 16',
        'r1bk2Br/ppp3pp/3p4/8/3P4/1Q3N2/P4PPP/b5K1 w - - 2 17',

        'r1bk2Br/pp3Qpp/2pp4/8/3P4/5N2/P4PPP/b5K1 w - - 0 18',
        'r1bk2Br/pp3Qpp/3p4/2p5/3P4/5N2/P4PPP/b5K1 w - - 0 18',

        'r1b2QBr/ppk3pp/2pp4/8/3P4/5N2/P4PPP/b5K1 w - - 2 19',
        'r1b2QBr/ppk3pp/3p4/2p5/3P4/5N2/P4PPP/b5K1 w - - 2 19',
      ],
      url: 'https://youtu.be/L-jTuKWJAG8?t=67',
      nextMoves: [
        'd4',
        'cxd4',
        'Nc3',
        'O-O',
        'bxc3',
        'Qb3',
        'Bxf7+',
        'bg5',
        'Re1',
        'Bxe7+',
        'Rxe7',
        'Bg8',
        'Qf7',
        'Qf8+',
        'Qf8+',
        'Qxg7+',
        'Qxg7+',
      ],
    },
    {
      variant: 'Standard',
      id: 'it1',
      name: 'Italienne débutant trap',
      fen: [
        'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5',
        'r1bqk2r/pppp1ppp/1bn2n2/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 6',
        'r1bqk2r/pppp1ppp/1bn5/4P3/2B1n3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 7',
      ],
      url: 'https://youtu.be/L-jTuKWJAG8?t=16',
      nextMoves: ['d4', 'dxe', 'Qd5'],
    },
    {
      variant: 'Standard',
      id: 'legal',
      // eslint-disable-next-line quotes
      name: "Legal's trap",
      fen: [
        'r2qkbnr/ppp2ppp/2np4/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 5 4',
        'r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R w KQkq - 1 6',
        'r2qkbnr/ppp2ppp/2np4/4N3/2B1P3/2N4P/PPPP1PP1/R1BbK2R w KQkq - 1 6',
      ],
      url: 'https://youtu.be/tYOnym3ZINU?t=71',
      nextMoves: ['h3', 'Nxe5', 'Bxf7+'],
    },
    {
      variant: 'Standard',
      id: 'bsg',
      name: 'Blackburne Shilling Gambit ',
      fen: ['r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4'],
      url: 'https://youtu.be/tYOnym3ZINU?t=126',
      nextMoves: ['Nd4'],
    },
    {
      variant: 'Standard',
      id: 'gevans1',
      name: 'Gambit Evans 1 Ba5',
      fen: [
        'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
      ],
      url: 'https://youtu.be/LGAm_8rbeMc?t=205',
      nextMoves: ['b4'],
    },
    {
      variant: 'Standard',
      id: 'gevans2',
      name: 'Gambit Evans 2',
      fen: ['r1b1k2r/ppppqppp/2n2n2/b7/2B1P3/1QN2N2/P4PPP/R1B2RK1 w kq - 1 10'],
      url: 'https://youtu.be/WbQ35VtsXys?t=71',
      nextMoves: ['Nd5'],
    },
    {
      variant: 'Standard',
      id: 'gevans3',
      name: 'Gambit Evans (piège Bobby Fischer)',
      fen: ['r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R w KQkq - 0 7'],
      url: 'https://youtu.be/rOe8lcOFhCI?t=79',
      nextMoves: ['O-O'],
    },
    {
      variant: 'Standard',
      id: 'gevans4',
      name: 'Gambit Evans (piège Fly in the ointment)',
      fen: ['r1b1k1nr/ppppqppp/2n5/b7/2B1P3/1Qp2N2/P4PPP/RNB2RK1 w kq - 2 9'],
      url: 'https://youtu.be/0ha5ggCwA6w?t=53',
      nextMoves: ['Nxc3'],
    },

    {
      variant: 'Standard',
      id: 'rosen1',
      name: 'Scandi Rosen Trap',
      fen: ['rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4'],
      url: 'https://youtu.be/6IBDe-f_PCc?t=1764',
      nextMoves: ['b4'],
    },
    {
      variant: 'Standard',
      id: 'rosen2',
      name: 'Scandi Rosen Trap2',
      fen: ['rn1qkb1r/ppp1pppp/5n2/3P4/2B3b1/8/PPPP1PPP/RNBQK1NR w KQkq - 3 4'],
      url: 'https://youtu.be/6IBDe-f_PCc?t=1906',
      nextMoves: ['f3'],
    },
    {
      variant: 'Standard',
      id: '4n',
      name: '4 knights scotsh',
      fen: [
        'r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5',
      ],
      url: 'https://youtu.be/6IBDe-f_PCc?t=2230',
      nextMoves: ['Nd5'],
    },
    {
      variant: 'Standard',
      id: 'milnerbarry',
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

  pieces5: [
    {
      color: 'black',
      piece: 'rook',
      x: 0,
      y: 0,
    },
    {
      color: 'black',
      piece: 'knight',
      x: 35.7667,
      y: 0,
    },
    {
      color: 'black',
      piece: 'bishop',
      x: 71.5333,
      y: 0,
    },
    {
      color: 'black',
      piece: 'queen',
      x: 107.3,
      y: 0,
    },
    {
      color: 'black',
      piece: 'king',
      x: 143.067,
      y: 0,
    },
    {
      color: 'black',
      piece: 'bishop',
      x: 178.833,
      y: 0,
    },
    {
      color: 'black',
      piece: 'knight',
      x: 214.6,
      y: 0,
    },
    {
      color: 'black',
      piece: 'rook',
      x: 250.367,
      y: 0,
    },
    {
      color: 'black',
      piece: 'pawn',
      x: 0,
      y: 35.7667,
    },
    {
      color: 'black',
      piece: 'pawn',
      x: 35.7667,
      y: 35.7667,
    },
    {
      color: 'black',
      piece: 'pawn',
      x: 71.5333,
      y: 35.7667,
    },
    {
      color: 'black',
      piece: 'pawn',
      x: 107.3,
      y: 35.7667,
    },
    {
      color: 'black',
      piece: 'pawn',
      x: 178.833,
      y: 35.7667,
    },
    {
      color: 'black',
      piece: 'pawn',
      x: 214.6,
      y: 35.7667,
    },
    {
      color: 'black',
      piece: 'pawn',
      x: 250.367,
      y: 35.7667,
    },
    {
      color: 'white',
      piece: 'pawn',
      x: 0,
      y: 214.6,
    },
    {
      color: 'white',
      piece: 'pawn',
      x: 35.7667,
      y: 214.6,
    },
    {
      color: 'white',
      piece: 'pawn',
      x: 71.5333,
      y: 214.6,
    },
    {
      color: 'white',
      piece: 'pawn',
      x: 107.3,
      y: 214.6,
    },
    {
      color: 'white',
      piece: 'pawn',
      x: 178.833,
      y: 214.6,
    },
    {
      color: 'white',
      piece: 'pawn',
      x: 214.6,
      y: 214.6,
    },
    {
      color: 'white',
      piece: 'pawn',
      x: 250.367,
      y: 214.6,
    },
    {
      color: 'white',
      piece: 'rook',
      x: 0,
      y: 250.367,
    },
    {
      color: 'white',
      piece: 'knight',
      x: 35.7667,
      y: 250.367,
    },
    {
      color: 'white',
      piece: 'bishop',
      x: 71.5333,
      y: 250.367,
    },
    {
      color: 'white',
      piece: 'queen',
      x: 107.3,
      y: 250.367,
    },
    {
      color: 'white',
      piece: 'king',
      x: 143.067,
      y: 250.367,
    },
    {
      color: 'white',
      piece: 'bishop',
      x: 178.833,
      y: 250.367,
    },
    {
      color: 'white',
      piece: 'knight',
      x: 214.6,
      y: 250.367,
    },
    {
      color: 'white',
      piece: 'rook',
      x: 250.367,
      y: 250.367,
    },
    {
      color: 'white',
      piece: 'pawn',
      x: 143.067,
      y: 143.067,
    },
    {
      color: 'black',
      piece: 'pawn',
      x: 143.067,
      y: 107.3,
    },
  ],

  studyPgn: `[Event "🍄 Best Opening Traps 2020 🍄: Introduction"]
  [Site "https://lichess.org/study/nsIdXAP4/dTh2YVca"]
  [Result "*"]
  [UTCDate "2020.05.30"]
  [UTCTime "08:26:39"]
  [Variant "Standard"]
  [ECO "?"]
  [Opening "?"]
  [Annotator "https://lichess.org/@/SuperChessBud"]
  
  { Hello all and Welcome to the another study of best opening traps, but today I am making study for year 2020. As I said I will make serie of Opening trap studies with games and fun and cool traps. I hope you will enjoy and you will click following heart button under the h1 square. You can see the first study from last year: https://lichess.org/study/OcvooNXz 1046 likes on that study, thanks everybody!!!! }
   *
  
  
  [Event "🍄 Best Opening Traps 2020 🍄: Kostic trap"]
  [Site "https://lichess.org/study/nsIdXAP4/pcltmSpW"]
  [Result "*"]
  [UTCDate "2020.05.30"]
  [UTCTime "08:31:07"]
  [Variant "Standard"]
  [ECO "C50"]
  [Opening "Italian Game: Schilling-Kostic Gambit"]
  [Annotator "https://lichess.org/@/SuperChessBud"]
  
  { First we are going to see one of the most popular traps called: Kostic Trap }
  1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. Nxe5? Qg5 { [%csl Rg2,Re5][%cal Rg5e5,Rg5g2] } 5. Nxf7?? { Looks like white has double attack, but he was losing the queen. } (5. Bxf7+ $17 { Better move, but black was still better }) 5... Qxg2 { [%cal Rg2h1,Rg2e4] } 6. Rf1 Qxe4+ { And king was trapped and white has to give queen. } { [%csl Re1] } 7. Qe2 (7. Be2 Nf3# { On Be2 there was fantastical mate. } { [%csl Re1,Re2,Rd1,Rf1,Rf2,Rd2][%cal Re4e1,Rf3e1] }) *
  
  
  [Event "Rated Bullet game"]
  [Site "https://lichess.org/DHrycp1Y"]
  [Date "2020.05.29"]
  [Round "-"]
  [White "PegaRei"]
  [Black "keywest"]
  [Result "0-1"]
  [WhiteElo "1637"]
  [BlackElo "1590"]
  [TimeControl "60+0"]
  [Termination "Normal"]
  [UTCDate "2020.05.30"]
  [UTCTime "08:36:41"]
  [Variant "Standard"]
  [ECO "C50"]
  [Opening "Blackburne Shilling Gambit"]
  [Annotator "https://lichess.org/@/SuperChessBud"]
  
  1. e4 { [%clk 0:01:00] } e5 { [%clk 0:01:00] } 2. Nf3 { [%clk 0:00:58] } Nc6 { [%clk 0:01:00] } 3. Bc4 { [%clk 0:00:58] } Nd4 { [%clk 0:00:59] } 4. Nxe5 { [%clk 0:00:56] } Qg5 { [%clk 0:00:58] } 5. Nxf7 { [%clk 0:00:52] } (5. Bxf7+ Kd8 6. O-O Qxe5 7. c3 Ne6 8. Bxe6 Qxe6) 5... Qxg2 { [%clk 0:00:56] } 6. Rf1 { [%clk 0:00:51] } Qxe4+ { [%clk 0:00:55] } 7. Be2 { [%clk 0:00:50] } Nf3# { 0-1 Black wins by checkmate. } { [%clk 0:00:54] } 0-1
  
  
  [Event "🍄 Best Opening Traps 2020 🍄: Fishing Pole trap"]
  [Site "https://lichess.org/study/nsIdXAP4/HDfsRKmI"]
  [Result "*"]
  [UTCDate "2020.05.30"]
  [UTCTime "08:37:40"]
  [Variant "Standard"]
  [ECO "C65"]
  [Opening "Ruy Lopez: Berlin Defense, Fishing Pole Variation"]
  [Annotator "https://lichess.org/@/SuperChessBud"]
  
  { There was a popular trap in Ruy Lopez! }
  1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Ng4 5. h3 h5 6. hxg4?? hxg4 7. Ne1?? Qh4 8. f4 g3 9. Qh5 Rxh5 10. a3 { [%csl Rg1,Gg3,Gh5,Gh4,Rf1,Re1,Rg2][%cal Gh4h2,Gh4h1] } 10... Qh1# *
  
  
  [Event "Rated Rapid game"]
  [Site "https://lichess.org/3dcBXd3F"]
  [Date "2017.02.26"]
  [Round "-"]
  [White "Nikola89"]
  [Black "Ocdman"]
  [Result "0-1"]
  [WhiteElo "1950"]
  [BlackElo "1869"]
  [TimeControl "600+0"]
  [Termination "Normal"]
  [UTCDate "2020.05.30"]
  [UTCTime "08:40:39"]
  [Variant "Standard"]
  [ECO "C65"]
  [Opening "Ruy Lopez: Berlin Defense, Fishing Pole Variation"]
  [Annotator "https://lichess.org/@/SuperChessBud"]
  
  1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Ng4 5. h3 h5 6. hxg4 hxg4 7. Ne1 Qh4 8. f4 g3 { 0-1 White resigns. } 0-1


  [Event "🍄 Best Opening Traps 2020 🍄: Center Game Trap 2: Black"]
  [Site "https://lichess.org/study/nsIdXAP4/SqyV0896"]
  [Result "*"]
  [UTCDate "2020.06.01"]
  [UTCTime "10:42:47"]
  [Variant "Standard"]
  [ECO "C22"]
  [Opening "Center Game: Berger Variation"]
  [Annotator "https://lichess.org/@/SuperChessBud"]
  
  1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 Nf6 5. Bc4 Ne5 6. Bb3 Bb4+ 7. c3? (7. Bd2 $10) 7... Bc5 8. Qxc5?? (8. Qg3?? Bxf2+! 9. Qxf2 (9. Kxf2 Nxe4+ 10. Ke2 Nxg3+ 11. hxg3) 9... Nd3+ 10. Ke2 Nxf2 11. Kxf2) 8... Nd3+! 9. Kf1 Nxc5 *
  `,
};

try {
  module.exports = testData;
} catch (error) {
  console.warn('module export failed', error);
}
