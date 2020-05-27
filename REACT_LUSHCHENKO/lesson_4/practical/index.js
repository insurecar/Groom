class Header {
  constructor(h1, h2) {
    this.h1 = h1;
    this.h2 = h2;
  }

  render(x) {
    let out = "";
    out += `<h1>${this.h1}</h1>`;
    out += `<h2>${this.h2}</h2>`;
    document.querySelector(x).innerHTML = out;
  }

  static hello(a) {
    console.log("work static method " + a);
  }
}

const header = new Header("Hello", "React");
Header.hello("2");

header.render("#root");
console.log(header);

class Header2 extends Header {
  constructor(h1, h2, hero) {
    super(h1, h2);
    this._hero = hero;
  }

  get hero() {
    return this._hero;
  }

  set hero(c) {
    this._hero = c;
  }
}

const header2 = new Header2("new hello", "new site", "go gog goooo");
header2.hero = "Google";
console.log(header2.hero);
console.log(header2);
