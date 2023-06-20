function photographerTemplate(data) {
    const { name, portrait, city,country } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        // varible pour récupérer la photo de profil
        const img = document.createElement('img');
        img.setAttribute("src", picture)
    
        // variable pour recupérer le nom du photographe
        const h2 = document.createElement('h2');
        h2.textContent = name;
        // variable pour recupérer le pays
        const p = document.createElement('p')
        p.textContent = city,
        p.textContent = country,
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p)
        return (article);
    }
    return { name, picture, getUserCardDOM }

    
}

