'use strict';

// eslint-disable-next-line no-undef
const brw = browser;

//TODO avoid magic strings
function urlMatches(url) {
  return url.match('https://lichess.org/*');
}

// function escapeRegExp(string) {
// return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// }

function initializePageAction(tab) {
  // let regexp = escapeRegExp(tab.url);

  if (urlMatches(tab.url)) {
    brw.pageAction.setTitle({ tabId: tab.id, title: 'Lichess tips' });
    brw.pageAction.show(tab.id);
  }
}

/*
When first loaded, initialize the page action for all tabs.
*/
brw.tabs.query({}).then((tabs) => {
  for (let tab of tabs) {
    initializePageAction(tab);
  }
});

/*
Each time a tab is updated, reset the page action for that tab.
*/
brw.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

brw.pageAction.onClicked.addListener((tabInfo) => {
  let local = brw.storage.local.get('token');
  local.then((storage) => {
    if (storage.token)
      // eslint-disable-next-line no-undef
      apiUtils
        .getCurrentGame(tabInfo.url, storage.token)
        .subscribe((currentGame) => {
          if (currentGame) {
            loadContentScript(tabInfo.id);
          }
        });
  });
});

function loadContentScript(tabId) {
  // eslint-disable-next-line no-undef
  utils.executeScripts(tabId, [
    { file: '/libs/jquery-3.5.1.min.js' },
    { file: '/libs/rxjs.umd.min.js' },
    { file: '/src/utils.js' },
    { file: '/src/apiUtils.js' },
    { file: '/src/data.js' },
    { file: '/src/content_script.js' },
  ]);
}
