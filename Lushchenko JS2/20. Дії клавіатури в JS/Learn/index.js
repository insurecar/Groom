document.querySelector('.i-1').onkeypress = function (event) {
    console.log(event);
    console.log('CharCode ' + event.charCode);
    console.log('code ' + event.code)

}

document.querySelector('.i-1').onkeydown = function (event) {
    console.log(event);
    console.log('CharCode ' + event.charCode);
    console.log('code ' + event.code)
    if (event.key === 'CapsLock') {
        document.querySelector('.ch-1').checked = true;
    } else {
        document.querySelector('.ch-1').checked = false;
    }
}


document.querySelector('.i-1').onkeyup = function (event) {
    console.log(event);
    console.log('CharCode ' + event.charCode);
    console.log('code ' + event.code)

}

document.querySelector('.i-2').onkeypress = function (event) {
    console.log(event);
    console.log('CharCode ' + event.charCode);
    console.log('code ' + event.code)
    const a = {
        q: 'w',
        w: 'e',
    }

    document.querySelector('.i-2').value += a[event.key]
    return false;

}