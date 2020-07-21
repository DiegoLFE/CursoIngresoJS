function mostrar()
{
	/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
	Linares Font */
	var edad;
		edad=txtIdEdad.value;
		edad=parseInt(edad);

		if (edad>12) 
		{
			if (edad<18) 
			{
				alert("Usted es adolescente");
			}
		}
		/*if (edad>12&&edad<18) {
		alert("Usted es adolescente");
		} else {
		alert("Usted no es adolescente");
		}*/
}