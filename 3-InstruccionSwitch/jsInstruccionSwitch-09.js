function mostrar()
{
	var estacionIngresada;
	var precioFinal;
	var precioBaseFijo;
	var	destino;
	var aumento;
		estacionIngresada=txtIdEstacion.value;
		destino=txtIdDestino.value;
		precioBaseFijo=15000;
	switch (estacionIngresada) 
	{
		case "Invierno":
			switch (destino) 
			{
				case "Bariloche":
					aumento=precioBaseFijo*0.20;
					precioFinal=precioBaseFijo+aumento;
					break;
				case "Mar del plata":
					aumento=precioBaseFijo*0.20;
					precioFinal=precioBaseFijo-aumento;
					break;
				default:
					aumento=precioBaseFijo*0.10;
					precioFinal=precioBaseFijo-aumento;
					break;
			}
		break;
		case "Verano":
			switch (destino) 
			{
				case "Bariloche":
					aumento=precioBaseFijo*0.20;
					precioFinal=precioBaseFijo-aumento;
					break;
				case "Mar del plata":
					aumento=precioBaseFijo*0.20;
					precioFinal=precioBaseFijo+aumento;
					break;
				default:
					aumento=precioBaseFijo*0.10;
					precioFinal=precioBaseFijo+aumento;
					break;
			}
		break;
		default:
			switch (destino) 
			{
				case "Bariloche":
					aumento=precioBaseFijo*0.10;
					precioFinal=precioBaseFijo+aumento;
					break;
				case "Mar del plata":
				case "Cataratas":
					aumento=precioBaseFijo*0.10;
					precioFinal=precioBaseFijo+aumento;
					break;
				default:
					aumento=precioBaseFijo*0.10;
					precioFinal=precioBaseFijo+aumento;
					break;
			}
		break;
	}
	alert(precioFinal);
}
/*Linares Font

una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año 
y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
 */