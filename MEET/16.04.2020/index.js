// console.log(Date.now());
// console.log(new Date().toISOString());

const MILLISECONDS_IN_MINUTE = 1000 * 60;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * 24;



function getDiff(dateForm, dateTo) {
    const diff = Math.abs(dateTo - dateForm);
    console.log(diff);
    const dayDiff = Math.floor(diff / MILLISECONDS_IN_DAY);
    const hoursDiff = Math.floor(diff / MILLISECONDS_IN_HOUR % 24);
    const minsDiff = Math.floor(diff / MILLISECONDS_IN_MINUTE % 60);
    return `${dayDiff} days ${hoursDiff} hours ${minsDiff} minutes`
}

const from = new Date(2010, 03, 01);
const from1 = new Date(2011, 05, 04, 45, 32);
console.log(getDiff(from, from1));




let date = new Date();

console.log(date.getDate());
console.log(date.getMinutes());

const res = date.setMinutes(5);
console.log(res);



////////////////ADD SUM NUMBER

let addSum = num => {
    return num.toString().split('')
}
console.log(addSum(1123123));


let country = {
    Ukraine: 'Kyiv',
    Poland: 'Varshava',
    Italy: 'Roma',
    Bolgary: 'Sofia',
    Romunia: 'Buharest'
}

console.log(Object.entries(country));


let arr1 = [1, 2, [3, 4], 5, [6, 7], { we: 12 }];
let arr2 = arr1.filter(elem => Array.isArray(elem))
console.log(arr2);
