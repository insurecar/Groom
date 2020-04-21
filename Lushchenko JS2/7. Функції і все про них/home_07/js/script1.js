//Task1
document.querySelector('.button-1').onclick = function name() {
    console.log('Task1: Rostyslav');
}


// Task2
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
    return p6.innerHTML = inp6.value;
}