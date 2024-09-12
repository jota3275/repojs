document.addEventListener('DOMContentLoaded', function() {
    fetch('js/productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo JSON');
            }
            return response.json();
        })
        .then(productos => {
            mostrarProductos(productos);
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});

function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productos');

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'col-md-3 mb-4';
        div.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}" />
                <div class="card-body">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-text">Descripción: ${producto.descripcion}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <button id="agregar-${producto.id}" class="btn boton ">Agregar al Carrito</button>
                </div>
            </div>
        `;
        productosContainer.appendChild(div);

        const botonAgregar = div.querySelector(`#agregar-${producto.id}`);
        botonAgregar.addEventListener('click', () => agregarAlCarrito(producto.id, productos));
    });
}

function agregarAlCarrito(id, productos) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos.find(p => p.id === id);

    if (producto) {
        const productoEnCarrito = carrito.find(p => p.id === id);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad += 1;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));

        
        Toastify({
            text: `${producto.nombre} se agregó al carrito`,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#4CAF50"
        }).showToast();
    }
}
