var _ = require("lodash");
var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("answer:", _.without(array, 2));

var h3 = document.querySelector("h3");
var h2 = document.querySelector("h2");
var h1 = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");
var rgbColor1;
var rgbColor2;

function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return [r, g, b];
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";

  rgbColor1 = hexToRGB(color1.value);
  rgbColor2 = hexToRGB(color2.value);
  if (
    rgbToHsl(rgbColor1[0], rgbColor1[1], rgbColor1[2])[2] < 0.4 ||
    rgbToHsl(rgbColor2[0], rgbColor2[1], rgbColor2[2])[2] < 0.4
  ) {
    h3.style.color = "rgba(255, 255, 255, 0.5)";
    h2.style.color = "rgba(255, 255, 255, 0.5)";
    h1.style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    h3.style.color = "rgba(0, 0, 0, 0.5)";
    h2.style.color = "rgba(0, 0, 0, 0.5)";
    h1.style.color = "rgba(0, 0, 0, 0.5)";
  }
}

function setRandomGradient(event) {
  var target = getEventTarget(event);
  color1.value = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  color2.value = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  rgbColor1 = hexToRGB(color1.value);
  rgbColor2 = hexToRGB(color2.value);

  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";
  if (rgbToHsl(rgbColor1[0], rgbColor1[1], rgbColor1[2])[2] < 0.4) {
    h3.style.color = "rgba(255, 255, 255, 0.5)";
    h2.style.color = "rgba(255, 255, 255, 0.5)";
    h1.style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    h3.style.color = "rgba(0, 0, 0, 0.5)";
    h2.style.color = "rgba(0, 0, 0, 0.5)";
    h1.style.color = "rgba(0, 0, 0, 0.5)";
  }
}

window.onload = setRandomGradient;

randomButton.onclick = setRandomGradient;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
