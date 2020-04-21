// let user = {
//     name: 'Tom',
//     age: 26,
//     display() {
//         return this.name;
//     },

//     move(place) {
//         console.log(this.display() + ' goes to ' + place)
//     }
// }

// user.move('the shop');


// //Вложені обєкти
// let country = {

//     name: "Германия",
//     language: "немецкий",
//     capital: {

//         name: "Берлин",
//         population: 3375000,
//         year: 1237
//     }
// };



//обєкт в масиві
let country2 = {
    languages: ['Німецький', 'Французський', 'Італійський',],
    capital: {
        name: 'Берн',
        population: 126598
    },
    cities: [
        { name: 'Цюріх', population: 378884 },
        { name: 'Женева', population: 188634 },
        { name: 'Базель', population: 164937 }
    ]
}
for (let key in country2.capital) {
    console.log(key); // перебрав ключі в capital
}
for (let i = 0; i < country2.languages.length; i++) {
    console.log(country2.languages[i]); //перебрав всі мови
}

for (let key in country2.cities) {
    console.log(country2.cities[key]); // перебрав обєкти в середині cities
}

for (let i = 0; i < country2.cities.length; i++) {
    console.log(country2.cities[i].population);
}