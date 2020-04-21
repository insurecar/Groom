// //Task1
let p1 = document.querySelector('.p-1');
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        p1.innerHTML += '*';
    }
    p1.innerHTML += ' ';
}

// //Task2
let p2 = document.querySelector('.p-2');
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        p2.innerHTML += '*';
    }
    p2.innerHTML += ' <br>';
}


// //Task3
let p3 = document.querySelector('.p-3');
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
        if (k % 2 == 1) {
            p3.innerHTML += 0;
        } else if (k % 2 == 0) {
            p3.innerHTML += 1;
        }
    }
    p3.innerHTML += ' <br>';
}


// //Task4
let p4 = document.querySelector('.p-4');
for (let i = 0; i < 3; i++) {
    for (let k = 1; k < 7; k++) {
        if (k % 3 == 0) {
            p4.innerHTML += 'x';
        } else if (k % 2 == 0) {
            p4.innerHTML += 0;
        } else if (k % 2 == 1) {
            p4.innerHTML += 1;
        }
    }
    p4.innerHTML += ' <br>';
}

// //Task5
let p5 = document.querySelector('.p-5');
for (let i = 0; i < 4; i++) {
    for (let k = 0; k < i; k++) {
        p5.innerHTML += '*';
    }
    p5.innerHTML += ' <br>';
}

// //Task6
let p6 = document.querySelector('.p-6');
for (let i = 0; i < 5; i++) {
    for (let k = 5; k > i; k--) {
        p6.innerHTML += '*';
    }
    p6.innerHTML += '<br>';
}


// //Task7
let p7 = document.querySelector('.p-7');
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        p7.innerHTML += '*'
    }
    p7.innerHTML += '<br>'
}


//Task8
let p8 = document.querySelector('.p-8');
for (let i = 1; i < 4; i++) {
    for (let k = 0; k < i; k++) {
        p8.innerHTML += '* ';
    }
    p8.innerHTML += '<br>';
    if (i == 3) {
        for (let i = 1; i < 4; i++) {
            for (let k = 3; k > i; k--) {
                p8.innerHTML += '* ';
            }
            p8.innerHTML += '<br>';
        }
    }
}

//Task9
let p9 = document.querySelector('.p-9');
let space = '&nbsp';
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 6; k++) {
        if (i != 0 && i != 4) {
            if (k != 0 && k != 5) {
                p9.innerHTML += space;
            } else {
                p9.innerHTML += '*';
            }
        } else {
            p9.innerHTML += '*';
        }
    }
    p9.innerHTML += '<br>';
}


//Task10
let p10 = document.querySelector('.p-10');
let space10 = '&nbsp';
let inp10 = document.querySelector('.input-10');
inp10.oninput = function () {
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 6; k++) {
            if (i != 0 && i != 4) {
                if (k != 0 && k != 5) {
                    p10.innerHTML += space;
                } else {
                    p10.innerHTML += inp10.value;
                }
            } else {
                p10.innerHTML += inp10.value;
            }
        }
        p10.innerHTML += '<br>';
    }
}

//Task11
let p11 = document.querySelector('.p-11');
for (let i = 1; i < 19; i++) {
    for (let k = 6; k < 8; k++) {
        if (k == 6 && i < 10) {
            p11.innerHTML += `${k} * ${i} = ${k * i}`;
        } if (k == 7 && i > 10) {
            p11.innerHTML += `${k} * ${i - 9} = ${k * (i - 9)}`
        }
    }
    p11.innerHTML += '<br>';
}

//Task12
let p12 = document.querySelector('.p-12');
for (let i = 2; i < 7; i++) {
    for (let k = 1; k < i; k++) {
        p12.innerHTML += `${k} `;
    }
    p12.innerHTML += '<br>';
}

//Task13
let p13 = document.querySelector('.p-13');
for (let i = 0; i < 5; i++) {
    for (let k = 1; k < 51; k++) {
        if (i == 0) {
            if (k < 10) {
                p13.innerHTML += `0${k} &nbsp`;
            } else if (k == 10) {
                p13.innerHTML += `${k} `;
            }
        } else if (i == 1 && k > 10 && k < 21) {
            p13.innerHTML += `${k} &nbsp`;
        } else if (i == 2 && k > 20 && k < 31) {
            p13.innerHTML += `${k} &nbsp`;
        } else if (i == 3 && k > 30 && k < 41) {
            p13.innerHTML += `${k} &nbsp`;
        } else if (i == 4 && k > 40 && k < 51) {
            p13.innerHTML += `${k} &nbsp`;
        }
    }
    p13.innerHTML += '<br>';
}

//Task14
let p14 = document.querySelector('.p-14');
for (let i = 0; i < 5; i++) {
    for (let k = 5; k > i; k--) {
        p14.innerHTML += `${k - i} `;
    }
    p14.innerHTML += '<br>';
}

//Task15
let p15 = document.querySelector('.p-15');
for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 4 - i; k++) {
        p15.innerHTML += 'X ';
    }
    for (k = 4 - i; k < 5; k++) {
        p15.innerHTML += `${5 - k} `;
    }
    p15.innerHTML += '<br>';
}

//Task16
let p16 = document.querySelector('.p-16');
for (let i = 1; i < 6; i++) {
    for (let k = 0; k < i; k++) {
        p16.innerHTML += `${i} `;
    }
    p16.innerHTML += '<br>'
}

//Task17
let p17 = document.querySelector('.p-17');
for (let i = 1; i < 6; i++) {
    for (let k = 0; k < i; k++) {
        p17.innerHTML += `${6 - i} `;
    }
    p17.innerHTML += '<br>'
}

//Task18
let p18 = document.querySelector('.p-18');
for (let i = 1; i < 6; i++) {
    for (let k = 0; k < i; k++) {
        if (i & 1) {
            p18.innerHTML += `${6 - i} `
        } else {
            p18.innerHTML += 'X '
        }
    }
    p18.innerHTML += '<br>';
}

//Task19
let p19 = document.querySelector('.p-19');
for (let i = 2; i < 5; i++) {
    for (let k = 0; k < i + 0.5; k += 0.5) {
        if (k == 0) {
            if (i == 2) {
                p19.innerHTML += '&nbsp&nbsp';
            } else if (i == 3) {
                p19.innerHTML += '&nbsp';
            }
        }
        p19.innerHTML += '*'
    }
    p19.innerHTML += '<br>';
}


//Task20
let p20 = document.querySelector('.p-20');
for (let i = 1; i < 6; i++) {
    if (i == 1 || i == 5) {
        p20.innerHTML += '&nbsp&nbsp'
    } else if (i % 2 == 0) {
        p20.innerHTML += '&nbsp';
    }
    if (i < 4) {
        for (let k = 0; k < i; k += 0.5) {
            p20.innerHTML += '*';
        }
    } else {
        for (let k = 6; k > i; k -= 0.5) {
            p20.innerHTML += '*'
        }
    }
    p20.innerHTML += '<br>';
}