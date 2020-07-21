function mostrar()
/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. 
Linares Font*/
{
	var edad;
		edad=txtIdEdad.value;
		edad=parseInt(edad);

		if (edad>18||edad==18) {
			alert("Usted es mayor de edad");
		}
		if (edad<18) {
			alert("Usted es menor de edad");
		}
		/*else {
			alert("Usted es menor de edad");
		}*/
}