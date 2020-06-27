'use strict';

/* eslint-disable no-undef */
const brw = browser;
const ApiUtils = apiUtils;
const Utils = utils;
const jQuery = $;
/* eslint-enable no-undef */

let TOKEN;
let APIKEY;
let RESTDB;

const RESTBD_URL = 'https://chesstips-02ee.restdb.io/rest/lichess-ff-db';
const URL_MATCH = 'https://lichess.org/*';
const FILE_JQUERY = '/libs/jquery-3.5.1.min.js';
const FILE_RXJS = '/libs/rxjs.umd.min.js';
const FILE_CHESSJS = '/libs/chess.js';
const FILE_UTILS = '/src/utils.js';
const FILE_API_UTILS = '/src/apiUtils.js';
const FILE_CONTENT_SCRIPT_GAME = '/src/content_script_game.js';
const FILE_CONTENT_SCRIPT_ANALYSIS = '/src/content_script_analysis.js';

var settingsRequest = {
  async: true,
  crossDomain: true,
  url: RESTBD_URL,
  method: '',
  headers: {
    'content-type': 'application/json',
    'x-apikey': '',
    'cache-control': 'no-cache',
  },
  processData: false,
};

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
  brw.pageAction.setTitle({
    tabId: tabId,
    title,
  });
  brw.pageAction
    .setIcon({ tabId: tabId, path: 'img/lichess_logo_sad.png' })
    .then((x) => x);
  brw.pageAction.show(tabId);
}

function loadContentAnalysis(tabId, apiKey, restdb) {
  ApiUtils.getDistantDb(apiKey, restdb).then((data) => {
    DB = data;
    Utils.executeScripts(tabId, [
      { file: FILE_JQUERY },
      { file: FILE_RXJS },
      { file: FILE_UTILS },
      { file: FILE_CONTENT_SCRIPT_ANALYSIS },
    ]);
    brw.tabs.insertCSS(tabId, { file: '/src/css/analysis.css' });
    // brw.tabs.insertCSS(tabId, { file: '/src/css/jquery-ui.css' });
  });
}

function loadContentScript(tabId) {
  // eslint-disable-next-line no-undef
  utils.executeScripts(tabId, [
    { file: FILE_JQUERY },
    { file: FILE_RXJS },
    { file: FILE_UTILS },
    { file: FILE_CHESSJS },
    { file: FILE_API_UTILS },
    { file: FILE_CONTENT_SCRIPT_GAME },
  ]);
}

function loadContentGame(tabInfo, token, apiKey, restdb) {
  // eslint-disable-next-line no-undef
  ApiUtils.getCurrentGameForUrl(tabInfo.url, token).subscribe((currentGame) => {
    if (currentGame) {
      // eslint-disable-next-line no-undef
      ApiUtils.getDistantDb(apiKey, restdb).then((data) => {
        DB = data;
        loadContentScript(tabInfo.id);
        brw.tabs.insertCSS(tabInfo.id, { file: '/src/css/game.css' });
      });
    } else {
      displayWarningSettings(
        tabInfo.id,
        'No ongoing game or not on the right tab'
      );
    }
  });
}

brw.pageAction.onClicked.addListener((tabInfo) => {
  const local = brw.storage.local.get();
  local.then((storage) => {
    if (!storage.restdb) {
      brw.storage.local.set({
        restdb: RESTBD_URL,
      });
    }
    if (!(storage.token && storage.apiKey && storage.restdb)) {
      displayWarningSettings(tabInfo.id, 'You must setup the addon');
    }
    if (storage.token && storage.apiKey && storage.restdb) {
      TOKEN = storage.token;
      APIKEY = storage.apiKey;
      RESTDB = storage.restdb;
      settingsRequest.headers['x-apikey'] = APIKEY;

      if (Utils.isOnAnalysisPage(tabInfo.url)) {
        // User on analysis page
        loadContentAnalysis(tabInfo.id, APIKEY, RESTDB);
      } else {
        // User on game page
        loadContentGame(tabInfo, TOKEN, APIKEY, RESTDB);
      }
    }
  });
});

brw.runtime.onMessage.addListener((msg, sender, sendReply) => {
  if (msg === 'get-data') {
    sendReply({
      games: DB,
    });
  } else if (msg === 'get-data-refetch') {
    ApiUtils.getDistantDb(APIKEY, RESTDB).then((data) => {
      DB = data;
      brw.tabs.sendMessage(sender.tab.id, { id: 'get-data-refetch', db: data });
    });
  } else if (msg.id === 'update-tip') {
    getTip(msg.tip._id).done((resp) => {
      updateTip(resp, msg.tip)
        .done(() => {
          brw.tabs.sendMessage(sender.tab.id, { id: msg.id, status: 'ok' });
        })
        .fail(() => {
          brw.tabs.sendMessage(sender.tab.id, { id: msg.id, status: 'ko' });
          console.error('put tip failed');
        });
    });
  } else if (msg.id === 'add-tip') {
    postTip(msg.trap)
      .done(() => {
        brw.tabs.sendMessage(sender.tab.id, { id: msg.id, status: 'ok' });
      })
      .fail(() => {
        brw.tabs.sendMessage(sender.tab.id, { id: msg.id, status: 'ko' });
        console.error('post tip failed');
      });
  }
});

function postTip(tip) {
  var settings = Object.assign({}, settingsRequest);
  settings.method = 'POST';
  settings.data = JSON.stringify(tip);
  return jQuery.ajax(settings);
}

function getTip(_id) {
  var settings = Object.assign({}, settingsRequest);
  settings.method = 'GET';
  settings.url = RESTBD_URL + '/' + _id;
  return jQuery.ajax(settings);
}

function updateTip(obj, tipData) {
  var settings = Object.assign({}, settingsRequest);
  settings.method = 'PUT';
  settings.url = RESTBD_URL + '/' + obj._id;
  settings.data = JSON.stringify({
    positions: obj.positions.concat({ fen: tipData.fen, move: tipData.move }),
  });

  return jQuery.ajax(settings);
}
