let lamp = document.getElementById("lampada");
let turnOn = document.getElementById("on");
let turnOff = document.getElementById("off");

function lampIsBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}
function lampOn() {
  if (!lampIsBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!lampIsBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function lampBroken() {
  if (!lampIsBroken()) {
    lamp.src = "./img/quebrada.jpg";
  }
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
