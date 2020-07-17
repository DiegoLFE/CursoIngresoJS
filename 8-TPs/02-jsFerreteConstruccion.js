/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;
        largo=txtIdLargo.value;
        ancho=txtIdAncho.value;
        largo=parseInt(largo);
        ancho=parseInt(ancho);
        perimetro=(largo + ancho)*2;
        alambre = perimetro * 3;
        alert("El rectangulo de alambre es "+alambre);
}
function Circulo () 
{
    var radioTerreno;
    var longitud;
    var alambre;
        radioTerreno=txtIdRadio.value;
        radioTerreno=parseFloat(radioTerreno);
        longitud=(radioTerreno*2)*Math.PI;
        alambre=longitud*3;
        alert("La cantidad de alambre es"+alambre);	
}
function Materiales () 
{
    var largo;
    var ancho;
    var cal;
    var cemento;
        largo=txtIdLargo.value;
        ancho=txtIdAncho.value;
        largo=parseInt(largo);
        ancho=parseInt(ancho);
        cemento=(largo*ancho)*2
        cal=(largo*ancho)*3
        cal=parseFloat(cal);
        alert("La cantidad de cemento es: "+cemento+"\nLa cantidad de cal es: "+cal);
}
        //txtIdLargo txtIdAncho txtIdRadio