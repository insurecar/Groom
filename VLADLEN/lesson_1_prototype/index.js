// const person = {
//     name: 'Rostyk',
//     age: 33,
//     greet() {
//         console.log('Greet');

//     }
// }


const person = new Object({
    name: 'Rostyk',
    age: 33,
    greet() {
        console.log('Greet!');

    }
});
const person2 = new Object({
    name: 'Marta',
    age: 33,
    swim() {
        console.log('Swiim');

    }
})

Object.prototype.sayHello = function () {
    console.log('Hello');
}
person.sayHello();
person2.sayHello();

const lena = Object.create(person);
lena.name = 'Elena';
console.log(lena)


const str = new String('I am string');
console.log(str);
str.sayHello();