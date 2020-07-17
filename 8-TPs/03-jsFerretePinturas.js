/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFahrenheit;
    var centigrados;
        temperaturaFahrenheit=txtIdTemperatura.value;
        centigrados=(temperaturaFahrenheit-32)*5/9;
        centigrados=parseFloat(centigrados);
        alert(temperaturaFahrenheit+" Fahrenheit Son "+centigrados+" grados Centigrados");
}

function CentigradosFahrenheit () 
{
    var temperaturaCentigrados;
    var fahrenheit;
        temperaturaCentigrados=txtIdTemperatura.value;
        fahrenheit=(temperaturaCentigrados*9/5)+32;
        fahrenheit=parseFloat(fahrenheit);
        alert(temperaturaCentigrados+" Centigrados Son "+fahrenheit+" grados Fahrenheit");
}
//txtIdTemperatura 