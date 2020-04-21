function obj1() {
    let a1 = {
        3: 'hello',
        'one': 'hi'
    };
    let p1 = document.querySelector('.p-1');

    for (let key in a1) {
        p1.innerHTML += `${key}` + ' : ' + `${a1[key]}` + '<br>';
    }
} obj1();

function obj2() {
    let a2 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };
    let p2 = document.querySelector('.p-2');
    for (let key in a2) {
        if (a2[key].length > 4) {
            p2.innerHTML += `${a2[key]}` + '<br>';
        }
    }
} obj2();

function obj3() {
    let a3 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };
    let p3 = document.querySelector('.p-3');
    for (let key in a3) {
        if (key.length > 4) {
            p3.innerHTML += key;
        }
    }
} obj3();

function obj4() {
    let a4 = {
        3: 'hello',
        'one': 4,
        'testt': 'vodoley',
        'ivan': 6
    };
    let p4 = document.querySelector('.p-4');
    for (let key in a4) {
        if (!isNaN(a4[key])) {
            p4.innerHTML += `${key}` + ' : ' + `${a4[key]}` + '<br>';
        }
    }
} obj4();

function obj5() {
    let a5 = {
        a: 7,
        z: 4,
        45: 12,
        f: 6
    };
    let p5 = document.querySelector('.p-5');
    let sum = 0;
    for (let key in a5) {
        sum += a5[key];
    }
    p5.innerHTML = 'Сума елементів масиву рівна: ' + '<b>' + sum + '</b>';
} obj5();


function obj6() {
    let a6 = {
        name: 'Rostyslav',
        age: 33,
        sex: 'male',
        height: 170
    }
    let p6 = document.querySelector('.p-6');
    for (let key in a6) {
        p6.innerHTML += `${key}` + ' : ' + `${a6[key]}` + '<br>';
    }
} obj6();


function obj7_10() {
    // - - - - - T A S K 7 - - - - -
    let a7 = {};
    let p10 = document.querySelector('.p-10');
    let inKey = document.querySelector('.u7-key__input');
    let inValue = document.querySelector('.u7-value__input');
    document.querySelector('.u7__button').onclick = function () {

        if (inKey.value.trim() != '' && inValue.value.trim() != '') {
            a7[inKey.value] = inValue.value;
            p10.innerHTML += `${inKey.value}` + ' : ' + `${inValue.value} ` + '<br>';
        }
    }

    // - - - - - T A S K 8 - - - - -
    document.querySelector('.u8__button').onclick = () => {
        p10.innerHTML = '';
        let inpDelete = document.querySelector('.u8-key__input').value;
        delete a7[inpDelete];
        for (let key in a7) {
            p10.innerHTML += `${key}` + ' : ' + `${a7[key]}` + '<br>';
        }
    }

    // - - - - - T A S K 9 - - - - -
    document.querySelector('.u9__button').onclick = function () {
        let inpDeleteValue = document.querySelector('.u9-delete-value__input');
        p10.innerHTML = ''
        for (let key in a7) {
            if (inpDeleteValue.value == a7[key]) {
                delete a7[key];
            }
        }
        for (let key in a7) {
            p10.innerHTML += `${key}` + ' : ' + `${a7[key]}` + '<br>';
        }
    }

    // - - - - - T A S K 10 - - - - -
    document.querySelector('.u10__button').onclick = () => {
        let inpKeySearch = document.querySelector('.u10-has-key__input').value;
        if (inpKeySearch.trim() != '') {
            console.log(inpKeySearch == inKey.value);
        }
    }

} obj7_10();

function metro() {
    let a11 = {
        red: ['Академмістечко', 'Житомирська', 'Святошино', 'Нивки', 'Берестейська', 'Шулявка', 'Політехнічний інститут', 'Вокзальна', 'Університет', 'Тетральна', 'Хрещатик', 'Арсенальна', 'Дніпро', 'Гідропарк', 'Лівобережна', 'Дарниця', 'Чернігівська', 'Лісова'],
        green: ['Сирець', 'Дорогожичі', 'Лукянівська', 'Золоті Воротф', 'Палац спорту', 'Кловська', 'Печерська', 'Дружби народів', 'Видубичі', 'Славутич', 'Осокорки', 'позняки', 'Харківська', 'Вирлиця', 'Бориспільська', 'Червоний Хутір'],
        blue: ['Героїв Дніпра', 'Мінська', 'Оболонь', 'Петрівка', 'Тараса Шевченка', 'Контрактова площа', 'Поштова площа', 'Майдан Незалежності', 'Площа Льва Толстого', 'Оліймпійська', 'Палац "Україна"', 'Либідська', 'Деміївська', 'Голосіївська', 'Васильківська', 'Виставковий центр', 'Іподром', 'Термки',]
    }
    let p11 = document.querySelector('.p-11');

    for (let key in a11) {
        p11.innerHTML += `${key} :<br>  ${a11[key]} <br><br>`
    }

    // - - - - - T A S K 12 - - - - -
    function obj12() {
        document.querySelector('.button-12').onclick = () => {
            let mySelect = document.querySelector('.u12-branch');
            let p12 = document.querySelector('.p-12');
            let option1 = mySelect.options[mySelect.selectedIndex];
            for (let key in a11) {
                if (option1.value == key) {
                    p12.innerHTML = `${option1.innerHTML} : ${a11[key]}`
                }
            }
        }
    } obj12();

    // - - - - - T A S K 13 - - - - -
    function obj13() {
        document.querySelector('.u13-reverse').onclick = () => {
            let mySelect = document.querySelector('.u12-branch');
            let p13 = document.querySelector('.p-13');
            let option1 = mySelect.options[mySelect.selectedIndex];
            for (let key in a11) {
                if (option1.value == key) {
                    p13.innerHTML = `${option1.innerHTML} : ${a11[key].reverse()}`
                }
            }
        }
    } obj13();

    // - - - - - T A S K 14 - - - - -
    function obj14() {
        let allSation = document.querySelector('#select-14');
        let option1 = '';
        let p14 = document.querySelector('.p14');
        for (let key in a11) {
            for (let i = 0; i < a11[key].length; i++) {
                option1 = document.createElement('option');
                allSation.appendChild(option1);
                option1.innerHTML += a11[key][i];
            }
        }
        document.querySelector('.u14').onclick = () => {
            for (let key in a11) {
                for (let i = 0; i < a11[key].length; i++) {
                    if (a11[key][i] == allSation.value) {
                        p14.innerHTML = `Станція <span>${allSation.value}</span> знаходиться на гілці <span>${key}</span>`;
                    }
                }
            }
        }
    } obj14();
} metro();