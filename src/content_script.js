'use strict';

console.log('content starts');

/* eslint-disable no-undef */
const jQuery = $;
const rx = rxjs;
const Utils = utils;
const ApiUtils = apiUtils;
const brw = browser;
/* eslint-enable no-undef */

let DB = [];

const gameSubject = new rx.BehaviorSubject();
gameSubject.subscribe((game) => {
  if (game) {
    var tipsDiv = jQuery('.mchat__content.tips-content');
    if (tipsDiv) {
      console.log('am updating the tips for new fen => ', game.fen);
      jQuery('#tips-wait').show();
      tipsDiv.html(buildHtmlTips(game));
      jQuery('#tips-wait').hide();
    }
  }
});

function main() {
  insertTipTab();

  updateGame();

  jQuery('.mchat__tab').click(function () {
    var jThis = jQuery(this);
    var activeTabClass = 'mchat__tab-active';
    jQuery('.' + activeTabClass).removeClass(activeTabClass);
    jThis.addClass(activeTabClass);

    if (jThis.hasClass('tips')) {
      const contentObj = jQuery('.mchat__content');
      contentObj.empty();
      contentObj.removeClass();
      contentObj.addClass('mchat__content');
      contentObj.addClass('tips-content');
      contentObj.html(buildHtmlTips(gameSubject.getValue()));
    } else {
      jQuery('.tips-content').empty();
    }
  });
  jQuery('.mchat__tab.tips').click();

  monitorChange();
}

function buildHtmlTips(currentGame) {
  const tips = Utils.fetchTips(currentGame, DB);
  console.log('=> tips found : ', tips.length);
  let html = tips.length
    ? '<ul style="flex: 1 1 auto; padding:.5em 0 .5em 10px;">' +
      Utils.getListLinks(tips, currentGame.fen).join('') +
      '</ul>'
    : '<div style="flex: 1 1 auto;padding:.5em 0 .5em 10px"><span>No tips found :(</span> </div>';

  var today = new Date();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  html +=
    '<span style="padding: 3px 20px 3px 4px;border-top: 1px solid #404040;"><strong>' +
    ' (' +
    time +
    ') </strong></span>';
  return html;
}

function parsePieces() {
  const domPieces = jQuery('cg-board > piece').toArray();

  const jsonPieces = domPieces.map((domPiece) => {
    const jp = jQuery(domPiece);
    const coords = jp
      .css('transform')
      .match(/matrix\(1, 0, 0, 1, (.*), (.*)\)$/);
    return {
      color: jp.hasClass('black') ? 'black' : 'white',
      piece: jp.attr('class').split(/[ ]/).pop(),
      x: Number(coords[1]),
      y: Number(coords[2]),
    };
  });
  return jsonPieces;
}

function insertTipTab() {
  const imgSrc = brw.runtime.getURL('img/ajax-loader.gif');
  jQuery('.mchat__tabs.nb_2').append(
    '<div id="tips" class="mchat__tab tips"><span>Tips</span>' +
      '<img id="tips-wait" style="padding-left:3px;" src="' +
      imgSrc +
      '">'
  );
}

const nbMoves = jQuery('.moves>m2').length;

function monitorChange() {
  jQuery('.moves').on('DOMSubtreeModified', () => {
    console.log('monitor event');
    setTimeout(function () {
      if (isMyTurn() && nbMoves !== jQuery('.moves>m2').length) updateGame();
    }, 1000);
  });
}

function updateGame() {
  const pieces = parsePieces();
  const width = jQuery('cg-container').innerWidth();
  const piecesWithIdx = Utils.pieceTranslationToPos(width, pieces);
  const fen = Utils.piecesIdxToFen(piecesWithIdx, gameSubject.getValue().color);

  const g = gameSubject.getValue();
  console.log('nexting game');
  g.fen = fen;
  gameSubject.next(g);
}

function isMyTurn() {
  const nbMoves = jQuery('.moves > m2').length;
  const myColor = gameSubject.getValue().color;
  return (
    (myColor === 'white' && !(nbMoves % 2)) ||
    (myColor === 'black' && nbMoves % 2)
  );
}

// eslint-disable-next-line no-undef
jQuery(document).ready(function () {
  brw.storage.local.get('token').then((storage) => {
    if (storage.token) {
      ApiUtils
        // eslint-disable-next-line no-undef
        .getCurrentGame(window.location.href, storage.token)
        .subscribe((g) => {
          brw.runtime.sendMessage('get-data').then((reply) => {
            DB = reply;
            console.log('DB recup', DB);
            gameSubject.next(g);
            main();
          });
        });
    }
  });
});

console.log('content end');
