//DOM Elements

const modalLightbox = document.getElementById('lightbox')
const openCarousel = document.querySelectorAll('.media-photographer')
const closeCarousel = document.getElementById('closeDialog')
  
	     
//fermeture de la modale
closeCarousel.addEventListener("click", () => {
    modalLightbox.style.display = "none";
}) 

// traitement du lightbox carousel


