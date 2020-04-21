// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1() {
    let i = 0;
    let p1 = document.querySelector('.task-1');
    p1.innerHTML += '<hr>Task1 <br>';
    while (i < 100) {
        i++;
        p1.innerHTML += `${i} `;
    } p1.innerHTML += '&nbsp';
} func_1();



// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

function func_2(a, b) {
    let p2 = document.querySelector('.task-2');
    p2.innerHTML += '<hr>Task2 <br>';
    while (a <= b) {
        p2.innerHTML += `${a} `;
        a++;
    }
} func_2(55, 77);

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(a, b) {
    let p3 = document.querySelector('.task-3');
    p3.innerHTML += '<hr>Task3 <br>';
    while (a <= b) {
        p3.innerHTML += `${b} `;
        b--;
    }
} func_3(55, 77);

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {
    let p4 = document.querySelector('.task-4');
    p4.innerHTML += '<hr>Task4 <br>';
    while (a <= b) {
        p4.innerHTML += `${b} `;
        b -= c;
    }
} func_4(55, 77, 3);

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5() {
    let p5 = document.querySelector('.task-5');
    p5.innerHTML += '<hr>Task5 <br>'
    let i = 0;
    let count = 0;
    while (i <= 20) {
        count += i;
        i++;
    } p5.innerHTML += `Сума цифер від 1 до 20 складає ${count}`;
} func_5();

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {
    let count = 0;
    if (a <= b) {
        while (a <= b) {
            count += a;
            a++;
        }
        return count;
    } else {
        return false;
    }
} document.querySelector('.task-6').innerHTML = `Task6= ${func_6(12, 15)}`;

// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_7(a, b) {
    let count = 1;
    if (a <= b) {
        while (a <= b) {
            count *= a;
            a++;
        } return count;
    } else {
        return false;
    }
} document.querySelector('.task-7').innerHTML = `Task7 = ${func_7(12, 13)}`;

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {
    let i = 333;
    let day = 1;
    while (i < 1000000) {
        i *= 2;
        day++;
    }
    return day;
} document.querySelector('.task-8').innerHTML = `Task 8: Кількість днів ${func_8()}`;

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).

function func_9(a, b) {
    let p9 = document.querySelector('.task-9');
    p9.innerHTML += '<hr> Task9<br>'
    while (a < b) {
        if (a & 1) {
            p9.innerHTML += `${a} `;
        } else {
            p9.innerHTML += `0 `;
        }
        a++;
    }
} func_9(10, 30);

// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {
    let p10 = document.querySelector('.task-10');
    let str = "#";
    p10.innerHTML += '<hr>Task10  <br>';
    while (str.length < 7) {
        if (str.length % 2 == 0) {
            p10.innerHTML += '*';
            p10.innerHTML += '<br>';
        } else if (str.length % 2 != 0) {
            p10.innerHTML += '**';
            p10.innerHTML += '<br>';
        }
        str += '#';
    }




}
func_10();

// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11() {
    let p11 = document.querySelector('.task-11');
    let i = 1;
    let k = 10;
    p11.innerHTML += '<hr>Task 11: '
    while (i <= 20) {
        if (i % 2 == 0) {
            p11.innerHTML += `${10 - k} `;
        } else if (i % 2 == 1) {
            p11.innerHTML += `${k--} `;
        }
        i++;
    }
} func_11();

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
let a = 0;
do
    console.log('do while work');
while (a < 0);

let b = 0;
while (b < 0) {
    console.log('while work');
}

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {

}

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {
    p13 = document.querySelector('.task-13');
    p13.innerHTML += '<hr>Task 13: <br>'
    i = 100;
    do {
        p13.innerHTML += `${i} `;
        i--;
    } while (i > 0);
} func_13();

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.

function func_14() {
    p14 = document.querySelector('.task-14');
    p14.innerHTML += '<hr>Task 14<br>';
    let result = 1;
    let i = 5;
    let k = 0;
    do {
        i *= 1.3;
        result = result + i;
        k++;
    } while (i < 132);
    p14.innerHTML += `Кількість днів складає: ${k} <hr>`;
} func_14();

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {
    p15 = document.querySelector('.task-15');
    p15.innerHTML += 'Task 15: ';
    let result = 1;
    let i = 5;
    let k = 0;
    do {
        i += 0.3;
        result = result + i;
        k++;
    } while (i < 568);

    p15.innerHTML += `Гермиона Грейнджер зварить ${parseInt(i)} літрів за ${k} днів,<hr>`;
} func_15();

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.

function func_16() {
    p16 = document.querySelectorAll('.task-16');
    let i = 0;
    do {
        i++;
    }
    while (i < p16.length);
    if (i & 1) {
        return false;
    } else {
        return i;
    }
} console.log(`${func_16()}`);

// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {
    p16 = document.querySelectorAll('.task-16');
    let i = 0;
    do {
        p16[i].innerHTML = `Task 17:   <b>${i + 1}</b>`;
        i++;
    }
    while (i < p16.length);
} func_17();


// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

function func_18() {
    p18 = document.querySelectorAll('.task-18');
    let i = 0;
    do {
        p18[i].innerHTML += `Task 18: <b>${3 - i}</b>`;
        i++;
    }
    while (i < p18.length)
} func_18();


// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19() {
    p19 = document.querySelector('.task-19');
    p19.innerHTML += 'Task 19: '
    let i = 1;
    do {
        if (i & 1) {
            p19.innerHTML += `${i} `;
        } else {
            p19.innerHTML += '* ';
        }
        i++;
    } while (i < 20);

} func_19();

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {
    let p20 = document.querySelector('.task-20');
    let i = 0;
    let k = 1;
    p20.innerHTML += 'Task20: <br>';
    while (i < 12) {
        if (i % 3 == 0 && i != 0) {
            p20.innerHTML += '<br>';
        } if (i == 0 || i % 4 == 0) {
            p20.innerHTML += `${k} `;
        }
        p20.innerHTML += '* ';
        i++;
    } p20.innerHTML += k;
}
func_20();