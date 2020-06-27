/* eslint-disable no-undef */
const brw = browser;
const doc = document;
/* eslint-enable no-undef */

function saveOptions(e) {
  brw.storage.local.set({
    token: doc.getElementById('token').value.trim(),
    apiKey: doc.getElementById('apiKey').value.trim(),
    restdb: doc.getElementById('restdb').value.trim(),
    delay: doc.getElementById('delay').value.trim(),
    startColor: doc.getElementById('startColor').value,
    destColor: doc.getElementById('destColor').value,
    showSquares: doc.getElementById('showSquares').checked,
  });
  e.preventDefault();
}

function restoreOptions() {
  const storage = brw.storage.local.get();

  storage.then((res) => {
    doc.getElementById('token').value = res.token ? res.token.trim() : '';
    doc.getElementById('apiKey').value = res.apiKey ? res.apiKey.trim() : '';
    doc.getElementById('restdb').value = res.restdb ? res.restdb.trim() : '';
    doc.getElementById('startColor').value = res.startColor
      ? res.startColor
      : '';
    doc.getElementById('destColor').value = res.destColor ? res.destColor : '';
    doc.getElementById('delay').value = res.delay ? res.delay : 300;
    doc.getElementById('showSquares').checked =
      res.showSquares !== undefined ? res.showSquares : true;
  });
}

doc.getElementById('showSquares').onchange = function () {
  doc.getElementById('startColor').disabled = !this.checked;
  doc.getElementById('destColor').disabled = !this.checked;
  if (!this.checked) {
    doc.getElementById('labelStartColor').classList.add('disabled');
    doc.getElementById('labelDestColor').classList.add('disabled');
  } else {
    doc.getElementById('labelStartColor').classList.remove('disabled');
    doc.getElementById('labelDestColor').classList.remove('disabled');
  }
};

doc.addEventListener('DOMContentLoaded', restoreOptions);
doc.addEventListener('change', saveOptions);
