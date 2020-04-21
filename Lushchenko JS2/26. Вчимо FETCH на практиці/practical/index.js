// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState = 4 && this.status == 200) {
//         callbackFunction(this.responseText);
//     }
// }
// xhttp.open('GET', "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true)


// function callbackFunction(data) {
//     console.log(data);

// }

// fetch('http://getpost.itgid.info/index2.php').then();


let a = [1, 2, 3];
let b = ['a', 'b', 'c'];
let obj = {};
let result = Object.fromEntries(b.map((elem, index) => ([elem, a[index]])));
console.log(result);
