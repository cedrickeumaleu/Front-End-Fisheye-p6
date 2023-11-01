function photographerTemplate(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  //const de récupération de la photo de profil de chaque photographe
  const picture = `assets/photographers/${portrait}`;
  // const de récupération de l'image média

  function getUserCardDOM() {
    //affichage du profil de chaque photographe
    // création du champ article pour inséré les élements provenant du json
    const article = document.createElement("article");
    // varible de creation de espace img pour inséré les photos
    const img = document.createElement("img");
    img.setAttribute("src", picture);

    // variable pour recupérer le nom du photographe
    const h2 = document.createElement("h2");
    h2.textContent = name;

    const p = document.createElement("p");
    p.textContent = `${city},${country}`;

    const taglineElement = document.createElement("p");
    taglineElement.textContent = tagline;
    taglineElement.style.color = "black";

    const priceElement = document.createElement("p");
    priceElement.textContent = `${price}€/jour`;
    priceElement.style.color = "gray";

    // const de création du lien qui dirige vers l'id ou page de chaque photographe
    const a = document.createElement("a");
    a.href = `photographer.html?id=${id}`;
    a.setAttribute("aria-label", name);
    //récupération de tous les articles pour les contenires dans l'url(a)
    a.appendChild(article);

    //affichage du contenu des articles
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(taglineElement);
    article.appendChild(priceElement);
    return a;
  }

  // affichage de la page photographer
  function getPageDOM() {
    // récupération de section header
    const articlePage = document.querySelector(".photographe-header");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);

    // variable pour recupérer le nom du photographe
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.style.color = "#D3573C";
    // variable pour recupérer le pays
    const p = document.createElement("p");
    p.textContent = `${city}, ${country}`;
    p.style.color = "#901C1C";

    const taglineElement = document.createElement("p");
    taglineElement.textContent = tagline;
    taglineElement.style.color = "black";

    //création d'une div et lui passer les élements
    const carder = document.createElement("div");
    carder.appendChild(h2);
    carder.appendChild(p);
    carder.appendChild(taglineElement);

    articlePage.appendChild(img); //posissionné l'img en dernière position dans le blog
    articlePage.prepend(carder); //posissionné le contenu de carder en avant dans le blog

    const divTrie = document.querySelector(".contene-trie");
    const main = document.getElementById("main"); //div pour contenir toute la page
    main.appendChild(articlePage);
    main.appendChild(divTrie);

    return main;
  }

  return { name, picture, getUserCardDOM, getPageDOM, price };
}
export { photographerTemplate };
