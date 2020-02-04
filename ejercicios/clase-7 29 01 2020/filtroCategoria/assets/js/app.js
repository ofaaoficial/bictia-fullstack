const productos = [
    {
        nombre: "Celular 1",
        precio: "400000",
        imagen: "css/imgs/celular.jpg",
        categoria: "tecnologia"
    },
    {
        nombre: "Equipo 1",
        precio: "1200000",
        imagen: "css/imgs/pc.jpg",
        categoria: "tecnologia"
    },
    {
        nombre: "Saco 1",
        precio: "50000",
        imagen: "css/imgs/saco.jpg",
        categoria: "ropa"
    },
    {
        nombre: "Pantalon 1",
        precio: "50000",
        imagen: "css/imgs/pantalon.jpg",
        categoria: "ropa"
    },
    {
        nombre: "Celular 2",
        precio: "400000",
        imagen: "css/imgs/celular.jpg",
        categoria: "tecnologia"
    },
    {
        nombre: "Equipo 2",
        precio: "1400000",
        imagen: "css/imgs/pc.jpg",
        categoria: "tecnologia"
    },
];

const renderizarContenido = (productos) => {
    let html = '';
    productos.forEach(producto => html += generarElemento(producto));
    document.querySelector('#container').innerHTML = html;
};

const generarElemento = (producto) => {
    return `<article class="producto" data-category="${producto.categoria}">
                <h2>${producto.nombre}</h2>
                <img src="${producto.imagen}" alt="img">
                <span class="precio">$ ${producto.precio}</span>
            </article>`;
};

renderizarContenido(productos);

document.querySelector('#filtro').addEventListener('change', function (event) {
    event.preventDefault();

    let filtro = this.value;

    if (filtro !== 'todo') {
        document.querySelectorAll(`.producto:not([data-category="${filtro}"])`)
            .forEach(function (element) {
                element.style.display = 'none';
            });

        document.querySelectorAll(`.producto[data-category="${filtro}"]`)
            .forEach(function (element) {
                element.style.display = 'flex';
            });
    } else {
        document.querySelectorAll(`.producto`)
            .forEach(function (element) {
                element.style.display = 'flex';
            });
    }

});

document.querySelector('#ordernar').addEventListener('change', function (event) {
    event.preventDefault();
    let filtro = this.value;
    if(filtro !== 'normal') renderizarContenido(productos.sort((a, b) => a[filtro] > b[filtro] ? 1 : -1));
    else renderizarContenido(productos);
});
