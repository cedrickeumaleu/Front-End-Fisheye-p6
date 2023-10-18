import { photographerTemplate } from "../templates/photographer.js";
async function getPhotographers() {
  // récupération du fichier json avec la method fetch
  const photographers = await fetch("data/photographers.json");
  if (photographers.ok === true) {
    // et bien retourner le tableau photographers seulement une fois récupéré
    return photographers.json();
  }
  throw new Error("impossible de contacter le serveur");
}

async function displayData(photographers) {
  // recupération de la section photographers dans le html
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
