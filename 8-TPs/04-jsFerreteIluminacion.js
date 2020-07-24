/*
4.  Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra 
    marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” 
    se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
    brutos en informar del impuesto con el siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    Linares Font Diego
 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioUnitario;
    var aplicarDescuento;
    var marca;
    var precioFinal;
    var precioLamparas;
    var ingresoBruto;

        cantidadLamparas=document.getElementById("txtIdCantidad").value;
        marca=document.getElementById("Marca").value;

        precioUnitario=35;
        precioLamparas=cantidadLamparas*precioUnitario;

        
        if (cantidadLamparas>5) 
        {
            precioFinal=precioLamparas/2;
        }else
        {
            if (cantidadLamparas==5) 
            {
                if (marca=="ArgentinaLuz") 
                {
                    aplicarDescuento=precioLamparas*0.40;
                    precioFinal=precioLamparas-aplicarDescuento;
                }else 
                {
                        aplicarDescuento=precioLamparas*0.30;
                        precioFinal=precioLamparas-aplicarDescuento;
                }
            }else
            {
                if (cantidadLamparas==4) 
                {
                    if (marca=="ArgentinaLuz"||marca=="FelipeLamparas") 
                    {
                            aplicarDescuento=precioLamparas*0.25;
                            precioFinal=precioLamparas-aplicarDescuento;
                    }else
                    {
                            aplicarDescuento=precioLamparas*0.20;
                            precioFinal=precioLamparas-aplicarDescuento;
                    }
                }else
                {
                    if (cantidadLamparas==3) 
                    {   
                        if (marca=="ArgentinaLuz") 
                        {
                            aplicarDescuento=precioLamparas*0.15;
                            precioFinal=precioLamparas-aplicarDescuento;
                        }else
                        {
                            if (marca=="FelipeLamparas") 
                            {
                                aplicarDescuento=precioLamparas*0.10;
                                precioFinal=precioLamparas-aplicarDescuento;
                            }else
                            {
                                aplicarDescuento=precioLamparas*0.05;
                                precioFinal=precioLamparas-aplicarDescuento;
                            }
                        }
                    } 
                }
            }
        }
        if (precioFinal>120) 
        {
            ingresoBruto=precioFinal*0.10;
            precioFinal=precioFinal+ingresoBruto;
            alert("Usted pago " +ingresoBruto+ " de IIBB.");
        }
        document.getElementById("txtIdprecioDescuento").value=precioFinal;
}       