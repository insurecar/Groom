let div = document.querySelector(".root1");
//div.style.width = "200px";

let size = (domElem) => {
  const { clientWidth, clientHeight, style } = domElem;

  //style.backgroundColor = "red";
  style.width = "300px";
  console.log(style);
};

size(div);
