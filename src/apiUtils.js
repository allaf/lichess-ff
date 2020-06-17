/* eslint-disable no-undef */

const { from } = rxjs;
const { map } = rxjs.operators;

const URL_ACCOUNT = 'https://lichess.org/api/account/playing';

// eslint-disable-next-line no-unused-vars
var apiUtils = {
  getDistantDb: (apiKey, dbUrl) =>
    $.ajax({
      async: true,
      crossDomain: true,
      url: dbUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-apikey': apiKey,
        'cache-control': 'no-cache',
      },
    }),

  getCurrentGameForUrl: (currentUrl, token) => {
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

  delayObs: (dataArray, ms, callback) => {
    from(dataArray)
      .pipe(concatMap((item) => of(item).pipe(delay(ms))))
      .subscribe((e) => {
        callback(e);
      });
  },
};

try {
  module.exports = apiUtils;
} catch (error) {
  console.warn('module export failed', error);
}
