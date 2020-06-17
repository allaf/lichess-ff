// 'use strict';

/* eslint-disable no-undef */
const jQuery = $;
const brw = browser;
const Utils = utils;
// const ApiUtils = apiUtils;
const rx = rxjs;
const op = rxjs.operators;
/* eslint-enable no-undef */

const DELAY = 0;
const keyRightEvent = new KeyboardEvent('keydown', { which: 39 });

console.log('content analysis starts');

//TODO wait starts

let DB;

brw.runtime.sendMessage('get-data').then((res) => {
  DB = res;
  main();
});

function populateWithTips(selectEl, tips) {
  console.log(tips);
  selectEl.append('<option selected></option>');
  tips.forEach((tip) => {
    // if (tip.id === 'dev') {
    selectEl.append(`<option value="${tip._id}">${tip.name}</option>`);
    // }
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

  //TODO renommer
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
  const btLoadStudy = createBt(
    'btLoadStudy',
    '',
    'marginL button button-thin action text',
    'P'
  ).click(handleLoadstudy);

  const btLoadChapter = createBt(
    'btLoadChapter',
    'Load',
    'marginL button button-thin action text',
    'G'
  ).click(handleLoadChapter);

  const divStudyInput1 = jQuery('<div/>', { class: 'inputLine' });
  const divStudyInput2 = jQuery('<div/>', { class: 'inputLine' });
  divStudyInput1.append(labelStudyId, inputStudyId, btLoadStudy);
  divStudyInput2.append(labelSelectChapter, selectChapter, btLoadChapter);

  const btAuto = createBt(
    'btAuto',
    'Submit',
    'submit button text confirm button-blue',
    '/'
  ).click(handleAutoRead);

  divAddInput1.append(labelTitle, inputTitle);
  divAddInput2.append(labelUrl, inputUrl);
  divAddBt.append(btAuto);

  divAdd.append('<h2>Add a new trap</h2>');
  divAdd.append(divAddInput1);
  divAdd.append(divAddInput2);

  jQuery('.analyse__underboard').append(divStudyInput1);
  jQuery('.analyse__underboard').append(divStudyInput2);

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

  const btRefresh = createBt(
    'tipsRefresh',
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

  divUpdInput1.append(labelMove, inputMove, btRefresh);
  divUpdInput2.append(labelSelect, selectTip);

  divUpd.append('<h2>Add one move on existing trap</h2>');
  divUpd.append(divUpdInput1);
  divUpd.append(divUpdInput2);
  divUpd.append(divUpdBt);

  divUpdBt.append(btAddOnePos);

  outer.append(divUpd);

  function handleLoadstudy() {
    const studyId = jQuery('#inputStudyId').val();
    jQuery.get(`https://lichess.org/study/${studyId}.pgn`).done((x) => {
      const matches = Utils.parseChapters(x);
      matches.forEach((x) => {
        selectChapter.append(`<option value="${x.val}">${x.name}</option>`);
      });
    });
  }

  //TODO form validate mandatory fields
  return outer;
}

function handleLoadChapter() {
  const url = jQuery('#selectChapter').val();
  jQuery.get(`${url}.pgn`).done((pgn) => {
    jQuery('.pgn > .pair > textarea.copyable').val(pgn);
    jQuery('.pgn button.button.button-thin.action.text').click();
    jQuery('#inputTitle').val(jQuery('#selectChapter option:selected').text());
    jQuery('#inputUrl').val(jQuery('#selectChapter').val());
  });
}

function updateTrap(id, fen, move) {
  //TODO finished indicator
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

function isLastMove() {
  return jQuery('move.active').next().length === 0;
}

function handleAutoRead() {
  const moveList = [];
  const fenList = [];

  let cpt = 0;
  rx.interval(DELAY)
    .pipe(
      op.takeWhile((x) => !isLastMove(x), true),
      op.tap(() => cpt++)
    )
    .subscribe((x) => {
      if (isLastMove(x)) {
        console.log(moveList);
        sendMsgAddTip(fenList, moveList).then(() => {
          // console.log('reply from add-tip', res);
        });
      } else {
        fenList.push(readFen());
        moveList.push(readNextMove());
        document.dispatchEvent(keyRightEvent);
        document.dispatchEvent(keyRightEvent);
      }
    });

  //TODO submit quand finit
}

function sendMsgAddTip(fenList, moveList) {
  const name = jQuery('#inputTitle').val();
  const url = jQuery('#inputUrl').val();
  if (name && url) {
    return brw.runtime.sendMessage({
      id: 'add-tip',
      trap: {
        id: Utils.purge(name),
        name,
        fen: fenList,
        nextMoves: moveList,
        url,
      },
    });
  }
  return Promise.reject('name or url is null');
}

function readFen() {
  return jQuery('.analyse__underboard__fen').val();
}

function main() {
  if (jQuery('#tipsDivAnalysis').length === 0) {
    insertForm();
  }
}

console.log('content analysis stops');
