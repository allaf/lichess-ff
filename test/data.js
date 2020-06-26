const testData = {
  games: [
    {
      id: 'kostic',
      name: 'Kostic trap',
      url: 'https://lichess.org/study/nsIdXAP4',
      variant: 'Standard',
      positions: [
        {
          fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
          move: 'e5',
        },
        {
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
          move: 'Nc6',
        },
        {
          fen:
            'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
          move: 'Nd4',
        },
        {
          fen: 'r1b1kbnr/pppp1Npp/8/6q1/2BnP3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5',
          move: 'Qxg2',
        },
        {
          fen: 'r1b1kbnr/pppp1Npp/8/8/2BnP3/8/PPPP1PqP/RNBQKR2 b Qkq - 1 6',
          move: 'Qxe4+',
        },
      ],
    },
    {
      id: 'tenisson',
      name: 'Tennison Gambit (scandi as white)',
      url: 'https://youtu.be/XZtVxicqkAs?t=99',
      variant: 'Standard',
      positions: [
        {
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          move: 'Nf3',
        },
        {
          fen: 'rnbqkbnr/ppp1pppp/8/8/4p3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3',
          move: 'Ng5',
        },
        {
          fen: 'rnbqkb1r/ppp1pppp/5n2/6N1/4p3/8/PPPP1PPP/RNBQKB1R w KQkq - 2 4',
          move: 'd3',
        },
        {
          fen: 'rnbqkb1r/ppp1pppp/5n2/6N1/8/3p4/PPP2PPP/RNBQKB1R w KQkq - 0 5',
          move: 'Bxd3',
        },
        {
          fen: 'rnbqkb1r/ppp1ppp1/5n1p/6N1/8/3B4/PPP2PPP/RNBQK2R w KQkq - 0 6',
          move: 'Nxf7',
        },
        {
          fen: 'rnbq1b1r/ppp1pkp1/5n1p/8/8/3B4/PPP2PPP/RNBQK2R w KQ - 0 7',
          move: 'Bg6+',
        },
        {
          fen: 'rnbq1b1r/ppp1p1p1/5nkp/8/8/8/PPP2PPP/RNBQK2R w KQ - 0 8',
          move: 'Qxd8',
        },
      ],
    },
    {
      id: 'englund',
      name: 'Englund gambit (scandi)',
      url: 'https://youtu.be/tYOnym3ZINU?t=475',
      variant: 'Standard',
      positions: [
        {
          fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
          move: 'e5',
        },
        {
          fen: 'rnbqkbnr/pppp1ppp/8/4P3/8/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2',
          move: 'Nc6',
        },
        {
          fen: 'r1bqkbnr/pppp1ppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R b KQkq - 2 3',
          move: 'Qe7',
        },
        {
          fen: 'r1bqkbnr/pppp1ppp/2n5/4P3/5B2/8/PPP1PPPP/RN1QKBNR b KQkq - 2 3',
          move: 'Qe7',
        },
        {
          fen:
            'r1b1kbnr/ppppqppp/2n5/4P3/5B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 4 4',
          move: 'Qb4+',
        },
        {
          fen:
            'r1b1kbnr/pppp1ppp/2n5/4P3/1q6/5N2/PPPBPPPP/RN1QKB1R b KQkq - 6 5',
          move: 'Qxb2',
        },
        {
          fen:
            'r1b1kbnr/pppp1ppp/2n5/4P3/8/2B2N2/PqP1PPPP/RN1QKB1R b KQkq - 1 6',
          move: 'Bb4',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'venus',
      name: 'Venus trap',
      url: 'https://youtu.be/L-jTuKWJAG8?t=522',
      positions: [
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5',
          move: 'd4',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6',
          move: 'cxd4',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
          move: 'Nc3',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/2n5/8/1bBPn3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 8',
          move: 'O-O',
        },
        {
          fen: 'r1bqk2r/pppp1ppp/2n5/8/2BPn3/2b2N2/PP3PPP/R1BQ1RK1 w kq - 0 9',
          move: 'd5',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/8/3Pn3/2B1n3/2b2N2/PP3PPP/R1BQ1RK1 w kq - 1 10',
          move: 'bxc3',
        },
        {
          fen: 'r1bqk2r/pppp1ppp/8/3P4/2n1n3/2P2N2/P4PPP/R1BQ1RK1 w kq - 0 11',
          move: 'Qd4',
        },
        {
          fen: 'r1bqk2r/pppp1ppp/3n4/3P4/2nQ4/2P2N2/P4PPP/R1B2RK1 w kq - 2 12',
          move: 'Qwg7',
        },
        {
          fen: 'r1bqkr2/pppp1pQp/3n4/3P4/2n5/2P2N2/P4PPP/R1B2RK1 w q - 1 13',
          move: 'Re1+',
        },
        {
          fen: 'r1b1kr2/ppppqpQp/3n4/3P4/2n5/2P2N2/P4PPP/R1B1R1K1 w q - 3 14',
          move: 'Rxe7+',
        },
        {
          fen: 'r1b2r2/ppppkpQp/3n4/3P4/2n5/2P2N2/P4PPP/R1B3K1 w - - 0 15',
          move: 'Bg5+',
        },
        {
          fen: 'r1b1kr2/pppp1pQp/3n4/3P2B1/2n5/2P2N2/P4PPP/R5K1 w - - 2 16',
          move: 'Re1+',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'mars',
      name: 'Mars trap',
      url: 'https://youtu.be/L-jTuKWJAG8?t=386',
      positions: [
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5',
          move: 'd4',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6',
          move: 'cxd4',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
          move: 'Nc3',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/2n5/8/1bBPn3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 8',
          move: 'O-O',
        },
        {
          fen: 'r1bqk2r/pppp1ppp/2n5/8/1bBP4/2n2N2/PP3PPP/R1BQ1RK1 w kq - 0 9',
          move: 'bxc3',
        },
        {
          fen: 'r1bqk2r/ppppbppp/2n5/8/2BP4/2P2N2/P4PPP/R1BQ1RK1 w kq - 1 10',
          move: 'd5',
        },
        {
          fen: 'r1bqk2r/ppppbppp/8/n2P4/2B5/2P2N2/P4PPP/R1BQ1RK1 w kq - 1 11',
          move: 'd6',
        },
        {
          fen: 'r1bqk2r/pppp1ppp/3b4/n7/2B5/2P2N2/P4PPP/R1BQ1RK1 w kq - 0 12',
          move: 'Re1+',
        },
        {
          fen: 'r1bqk2r/ppppbppp/8/n7/2B5/2P2N2/P4PPP/R1BQR1K1 w kq - 2 13',
          move: 'Bg5',
        },
        {
          fen: 'r1bqk2r/ppppb1pp/5p2/n5B1/2B5/2P2N2/P4PPP/R2QR1K1 w kq - 0 14',
          move: 'Bxf6',
        },
        {
          fen: 'r1bqk2r/ppppb2p/5p2/n7/2B5/2P2N2/P4PPP/R2QR1K1 w kq - 0 15',
          move: 'Ne5',
        },
        {
          fen: 'r1bqk2r/ppppb2p/8/n3p3/2B5/2P5/P4PPP/R2QR1K1 w kq - 0 16',
          move: 'Qh5+',
        },
        {
          fen: 'r1bq1k1r/ppppb2p/8/n3p2Q/2B5/2P5/P4PPP/R3R1K1 w - - 2 17',
          move: 'Qf7#',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'hercule',
      name: 'Hercule trap',
      url: 'https://youtu.be/L-jTuKWJAG8?t=67',
      positions: [
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5',
          move: 'd4',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6',
          move: 'cxd4',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
          move: 'Nc3',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/2n5/8/1bBPn3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 8',
          move: 'O-O',
        },
        {
          fen: 'r1bqk2r/pppp1ppp/2n5/8/1bBP4/2n2N2/PP3PPP/R1BQ1RK1 w kq - 0 9',
          move: 'bxc3',
        },
        {
          fen: 'r1bqk2r/pppp1ppp/2n5/8/2BP4/2b2N2/P4PPP/R1BQ1RK1 w kq - 0 10',
          move: 'Qb3',
        },
        {
          fen: 'r1bqk2r/pppp1ppp/2n5/8/2BP4/1Q3N2/P4PPP/b1B2RK1 w kq - 0 11',
          move: 'Bxf7+',
        },
        {
          fen: 'r1bq1k1r/pppp1Bpp/2n5/8/3P4/1Q3N2/P4PPP/b1B2RK1 w - - 1 12',
          move: 'bg5',
        },
        {
          fen: 'r1bq1k1r/ppppnBpp/8/6B1/3P4/1Q3N2/P4PPP/b4RK1 w - - 3 13',
          move: 'Re1',
        },
        {
          fen: 'r1bq1k1r/ppp1nBpp/3p4/6B1/3P4/1Q3N2/P4PPP/b3R1K1 w - - 0 14',
          move: 'Bxe7+',
        },
        {
          fen: 'r1b2k1r/ppp1qBpp/3p4/8/3P4/1Q3N2/P4PPP/b3R1K1 w - - 0 15',
          move: 'Rxe7',
        },
        {
          fen: 'r1b4r/ppp1kBpp/3p4/8/3P4/1Q3N2/P4PPP/b5K1 w - - 0 16',
          move: 'Bg8',
        },
        {
          fen: 'r1bk2Br/ppp3pp/3p4/8/3P4/1Q3N2/P4PPP/b5K1 w - - 2 17',
          move: 'Qf7',
        },
        {
          fen: 'r1bk2Br/pp3Qpp/2pp4/8/3P4/5N2/P4PPP/b5K1 w - - 0 18',
          move: 'Qf8+',
        },
        {
          fen: 'r1bk2Br/pp3Qpp/3p4/2p5/3P4/5N2/P4PPP/b5K1 w - - 0 18',
          move: 'Qf8+',
        },
        {
          fen: 'r1b2QBr/ppk3pp/2pp4/8/3P4/5N2/P4PPP/b5K1 w - - 2 19',
          move: 'Qxg7+',
        },
        {
          fen: 'r1b2QBr/ppk3pp/3p4/2p5/3P4/5N2/P4PPP/b5K1 w - - 2 19',
          move: 'Qxg7+',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'it1',
      name: 'Italienne débutant trap',
      url: 'https://youtu.be/L-jTuKWJAG8?t=16',
      positions: [
        {
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5',
          move: 'd4',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/1bn2n2/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 6',
          move: 'dxe',
        },
        {
          fen:
            'r1bqk2r/pppp1ppp/1bn5/4P3/2B1n3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 7',
          move: 'Qd5',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'legal',
      name: "Legal's trap",
      url: 'https://youtu.be/tYOnym3ZINU?t=71',
      positions: [
        {
          fen:
            'r2qkbnr/ppp2ppp/2np4/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 5 4',
          move: 'h3',
        },
        {
          fen:
            'r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R w KQkq - 1 6',
          move: 'Nxe5',
        },
        {
          fen:
            'r2qkbnr/ppp2ppp/2np4/4N3/2B1P3/2N4P/PPPP1PP1/R1BbK2R w KQkq - 1 6',
          move: 'Bxf7+',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'bsg',
      name: 'Blackburne Shilling Gambit w',
      url: 'https://youtu.be/tYOnym3ZINU?t=126',
      positions: [
        {
          fen:
            'r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
          move: 'Nd4',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'gevans1',
      name: 'Gambit Evans 1 Ba5 w',
      url: 'https://youtu.be/LGAm_8rbeMc?t=205',
      positions: [
        {
          fen:
            'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
          move: 'b4',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'gevans2',
      name: 'Gambit Evans 2 w',
      url: 'https://youtu.be/WbQ35VtsXys?t=71',
      positions: [
        {
          fen:
            'r1b1k2r/ppppqppp/2n2n2/b7/2B1P3/1QN2N2/P4PPP/R1B2RK1 w kq - 1 10',
          move: 'Nd5',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'gevans3',
      name: 'Gambit Evans (piège Bobby Fischer) w',
      url: 'https://youtu.be/rOe8lcOFhCI?t=79',
      positions: [
        {
          fen:
            'r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R w KQkq - 0 7',
          move: 'O-O',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'gevans4',
      name: 'Gambit Evans (piège Fly in the ointment) w',
      url: 'https://youtu.be/0ha5ggCwA6w?t=53',
      positions: [
        {
          fen: 'r1b1k1nr/ppppqppp/2n5/b7/2B1P3/1Qp2N2/P4PPP/RNB2RK1 w kq - 2 9',
          move: 'Nxc3',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'rosen1',
      name: 'Scandi Rosen Trap w',
      url: 'https://youtu.be/6IBDe-f_PCc?t=1764',
      positions: [
        {
          fen: 'rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4',
          move: 'b4',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'rosen2',
      name: 'Scandi Rosen Trap2 w',
      url: 'https://youtu.be/6IBDe-f_PCc?t=1906',
      positions: [
        {
          fen:
            'rn1qkb1r/ppp1pppp/5n2/3P4/2B3b1/8/PPPP1PPP/RNBQK1NR w KQkq - 3 4',
          move: 'f3',
        },
      ],
    },
    {
      variant: 'Standard',
      id: '4n',
      name: '4 knights scotsh',
      url: 'https://youtu.be/6IBDe-f_PCc?t=2230',
      positions: [
        {
          fen:
            'r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5',
          move: 'Nd5',
        },
      ],
    },
    {
      variant: 'Standard',
      id: 'milnerbarry',
      name: 'French, advance, just a pawn Milner-Barry gambit',
      url: 'https://youtu.be/6IBDe-f_PCc?t=678',
      positions: [
        {
          fen:
            'r2qkbnr/pp1b1ppp/2n1p3/1BppP3/3P4/2P2N2/PP3PPP/RNBQK2R b KQkq - 4 6',
          move: 'Nxe5',
        },
      ],
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

  studyPgnFull: `[Event "🍄 Best Opening Traps 2020 🍄: Introduction"]
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
1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Ng4 5. h3 h5 6. hxg4?? hxg4 { [%cal Gg4f3] } 7. Ne1?? Qh4 { [%cal Gh8h1] } 8. f4 g3 { [%csl Gf2,Gh2][%cal Gg3h2,Gg3f2] } 9. Qh5 Rxh5 10. a3 { [%csl Rg1,Gg3,Gh5,Gh4,Rf1,Re1,Rg2][%cal Gh4h2,Gh4h1] } 10... Qh1# *


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


[Event "🍄 Best Opening Traps 2020 🍄: Benko trap"]
[Site "https://lichess.org/study/nsIdXAP4/Ws7f2RsU"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "08:42:16"]
[Variant "Standard"]
[ECO "A57"]
[Opening "Benko Gambit"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 c5 2. d5 Nf6 3. c4 b5 4. b3 bxc4 5. bxc4 g6 6. Nc3 Bg7 7. Bb2? d6 8. Ne4?? Nxe4 9. Bxg7?? Qa5+ 10. Bc3 Qxc3+ 11. Qd2 Qxd2# *


[Event "Rated Blitz game"]
[Site "https://lichess.org/zgkJ6LXk"]
[Date "2017.11.20"]
[Round "-"]
[White "radestojkovic"]
[Black "josemi88"]
[Result "0-1"]
[WhiteElo "1872"]
[BlackElo "1862"]
[TimeControl "300+0"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "08:43:55"]
[Variant "Standard"]
[ECO "A57"]
[Opening "Benko Gambit"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 { [%clk 0:05:00] } Nf6 { [%clk 0:05:00] } 2. c4 { [%clk 0:04:58] } c5 { [%clk 0:04:59] } 3. d5 { [%clk 0:04:55] } b5 { [%clk 0:04:57] } 4. b3 { [%clk 0:04:53] } bxc4 { [%clk 0:04:56] } 5. bxc4 { [%clk 0:04:51] } d6 { [%clk 0:04:55] } 6. Nc3 { [%clk 0:04:50] } g6 { [%clk 0:04:53] } 7. Bb2 { [%clk 0:04:47] } Bg7 { [%clk 0:04:52] } 8. Ne4 { [%clk 0:04:43] } Nxe4 { [%clk 0:04:45] } 9. Bxg7 { [%clk 0:04:40] } Qa5+ { [%clk 0:04:38] } 10. Qd2 { [%clk 0:04:38] } Nxd2 { 0-1 White resigns. } { [%clk 0:04:36] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: Noah's ark trap"]
[Site "https://lichess.org/study/nsIdXAP4/iDy3RVPH"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "08:44:54"]
[Variant "Standard"]
[ECO "C50"]
[Opening "Giuoco Piano"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. Nbd2 Ne7 7. Qe2 c6 8. h3 a5 9. Kh1?? (9. a3 b5 10. Ba2) 9... b5 10. Bb3 a4 { [%csl Rb3,Ga4,Gb5,Gc6] } *


[Event "🍄 Best Opening Traps 2020 🍄: Budapest trap"]
[Site "https://lichess.org/study/nsIdXAP4/GbZwHrL3"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "08:47:11"]
[Variant "Standard"]
[ECO "A45"]
[Opening "Indian Game: Lazard Gambit"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 Nf6 2. Nd2 e5 3. dxe5 Ng4 4. h3?? (4. Ngf3 Be7 5. h3 Ne3 6. fxe3 Bh4+ 7. Nxh4 Qxh4+ 8. g3 Qxg3#) 4... Ne3 { White has to give queen. } { [%csl Re1,Rd1,Ge3,Gd8,Gh4][%cal Re3d1,Rf2e3,Gd8h4,Rh4e1] } 5. fxe3 Qh4+ 6. g3 Qxg3# *


[Event "Rated Bullet game"]
[Site "https://lichess.org/JyEU1CPx"]
[Date "2020.03.12"]
[Round "-"]
[White "Kamsky__G"]
[Black "VladislavKrasikov_FM"]
[Result "0-1"]
[WhiteElo "2597"]
[BlackElo "2675"]
[BlackTitle "FM"]
[TimeControl "90+2"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "08:55:32"]
[Variant "Standard"]
[ECO "A45"]
[Opening "Indian Game: Lazard Gambit"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 { [%clk 0:01:30] } Nf6 { [%clk 0:01:30] } 2. Nd2 { [%clk 0:01:31] } e5 { [%clk 0:01:31] } 3. dxe5 { [%clk 0:01:32] } Ng4 { [%clk 0:01:32] } 4. h3 { [%clk 0:01:34] } Ne3 { [%clk 0:01:33] } 5. fxe3 { [%clk 0:01:35] } Qh4+ { [%clk 0:01:32] } 6. g3 { [%clk 0:01:36] } Qxg3# { 0-1 Black wins by checkmate. } { [%clk 0:01:32] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: Legal trap"]
[Site "https://lichess.org/study/nsIdXAP4/kKuXZCFn"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "08:56:24"]
[Variant "Standard"]
[ECO "C50"]
[Opening "Italian Game"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. Nc3 Bg4 5. h3 Bh5? 6. Nxe5! Bxd1?? (6... Nxe5 $16 { Better move, but white still much better. }) 7. Bxf7+ Ke7 8. Nd5# *


[Event "Rated Bullet game"]
[Site "https://lichess.org/GyAYciJH"]
[Date "2019.03.25"]
[Round "-"]
[White "ItsMeTheFreak"]
[Black "DavidMorphan"]
[Result "1-0"]
[WhiteElo "2223"]
[BlackElo "2720"]
[TimeControl "30+0"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "08:59:17"]
[Variant "Standard"]
[ECO "C50"]
[Opening "Italian Game"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 { [%clk 0:00:30] } e5 { [%clk 0:00:30] } 2. Nf3 { [%clk 0:00:29] } Nc6 { [%clk 0:00:30] } 3. Bc4 { [%clk 0:00:29] } d6 { [%clk 0:00:27] } 4. Nc3 { [%clk 0:00:28] } Bg4 { [%clk 0:00:25] } 5. h3 { [%clk 0:00:27] } Bh5 { [%clk 0:00:25] } 6. Nxe5 { [%clk 0:00:26] } Bxd1 { [%clk 0:00:23] } 7. Bxf7+ { [%clk 0:00:24] } Ke7 { [%clk 0:00:22] } 8. Nd5# { 1-0 White wins by checkmate. } { [%clk 0:00:23] } 1-0


[Event "🍄 Best Opening Traps 2020 🍄: Kieninger trap"]
[Site "https://lichess.org/study/nsIdXAP4/7XExW1kC"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:03:25"]
[Variant "Standard"]
[ECO "A52"]
[Opening "Budapest Defense: Rubinstein Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 Nf6 2. c4 e5 3. dxe5 Ng4 4. Bf4 Nc6 5. Nf3 Bb4+ 6. Nbd2 Qe7 7. a3 Ngxe5 8. axb4?? (8. Nxe5 $10 { With equal position. }) 8... Nd3# { [%csl Re1,Re2,Rd2,Rd1,Rf1,Rf2,Ge7,Gd3][%cal Re7e1,Rd3e1] } *


[Event "Rated Bullet tournament https://lichess.org/tournament/LTBadLAC"]
[Site "https://lichess.org/lTmivKTC"]
[Date "2020.04.17"]
[Round "-"]
[White "Makswolf200818"]
[Black "SCHACK_SPELARE_1981"]
[Result "0-1"]
[WhiteElo "2404"]
[WhiteTitle "CM"]
[BlackElo "2384"]
[TimeControl "60+0"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "09:05:48"]
[Variant "Standard"]
[ECO "A15"]
[Opening "English Opening: Anglo-Indian Defense, King's Knight Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. Nf3 { [%clk 0:01:00] } Nf6 { [%clk 0:01:00] } 2. c4 { [%clk 0:00:59] } Nc6 { [%clk 0:00:57] } 3. d4 { [%clk 0:00:58] } e5 { [%clk 0:00:57] } 4. dxe5 { [%clk 0:00:57] } Ng4 { [%clk 0:00:56] } 5. Bf4 { [%clk 0:00:54] } Bb4+ { [%clk 0:00:55] } 6. Nbd2 { [%clk 0:00:53] } Qe7 { [%clk 0:00:55] } 7. a3 { [%clk 0:00:52] } Ngxe5 { [%clk 0:00:55] } 8. axb4 { [%clk 0:00:50] } Nd3# { 0-1 Black wins by checkmate. } { [%clk 0:00:54] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: Elephant trap"]
[Site "https://lichess.org/study/nsIdXAP4/sBlqHPxm"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:06:23"]
[Variant "Standard"]
[ECO "D51"]
[Opening "Queen's Gambit Declined: Modern, Knight Defense"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. cxd5 exd5 6. Nxd5?? Nxd5 7. Bxd8 Bb4+!! 8. Qd2 Bxd2+ 9. Kxd2 Kxd8 *


[Event "Rated Blitz game"]
[Site "https://lichess.org/fEJnuzDQ"]
[Date "2020.04.24"]
[Round "-"]
[White "manguerita"]
[Black "noumoski34"]
[Result "0-1"]
[WhiteElo "2402"]
[BlackElo "2427"]
[TimeControl "180+2"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "09:07:59"]
[Variant "Standard"]
[ECO "D35"]
[Opening "Queen's Gambit Declined: Exchange Variation, Positional Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 { [%clk 0:03:00] } d5 { [%clk 0:03:00] } 2. c4 { [%clk 0:03:01] } e6 { [%clk 0:03:01] } 3. Nc3 { [%clk 0:03:02] } Nf6 { [%clk 0:03:02] } 4. cxd5 { [%clk 0:03:02] } exd5 { [%clk 0:03:02] } 5. Bg5 { [%clk 0:03:04] } Nbd7 { [%clk 0:03:01] } 6. Nxd5 { [%clk 0:03:01] } Nxd5 { [%clk 0:03:02] } 7. Bxd8 { [%clk 0:03:01] } Bb4+ { [%clk 0:03:02] } 8. Qd2 { [%clk 0:03:02] } Bxd2+ { [%clk 0:03:03] } 9. Kxd2 { [%clk 0:03:02] } Kxd8 { [%clk 0:03:04] } 10. e4 { [%clk 0:03:01] } N5f6 { [%clk 0:03:04] } 11. f3 { [%clk 0:03:01] } c6 { [%clk 0:02:59] } 12. Bc4 { [%clk 0:03:02] } Ke7 { [%clk 0:02:59] } 13. Ne2 { [%clk 0:03:02] } Nb6 { [%clk 0:03:00] } 14. Bb3 { [%clk 0:03:03] } Be6 { [%clk 0:03:01] } 15. Bxe6 { [%clk 0:03:02] } fxe6 { [%clk 0:03:02] } 16. b3 { [%clk 0:03:03] } Rhd8 { [%clk 0:02:54] } 17. Ke3 { [%clk 0:03:03] } a5 { [%clk 0:02:50] } 18. a4 { [%clk 0:03:03] } Nbd7 { [%clk 0:02:42] } 19. Rac1 { [%clk 0:02:59] } e5 { [%clk 0:02:29] } 20. g4 { [%clk 0:02:57] } exd4+ { [%clk 0:02:16] } 21. Nxd4 { [%clk 0:02:58] } Ne5 { [%clk 0:02:13] } 22. Rc3 { [%clk 0:02:53] } g6 { [%clk 0:02:09] } 23. g5 { [%clk 0:02:51] } Ne8 { [%clk 0:02:07] } 24. h3 { [%clk 0:02:48] } Rd7 { [%clk 0:02:02] } 25. f4 { [%clk 0:02:49] } Rad8 { [%clk 0:01:55] } 26. Rd1 { [%clk 0:02:47] } Nf3 { [%clk 0:01:53] } 27. Kxf3 { [%clk 0:02:38] } Rxd4 { [%clk 0:01:54] } 28. Rxd4 { [%clk 0:02:38] } Rxd4 { [%clk 0:01:56] } 29. h4 { [%clk 0:02:33] } Nd6 { [%clk 0:01:53] } 30. Re3 { [%clk 0:02:29] } Ke6 { [%clk 0:01:50] } 31. h5 { [%clk 0:02:26] } b5 { [%clk 0:01:45] } 32. hxg6 { [%clk 0:02:11] } hxg6 { [%clk 0:01:45] } 33. Rc3 { [%clk 0:02:01] } Kd7 { [%clk 0:01:28] } 34. axb5 { [%clk 0:01:59] } cxb5 { [%clk 0:01:17] } 35. Rc5 { [%clk 0:01:40] } Rxe4 { [%clk 0:00:55] } 36. Rd5 { [%clk 0:01:25] } Re8 { [%clk 0:00:37] } 37. f5 { [%clk 0:01:23] } gxf5 { [%clk 0:00:37] } 38. Kf4 { [%clk 0:01:19] } Re4+ { [%clk 0:00:38] } 39. Kf3 { [%clk 0:01:19] } Rg4 { 0-1 White resigns. } { [%clk 0:00:39] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: Rubinstein trap"]
[Site "https://lichess.org/study/nsIdXAP4/Fb0XeV2q"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:10:04"]
[Variant "Standard"]
[ECO "D63"]
[Opening "Queen's Gambit Declined: Orthodox Defense, Main Line"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 d5 2. Nf3 Nf6 3. c4 e6 4. Bg5 Nbd7 5. e3 Be7 6. Nc3 O-O 7. Rc1 Re8 8. Qc2 a6 9. cxd5 exd5 10. Bd3 c6 11. O-O Ne4 12. Bf4 f5?? 13. Nxd5 cxd5?? 14. Bc7 { [%csl Rd8,Re8,Re7,Rd7,Rc8,Gc7,Gc2,Gc1][%cal Gc7d8,Gc2c7,Gc1c7] } *


[Event "Rated Blitz game"]
[Site "https://lichess.org/vLVe0lCV"]
[Date "2016.07.12"]
[Round "-"]
[White "profiklada"]
[Black "ujai777"]
[Result "1-0"]
[WhiteElo "2356"]
[BlackElo "2027"]
[TimeControl "180+0"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "09:13:28"]
[Variant "Standard"]
[ECO "D55"]
[Opening "Queen's Gambit Declined: Modern Variation, Normal Line"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 Be7 5. Bg5 O-O 6. e3 c6 7. Bd3 a6 8. cxd5 exd5 9. O-O Nbd7 10. Rc1 Re8 11. Qc2 Ne4 12. Bf4 f5 13. Nxd5 cxd5 14. Bc7 { 1-0 Black resigns. } 1-0


[Event "🍄 Best Opening Traps 2020 🍄: Mortimer trap"]
[Site "https://lichess.org/study/nsIdXAP4/tYuaV5y8"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:14:12"]
[Variant "Standard"]
[ECO "C65"]
[Opening "Ruy Lopez: Berlin Defense: Mortimer Trap"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Ne7 5. Nxe5? c6 6. Nc4!? { [%cal Rc4d6] } 6... Ng6 (6... cxb5?? 7. Nd6# { [%csl Re8,Rd8,Rd7,Re7,Rf7,Rf8,Gd6][%cal Rd6e8] }) 7. Ba4 b5 { [%csl Ra4,Rc4,Gb5,Gc6][%cal Rb5c4,Rb5a4] } *


[Event "Rated Blitz game"]
[Site "https://lichess.org/0ZX17ctJ"]
[Date "2019.01.29"]
[Round "-"]
[White "dbestako24"]
[Black "AZ-Heerenven"]
[Result "0-1"]
[WhiteElo "2407"]
[BlackElo "2391"]
[TimeControl "180+0"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "09:16:55"]
[Variant "Standard"]
[ECO "C65"]
[Opening "Ruy Lopez: Berlin Defense: Mortimer Trap"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 { [%clk 0:03:00] } e5 { [%clk 0:03:00] } 2. Nf3 { [%clk 0:02:55] } Nc6 { [%clk 0:03:00] } 3. Bb5 { [%clk 0:02:53] } Nf6 { [%clk 0:02:58] } 4. d3 { [%clk 0:02:51] } Ne7 { [%clk 0:02:53] } 5. Nxe5 { [%clk 0:02:49] } c6 { [%clk 0:02:52] } 6. Nc4 { [%clk 0:02:37] } Ng6 { [%clk 0:02:46] } 7. Ba4 { [%clk 0:02:21] } b5 { [%clk 0:02:43] } 8. e5 { [%clk 0:02:19] } Nd5 { [%clk 0:02:40] } 9. Bb3 { [%clk 0:02:10] } bxc4 { [%clk 0:02:37] } 10. dxc4 { [%clk 0:02:09] } Nc7 { [%clk 0:02:36] } 11. f4 { [%clk 0:02:07] } Bc5 { [%clk 0:02:31] } 12. Nc3 { [%clk 0:02:04] } Qh4+ { [%clk 0:02:18] } 13. g3 { [%clk 0:02:02] } Qh3 { [%clk 0:02:17] } 14. Qf3 { [%clk 0:02:00] } O-O { [%clk 0:02:06] } 15. Ne4 { [%clk 0:01:58] } Ne6 { [%clk 0:01:39] } 16. c3 { [%clk 0:01:51] } Re8 { [%clk 0:01:15] } 17. Bc2 { [%clk 0:01:38] } d5 { [%clk 0:01:10] } 18. exd6 { [%clk 0:01:08] } Bxd6 { [%clk 0:00:56] } 19. Be3 { [%clk 0:01:01] } Bxf4 { [%clk 0:00:53] } 20. Nf2 { [%clk 0:00:55] } Ng5 { [%clk 0:00:38] } 21. Qxf4 { [%clk 0:00:20] } Nxf4 { [%clk 0:00:33] } 22. Nxh3 { [%clk 0:00:19] } Rxe3+ { [%clk 0:00:22] } 23. Kd1 { [%clk 0:00:17] } Bg4+ { [%clk 0:00:18] } 24. Kd2 { [%clk 0:00:15] } Re2+ { [%clk 0:00:18] } 25. Kc1 { [%clk 0:00:14] } Nfxh3 { 0-1 White resigns. } { [%clk 0:00:16] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: Tarrasch trap"]
[Site "https://lichess.org/study/nsIdXAP4/9hiprqf0"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:17:35"]
[Variant "Standard"]
[ECO "C83"]
[Opening "Ruy Lopez: Open Variations, Classical Defense, Main Line"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. c3 Be7 10. Re1 O-O 11. Nd4 Qd7 12. Nxe6!! Qxe6 (12... fxe6 13. Rxe4 { [%csl Rd7,Ge4][%cal Rd1d7,Bd5e4] }) 13. Rxe4 { [%csl Re6][%cal Rb3e6] } *


[Event "🍄 Best Opening Traps 2020 🍄: Siberian trap"]
[Site "https://lichess.org/study/nsIdXAP4/HulI995d"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:24:51"]
[Variant "Standard"]
[ECO "B21"]
[Opening "Sicilian Defense: Smith-Morra Gambit"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 Qc7 7. O-O Nf6 8. Qe2 Ng4 9. h3?? Nd4!! $19 { [%csl Rf3,Re2,Rh2,Rg1][%cal Gd4e2,Gd4f3,Rg4h2,Rf3h2,Rf3d4,Gc7h2,Rh2g1] } *


[Event "Rated Bullet game"]
[Site "https://lichess.org/3YJhMfJG"]
[Date "2020.04.06"]
[Round "-"]
[White "Blazinq"]
[Black "KAstar"]
[Result "0-1"]
[WhiteElo "2840"]
[BlackElo "2936"]
[BlackTitle "GM"]
[TimeControl "30+0"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "09:33:28"]
[Variant "Standard"]
[ECO "A00"]
[Opening "Saragossa Opening"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. c3 { [%clk 0:00:30] } c5 { [%clk 0:00:30] } 2. d4 { [%clk 0:00:30] } cxd4 { [%clk 0:00:30] } 3. Nf3 { [%clk 0:00:30] } dxc3 { [%clk 0:00:29] } 4. Nxc3 { [%clk 0:00:30] } Nc6 { [%clk 0:00:29] } 5. e4 { [%clk 0:00:30] } Nf6 { [%clk 0:00:29] } 6. Bc4 { [%clk 0:00:30] } Qc7 { [%clk 0:00:28] } 7. O-O { [%clk 0:00:29] } e6 { [%clk 0:00:27] } 8. Qe2 { [%clk 0:00:29] } Ng4 { [%clk 0:00:27] } 9. h3 { [%clk 0:00:28] } Nd4 { [%clk 0:00:26] } 10. hxg4 { [%clk 0:00:22] } Nxe2+ { [%clk 0:00:25] } 11. Nxe2 { [%clk 0:00:22] } a6 { [%clk 0:00:25] } 12. Bf4 { [%clk 0:00:22] } b5 { [%clk 0:00:25] } 13. Rad1 { [%clk 0:00:22] } Qxc4 { [%clk 0:00:24] } 14. Rc1 { [%clk 0:00:21] } Qxe2 { 0-1 White resigns. } { [%clk 0:00:23] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: Vienna trap"]
[Site "https://lichess.org/study/nsIdXAP4/9pOs006q"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:33:07"]
[Variant "Standard"]
[ECO "C27"]
[Opening "Vienna Game"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 e5 2. Nc3 Nf6 3. Bc4 Nxe4 4. Bxf7+ Kxf7 5. Nxe4 Nc6 6. Qf3+ Kg8?? 7. Ng5!! Qf6 (7... Qxg5 8. Qd5#) *


[Event "Rated Blitz game"]
[Site "https://lichess.org/Xi1HzS5C"]
[Date "2020.04.06"]
[Round "-"]
[White "Adinaj03"]
[Black "KurtKokolores"]
[Result "1-0"]
[WhiteElo "2168"]
[BlackElo "2150"]
[TimeControl "300+0"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "09:36:20"]
[Variant "Standard"]
[ECO "C27"]
[Opening "Vienna Game"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 { [%clk 0:05:00] } e5 { [%clk 0:05:00] } 2. Nc3 { [%clk 0:04:59] } Nf6 { [%clk 0:04:59] } 3. Bc4 { [%clk 0:04:59] } Nxe4 { [%clk 0:04:56] } 4. Bxf7+ { [%clk 0:04:58] } Kxf7 { [%clk 0:04:55] } 5. Nxe4 { [%clk 0:04:57] } Nc6 { [%clk 0:04:53] } 6. Qf3+ { [%clk 0:04:56] } Kg8 { [%clk 0:04:51] } 7. Ng5 { [%clk 0:04:51] } Qf6 { [%clk 0:04:45] } 8. Qd5+ { 1-0 Black resigns. } { [%clk 0:04:44] } 1-0


[Event "🍄 Best Opening Traps 2020 🍄: From Gambit trap"]
[Site "https://lichess.org/study/nsIdXAP4/ycoOzBb7"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:36:39"]
[Variant "Standard"]
[ECO "A02"]
[Opening "Bird Opening: From's Gambit, Lasker Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. f4 e5 2. fxe5 d6 3. exd6 Bxd6 4. Nf3 g5 5. e4? g4 6. e5 gxf3 7. exd6 Qh4+ 8. g3 Qe4+ 9. Kf2 Qd4+ 10. Kxf3 Bg4+ *


[Event "Rated Blitz game"]
[Site "https://lichess.org/AyWaGuJt"]
[Date "2020.05.01"]
[Round "-"]
[White "Julia_Maria"]
[Black "Rama75"]
[Result "0-1"]
[WhiteElo "2177"]
[BlackElo "2337"]
[TimeControl "180+0"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "09:47:10"]
[Variant "Standard"]
[ECO "A02"]
[Opening "Bird Opening: From's Gambit, Lasker Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. f4 { [%clk 0:03:00] } e5 { [%clk 0:03:00] } 2. fxe5 { [%clk 0:02:58] } d6 { [%clk 0:02:59] } 3. exd6 { [%clk 0:02:56] } Bxd6 { [%clk 0:02:53] } 4. Nf3 { [%clk 0:02:55] } g5 { [%clk 0:02:53] } 5. e4 { [%clk 0:02:52] } g4 { [%clk 0:02:51] } 6. e5 { [%clk 0:02:51] } gxf3 { [%clk 0:02:40] } 7. exd6 { [%clk 0:02:45] } Qh4+ { [%clk 0:02:29] } 8. g3 { [%clk 0:02:43] } Qe4+ { [%clk 0:02:29] } 9. Kf2 { [%clk 0:02:42] } Qd4+ { [%clk 0:02:28] } 10. Kxf3 { [%clk 0:02:32] } Bg4+ { [%clk 0:02:25] } 11. Kg2 { [%clk 0:02:31] } Bxd1 { [%clk 0:02:22] } 12. Bb5+ { [%clk 0:02:28] } c6 { 0-1 White resigns. } { [%clk 0:02:20] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: TrickyMate Trap (Fajratowitz)"]
[Site "https://lichess.org/study/nsIdXAP4/dfBkh994"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:48:06"]
[Variant "Standard"]
[ECO "A51"]
[Opening "Budapest Defense: Fajarowicz Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 Nf6 2. c4 e5 3. dxe5 Ne4 4. Nf3 b6 5. Qd5 Bb7 6. Qxb7 Nc6 7. Qa6?? Bb4+ 8. Bd2 Nc5 9. Qb5 Bxd2+ 10. Nbxd2 a6 $19 *


[Event "Rated Blitz game"]
[Site "https://lichess.org/YbMtsBgi"]
[Date "2020.04.22"]
[Round "-"]
[White "GabrielTricks2003"]
[Black "malvadomen"]
[Result "0-1"]
[WhiteElo "2405"]
[BlackElo "2005"]
[TimeControl "180+2"]
[Termination "Normal"]
[UTCDate "2020.05.30"]
[UTCTime "09:49:29"]
[Variant "Standard"]
[ECO "A51"]
[Opening "Budapest Defense: Fajarowicz Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. d4 { [%clk 0:03:00] } Nf6 { [%clk 0:03:00] } 2. c4 { [%clk 0:02:47] } e5 { [%clk 0:03:00] } 3. dxe5 { [%clk 0:02:47] } Ne4 { [%clk 0:03:00] } 4. Nf3 { [%clk 0:02:42] } b6 { [%clk 0:02:58] } 5. Qd5 { [%clk 0:02:34] } Bb7 { [%clk 0:02:59] } 6. Qxb7 { [%clk 0:02:34] } Nc6 { [%clk 0:02:55] } 7. Qa6 { [%clk 0:02:14] } Bb4+ { [%clk 0:02:38] } 8. Bd2 { [%clk 0:02:00] } Nc5 { [%clk 0:02:28] } 9. Qb5 { [%clk 0:01:55] } Bxd2+ { [%clk 0:02:16] } 10. Nbxd2 { [%clk 0:01:51] } a6 { [%clk 0:02:17] } 11. Qxc5 { [%clk 0:01:51] } bxc5 { [%clk 0:02:18] } 12. e3 { [%clk 0:01:41] } Nb4 { [%clk 0:02:18] } 13. Kd1 { [%clk 0:01:31] } O-O { [%clk 0:02:16] } 14. a3 { [%clk 0:01:32] } Nc6 { [%clk 0:02:16] } 15. Bd3 { [%clk 0:01:34] } Qe7 { [%clk 0:02:14] } 16. Kc2 { [%clk 0:01:30] } Nxe5 { [%clk 0:02:15] } 17. Nxe5 { [%clk 0:01:30] } Qxe5 { [%clk 0:02:16] } 18. Nf3 { [%clk 0:01:32] } Qf6 { [%clk 0:02:13] } 19. h4 { [%clk 0:01:31] } Rab8 { [%clk 0:02:14] } 20. Rab1 { [%clk 0:01:31] } Rb6 { [%clk 0:02:12] } 21. h5 { [%clk 0:01:30] } h6 { [%clk 0:02:11] } 22. Rh4 { [%clk 0:01:23] } Rfb8 { [%clk 0:02:11] } 23. b3 { [%clk 0:01:24] } a5 { [%clk 0:02:06] } 24. Rf4 { [%clk 0:01:24] } Qe7 { [%clk 0:01:48] } 25. a4 { [%clk 0:01:22] } Rf6 { [%clk 0:01:35] } 26. Rg4 { [%clk 0:01:22] } Qe6 { [%clk 0:01:29] } 27. Re4 { [%clk 0:01:18] } Qc6 { [%clk 0:01:24] } 28. Ne5 { [%clk 0:01:17] } Qd6 { [%clk 0:01:21] } 29. f3 { [%clk 0:01:11] } Re6 { [%clk 0:01:12] } 30. Ng4 { [%clk 0:01:03] } Rxe4 { [%clk 0:01:13] } 31. Bxe4 { [%clk 0:01:05] } Qg3 { [%clk 0:01:13] } 32. Rg1 { [%clk 0:01:00] } Re8 { [%clk 0:01:11] } 33. Kd3 { [%clk 0:00:55] } c6 { [%clk 0:01:10] } 34. Ke2 { [%clk 0:00:54] } Qh4 { [%clk 0:01:03] } 35. Nf2 { [%clk 0:00:55] } Qxh5 { [%clk 0:01:03] } 36. Rd1 { [%clk 0:00:54] } d5 { [%clk 0:01:00] } 37. cxd5 { [%clk 0:00:54] } cxd5 { [%clk 0:01:01] } 38. Rxd5 { [%clk 0:00:56] } Qh2 { [%clk 0:00:59] } 39. Rxc5 { [%clk 0:00:41] } Qb8 { [%clk 0:00:49] } 40. Rb5 { [%clk 0:00:38] } Qc7 { [%clk 0:00:48] } 41. f4 { [%clk 0:00:31] } Qc3 { [%clk 0:00:48] } 42. Kf3 { [%clk 0:00:28] } g6 { [%clk 0:00:42] } 43. Nd3 { [%clk 0:00:25] } Re7 { [%clk 0:00:33] } 44. Ne5 { [%clk 0:00:23] } Kg7 { [%clk 0:00:33] } 45. Bd5 { [%clk 0:00:18] } Qe1 { [%clk 0:00:25] } 46. Rb6 { [%clk 0:00:04] } f6 { [%clk 0:00:23] } 47. Nc4 { [%clk 0:00:04] } Qd1+ { [%clk 0:00:21] } 48. Kf2 { [%clk 0:00:04] } Qxd5 { [%clk 0:00:22] } 49. g3 { [%clk 0:00:02] } Rc7 { [%clk 0:00:21] } 50. Ra6 { [%clk 0:00:03] } Rxc4 { [%clk 0:00:22] } 51. bxc4 { [%clk 0:00:05] } Qxc4 { [%clk 0:00:22] } 52. Ra7+ { [%clk 0:00:07] } Kf8 { [%clk 0:00:23] } 53. Ra8+ { [%clk 0:00:08] } Ke7 { [%clk 0:00:24] } 54. Rxa5 { [%clk 0:00:09] } Qc2+ { [%clk 0:00:24] } 55. Kf3 { [%clk 0:00:11] } Qc6+ { [%clk 0:00:24] } 56. Kf2 { [%clk 0:00:10] } h5 { [%clk 0:00:26] } 57. Ra7+ { [%clk 0:00:11] } Ke6 { [%clk 0:00:27] } 58. a5 { [%clk 0:00:11] } Qc2+ { [%clk 0:00:26] } 59. Kf3 { [%clk 0:00:11] } f5 { [%clk 0:00:28] } 60. Ra6+ { [%clk 0:00:10] } Kf7 { [%clk 0:00:28] } 61. Ra7+ { [%clk 0:00:10] } Ke8 { [%clk 0:00:29] } 62. a6 { [%clk 0:00:08] } Qd1+ { [%clk 0:00:28] } 63. Kf2 { [%clk 0:00:10] } Qc2+ { [%clk 0:00:28] } 64. Kf3 { [%clk 0:00:08] } Qc6+ { [%clk 0:00:28] } 65. Kf2 { [%clk 0:00:09] } Kd8 { [%clk 0:00:28] } 66. Kg1 { [%clk 0:00:04] } Kc8 { [%clk 0:00:29] } 67. Kf2 { [%clk 0:00:04] } Qc2+ { [%clk 0:00:25] } 68. Kf1 { [%clk 0:00:04] } Qd2 { [%clk 0:00:24] } 69. Re7 { [%clk 0:00:04] } Qd3+ { [%clk 0:00:24] } 70. Kf2 { [%clk 0:00:04] } Qxa6 { [%clk 0:00:25] } 71. Re5 { [%clk 0:00:03] } Qd6 { [%clk 0:00:25] } 72. Kf3 { [%clk 0:00:04] } Kc7 { [%clk 0:00:26] } 73. Kg2 { [%clk 0:00:05] } Qd2+ { [%clk 0:00:27] } 74. Kh3 { [%clk 0:00:03] } Kd6 { [%clk 0:00:28] } 75. Kh4 { [%clk 0:00:05] } Qh2+ { [%clk 0:00:28] } 76. Kg5 { [%clk 0:00:06] } Qxg3+ { [%clk 0:00:29] } 77. Kf6 { [%clk 0:00:08] } h4 { [%clk 0:00:29] } 78. Re6+ { [%clk 0:00:09] } Kd5 { [%clk 0:00:31] } 79. Re5+ { [%clk 0:00:10] } Kc4 { [%clk 0:00:31] } 80. Re7 { [%clk 0:00:08] } h3 { [%clk 0:00:33] } 81. Rc7+ { [%clk 0:00:09] } Kd3 { [%clk 0:00:33] } 82. Re7 { [%clk 0:00:09] } h2 { 0-1 White resigns. } { [%clk 0:00:34] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: Fried Liver Attack"]
[Site "https://lichess.org/study/nsIdXAP4/Iv91Z2Nt"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:50:23"]
[Variant "Standard"]
[ECO "C57"]
[Opening "Italian Game: Two Knights Defense, Fried Liver Attack"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 { Not a big trap, but black king was in center of danger. } { [%csl Re6] } *


[Event "Rated Bullet game"]
[Site "https://lichess.org/95nftW3g"]
[Date "2020.04.08"]
[Round "-"]
[White "Zhigalko_Sergei"]
[Black "DrNykterstein"]
[Result "0-1"]
[WhiteElo "3059"]
[WhiteTitle "GM"]
[BlackElo "3305"]
[BlackTitle "GM"]
[TimeControl "60+0"]
[Termination "Time forfeit"]
[UTCDate "2020.05.30"]
[UTCTime "09:51:51"]
[Variant "Standard"]
[ECO "C57"]
[Opening "Italian Game: Two Knights Defense, Fried Liver Attack"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 { [%clk 0:01:00] } e5 { [%clk 0:01:00] } 2. Nf3 { [%clk 0:00:59] } Nc6 { [%clk 0:01:00] } 3. Bc4 { [%clk 0:00:59] } Nf6 { [%clk 0:00:59] } 4. Ng5 { [%clk 0:00:59] } d5 { [%clk 0:00:58] } 5. exd5 { [%clk 0:00:59] } Nxd5 { [%clk 0:00:57] } 6. Nxf7 { [%clk 0:00:57] } Kxf7 { [%clk 0:00:57] } 7. Qf3+ { [%clk 0:00:57] } Ke6 { [%clk 0:00:57] } 8. Nc3 { [%clk 0:00:57] } Ne7 { [%clk 0:00:56] } 9. d4 { [%clk 0:00:56] } c6 { [%clk 0:00:56] } 10. Bg5 { [%clk 0:00:55] } Qe8 { [%clk 0:00:54] } 11. O-O-O { [%clk 0:00:49] } Qf7 { [%clk 0:00:53] } 12. Qd3 { [%clk 0:00:42] } Qf5 { [%clk 0:00:51] } 13. Qg3 { [%clk 0:00:41] } Kf7 { [%clk 0:00:50] } 14. Rhe1 { [%clk 0:00:38] } Qg4 { [%clk 0:00:45] } 15. Qxe5 { [%clk 0:00:35] } Kg6 { [%clk 0:00:43] } 16. Bxe7 { [%clk 0:00:32] } Nxe7 { [%clk 0:00:40] } 17. Re3 { [%clk 0:00:25] } Nf5 { [%clk 0:00:39] } 18. Bd3 { [%clk 0:00:22] } Qg5 { [%clk 0:00:36] } 19. g4 { [%clk 0:00:19] } Bd7 { [%clk 0:00:31] } 20. gxf5+ { [%clk 0:00:18] } Kh6 { [%clk 0:00:31] } 21. f4 { [%clk 0:00:16] } Qh5 { [%clk 0:00:30] } 22. Qc7 { [%clk 0:00:09] } Bxf5 { [%clk 0:00:28] } 23. Bxf5 { [%clk 0:00:08] } Qxf5 { [%clk 0:00:28] } 24. Rg1 { [%clk 0:00:07] } g6 { [%clk 0:00:25] } 25. Ne2 { [%clk 0:00:05] } Rg8 { [%clk 0:00:22] } 26. Ng3 { [%clk 0:00:05] } Qg4 { [%clk 0:00:22] } 27. f5 { [%clk 0:00:04] } Rg7 { [%clk 0:00:21] } 28. Qe5 { [%clk 0:00:03] } Rf7 { [%clk 0:00:21] } 29. f6 { [%clk 0:00:02] } Re8 { [%clk 0:00:19] } 30. Nf5+ { [%clk 0:00:02] } Qxf5 { [%clk 0:00:18] } 31. Qxf5 { [%clk 0:00:02] } Rxf6 { [%clk 0:00:12] } 32. Qg5+ { [%clk 0:00:01] } Kg7 { [%clk 0:00:11] } 33. Rxe8 { [%clk 0:00:01] } Rf7 { [%clk 0:00:11] } 34. Qf6+ { [%clk 0:00:01] } Rxf6 { [%clk 0:00:10] } 35. Kd2 { [%clk 0:00:01] } Rf7 { [%clk 0:00:10] } 36. Rxf8 { [%clk 0:00:00] } Rxf8 { [%clk 0:00:09] } 37. Kd3 { [%clk 0:00:00] } Rf5 { 0-1 Black wins on time. } { [%clk 0:00:09] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: Center Game Trap 1: White"]
[Site "https://lichess.org/study/nsIdXAP4/tvuFoykN"]
[Result "*"]
[UTCDate "2020.06.01"]
[UTCTime "10:35:01"]
[Variant "Standard"]
[ECO "C22"]
[Opening "Center Game: Normal Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qa4 Qe7 5. Nc3 Nf6 6. Bg5 d5 7. O-O-O dxe4 8. Nxe4 Qxe4?? 9. Rd8+!! Kxd8 (9... Ke7 10. Qxe4+ Kxd8 11. Bxf6+ gxf6) 10. Qxe4 { [%cal Gg5d8] } (10. Bxf6+ gxf6 11. Qxe4 { This also works }) *


[Event "Rated Classical game"]
[Site "https://lichess.org/zAQEwQmJ"]
[Date "2019.12.14"]
[Round "-"]
[White "korkmazatif"]
[Black "TheHost"]
[Result "1-0"]
[WhiteElo "1931"]
[BlackElo "1721"]
[TimeControl "900+15"]
[Termination "Normal"]
[UTCDate "2020.06.01"]
[UTCTime "10:41:04"]
[Variant "Standard"]
[ECO "C22"]
[Opening "Center Game: Normal Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 { [%clk 0:15:00] } e5 { [%clk 0:15:00] } 2. d4 { [%clk 0:15:13] } exd4 { [%clk 0:14:48] } 3. Qxd4 { [%clk 0:15:28] } Nc6 { [%clk 0:15:03] } 4. Qa4 { [%clk 0:15:41] } Nf6 { [%clk 0:15:01] } 5. Nc3 { [%clk 0:15:52] } Qe7 { [%clk 0:15:12] } 6. Bg5 { [%clk 0:15:59] } d5 { [%clk 0:15:25] } 7. O-O-O { [%clk 0:15:52] } dxe4 { [%clk 0:15:24] } 8. Nxe4 { [%clk 0:15:24] } Qxe4 { [%clk 0:15:26] } 9. Rd8+ { [%clk 0:15:31] } Kxd8 { [%clk 0:14:35] } 10. Qxe4 { [%clk 0:15:41] } Be7 { [%clk 0:14:26] } 11. Bxf6 { [%clk 0:15:28] } Bxf6 { [%clk 0:14:36] } 12. Bc4 { [%clk 0:15:37] } Re8 { [%clk 0:12:44] } 13. Qd3+ { [%clk 0:15:28] } Bd7 { [%clk 0:12:48] } 14. Nf3 { [%clk 0:15:36] } h6 { [%clk 0:12:47] } 15. Bxf7 { [%clk 0:15:30] } Re7 { [%clk 0:12:53] } 16. Bg6 { [%clk 0:15:26] } Ne5 { [%clk 0:12:03] } 17. Nxe5 { [%clk 0:15:34] } Rxe5 { [%clk 0:12:09] } 18. Rd1 { [%clk 0:15:44] } Re7 { [%clk 0:12:12] } 19. Bf5 { [%clk 0:15:54] } Ke8 { [%clk 0:11:42] } 20. Bxd7+ { [%clk 0:16:00] } Kf8 { [%clk 0:11:57] } 21. Qh7 { [%clk 0:16:03] } Kf7 { [%clk 0:11:41] } 22. g3 { [%clk 0:15:24] } Rd8 { [%clk 0:11:52] } 23. Bf5 { [%clk 0:15:15] } Bg5+ { [%clk 0:11:59] } 24. f4 { [%clk 0:15:27] } Rxd1+ { [%clk 0:12:08] } 25. Kxd1 { [%clk 0:15:41] } Bf6 { [%clk 0:12:16] } 26. Qg6+ { [%clk 0:15:51] } Kf8 { [%clk 0:12:26] } 27. Qh7 { [%clk 0:15:54] } Bxb2 { [%clk 0:12:37] } 28. Qg6 { [%clk 0:15:33] } c5 { [%clk 0:12:39] } 29. g4 { [%clk 0:15:08] } b5 { [%clk 0:12:32] } 30. h4 { [%clk 0:14:55] } Bc3 { [%clk 0:12:45] } 31. Be4 { [%clk 0:14:55] } Rf7 { [%clk 0:11:35] } 32. Qd6+ { [%clk 0:15:01] } Re7 { [%clk 0:11:44] } 33. Qxc5 { [%clk 0:15:07] } Bf6 { [%clk 0:11:49] } 34. g5 { [%clk 0:14:56] } hxg5 { [%clk 0:12:02] } 35. fxg5 { [%clk 0:15:10] } Bb2 { [%clk 0:11:41] } 36. Qf5+ { [%clk 0:15:13] } Ke8 { [%clk 0:11:42] } 37. Bc6+ { [%clk 0:15:21] } Kd8 { [%clk 0:11:50] } 38. Qf8+ { 1-0 Black resigns. } { [%clk 0:15:29] } 1-0


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


[Event "🍄 Best Opening Traps 2020 🍄: Center Game Trap 3: Black"]
[Site "https://lichess.org/study/nsIdXAP4/8GzqeqXY"]
[Result "*"]
[UTCDate "2020.06.01"]
[UTCTime "10:46:26"]
[Variant "Standard"]
[ECO "C22"]
[Opening "Center Game: Paulsen Attack Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 Bb4+ 5. c3 Ba5 6. Bc4 Nf6 7. e5 O-O 8. exf6?? Re8! { [%csl Ge3][%cal Ge8e1] } 9. Qxe8+ Qxe8+ *


[Event "Rated Rapid tournament https://lichess.org/tournament/21NCVI72"]
[Site "https://lichess.org/YpqVr5iL"]
[Date "2019.12.29"]
[Round "-"]
[White "omid163"]
[Black "Pskov_rulit"]
[Result "0-1"]
[WhiteElo "1929"]
[BlackElo "2204"]
[TimeControl "600+0"]
[Termination "Normal"]
[UTCDate "2020.06.01"]
[UTCTime "10:49:03"]
[Variant "Standard"]
[ECO "C24"]
[Opening "Bishop's Opening: Ponziani Gambit"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 { [%clk 0:05:00] } e5 { [%clk 0:05:00] } 2. Bc4 { [%clk 0:04:56] } Nf6 { [%clk 0:04:58] } 3. d4 { [%clk 0:04:54] } exd4 { [%clk 0:04:54] } 4. Qxd4 { [%clk 0:04:53] } Nc6 { [%clk 0:04:52] } 5. Qe3 { [%clk 0:04:52] } Bb4+ { [%clk 0:04:44] } 6. c3 { [%clk 0:04:51] } Ba5 { [%clk 0:04:43] } 7. e5 { [%clk 0:04:50] } O-O { [%clk 0:04:33] } 8. exf6 { [%clk 0:04:48] } Re8 { [%clk 0:04:27] } 9. fxg7 { [%clk 0:04:47] } Bb6 { [%clk 0:04:21] } 10. Qxe8+ { [%clk 0:04:45] } Qxe8+ { [%clk 0:04:16] } 11. Ne2 { [%clk 0:04:43] } Ne5 { [%clk 0:04:12] } 12. Bb3 { [%clk 0:04:40] } Nd3+ { [%clk 0:04:09] } 13. Kd2 { [%clk 0:04:29] } Nxf2 { [%clk 0:04:01] } 14. Rf1 { [%clk 0:04:28] } d5 { [%clk 0:03:49] } 15. Nd4 { [%clk 0:04:18] } Ne4+ { [%clk 0:03:46] } 16. Kd3 { [%clk 0:04:15] } c6 { [%clk 0:03:42] } 17. Be3 { [%clk 0:04:06] } Kxg7 { [%clk 0:03:39] } 18. Nd2 { [%clk 0:03:47] } Nxd2 { [%clk 0:03:28] } 19. Kxd2 { [%clk 0:03:45] } Be6 { [%clk 0:03:27] } 20. Rf3 { [%clk 0:03:38] } Qd7 { [%clk 0:02:38] } 21. Raf1 { [%clk 0:03:34] } Rg8 { [%clk 0:02:32] } 22. Bc2 { [%clk 0:03:28] } Kf8 { [%clk 0:02:28] } 23. Bh6+ { [%clk 0:03:23] } Ke8 { [%clk 0:02:24] } 24. Nxe6 { [%clk 0:03:19] } Qxe6 { [%clk 0:02:06] } 25. Be3 { [%clk 0:03:04] } Rxg2+ { [%clk 0:02:03] } 26. Kd3 { [%clk 0:02:55] } Qe4# { 0-1 Black wins by checkmate. } { [%clk 0:01:53] } 0-1


[Event "🍄 Best Opening Traps 2020 🍄: Center Game Trap 4: White"]
[Site "https://lichess.org/study/nsIdXAP4/A8AmzBgR"]
[Result "*"]
[UTCDate "2020.06.01"]
[UTCTime "10:48:12"]
[Variant "Standard"]
[ECO "C22"]
[Opening "Center Game: Paulsen Attack Variation"]
[Annotator "https://lichess.org/@/SuperChessBud"]

1. e4 e5 2. d4 exd4 3. Qxd4 Nc6 4. Qe3 Bb4+ 5. c3 Ba5 6. Bc4 Nge7 7. Qg3 O-O 8. h4 Ng6 9. h5 Nge5 10. Bg5 Qe8 { [%cal Gh5e7] } 11. Bf6 g6?? 12. hxg6 { [%csl Gh7] } 12... Nxg6 (12... hxg6 13. Rh8#) 13. Qxg6+!! hxg6 14. Rh8# *


[Event "🍄 Best Opening Traps 2020 🍄: 💖Special Thanks to you💖"]
[Site "https://lichess.org/study/nsIdXAP4/dpR7nXss"]
[Result "*"]
[UTCDate "2020.05.30"]
[UTCTime "09:52:44"]
[Variant "Standard"]
[ECO "?"]
[Opening "?"]
[Annotator "https://lichess.org/@/SuperChessBud"]

{ Thank you so much for being one of this study and for liking them, i hope I will get a lot likes and support by comments in chat. One more time pls don't forget to leave like ❤ and support me via great comments in chat. See you soon in next study! I love you everyone! }
 *`,
};

try {
  module.exports = testData;
} catch (error) {
  console.warn('module export failed', error);
}
