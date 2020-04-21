const a = {
    'a': 5,
    'b': 'Hello',
    'z2': 'Hi',
    y43: 1999,
    'vila de': 3040,
};
a.yyyy = 555;
console.log(a);
let k = 'y43';

a.b = 'uuu';
delete a.a;

console.log(a[k]);
//document.querySelector('.out').innerHTML = a;
let out = '';
for (let key in a) {
    out += key + '---' + a[key] + '<br>';
}
document.querySelector('.out').innerHTML = out;