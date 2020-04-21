function calculator(a, b) {
    console.log(this);

    switch (this.operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return NaN;
    }

}

//const result = calculator.call({ operation: '+' }, 7,9);
//console.log(result);


// const result = calculator.apply({ operation: '-' }, [7, 9]);
// console.log(result);


const result = calculator.bind({ operation: '*' }, 9);
console.log(result(3));


let arr = ['2', '4', '8'];

let are = arr.map(elem => elem + 2)
console.log(are);


let arrr = ['1', '2', '3'];
let aree = arrr.map(elem => +m + 2);
console.log(aree);
