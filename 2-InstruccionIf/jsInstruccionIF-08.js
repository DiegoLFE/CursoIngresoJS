function mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje;

		edad=document.getElementById("txtIdEdad").value;
		estadoCivil=document.getElementById("estadoCivil").value;
		edad=parseInt(edad);

	if (edad>17) 
	{
		switch (estadoCivil) 
		{
			case "Soltero":
				if (edad>59) 
				{
					mensaje="se responsable\nsos persona de riesgo\na vivir la vida";
				}else
				{
					mensaje="se responsable\na vivir la vida";
				}
			break;
			case "Casado":
				if (edad>59) 
				{
					mensaje="se responsable\nsos persona de riesgo\na disfrutar la pareja";
				}else
				{
					mensaje="se responsable\na disfrutar la pareja";
				}
			break;
			default:
				if (edad>59) 
				{
					mensaje="se responsable\nsos persona de riesgo\na intentarlo nuevamente";
				}else
				{
					mensaje="se responsable\na intentarlo nuevamente";
				}
			break;
		}
	}else 
	{
		if (edad<13) 
		{
			mensaje="respeta a tus mayores\nHagan la tarea";
		}else
		{
			switch (estadoCivil) 
			{
				case "Divorciado":
				case "Casado":
					mensaje="respeta a tus mayores\nsos muy joven para no ser soltero";
				break;	
				default:
					mensaje="respeta a tus mayores";
				break;
			}
		}
	} 
	alert(mensaje);
		
}
/*Linares Font  Queria consultar si es mas eficiente hacer 2 

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
