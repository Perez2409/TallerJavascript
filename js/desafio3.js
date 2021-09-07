
function desafio3(){

    var barrasv = document.getElementById("barrasv").value;

    var total = barrasv*450;

    var dcto = total*0.50;

    var totalf = total-dcto;

    document.getElementById("result3").innerHTML = "Precio habitual de la barra de Dulce $450 <br> " + " El valor total sin descuento es de $" +total+ " <br> El descuento total es de $" +dcto+ "  <br> El valor total a pagar es de $" +totalf;
    }