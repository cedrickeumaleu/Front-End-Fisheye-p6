//DOM Elements

const modalLightbox = document.getElementById("lightbox");
const closeCarousel = document.getElementById("closeDialog");

//fermeture de la modale
closeCarousel.addEventListener("click", () => {
  modalLightbox.style.display = "none";
});

closeCarousel.addEventListener("keydown", (event) => {
  if(event.keyCode === 13) {
    modalLightbox.style.display = "none";
  }
});