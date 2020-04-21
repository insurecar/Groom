window.addEventListener('storage', function (e) {
    console.log('change');

});



localStorage.setItem('data', 5);
console.log(localStorage.getItem('data'));

const a = [3, 4, 5];
localStorage.setItem('a', JSON.stringify(a));
let b = localStorage.getItem('a');

b = JSON.parse(b)
b = JSON.parse(b)
console.log(b);
console.log(b[0]);
console.log(b[1]);
console.log(typeof b);
