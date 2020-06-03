'use strict';
console.log('BACKGROUND SCRIPT START');

let { Observable, of, from, forkJoin } = rxjs;
let { fromFetch } = rxjs.fetch;
let {
  toArray,
  tap,
  map,
  mergeMap,
  merge,
  flatMap,
  delay,
  filter,
  first,
  scan,
  switchMap,
  catchError,
} = rxjs.operators;

function urlMatches(url, regexp) {
  return url.match('https://lichess.org/*');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function initializePageAction(tab) {
  let regexp = escapeRegExp(tab.url);

  if (urlMatches(tab.url, regexp)) {
    // browser.pageAction.setIcon({ tabId: tab.id, path: 'icons/off.svg' });
    browser.pageAction.setTitle({ tabId: tab.id, title: 'Go' });
    browser.pageAction.show(tab.id);
  }
}

/*
When first loaded, initialize the page action for all tabs.
*/
browser.tabs.query({}).then((tabs) => {
  for (let tab of tabs) {
    initializePageAction(tab);
  }
});

/*
Each time a tab is updated, reset the page action for that tab.
*/
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {});

browser.pageAction.onClicked.addListener((tabInfo) => {
  getCurrentGame(tabInfo.url).subscribe((currentGame) => {
    if (currentGame) {
      browser.tabs.executeScript(
        tabInfo.id,
        { file: '/libs/jquery-3.5.1.min.js' },
        function () {
          browser.tabs.executeScript(
            tabInfo.id,
            { file: '/libs/rxjs.umd.min.js' },
            function () {
              browser.tabs.executeScript(
                tabInfo.id,
                {
                  file: '/src/content_script.js',
                },
                function () {
                  console.log('content_script loaded ok');
                }
              );
            }
          );
        }
      );
    }
  });
});

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
    tap((x) => console.log('tap', x)),
    map((g) => g.filter((x) => url.includes(x.gameId))[0])
  );
}

console.log('BACKGROUND SCRIPT END');
