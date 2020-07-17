function mostrar()
{
	var edad;
		edad=txtIdEdad.value;
		edad=parseInt(edad);
		if (edad>=13&&edad<=17) {
			alert("Usted es adolescente");
			} else {
			alert("Usted no es adolescente");
			}
}

/*
				if (edad<13&&edad>17) {
			alert("Usted no es adolescente");
		} */