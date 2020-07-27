function mostrar()
{
	var estacionIngresada;
	var	destino;
	var mensaje;
		estacionIngresada=txtIdEstacion.value;
		destino=txtIdDestino.value;
	switch (estacionIngresada) 
	{
		case "Invierno":
			switch (destino) 
			{
				case "Bariloche":
					mensaje="se viaja";
					break;
				default:
					mensaje="no se viaja";
					break;
			}
		break;
		case "Verano":
			switch (destino) 
			{
				case "Caracas":
				case "Mar del plata":
					mensaje="se viaja";
					break;
				default:
					mensaje="no se viaja";
					break;
			}
		break;
		case "Otoño":
			mensaje="se viaja";
		break;
		default:
			switch (destino) 
			{
				case "Bariloche":
					mensaje="no se viaja";
					break;
				default:
					mensaje="se viaja";
					break;
			}
		break;
	}
	alert(mensaje);
}
/*Linares Font
una agencia de viajes nos piden informar 
si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/

