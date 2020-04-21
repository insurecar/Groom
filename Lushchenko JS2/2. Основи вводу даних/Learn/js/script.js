let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out')
button.onclick = function () {
    let b = inputIn.value;
    console.log(33 + +b);
    div.innerHTML = b;
}