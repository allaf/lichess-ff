'use strict';

console.log('background starts');

/* eslint-disable no-undef */
const brw = browser;
const ApiUtils = apiUtils;
const Utils = utils;
const jQuery = $;
/* eslint-enable no-undef */

const RESTBD_URL = 'https://chesstips-02ee.restdb.io/rest/lichess-ff-db';
const URL_MATCH = 'https://lichess.org/*';
const FILE_JQUERY = '/libs/jquery-3.5.1.min.js';
const FILE_RXJS = '/libs/rxjs.umd.min.js';
const FILE_UTILS = '/src/utils.js';
const FILE_API_UTILS = '/src/apiUtils.js';
const FILE_CONTENT_SCRIPT = '/src/content_script.js';
const FILE_CONTENT_SCRIPT_ANALYSIS = '/src/content_script_analysis.js';

var settingsPut = {
  async: true,
  crossDomain: true,
  url: 'https://chesstips-02ee.restdb.io/rest/lichess-ff-db',
  method: 'PUT',
  headers: {
    'content-type': 'application/json',
    'x-apikey': '5ee2fc464e6043315b0af9f4',
    'cache-control': 'no-cache',
  },
  processData: false,
};

var settingsPost = {
  async: true,
  crossDomain: true,
  url: 'https://chesstips-02ee.restdb.io/rest/lichess-ff-db',
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-apikey': '5ee2fc464e6043315b0af9f4',
    'cache-control': 'no-cache',
  },
  processData: false,
};

var settingsGet = Object.assign({}, settingsPut);
settingsGet.method = 'GET';

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

function loadContentAnalysis(tabId, apiKey, restdb) {
  ApiUtils.getDistantDb(apiKey, restdb).then((data) => {
    DB = data;
    console.log('db is fetched', data.length, tabId);
    Utils.executeScripts(tabId, [
      { file: FILE_JQUERY },
      { file: FILE_RXJS },
      { file: FILE_UTILS },
      { file: FILE_API_UTILS },
      { file: FILE_CONTENT_SCRIPT_ANALYSIS },
    ]);
    brw.tabs.insertCSS(tabId, { file: '/src/css/analysis.css' }).then(() => {
      console.log('CSS INSERTED');
    });
  });
}

function loadContentGame(tabInfo, token, apiKey, restdb) {
  // eslint-disable-next-line no-undef
  ApiUtils.getCurrentGameForUrl(tabInfo.url, token).subscribe((currentGame) => {
    if (currentGame) {
      // eslint-disable-next-line no-undef
      ApiUtils.getDistantDb(apiKey, restdb).then((data) => {
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
      if (Utils.isOnAnalysisPage(tabInfo.url)) {
        console.log('on analysis page');
        loadContentAnalysis(tabInfo.id, storage.apiKey, storage.restdb);
      } else {
        // on game page
        loadContentGame(tabInfo, storage.token, storage.apiKey, storage.restdb);
      }
    }
  });
});

brw.runtime.onMessage.addListener((msg, sender, sendReply) => {
  if (msg === 'get-data') {
    sendReply({
      games: DB,
    });
  } else if (msg.id === 'update-tip') {
    // refreshDb()
    getTip(msg.tip._id).done((resp) => {
      console.log('got the tip from db', resp);
      updateTip(resp, msg.tip)
        .done((updDone) => {
          console.log('upload done ', updDone);
        })
        .fail(() => {
          console.error('put tip failed');
        });
    });
  } else if (msg.id === 'add-tip') {
    console.log('THE TRAP TO ADD', msg.trap);
    // let trap = {fen:msg.trap};
    postTip(msg.trap)
      .done((postRes) => {
        console.log('post done ', postRes);
      })
      .fail(() => {
        console.error('post tip failed');
      });
    // sendReply(msg.trap);
  }
});

function postTip(tip) {
  console.log('postTip');
  var settings = Object.assign({}, settingsPost);
  settings.data = JSON.stringify(tip);
  return jQuery.ajax(settings); //TODO why not in contentscript ??
}

function getTip(_id) {
  var settings = Object.assign({}, settingsGet);
  settings.url = 'https://chesstips-02ee.restdb.io/rest/lichess-ff-db/' + _id; //TODO const
  return jQuery.ajax(settings);
}

function updateTip(obj, tipData) {
  console.log('updateTip');
  var settings = Object.assign({}, settingsPut);
  settings.url =
    'https://chesstips-02ee.restdb.io/rest/lichess-ff-db/' + obj._id; //TODO const
  settings.data = JSON.stringify({
    nextMoves: obj.nextMoves.concat(tipData.move),
    fen: obj.fen.concat(tipData.fen),
  });

  return jQuery.ajax(settings);
}

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
