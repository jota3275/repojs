document.addEventListener('DOMContentLoaded', function() {
    mostrarCarrito();
});

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

    carritoContainer.innerHTML = ''; // Limpiar el contenido previo
    let total = 0;

    carrito.forEach(articulo => {
        const div = document.createElement('div');
        div.className = 'col-md-4 mb-4'; // Añadir clase para el diseño
        div.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src="${articulo.imagen}" alt="${articulo.nombre}" />
                <div class="card-body text-center">
                    <h5 class="card-title">${articulo.nombre}</h5>
                    <p class="card-text">Descripcion: ${articulo.descripcion}</p>
                    <p class="card-text">Precio: $${articulo.precio}.-</p>
                    <p class="card-text">Cantidad: ${articulo.cantidad}</p>
                    <p class="card-text">Total: $${articulo.precio * articulo.cantidad}</p>
                    <button id="eliminar-${articulo.id}" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
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
