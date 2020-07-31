/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var numeroIngresado;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta=="si") 
	{
		numeroIngresado=prompt("ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		while (numeroIngresado==0) 
		{
			numeroIngresado=prompt("Error.. ingrese un numero: ");	
			numeroIngresado=parseInt(numeroIngresado);
		}
		if (numeroIngresado<0) 
		{
			multiplicacionNegativos=numeroIngresado*multiplicacionNegativos;
		} else 
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		respuesta=prompt("¿desea ingresar otro numero? si/no");
	}

	promedioPositivos=acumulador/contadorPositivos



	if (multiplicacionNegativos==1) 
	{
		multiplicacionNegativos="No se ingresaron numeros negativos";
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN