//DOM Elements

const modalLightbox = document.getElementById("lightbox");
const closeCarousel = document.getElementById("closeDialog");

//fermeture de la modale
closeCarousel.addEventListener("click", () => {
  modalLightbox.style.display = "none";
});
