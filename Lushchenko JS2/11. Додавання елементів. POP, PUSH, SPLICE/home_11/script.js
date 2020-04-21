// task 1 --------------------
let btn1 = document.querySelector('.u-2__push');
let div1 = document.querySelector('.out-1');
let inp1 = document.querySelector('.u-1');
let arr1 = [];
btn1.onclick = function () {
    if (inp1.value) {
        arr1.push(inp1.value);
        div1.innerHTML = `${arr1} `;
    }
}


//task2
let btn2 = document.querySelector('.u-2__pop');
btn2.onclick = function () {
    arr1.pop();
    div1.innerHTML = `${arr1} `;
}


//task3
let btn3 = document.querySelector('.u-3__shift');
btn3.onclick = function () {
    arr1.shift();
    div1.innerHTML = arr1;
}

//task4
let btn4 = document.querySelector('.u-4__unshift');
btn4.onclick = function () {
    if (inp1.value) {
        arr1.unshift(inp1.value);
        div1.innerHTML = `${arr1} `;
    }
}


//task5
let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
let btn5 = document.querySelector('.u-5');
let div5 = document.querySelector('.out-5');
btn5.onclick = function () {
    let inp51 = +document.querySelector('.u-5__input-5-1').value;
    let inp52 = +document.querySelector('.u-5__input-5-2').value;
    if (inp51 && inp52) {
        arr5.splice(inp51, inp52);
        div5.innerHTML = arr5;
    }
}


//task6
let arr6 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
let btn6 = document.querySelector('.u-6');
let div6 = document.querySelector('.out-6');
btn6.onclick = function funcPush() {
    let inp6 = document.querySelector('.u-6__input').value;
    if (inp6) {
        arr6[arr6.length] = inp6;
        div6.innerHTML = arr6;
    }
}


//task7
let arr7 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
let btn7 = document.querySelector('.u-6__pop');
let div7 = document.querySelector('.out-7');
btn7.onclick = function funcPop() {
    arr7.length = arr7.length - 1;
    div7.innerHTML = arr7;
}


//task8
let arr8 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
let newArr = [];
let btn8 = document.querySelector('.u-7');
let div8 = document.querySelector('.out-8');
btn8.onclick = function () {
    newArr[0] = arr8[1];
    arr8.shift();
    div8.innerHTML += `${newArr} `;
}

//task9
let div = document.querySelector('.out-9');
let btn9 = document.querySelector('.u-9');
btn9.onclick = function funcUnShift() {
    let arr9 = [3, 4, 5];
    let inp9 = document.querySelector('.u-9__input').value;
    arr9[0] = inp9;
    div.innerHTML = arr9;
}


//tak10
let arr10 = [2, 4, 6, 8, 10, 'hello'];
let div10 = document.querySelector('.out-10');
div10.innerHTML = `${arr10.reverse()}`;



//task11
let arr11 = [0, 2, 3, 7, 8, 5, 11];
let btn11 = document.querySelector('.u-11__button');
btn11.onclick = function () {
    let u11 = +document.querySelector('.u-11__input').value;
    let div11 = document.querySelector('.out-11');
    div11.innerHTML = arr11.indexOf(u11);
}

//task12
let btn12 = document.querySelector('.button-12');
btn12.onclick = function funcIndexOf() {
    let arr12 = [0, 2, 3, 7, 8, 5, 11];
    let inp12 = +document.querySelector('.input-12').value;
    let div12 = document.querySelector('.div-12');
    for (let i = 0; i < arr12.length; i++) {
        if (inp12 == arr12[i]) {
            div12.innerHTML = i;
            break;
        } else if (arr12[i] != inp12) {
            div12.innerHTML = -1;
        }
    }
}

//task13
function funcReverse() {
    let arr30 = [1, 2, 3, 4, 5];
    let arrNew = [];
    let div13 = document.querySelector('.out-13');
    for (let i = arr30.length - 1; i >= 0; i--) {
        arrNew.push(arr30[i]);
    } div13.innerHTML = arrNew;
}

//task14
let btn14 = document.querySelector('.button-14');
btn14.onclick = function () {
    let inp14 = +document.querySelector('.input-14').value;
    let arr14 = [];
    let div14 = document.querySelector('.div-14');
    for (let i = 0; i < inp14; i++) {
        let randomNumb = Math.round(Math.random() * 100);
        arr14.push(randomNumb);
    }
    div14.innerHTML = arr14;
}


//task15
function evenArr(valueElement) {
    let div15 = document.querySelector('.div-15');
    let arr15 = [];
    for (let i = 0; i < valueElement; i++) {
        let randomNumb = Math.round(Math.random() * 100);
        if (randomNumb % 2 == 0) {
            arr15.push(randomNumb);
        }
    }
    div15.innerHTML = arr15;
} evenArr(12);


//task16
let btn16 = document.querySelector('.u-16__button');
btn16.onclick = function () {
    let arr16_1 = [3, 5, 7];
    let arr16_2 = [2, 4, 6];
    let div16 = document.querySelector('.out-16');
    div16.innerHTML = arr16_1.concat(arr16_2);
}


//task17
function emulContact() {
    let arr17_1 = [3, 5, 7];
    let arr17_2 = [2, 4, 6];
    let div17 = document.querySelector('.out-17');
    for (let i = 0; i < arr17_2.length; i++) {
        arr17_1.push(arr17_2[i]);
    }
    div17.innerHTML = arr17_1;
} emulContact();

//task18
let btn18 = document.querySelector('.u-18__button');
btn18.onclick = function () {
    let arr16_1 = [3, 5, 7, 11, 12, 13, 14];
    inp18 = +document.querySelector('.u-18__input').value;
    console.log(arr16_1.includes(inp18));
}


//task19
function emulIncludes() {
    let arr1 = [2, 4, 6, 8, 10];
    let arr2 = [1, 3, 5, 7, 9, 10];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            console.log(i);
        }
    }
} emulIncludes();


//task20
document.querySelector('.button-20').onclick = function () {
    let arr20 = ['Today', 'is', 'very', 'good', 'weather', '.'];
    let div20 = document.querySelector('.out-20');
    div20.innerHTML = arr20.join('&nbsp');
}