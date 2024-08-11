alert("¡Bienvenido a la Churrería! Elige tu relleno y cobertura de chocolate.");

const rellenos = {
    "dulce de leche": 800,
    "pastelera": 800,
    "nutella": 1000,
    "oreo": 1000
};

const cobertura = ["chocolate negro", "chocolate blanco", "mixto"];
const precioCobertura = {
    "chocolate negro": 200,
    "chocolate blanco": 200,
    "mixto": 250
};

function seleccionarOpcion(mostrarOpciones, opciones, precios) {
    let seleccion;
    let subtotal = 0;
    
    while (true) {
        let mensaje = mostrarOpciones(opciones, precios);
        seleccion = prompt(mensaje);
        
        if (opciones.includes(seleccion)) {
            subtotal = precios[seleccion];
            alert("Has seleccionado " + seleccion + " con un precio de: " + subtotal);
            break;
        } else {
            alert("Por favor, elige una opción correcta.");
        }
    }

    return { seleccion, subtotal };
}

function mostrarRellenos(rellenos) {
    let mensajeRelleno = "Selecciona un relleno: \n";
    for (let clave in rellenos) {
        mensajeRelleno += "-" + rellenos[clave] + "\n";
    }
    return mensajeRelleno;
}

function mostrarCoberturas(cobertura, precioCobertura) {
    let mensajeCobertura = "Selecciona una cobertura: \n";
    for (let i = 0; i < cobertura.length; i++) {
        mensajeCobertura += "- " + cobertura[i] + ": " + (precioCobertura[cobertura[i]] || "No disponible") + " \n";
    }
    return mensajeCobertura;
}

function calcularIVA(subtotal, IVA) {
    return subtotal * IVA;
}

function main() {
    const IVA = 0.21;

    const { seleccion: seleccionRelleno, subtotal: subtotalRelleno } = seleccionarOpcion(mostrarRellenos, Object.keys(rellenos), rellenos);
    const { seleccion: seleccionCobertura, subtotal: subtotalCobertura } = seleccionarOpcion(mostrarCoberturas, cobertura, precioCobertura);

    const subtotal = subtotalRelleno + subtotalCobertura;
    let iva = calcularIVA(subtotal, IVA);
    let totalConIVA = subtotal + iva;

    console.log("Relleno seleccionado: " + seleccionRelleno + " con un precio de: " + rellenos[seleccionRelleno]);
    console.log("Cobertura seleccionada " + seleccionCobertura + " con un precio de: " + precioCobertura[seleccionCobertura]);
    console.log("Subtotal: " + subtotal);
    console.log("IVA (" + (IVA * 100) + "%): " + iva.toFixed());
    console.log("Total con IVA: " + totalConIVA.toFixed());
}

main();