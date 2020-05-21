let arr5 = [1, 2, 3, 4, 5];
let arr6 = ["a", "b", "c", "d", "e"];

let obj = Object.fromEntries(arr6.map((elem, index) => [elem, arr5[index]]));
console.log(obj);

let obj1 = Object.assign(
  ...arr6.map((elem, index) => ({ [elem]: arr5[index] }))
);

console.log(obj1);

let obj2 = arr6.reduceRight(
  (acum, elem, index) => ({ ...acum, [elem]: arr5[index] }),
  {}
);

console.log(obj2);

let obj3 = Object.assign.apply(
  {},
  arr6.map((elem, index) => ({ [elem]: arr5[index] }))
);

console.log(obj3);

let obj5 = {};

arr6.forEach((elem, index) => (obj5[elem] = arr5[index]));

console.log(obj5);

let ob = {
  ivan: 3,
  petro: 6,
};

console.log({ ...ob, tar: 4 });
