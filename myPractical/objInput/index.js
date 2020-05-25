// let arr5 = [1, 2, 3, 4, 5];
// let arr6 = ["a", "b", "c", "d", "e"];

// let obj = Object.fromEntries(arr6.map((elem, index) => [elem, arr5[index]]));
// console.log(obj);

// let obj1 = Object.assign(
//   ...arr6.map((elem, index) => ({ [elem]: arr5[index] }))
// );

// console.log(obj1);

// let obj2 = arr6.reduceRight(
//   (acum, elem, index) => ({ ...acum, [elem]: arr5[index] }),
//   {}
// );

// console.log(obj2);

// let obj3 = Object.assign.apply(
//   {},
//   arr6.map((elem, index) => ({ [elem]: arr5[index] }))
// );

// console.log(obj3);

// let obj5 = {};

// arr6.forEach((elem, index) => (obj5[elem] = arr5[index]));

// console.log(obj5);

// let ob = {
//   ivan: 3,
//   petro: 6,
// };

// console.log({ ...ob, tar: 4 });

// //palindrom

// let palindrom = (str) => {
//   return (
//     str.toString().toLowerCase().split("").reverse().join("") ===
//     str.toString().toLowerCase()
//   );
// };

// console.log(palindrom(222));

//FizzBuzz

// let fizzBuzz = (number) => {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0) {
//       console.log("FIZZ ");
//     } else if (i % 5 == 0) {
//       console.log("BUZZ");
//     } else {
//       console.log(i);
//     }
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FIZZ BUZZ ");
//     }
//   }
// };
// fizzBuzz(32);

// let findVolwes = (str) => {
//   let volwes = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   let filt = str
//     .split("")
//     .filter((elem) => (volwes.includes(elem) ? count++ : null));
//   return count;
// };

// console.log(findVolwes("aaa"));

//fibonachi

let fibo = (num) => {
  if (num < 2) {
    return num;
  }
  return fibo(num - 1) + fibo(num - 2);
};

console.log(fibo(7));
