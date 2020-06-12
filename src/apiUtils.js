/* eslint-disable no-undef */

let { from } = rxjs;
let { map } = rxjs.operators;

// eslint-disable-next-line no-unused-vars
var apiUtils = {
  getCurrentGame: (currentUrl, token) => {
    return from(
      fetch('https://lichess.org/api/account/playing', {
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
