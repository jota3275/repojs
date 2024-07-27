const precio = 900;
const precioCobertura = 200;
const iva = x => x * 0.21
const efectivo = y => y % 0.10
let relleno1 = "dulce de leche"
let relleno2 =  "pastelera"

alert("¡Bienvenido a la Churrería! Elige tu relleno , cobertura de chocolate si lo deseas y cantidad.");

let eleccion = prompt("Elige un sabor: dulce de leche o pastelera").toLowerCase();

switch (eleccion) 
{
    case "dulce de leche":
        relleno1 = precio;
        
        break;
    case "pastelera":
        relleno2 = precio;
        
        break;
    default:
        console.log("Opcion no valida. Por favor elige dulce de leche o pastelera.");
        break;
}
console.log("selecciono: " + eleccion);

let quiereCobertura = prompt("¿Deseas cobertura de chocolate? (si/no)").toLowerCase();

{
    switch (quiereCobertura) 
    {
        case "si":
            quiereCobertura = precioCobertura;
            console.log("selecciono: churros cubiertos de chocolate" );
            break;
        case "no":
            console.log("selecciono: churros sin cobertura de chocolate" );
            break;
        default:
            console.log("Respuesta no válida para la cobertura de chocolate.");
            break;
    }
}

let cantidad = parseInt(prompt("¿Cuantos churros quiere?"))

