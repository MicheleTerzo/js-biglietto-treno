var distance = parseInt(prompt("Quanti chilometri si desidera percorrere?"));
var age = parseInt(prompt("Si prega di inserire l'età:"));

document.getElementById("eta").innerHTML = (age) + (" anni");
document.getElementById("dis").innerHTML = (distance) + (" Km");

var price = (distance * 0.21); //prezzo unitario per chilometro
var minordiscount =  0.2; //sconto del 20%
var majordiscount =  0.4; //sconto del 40%


if (age < 18) { //Se il viaggiatore è minorenne
    price -= price * minordiscount;
    document.getElementById("costo").innerHTML = price.toFixed(2) + ("€");
} else if (age >= 65) { //Se il viaggiatore è over65
    price -= price * majordiscount;
    document.getElementById("costo").innerHTML = price.toFixed(2)  + ("€");
} else { //Se il viaggiatore non ha diritto a sconto
    document.getElementById("costo").innerHTML = price.toFixed(2) + ("€");
}  
  



   
