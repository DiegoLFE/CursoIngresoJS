/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Linares Font
*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	while (numeroIngresado<0||numeroIngresado>9) 
	{
		numeroIngresado = prompt("Error! Reingrese numero entre 0 y 9");
	}
	txtIdNumero.value=numeroIngresado;
	

	
}//FIN DE LA FUNCIÓN