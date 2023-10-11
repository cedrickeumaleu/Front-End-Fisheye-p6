function mediaTemplate(data, namePhotographer, index){
    const { id, photographerId, image, likes, title, video, date, price} = data;
    
    //  resultat : retoune les image du média
    function getImageDOM(){
        
        // récuprération de section media

          //cration d'un carder pour présenté les media
        const carderMedia = document.createElement('article')
        carderMedia.setAttribute('data-id', index)
        carderMedia.setAttribute('media-id', id)

        //les medias images
        if (image){
            const imageMedia = `../../assets/images/${namePhotographer}/${image}`; // image des medias
            
            const images = document.createElement('img');
            images.setAttribute("src", imageMedia)
            carderMedia.className = "media-photographer"
            images.className = "photo"
            images.setAttribute("alt", title + ", closeup view")
    
            const titre = document.createElement('p')
            titre.textContent = title
            titre.style.color = '#901C1C'
            

            const icone = document.createElement('i')
            icone.className = "fa-solid fa-heart"
            icone.style.color = '#901C1C'
            icone.setAttribute("aria-label", "likes")
            
            const nuberLikes = document.createElement('span')
            nuberLikes.className = "nuber-likes"
            nuberLikes.textContent = likes
            nuberLikes.style.color = '#901C1C'
        
            const footerCard = document.createElement('div')
            footerCard.appendChild(titre)
            footerCard.appendChild(icone)
            footerCard.appendChild(nuberLikes)

            carderMedia.appendChild(images)
            carderMedia.appendChild(footerCard) 
             
        }

        //les medias vidéos
        if (video){
            const videoMedia = `../../assets/images/${namePhotographer}/${video}`;// video des medias
        
        const videos = document.createElement('video');
            videos.setAttribute("src", videoMedia)
            carderMedia.className = "media-photographer"
            videos.setAttribute("controls", true)

        const titre = document.createElement('p')
            titre.textContent = title
            titre.style.color = '#901C1C'

        const icone = document.createElement('i')   
            icone.className = "fa-solid fa-heart"
            icone.style.color = '#901C1C'

        const nuberLikes = document.createElement('span')
            nuberLikes.textContent = likes
            nuberLikes.style.color = '#901C1C'

        const footerCard = document.createElement('div')
            footerCard.appendChild(titre)
            footerCard.appendChild(icone)
            footerCard.appendChild(nuberLikes)    
        
        carderMedia.appendChild(videos)
        carderMedia.appendChild(footerCard) 
        
        }
        

       return carderMedia
    }

       
                
    return { photographerId, image, getImageDOM}
}