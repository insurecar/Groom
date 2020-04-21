
//task1
function funcObj1() {
    const a1 = {
        3: 'hello',
        'one': 'hi'
    };

    let out = '';
    for (let key in a1) {
        out += key + ' : ' + ' "' + a1[key] + '"' + '<br>';
    }
    document.querySelector('.p-1').innerHTML = out;
} funcObj1();


//task2
function funcObj2() {
    const a2 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };

    let out = '';
    for (let key in a2) {
        if (key.length > 4 && a2[key].length > 4) {
            out += key + ' : ' + ' "' + a2[key] + '"' + '<br>';
        }
    }
    document.querySelector('.p-2').innerHTML = out;
} funcObj2();


//task3
function funcObj3() {
    let a3 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };
    let out = '';
    for (let key in a3) {
        if (key.length > 4) {
            out += key + ' : " ' + a3[key] + '" ' + '<br>';
        }
    }
    document.querySelector('.p-3').innerHTML = out;
} funcObj3();


//task4
function funcObj4() {
    let a4 = {
        3: 'hello',
        'one': 4,
        'testt': 'vodoley',
        'ivan': 6
    };
    let out = '';
    for (let key in a4) {
        if (!isNaN(a4[key])) {
            out += key + ' : " ' + a4[key] + '" ' + '<br>';
        }
    }
    document.querySelector('.p-4').innerHTML = out;
} funcObj4();


//task5
function funcObj5() {
    let a5 = {
        a: 7,
        z: 4,
        45: 12,
        f: 6
    };
    let out = 0;
    for (let key in a5) {
        out += a5[key];
    }
    document.querySelector('.p-5').innerHTML += `Сума значень обєкта складає: ${out}`;
} funcObj5();


//task6
function funcObj6() {
    let a6 = {
        name: 'Batman',
        age: 40,
        sex: 'male',
        heigt: 2
    }

    let out = '';
    for (let key in a6) {
        out += key + ' : " ' + a6[key] + '" ' + '<br>';
    }
    document.querySelector('.p-6').innerHTML = out;
} funcObj6();


//task7
function funcObj7() {
    let a7 = {};
    let inpKey = document.querySelector('.u7-key__input');
    let inpValue = document.querySelector('.u7-value__input');
    document.querySelector('button.u7__button').onclick = function () {
        a7[inpKey.value] = inpValue.value;
        let out = '';
        for (inpKey.value in a7) {
            out += inpKey.value + ' : "' + a7[inpKey.value] + '"' + '<br>';
        }
        document.querySelector('.p-7').innerHTML = out;
    }
    //task8
    document.querySelector('.u8__button').onclick = function () {
        let inpKeyDelete = document.querySelector('.u8-key__input');
        let out = '';
        delete a7[inpKeyDelete.value];
        for (inpKey.value in a7) {
            out += inpKey.value + ' : "' + a7[inpKey.value] + '"' + '<br>';
        }
        document.querySelector('.p-7').innerHTML = out;
    }
    //task9
    document.querySelector('.u9__button').onclick = function () {
        let inpValueDelete = document.querySelector('.u9-delete-value__input');
        let out = '';

        for (inpKey.value in a7) {
            if (inpValueDelete.value == a7[inpKey.value]) {
                delete a7[inpKey.value];
            }
            out += inpKey.value + ' : "' + a7[inpKey.value] + '"' + '<br>';
        }
        document.querySelector('.p-7').innerHTML = out;
    }
    //task10
    document.querySelector('.u10__button').onclick = function () {
        let p10 = document.querySelector('.p-10');
        let inp10 = document.querySelector('.u10-has-key__input');
        for (inpKey.value in a7) {
            if (inp10.value == a7[inpKey.value]) {
                p10.innerHTML = true;
                return true;
            } else {
                p10.innerHTML = false;
                return false;
            }
        }
    }
} funcObj7();

//task11
function metro() {
    let a11 = {
        red: ['Академмістечко', 'Житомирська', 'Святошино', 'Нивки', 'Берестейська', 'Шулявка', 'Політехнічний інститут', 'Вокзальна', 'Університет', 'Тетральна', 'Хрещатик', 'Арсенальна', 'Дніпро', 'Гідропарк', 'Лівобережна', 'Дарниця', 'Чернігівська', 'Лісова'],
        green: ['Сирець', 'Дорогожичі', 'Лукянівська', 'Золоті Воротф', 'Палац спорту', 'Кловська', 'Печерська', 'Дружби народів', 'Видубичі', 'Славутич', 'Осокорки', 'позняки', 'Харківська', 'Вирлиця', 'Бориспільська', 'Червоний Хутір'],
        blue: ['Героїв Дніпра', 'Мінська', 'Оболонь', 'Петрівка', 'Тараса Шевченка', 'Контрактова площа', 'Поштова площа', 'Майдан Незалежності', 'Площа Льва Толстого', 'Оліймпійська', 'Палац "Україна"', 'Либідська', 'Деміївська', 'Голосіївська', 'Васильківська', 'Виставковий центр', 'Іподром', 'Термки',]
    }
    let p11 = document.querySelector('.p-11');
    let out = '';

    for (let key in a11) {
        out += `${key}:<br>  ${a11[key]} <br><br>`;
    }
    p11.innerHTML = out;
    //task12
    document.querySelector('.button-12').onclick = function () {
        let select = document.querySelector('#select-color');
        let options1 = select.options[select.selectedIndex].value;
        console.log(options1)
        out = '';
        for (let key in a11) {
            if (options1 == key) {
                out += `${key}:<br>  ${a11[key]} <br><br>`;
                // if (options == 'red') {
                //     p11.style.color = 'red';
                // } else if (options == 'green') {
                //     p11.style.color = 'lime';
                // } else if (options == 'blue') {
                //     p11.style.color = 'blue';
                // }
            }
        }
        p11.innerHTML = out;
    }
    out = '';
    //task13
    document.querySelector('.u13-reverse').onclick = function () {
        for (let key in a11) {
            a11[key].reverse();
            out += `${key}:<br>  ${a11[key]} <br><br>`;
        }
        p11.innerHTML = out;
    }


    //task14
    function findBranch() {
        let select = document.querySelector('#select-14');
        let p14 = document.querySelector('.p14');
        let option = '';
        for (let key in a11) {
            for (let i = 0; i < a11[key].length; i++) {
                option = document.createElement('option');
                select.appendChild(option);
                option.innerHTML += a11[key][i];
            }
        }
        document.querySelector('.u14').onclick = function () {
            let select1 = select.value;
            console.log(select1);
            for (let key in a11) {
                for (let i = 0; i < a11[key].length; i++) {
                    if (a11[key][i] == select1) {
                        p14.innerHTML = `Станція <span>${select1}</span> знаходиться на гілці <span>${key}</span>`;
                    }
                }
            }
        }
    } findBranch();



    //task15
    function findStation() {
        let select1 = document.querySelector('#select-15-1');
        let select2 = document.querySelector('#select-15-2');
        let btn = document.querySelector('.button-15');
        let p15 = document.querySelector('.p-15');
        let option1 = '';
        let option2 = '';
        for (let key in a11) {
            for (let i = 0; i < a11[key].length; i++) {
                option1 = document.createElement('option');
                select1.appendChild(option1);
                option1.innerHTML += a11[key][i];
                option2 = document.createElement('option');
                select2.appendChild(option2);
                option2.innerHTML += a11[key][i];
            }
        }

        btn.onclick = function () {
            let select11 = select1.value;
            let select22 = select2.value;
            // console.log(select11);
            // console.log(select22);
            for (let key in a11) {
                console.log(key)
            }
        }
    } findStation();
} metro();


