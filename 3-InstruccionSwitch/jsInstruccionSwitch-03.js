function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

		mesDelAño=txtIdMes.value;
		switch (mesDelAño) 
	{
		case "Febrero":
			mensaje="Este mes tiene 29 dias";
			break;
		default:
			mensaje="Este mes tiene 30 o mas dias";
			break;
	}
	alert(mensaje);
}
/*Linares Font
Lo vuelvo a subir porque estaba mal tabulado
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
 */