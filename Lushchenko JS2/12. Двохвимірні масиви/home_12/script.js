//task1
function funcArr1() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p1 = document.querySelector('.p-1');
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            p1.innerHTML += `${a[i][k]} `;
            if (k == 2 || k % 3 == 2) {
                p1.innerHTML += '<br>';
            }
        }
    }
} funcArr1();


//task2
function funcArr2() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p2 = document.querySelector('.p-2');
    p2.innerHTML = `${a[0][2]}`;
} funcArr2();


//task3
function funcArr3() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p3 = document.querySelector('.p-3');
    p3.innerHTML = `${a[3][1]}`
} funcArr3();


//task4
function funcArr4() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p4 = document.querySelector('.p-4');
    p4.innerHTML = `${a[3]}`
} funcArr4();


//task5
function funcArr5() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p5 = document.querySelector('.p-5');
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (k == 0) {
                p5.innerHTML += `${a[i][k]} <br>`
            }
        }
    }
} funcArr5();


//task6
function funcArr6() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p6 = document.querySelector('.p-6');
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (a[i][k] % 2 == 0) {
                p6.innerHTML += `${a[i][k]} `
            }
        }
    }
} funcArr6();


//task7
function funcArr7() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p7 = document.querySelector('.p-7');
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (!isNaN(a[i][k])) {
                p7.innerHTML += `${a[i][k]} `;
            }
        }
    }
} funcArr7();


//task8
function funcArr8() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p8 = document.querySelector('.p-8');
    for (let i = 0; i < a.length; i++) {
        p8.innerHTML += `<b>${a[i].length}</b> <br>`;
    }
} funcArr8();


//task9
function funcArr9() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p9 = document.querySelector('.p-9');
    for (let i = a.length - 1; i >= 0; i--) {
        for (let k = a[i].length - 1; k >= 0; k--) {
            p9.innerHTML += `${a[i][k]} `;
        }

        if (i % 3 == 0 || i % 3 == 2 || i % 2 == 1 || i % 4 == 0) {
            p9.innerHTML += '<br>';
        }
    }
} funcArr9();


//task10
function funcArr10() {
    let a = [
        [3, 2, 1],
        ['c', 'b', 'a'],
        [6, 5, 4],
    ];
    let p10 = document.querySelector('.p-10');
    for (let i = 0; i < a.length; i++) {
        for (let k = a[i].length - 1; k >= 0; k--) {
            p10.innerHTML += `${a[i][k]} `;
        }
        if (i == 0 || i % 3 == 2 || i % 3 == 1) {
            p10.innerHTML += '<br>';
        }
    }
} funcArr10();


//task11
function funcArr11() {
    let a = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1],
    ];
    let p11 = document.querySelector('.p-11');
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            p11.innerHTML += `${a[i][k]} `;
            if ((k + 1) % 8 == 0) {
                p11.innerHTML += '<br>';
            }
        }
    }
} funcArr11();


//task12
function funcArr12() {
    let a = [
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
    ];
    let div12 = document.querySelector('.div-12');
    div12.style.width = '160px';
    div12.style.height = '160px';
    div12.style.boxSizing = 'border-box';
    for (let i = 0; i <= a.length - 1; i++) {
        for (let k = 0; k <= a[i].length - 1; k++) {
            if (a[i][k] == 1) {
                let div1 = document.createElement('div');
                div1.style.display = 'block';
                div1.style.float = 'left';
                div1.style.background = 'black';
                div1.style.width = '20px';
                div1.style.height = '20px';
                div1.style.boxSizing = 'border-box';
                div1.style.border = '1px solid black';
                div12.appendChild(div1);
            } else if (a[i][k] == 0) {
                let div1 = document.createElement('div');
                div1.style.display = 'block';
                div1.style.float = 'left';
                div1.style.background = 'white';
                div1.style.width = '20px';
                div1.style.height = '20px';
                div1.style.boxSizing = 'border-box';
                div1.style.border = '1px solid black';
                div12.appendChild(div1);
            }
        }
    }
} funcArr12();




//task13
function funcArr13() {
    let c = [
        [1, 4],
        [7, 7],
        [7, 7, 7],
        [7, 7, 5],
    ];
    let p131 = document.querySelector('.p-13-1');
    let p132 = document.querySelector('.p-13-2');
    p131.innerHTML = `c[0][1] == ${c[0][1]}`;
    p132.innerHTML = `c[3][2] == ${c[3][2]}`;
} funcArr13();


//task14
function funcArr14() {
    let c = [
        [7, 4],
        [7, 7, 7],
        [5]
    ];
    let p141 = document.querySelector('.p-14-1');
    let p142 = document.querySelector('.p-14-2');
    p141.innerHTML = ` c[0][1] ==  ${c[0][1]}`;
    p142.innerHTML = ` c[2] ==  ${c[2]}`;
} funcArr14();


//task15
function funcArr15() {
    let d = [
        [7, 4],
        [7, 7, 7],
        [7, 7, 7, 5],
        [7, 7, 7],
        [7, 7, 7],
        [7, 7, 7],
        [4, 5],
    ]
    let p151 = document.querySelector('.p-15-1');
    let p152 = document.querySelector('.p-15-2');
    let p153 = document.querySelector('.p-15-3');
    p151.innerHTML = `d[0][1] == ${d[0][1]}`;
    p152.innerHTML = `d[2][3] == ${d[2][3]}`;
    p153.innerHTML = `d[6] == ${d[6]}`;
} funcArr15();


//task16
function funcArr16() {
    let e = [
        [7, 4],
        [7, 7, 7],
        [7, 7, 7, 5],
        [7, 7, 7],
        [7, 7, 7],
        [7, 7, 7],
        [[7, 6], 7, 7],
    ]
    let p161 = document.querySelector('.p-16-1');
    let p162 = document.querySelector('.p-16-2');
    let p163 = document.querySelector('.p-16-3');
    p161.innerHTML = `e[0][1] == ${e[0][1]}`;
    p162.innerHTML = `e[2][3] == ${e[2][3]}`;
    p163.innerHTML = `e[6][0][1] == ${e[6][0][1]}`;
} funcArr16();


//task17
function funcArr17() {
    let f = [
        [7, [7, 7, 7, 4]],
        [7, 7, 7],
        [7, [7, 5]],
        [7, 7, 7],
        [7, 7, 7],
        [7, 7, 7],
        [[7, 6], 7]
    ];
    let p171 = document.querySelector('.p-17-1');
    let p172 = document.querySelector('.p-17-2');
    let p173 = document.querySelector('.p-17-3');
    p171.innerHTML = `f[0][1][3] == ${f[0][1][3]}`;
    p172.innerHTML = `f[2][1][1] == ${f[2][1][1]}`;
    p173.innerHTML = `f[6][0][1] == ${f[6][0][1]}`;
} funcArr17();


//task18
function funcArr18() {

    let g = [
        [7, [7, 7, 7, 4]],
        [7, 7, 7],
        [7, [7, 7, 7, 5],],
        ['sameAs'],
        [7, 7, 7],
        ['sameAs'],
        [[7, 6]],
    ];
    let p181 = document.querySelector('.p-18-1');
    let p182 = document.querySelector('.p-18-2');
    let p183 = document.querySelector('.p-18-3');
    let p184 = document.querySelector('.p-18-4');
    p181.innerHTML = `g[0][1][3] == ${g[0][1][3]}`;
    p182.innerHTML = `g[2][1][3] == ${g[2][1][3]}`;
    p183.innerHTML = `g[6][0][1] == ${g[6][0][1]}`;
    p184.innerHTML = `<i>g[3]</i> ${g[3]} = <i>g[5]</i> ${g[5]}`;
} funcArr18();


//task19
function funcArr19() {
    const a = [
        [1, 2, 3],
        ['a', 'b', 'c'],
        [4, 5, 6],
        ['d', 'e', 'f'],
        [7, 8, 9],
    ];
    let p19 = document.querySelector('.p-19');
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (!isNaN(a[i][k])) {
                sum += a[i][k];
            }
        }
    } p19.innerHTML = ` Сума елементів масиву: ${sum}`;
} funcArr19();


//task20
function funcArr20() {
    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];
    let p201 = document.querySelector('.p-20-1');
    let p202 = document.querySelector('.p-20-2');
    let p203 = document.querySelector('.p-20-3');
    let p204 = document.querySelector('.p-20-4');
    let p205 = document.querySelector('.p-20-5');
    let p206 = document.querySelector('.p-20-6');
    let p207 = document.querySelector('.p-20-7');
    let p208 = document.querySelector('.p-20-8');
    p201.innerHTML = 'a[0][0], a[0][1], a[0][2]';
    p202.innerHTML = 'a[1][0], a[1][1], a[1][2]';
    p203.innerHTML = 'a[2][0], a[2][1], a[2][2]';
    p204.innerHTML = 'a[0][0], a[1][0], a[2][0]';
    p205.innerHTML = 'a[1][1], a[1][1], a[1][2]';
    p206.innerHTML = 'a[2][0], a[2][1], a[2][2]';
    p207.innerHTML = 'a[0][0], a[1][1], a[2][2]';
    p208.innerHTML = 'a[0][1], a[1][1], a[2][0]';
} funcArr20();