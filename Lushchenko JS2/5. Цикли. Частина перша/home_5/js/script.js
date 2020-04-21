// Task1
for (let i = 1; i <= 10; i++) {
    //console.log(i);
}


// Task2
let p2 = document.querySelector('.p-2');
let out = ' ';
for (let i = 1; i <= 10; i++) {
    out += i + ' ';
}


//Task3
p2.innerHTML = out;
let p3 = document.querySelector('.p-3');
let out3 = '';
for (let i = 10; i >= 0; i--) {
    out3 += i + ' ';
}
p3.innerHTML = out3;


//Task4
let p4 = document.querySelector('.p-4');
let out4 = '';
for (let i = 0; i <= 10; i += 2) {
    out4 += i + ' ';
}
p4.innerHTML = out4;



//Task5
let p5 = document.querySelector('.p-5');
let out5 = '';
for (let i = 21; i >= 0; i -= 3) {
    out5 += i + ' ';
}
p5.innerHTML = out5;


//Task6 
let p6 = document.querySelector('.p-6');
let out6 = '******';
for (let i = 0; i < 6; i++) {
    p6.innerHTML += out6 + '<br>';
}


//Task7
document.querySelector('.button-7').onclick = () => {
    let inp7 = +document.querySelector('.input-7').value;
    let p7 = document.querySelector('.p-7');
    let out7 = '';
    for (let i = inp7; i >= 0; i--) {
        out7 += i + ' ';
    }
    p7.innerHTML = out7;
}


//Task8 
document.querySelector('.button-8').onclick = () => {
    let inp81 = +document.querySelector('.input-8-1').value;
    let inp82 = +document.querySelector('.input-8-2').value;
    let p8 = document.querySelector('.p-8');
    let out8 = '';
    for (let i = inp81; i <= inp82; i++) {
        out8 += i + ' ';
    }
    p8.innerHTML = out8
}


//Task9 
document.querySelector('.button-9').onclick = () => {
    let inp91 = +document.querySelector('.input-9-1').value;
    let inp92 = +document.querySelector('.input-9-2').value;
    let p9 = document.querySelector('.p-9');
    let out9 = '';
    if (inp92 > inp91) {
        for (let i = inp91; i <= inp92; i++) {
            out9 += i + ' ';
        }
    } else {
        alert('Error!');
    }

    p9.innerHTML = out9
}


//Task10
function year(year1, year2) {
    let out10 = '';
    let p10 = document.querySelector('.p-10');
    for (let i = year1; i <= year2; i++) {
        if (i % 2 == 0) {
            out10 += i + ' ';
        }
    }
    p10.innerHTML = out10;
}
year(1901, 1951);

//Task11
function task11() {
    let div11 = document.querySelectorAll('.one');
    let p11 = document.querySelector('.p-11');
    p11.innerHTML = `Кількість div складає: ${div11.length}`
}
task11();


//Task12
document.querySelector('.button-12').onclick = () => {
    let div12 = document.querySelectorAll('.one');
    for (let i = 0; i < div12.length; i++) {
        div12[i].style.background = 'red';
        div12[i].style.margin = '5px';
    }
}


//Task13
document.querySelector('.button-13').onclick = () => {
    let div13 = document.querySelectorAll('.one');
    for (let i = 0; i < div13.length; i++) {
        console.log(div13[i].innerHTML);
    }
}


//Task14
document.querySelector('.button-14').onclick = () => {
    let inpAll = document.querySelectorAll('input[type = "text"]');
    for (let i = 0; i < inpAll.length; i++) {
        inpAll[i].placeholder = 'Введите данные'; //В Task 9
    }
}


//Task15
document.querySelector('.button-15').onclick = () => {
    let inpAll = document.querySelectorAll('input[type = "text"]');
    console.log(inpAll.length);
}


//Task16
document.querySelector('.button-16').onclick = () => {
    let inp16 = document.querySelectorAll('.input-16');
    let p16 = document.querySelector('.p-16');
    for (let i = 0; i < inp16.length; i++) {
        if (inp16[i].checked) {
            p16.innerHTML = inp16[i].value;
        }
    }
}


//Task17 
document.querySelector('.button-17').onclick = () => {
    let inp17 = document.querySelectorAll('.input-17');
    for (let i = 0; i < inp17.length; i++) {
        inp17[0].checked = 'checked'
    }
}


//Task18
function changeValue() {
    let inp18 = document.querySelectorAll('input[type = "radio"][name = "p1"]');
    for (let i = 0; i < inp18.length; i++) {
        inp18[i].value = i + ' Task18';
        console.log(inp18[i].value);
    }
}
changeValue();


//Task19
document.querySelector('.button-19').onclick = () => {
    let inp19 = document.querySelectorAll('input.input-19[name = "p2"]');
    for (let i = 0; i < inp19.length; i++) {
        if (inp19[i].value === 6) {
            console.log(true);
        } else if (inp19[i].value !== 6) {
            console.log(false);
        }
    }
}


//Task20
let inp20 = document.querySelectorAll('.input-20');

function change() {
    console.log('был изменен input');
}
for (let i = 0; i < inp20.length; i++) {
    inp20[i].oninput = change;
}