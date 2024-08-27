// carrito.js

function cargarCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarCarrito() {
    const carrito = cargarCarrito();
    const carritoItemsContainer = document.getElementById('carrito-items');
    const totalElement = document.getElementById('total');

    carritoItemsContainer.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.className = 'carrito-item';
        div.innerHTML = `
            <h4>${item.nombre}</h4>
            <p>Precio: $${item.precio}</p>
            <p>Cantidad: ${item.cantidad}</p>
            <p>Total: $${item.precio * item.cantidad}</p>
            <button id="eliminar-${item.id}">Eliminar</button>
        `;
        carritoItemsContainer.appendChild(div);

        const botonEliminar = div.querySelector(`#eliminar-${item.id}`);
        botonEliminar.addEventListener('click', () => removerDelCarrito(item.id));

        total += item.precio * item.cantidad;
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
