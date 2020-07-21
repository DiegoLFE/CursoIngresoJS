function mostrar()
{
	var edad;
		edad=txtIdEdad.value;
		edad=parseInt(edad);

		if (edad>12&&edad<18) {
			alert("Usted es adolescente");
			} else 
			{
			alert("Usted no es adolescente");
			}
}
/*		
		if (edad<13) 
		{
			if (edad>17) {
				alert("Usted no es adolescente");
			}
		} 
		if (edad>12) {
			if (edad<18) 
			{
				alert("Usted es adolescente");
			}
		}
		*/