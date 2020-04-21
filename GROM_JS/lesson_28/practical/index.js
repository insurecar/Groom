

let findData = (event) => {
    console.log(event.target.dataset.name)
}

let nodeList = document.querySelectorAll('.btn').forEach(elem => elem.addEventListener('click', findData))


// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// let b = Object.entries(obj);
// console.log(b);
// let x = Object.fromEntries(b);
// console.log(x);

let x = document.querySelectorAll('.btn');
console.log(x);
let k = Array.from(x);
console.log(k);

screen

