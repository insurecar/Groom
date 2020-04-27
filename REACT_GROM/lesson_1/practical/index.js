import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

//const rootElem = document.querySelector('#root');


// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React';
// rootElem.append(greetingElem);


//BY REACT

// const greetingElem = React.createElement(
//     'div',
//     { className: 'greeting' },
//     'Hello, React'
// );

// ReactDOM.render(greetingElem, rootElem)



///LESON__2
const rootElem = document.querySelector('#root');
// const element = React.createElement(
//     'div',
//     { className: 'greeting' },
//     [
//         React.createElement(
//             'div',
//             { className: 'greeting__title' },
//             'Hello, React'
//         ),
//         React.createElement(
//             'div',
//             { className: 'greeting__text' },
//             'i am learn REACT'
//         )
//     ]
// );
// ReactDOM.render(element, rootElem);



const element = (
    <div class="greeting">
        <div class="greeting__title">Hello, word</div>
        <div class="greeting__text">I am learn React</div>
    </div>
);

ReactDOM.render(element, rootElem);