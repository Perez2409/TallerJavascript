
function desafio4(){

    var cant = document.getElementById("cant").value;
    if (cant<2)
            {
                alert("Ingresa Minimo 2");
                location.reload();
            }
            else
            {
                var lista = new Array;
                var suma = 0;

                for(var i=1;i<=cant;i++)
                {
                    var num = parseInt(prompt("Introduzca un numero"));
                    lista.push(num);
                }

                for (var i = 0; i < lista.length; i++) {
                    suma += lista[i]*1;
                }

                document.getElementById("result4").innerHTML = "La Suma De Todos Los Numeros Es " +suma;
            }
    }