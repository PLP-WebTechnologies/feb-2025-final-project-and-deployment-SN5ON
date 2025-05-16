// script.js

const images = [
  "images/spice1.jpg",
  "images/spice2.jpg",
  "images/spice3.jpg"
];

let current = 0;
const imgElement = document.getElementById("slider-image");

function changeImage() {
  current = (current + 1) % images.length;
  imgElement.src = images[current];
}

setInterval(changeImage, 3000);