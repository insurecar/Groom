let a = new Set();
a.add(1);
a.add(2);
a.add('Hello');
a.add('1');
//a.clear();
//a.delete('Hello');
console.log(a);
console.log(a[0]);// особливість Set так не працює!!!
console.log(a.length);//Не працює
console.log(a.size); // кількість елементів положених в Set
console.log(a.has(2)); // true


for (let key of a) {
    console.log(key)
}

let arr = [1, 2, 3, 1, 4, 5, 'Hello', 5, 1, 3];

let b = new Set(arr);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr)