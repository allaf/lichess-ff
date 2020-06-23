'use strict';

console.log('content analysis starts');

/* eslint-disable no-undef */
const jQuery = $;
const brw = browser;
const Utils = utils;
const rx = rxjs;
const op = rxjs.operators;
/* eslint-enable no-undef */

// data-icon Bx  u:flechebas x:save /:cloud-save
const exampleStudyId = 'Of3mcPk8';
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
    .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase())
    .filter((tip) => tip.variant === variant)
    .forEach((tip) => {
      selectEl.append(
        `<option value="${tip._id}" data-url="${tip.url}">${tip.name}</option>`
      );
    });
}

function createInput(id, size) {
  return jQuery('<input/>', { id, type: 'text', size, required: 'true' });
}
function createLabel(t) {
  return jQuery('<label/>', { class: 'name', type: 'text' }).html(t);
}
function createBt(id, text, cssClasses, icon = '', style, title) {
  return jQuery('<button/>', {
    id,
    title,
    class: cssClasses,
    'data-icon': icon,
    style,
  }).html(text);
}

function createTipForm() {
  const outer = jQuery('<div/>', { class: 'tipsDivAnalysis' });

  //////////////////////////////////////////
  const divAdd = jQuery('<div/>', { class: 'divAdd' });
  const divContentAdd = jQuery('<div/>', { class: 'divContentAdd' });
  const titleAdd = jQuery('<h2/>')
    .html('Add a new Trap')
    .click(() => {
      divContentAdd.slideToggle('slow');
    });
  divAdd.append(titleAdd, divContentAdd);

  const btAutoRead = createBt(
    'btAutoRead',
    'Submit',
    'submit button text confirm button-blue',
    '/'
  ).click(handleAutoRead);

  const divAddInput1 = jQuery('<div/>', { class: 'inputLine' });
  const divAddInput2 = jQuery('<div/>', { class: 'inputLine' });
  const divAddBt = jQuery('<div/>', { class: 'divBt' });
  divAddBt.append(btAutoRead);

  const labelTitle = createLabel('Title');
  const inputTitle = createInput('inputTitle', 20);
  const labelUrl = createLabel('Url');
  const inputUrl = createInput('inputUrl', 20);

  divAddInput1.append(labelTitle, inputTitle);
  divAddInput2.append(labelUrl, inputUrl);
  divContentAdd.append(divAddInput1);
  divContentAdd.append(divAddInput2);
  divContentAdd.append(divAddBt);
  outer.append(divAdd);

  // STUDY ////////////////////////////////////////

  const labelStudyId = createLabel('Study id');
  const inputStudyId = createInput('inputStudyId', 10).val(exampleStudyId);

  const labelSelectChapter = createLabel('Chapter');
  const selectChapter = jQuery('<select/>', {
    id: 'selectChapter',
    class: 'selectChapter',
  });
  const labelSelectChapters = createLabel('Chapters');
  const selectChapterMult = jQuery('<select/>', {
    id: 'selectChapterMult',
    class: 'selectChapter',
    multiple: '',
  });
  const btLoadStudy = createBt(
    'btLoadStudy',
    '',
    'marginL button button-thin action text',
    'P'
  ).click(handleLoadStudy);

  const labelChapterUrl = createLabel('Chapt url');
  const inputChapterUrl = createInput('inputChapterUrl', 10);
  const btLoadChapterUrl = createBt(
    'btLoadChapterUrl',
    'Load',
    'marginL button button-thin action text',
    'G'
  ).click(handleLoadChapterUrl);

  const btLoadChapter = createBt(
    'btLoadChapter',
    'Load',
    'marginL button button-thin action text',
    'G'
  ).click(handleLoadChapter);

  const btReverseSelection = createBt(
    'btReverseSelection',
    '',
    'marginL fbt',
    'B',
    'border-radius: 3px 3px 3px 3px;'
  ).click(reverseSelection);

  const btLoadChapterMultWhite = createBt(
    'btLoadChapterMultWhite',
    'Save for White',
    'marginL button action text',
    '/'
  ).click(handleLoadChapterMultWhite);

  const btLoadChapterMultBlack = createBt(
    '',
    'Save for Black',
    'marginL button action text',
    '/'
  ).click(handleLoadChapterMultBlack);

  const divStudyInput1 = jQuery('<div/>', { class: 'inputLine' });
  const divStudyInput2 = jQuery('<div/>', { class: 'inputLine' });
  const divStudyInput3 = jQuery('<div/>', { class: 'inputLine' });
  const divStudyInput4 = jQuery('<div/>', { class: 'inputLine' });
  const divStudyInput5 = jQuery('<div/>', { class: 'inputLine' });

  divStudyInput1.append(labelStudyId, inputStudyId, btLoadStudy);
  divStudyInput2.append(labelSelectChapter, selectChapter, btLoadChapter);

  divStudyInput3.append(
    labelSelectChapters,
    selectChapterMult,
    btReverseSelection
  );
  divStudyInput4.append(btLoadChapterMultWhite, btLoadChapterMultBlack);
  divStudyInput5.append(labelChapterUrl, inputChapterUrl, btLoadChapterUrl);

  const divStudy = jQuery('<div/>', { class: 'divStudy' });
  const divContentStudy = jQuery('<div/>', { class: 'divContentStudy' });
  const titleStudy = jQuery('<h2/>')
    .html('Import Study Chapters')
    .click(() => {
      divContentStudy.slideToggle('slow');
    });

  divContentStudy.append(
    titleStudy,
    divStudyInput1,
    divStudyInput2,
    divStudyInput3,
    divStudyInput4,
    divStudyInput5
  );

  divStudy.append(titleStudy, divContentStudy);
  outer.append(divStudy);

  //////////////////////////////////////////

  const divUpd = jQuery('<div/>', { class: 'divUpd' });
  const divContentUpd = jQuery('<div/>', { class: 'divContentUpd' });
  const titleUpd = jQuery('<h2/>')
    .html('Add one Move on existing Trap')
    .click(() => {
      divContentUpd.slideToggle('slow');
    });

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

  const btLoadTip = createBt(
    'btLoadTip',
    '',
    'marginL button button-thin action text',
    'G',
    'Load'
  ).click(() => {
    const url = jQuery('#selectTip>option:selected').attr('data-url');
    fetchAndSetChapter(url);
  });

  const btAddOnePos = createBt(
    'btAddOnePos',
    'Add position',
    'submit button text confirm button-blue',
    'O'
  ).click(() => {
    //TODO show update finshed success
    const _id = jQuery('#selectTip').val();
    const fen = jQuery('.analyse__underboard__fen').val();
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
  divUpdInput2.append(labelSelect, selectTip, btRefreshTip, btLoadTip);

  divUpd.append(titleUpd, divContentUpd);
  divContentUpd.append(divUpdInput1);
  divContentUpd.append(divUpdInput2);
  divUpdBt.append(btAddOnePos);
  divContentUpd.append(divUpdBt);

  outer.append(divUpd);

  titleUpd.click();
  titleAdd.click();
  titleStudy.click();

  //////////////////////////////////////////

  function reverseSelection() {
    jQuery('#selectChapterMult > option').each((i, el) => {
      const jEl = jQuery(el);
      jEl.prop('selected', !jEl.prop('selected'));
    });
  }

  function handleLoadStudy() {
    const studyId = jQuery('#inputStudyId').val();
    jQuery.get(`https://lichess.org/study/${studyId}.pgn`).done((x) => {
      //TODO avoid introduction
      const chapters = Utils.parseChapters(x);
      jQuery('#selectChapter > option').remove();
      jQuery('#selectChapterMult > option').remove();
      chapters.forEach((chapt) => {
        selectChapter.append(
          `<option value="${chapt.val}">${chapt.name}</option>`
        );
        selectChapterMult.append(
          `<option value="${chapt.val}">${chapt.name}</option>`
        );
      });
      chapters.forEach((chapt) => {
        jQuery
          .get(chapt.val + '.pgn')
          .done(() => {
            jQuery(`.selectChapter>option[value="${chapt.val}"]`).addClass(
              'public'
            );
          })
          .fail(() => {
            console.warn('failed to load chapter ', chapt.val + '.pgn');
            //TODO choper le chapter quand meme via link?
            jQuery(`.selectChapter>option[value="${chapt.val}"]`)
              .prop('disabled', true)
              .addClass('private');
          });
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
  fetchAndSetChapter(url);
}

function handleLoadChapterUrl() {
  const url = jQuery('#inputChapterUrl').val();
  fetchAndSetChapter(url);
}

function fetchAndSetChapter(url) {
  jQuery.get(`${url}.pgn`).done((pgn) => {
    jQuery('.pgn > .pair > textarea.copyable').val(pgn);
    jQuery('.pgn button.button.button-thin.action.text').click();
    jQuery('#inputTitle').val(Utils.extractTitle(pgn));
    jQuery('#inputUrl').val(url);
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
  jQuery('.analyse__side').append(createTipForm());
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
  if (!!name && !!url && !!variant) {
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
