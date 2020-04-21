const asyncCalculator = numbr =>
    new Promise(resolve => {
        setTimeout(() => {
            console.log(`Initial value: ${numbr}`);
            resolve(numbr);
        }, 500)
    })
        .then(num => new Promise(resolve => {
            setTimeout(() => {
                const result = Math.pow(num, 2);
                console.log(`Squared value: ${result}`);
                resolve(result);
            }, 500);
        }))
        .then(num => {
            const result = num * 2;
            console.log(`Doubled value: ${result}`);
            return result;
        });

asyncCalculator(4);
export { asyncCalculator };