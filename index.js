
const contenedor = document.getElementById("consolas");
const tablaCarrito = document.getElementById("tablaCarrito");
const carrito = localStorage.getItem("carrito") || [];

const CONSOLAS = [
    {
        id: 1,
        nombre: "Playstation3",
        precio:  30000,
        stock: 4,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_808574-MLA32706766958_102019-O.webp"
    },
    {
        id: 2,
        nombre: "Playstation4",
        precio: 50000,
        stock: 10,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_690761-MLA49613056842_042022-O.webp"
    },
    {
        id: 3,
        nombre: "Playstation5",
        precio: 200000,
        stock: 1,
        imagen: "https://www.naldo.com.ar/medias/504562.jpg-515Wx515H?context=bWFzdGVyfHJvb3R8NjgxNzN8aW1hZ2UvanBlZ3xoNDQvaGViLzk1NTAwNzAwMjIxNzQuanBnfGIxNTQ2OGIzYzU5MDgwNzI3YzE0ZTAxZjU0NGMwYzFlY2I2MmUzODg1Y2ViNzk5MDRmMTRjODQ5Y2M4YTY0N2I"
    },
    {
        id: 4,
        nombre: "Xbox 360",
        precio: 70000,
        stock: 2,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_749276-MLA32731207914_112019-O.webp"
    },
    {
        id: 5,
        nombre: "Xbox series s",
        precio: 100000,
        stock: 0,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_627149-MLA44484230438_012021-O.webp"
    }
];




const getCard = (item) => {
    return (
        `
        <div class="card" style="width: 18rem;">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">${item.precio}</p>
                <p class="card-text">stock: ${item.stock}</p>
                <a href="#" onclick="agregarCarrito(${item.id})" class="btn btn-primary">Agregar al carrito</a>
        </div>
            </div>
    `);
};
const getRow = (item) => {
    return (
        `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td>
            <td><img style="width:20px" src="${item.imagen} alt="imagen"></td>
        </tr>
        
        `
    )
}

const cargarConsolas = (datos, nodo, esTabla) => {
    let acumulador = ""
    datos.forEach((el) => {
        acumulador += esTabla ? getRow(el) : getCard(el) ;

    })
    nodo.innerHTML = acumulador;
};
const agregarCarrito = (id) => {
    const seleccion = CONSOLAS.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
    if (busqueda === -1){
        carrito.push({
            id: seleccion.id,
            nombre: seleccion.nombre,
            precio: seleccion.precio,
            cantidad: 1,
            imagen: seleccion.imagen,
        })
    } else {
        carrito[busqueda].cantidad = carrito[busqueda].cantidad + 1
    }
    cargarConsolas(carrito, tablaCarrito, true);
}

cargarConsolas (CONSOLAS, contenedor, false);

function cargarLocalStorage () {
    const productosIniciales = [
        {id: 1, producto: "Playstation3"},
        {id: 2, producto: "Playstation4"},
        {id: 3, producto: "Playstation5"},
        {id: 4, producto: "Xbox360"},
        {id: 5, producto: "Xbox serie s"},

    ];
 localStorage.setItem("productos", JSON.stringify(productosIniciales));   
}

cargarLocalStorage()
function agregar (nombre){
    let listaProductos = JSON.parse(localStorage.getItem("productos"));
    let product = {id: listaproductos.lenght + 1, producto: nombre};

    listaProductos.push (product);
    localStorage.setItem("productos", JSON.stringify(listaProductos));
}

