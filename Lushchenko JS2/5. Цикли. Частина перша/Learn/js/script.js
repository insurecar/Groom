// ///for
// //while
// let div = document.querySelectorAll('.one');


// for (let i = 0; i < div.length; i++) {
//     div[i].style.background = 'red';
//     console.log(div[i].innerHTML);
//     div[i].onclick = two;
// }

// function two() {
//     console.log('work!!!!')
// }

// let c = document.getElementsByTagName('div');
// console.log(c);
// let b = document.getElementsByClassName('one');
// console.log(b);
// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '3px solid black';
// }

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type = "radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}
let out = ' ';
for (let i = 0; i < 10; i++) {
    if (i == 6) continue;
    out += i + ' ';

}
document.querySelector('#out').innerHTML = out;