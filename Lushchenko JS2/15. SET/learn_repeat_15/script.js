let a = new Set();
a.add(1);
a.add(2);
a.add('Hello');
a.add(1);
a.add('1');
console.log(a);
console.log(a.size);


console.log(a.has(1));

for (let key of a) {
    console.log(key);
}

let arr = [1, 2, 3, 4, 5, 'hello', 5, 4, 1, 3];

let arr2 = new Set(arr);
console.log(arr2);
console.log(arr2.size);

let arr2ToArray = Array.from(arr2);
console.log(arr2ToArray);