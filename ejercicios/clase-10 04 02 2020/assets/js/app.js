$('#form-login').submit(function (e) {
    e.preventDefault();
    if (
        $('#email').val() !== '' &&
        $('#password').val() !== ''
    ) {
        localStorage.email = $('#email').val();
        location.href = 'index.html';
    } else {
        alert('Datos obligatorios')
    }
})

function generarContenido(movies) {
    let html = '';

    movies.forEach(movie => {
        html += `
        <section class="ui card movie">            
            <article class="image">
                <img src="${movie.image}">
            </article>
            <article class="content">
                <h3 class="header">${movie.title}</h3>                
                <section class="description">
                    <p>${movie.description}</p>
                </section>
            </article>`;

        if (movie.rating) {
            html += `<article class="extra">
              Rating:              
               ${generadorRating(movie.rating)}
            </article>`;
        }

        html += `</section>`;


    });

    return html;
}

function validarSesion() {
    if (localStorage.email) {
        $('#btn-ingreso').hide();
        $('#btn-salir').show();
        $('#email').html(localStorage.email);
    } else {
        $('#btn-ingreso').show();
        $('#btn-salir').hide();
        $('#email').html('');
    }
}

function salir() {
    if (localStorage.email) {
        localStorage.clear();
        $('#btn-ingreso').show();
        $('#btn-salir').hide();
        $('#email').html('');
    }
}

function generadorRating(cantidad) {
    let html = '';
    for (let i = 0; i < cantidad; i++) {
        html += `<i class="star icon"></i>`;
    }
    return html;
}

function renderizarContenido(contenedor, contenido) {
    $(contenedor).html(contenido);
}

const proximosEstrenos = [
    {
        title: "Los locos Addams",
        image: "imgs/los-locos-addams-220x320.jpg",
        description: "La macabra familia se muda a los suburbios donde la amistad de Merlina con la hija de una hostil y conformista anfitriona de un reality show exacerba el conflicto entre las ...",
        rating: 4,
    },
    {
        title: "Terminator: Destino oculto",
        image: "imgs/terminator-destino-oculto-4k-220x320.jpg",
        description: "Una humana mejorada y Sarah Connor deben detener a un Terminator líquido avanzado que está buscando asesinar a una joven, cuyo destino es crítico para la raza ...",
        rating: 3
    },
    {
        title: "Doctor Sueño",
        image: "imgs/doctor-sleep-4k-220x320.jpg",
        description: "Años después de los eventos de El Resplandor, el ahora adulto Dan Torrance debe proteger a una niña con poderes similares de un culto conocido como The True Knot, quienes cazan niños con ...",
        rating: 4
    },
    {
        title: "El buen mentiroso",
        image: "imgs/el-buen-mentiroso-220x320.jpg",
        description: "El consumado estafador Roy Courtnay ha puesto sus ojos en su último objetivo: la reciente viuda Betty McLeish, quien vale millones. Pero esta vez, lo que debería haber sido una simple ...",
        rating: 5
    },
];

const cartelera = [
    {
        title: "El buen mentiroso",
        image: "imgs/el-buen-mentiroso-220x320.jpg",
        description: "El consumado estafador Roy Courtnay ha puesto sus ojos en su último objetivo: la reciente viuda Betty McLeish, quien vale millones. Pero esta vez, lo que debería haber sido una simple ...",
        rating: 5
    },
    {
        title: "Doctor Sueño",
        image: "imgs/doctor-sleep-4k-220x320.jpg",
        description: "Años después de los eventos de El Resplandor, el ahora adulto Dan Torrance debe proteger a una niña con poderes similares de un culto conocido como The True Knot, quienes cazan niños con ...",
        rating: 4
    },
    {
        title: "Terminator: Destino oculto",
        image: "imgs/terminator-destino-oculto-4k-220x320.jpg",
        description: "Una humana mejorada y Sarah Connor deben detener a un Terminator líquido avanzado que está buscando asesinar a una joven, cuyo destino es crítico para la raza ...",
        rating: 3
    },
    {
        title: "Los locos Addams",
        image: "imgs/los-locos-addams-220x320.jpg",
        description: "La macabra familia se muda a los suburbios donde la amistad de Merlina con la hija de una hostil y conformista anfitriona de un reality show exacerba el conflicto entre las ...",
        rating: 4,
    },
    {
        title: "Terminator: Destino oculto",
        image: "imgs/terminator-destino-oculto-4k-220x320.jpg",
        description: "Una humana mejorada y Sarah Connor deben detener a un Terminator líquido avanzado que está buscando asesinar a una joven, cuyo destino es crítico para la raza ...",
        rating: 3
    },
    {
        title: "Los locos Addams",
        image: "imgs/los-locos-addams-220x320.jpg",
        description: "La macabra familia se muda a los suburbios donde la amistad de Merlina con la hija de una hostil y conformista anfitriona de un reality show exacerba el conflicto entre las ...",
        rating: 4,
    },
    {
        title: "El buen mentiroso",
        image: "imgs/el-buen-mentiroso-220x320.jpg",
        description: "El consumado estafador Roy Courtnay ha puesto sus ojos en su último objetivo: la reciente viuda Betty McLeish, quien vale millones. Pero esta vez, lo que debería haber sido una simple ...",
        rating: 5
    },
    {
        title: "Doctor Sueño",
        image: "imgs/doctor-sleep-4k-220x320.jpg",
        description: "Años después de los eventos de El Resplandor, el ahora adulto Dan Torrance debe proteger a una niña con poderes similares de un culto conocido como The True Knot, quienes cazan niños con ...",
        rating: 4
    },
];

renderizarContenido('#proximos-estrenos', generarContenido(proximosEstrenos));
renderizarContenido('#cartelera', generarContenido(cartelera));
validarSesion();
