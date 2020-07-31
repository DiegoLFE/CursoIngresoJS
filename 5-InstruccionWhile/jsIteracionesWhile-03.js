/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
Linares Font
*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	while (claveIngresada!="utn750") 
	{
		claveIngresada = prompt("clave incorrecta.");
	} 
	alert("Ingreso");
}//FIN DE LA FUNCIÓN