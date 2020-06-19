'use strict';

console.log('content analysis starts');

//TODO bug parsing chapter for CQhQn8Kg

/* eslint-disable no-undef */
const jQuery = $;
const brw = browser;
const Utils = utils;
const rx = rxjs;
const op = rxjs.operators;
/* eslint-enable no-undef */

const DELAY_AUTO = 1000;
const keyRightEvent = new KeyboardEvent('keydown', { which: 39 });
const keyLeftEvent = new KeyboardEvent('keydown', { which: 37 });

let DB;

brw.runtime.onMessage.addListener((msg) => {
  if (msg.id === 'get-data-refetch') {
    const select = jQuery('#selectTip');
    select.empty();
    populateWithTips(select, msg.db);
  }
});

brw.runtime.sendMessage('get-data').then((res) => {
  DB = res;
  main();
});

function populateWithTips(selectEl, tips) {
  const variant = getVariant();
  selectEl.append('<option selected></option>');
  tips
    .filter((tip) => tip.variant === variant)
    .forEach((tip) => {
      selectEl.append(`<option value="${tip._id}">${tip.name}</option>`);
    });
}

function createInput(id, size) {
  return jQuery('<input/>', { id, type: 'text', size, required: 'true' });
}
function createLabel(t) {
  return jQuery('<label/>', { class: 'name', type: 'text' }).html(t);
}
function createBt(id, t, c, icon = '') {
  return jQuery('<button/>', {
    id,
    class: c,
    'data-icon': icon,
  }).html(t);
}

function createTipForm() {
  const outer = jQuery('<div/>', { class: 'tipsDivAnalysis' });

  const divAdd = jQuery('<div/>', { class: 'divAdd' });

  const divAddInput1 = jQuery('<div/>', { class: 'inputLine' });
  const divAddInput2 = jQuery('<div/>', { class: 'inputLine' });
  const divAddBt = jQuery('<div/>', { class: 'divBt' });

  const labelTitle = createLabel('Title');
  const inputTitle = createInput('inputTitle', 20);
  const labelUrl = createLabel('Url');
  const inputUrl = createInput('inputUrl', 20);

  const labelStudyId = createLabel('Study id');
  const inputStudyId = createInput('inputStudyId', 10).val('nsIdXAP4');

  const labelSelectChapter = createLabel('Chapter');
  const selectChapter = jQuery('<select/>', { id: 'selectChapter' });
  const selectChapterMult = jQuery('<select/>', {
    id: 'selectChapterMult',
    multiple: '',
  });
  const btLoadStudy = createBt(
    'btLoadStudy',
    '',
    'marginL button button-thin action text',
    'P'
  ).click(handleLoadStudy);

  const btLoadChapter = createBt(
    'btLoadChapter',
    'Load',
    'marginL button button-thin action text',
    'G'
  ).click(handleLoadChapter);

  const btLoadChapterMultWhite = createBt(
    'btLoadChapterMultWhite',
    'Load for White',
    'marginL button button-thin action text',
    'G'
  ).click(handleLoadChapterMultWhite);
  const btLoadChapterMultBlack = createBt(
    '',
    'Load for Black',
    'marginL button button-thin action text',
    'G'
  ).click(handleLoadChapterMultBlack);

  const divStudyInput1 = jQuery('<div/>', { class: 'inputLine' });
  const divStudyInput2 = jQuery('<div/>', { class: 'inputLine' });
  const divStudyInput3 = jQuery('<div/>', { class: 'inputLine' });
  divStudyInput1.append(labelStudyId, inputStudyId, btLoadStudy);
  divStudyInput2.append(labelSelectChapter, selectChapter, btLoadChapter);
  divStudyInput3.append(
    selectChapterMult,
    btLoadChapterMultWhite,
    btLoadChapterMultBlack
  );

  const btAutoRead = createBt(
    'btAutoRead',
    'Submit',
    'submit button text confirm button-blue',
    '/'
  ).click(handleAutoRead);

  divAddInput1.append(labelTitle, inputTitle);
  divAddInput2.append(labelUrl, inputUrl);
  divAddBt.append(btAutoRead);

  divAdd.append('<h2>Add a new trap</h2>');
  divAdd.append(divAddInput1);
  divAdd.append(divAddInput2);

  jQuery('.analyse__underboard').append(divStudyInput1);
  jQuery('.analyse__underboard').append(divStudyInput2);
  jQuery('.analyse__underboard').append(divStudyInput3);

  divAdd.append(divAddBt);

  outer.append(divAdd);

  /////////////////////
  const divUpd = jQuery('<div/>', { class: 'divUpd' });
  const divUpdInput1 = jQuery('<div/>', { class: 'inputLine' });
  const divUpdInput2 = jQuery('<div/>', { class: 'inputLine' });
  const divUpdBt = jQuery('<div/>', { class: 'divBt' });

  const labelMove = createLabel('Move');
  const inputMove = createInput('inputMove', '5');
  const labelSelect = createLabel('Trap');
  const selectTip = jQuery('<select/>', { id: 'selectTip' });
  populateWithTips(selectTip, DB.games);

  const btRefreshMove = createBt(
    'tipsRefreshMove',
    '',
    'marginL button button-thin action text',
    'P'
  ).click(readNextMove);
  const btAddOnePos = createBt(
    'btAddOnePos',
    'Add position',
    'submit button text confirm button-blue',
    'O'
  ).click(() => {
    console.log('click on btAddOnePos');
    var _id = jQuery('#selectTip').val();
    var fen = jQuery('.analyse__underboard__fen').val();
    const activeMove = jQuery('#inputMove').val();
    updateTrap(_id, fen, activeMove);
  });

  const btRefreshTip = createBt(
    '',
    '',
    'marginL button button-thin action text',
    'P'
  ).click(refreshTipsList);

  divUpdInput1.append(labelMove, inputMove, btRefreshMove);
  divUpdInput2.append(labelSelect, selectTip, btRefreshTip);

  divUpd.append('<h2>Add one move on existing trap</h2>');
  divUpd.append(divUpdInput1);
  divUpd.append(divUpdInput2);
  divUpd.append(divUpdBt);

  divUpdBt.append(btAddOnePos);

  outer.append(divUpd);

  function handleLoadStudy() {
    const studyId = jQuery('#inputStudyId').val();
    jQuery.get(`https://lichess.org/study/${studyId}.pgn`).done((x) => {
      const matches = Utils.parseChapters(x);
      jQuery('#selectChapter > option').remove();
      jQuery('#selectChapterMult > option').remove();
      //TODO bt reverse selection
      matches.forEach((x) => {
        selectChapter.append(`<option value="${x.val}">${x.name}</option>`);
        selectChapterMult.append(`<option value="${x.val}">${x.name}</option>`);
      });
    });
  }

  function refreshTipsList() {
    brw.runtime.sendMessage('get-data-refetch').then(() => {});
  }

  //TODO form validate mandatory fields
  return outer;
}

function handleLoadChapter() {
  const url = jQuery('#selectChapter').val();
  console.log('URL CHAPT', url);
  jQuery.get(`${url}.pgn`).done((pgn) => {
    jQuery('.pgn > .pair > textarea.copyable').val(pgn);
    jQuery('.pgn button.button.button-thin.action.text').click();
    jQuery('#inputTitle').val(jQuery('#selectChapter option:selected').text());
    jQuery('#inputUrl').val(jQuery('#selectChapter').val());
    setTimeout(() => {
      goFirstMove();
    }, 500);
  });
}

function goFirstMove(color = 'white') {
  let max = 80;
  while (!isFirstMove() && max) {
    console.log('key left');
    document.dispatchEvent(keyLeftEvent);
    max--;
  }
  if (!max) {
    console.error('max event left');
  }
  if (color === 'white') {
    document.dispatchEvent(keyRightEvent);
  }
}

function baseLoadChapterMult(color) {
  const selectedChapt = jQuery('#selectChapterMult').val();
  rx.from(selectedChapt)
    .pipe(
      op.concatMap((url) =>
        rx.from(jQuery.get(`${url}.pgn`)).pipe(
          op.tap((pgn) => {
            // console.log(url, pgn.substr(0, 100).split(':')[1].split('"')[0]);
            jQuery('#selectChapter').val(url);
            jQuery('#inputTitle').val(
              jQuery('#selectChapter option:selected').text()
            );
            jQuery('#inputUrl').val(jQuery('#selectChapter').val());
            jQuery('.pgn > .pair > textarea.copyable').val(pgn);
            jQuery('.pgn button.button.button-thin.action.text').click();
          }),
          op.delay(DELAY_AUTO),
          op.tap(() => {
            goFirstMove(color);
            handleAutoRead();
          }),
          op.delay(DELAY_AUTO / 2)
        )
      )
    )
    .subscribe();
}

function handleLoadChapterMultWhite() {
  baseLoadChapterMult('white');
}
function handleLoadChapterMultBlack() {
  baseLoadChapterMult('black');
}

function updateTrap(id, fen, move) {
  //TODO wait indicator
  brw.runtime
    .sendMessage({ id: 'update-tip', tip: { _id: id, fen, move } })
    .then((res) => {
      console.log('content-script received reply', res);
    });
}

function insertForm() {
  var tipFormDiv = createTipForm();
  jQuery('.analyse__side').append(tipFormDiv);
}

function readNextMove() {
  const moves = jQuery('move').toArray();
  const idx = moves.findIndex((x) => jQuery(x).hasClass('active'));
  jQuery('#inputMove').val(
    jQuery(moves[idx + 1])
      .children()
      .html()
  );
  return jQuery('#inputMove').val();
}

function handleAutoRead() {
  const moveList = [];
  const fenList = [];
  while (!isLastMove()) {
    fenList.push(readFen());
    moveList.push(readNextMove());
    document.dispatchEvent(keyRightEvent);
    document.dispatchEvent(keyRightEvent);
  }
  if (fenList.length && moveList.length && fenList.length === moveList.length) {
    console.log('sending addtip', fenList, moveList);
    sendMsgAddTip(fenList, moveList).then();
  }
}

function getVariant() {
  return jQuery('[for=mselect-analyse-variant]').text();
}

function sendMsgAddTip(fenList, moveList) {
  const name = jQuery('#inputTitle').val();
  const url = jQuery('#inputUrl').val();
  const variant = getVariant();
  if (name && url && variant) {
    return brw.runtime.sendMessage({
      id: 'add-tip',
      trap: {
        id: Utils.purge(name),
        name,
        fen: fenList,
        nextMoves: moveList,
        url,
        variant,
      },
    });
  }
  return Promise.reject('name/url/variant is null');
}

function readFen() {
  return jQuery('.analyse__underboard__fen').val();
}

function isLastMove() {
  return jQuery('move.active').next().length === 0;
}

function isFirstMove() {
  return jQuery('move.active').prev().html() === '1';
}

function main() {
  if (jQuery('#tipsDivAnalysis').length === 0) {
    insertForm();
  }
}

console.log('content analysis stops');
