const remeras = [
    {id: 1, nombre: "Camiseta Titular CARP", club: "River Plate", precio: 912},
    {id: 2, nombre: "Camiseta Titular CABJ", club: "Boca Juniors", precio: 500},
    {id: 3, nombre: "Camiseta Titular RCA", club: "Racing Club", precio: 500},
    {id: 4, nombre: "Camiseta Titular CAI", club: "Independiente de Avellaneda", precio: 500}
]

const abrigos = [
    {id: 1, nombre: "Camperon 2024 CARP", club: "River Plate", precio: 912},
    {id: 2, nombre: "Camperon 2024 CABJ", club: "Boca Juniors", precio: 500},
    {id: 3, nombre: "Camperon 2024 RCA", club: "Racing Club", precio: 500},
    {id: 4, nombre: "Camperon 2024 CAI", club: "Independiente de Avellaneda", precio: 500}
]

const productos =[
    ...abrigos,
    ...remeras
]

let carrito = [];

function agregarACarrito(productoID) {
    const product = productos.find(p => p.id === productoID);

    carrito.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio
    })
    localStorage.setItem("Carrito", JSON.stringify(carrito));
}


document.addEventListener("DOMContentLoaded", function () {
    function renderizarProductos(productosFiltrados = productos) {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        productosFiltrados.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = 
            `<p>Nombre: ${producto.nombre} - Club: ${producto.club} - Precio: $${producto.precio}</p>
                <button onclick="agregarACarrito(${producto.id})">Agregar al Carrito</button>`;
            productList.appendChild(productoDiv);
        });
    }

    const buscadorInput = document.getElementById('buscador-input');
    buscadorInput.addEventListener('input', function () {
        const textoBusqueda = buscadorInput.value.toLowerCase();
        const productosFiltrados = productos.filter(producto => 
            producto.club.toLowerCase().includes(textoBusqueda)
        );
        renderizarProductos(productosFiltrados);
    });

    renderizarProductos();
});