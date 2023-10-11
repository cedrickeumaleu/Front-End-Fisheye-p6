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

    // profil pour chaque photographe
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


//récupération du travail de chaque photographes et affichage
async function displayData(photographer) {
    // recupération du header photographers.html
    const photographersData = await getPagePhotographers()
    const photographerModel = photographerTemplate(photographer);
          photographerModel.getPageDOM(); // affichage de la modale photographer

    // media de chaque photographe en fonction de son Id
    const media = await getMediasByPhotographerId(photographer.id)
    
    const photographerName = photographer.name.split(" ")[0]//methode pour séparer le nom du prenom 
    const section = document.createElement("section")
    section.className = ('section-page')
    const main = document.querySelector('main')

    //  DOM d'affichage du tarif jourlier de chaque photographe
    const dailyPrice = document.querySelector('.dailyPrice')
    dailyPrice.innerText = (photographer.price + '€/Jour')
 
    // boucle forEach pour récupéré les médias dans le Templete
    media.forEach((media,index) => {
        const mediaModel = mediaTemplate(media, photographerName, index)

        // section d'affichage du contenu de chaque photographe
        const imageSection = mediaModel.getImageDOM();
        section.appendChild(imageSection)
        main.appendChild(section)
      
    })

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

  // function de gestion du carousel
  function carousel(){
      // gestion d'ouverture de la lightbox (carousel) DOM
      const modalLightbox = document.getElementById('lightbox')
      const mediaPhotographer = document.querySelectorAll('.media-photographer')
      const container = document.getElementById('container')
      const flecheG = document.querySelector('.fa-solid.fa-chevron-left')
      const flecheD = document.querySelector('.fa-solid.fa-chevron-right')
    
      //ouverture de la modale
      mediaPhotographer.forEach(image =>{
          image.addEventListener('click', (event) =>{
            if(!event.target.classList.contains('fa-heart')){
              modalLightbox.style.display='block'//affichage de la modale
              container.innerHTML= "" // vidé le container HTML
              const imageLightBox = image.cloneNode(true)
              // const imagealt = imageLightBox.getAttribute("alt")
              // imageLightBox.setAttribute("alt", imagealt.split(", closeup view")[0])
              
              container.appendChild(imageLightBox)//affichage de limage et le cloné
            }
             
                
          })         
      })
        
      //gestion des fleches du carousel
      flecheG.addEventListener('click', () =>{
            let numberImage = Number(container.querySelector('.media-photographer').getAttribute('data-id')) 
            
              if (numberImage >0){
                numberImage = numberImage-1
              }else {
                numberImage = media.length-1
              }
              
              container.innerHTML= ""
              const listeMedia = [...mediaPhotographer] 
              
              container.appendChild(listeMedia[numberImage].cloneNode(true))
      })
    
    
      flecheD.addEventListener('click', () =>{
            let numberImage = Number(container.querySelector('.media-photographer').getAttribute('data-id')) 
    
              if (numberImage !== media.length-1){
                numberImage = numberImage+1
              }else {
                numberImage = 0
              }
    
              container.innerHTML= ""
              const listeMedia = [...mediaPhotographer] 
              
              container.appendChild(listeMedia[numberImage].cloneNode(true))
      })
  }
  carousel()
    

  // methode de trie pour afficher les médias
  // selection d'option dans le champ de trie
  const sectionTrie = document.getElementById('trie')
     
  //au clic on change d'option et affiche les valeurs de l'option choisi
  sectionTrie.addEventListener('change', () =>{
      const selectOption = document.getElementById('trie').value
      
        switch (selectOption) {
          case 'date':
            // trie media par date avec la methode sort
            media.sort(function compare(a, b) {
              if (a.date < b.date)
                return -1;
              if (a.date > b.date )
                return 1;
              return 0;
            });
          break

          case 'popularite':
            // trie medias par likes
            media.sort(function compare(a, b) {
              if (a.likes < b.likes)
                return -1;
              if (a.likes > b.likes )
                return 1;
              return 0;
            });
          break

          case 'titre':
            // trie medias titre
            media.sort(function compare(a, b) {
              if (a.title < b.title)
                return -1;
              if (a.title > b.title )
                return 1;
              return 0;
            }); 
          break  
    
        }
      
        
        section.innerHTML = ""// vidé le champ d'affichage
        // faire une boucle dans les médias pour reafficher les média après le tyrie
        media.forEach((media,index) => {
            const mediaModel = mediaTemplate(media, photographerName, index)
    
            // section d'affichage du contenu de chaque photographe
            const imageSection = mediaModel.getImageDOM();
           
            section.appendChild(imageSection.cloneNode(true))
            main.appendChild(section)
          
        })
    //appel de la function carousel dans les trie
    carousel()
  })

  //gestion des likes sur chaque article 
    const likeElement = document.querySelectorAll('.fa-heart')
  
    likeElement.forEach((like) =>{
      like.addEventListener('click',(event) =>{
        const mediaPhotographer = event.target.closest('.media-photographer')
        const dataId = mediaPhotographer.getAttribute('data-id')
        if(!media[dataId]['isLiked']){
          media[dataId].likes = parseInt(media[dataId].likes) + 1
          media[dataId]['isLiked'] = true
          const nuberLikes = mediaPhotographer.querySelector('.nuber-likes')
          nuberLikes.innerText = media[dataId].likes
          
        }

      })
    })

  //total des likes d'un photographe
  const totalLikes = document.querySelector('.totalLikes')
  let sommeLikes = 0;
    media.forEach((media) =>{
      sommeLikes = sommeLikes + media.likes
      
    })
    totalLikes.innerHTML = sommeLikes
    
    const barStat = document.querySelector('.bar-stat')
    const icones = document.createElement('span')   
    icones.className = "fa-solid fa-heart"
    icones.style.color = 'black'

    const divStat = document.createElement('div')
    divStat.className = "bloc-stat"
    divStat.appendChild(icones)
    divStat.prepend(totalLikes)

    barStat.prepend(divStat)
      
}











