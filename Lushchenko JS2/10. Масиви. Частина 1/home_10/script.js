// task 1 --------------------
let arr = [true, 32, 'name', 'age', false];
console.log(arr);

//task2
let arr1 = [true, 32, 'name', 'age', false];
let div1 = document.querySelector('.div-1');
div1.innerHTML = arr1;

//task3
const a = [2, 'hello', 17, 34, 'privet'];
console.log('Task3: Довжина масива складає ' + a.length + ' елементів');

//task4
const a4 = [2, 'hello', 17, 34, 'privet'];
console.log('Task 4: ' + a4[0], a4[3], a4[8]);

//task5
const a5 = [2, 'hello', 17, 34, 'privet'];
console.log('Task 5: Сума даних елементів складає ' + (+a5[0] + +a5[2] + +a5[3]));

//task6
let div6 = document.querySelector('.div-6');
let arr6 = ['Rostyslav', 'Scorpion', 02, 11];
div6.innerHTML = arr6;

//task7
let div7 = document.querySelector('.div-7');
let b = ['one', 1, 2, 'two', 'hi', 'foo', 'bar'];
div7.innerHTML = b;

//task8
let div8 = document.querySelector('.div-8');
let b8 = [];
b8[3] = 3.14;
b8[4] = 17;
b8[6] = 5;
div8.innerHTML = b8;
console.log('Task 8: Масив виглядає так: ' + b8 + ' а його довжина ' + b8.length + ' елементів');

//task9
let arr9 = [1, 32, 54, 234, 123, 54, 423, 876, 5, 777];
console.log('Task 9: ' + `${arr9[3]} ` + `${arr9[7]} ` + 'а довжина масиву  ' + arr9.length);

//task10
let div10 = document.querySelector('.div-10');
let arr10 = [, 1, , , , 5, , , , , 10];
console.log('Task 10: Масив' + arr10 + ' а його довжина складає ' + arr10.length);
div10.innerHTML = arr10;

//task11
document.querySelector('.button-11').onclick = function () {
    const c = [77, 88, 99, 66];
    let change = 0;
    change = c[3]
    c[3] = c[1];
    c[1] = change;
    console.log('Task11: ' + c);
}

//task12
function array12(arr12) {
    let lastElement = arr12.length - 1;
    let change = 0;
    change = arr12[lastElement];
    arr12[lastElement] = arr12[0];
    arr12[0] = change;
    console.log('Task 12: ' + arr12);

} array12([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//task13
let div13 = document.querySelector('.div-13');
let d = ['y', 4, 22, 'o'];
for (let i = 0; i < d.length; i++) {
    div13.innerHTML += `${d[i]} `;
}

//task14
let div14 = document.querySelector('.div-14');
let e = [1, 2, 3, 'hello', 66];
for (let i = e.length - 1; i >= 0; i--) {
    div14.innerHTML += `${e[i]} `;
}

//task15
let div15 = document.querySelector('.div-15');
let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
for (let i = 0; i < d15.length; i++) {
    if (d15[i] > 0) {
        div15.innerHTML += `${d15[i]} `;
    }
}

//task16
let div161 = document.querySelector('.div-16-1');
let div162 = document.querySelector('.div-16-2');
let d16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let a1 = [];
let a2 = [];
for (let i = 0; i < d16.length; i++) {
    if (d16[i] & 1) {
        a2.push(d16[i]);
    } else {
        a1.push(d16[i]);
    }
}
div161.innerHTML = `Парні елементи масиву: ${a1}`;
div162.innerHTML = `Не парні елементи масиву: ${a2}`;
console.log('Task 16: Парні: ' + a1);
console.log('Task 16: Не парні ' + a2);

//task17
let e17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let count17 = 0;
for (let i = 0; i < e17.length; i++) {
    if (e17[i] == 0) {
        count17++;
    }
} console.log('Task 17: Кількість елементів з 0 складає: ' + count17);

//task18
function max(arr) {
    arr = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
    let max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log('Task 18: Найбільший елемент масиву: ' + max());


//task19
function max19(arr) {
    let f = [-3, 0, 45, 22, 123, -485, 98, 34];
    let max = f[0];
    let maxIndex = 0
    for (var i = 1; i < f.length; i++) {
        if (f[i] > max) {
            max = f[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
console.log('Task 19: Найбільший елемент масиву під індексом: ' + max19());

//task20
function sum20() {
    let f = [-3, 0, 45, 22, 123, -485, 98, 34];
    let sum = 0;
    for (let i = 0; i < f.length; i++) {
        sum += f[i];
    } return sum;
} console.log('Task 20: Сума елементів масиву складає: ' + sum20());