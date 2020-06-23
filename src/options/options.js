/* eslint-disable no-undef */
const brw = browser;
const doc = document;
/* eslint-enable no-undef */

function saveOptions(e) {
  brw.storage.local.set({
    token: doc.querySelector('#token').value.trim(),
    apiKey: doc.querySelector('#apiKey').value.trim(),
    restdb: doc.querySelector('#restdb').value.trim(),
    delay: doc.querySelector('#delay').value.trim(),
  });
  e.preventDefault();
}

function restoreOptions() {
  const storage = brw.storage.local.get();
  storage.then((res) => {
    doc.querySelector('#token').value = res.token ? res.token.trim() : '';
    doc.querySelector('#apiKey').value = res.apiKey ? res.apiKey.trim() : '';
    doc.querySelector('#restdb').value = res.restdb ? res.restdb.trim() : '';
    doc.querySelector('#delay').value = res.delay ? res.delay.trim() : '';
  });
}

doc.addEventListener('DOMContentLoaded', restoreOptions);
doc.addEventListener('change', saveOptions);
