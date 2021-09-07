
function desafio1(){

var numh = document.getElementById("numh").value;
var valorh = document.getElementById("valorh").value;

var result = numh*valorh;

document.getElementById("result1").innerHTML = "Tu salario es de " +result;
}