'use strict';

// let { from } = rxjs;
// let { tap, map } = rxjs.operators;

console.log('BACKGROUND SCRIPT START');

//TODO avoid magic strings
function urlMatches(url, regexp) {
  return url.match('https://lichess.org/*');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function initializePageAction(tab) {
  let regexp = escapeRegExp(tab.url);

  if (urlMatches(tab.url, regexp)) {
    browser.pageAction.setTitle({ tabId: tab.id, title: 'Lichess tips' });
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

// browser.runtime.onMessage.addListener((message, sender, sendResponse) => {});

browser.pageAction.onClicked.addListener((tabInfo) => {
  // loadContentScript(tabInfo.id);

  let local = browser.storage.local.get('token');
  local.then((storage) => {
    if (storage.token)
      utils2
        .getCurrentGame(tabInfo.url, storage.token)
        .subscribe((currentGame) => {
          if (currentGame) {
            console.log('B : ', currentGame.gameId);
            loadContentScript(tabInfo.id);
          }
        });
  });
});

//TODO so ugly
function loadContentScript(tabId) {
  utils.executeScripts(tabId, [
    { file: '/libs/jquery-3.5.1.min.js' },
    { file: '/libs/rxjs.umd.min.js' },
    { file: '/src/utils.js' },
    { file: '/src/utils2.js' },
    { file: '/src/content_script.js' },
  ]);
}

console.log('BACKGROUND SCRIPT END');


