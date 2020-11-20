// const obj = {
//   name: "Rostyk",
//   age: 34,
//   job: "React developer",
// };

// const entries = [
//   ["name", "Rostyk"],
//   ["age", 34],
//   ["job", "React developer"],
// ];

// const map = new Map(entries);

// // console.log(map.get("job"));

// map.set("newField", 42).set(obj, "value of object").set(NaN, "NaN lake");

// map.delete("job");
// console.log(map.has("job"));
// console.log(map.entries());
//================

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// for (let val of map.values()) {
//   console.log(val);
// }

// map.forEach((value, key, m) => {
//   console.log(value);
// });

// const array = [...map];
// console.log(array);

//=======
// const users = [{ name: "Anna" }, { name: "Marta" }, { name: "Rostyk" }];

// const visits = new Map();

// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date().getTime() + 1000 * 60)
//   .set(users[2], new Date().getTime() + 5000 * 60);

// function lastVizit(user) {
//   return visits.get(user);
// }

// console.log(visits);

// const are = [1, 3, 5, 7, 7, 5, 3, 1];
// const seto = new Set(are);
// seto.add(32).add(20).add(32);
// console.log(seto);

// console.log(seto.entries());

// const arr = ["a", "b", "c"];
// const arr1 = [11, 22, 33];

// // const arr2 = [...arr, ...arr1];
// const arr2 = arr.concat(arr1);
// console.log(arr2);

/////////WEAKMAP

let obj = {
  name: "weakmap",
};

// const arr = [obj];

// obj = null;
// console.log(arr[0]);

const map = new WeakMap([[obj, "obj data"]]);

obj = null;

console.log(map.get(obj));
