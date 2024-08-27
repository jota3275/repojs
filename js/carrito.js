// carrito.js

function cargarCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarCarrito() {
    const carrito = cargarCarrito();
    const carritoContainer = document.getElementById('carrito-articulo');
    const totalElement = document.getElementById('total');

    carritoContainer.innerHTML = '';
    let total = 0;

    carrito.forEach(articulo => {
        const div = document.createElement('div');
        div.className = 'carrito-articulo';
        div.innerHTML = `
            <h4>${articulo.nombre}</h4>
            <p>Precio: $${articulo.precio}</p>
            <p>Cantidad: ${articulo.cantidad}</p>
            <p>Total: $${articulo.precio * articulo.cantidad}</p>
            <button id="eliminar-${articulo.id}">Eliminar</button>
        `;
        carritoContainer.appendChild(div);

        const botonEliminar = div.querySelector(`#eliminar-${articulo.id}`);
        botonEliminar.addEventListener('click', () => removerDelCarrito(articulo.id));

        total += articulo.precio * articulo.cantidad;
    });

    totalElement.textContent = `Total: $${total}`;
}

function removerDelCarrito(id) {
    let carrito = cargarCarrito();
    carrito = carrito.filter(p => p.id !== id);
    guardarCarrito(carrito);
    mostrarCarrito();
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarCarrito();
});
