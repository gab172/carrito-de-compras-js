//variables
const carritoContainer = document.querySelector("#carrito-container");
const eliminar = document.querySelector("#eliminar");
const containerCard = document.querySelector("#container-card");
let carrito = [];

//eventos
eventos();
function eventos() {
	containerCard.addEventListener("click", datosArticulo);

	carritoContainer.addEventListener("click", e => e.target.classList.contains("card__btn") ? e.target.parentElement.remove() : null);
}

function datosArticulo(e) {
	e.preventDefault();

	if (e.target.classList.contains("card__btn")) {
		const articulo = e.target.parentElement
		agregarArticulo(articulo)
	}
}

function agregarArticulo(articulo) {
	const infoArticulo = {
		img: articulo.querySelector("img").src,
		titulo: articulo.querySelector("h2").textContent,
	}

	carrito = [...carrito, infoArticulo]

	crearHTML()
}

function crearHTML() {

	carritoContainer.innerHTML = "";

	carrito.forEach(articulo => {

		const { img, titulo } = articulo

		const cardDiv = document.createElement("div");
		cardDiv.classList.add("carrito");

		cardDiv.innerHTML = `
			<img src=${img} alt="aspiradora" class="card__img">
			<h2 class="card__title">${titulo}</h2>
			<p class="card__price" id="eliminar">Eliminar</p>
			<a href="#" class="card__btn eliminar">Eliminar</a>
		`
		carritoContainer.appendChild(cardDiv);
	})
}