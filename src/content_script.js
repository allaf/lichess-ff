'use strict';

let { Observable, of, from, forkJoin, BehaviorSubject } = rxjs;
let { fromFetch } = rxjs.fetch;
let {
  toArray,
  tap,
  map,
  mergeMap,
  flatMap,
  filter,
  delay,
  scan,
} = rxjs.operators;

(function () {
  const gameSubject = new BehaviorSubject();

  function main() {
    gameSubject.subscribe((g) => {
      if (g) {
        var div = $('.mchat__content.tips-content');
        if (div) {
          div.html(buildHtmlSuggestions(g));
        }
      }
    });

    getCurrentGame(location.href).subscribe((g) => {
      if (g) {
        gameSubject.next(g);
      }
    });

    var activeTabClass = 'mchat__tab-active';

    {
      var divEntries = $('.mchat__tabs.nb_2');
      divEntries.append(
        '<div class="mchat__tab tips"><span>Suggestions</span></div>'
      );
    }

    $('.mchat__tab').click(function () {
      var jThis = $(this);
      $('.' + activeTabClass).removeClass(activeTabClass);
      jThis.addClass(activeTabClass);

      if (jThis.hasClass('tips')) {
        let contentObj = $('.mchat__content');
        contentObj.empty();
        contentObj.removeClass();
        contentObj.addClass('mchat__content');
        contentObj.addClass('tips-content');
        contentObj.html(buildHtmlSuggestions(gameSubject.getValue()));
        // TODO db sur le cloud ?
      } else {
        $('.tips-content').empty();
      }
    });

    monitorBoard();
  }

  function getCurrentGame(url) {
    // TODO read token from extension prefs
    return from(
      fetch('https://lichess.org/api/account/playing', {
        method: 'get',
        headers: {
          Authorization: 'Bearer xjNKzgGaN2ASnuHH',
        },
      }).then((res) => res.json())
    ).pipe(
      map((g) => g.nowPlaying),
      map((g) => g.filter((x) => url.includes(x.gameId))[0])
    );
  }

  function buildHtmlSuggestions(currentGame) {
    let gameList = fetchSuggestionsFor(currentGame);
    let html = gameList.length
      ? '<ul style="padding:.5em 0 .5em 10px">' +
        getListLinks(gameList) +
        '</ul>'
      : 'rien :(';
    return html;
  }

  function getListLinks(gameList) {
    return gameList
      .map(
        (g) =>
          '<li><a href="' +
          g.url +
          '" >' +
          g.name +
          ' ' +
          g.nextMoves +
          '</a></li>'
      )
      .join('');
  }

  function monitorBoard() {
    $('cg-board').on('DOMSubtreeModified', function (e) {
      gameSubject.next(x);
    });
  }

  function fetchSuggestionsFor(currentGame) {
    return getDb()
      .games.filter((g) => g.fen.split(' ')[0] === currentGame.fen)
      .filter((g) => g.fen.split(' ')[1] === currentGame.color.substr(0, 1));
  }

  function getDb() {
    return {
      games: [
        {
          name: 'Englund gambit',
          fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
          url: 'https://youtu.be/tYOnym3ZINU?t=475',
          nextMoves: ['e5', 'dxe5', 'Nc6'],
        },
        {
          name: 'Venus trap',
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
          url: 'https://youtu.be/L-jTuKWJAG8?t=522',
          nextMoves: ['Kb3'],
        },
        {
          name: 'Mars trap',
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
          url: 'https://youtu.be/L-jTuKWJAG8?t=386',
          nextMoves: ['Kb3'],
        },
        {
          name: 'Hercule trap',
          fen:
            'r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7',
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
          name: 'Gambit evans',
          fen:
            'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
          url: 'https://youtu.be/LGAm_8rbeMc?t=205',
          nextMoves: ['b4'],
        },
        {
          name: "Legal's trap",
          fen:
            '',
          url: 'https://youtu.be/tYOnym3ZINU?t=71',
          nextMoves: [''],
        },
        {
          name: '',
          fen:
            '',
          url: '',
          nextMoves: [''],
        },
        {
          name: '',
          fen:
            '',
          url: '',
          nextMoves: [''],
        },
        {
          name: '',
          fen:
            '',
          url: '',
          nextMoves: [''],
        },
        {
          name: '',
          fen:
            '',
          url: '',
          nextMoves: [''],
        },
        {
          name: '',
          fen:
            '',
          url: '',
          nextMoves: [''],
        },
        {
          name: '',
          fen:
            '',
          url: '',
          nextMoves: [''],
        },
        {
          name: '',
          fen:
            '',
          url: '',
          nextMoves: [''],
        },
        {
          name: '',
          fen:
            '',
          url: '',
          nextMoves: [''],
        },
      ],
    };
  }

  main();

  exportFunction(notify, window, { defineAs: 'notify' });
})();
