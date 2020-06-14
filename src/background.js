'use strict';

console.log('background starts');

// eslint-disable-next-line no-undef
const brw = browser;

const RESTBD_URL = 'https://chesstips-02ee.restdb.io/rest/lichess-ff-db';
const URL_MATCH = 'https://lichess.org/*';
const FILE_JQUERY = '/libs/jquery-3.5.1.min.js';
const FILE_RXJS = '/libs/rxjs.umd.min.js';
const FILE_UTILS = '/src/utils.js';
const FILE_API_UTILS = '/src/apiUtils.js';
const FILE_CONTENT_SCRIPT = '/src/content_script.js';

let DB = [];

function urlMatches(url) {
  return url.match(URL_MATCH);
}

function initializePageAction(tab) {
  if (urlMatches(tab.url)) {
    brw.pageAction.setTitle({ tabId: tab.id, title: 'Lichess tips' });
    brw.pageAction.show(tab.id);
  }
}

/*
When first loaded, initialize the page action for all tabs.
*/
brw.tabs.query({}).then((tabs) => {
  for (const tab of tabs) {
    initializePageAction(tab);
  }
});

/*
Each time a tab is updated, reset the page action for that tab.
*/
brw.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

function displayWarningSettings(tabId, title) {
  console.warn('You must define storage.token && storage.apiKey');
  brw.pageAction.setTitle({
    tabId: tabId,
    title,
  });
  brw.pageAction
    .setIcon({ tabId: tabId, path: 'img/lichess_logo_sad.png' })
    .then((x) => x);
  brw.pageAction.show(tabId);
}

brw.pageAction.onClicked.addListener((tabInfo) => {
  const local = brw.storage.local.get();
  local.then((storage) => {
    if (!storage.restdb) {
      brw.storage.local.set({
        restdb: RESTBD_URL,
      });
      console.log('SETTING RESTDB');
    }
    if (!(storage.token && storage.apiKey && storage.restdb)) {
      displayWarningSettings(tabInfo.id, 'You must setup the addon');
    }
    if (storage.token && storage.apiKey && storage.restdb) {
      // eslint-disable-next-line no-undef
      apiUtils
        .getCurrentGame(tabInfo.url, storage.token)
        .subscribe((currentGame) => {
          if (currentGame) {
            // eslint-disable-next-line no-undef
            apiUtils
              .getDistantDb(storage.apiKey, storage.restdb)
              .then((data) => {
                console.log('DB fetched', data);
                DB = data;
                loadContentScript(tabInfo.id);
              });
          } else {
            displayWarningSettings(
              tabInfo.id,
              'No ongoing game or not on the right tab'
            );
          }
        });
    }
  });
});

brw.runtime.onMessage.addListener((msg, sender, sendReply) => {
  if (msg === 'get-data') {
    sendReply({
      games: DB,
    });
  }
});

function loadContentScript(tabId) {
  // eslint-disable-next-line no-undef
  utils.executeScripts(tabId, [
    { file: FILE_JQUERY },
    { file: FILE_RXJS },
    { file: FILE_UTILS },
    { file: FILE_API_UTILS },
    { file: FILE_CONTENT_SCRIPT },
  ]);
}

console.log('background ends');
