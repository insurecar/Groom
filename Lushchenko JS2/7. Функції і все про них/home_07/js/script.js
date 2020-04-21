//Task1
document.querySelector('.button-1').onclick = function name() {
    console.log('Task1: Rostyslav');
}


//Task2
function name2(nameUser) {
    return nameUser;
}
console.log(name2('Sergey'));


//Task3
function multiNumber(number) {
    console.log(number * 10);
}
multiNumber(10);

document.querySelector('.button-3').onclick = function () {
    multiNumber(11);
}


//Task4
let btn = document.querySelector('.button-4');
btn.onclick = function () {
    btn.style.background = 'red';
}


//Task5
let inp6 = document.querySelector('.input-6');
inp6.oninput = () => {
    let p6 = document.querySelector('.p-6');
    p6.style.color = 'lime';
    return p6.innerHTML = inp6.value;
}


//Task6 
function more(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return a || b;
    }
} console.log(more(40, 40));


//Task7
function bear(birthUser) {
    return `Your age ${2019 - birthUser}`;
}
console.log(bear(1986));


//Task8
function random(ran) {
    ran = Math.round(Math.random() * 10);
    return ran;
} console.log(random());


//Task9
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
console.log(randomInteger(100, 200));


//Task10
function rgb(r, g, b, p10) {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    p10 = document.querySelector('.p-10');
    return p10.style.color = `rgb(${r}, ${g},${b})`;
}
rgb();


//Task11
function f11() {
    return 5;
}
function f11New(a, b) {
    return a * b;
} console.log(f11New(f11(), 32));


//Task12
let inp12 = document.querySelector('.input-12');
inp12.oninput = function toInt() {
    return console.log(typeof (+inp12.value));
}


//Task13
document.querySelector('.button-13').onclick = function (inp13) {
    inp13 = document.querySelector('.input-13').value;
    if (inp13.trim() == '') {
        return console.log(false);
    } else {
        return console.log(inp13.replace(/\s/g, ""));
    }
}


//Task14
function oddEven(numb) {
    if (numb & 1) {
        return false;
    } else {
        return true;
    }
} console.log(oddEven(29));



//task15
document.querySelector('.div-15').onmousemove = () => {
    console.log('move');
}


//task16
document.querySelector('.div-16').onmouseenter = () => {
    console.log('enter');
}


//task17
document.querySelector('.div-17').onmouseleave = () => {
    console.log('leave');
}


//Task18
document.querySelector('.div-18').onclick = function () {
    this.style.background = 'red';
}


//Task19
document.querySelector('.div-19').onclick = function () {
    document.querySelector('.div-19').onclick = () => {
        this.style.background = 'red';
    }
}


//Task20
let divGo = document.querySelectorAll('.go');
for (let i = 0; i < divGo.length; i++) {
    divGo[i].onclick = function () {
        this.style.background = 'red';
    }
}