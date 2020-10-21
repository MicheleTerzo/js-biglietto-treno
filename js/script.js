var generaBtn = document.getElementById("generaBtn");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

generaBtn.addEventListener("click", function(){
    var name = document.getElementById("name").value;
    var km = document.getElementById("km").value;
    var age = document.getElementById("age").value;
    console.log(name, km, age);
    
    var price = km * 0.21;
    var discountValueMin = 0.2;
    var discountValueOver = 0.4; 
    var finalprice
    if (age == "Nessuna"){
        finalprice = price; 
    }else if (age == "Minorenne"){
        finalprice = price * discountValueMin;
        
    }else if (age == "Over65"){
        finalprice = price * discountValueOver;
    }

    document.getElementById("ticketName").innerHTML = name;

    document.getElementById("ticketPrice").innerHTML = finalprice.toFixed(2);

    document.getElementById("cpCode").innerHTML =  getRandomIntInclusive(90000, 99999);

    document.getElementById("trainCarriage").innerHTML = getRandomIntInclusive(1, 10);

    document.getElementById("discountType").innerHTML = age; 

    document.getElementById("displayToggle").style.visibility = "visible";
}) 

