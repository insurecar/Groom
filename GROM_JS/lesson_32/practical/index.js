// const resolvedPromise = Promise.resolve(17);

// const resolvedPromise2 = new Promise(resolve => resolve(17));

// const rejectPromise = Promise.reject(new Error('error'));

// const rejectPromise2 = new Promise(reject => reject(17));


//Task1

// const getValueWidthDelay = (value, delay) => new Promise(resolve => {
//     setTimeout(() => {
//         console.log(value);

//         resolve(value);
//     }, delay)
// })

// const asyncNum1 = getValueWidthDelay(56, 1000);
// const asyncNum2 = getValueWidthDelay(undefined, 2000);
// const asyncNum3 = getValueWidthDelay('7', 3000);

// // getValueWidthDelay(56, 1000)
// //     .then(value => console.log(value)
// //     )

// const getSum = numbers => numbers
//     .filter(value => !isNaN(value))
//     .reduce((acc, num) => acc + +num, 0);

// const asyncSum = (...asyncNumbers) => {
//     return Promise.all(asyncNumbers)
//         .then(numbers => getSum(numbers))
//         .catch(() => Promise.reject(new Error('Can\'t calculate')));
// }

// asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
//     .then(result => console.log(result))



/////T__A__S__K__2
const getRandomNumber = (from, to) => from + Math.random() * (to - from);
const request = url => new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
        resolve({
            userData: {
                name: 'Tom',
                age: 17,
            },
            source: url,
        });
    }, randomDelay);

})

const servers = [
    'https://server.com/us',
    'https://server.com/eu',
    'https://server.com/au',
]


const getUserASAP = userId => {
    const userUrls = servers
        .map(serverUrl => `${serverUrl}/users/{${userId}}`);

    const requests = userUrls
        .map(userUrl => request(userUrl));

    return Promise.race(requests);
}

getUserASAP('user-id-1')
    .then(res => console.log(res))