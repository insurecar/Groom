// Task 1.
let a = 7;
let b = 9;
console.log(a * b);


// Task 2.
let c = 7;
let d = 9;
console.log(c / 9);


// Task 3.
let e = 3;
let f = 5;
console.log(e + +f);


// Task 4.
let e1 = '3';
let f1 = 5;
console.log(e1 + f1 + ' конкатинація');


// Task 5.
let e2 = 3;
let f2 = 0;
console.log('Task5 ' + e2 / f2);


// Task 6.
let e3 = 3;
let f3 = 'Hello';
console.log(e3 + +f3);


// Task 7.
let e4 = 3;
let f4 = 'Hello';
console.log(e4 * f4);


// Task 8.
let input = document.querySelector('.task8').value;
document.querySelector('#task8').onclick = function () {
    console.log('Task8 ' + input);
}


// Task 9.
let input9 = document.querySelector('.input-task9');
document.querySelector('.button-task9').onclick = function () {
    let p9 = document.querySelector('.p-task9');
    p9.innerHTML = input9.value;
    input9.value = '';
}


// Task 10.
let input10 = document.querySelector('.input-10');
let p10 = document.querySelector('.p-10');
document.querySelector('.button-10').onclick = function () {
    p10.innerHTML = input10.value * 10;
}


// Task 11.
let input11 = document.querySelector('.input-11');
document.querySelector('.button-11').onclick = function () {
    let p11 = document.querySelector('.p-11');
    p11.innerHTML = +input11.value + 10;
}


// Task 12.
let input122 = document.querySelector('.input-12-2');
document.querySelector('.button-12').onclick = function () {
    console.log('Task 12: Hello ' + input121.value + ' ' + input122.value);
}


// Task 13.
let input131 = document.querySelector('.input-13-1');
let input132 = document.querySelector('.input-13-2');
document.querySelector('.button-13').onclick = function () {
    let p13 = document.querySelector('.p-13');
    p13.innerHTML = `Sum ${input131.value} + ${input132.value} = ${+input131.value + +input132.value}`;
}


// Task 14.
let input14 = document.querySelector('.input-14');
document.querySelector('.button-14').onclick = function () {
    input14.value = 'Hello';
}


// Task 15.
let y = document.querySelector('.input-15');
y.style.border = '2px solid black';


// Task 16.
function addTwoNumber() {
    let input161 = document.querySelector('.input-161').value;
    let input162 = document.querySelector('.input-162').value;
    let p16 = document.querySelector('.p-16');
    p16.innerHTML = `Total ${input161} + ${input162} = ${+input161 + +input162}`;
}


// Task 17.
document.querySelector('.button-17').onclick = function () {
    let t = document.querySelector('.input-17').value;
    t = parseInt(t);
    console.log(t);
}


// Task 18.
document.querySelector('.button-18').onclick = function () {
    let t = document.querySelector('.input-18').value;
    t = parseFloat(t);
    console.log(t);
}


// Task 19.
function addNumber() {
    let p19 = document.querySelector('.p-19');
    let input191 = document.querySelector('.input-191').value;
    let input192 = document.querySelector('.input-192').value;
    p19.innerHTML = `Total ${input191} + ${input192} = ${+input191 + +input192}`;
}


// Task 20.
document.querySelector('.button-20').onclick = function () {
    let input201 = document.querySelector('.input-201').value;
    let input202 = document.querySelector('.input-202').value;
    let input203 = document.querySelector('.input-203').value;
    let input204 = document.querySelector('.input-204').value;
    let p20 = document.querySelector('.p-20');
    p20.innerHTML = `Шановний ${input201} ${input202} Ваш вік ${input203} роки, по професії Ви:  ${input204}`;
}