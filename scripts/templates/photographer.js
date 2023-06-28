function photographerTemplate(data) {
    const { name, portrait, city,country, tagline, price, id } = data;
    
    //const de récupération de la photo de profil de chaque photographe
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
    
        // création du champ article pour inséré les élements provenant du json
        const article = document.createElement('article');
        // varible de creation de espace img pour inséré les photos
        const img = document.createElement('img');
        img.setAttribute("src", picture)
    
        // variable pour recupérer le nom du photographe
        const h2 = document.createElement('h2');
        h2.textContent = name;
        // variable pour recupérer le pays
        const p = document.createElement('p')
        p.textContent = `${city},${country}`
       
        const taglineElement = document.createElement('p')
        taglineElement.textContent = tagline
        taglineElement.style.color = 'black'

        const priceElement = document.createElement('p')
        priceElement.textContent = `${price}€/jour`
        priceElement.style.color = 'gray'
        
        // const de création du lien qui dirige vers l'id ou page de chaque photographe
        const a = document.createElement('a')
        a.href = `photographer.html?id=${id}`
        //récupération de tous les articles pour les contenires dans l'url(a)
        a.appendChild(article);

        //affichage du contenu des articles
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p)
        article.appendChild(taglineElement)
        article.appendChild(priceElement)
        return (a);

    }
    
    function getUserHeader(){
       
        const article = document.createElement('article');

        // variable pour recupérer le nom du photographe
        const namePhotographer = document.createElement('h2');
        namePhotographer.textContent = name;
        // variable pour recupérer le pays
        const pays = document.createElement('p')
        pays.textContent = `${city},${country}`
        
        const taglineElement = document.createElement('p')
        taglineElement.textContent = tagline
        taglineElement.style.color = 'black'



        article.appendChild(namePhotographer);
        article.appendChild(pays)
        article.appendChild(taglineElement)
        return(article)

    }

    return { name, picture, getUserCardDOM, getUserHeader }

    
}

