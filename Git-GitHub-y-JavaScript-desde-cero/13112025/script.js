function convertirMetrosAKilometros() {
    metros = parseInt(document.getElementById("in_metros").value);
    kilometros = metros / 1000;
    document.getElementById("out_kilometros").value = kilometros;
}

function sumarNumeros() {
    num1 = parseFloat(document.getElementById("in_num1").value);
    num2 = parseFloat(document.getElementById("in_num2").value);
    suma = num1 + num2;
    document.getElementById("out_result").value = suma;
}

function restaNumeros() {
    num1 = parseFloat(document.getElementById("in_num1").value);
    num2 = parseFloat(document.getElementById("in_num2").value);
    resta = num1 - num2;
    document.getElementById("out_result").value = resta;
}

function multiplicarNumeros() {
    num1 = parseFloat(document.getElementById("in_num1").value);
    num2 = parseFloat(document.getElementById("in_num2").value);
    mult = num1 * num2;
    document.getElementById("out_result").value = mult;
}

function divisorNumeros() {
    num1 = parseFloat(document.getElementById("in_num1").value);
    num2 = parseFloat(document.getElementById("in_num2").value);
    div = num1 / num2;
    document.getElementById("out_result").value = div;
}

function calcularIMC() {
    peso = parseFloat(document.getElementById("in_peso").value);
    estatura = parseFloat(document.getElementById("in_estatura").value);
    imc = peso / (estatura * estatura);
    document.getElementById("out_imc").value = imc;
}
 