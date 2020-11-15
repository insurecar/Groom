const obj = {
  name: "Rostyk",
  age: 34,
  job: "React developer",
};

const entries = [
  ["name", "Rostyk"],
  ["age", 34],
  ["job", "React developer"],
];

const map = new Map(entries);

console.log(map.get("job"));
