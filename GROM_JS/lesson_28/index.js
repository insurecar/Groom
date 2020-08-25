// const calc = (initValue) => {
//   let result = initValue;

//   const calculator = {
//     add(value) {
//       result += value;
//       return this;
//     },

//     mult(value) {
//       result *= value;
//       return this;
//     },

//     div(value) {
//       result /= value;
//       return this;
//     },

//     substract(value) {
//       result -= value;
//       return this;
//     },

//     result() {
//       return result;
//     },
//   };

//   return calculator;
// };

// const result = calc(3).add(2).mult(4).div(10).substract(5).result();
// console.log(result);

///РЕКУРСІЯ

// const favorites = ["id-6", "id-17"];

// const tree = {
//   id: "id-1",
//   name: "Products",
//   nodes: [
//     {
//       id: "id-2",
//       name: "Food",
//       nodes: [
//         {
//           id: "id-6",
//           name: "Drinks",
//           nodes: [],
//         },
//       ],
//     },
//     {
//       id: "id-17",
//       name: "Vehicles",
//       nodes: [],
//     },
//   ],
// };

// const markFavorites = (tree, favorites) => {
//   const isFavourite = favorites.includes(tree.id);

//   return {
//     ...tree,
//     isFavourite,
//     nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
//   };
// };

// const result = markFavorites(tree, favorites);
// console.log(result);

/////КАРИРОВАНИЯ

// const sum = (a) => (b) => a + b;

// const add3 = sum(3);

// const result = add3(5);

// console.log(result);

///КОМПОЗИЦІЯ

const add3 = (value) => value + 4;
const mult2 = (value) => value * 2;
const div4 = (value) => (value /= 4);

const compose = (...func) => (value) => {
  return func.reduce((acum, func) => func(acum), value);
};
const doEveryThing = compose(add3, mult2, div4);
console.log(doEveryThing(3));
