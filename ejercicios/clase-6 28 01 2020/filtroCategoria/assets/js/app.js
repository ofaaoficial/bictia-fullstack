document.querySelector('#filtro').addEventListener('change', function (event) {
    event.preventDefault();

    let filtro = this.value;

    if (filtro !== 'todo') {
        document.querySelectorAll(`.w-3:not([data-category="${filtro}"])`)
            .forEach(function (element) {
                element.style.display = 'none';
            });

        document.querySelectorAll(`.w-3[data-category="${filtro}"]`)
            .forEach(function (element) {
                element.style.display = 'block';
            });
    } else {
        document.querySelectorAll(`.w-3`)
            .forEach(function (element) {
                element.style.display = 'block';
            });
    }

});
