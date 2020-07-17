function mostrar()
{
	var edad;
	var estadoCivil;
		 edad=txtIdEdad.value;
		 estadoCivil=document.getElementById("estadoCivil").value;
		 if (edad<18&&estadoCivil!="Soltero") {
			alert("Es muy pequeño para NO ser soltero")
		} 
}
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
		 /*edad=parseInt(edad);
		 alert(edad);
		estadoCivil=estadoCivil.value;
		 alert(estadoCivil);
		 
		 if (edad<18&&estadoCivil!="Soltero") {
			alert("Es muy pequeño para NO ser soltero")
		} 
		 */