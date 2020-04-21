// const a = {
//     'a': 5,
//     'b': 'Hello',
//     'z2': 'Hi',
//     y43: 1999,
//     'villa d': 3040,
// };
// delete a.a
// console.log(a);
// console.log(a.z2);
// let k = 'y43';
// console.log(a[k]);
// console.log(a['villa d']);



// let out = '';

// for (let key in a) {
//     out += ` !${key}!`;
// }
// document.querySelector('.out').innerHTML = out;


// let auto = [
//     {
//         Audi: 'A1',
//         BMW: 1,
//         Mercedes: 'GLS',
//     },
//     {
//         Audi: 'A3',
//         BMW: 3,
//         Mercedes: 'GLE',
//     },
//     {
//         Audi: 'A1',
//         BMW: 1,
//         Mercedes: 'GLS',
//     },

// ];

// // let arr = auto.map(({ Audi, BMW, Mercedes }) => {
// //     console.log(Audi);
// //     console.log(BMW);
// //     console.log(Mercedes);
// // });

// for (let i = 0; i < auto.length; i++) {
//     for (let key in auto[i]) {
//         console.log(auto[i][key]);
//     }
// }




let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let newArr = arr.reduce((acum, elem) => {
    return acum.concat(elem);
});

console.log([...newArr]);


let aret = [123, 43, 5, 4, 23, 43, 4, 34, 45];
Math.max(...aret);