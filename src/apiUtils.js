let { from } = rxjs;
let { tap, map } = rxjs.operators;

var apiUtils = {
  getCurrentGame: (currentUrl, token) => {
    return rxjs
      .from(
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
      )
      .pipe(
        rxjs.operators.map((g) => g.nowPlaying),
        rxjs.operators.map(
          (g) => g.filter((x) => currentUrl.includes(x.gameId))[0]
        )
      );
  },
};
