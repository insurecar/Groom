let a = [1, 2, 3];
let b = ['a', 'b', 'c'];

let arr = a.map((elem, index) => {
    return ([elem, b[index]]);
})

console.log(arr);
