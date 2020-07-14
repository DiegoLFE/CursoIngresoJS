/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/  

	function sumar(primerNumero, segundoNumero)
	{	var primerNumero; 
		var segundoNumero;
		var resultadoSuma;
			primerNumero =parseInt(txtIdNumeroUno.value);
			segundoNumero =parseInt(txtIdNumeroDos.value);
			resultadoSuma=(primerNumero + segundoNumero);
					alert("La suma es "+resultadoSuma);
	}

	function restar()
	{
		var primerNumero; 
		var segundoNumero;
		var resultadoResta;
			primerNumero =parseInt(txtIdNumeroUno.value);
			segundoNumero =parseInt(txtIdNumeroDos.value);
			resultadoResta=(primerNumero - segundoNumero);
					alert("La resta es "+ resultadoResta);
	
	}

	function multiplicar()
	{ 
		var primerNumero; 
		var segundoNumero;
		var resultadoMultiplicar;
			primerNumero =parseInt(txtIdNumeroUno.value);
			segundoNumero =parseInt(txtIdNumeroDos.value);
			resultadoMultiplicar=(primerNumero * segundoNumero);
					alert("La multiplicacion es" + resultadoMultiplicar);
	
	}

	function dividir()
	{
		var primerNumero; 
		var segundoNumero;
		var resultadoDividir;
			primerNumero =parseInt(txtIdNumeroUno.value);
			segundoNumero =parseInt(txtIdNumeroDos.value);
			resultadoDividir=(primerNumero / segundoNumero);
					alert("La division es" + resultadoDividir);
	};

	// hay alguna manera de hacer variables globales? para no tenes que estar nombrandolas en cada termino