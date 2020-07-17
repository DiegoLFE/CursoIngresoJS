/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
numero.tofixed(2) */
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
        precioUno = txtIdPrecioUno.value;
        precioDos = txtIdPrecioDos.value;
        precioTres = txtIdPrecioTres.value;
        precioUno = parseInt(precioUno);
        precioDos = parseInt(precioDos);
        precioTres = parseInt(precioTres);
        resultado = precioUno + precioDos + precioTres;
        alert("La suma es "+ resultado);
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;
        precioUno=txtIdPrecioUno.value;
        precioDos=txtIdPrecioDos.value;
        precioTres=txtIdPrecioTres.value;
        precioUno=parseInt(precioUno);
        precioDos=parseInt(precioDos);
        precioTres=parseInt(precioTres);
        promedio=(precioUno+precioDos+precioTres)/3;
        alert("El promedio es "+promedio);
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precioFinal;
    var iva;
    var suma;
        precioUno=txtIdPrecioUno.value;
        precioDos=txtIdPrecioDos.value;
        precioTres=txtIdPrecioTres.value;
        precioUno=parseInt(precioUno);
        precioDos=parseInt(precioDos);
        precioTres=parseInt(precioTres);
        suma=precioUno+precioDos+precioTres;
        iva=suma*0.21;
        precioFinal=(precioUno+precioDos+precioTres)+iva;
        alert("El precio final es "+precioFinal+" con un iva de "+iva);
}