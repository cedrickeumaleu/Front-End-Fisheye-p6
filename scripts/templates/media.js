function mediaTemplate(data){
    const { id, photographerId, image, likes, title} = data;

    //  resultat : retoune les image du média
    function getImageDOM(){
        
        // récuprération de section media
        const articleMedia = document.createElement('div')

        const imageMedia = `assets/images/${photographerId}/${image}`;
        
        //cration d'un carder pour présenté les media
        const carderMedia = document.createElement('div')
        
        // image des medias
        const images = document.createElement('img');
        images.setAttribute("src", imageMedia)

        const titre = document.createElement('p')
        titre.textContent = title
        
        carderMedia.appendChild(images)
        carderMedia.appendChild(titre)
        
        articleMedia.appendChild(carderMedia)

        const main = document.getElementById('main')
        main.appendChild(articleMedia)
        return(main)
    }


    function getVideoDOM(){

    }
    
    return { photographerId, image, getImageDOM, getVideoDOM, }
}