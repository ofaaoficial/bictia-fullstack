/**
 * Mejorar la funcion calcularDiferenciaEnAnios para recibir un tipo (seg, min, h, a) y retornar unas respuesta segun el tipo que se reciba.
 */
function calcularDiferenciaEnAnios(fecha1, fecha2) {
    var diferencia = Math.abs(fecha1 - fecha2);
    return Math.floor(diferencia / 1000 / 60 / 60 / 24 / 365);
}

const calcularDiferenciaFechas = (fecha_1, fecha_2, tipo = 'años') => {
    let diferencia = Math.abs(fecha_1 - fecha_2);
    switch (tipo) {
        case 'milisegundos':
            return Math.floor(diferencia);
        case 'segundos':
            return Math.floor(diferencia / 1000);
        case 'minutos':
            return Math.floor(diferencia / 1000 / 60);
        case 'horas':
            return Math.floor(diferencia / 1000 / 60 / 60);
        case 'dias':
            return Math.floor(diferencia / 1000 / 60 / 60 / 24);
        case 'años':
            return Math.floor(diferencia / 1000 / 60 / 60 / 24 / 365);
    }
};

const fecha1 = new Date('1999-09-04');
const fecha2 = new Date();

console.log(
    calcularDiferenciaEnAnios(fecha1, fecha2),
    calcularDiferenciaFechas(fecha1, fecha2)
);
