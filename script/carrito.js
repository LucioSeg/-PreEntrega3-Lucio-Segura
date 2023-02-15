let cepillo = 0;
let guantes = 0;
let perfumes = 0;
let limpias = 0;
let quitam = 0;
let barbijos = 0;
let precio = 0;
const productos = [
    { nombre: "Cepillo", precio: 120 },
    { nombre: "LimpiaTapizados", precio: 80 },
    { nombre: "Perfume", precio: 60 },
    { nombre: "Barbijo", precio: 20 },
    { nombre: "Guantes", precio: 40 },
    { nombre: "Quitamanchas", precio: 70 },
];

function cepill() {
    cepillo = 1 + cepillo;
    precio = precio + 120;
}

function barbijo() {
    barbijos = 1 + barbijos;
    precio = precio + 20;
}

function limpia() {
    limpias = 1 + limpias;
    precio = precio + 80;
}

function perfume() {
    perfumes = 1 + perfumes;
    precio = precio + 60;
}

function quita() {
    quitam = 1 + quitam;
    precio = precio + 70;
}

function guante() {
    guantes = 1 + guantes;
    precio = precio + 30;
}
function Calcular() {
    alert(
        "El costo total de su compra es de: $" +
            precio +
            ". Esta incluye: " +
            guantes +
            " Guantes, " +
            perfumes +
            " Perfumes, " +
            quitam +
            " Quitamanchas, " +
            limpias +
            " LimpiaTapizados, " +
            barbijos +
            " Barbijos y " +
            cepillo +
            " Cespillos"
    );
}
function Borrar() {
    cepillo = 0;
    guantes = 0;
    perfumes = 0;
    limpias = 0;
    quitam = 0;
    barbijos = 0;
    precio = 0;
}
