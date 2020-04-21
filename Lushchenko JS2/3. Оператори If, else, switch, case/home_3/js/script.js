// Task 1.
let a = 4;
if (a == 4) {
    console.log('Task1 Yes!');
}


// Task 2.
let b = 8;
let c = 10;
if (b > c) {
    console.log(b + ' більше ' + c);
} else if (b < c) {
    console.log('Task2 ' + c + ' більше ' + b);
}


// Task 3.
if (b > c) {
    console.log(b + ' більше ' + c);
} else if (b < c) {
    console.log('Task3 ' + c + ' більше ' + b);
} else if (b == c) {
    console.log(b + ' рівне ' + c);
}


// Task 4.
document.querySelector('.button-4').onclick = function () {
    let inp1 = +document.querySelector('.input-4-1').value;
    let inp2 = +document.querySelector('.input-4-2').value;
    if (inp1 > inp2) {
        console.log('Task4 ' + inp1 + ' більше ' + inp2);
    } else if (inp1 < inp2) {
        console.log('Task4 ' + inp2 + ' більше ' + inp1);
    } else if (inp1 == inp2) {
        console.log('Task4 ' + inp1 + ' більше ' + inp2);
    }
}


// Task 5.
document.querySelector('.button-5').onclick = function () {
    let inp5 = document.querySelector('.input-5').value;
    if (inp5 < 2000) {
        console.log('Task5 ' + ' Your age is ' + (2019 - inp5));
    } else if (inp5 >= 2000) {
        console.log('Task5 ' + ' Your age is ' + (2019 - inp5));
    }
}


// Task 6.
document.querySelector('.button-6').onclick = function () {
    let inp6 = +document.querySelector('.input-6').value;
    if (inp6 >= 1 && inp6 <= 32) {
        console.log('Number of falt is real');
    } else {
        console.log('No flat');
    }
}


// Task 7.
document.querySelector('.button-7').onclick = function () {
    let inp7 = document.querySelector('.input-7').value;
    if (inp7 > 0) {
        console.log(' Task 7 Number ' + inp7 + ' is greater then 0');
    } else if (inp7 < 0) {
        console.log('Task 7 Number ' + inp7 + ' is bellow 0');
    }
}


// Task 8.
document.querySelector('.button-8').onclick = function () {
    let inp8 = +document.querySelector('.input-8').value;
    if (inp8 % 2 == 0) {
        console.log('Task8 ' + inp8 + ' is even');
    } else if (inp8 % 2 == 1) {
        console.log('Task8 ' + inp8 + ' is odd');
    }
}


// Task 9.
document.querySelector('.button-9').onclick = function () {
    let inp91 = +document.querySelector('.input-9-1').value;
    let inp92 = +document.querySelector('.input-9-2').value;
    if (inp91 && inp92) {
        console.log('Task9 ' + Math.pow(inp91, inp92));
    } else {
        console.log('Task9 Enter number');
    }
}


// Task 10.
document.querySelector('.button-10').onclick = function () {
    let inp10 = document.querySelector('.input-10').value;
    if (inp10 == ' ' || inp10 == '  ' || inp10 == '   ') {
        alert('Input you name!')
    } else {
        alert('Hello ' + inp10);
    }
}


// Task 11.
document.querySelector('.button-11').onclick = function () {
    let inp11 = document.querySelector('.input-11').value;
    if (inp11.trim() == '') {
        alert('Input you name!')
    } else {
        alert('Hello ' + inp11);
    }
}


// Task 12.
document.querySelector('.button-12').onclick = function () {
    let inp12 = +document.querySelector('.input-12').value;
    switch (inp12) {
        case 1:
            console.log('One');
            break;
        case 2:
            console.log('Two');
            break;
        case 3:
            console.log('Three');
    }
}


// Task 13.
document.querySelector('.button-13').onclick = function () {
    let inp13 = +document.querySelector('.input-13').value;
    if (inp13 >= 1 && inp13 <= 5) {
        console.log('Street 1');
    } else if (inp13 >= 6 && inp13 < 11) {
        console.log('Street 2');
    } else if (inp13 >= 11 && inp13 <= 20) {
        console.log('Street 3');
    } else {
        console.log('error');
    }
}


// Task 14.
document.querySelector('.button-14').onclick = function () {
    let inp14 = +document.querySelector('.input-14').value;
    let p14 = document.querySelector('.p-14');
    if (inp14 >= 0 && inp14 <= 25) {
        p14.innerHTML = 'не обнаруживается';
    } else if (inp14 > 25 && inp14 <= 50) {
        p14.innerHTML = 'снижение числа лимфоцитов';
    } else if (inp14 > 50 && inp14 <= 100) {
        p14.innerHTML = 'вялость, рвота';
    } else if (inp14 > 100 && inp14 <= 150) {
        p14.innerHTML = 'смертность 5 % ';
    } else if (inp14 > 150 && inp14 <= 350) {
        p14.innerHTML = 'смертность 50 % за 30 суток';
    } else if (inp14 > 350 && inp14 <= 600) {
        p14.innerHTML = '90 % смертность за 2 недели';
    } else if (inp14 > 600) {
        p14.innerHTML = 'смертность 100 %';
    }
}


// Task 15.
let x = 875455;
let y = 4255;
console.log(x && y); //виводить останнє значення 
console.log(x || y); //вивводить перше значення


// Task 16.
document.querySelector('.button-16').onclick = () => {
    let inp16 = +document.querySelector('.input-16').value;
    if (inp16 == 500) {
        console.log('Task 16: Податок складає: 2525 тенге');
    } else if (inp16 == 1200) {
        console.log('Task 16: Податок складає: 5050 тенге');
    } else if (inp16 == 1600) {
        console.log('Task 16: Податок складає: 8275 тенге');
    } else if (inp16 == 1900) {
        console.log('Task 16: Податок складає: 9675 тенге');
    } else if (inp16 == 2000) {
        console.log('Task 16: Податок складає: 11075 тенге');
    } else {
        console.log('Введіть правильний обєм');
    }
}


// Task 17.
document.querySelector('.button-17').onclick = function () {
    let inp171 = +document.querySelector('.input-17-1').value;
    let inp172 = document.querySelector('.input-17-2').value;
    if (!inp171 || inp172.trim() == '') {
        console.log('Enter data');
    } else if (inp171 && inp172 == 'euro' || inp172 == 'rub' || inp172 == 'uah') {
        if (inp172 == 'euro') {
            console.log(inp171 + '$ це є ' + inp171 * 0.88 + 'Є');
        } else if (inp172 == 'uah') {
            console.log(inp171 + '$ це є ' + inp171 * 26 + 'UA');
        } else if (inp172 == 'rub') {
            console.log(inp171 + '$ це є ' + inp171 * 65 + 'rub');
        }
    } else {
        console.log('Enter value');
    }
}


// Task18
document.querySelector('.button-18').onclick = () => {
    let inp181 = +document.querySelector('.input-18-1').value;
    let inp182 = document.querySelector('.input-18-2').value;
    switch (inp182) {
        case 'euro':
            console.log(inp181 + '$ це є ' + inp181 * 0.88 + 'Є');
            break;
        case 'uah':
            console.log(inp181 + '$ це є ' + inp181 * 26 + 'UA');
            break;
        case 'rub':
            console.log(inp181 + '$ це є ' + inp181 * 65 + 'rub');
            break;
        default:
            console.log('Enter data');
    }
}


// Task 19.
document.querySelector('.button-19').onclick = () => {
    let inp191 = +document.querySelector('.input-19-1').value;
    let inp192 = +document.querySelector('.input-19-2').value;
    let inp193 = document.querySelector('.input-19-3').value;
    let p19 = document.querySelector('.p-19');
    if (inp191 && inp192 && inp193 == '+') {
        p19.innerHTML = `${inp191} + ${inp192} = ${inp191 + inp192}`;
    } else if (inp191 && inp192 && inp193 == '-') {
        p19.innerHTML = `${inp191} - ${inp192} = ${inp191 - inp192}`;
    } else if (inp191 && inp192 && inp193 == '/') {
        p19.innerHTML = `${inp191} / ${inp192} = ${inp191 / inp192}`;
    } else if (inp191 && inp192 && inp193 == '*') {
        p19.innerHTML = `${inp191} * ${inp192} = ${inp191 * inp192}`;
    }
}


// Task 20.
document.querySelector('.button-20').onclick = () => {
    let inp201 = +document.querySelector('.input-20-1').value;
    let inp202 = +document.querySelector('.input-20-2').value;
    let inp203 = document.querySelector('.input-20-3').value;
    let p20 = document.querySelector('.p-20');
    switch (inp203) {
        case '+':
            p20.innerHTML = `${inp201} + ${inp202} = ${inp201 + inp202}`;
            break;
        case '-':
            p20.innerHTML = `${inp201} - ${inp202} = ${inp201 - inp202}`;
            break;
        case '/':
            p20.innerHTML = `${inp201} / ${inp202} = ${inp201 / inp202}`;
            break;
        case '*':
            p20.innerHTML = `${inp201} * ${inp202} = ${inp201 * inp202}`;
            break;
    }
}