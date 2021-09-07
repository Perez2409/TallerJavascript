
function desafio5(){

        var palabra = document.getElementById("palabra").value;

        var palabranew = palabra.replace(/[\W_]/g, "").toLowerCase();

        var palabrareves = palabranew.split("").reverse().join("");

        if (palabranew != palabrareves)
        {

                document.getElementById("result5").innerHTML = "La Palabra " +palabra+ " No Es Palindromo";

        }
        else
        {

                document.getElementById("result5").innerHTML = "La Palabra " +palabra+ " Es Palindromo";
        }

}