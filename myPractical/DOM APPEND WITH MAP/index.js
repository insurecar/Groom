let arr = ['Ivan', 'Petro', 'Mykola', 'As'];
let page = document.querySelector('.page');
let addPerson = arr.forEach((elem) => page.innerHTML += `<div class = "list">${elem}</div>`);

let count = 0;
let nameList = event => {
    let ev = event.target.closest('.list');
    if (ev) {
        // console.log(ev.textContent);
        // console.log(event);
        event.target.classList.toggle('list2');
        let event1 = event.target;
        count++;
        console.log(count);
        function func(params) {
            if (count > 5) {
                event.target.style.display = 'none'
            }

        }
        func(event1)

    }

}


page.addEventListener('click', nameList);

let coun = 0;

let age = (num) => {
    return function () {
        count += num;
        return count;
    }
}

let person1 = age(2);
console.log(person1());
console.log(person1());
console.log(person1());
