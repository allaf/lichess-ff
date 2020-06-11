let { from } = rxjs;
let { tap, map } = rxjs.operators;

var utils2 = {
  getCurrentGame: (url, token) => {
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
          console.error('FETCH ERROR ', error);
        })
    ).pipe(
      map((g) => g.nowPlaying),
      map((g) => g.filter((x) => url.includes(x.gameId))[0]),
    );
  },
};

// module.exports = utils2;
