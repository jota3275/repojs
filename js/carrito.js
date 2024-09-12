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
    const botonComprar = document.getElementById('comprar');
    const botonCancelar = document.getElementById('cancelar');

    carritoContainer.innerHTML = '';
    let total = 0;

    carrito.forEach(articulo => {
        const div = document.createElement('div');
        div.className = 'col-md-4 mb-4';
        div.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src="${articulo.imagen}" alt="${articulo.nombre}" />
                <div class="card-body text-center">
                    <h3 class="card-title">${articulo.nombre}</h3>
                    <p class="card-text">Descripcion: ${articulo.descripcion}</p>
                    <p class="card-text">Precio: $${articulo.precio}</p>
                    <p class="card-text">Cantidad: ${articulo.cantidad}</p>
                    <p class="card-text">Total: $${articulo.precio * articulo.cantidad}</p>
                    <button id="eliminar-${articulo.id}" class="btn boton">Eliminar</button>
                </div>
            </div>
        `;
        carritoContainer.appendChild(div);

        const botonEliminar = div.querySelector(`#eliminar-${articulo.id}`);
        botonEliminar.addEventListener('click', () => removerDelCarrito(articulo.id));

        total += articulo.precio * articulo.cantidad;
    });

    totalElement.innerHTML = `<h2>Total: $${total}</h2>`;
    
    // Agregar eventos a los botones de acción
    botonComprar.addEventListener('click', () => confirmarCompra());
    botonCancelar.addEventListener('click', () => confirmarCancelacion());
}

function removerDelCarrito(id) {
    let carrito = cargarCarrito();
    const producto = carrito.find(p => p.id === id);

    if (producto) {
        carrito = carrito.filter(p => p.id !== id);
        guardarCarrito(carrito);
        mostrarCarrito();

        Toastify({
            text: `${producto.nombre} se elimino del carrito`,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#4CAF50"
        }).showToast();
    }
}

function confirmarCompra() {
    Swal.fire({
        title: '¿Desea confirmar la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, comprar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Vaciar el carrito después de la compra
            localStorage.removeItem('carrito');
            mostrarCarrito();
            
            Swal.fire({
                title: '¡Comprado!',
                text: 'Tu compra ha sido realizada.',
                icon: 'success'
            });
        }
    });
}

function confirmarCancelacion() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cancelar!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            // Vaciar el carrito después de cancelar
            localStorage.removeItem('carrito');
            mostrarCarrito();
            
            Swal.fire({
                title: '¡Cancelado!',
                text: 'El carrito ha sido cancelado.',
                icon: 'info'
            });
        }
    });
}
