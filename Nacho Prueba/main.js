  document.getElementById('currentDate').innerHTML = new Date().toDateString();

function turnTheLightOn() {
  document.getElementById('myImage').innerHTML.src = "https://www.w3schools.com/js/pic_bulbon.gif";
};

function turnTheLightOff() {
  document.getElementById('myImage').innerHTML.src = "https://www.w3schools.com/js/pic_bulboff.gif";
};
