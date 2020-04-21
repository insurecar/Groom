const person = Object.create({
    calculateAge() {
        console.log('Age: ', new Date().getFullYear() - this.birthYear);

    }
},
    {
        name: {
            value: 'Rostyk',
            enumerable: true, // за допомогою цього можна достукатись в цикіл
            writable: true, // за допомогою цього можна міняти значення
            configurable: true, // можна видаляти ключ
        },
        birthYear: {
            value: 1986,
            enumerable: false,
            writable: false,
            configurable: false,
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'red';
                console.log('Set age', value);

            }
        }
    })
console.log(person.age);
//console.log(person.age = 100)
person.calculateAge();
// person.name = 'Maxim';
// delete person.name

// console.log(person);

for (let key in person) {
    if (person.hasOwnProperty(key))
        console.log(key, person[key]);

}