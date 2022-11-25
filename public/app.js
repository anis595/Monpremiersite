const items = document.querySelectorAll("img");
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;
var nbClik = 0;

const resultat = addition(4, 5);
console.log(resultat);

function addition(nombre, nombre2) {
  return nombre + nombre2;
}

function slideSuivante() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  // console.log(count);
}

suivant.addEventListener("click", slideSuivante);

function slidePrecedente() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }
  items[count].classList.add("active");
}
precedent.addEventListener("click", slidePrecedente);

function keyPress(e) {
  nbClik++;
  console.log(nbClik);
  switch (e.keyCode) {
    case 37:
      slidePrecedente();
    case 39:
      slideSuivante();
  }
}
document.addEventListener("keydown", keyPress);

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

let popUp = document.getElementById("cookiePopup");

document.getElementById("acceptCookie").addEventListener("click", () => {
  let d = new Date();
  d.setMinutes(2 + d.getMinutes());
  document.cookie = "myCookieName=thisIsMyCookie";
  expires = "" + d + ";";
  popUp.classList.add("hide");
  popUp.classList.add("hide");
});
