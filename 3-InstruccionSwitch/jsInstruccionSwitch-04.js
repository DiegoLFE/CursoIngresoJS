function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;	
		mesDelAño=txtIdMes.value;
	switch (mesDelAño) 
	{	
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Agosto":
		case "Septiembre":		
		case "Diciembre":
			mensaje="Este mes tiene 31 dias";
			break;
		case "Febrero":
			mensaje="Este mes tiene 28 dias";
			break;
		default:
			mensaje="Este mes tiene 30 dias";
			break;
	}	
	alert(mensaje);
}
/*Linares Font
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
 */