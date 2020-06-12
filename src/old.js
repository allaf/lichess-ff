// elLocalFile.addEventListener('change', () => {
//   const reader = new FileReader();
//   reader.readAsText(elLocalFile.files[0]);
//   reader.addEventListener('loadend', async () => {
//       const file = reader.result;
//       await browser.storage.local.set({
//           local_file: file
//       });
//       options.toggleVisibility(elLocalFileDeleteLink, true);
//   });
// });
