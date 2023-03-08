const carro = document.getElementById("carroHtml");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carroJs = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "carta";
    content.innerHTML = `
    <img src ="${product.img}"> 
    <h3>${product.nombre}</h3>
    <p class="precio">$ ${product.precio} </p>
    `;
    carro.append(content);
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
    content.append(comprar);
    comprar.addEventListener("click", () => {
        const repeat = carroJs.some(
            (repeatProduct) => repeatProduct.id === product.id
        );
        if (repeat) {
            carroJs.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carroJs.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
            carritoCounter();
            saveLocal();
        }
    });
});
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carroJs));
};

JSON.parse(localStorage.getItem("carrito"));
