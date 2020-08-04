  document.getElementById('currentDate').innerHTML = new Date().toDateString();

function turnTheLightOn() {
  document.getElementById('myImage').src = "https://www.w3schools.com/js/pic_bulbon.gif";
};

function turnTheLightOff() {
  document.getElementById('myImage').src = "https://www.w3schools.com/js/pic_bulboff.gif";
};

function displayAlert(msg){
  window.alert(msg)
};

/*var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};NO SE GUARDA LOCALMENTE*/