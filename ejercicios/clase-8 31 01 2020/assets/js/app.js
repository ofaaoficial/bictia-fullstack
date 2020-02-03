const $CONTAINER = document.querySelector('.container');
const BASE_API = 'https://rickandmortyapi.com/api/character/';

function buscar(event) {
    if (
        event.type === "keydown" && event.key === "Enter" ||
        event.type === "click"
    ) {
        obtenerPersonajes(null, document.getElementById('search').value);
    }
}

function generarPaginador({pages}, page = 1) {
    let buttonsHTML = '';
    for (let i = 1; i <= pages; i++)
        buttonsHTML += `<li class="page-item ${page === i ? "active" : null}">
            <a class="page-link"
                onclick="obtenerPersonajes(${i})"
                href="#"
            >${i}</a
        ></li>`;

    return `<nav aria-label="Paginador personajes">
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous" onclick="obtenerPersonajes(${page - 1})">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>                
            ${buttonsHTML}                      
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next" onclick="obtenerPersonajes(${page + 1})">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>`;
}

function generarListaPersonajes(personajes) {
    let listaPersonajesHTML = '';
    personajes.forEach(function (personaje) {
        listaPersonajesHTML +=
            `<section class="col-md-3">
                    <article class="panel panel-default">
                        <section class="panel-body">
                            <img src="${personaje.image}" alt="${personaje.origin.name}" class="img-responsive">
                            <h4>${personaje.name}</h4>
                            <small>${personaje.species}</small>
                            <br><br>
                            <ul class="list-group">
                                   <li class="list-group-item"><b>Estado</b>:<br>${personaje.status}</li>
                                   <li class="list-group-item"><b>Estado</b>:<br>${personaje.gender}</li>
                                   <li class="list-group-item"><b>Origen</b>:<br>${personaje.origin.name}</li>
                            </ul>
                        </section>
                    </article>
            </section>`;
    });

    return listaPersonajesHTML;
}

function obtenerPersonajes(page = false, search = false) {
    $.ajax(`${BASE_API}${page ? `/?page=${page}` : ''}${search ? `?name=${search}` : ''}`, {
        method: 'GET',
        success: function (response) {
            $CONTAINER.innerHTML =
                `<section class="col-md-12">
                <article class="alert alert-success">Se encontraron ${response.info.count} resultados</article>
                ${generarPaginador(response.info, page ? page : 1)}
            </section>
            ${generarListaPersonajes(response.results)}
            <section class="col-md-12">
                ${generarPaginador(response.info, page ? page : 1)}
            </section>`;
        }
    });

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 1000);
}

obtenerPersonajes();
