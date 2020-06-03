
// function main() {
//   const BACKEND_URL = 'http://localhost:3000/board';
//   console.log('start active tab script');
//   let width = $('cg-container').innerWidth();
//   let domPieces = $('cg-board > piece').toArray();

//   let jsonPieces = domPieces.map((domPiece) => {
//     const jp = $(domPiece);
//     let coords = jp.css('transform').match(/matrix\(1, 0, 0, 1, (.*), (.*)\)$/);
//     return {
//       color: jp.hasClass('black') ? 'black' : 'white',
//       piece: jp.attr('class').split(/[ ]/).pop(),
//       x: coords[1],
//       y: coords[2],
//     };
//   });
//   $.post(BACKEND_URL, { width, pieces: jsonPieces }, () => {
//     console.log('retour du post ok');
//   });
//   console.log('end active tab script');
// }