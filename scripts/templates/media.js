function mediaTemplate(data, namePhotographer){
    const { id, photographerId, image, likes, title, video} = data;
    
    //  resultat : retoune les image du média
    function getImageDOM(){
        
        // récuprération de section media

          //cration d'un carder pour présenté les media
        const carderMedia = document.createElement('article')
        const carousel = document.createElement('div')
        //les medias images
        if (image){
            const imageMedia = `../../assets/images/${namePhotographer}/${image}`; // image des medias
            
            const images = document.createElement('img');
            images.setAttribute("src", imageMedia)
    
            const titre = document.createElement('p')
            titre.textContent = title
            titre.style.color = '#901C1C'

            const icone = document.createElement('i')
            icone.className = "fa-solid fa-heart"
            icone.textContent = likes
            icone.style.color = '#901C1C'
           

            const footerCard = document.createElement('span')
            footerCard.appendChild(titre)
            footerCard.appendChild(icone)
            
            carderMedia.appendChild(images)
            carderMedia.appendChild(footerCard) 
            carousel.appendChild(carderMedia) 
        }

        //les medias vidéos
        if (video){
            const videoMedia = `../../assets/images/${namePhotographer}/${video}`;// video des medias
        
        const videos = document.createElement('video');
            videos.setAttribute("src", videoMedia)
            videos.setAttribute("controls", true)

        const titre = document.createElement('p')
            titre.textContent = title
            titre.style.color = '#901C1C'

        const icone = document.createElement('i')
            icone.textContent = likes
            icone.className = "fa-solid fa-heart"
            icone.style.color = '#901C1C'

        const footerCard = document.createElement('span')
            footerCard.appendChild(titre)
            footerCard.appendChild(icone)    
        
        carderMedia.appendChild(videos)
        carderMedia.appendChild(footerCard) 
        carousel.appendChild(carderMedia)
        }
        

       return carousel
    }


    function getVideoDOM(){

    }
    
    return { photographerId, image, getImageDOM, getVideoDOM, }
}