const listItems = document.querySelectorAll('.list-item');
const list = document.querySelector('.list');

function handleClick(event) {
    const isListItem = event.target.closest('.list-item');
    if (isListItem) {
        console.log(event.target.textContent);
    }
}
list.addEventListener('click', handleClick);














// const listItems = document.querySelectorAll('.list-item');
// function handleClick(event) {
//     console.log(event.target.textContent);
// }
// listItems.forEach(elem => {
//     elem.addEventListener('click', handleClick);
// });
