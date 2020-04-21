let out = document.querySelector('.out');
//Task7
// for (let i = 0; i < 3; i++) {
//     if (i == 0) {
//         out.innerHTML += '&nbsp &nbsp &nbsp &nbsp';
//     } else if (i == 1) {
//         out.innerHTML += '&nbsp &nbsp';
//     }
//     for (let k = 0; k < 5; k++) {
//         out.innerHTML += '* ';
//     }
//     out.innerHTML += '<br>';
// }

//Task8

// for (let i = 1; i < 4; i++) {
//     for (let k = 0; k < i; k++) {
//         out.innerHTML += '* '
//     }
//     out.innerHTML += '<br>';
//     if (i == 3) {
//         for (let i = 0; i < 3; i++) {
//             for (let k = 2; k > i; k--) {
//                 out.innerHTML += '* ';
//             }
//             out.innerHTML += '<br>';
//         }
//     }
// }
//Task9
// let space = '&nbsp &nbsp';
// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 6; k++) {
//         if (i != 0 && i != 4) {
//             if (k == 0 || k == 4) {
//                 out.innerHTML += '*';
//             }
//             out.innerHTML += space;
//         } else if (i == 0 || i == 4) {
//             out.innerHTML += '* ';
//         }
//     }
//     out.innerHTML += '<br>';
// }
//task10
// let inp10 = document.querySelector('.input-10');
// inp10.oninput = function () {
//     let space = '&nbsp &nbsp';
//     let sym = inp10.value;
//     for (let i = 0; i < 5; i++) {
//         for (let k = 0; k < 6; k++) {
//             if (i != 0 && i != 4) {
//                 if (k == 0 || k == 4) {
//                     out.innerHTML += sym + ' ';
//                 }
//                 out.innerHTML += space;
//             } else if (i == 0 || i == 4) {
//                 out.innerHTML += sym + ' ';
//             }
//         }
//         out.innerHTML += '<br>';
//     }
// }

//Task11
// for (let i = 1; i < 19; i++) {
//     for (let k = 6; k < 8; k++) {
//         if (k == 6 && i < 10) {
//             out.innerHTML += `${k} * ${i} = ${k * i}`;
//         } if (k == 7 && i > 10) {
//             out.innerHTML += `${k} * ${i - 9} = ${k * (i - 9)}`
//         }
//     }
//     out.innerHTML += '<br>';
// }

//Task12
// for (let i = 2; i < 7; i++) {
//     for (let k = 1; k < i; k++) {
//         out.innerHTML += `${k} `;
//     }
//     out.innerHTML += '<br>'
// }
//Task  13
// for (let i = 0; i < 5; i++) {
//     for (let k = 1; k < 51; k++) {
//         if (i == 0) {
//             if (k < 10) {
//                 out.innerHTML += `0${k} &nbsp`;
//             } else if (k == 10) {
//                 out.innerHTML += `${k} `;
//             }
//         } else if (i == 1 && k > 10 && k < 21) {
//             out.innerHTML += `${k} &nbsp`;
//         } else if (i == 2 && k > 20 && k < 31) {
//             out.innerHTML += `${k} &nbsp`;
//         } else if (i == 3 && k > 30 && k < 41) {
//             out.innerHTML += `${k} &nbsp`;
//         } else if (i == 4 && k > 40 && k < 51) {
//             out.innerHTML += `${k} &nbsp`;
//         }
//     }
//     out.innerHTML += '<br>';
// }

//Task14
// for (let i = 0; i < 5; i++) {
//     for (let k = 5; k > i; k--) {
//         out.innerHTML += `${k - i} `;
//     }
//     out.innerHTML += '<br>';
// }

//------------------------
//Task15

// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 4 - i; k++) {
//         out.innerHTML += 'X ';
//     }
//     for (k = 4 - i; k < 5; k++) {
//         out.innerHTML += `${5 - k} `;
//     }
//     out.innerHTML += '<br>';
// }


//Task16
// for (let i = 1; i < 6; i++) {
//     for (let k = 0; k < i; k++) {
//         out.innerHTML += `${i} `;
//     }
//     out.innerHTML += '<br>'
// }


//Task17
// for (let i = 1; i < 6; i++) {
//     for (let k = 0; k < i; k++) {
//         out.innerHTML += `${6 - i} `;
//     }
//     out.innerHTML += '<br>'
// }


//Task18
// for (let i = 1; i < 6; i++) {
//     for (let k = 0; k < i; k++) {
//         if (i & 1) {
//             out.innerHTML += `${6 - i} `
//         } else {
//             out.innerHTML += 'X '
//         }
//     }
//     out.innerHTML += '<br>';
// }

//Task19
// for (let i = 2; i < 5; i++) {
//     for (let k = 0; k < i + 0.5; k += 0.5) {
//         if (k == 0) {
//             if (i == 2) {
//                 out.innerHTML += '&nbsp&nbsp';
//             } else if (i == 3) {
//                 out.innerHTML += '&nbsp';
//             }
//         }
//         out.innerHTML += '*'
//     }
//     out.innerHTML += '<br>';
// }





