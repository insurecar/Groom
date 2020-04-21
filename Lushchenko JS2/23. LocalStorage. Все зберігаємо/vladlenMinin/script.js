const myNumber = 42;
localStorage.setItem('number', myNumber.toString());

console.log(localStorage.getItem('number'));


localStorage.removeItem('number');

localStorage.clear();


const object = {
    name: 'Max',
    age: 20,
}

localStorage.setItem('person', JSON.stringify(object));

let person = JSON.parse(localStorage.getItem('person'));
person.name = 'Rostyk';
console.log(person);


///=============///
window.addEventListener('storage', event => {
    console.log(event);

})
