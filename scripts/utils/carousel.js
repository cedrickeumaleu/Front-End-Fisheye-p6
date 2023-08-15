//DOM Elements
const modalCarousel = document.createElement("div");
const openCarousel = document.createElement("div")
const closeCarousel = document.createElement("div")
const body = document.querySelector("body")

//ouverture de la modal
openCarousel.forEach((btn) => btn.addEventListener("click", displayModal));
function displayModal() {
	modalCarousel.style.display = "block";
    body.classList.add('modalOpen')
}

//fermeture de la modal
closeCarousel.forEach((btn) => btn.addEventListener("click", closeModal))
function closeModal() {
    modalCarousel.style.display = "none";
    body.classList.remove('modalOpen')
}