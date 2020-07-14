/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/  

	function sumar(primerNumero, segundoNumero)
	{	var primerNumero; 
		var segundoNumero;
		var resultadoSuma;

			primerNumero=txtIdNumeroUno.value;
			segundoNumero=txtIdNumeroDos.value;

			primerNumero=parseInt(primerNumero);
			segundoNumero =parseInt(segundoNumero);

			resultadoSuma=(primerNumero + segundoNumero);

					alert("La suma es "+resultadoSuma);
	}

	function restar()
	{
		var primerNumero; 
		var segundoNumero;
		var resultadoResta;

			primerNumero=txtIdNumeroUno.value;
			segundoNumero=txtIdNumeroDos.value;

			primerNumero =parseInt(primerNumero);
			segundoNumero =parseInt(segundoNumero);
			resultadoResta=(primerNumero - segundoNumero);

					alert("La resta es "+ resultadoResta);
	
	}

	function multiplicar()
	{ 
		var primerNumero; 
		var segundoNumero;
		var resultadoMultiplicar;

			primerNumero=txtIdNumeroUno.value;
			segundoNumero=txtIdNumeroDos.value;

			primerNumero =parseInt(primerNumero);
			segundoNumero =parseInt(segundoNumero);
			resultadoMultiplicar=(primerNumero * segundoNumero);
					alert("La multiplicacion es" + resultadoMultiplicar);
	
	}

	function dividir()
	{
		var primerNumero; 
		var segundoNumero;
		var resultadoDividir;

			primerNumero=txtIdNumeroUno.value;
			segundoNumero=txtIdNumeroDos.value;

			primerNumero =parseInt(primerNumero);
			segundoNumero =parseInt(segundoNumero);
			
			resultadoDividir=(primerNumero / segundoNumero);

					alert("La division es" + resultadoDividir);
	}