function cotiz() {
    let tipo = prompt("Quiere que el servicio sea a DOMICILIO o de RECOGIDA ");
    let cotizacion =
        "A ingresado incorrectamente una de las palabras clave, vuelva a presional el boton para comenzar de nuevo";
    if (
        (tipo === "RECOGIDA" && (cotizacion = 1.5)) ||
        (tipo === "DOMICILIO" && (cotizacion = 1))
    ) {
        cotizacion *= getPrecioLavadoV2(precios);
        cotizacion
            ? alert("Su cotizacion aproximada es de $" + cotizacion)
            : cotizacion;
    } else {
        alert(cotizacion);
    }
}
function getPrecioLavadoV2(propiedad) {
    return propiedad
        ? propiedad.promptText || (propiedad.name === "OTRO" && precios.OTRO())
            ? getPrecioLavadoV2(propiedad[prompt(propiedad.promptText)])
            : propiedad
        : precios.DEFAULT();
}
const precios = {
    HOGAR: {
        SILLON: 6000,
        COLCHON: 5400,
        ALFOMBRA: 8000,
        promptText:
            "Que desea lavar de su HOGAR, puede elegir entre SILLON, COLCHON, ALFOMBRA",
    },
    NAUTICO: {
        INTERIOR: 8000,
        ALMOHADONES: 5000,
        ALFOMBRA: 6000,
        promptText:
            "Que desea lavar de su embarcacion NAUTICA, puede elegir entre INTERIOR, ALMOHADONES, ALFOMBRA",
    },
    AUTOMOVIL: {
        COMPLETO: 8000,
        BUTACAS: 5000,
        ALFOMBRA: 6000,
        promptText:
            "Como desea lavar su AUTOMOVIL, puede elegir entre COMPLETO, BUTACAS, ALFOMBRA",
    },
    promptText:
        "Ingrese que quiere lavar, puede elegir entre HOGAR, NAUTICO, AUTOMOVIL, OTRO",
    OTRO: () =>
        alert(
            "Consideramos OTRO como una rama principalmente de oficios, por lo que recomendamos contactarse a traves de nuestro numero ya que la cotizacion puede variar abruptamente"
        ),
    otro: {
        alertText:
            "Consideramos OTRO como una rama principalmente de oficios, por lo que recomendamos contactarse a traves de nuestro numero ya que la cotizacion puede variar abruptamente",
    },
    default:
        "A ingresado incorrectamente una de las palabras clave, vuelva a presional el boton para comenzar de nuevo",
    DEFAULT: () =>
        alert(
            "A ingresado incorrectamente una de las palabras clave, vuelva a presional el boton para comenzar de nuevo"
        ),
};
//CODIGO VIEJO
//ffunction getPrecioLavado() {
//    let seccion = prompt(
//        "Ingrese que quiere lavar, puede elegir entre HOGAR, NAUTICO, AUTOMOVIL, OTRO"
//    );
//    if (seccion === "HOGAR") {
//        let lavar = prompt(
//            "Que desea lavar de su HOGAR, puede elegir entre SILLON, COLCHON, ALFOMBRA"
//        );
//        if (lavar === "SILLON") {
//            return 6000;
//        } else if (lavar === "COLCHON") {
//            return 5400;
//        } else if (lavar === "ALFOMBRA") {
//            return 8000;
//        } else {
//            alert(
//                "A ingresado incorrectamente una de las palabras clave, vuelva a presional el boton para comenzar de nuevo"
//            );
//        }
//    } else if (seccion === "NAUTICO") {
//        let lavar = prompt(
//            "Que desea lavar de su embarcacion NAUTICA, puede elegir entre INTERIOR, ALMOHADONES, ALFOMBRA"
//        );
//        if ((lavar = "INTERIOR")) {
//            return 8000;
//        } else if (lavar === "ALMOHADONES") {
//            return 5000;
//        } else if (lavar === "ALFOMBRA") {
//            return 6000;
//        } else {
//            alert(
//                "A ingresado incorrectamente una de las palabras clave, vuelva a presional el boton para comenzar de nuevo"
//            );
//        }
//    } else if (seccion === "AUTOMOVIL") {
//        let lavar = prompt(
//            "Como desea lavar su AUTOMOVIL, puede elegir entre COMPLETO, BUTACAS, ALFOMBRA"
//        );
//        if (lavar === "COMPLETO") {
//            return 4500;
//        } else if (lavar === "BUTACAS") {
//            return 3500;
//        } else if (lavar === "ALFOMBRA") {
//            return 2000;
//        } else {
//            alert(
//                "A ingresado incorrectamente una de las palabras clave, vuelva a presional el boton para comenzar de nuevo"
//            );
//        }
//    } else if (seccion === "OTRO") {
//        alert(
//            "Consideramos OTRO como una rama principalmente de oficios, por lo que recomendamos contactarse a traves de nuestro numero ya que la cotizacion puede //variar abruptamente"
//        );
//    } else {
//        alert(
//            "A ingresado incorrectamente una de las palabras clave, vuelva a presional el boton para comenzar de nuevo"
//        );
//    }
//}}
