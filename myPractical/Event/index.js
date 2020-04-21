let arr = document.querySelectorAll('.page');
function handleText() {
    console.log(event.target.style.dataset);

}


arr.forEach(elem => elem.addEventListener('click', handleText));