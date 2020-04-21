let out = "";
let q = 3;
for (let i = 0; i < 4; i++) {
  for (let k = 0; k < 8; k++) {
    if (k < q) {
      out += "&nbsp&nbsp&nbsp";
    } else {
      out += "* ";
    }
  }
  q--;
  out += "<br>";
}
document.querySelector("#out").innerHTML = out;
