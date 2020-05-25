// 1
// Создайте класс Man, класс должен описывать человека и содержать свойства name, age, passport, sex. Создайте на его основе объект man. Выведите объект в консоль.

// 3
// Добавьте в класс Man метод render, который будет выводить все поля объекта созданного на основе класса Man (параграфами).

class Man {
  constructor(name, age, passport, sex) {
    this.name = name;
    this.age = age;
    this.passport = passport;
    this.sex = sex;
  }
  render(x) {
    let out = "";
    out += `<p>${this.name}</p>`;
    out += `<p>${this.age}</p>`;
    out += `<p>${this.passport}</p>`;
    out += `<p>${this.sex}</p>`;
    document.querySelector(x).innerHTML = out;
  }
}

const human = new Man("Rostyslav", 33, "multi Passport", "male");
console.log(human);

human.render("#root");

// 4
// Примените метод render к man и выведите его содержимое в .out-1.

const man = new Man("Tom", 22, "passport", "male");
man.render(".out-1");

// 2
// Создайте класс Employer, который будет наследоваться от Man. Класс должен содержать поля create - дату начала работы, salary. Создайте объект employer на основе Employer. Заполните поля, выведите в консоль.

// 6
// Поскольку у Employer метод render не выводит все новые поля, то их желательно добавить. Вначале сделаем в лоб - просто создайте метод render еще раз в Employer (скопируйте его из Man) и добавьте в "лоб" новые поля. Убедитесь что метод работает.

class Employer extends Man {
  constructor(name, age, passport, sex, create, slalary) {
    super(name, age, passport, sex);
    this.create = create;
    this.slalary = slalary;
  }
  render(x) {
    let out = "";
    out += `<p>${this.name}</p>`;
    out += `<p>${this.age}</p>`;
    out += `<p>${this.passport}</p>`;
    out += `<p>${this.sex}</p>`;
    document.querySelector(x).innerHTML = out;
  }
}

const employer = new Employer(
  "Bob",
  17,
  "Passport",
  "male",
  "25.05.2020",
  "300$"
);
console.log(employer);

// 5
// Примените метод render к employer и выведите его содержимое в .out-2. Как видите поля create, salary не выводятся.
let out_2 = document.querySelector(".out-2");
employer.render(".out-2");
