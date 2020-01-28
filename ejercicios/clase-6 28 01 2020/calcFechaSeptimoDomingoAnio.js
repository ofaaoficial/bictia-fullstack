/**
 * Calcular fecha del septimo domingo del año.
 * No tenia conocimiento el funcionamiento la function {Date}.setDate()
 */
const calcSeptimoDomingoAnio = (anio) => {
    console.time('Solucion 1');
    let septimoDomingo = null;
    let contadorDomingos = 1;

    for (let contadorMeses = 0; contadorMeses < 2; contadorMeses++) {
        let cantidadDiasMes = new Date(anio, contadorMeses, 0).getDate();
        for (let contadorDias = 1; contadorDias <= cantidadDiasMes; contadorDias++) {
            if (new Date(anio, contadorMeses, contadorDias).getDay() === 0) {
                if (contadorDomingos === 7) {
                    septimoDomingo = new Date(anio, contadorMeses, contadorDias);
                    break;
                } else contadorDomingos++;
            }
        }
    }
    console.timeEnd('Solucion 1');
    return septimoDomingo;
};

/**
 * Solucion 2
 */
const calcSeptimoDomingoAnio2 = (anio) => {
    console.time('Solucion 2');
    let contadorDomingos = 0;
    let fecha = new Date(anio, 0, 1);

    while (contadorDomingos < 7) {
        fecha.setDate(fecha.getDate() + 1);

        if (fecha.getDay() === 0)
            contadorDomingos++;
    }
    console.timeEnd('Solucion 2');
    return fecha;
};

/**
 * Solucion 3
 */
const calcSeptimoDomingoAnio3 = (anio) => {
    console.time('Solucion 3');
    let contadorDomingos = 0;
    let fecha = new Date(anio, 0, 1);
    let primerDomingo = false;

    while (primerDomingo) {
        fecha.setDate(fecha.getDate() + 1);
        if (fecha.getDay() === 0)
            primerDomingo = fecha;
    }
    console.log(primerDomingo);

    return fecha;


    console.timeEnd('Solucion 3');
};

console.log(calcSeptimoDomingoAnio(2020));
console.log(calcSeptimoDomingoAnio2(2020));
console.log(calcSeptimoDomingoAnio3(2020));
