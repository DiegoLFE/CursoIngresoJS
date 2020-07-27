function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;
		mesDelAño=txtIdMes.value;

	switch (mesDelAño) 
	{
		case "Enero":
			mensaje="que comiences bien el año!!!.";
			break;
		case "Julio":
			mensaje="se vienen las vacaciones!!!.";
			break;
		case "Marzo":
			mensaje="a clases!!!.";
			break;
			case "Diciembre":
			mensaje="Felices fiesta!!!.";
			break;
	}	
	alert(mensaje);
}//FIN DE LA FUNCIÓN
/*Linares Font
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/