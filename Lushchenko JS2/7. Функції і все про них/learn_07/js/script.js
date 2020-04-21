// function one() {
//   console.log("work");
// }
// console.log(one());
// console.log(1 + one());

// function two() {
//   console.log("work 22222");
//   return 54;
// }

let f1 = document.querySelector(".f-1");

f1.onclick = () => {
  console.log("Hello");
};

// two();

// console.log(1 + two());

let a = 8;
let b = 9;
// function multi() {
//   console.log(a * b);
//   return a * b;
// }
// let c1 = multi();
// let c2 = 10 * multi();
// console.log(c1, c2);

function multi2(x, y) {
  return x * y;
}
console.log(multi2(4, 5));
console.log(multi2(a, b));

document.querySelector(".f-2").onclick = function () {
  console.log("+++++");
};
document.querySelector(".f-2").onclick = () => {
  console.log("arrow");
  console.log("+++++");
};

(a) => {
  return 56 * a;
};

a => "Hello ++" * a;
