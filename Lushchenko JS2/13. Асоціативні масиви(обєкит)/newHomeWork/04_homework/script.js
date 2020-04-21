// task 1 --------------------
function task1() {
    let a1 = {
        3: 'hello',
        'one': 'hi'
    };

    let out = '';

    for (let key in a1) {
        out += `${key} : ${a1[key]} <br>`;
    }
    document.querySelector('.p-1').innerHTML = out;
} task1();


// task 2 --------------------
function task2() {
    let a2 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };

    let out = '';

    for (let key in a2) {
        if (a2[key].length > 4) {
            out += `${key} : ${a2[key]} <br>`;
        }
    }
    document.querySelector('.p-2').innerHTML = out;
} task2();


// task 3 --------------------
function task3() {
    let a3 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };
    let out = '';

    for (let key in a3) {
        if (key.length > 4) {
            out += `${key} : ${a3[key]} <br>`;
        }
    }
    document.querySelector('.p-3').innerHTML = out;
} task3();


// task 4 --------------------
function task4() {
    let a4 = {
        3: 'hello',
        'one': 4,
        'testt': 'vodoley',
        'ivan': 6
    };

    let out = ''
    for (let key in a4) {
        if (!isNaN(a4[key])) {
            out += `${key} : ${a4[key]} <br>`;
        }
    }
    document.querySelector('.p-4').innerHTML = out;
} task4();


// task 5 --------------------
function task5() {
    let a5 = {
        a: 7,
        z: 4,
        45: 12,
        f: 6
    };

    let out = 0;
    for (let key in a5) {
        if (!isNaN(a5[key])) {
            out += a5[key];
        }
    }
    document.querySelector('.p-5').innerHTML = `Сума значень масиву складає: ${out}`;
} task5();


// task 6 --------------------
let person = () => {
    let a6 = {
        name: 'Rostyslav',
        age: 33,
        sex: 'male',
        height: 170,
    }
    let out = '';
    for (let key in a6) {
        out += `${key} : ${a6[key]} <br>`;
    }
    document.querySelector('.p-6').innerHTML = out;
}
person();


// task 7, 8, 9, 10 --------------------
function task7_8_9_10() {
    let a7 = {};
    let inp71 = document.querySelector('.u7-key__input');
    let inp72 = document.querySelector('.u7-value__input');
    let btnAdd = document.querySelector('.u7__button');
    let pAll = document.querySelector('.p-7');


    let keyOfObj = document.querySelector('.u8-key__input');
    let btnDeleteByKey = document.querySelector('.u8__button');

    let valueOfObj = document.querySelector('.u9-delete-value__input');
    let btnDeleteByValue = document.querySelector('.u9__button');

    let findValueOfObj = document.querySelector('.u10-has-key__input');
    let btnFindByValue = document.querySelector('.u10__button');




    let out = '';

    let paintInPage = () => {
        for (let key in a7) {
            out += `${key} : ${a7[key]} <br>`;
        }
        pAll.innerHTML = out;
        out = '';
        inp71.value = '';
        inp72.value = '';
    }
    //TASK 7
    let task7AddKeyAndValue = () => {
        a7[inp71.value] = inp72.value;
        paintInPage();
    }

    //TASk 8
    let task8DeleteByKey = () => {
        delete a7[keyOfObj.value];
        paintInPage();
    }

    //TASK9
    let task9DeleteByValue = () => {
        for (let key in a7) {
            if (a7[key] === valueOfObj.value) {
                delete a7[key];
            }
        }
        paintInPage();
    }

    //TASK10

    let task10FindElemByKey = () =>
        console.log(a7.hasOwnProperty(findValueOfObj.value) ? true : false);


    btnAdd.addEventListener('click', task7AddKeyAndValue);
    btnDeleteByKey.addEventListener('click', task8DeleteByKey);
    btnDeleteByValue.addEventListener('click', task9DeleteByValue);
    btnFindByValue.addEventListener('click', task10FindElemByKey);

} task7_8_9_10();


///
let task11_20 = () => {
    let a11 = {
        red: ['Академмістечко', 'Житомирська', 'Святошино', 'Нивки', 'Берестейська', 'Шулявка', 'Політехнічний інститут', 'Вокзальна', 'Університет', 'Тетральна', 'Хрещатик', 'Арсенальна', 'Дніпро', 'Гідропарк', 'Лівобережна', 'Дарниця', 'Чернігівська', 'Лісова'],
        green: ['Сирець', 'Дорогожичі', 'Лукянівська', 'Золоті Воротф', 'Палац спорту', 'Кловська', 'Печерська', 'Дружби народів', 'Видубичі', 'Славутич', 'Осокорки', 'позняки', 'Харківська', 'Вирлиця', 'Бориспільська', 'Червоний Хутір'],
        blue: ['Героїв Дніпра', 'Мінська', 'Оболонь', 'Петрівка', 'Тараса Шевченка', 'Контрактова площа', 'Поштова площа', 'Майдан Незалежності', 'Площа Льва Толстого', 'Оліймпійська', 'Палац "Україна"', 'Либідська', 'Деміївська', 'Голосіївська', 'Васильківська', 'Виставковий центр', 'Іподром', 'Термки',]

    };

    let p11 = document.querySelector('.p-11');

    let btnTask12 = document.querySelector('.button-12');
    let selectTask12 = document.querySelector('#select-color');
    let pTask12 = document.querySelector('.p-12');

    let btnTask13 = document.querySelector('.u13-reverse');

    let selectTask14 = document.querySelector('#select-14');
    let btnTask14 = document.querySelector('.button-14');
    let pTask14 = document.querySelector('.p-14');

    let selectTask15Branch = document.querySelector('#select-15-0');
    let selectTask15FirstStation = document.querySelector('#select-15-1');

    let selectTask15SecondStation = document.querySelector('#select-15-2');
    let btnTask15 = document.querySelector('.button-15');

    //TASK  11
    let task11 = () => {

        let out = ''
        for (let key in a11) {
            out += `<b>${key}</b>: ${a11[key]} <br><br>`
        }
        p11.innerHTML = out;
    }


    //TASK 12
    let task12 = () => {
        let out = ''
        for (let key in a11) {
            if (key === selectTask12.value) {
                out += `<b>${key}</b>: ${a11[key]} <br><br>`
            }
        }
        pTask12.innerHTML = out;
    }


    //TASK 13
    let task13 = () => {
        let out = '';
        for (let key in a11) {
            if (key === selectTask12.value) {
                out += `<b>${key}</b>: ${a11[key].reverse()} <br><br>`
            }
        }
        pTask12.innerHTML = out;
    }


    //TASK 14
    let task14 = () => {
        for (let key in a11) {
            a11[key].map(elem => {
                let option = document.createElement('option');
                option.innerHTML = elem;
                selectTask14.append(option);
            });

        }
        let findBranch = () => {
            let out = '';
            for (let key in a11) {
                for (let i = 0; i < a11[key].length; i++) {
                    if (selectTask14.value === a11[key][i]) {
                        out = key;
                    }
                }
            }
            pTask14.innerHTML = `Ваша станція знаходиться на гілці: <b>${out}<b>`;
        }
        findBranch();
    }
    task14();

    let task15 = () => {
        for (let key in a11) {
            let option = document.createElement('option');
            option.innerHTML = key;
            selectTask15Branch.append(option);
        }
        let addStation = () => {
            selectTask15FirstStation.innerText = '';
            selectTask15SecondStation.innerHTML = '';
            for (let key in a11) {
                for (let i = 0; i < a11[key].length; i++) {
                    if (selectTask15Branch.value === key) {
                        let option1 = document.createElement('option');
                        option1.innerHTML = a11[key][i];
                        selectTask15FirstStation.append(option1);
                        let option2 = document.createElement('option');
                        option2.innerHTML = a11[key][i];
                        selectTask15SecondStation.append(option2);
                    }
                }
            }
        }
        let countStationBetweenStop = () => {
            let select1 = selectTask15FirstStation.value;
            let select2 = selectTask15SecondStation.value;
            let arr1 = [];
            for (let key in a11) {
                for (let i = 0; i < a11[key].length; i++) {
                    if (select2 == a11[key][i] || select1 == a11[key][i]) {
                        arr1.push(i);
                    }
                }
            }
            document.querySelector('.p-15').innerHTML = `Відстань між станціями ${select1} і ${select2} складає  ${Math.abs(arr1[1] - arr1[0]) - 1} станцій`;

        }

        selectTask15Branch.addEventListener('change', addStation);
        btnTask15.addEventListener('click', countStationBetweenStop);
    }
    task15();
    task11();
    btnTask12.addEventListener('click', task12);
    btnTask13.addEventListener('click', task13);
    //btnTask14.addEventListener('change', task14);


}
task11_20();

