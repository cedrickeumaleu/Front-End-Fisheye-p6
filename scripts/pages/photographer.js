//Mettre le code JavaScript lié à la page photographer.htmt
// resultat: tout le fichier json
async function getPagePhotographers() {  
    
    // récupération du fichier json avec la method fetch
   const photographersPage = await fetch('data/photographers.json')
   if (photographersPage.ok === true){
     // et bien retourner le tableau photographers seulement une fois récupéré
    return photographersPage.json();
   }
   throw new Error('impossible de contacter le serveur')
      
}

//resultat:en fontion d'un id, renvoie un objet avec les info du photographe
async function getPhotographerById(id){
    const photographersData = await getPagePhotographers()
    let findPhotographer;
    photographersData.photographers.forEach((photographer) =>{
        
       if (photographer.id == id){
        findPhotographer = photographer
    
       }
    })
    return findPhotographer
}

async function init(){
    const params = (new URL(document.location)).searchParams;
    const id = params.get('id'); 
   const photographer =  await getPhotographerById(id)
   displayData(photographer)
   
}
init()


// //récupération du travail de chaque photographes
async function displayData(photographer) {
    // recupération du header photographers.html
    const photographersData = await getPagePhotographers()
    const photographerModel = photographerTemplate(photographer);
          photographerModel.getPageDOM(); // affichage de la modele photographer

    const media = await getMediasByPhotographerId(photographer.id)
           
    
    const photographerName = photographer.name.split(" ")[0]//methode pour séparer le nom du prenom 
    const section = document.createElement("section")
    const main = document.querySelector('main') 
    media.forEach(media => {
        const mediaModel = mediaTemplate(media, photographerName)
        const imageSection = mediaModel.getImageDOM();
        section.appendChild(imageSection)
        main.appendChild(section)
    })
       
}


//resultat:en fontion de photographerId, renvoie un objet avec les info du media de chaque photographe
async function getMediasByPhotographerId(photographerId){
    const photographersData = await getPagePhotographers()
    
    let findMedias =[];
    photographersData.media.forEach((media) =>{
        
       if (media.photographerId == photographerId){
        
        findMedias.push(media)
        
       }
    })
    return findMedias
}








