function mostrar()
{
	var nota;
	var calificacion;
	nota = Math.floor((Math.random() * 10)+1);
	

	if (nota<4) 
	{
		calificacion ="Vamos, la proxima se puede";
	} else
	{
		if(nota>8)
		{
			calificacion="EXCELENTE";
		} else
		{
			calificacion="APROBÓ";
		}
	}
	alert(calificacion);
}
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 
Linares Font*/