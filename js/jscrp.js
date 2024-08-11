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


// let cantidad = prompt("¿Cuantos Quiere?")