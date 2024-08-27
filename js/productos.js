const productos = [
    { id: 1, nombre: 'Alfajor Jorgito', precio: 1200 },
    { id: 2, nombre: 'Alfajor Milka', precio: 1500 },
    { id: 3, nombre: 'Alfajor Aguila', precio: 2200 },
    { id: 4, nombre: 'Alfajor Terrabusi', precio: 1600 },
    { id: 5, nombre: 'Alfajor Pepitos', precio: 2000 },
    { id: 6, nombre: 'Alfajor Oreo', precio: 2300 },
    { id: 7, nombre: 'Alfajor Bon o Bon', precio: 1100 },
    { id: 8, nombre: 'Alfajor Block', precio: 1800 }
];

function mostrarProductos() {
    const productosContainer = document.getElementById('productos');

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button id="agregar-${producto.id}">Agregar al Carrito</button>
        `;
        productosContainer.appendChild(div);

        const botonAgregar = div.querySelector(`#agregar-${producto.id}`);
        botonAgregar.addEventListener('click', () => agregarAlCarrito(producto.id));
    });
}

function agregarAlCarrito(id) {
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

    }
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos();
});