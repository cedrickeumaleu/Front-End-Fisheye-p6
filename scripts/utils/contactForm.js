
//DOM Elements
const modal = document.getElementById("contact_modal");
const modalBtn = document.querySelectorAll(".contact_button")
const closeBtn = document.querySelectorAll(".close")
const body = document.querySelector("body")

//ouverture de la modal
modalBtn.forEach((btn) => btn.addEventListener("click", displayModal));
function displayModal() {
	modal.style.display = "block";
    body.classList.add('modalOpen')
}

//fermeture de la modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))
function closeModal() {
    modal.style.display = "none";
    body.classList.remove('modalOpen')
}

//création des variables des champs du formulaire
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const myEmail = document.getElementById('email');
const myMessage = document.getElementById('message');

// On récupère une référence au formulaire HTML
const form = document.getElementById("myForm");

// soumition du formulaire
window.addEventListener("load", () => {
  function sendData() {
    const XHR = new XMLHttpRequest();
  
    // on crée l'objet FormData en le rattachant
    // à l'élément de formulaire
    const FD = new FormData(form);
    console.log(FD)// pour afficher les valeurs du formulaire

  }
  
  // On ajoute un gestionnaire d'évènement 'submit'
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    sendData();
  });
});