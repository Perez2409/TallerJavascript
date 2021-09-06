
function desafio2(){

var peso = document.getElementById("peso").value;
var altura = document.getElementById("altura").value;

if (peso == "" && altura == "")
            {
                alert("No hay peso ni altura");
            }
            else
            {
                alert("Si hay peso y altura");
            }

var result2 ="";

var result1 = (peso / Math.pow(altura, 2));

var imc = result1.toFixed(2);

if (imc < 18.5)
            {
                result2 = "Peso inferior al normal";
            }
            else if (imc >= 18.5 && imc < 24.9)
            {
                result2 = "Peso Normal";
            }
            else if (imc >= 25.0 && imc < 29.9)
            {
                result2 = "Peso superior al normal";
            }
            else
            {
                result2 = "Obesidad";
            }


alert(peso);
alert(altura);
alert("Imc es de " +result1);

document.getElementById("result2").innerHTML = "Imc es de " +imc+ " Y Su Clasificacion Es: " +result2;
}