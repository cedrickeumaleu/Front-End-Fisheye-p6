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

    const photographerModel = photographerTemplate(photographer);
          photographerModel.getPageDOM();
    
   
}



