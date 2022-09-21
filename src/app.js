/* eslint-disable */
import "bootstrap";
import "./styles.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let symbol = ["♣", "♠", "♥", "♦"];
  let symbolvalue = Math.floor(Math.random() * 4);
  let up = document.querySelector("h1");
  let resultado = symbol[symbolvalue];
  let down = document.getElementById("sympidown");
  up.innerHTML = `${resultado}`;
  down.innerHTML = `${resultado}`;
  document.getElementById("sympi").innerHTML = `${symbol[symbolvalue]}`;

  let numbercard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let cardvalue = Math.floor(Math.random() * 12);
  document.getElementById("cardvalue").innerHTML = `${numbercard[cardvalue]}`;

  if (symbolvalue > 1) {
    up.style.color = "red";
    down.style.color = "red";
  }

  const buttoncardnew = document.querySelector("#newcard");

  function reload() {
    reload = location.reload();
  }

  buttoncardnew.addEventListener("click", reload, false);

  setTimeout(reload, 10000);

  window.heightWidthChange = function() {
    let alto = +document.getElementById("alto").value;

    let ancho = +document.querySelector("#ancho").value;

    document.getElementById("datos").style.width = `${ancho}px`;
    document.getElementById("datos").style.height = `${alto}px`;
  };
  window.addEventListener("resize", heightWidthChange);
};
