"use strict";

console.log("BACKGROUND SCRIPT START");

function urlMatches(url, regexp) {
  return url.match("https://lichess.org/aHB3Igbd/black");
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function initializePageAction(tab) {
  //   browser.storage.local.get("url").then((res) => {
  // if (!!!res.url) return false;
  console.log("=>", tab.url);
  let regexp = escapeRegExp(tab.url);

  if (urlMatches(tab.url, regexp)) {
    browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
    browser.pageAction.setTitle({ tabId: tab.id, title: "Go" });
    browser.pageAction.show(tab.id);
  }
  //   });
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

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.msg === "starting") {
    browser.pageAction.setIcon({ tabId: sender.tab.id, path: "icons/on.svg" });
  }
});

console.log("BACKGROUND SCRIPT END");
