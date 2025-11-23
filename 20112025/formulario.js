function evaluarFormulario() {
    nombre = document.getElementById("name").value;
    genero = document.getElementById("genero").value;
    genero = genero.toLowerCase();
    edad = parseInt(document.getElementById("age").value);

    
    if (genero === "masculino") {
        alert("Bienvenido señor");
        document.getElementById("result").innerText = "Bienvenido señor " + nombre;
    } else if (genero === "femenino") {
        alert("Bienvenida señora");
        document.getElementById("result").innerText = "Bienvenida señora " + nombre;
    } else {
        alert("Bienvenide");
        document.getElementById("result").innerText = "Bienvenide " + nombre;
    }

    if (edad < 12) {
        alertCurrent = document.getElementById("result").value;
        alert("Eres menor de edad");
       document.getElementById("result").innerText = alertCurrent + ', edad: '+ edad + " Eres un niño";
    } else if (edad >= 12 && edad < 18) {
        alertCurrent = document.getElementById("result").value;
        alert("Eres mayor de edad");
        document.getElementById("result").innerText = alertCurrent + ', edad: '+ edad + " Eres adolecente de edad";
    } else if (edad >= 18 && edad < 60) {
        alertCurrent = document.getElementById("result").value;
        alert("Eres adulto");
        document.getElementById("result").innerText = alertCurrent + ', edad: '+ edad + " Eres un adulto";
    } else {
        alertCurrent = document.getElementById("result").value;
        alert("Eres un adulto mayor");
        document.getElementById("result").innerText = alertCurrent + ', edad: '+ edad + " Eres un adulto mayor";
    }

}

//var declarar variable btnEvaluar para obtener el elemento con id "btnEvaluar"
var btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", evaluarFormulario);