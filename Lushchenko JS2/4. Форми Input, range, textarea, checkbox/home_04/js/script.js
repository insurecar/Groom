// Task 1.
document.querySelector(".button-1").onclick = () => {
  alert(document.querySelector(".button-1").innerHTML);
};

// Task 2.
document.querySelector('input[type ="button"].input-2').onclick = () => {
  alert(document.querySelector('input[type ="button"].input-2').value);
};

// Task 3.
document.querySelector(".p-3").onclick = function() {
  alert(document.querySelector(".p-3").innerHTML);
};

// Task 4.
document.querySelector(".button-4").onclick = () => {
  let checkBox = document.querySelector('input[type = "checkbox"].input-4');
  if (checkBox.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// Task 5.
document.querySelector(".button-5").onclick = () => {
  let checkBox = document.querySelector('input[type = "checkbox"].input-5');
  if (checkBox.checked) {
    console.log(checkBox.value);
  } else {
    console.log(false);
  }
};

// Task 6.
document.querySelector(".button-6").onclick = () => {
  alert(document.querySelector('input[type="hidden"].input-6').value);
};

// Task 7.
document.querySelector(".button-7").onclick = () => {
  alert(document.querySelector(".input-7").value);
};

// Task 8.
document.querySelector(".button-8").onclick = () => {
  let div8 = document.querySelector(".div-8");
  div8.innerHTML = '<input type = "text"><button>Task8-1</button>';
};

// Task 9.
document.querySelector(".button-9").onclick = () => {
  let inp9 = document.querySelector(".input-9");
  if (inp9.checked) {
    alert(inp9.value);
  } else {
    alert(false);
  }
};

// Task 10.
document.querySelector(".button-10").onclick = () => {
  let inp10 = document.querySelector(".input-10").value;
  let div10 = document.querySelector(".div-10");
  div10.style.background = inp10;
};

// Task 11.
document.querySelector(".button-11").onclick = () => {
  let inp111 = document.querySelector(".input-11-1");
  let inp112 = document.querySelector(".input-11-2"); 
  inp112.value = inp111.value;
};

// Task 12.
document.querySelector(".button-12").onclick = () => {
  let inp12 = document.querySelector(".input-12").value;
  let p12 = document.querySelector(".p-12");
  p12.innerHTML = inp12;
};

// Task 13.
let inp13 = document.querySelector(".input-13");
let p13 = document.querySelector(".p-13");
document.querySelector(".button-13").onclick = () => {
  p13.innerHTML = inp13.value;
  p13.style.color = "red";
};
document.querySelector(".input-13").oninput = () => {
  p13.innerHTML = inp13.value;
};

// Task 14.
document.querySelector(".button-14").onclick = () => {
  let textArea14 = document.querySelector("#text-area-14");
  let p14 = document.querySelector(".p-14");
  p14.innerHTML = textArea14.value;
};

// Task 15.
document.querySelector(".button-15").onclick = () => {
  let textArea15 = document.querySelector("#text-area-15");
  let inp15 = document.querySelector(".input-15");
  textArea15.innerHTML = inp15.value;
};

// Task 16.
document.querySelector(".button-16").onclick = () => {
  let select = document.querySelector("#auto").value;
  console.log(select);
};

// Task 18.
function car(chooseCar) {
  alert(chooseCar);
}

// Task 19.
document.querySelector(".button-19").onclick = event => {
  event.preventDefault();
  let inp191 = document.querySelector(".input-19-1").value;
  let inp192 = document.querySelector(".input-19-2").value;
  console.log(inp191);
  console.log(inp192);
};

// Task 20.
document.querySelector(".button-20").onclick = function(event) {
  event.preventDefault();
  let form = document.forms.my;
  let log = form.elements.login.value;
  let pass = document.forms.my[1].value;
  console.log(log);
  console.log(pass);
};
