function mostrar()
{
	var edad;
		edad=txtIdEdad.value;
		edad=parseInt(edad);	
		if (edad>12&&edad<18) 
		{
			alert("Usted es adolescente");
		} else 
			{
				if (edad>17){
				alert("Usted es mayor de edad");
			} else 
			{
				alert("Usted es un niño");
			}
		}
}
/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o
 adolescente (entre 13 y 17 años) o niño (menor a 13 años). 
		Linares Font

	if(edad<12)
	{
		alert("niño");
	}else
	{
		if(edad<18)
		{
			alert("adolescente");
		}else
		{
			alert("mayor");
		}
	}


 */