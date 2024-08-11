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

function seleccionarOpcion() {
    let seleccionRelleno;
    let seleccionCobertura;
    let subtotal = 0;
    const IVA = 0.21;

    while (true) {
        let mensajeRelleno = "Selecciona un relleno: \n";
        for (let clave in rellenos) {
            mensajeRelleno += "-" + clave + ": " + rellenos[clave] + "\n";
        }

        seleccionRelleno = prompt(mensajeRelleno);
        
        if (rellenos.hasOwnProperty(seleccionRelleno)) {
            subtotal += rellenos[seleccionRelleno];
            alert("Has seleccionado " + seleccionRelleno + " con un precio de: " + rellenos[seleccionRelleno]);
            break;
        } else {
            alert("Por favor, elige una opción correcta.");
        }
    }

    while (true) {
        let mensajeCobertura = "Selecciona una cobertura: \n";
        for (let i = 0; i < cobertura.length; i++) {
            mensajeCobertura += "- " + cobertura[i] + ": " + (precioCobertura[cobertura[i]] || "No disponible") + " \n";
        }

        seleccionCobertura = prompt(mensajeCobertura);
        
        if (cobertura.includes(seleccionCobertura)) {
            subtotal += precioCobertura[seleccionCobertura];
            alert("Has seleccionado la cobertura " + seleccionCobertura + " con un precio de: " + precioCobertura[seleccionCobertura]);
            break;
        } else {
            alert("Por favor, elige una cobertura correcta.");
        }
    }

    function calcularIVA(subtotal, IVA) {
        return subtotal * IVA;
    }

    let iva = calcularIVA(subtotal, IVA);
    let totalConIVA = subtotal + iva;

    console.log("Relleno seleccionado " + seleccionRelleno + " con un precio de: " + rellenos[seleccionRelleno]);
    console.log("Cobertura seleccionada " + seleccionCobertura + " con un precio de: " + precioCobertura[seleccionCobertura]);
    console.log("Subtotal: " + subtotal);
    console.log("IVA (" + (IVA * 100) + "%): " + iva.toFixed());
    console.log("Total con IVA: " + totalConIVA.toFixed());
}

seleccionarOpcion();