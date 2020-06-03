// // 'use strict';

// console.log('popup script starts');

// document.addEventListener('click', (e) => {
//   if (e.target.id === 'send') {
//     browser.tabs
//       .query({ currentWindow: true, active: true })
//       .then(function (tabInfo) {
//         browser.tabs.executeScript(
//           tabInfo[0].id,
//           { file: '../../libs/jquery-3.5.1.min.js' },
//           function () {
//             console.log('cash loaded');
//             browser.tabs.executeScript(
//               tabInfo[0].id,
//               {
//                 file: '../content_script.js',
//               },
//               function () {
//                 console.log('content_script loaded');
//               }
//             );
//           }
//         );
//       });
//   }
// });
