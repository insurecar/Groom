
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
    let out = document.querySelector('.out-1');
    out.innerHTML += `${document.querySelector('.i-1').value} `;
}

document.querySelector('.i-1').addEventListener('input', t1);
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    let out = document.querySelector('.out-2');
    out.innerHTML += event.charCode;
}

document.querySelector('.i-2').addEventListener('keypress', t2)
// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3() {
    let result = event.charCode >= 48 && event.charCode <= 57 ? false : true;
    let out = document.querySelector('.out-3');
    out.innerHTML = result;
}


document.querySelector('.i-3').addEventListener('keypress', t3);
// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {

}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    document.querySelector('.out-5').innerHTML += event.key.toUpperCase();
}

document.querySelector('.i-5').addEventListener('keypress', t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6() {
    document.querySelector('.out-6').innerHTML += event.key.toLowerCase();
}

document.querySelector('.i-6').addEventListener('keypress', t6)
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
const a7 = [1];
function t7() {

    let inp7 = document.querySelector('.i-7').value;
    a7.push(inp7);
    document.querySelector('.out-7').innerHTML = a7[Math.round(Math.random() * (a7.length - 1))];



}

document.querySelector('.i-7').addEventListener('keypress', t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

//VARIANT 1
// document.querySelector('.i-8').onkeypress = function () {

//     let inp8 = document.querySelector('.i-8');
//     const obj = {
//         i: 1,
//         o: 0,
//         1: 7,
//     }
//     if (obj[event.key] != undefined) {
//         inp8.value += obj[event.key];
//     } else {
//         inp8.value += event.key
//     }
//     return false;
// }


function changeKey(event) {

    let inp8 = document.querySelector('.i-8');
    const obj = {
        i: 1,
        o: 0,
        1: 7,
    }
    if (obj[event.key] != undefined) {
        console.log(obj[event.key]);
        inp8.value += obj[event.key];


    } else {
        inp8.value += event.key;
    }
    event.preventDefault();
    return false;
}

document.querySelector('.i-8').addEventListener('keypress', changeKey)


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let count = 0;
function t9() {
    if (event.key == 'ArrowDown') {
        count++;
        document.querySelector('.out-9').innerHTML = `Ви нажали ↓ ${count} раз`;
    }


}
document.querySelector('.i-9').addEventListener('keydown', t9);
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10() {
    console.log(event.key);
    let img = document.querySelector('[src="img/1.png"]');
    img.style.width += '10px';



}

document.querySelector('.i-10').addEventListener('keydown', t10);

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11() {

}

// ваше событие здесь!!!

