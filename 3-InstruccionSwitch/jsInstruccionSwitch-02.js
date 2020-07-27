function mostrar()
{
	//tomo el mes
	var mesDelAño;
		mesDelAño=txtIdMes.value;
	
	
	switch (mesDelAño) 
	{	
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
			mensaje="Abrigate que hace frio.";
			break;
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="Falta para el invierno.";
			break;
		default:
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
	}	
	alert(mensaje);
}//FIN DE LA FUNCIÓN
/*Linares Font
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/