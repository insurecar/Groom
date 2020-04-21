let keys = ['foo', 'bar', 'baz'];
let value = [11, 22, 33];

// let obj = {};
// value.forEach((elem, index)=>obj[elem] = value[index]);
// console.log(obj);


// let result = keys.reduce((acum, elem, index)=>{
//     acum[elem] = value[index];
//     return acum;
// },{})
// console.log(result);


// let result =keys.reduce((acum,elem,index)=>({...acum, [elem] : value[index]}),{})

// console.log(result);

let result = (Object.entries(Object.assign(...keys.map((elem, index) => ({ [elem]: value[index] }))))).reduceRight((acc, elem) => acc.concat(elem))


console.log(result);

let are = [[1, 2], [3, 4], [5, 6]];


let res = are.reduce((acc, elem) => acc.concat(elem));
console.log(res);
