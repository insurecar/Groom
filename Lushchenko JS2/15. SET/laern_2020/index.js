let a = new Set();
a.add(1);
a.add(2);
a.add('Hello');
a.add(1);
//a.clear()
//a.delete('Hello')
console.log(a);


console.log(a.has(2));


for (let item of a) {
    console.log(item);

}

let arr = [1, 2, 3, 4, 3, 2, 5, 54, 3, 2, 2, 2, 'Hello'];

let b = new Set(arr);
console.log(b);
let bArr = Array.from(b);
console.log(bArr);
