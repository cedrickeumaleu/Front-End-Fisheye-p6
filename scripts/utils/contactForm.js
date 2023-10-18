//DOM Elements
const modal = document.getElementById("contact_modal");
const titleModal = modal.querySelector("h2");
const modalBtn = document.querySelectorAll(".contact_button");
const closeBtn = document.querySelectorAll(".close");

//exportation de la function changeContactFormName
//pour récupérer le (photographername)
export function changeContactFormName(photographerName) {
  titleModal.innerHTML = "Contactez-moi " + photographerName;
}

//ouverture de la modal
modalBtn.forEach((btn) => btn.addEventListener("click", displayModal));
function displayModal() {
  modal.style.display = "block";
  closeBtn[0].focus();
}

//fermeture de la modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeBtn.forEach((btn) =>
  btn.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 13) {
      closeModal();
    }
  })
);
function closeModal() {
  modal.style.display = "none";
}

//création des variables des champs du formulaire
const firstName = document.getElementById("first");
firstName.setAttribute("aria-label", "Firs name");
const lastName = document.getElementById("last");
lastName.setAttribute("aria-label", "Last name");
const myEmail = document.getElementById("email");
myEmail.setAttribute("aria-label", "Email");
const myMessage = document.getElementById("message");
myMessage.setAttribute("aria-label", "Your message");

// On récupère une référence au formulaire HTML
const form = document.getElementById("myForm");

// soumition du formulaire
window.addEventListener("load", () => {
  function sendData() {
    // on crée l'objet FormData en le rattachant
    // à l'élément de formulaire
    const FD = new FormData(form);
    for (const value of FD.values()) {
      console.log(value); // pour afficher les valeurs du formulaire
    }
  }

  // On ajoute un gestionnaire d'évènement 'submit'
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    sendData();
    closeModal();
  });
});
