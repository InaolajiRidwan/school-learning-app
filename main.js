var scrollImages = document.getElementById("slider-image");
var alphabetDisplay = document.getElementById("alphabet");
var images = [
  "a mage.jpeg",
  "ball3.jpeg",
  "car1.jpeg",
  "dog.png",
  "egg.jpeg",
  "fish.png",
  "gunnn.jpeg",
  "house.jpeg",
  "ink.png",
  "jugg.webp",
  "kettle2.jpg",
  "lion.jpeg",
  "mango.jpeg",
  "nail.jpeg",
  "orange.jpeg",
  "pen.jpeg",
  "queen.jpeg",
  "rain.jpeg",
  "sun.png",
  "table.png",
  "umbrella.png",
  "van.jpeg",
  "window.png",
  "xmas.jpeg",
  "yam.jpeg",
  "zebra.jpeg",
];
var alphabet = [
  "A for Apple",
  "B for Ball",
  "C for Car",
  "D for Dog ",
  "E for Egg",
  "F for Fish",
  "G for Gun",
  "H for house",
  "I for Ink",
  "J for Jug",
  "K for Kettle",
  "L for lion",
  "M for Mango",
  "N for Nail",
  "O for Orange",
  "P for Pen",
  "Q for Queen",
  "R for Rain",
  "S for Sun",
  "T for Table",
  "U for Umbrella",
  "V for Van",
  "W for Window",
  "X for Xmas",
  "Y for Yam",
  "Z for Zebra",
];



var i = 0;
var j = 0;

function setimg() {
  scrollImages.setAttribute("src", "images/" + images[i]);
  alphabetDisplay.innerHTML = alphabet[j]; 
}

function prev() {
  if (i <= 0) i = images.length;
  i--;
  if (j <= 0) j = alphabet.length;
  j--;
  setimg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  if (j >= alphabet.length - 1) j = -1;
  j++;
  setimg();
}


setimg();
