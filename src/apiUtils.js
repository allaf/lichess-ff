/* eslint-disable no-undef */

const { from } = rxjs;
const { map } = rxjs.operators;

const URL_ACCOUNT = 'https://lichess.org/api/account/playing';

// eslint-disable-next-line no-unused-vars
var apiUtils = {
  getDistantDb: (apiKey) => 
    $.ajax({
      async: true,
      crossDomain: true,
      url: 'https://chesstips-02ee.restdb.io/rest/lichess-ff-db',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-apikey': apiKey,
        'cache-control': 'no-cache',
      },
    }),

  getCurrentGame: (currentUrl, token) => {
    return from(
      fetch(URL_ACCOUNT, {
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .catch((err) => {
          console.error('FETCH ERROR ', err);
        })
    ).pipe(
      map((g) => g.nowPlaying),
      map((g) => g.filter((x) => currentUrl.includes(x.gameId))[0])
    );
  },
};
