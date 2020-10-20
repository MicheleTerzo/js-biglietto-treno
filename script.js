var distance = parseInt(prompt("Quanti chilometri si desidera percorrere?"));
var age = parseInt(prompt("Si prega di inserire l'età:"));

document.getElementById("dis").innerHTML = (distance) + (" Km");
document.getElementById("eta").innerHTML = (age) + (" anni");

var price = (distance * 0.21);
var minordiscount = price * 0.2;
var majordiscount = price * 0.4;

if (age <= 18) {
    document.getElementById("costo").innerHTML = (price - minordiscount) + ("€");
} else if (age >= 65) {
    document.getElementById("costo").innerHTML = (price - majordiscount) + ("€");
} else {
    document.getElementById("costo").innerHTML = (price) + ("€");
}  
  



   
