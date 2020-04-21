const getValueWithDelay = (value, delay) =>
    new Promise(resolve =>
        setTimeout(() => {
            console.log(value);
            resolve(value);
        }, delay));

const asyncNumber1 = getValueWithDelay(77, 1000);
const asyncNumber2 = getValueWithDelay(undefined, 2000);
const asyncNumber3 = getValueWithDelay('12', 3000);

const getSum = num =>
    num.filter(elem => !isNaN(elem))
        .reduce((acc, el) => acc + +el, 0);

const asyncSum = (...asyncNumbers) =>
    Promise.all(asyncNumbers)
        .then(num => getSum(num))
        .catch(() => Promise.reject(new Error("Can't calculate")));

asyncSum(asyncNumber1, asyncNumber2, asyncNumber3)
    .then(result => console.log(result));

export { asyncSum };