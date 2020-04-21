const BUTTON = document.querySelector('button');
const INPUT = document.querySelector('.age');

BUTTON.onclick = () => {
    let num = +INPUT.value;
    if (num >= 16 && num < 60) {
        console.log('Welcome');
    } else if (num >= 60) {
        console.log('Ha-ha-ha');
    } else {
        console.log('You must not');
    }
    switch (num) {
        case 15:
            console.log('Ще рік потерпи');
            break;
        case 16:
            console.log('Заходь');
            break;
        default:
            console.log('Ooook')
    }
}

let b = 5;

console.log(b < 7);