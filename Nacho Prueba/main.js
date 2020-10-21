window.addEventListener("load", function(){
  document.getElementById('currentDate').innerHTML = new Date().toDateString();
  showJsonNames ();
});

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

function showJsonNames() {
  var divJsonValues = document.getElementById("jsonValues");
  var json = document.getElementById("json").innerText;
  json = JSON.parse(json.substring(json.indexOf("{"),json.length-1).replaceAll("+","").replaceAll("'",""));
  var ul = document.createElement("ul");
  ul.className = "jsonValuesUl";
  json.employees.forEach(employee => {
    var li = document.createElement("li");
    li.className = "jsonValuesLi";
    li.innerText = employee.firstName + " " + employee.lastName;
    
    ul.appendChild(li);
  });

  divJsonValues.appendChild(ul);
}