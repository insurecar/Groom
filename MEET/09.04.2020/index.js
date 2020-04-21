class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi() {
        console.log(`Hello i am ${this.firstName}`);
    }
}


const user1 = new Human('Dmytro', 'Ivanov');
const user2 = new Human('Petro', 'Jackson');



class Swimmer extends Human {
    constructor(style, firstName, lastName) {
        super(firstName, lastName);
        this.style = style;
    }

    swim() {
        console.log(`My style ${this.style}`);

    }
    toString() {
        console.log('Yo')
    }
}

const sw1 = new Swimmer('Eugen', 'Snow', 'brass');
sw1.toString();








