// TASK 1.  Напишите функцию func_1, которая присваивает p.u-1 ширину 200px.Проверьте ее работу.Допишите возможность присваивать высоту равную 100px;

function func_1() {
    let p1 = document.querySelector('.u-1');
    p1.style.width = '200px';
    p1.style.height = '100px';
} func_1();

// TASK 2. Напишите функцию func_2, которая будучи запущенной присваивает блоку p.u-2 класс css-1. Задайте данному классу через CSS зеленый цвет фона.

function func_2() {
    let p2 = document.querySelector('.u-2');
    p2.classList.add('css-1');
} func_2();


// TASK 3. Используя цикл, добавьте на все блоки p.u - 3 событие onclick.По клику запускайте функцию func_3, которая окрашивает элемент, на котором произошло событие в красный цвет фона.Для обращения внутри функции к такому элементу используйте this.

function func_3() {
    let p3 = document.querySelectorAll('.u-3');
    for (let i = 0; i < p3.length; i++) {
        p3[i].onclick = function () {
            this.style.background = 'red';
        }
    }

} func_3();

// TASK 4. Используя цикл, добавьте на все блоки p.u - 4 событие onclick.По клику запускайте функцию func_4, которая присваивает элементу, на котором произошло событие, класс css - 2. Для обращения внутри функции к такому элементу используйте this.

function func_4() {
    let p4 = document.querySelectorAll('.u-4');
    for (let i = 0; i < p4.length; i++) {
        p4[i].onclick = function () {
            this.classList.add('css-2');
        }
    }
} func_4();

// TASK 5. C помощью цикла, повесьте на блоки p.u - 5 функцию func_5, которая при клике будет удалять класс css - 3 с элемента, на котором произошло событие.

function func_5() {
    let p5 = document.querySelectorAll('.u-5');
    for (let i = 0; i < p5.length; i++) {
        p5[i].onclick = function () {
            this.classList.remove('css-3');
        }
    }
} func_5();

// TASK 6. Есть кнопка.u - 6. Напишите функцию, которая при клике делает toggle классу.active для данной кнопки.

function func_6() {
    let p6 = document.querySelector('.u-6');
    p6.onclick = function () {
        this.classList.toggle('active');
    }
} func_6();

// TASK 7. Напишите функцию func - 7, которая будучи запущенной возвращает количество элементов с классом css-3.

function func_7() {
    let p7 = document.querySelectorAll('.css-3');
    let count = 0;
    for (let i = 0; i < p7.length; i++) {
        count++;
    } console.log(count);
} func_7();

// TASK 8. Напишите функцию func - 8, которая будучи запущенной, присваивает всем элементам p.u - 1 атрибут title со значением test - data.

function func_8() {
    let p8 = document.querySelectorAll('.u-1');
    for (let i = 0; i < p8.length; i++) {
        p8[i].setAttribute('title', 'test-data');
    }
} func_8();

// TASK 9. С помощью цикла получите кнопки.u - 9. Добавьте на них событие onclick которое запускает функцию func - 9. Функция возращает data атрибут элемента, по которому кликнули.

function func_9() {
    let p9 = document.querySelectorAll('.u-9');
    for (let i = 0; i < p9.length; i++) {
        p9[i].onclick = function () {
            return this.getAttribute('data');
        }
    }
} func_9();

// TASK 10. Напишите функцию func - 10, которая при клике на кнопке.u -10__button читает атрибут валюты data - currency и на основании этого выводит в p.u -10__out коэффициент данной валюты по отношению к доллару.Коэффициент возьмите приблизительно из интернета.Считается, что пользователь всегда вводит валюту в долларах.

function func_10() {
    let p10Button = document.querySelectorAll('.u-10__button');
    let p10Out = document.querySelector('.u-10__out');
    let valueMoney = '';
    for (let i = 0; i < p10Button.length; i++) {
        p10Button[i].onclick = function () {
            valueMoney = this.getAttribute('data-currency');
            if (valueMoney == 'euro') {
                p10Out.innerHTML = 'Курс конвертації 1.1';
            } else if (valueMoney == 'usd') {
                p10Out.innerHTML = 'Курс конвертації 1';
            } else if (valueMoney == 'rub') {
                p10Out.innerHTML = 'Курс конвертації 30';
            }
        }
    }
} func_10();

// TASK 11.Напишите функцию func - 11, которая при клике на кнопке.u -11__button читает атрибут валюты data - currency и на основании этого выводит в p.u -11__out перевод валюты введенной пользователем в input.u -11__input в указанную валюту.Считается, что пользователь всегда вводит валюту в долларах. 

function func_11() {
    let p11 = document.querySelectorAll('.u-11__button');
    let p11Out = document.querySelector('.u-11__out');
    let valueMoney = '';
    let inp11 = document.querySelector('.u-11_out');
    for (let i = 0; i < p11.length; i++) {
        p11[i].onclick = function () {
            valueMoney = this.getAttribute('data-currency');
            if (valueMoney == 'euro') {
                p11Out.innerHTML = `${inp11.value} Євро складає ${parseInt(inp11.value * 1.1)} Доларів`;
            } else if (valueMoney == 'usd') {
                p11Out.innerHTML = `${inp11.value} Доларів складає ${inp11.value} Доларів`;
            } else if (valueMoney == 'rub') {
                p11Out.innerHTML = `${inp11.value} рублів складає ${parseFloat(inp11.value / 30).toFixed(2)} Доларів`;
            }
        }
    }
} func_11();

// TASK  12. Создайте функцию func - 12, которая создает через createElement элемент div, присваивает ему класс css - 4 и возвращает данный элемент

function func_12() {
    let div12 = document.createElement('div');
    div12.classList.add('css-4');
    document.querySelector('.p-12').appendChild(div12);
    div12.style.minHeight = '100px';
    return div12;
} func_12();

// TASK  13.Создайте функцию func - 13, которая создает элемент span.span - 13 с текстом 13 через createElement и вставляет его в p.u - 13(append).

function func_13() {
    let p13 = document.querySelector('.u-13');
    let span13 = document.createElement('span');
    span13.classList.add('span-13');
    span13.innerHTML = '13';
    p13.appendChild(span13);
    span13.style.background = 'lime';
} func_13();

// TASK  14. Создайте функцию func - 14, которая создает элемент span.span - 14 с текстом 14 через createElement и вставляет его в p.u - 14(prepend).

function func_14() {
    let p14 = document.querySelector('.u-14');
    let span14 = document.createElement('span');
    span14.classList.add('span-14');
    span14.innerHTML = '14';
    p14.prepend(span14);
    span14.style.background = 'lime';
} func_14();

// TASK 15. Создайте функцию func - 15, которая создает элемент span.span - 15 с текстом 15 через createElement и вставляет его в p.u - 15(before)

function func_15() {
    let p15 = document.querySelector('.u-15');
    let span15 = document.createElement('span');
    span15.classList.add('span-15');
    span15.innerHTML = '15';
    p15.before(span15);
    span15.style.background = 'lime';
} func_15();

// TASK    16. Создайте функцию funct - 16, которая создает элемент button.u - 16 c текстом Push.Повесьте на данный элемент событие onclick со стрелочной функцией, которая в консоль выводит текст u - 16. И после добавления события добавьте данный элемент на страницу в div.u -16__out.Проверьте работоспособность события.

function func_16() {
    let btn = document.createElement('button');
    let div16 = document.querySelector('.u-16__out');
    btn.classList.add('u-16');
    btn.innerHTML = 'Push';
    btn.onclick = () => {
        console.log('u-16');
    }
    div16.appendChild(btn);

} func_16();

// TASK 17. Создайте функцию, funct - 17, которая при запуске создаст элемент p c текстом 17 и заменит этим элементом div.u - 17

function func_17() {
    let p17 = document.createElement('p');
    p17.innerHTML = '17';
    let div17 = document.querySelector('.u-17');
    div17.parentNode.replaceChild(p17, div17);
    p17.style.background = 'lime';
} func_17();

// TASK 19. C помощью цикла повесьте на div.out - 18 функцию func - 18. Данная функция дожна удалять элемент, на котором произошел клик из DOM.Функция должна возвращать удаленный элемент

function func_18() {
    let div18 = document.querySelectorAll('.out-18');
    for (let i = 0; i < div18.length; i++) {
        div18[i].onclick = function () {
            this.parentNode.removeChild(this);
        }
    }
} func_18();
// TASK   19. Создайте функцию func - 19, которая принимает параметр текст.Создает элемент li, вставляет в него указанный текст, и добавляет на страницу в ul.u - 19 в конец списка.

function func_19(x = '') {
    let li19 = document.createElement('li');
    li19.innerHTML = x;
    let ul19 = document.querySelector('.u-19');
    ul19.appendChild(li19);
} func_19('JS-2');
// TASK 20. Доработайте предыдущее задание.Допишите функцию func - 20 которая может принимать текст от пользователя и вставлять в список ul.u - 20. Также добавьте checkbox - важное, при этом созданный li получает класс.css - 5.

// function func_20(x = '') {
//     let ul20 = document.querySelector('.u-20');
//     let chBox = document.createElement('input');
//     chBox.setAttribute('type', 'checkbox');
//     let li20 = document.createElement('li');
//     li20.innerHTML = x;
//     ul20.appendChild(li20);
//     li20.appendChild(chBox);
//     li20Out = document.querySelectorAll('.u-20 li');

//     chBox.onclick = function () {
//         li20Out[0].classList.add('css-5');
//     }


// } func_20('sd');


function func_20(inp20) {
    inp20 = document.querySelector('.u-20__input');


} func_20('sd');





