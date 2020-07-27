function mostrar()
{
	var destinoIngresado;
	var mensaje;
		destinoIngresado=txtIdDestino.value;
	switch (destinoIngresado) 
	{
		case "Bariloche":
		case "Cordoba":	
			mensaje="Frio";
			break;
		default:
			mensaje="calor";
			break;
	}
	alert(mensaje);
}
/*Linares Font
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
 */