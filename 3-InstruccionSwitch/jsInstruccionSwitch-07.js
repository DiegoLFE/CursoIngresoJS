function mostrar()
{
	var destinoIngresado;
	var mensaje;
		destinoIngresado=txtIdDestino.value;
	switch (destinoIngresado) 
	{
		case "Bariloche":
			mensaje="Oeste";
			break;
		case "Cataratas":
			mensaje="Norte";
			break;
		case "Mar del plata":
			mensaje="Este";
			break;
		case "Cordoba":
			mensaje="Sur";
			break;
	}
	alert(mensaje);
}
/*Linares Font
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
puse cordoba al sur porque en la opcion del html el usuario ve ushuaia
 */