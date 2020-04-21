window.onload = function () {

    if (localStorage.getItem('bgcolor') !== null) {
        let color = localStorage.getItem('bgcolor');

        document.querySelector('body').style.background = color;
    }



    document.getElementById('red').onclick = function () {
        console.log(1);
        document.querySelector('body').style.background = 'red';
        localStorage.setItem('bgcolor', 'red');
    }

    document.getElementById('green').onclick = function () {
        console.log(2);
        document.querySelector('body').style.background = 'green';
        localStorage.setItem('bgcolor', 'green');
    }

    function changeBg(event) {
        let id = event.target.getAttribute('id');
        let body = document.querySelector('body');
        console.log(event.target);
        id == 'red' ?
            body.style.backgroundColor = 'red' :
            body.style.background = 'green';


    }


    //     document.querySelectorAll('button').forEach(elem => elem.addEventListener('click', changeBg));
}