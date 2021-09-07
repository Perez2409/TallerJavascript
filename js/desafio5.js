
function desafio5(){

        var palabra = document.getElementById("palabra").value;

        var palabranew = palabra.replace(/[\W_]/g, "").toLowerCase();

        var palabrareves = palabranew.split("").reverse().join("");

        if (palabranew != palabrareves)
        {

                alert("La Palabra " +palabra+ " No Es Palindromo" );
                document.getElementById("result5").innerHTML = "La Palabra " +palabra+ " No Es Palindromo";

        }
        else
        {

                alert("La Palabra " +palabra+ " Es Palindromo" );
                document.getElementById("result5").innerHTML = "La Palabra " +palabra+ " Es Palindromo";
        }

}