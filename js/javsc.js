// const precio = 800;
// let precioCobertura = 1000;
// const iva = 0.21;
// const descuentoEfectivo = 0.90;
// let eleccion = 0
// const sumar = (a, b) => (a + b);
// const multiplicar1 = (a, b) => (a * b);
// let r1 = 0
// let r2 = 0

// alert("¡Bienvenido a la Churrería! Elige tu relleno , cobertura de chocolate si lo deseas y cantidad.");

// while (eleccion !== "continuar")
// {
//     eleccion = prompt("Elige entre: dulce de leche , pastelera o continuar").toLowerCase();
//     switch (eleccion) 
//     {
//         case "dulce de leche":
//             let elecciond = parseInt(prompt("¿Cuantos desea?"))
//             console.log("selecciono: " + elecciond + " Churros de dulce de leche");
//             r1 = elecciond * precio
//             console.log("percio " + r1)    
//         break;
//         case "pastelera":
//             let eleccionp = parseInt(prompt("¿Cuantos desea?"))
//             console.log("selecciono: "+ eleccionp + " Churros de Pastelera");
//             r2 = eleccionp * precio 
//             console.log("percio " + r2)   
//         break;
//         case "continuar":
//             console.log("Continuamos")
//         break;
//         default:
//             alert("Opción inválida. Por favor, elija una opción válida.");
//         break;
//     }
// }

// let r3 = sumar(r1 , r2)
// let quiereCobertura = prompt("¿Deseas cobertura de chocolate? (si/no)").toLowerCase();

// {
//     switch (quiereCobertura) 
//     {
//         case "si":
//             quiereCobertura = precioCobertura;
//             console.log("Selecciono: Churros cubiertos de chocolate" );
//             break;
//         case "no":
//             precioCobertura = 0
//             console.log("Selecciono: Churros sin cobertura de chocolate" );
//             break;
//         default:
//             console.log(quiereCobertura +"no es válida para la cobertura de chocolate.");
//             break;
//     }
// }


// const precioReal = sumar(r3, precioCobertura);
// const ivaTotal = multiplicar1(precioReal, iva);
// console.log("Subtotal " + precioReal);
// console.log("Iva " + ivaTotal);
// const total = sumar(ivaTotal , precioReal);
// console.log("Total " + total);

// alert ("Si su metodo de pago es en efectivo se le aplicara un 10% de decuento.")

// let descuento = prompt ("Desea pagar en efectivo")

// switch (descuento) 
//     {
//         case "si":
//             const totalConDescuento = multiplicar1 (total, descuentoEfectivo)
//             console.log("Se aplico el descuento su nuevo Total es " + totalConDescuento);
//             break;
//         case "no":
//             console.log("Su precio sin descuento es " + total);
//             break;
//         default:
//             console.log("Respuesta no válida para el descuento.");
//             break;
// }






const rellenos = 
{
    "dulce de leche": 800,
    "pastelera": 800 ,
    "nutella": 1000,
    "oreo": 1000
}

let cobertura = ["chocolate negro", "chocolate blanco", "mixto"]
const precioCobertura = {cobertura : 200}
function seleccionarOpcion() {
    let mensaje = "Selecciona una opción: ";
    for (let clave in rellenos) 
        mensaje += clave.opciones[clave];
    }

let seleccion = prompt(mensaje);
if (!rellenos.hasOwnProperty(seleccion)) {
    alert("Selección no válida. Por favor, elige " + Object.keys(opciones).length);
    return;
}
alert("Has seleccionado: " + rellenos[seleccion]);
seleccionarOpcion();