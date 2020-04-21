////T__A__S__K__1
// document.querySelector('.page').style.display = 'flex'
// const buttonElem = document.querySelector('#button');

// buttonElem.addEventListener('click', () => console.log('Click'));

// let sum = 0;
// const startTime = new Date();

// console.log('Cycle strat');

// for (let i = 0; i < 5e9; i++) {
//     sum += 1;
// }

// const endTime = new Date();
// console.log(`Cycle took ${endTime - startTime}ms`);


///T__A__S__K__2
// const addImage = (imgSrc, callback) => {
//     const imgElem = document.createElement('img');
//     imgElem.setAttribute('alt', 'My Photo');
//     imgElem.src = imgSrc;

//     const containerElem = document.querySelector('.page');

//     containerElem.append(imgElem);

//     const OnImageLoaded = () => {
//         const { width, height } = imgElem;
//         console.log(width, height);

//     }
//     imgElem.addEventListener('load', OnImageLoaded);
//     const { width, height } = imgElem;

//     return { width, height };
// }

// const imgSrc = '650x.jpg';

// const { width, height } = addImage(imgSrc);

// const sizeElem = document.querySelector('.image-size');
// sizeElem.textContent = `${width} x ${height}`;

///T__A__S__K__3

// const pigner = (num, period) => {
//     let i = num;
//     console.log('Ping');
//     const interval = setInterval(() => {
//         if (--i > 0) {
//             console.log('Ping');
//         } else {
//             clearInterval
//         }


//     }, period);

//     // setTimeout(() => {
//     //     clearInterval(interval);
//     // }, num * period);


// }

// pigner(5, 1000); 



////T__A__S__K__4

const main = () => {
    console.log('Hi');
    setTimeout(function cb() {
        console.log('there');

    }, 5000);

    setTimeout(function ce() {
        console.log('Hsssss');

    }, 7000)
    console.log('JSCounfEU');


}
main();