// const requestUserData = userId => {
//     const request = new Promise((resolve, reject) => {
//         if (userId === 'broken') {
//             setTimeout(() => {
//                 reject(new Error('User not found'));
//             }, 500)
//         } else {
//             setTimeout(() => {
//                 resolve({
//                     name: 'John',
//                     age: 17,
//                     email: `${userId}`,
//                     userId
//                 });
//             }, 1000)
//         }

//     })

//     return request;
// }

// requestUserData('user-1')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log('finally'));

// requestUserData('broken-1')
//     .then(data => console.log(data));




//////T__A__S__K__2//////

const asyncCalculator = num => new Promise(resolve => {
    setTimeout(() => {
        console.log(`Initial value: ${num}`)
        resolve(num);
    }, 500)
})
    .then(value => {
        const pr = new Promise(resolve => {
            setTimeout(() => {
                const result = value * value;
                console.log(`Squared value : ${result}`);

                resolve(result);
            }, 500)
        })
        return pr;
    })
    .then(value => {
        const result = value * 2;
        console.log(`Double value ${result}`);
        return result;
    })

asyncCalculator(4)
    .then(value => console.log(value))