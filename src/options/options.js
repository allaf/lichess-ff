/* eslint-disable no-undef */
const brw = browser;
const doc = document;
/* eslint-enable no-undef */

function saveOptions(e) {
  brw.storage.local.set({
    token: doc.querySelector('#token').value.trim(),
    apiKey: doc.querySelector('#apiKey').value.trim(),
  });
  e.preventDefault();
}

function restoreOptions() {
  // let storageItem = brw.storage.local.get('token');
  // let storageApiKey = brw.storage.local.get('apiKey');
  // storageItem.then((res) => {
  //   doc.querySelector('#token').value = res.token ? res.token.trim() : '';
  // });
  // storageApiKey.then((res) => {
  //   doc.querySelector('#apiKey').value = res.apiKey ? res.apiKey.trim() : '';
  // });

  let storage = brw.storage.local.get();
  storage.then((res) => {
    doc.querySelector('#token').value = res.token ? res.token.trim() : '';
    doc.querySelector('#apiKey').value = res.apiKey ? res.apiKey.trim() : '';
  });
}

doc.addEventListener('DOMContentLoaded', restoreOptions);
doc.addEventListener('change', saveOptions);
