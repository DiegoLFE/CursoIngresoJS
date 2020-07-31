/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=true;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		/*if (banderaDelPrimero==true) 
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero=false;
		}*/
		if (banderaDelPrimero==1||numeroIngresado>numeroMaximo) 
		{
			numeroMaximo=numeroIngresado;
		}	
		if (banderaDelPrimero==1||numeroIngresado<numeroMinimo) 
		{
			numeroMinimo=numeroIngresado;
		}
		banderaDelPrimero=0;
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}