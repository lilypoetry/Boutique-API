/**
 * API Fake Boutique
 */
/**
 * Création du tableau
 */
const createTable = (products) =>
{
    // Création d'une balise (<body)
    const body = document.querySelector('body');
     
    // Creation d'un tableau HTML
    const table = document.createElement('table');   
    table.classList.add('table');

    products.forEach(product =>
    {
        // Création une ligne de tableau (<tr>)
        const ligne = document.createElement('tr');

        // Création une colonne de tableau (<td>)
        const photo = document.createElement('td');

        // Créer une image (<img src="" alt="">)
        const img = document.createElement('img');
        img.classList.add('w-50');
        img.src = product.image;
        img.alt = "Photo of product";

        // Ajoute l'image dans la colonne "photo"            
        photo.append(img);

        // Création une colonne de tableau (<td>)
        const productName = document.createElement('td');
        productName.innerText = product.title;
        
        // Création une colonne de tableau (<td>)
        const productPrice = document.createElement('td');
        productPrice.innerText = product.price;

        // Création une colonne de tableau (<td>)
        const productDetails = document.createElement('td');
        productDetails.innerText = product.description;

        // Ajoute les cplonnes à la ligne
        ligne.appendChild(photo);
        ligne.appendChild(productName);
        ligne.appendChild(productPrice);
        ligne.appendChild(productDetails);

        // Ajoute la ligne au tableau
        table.appendChild(ligne);
    });
    body.appendChild(table);
};

/**
 * Affiche tous les products 
 */
let allProducts = () =>
{
    // Démarrage un texte de chargement
    const load = document.querySelector('#load');
    load.classList.remove('d-none');

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products =>
            {
                // Efface le texte de chargement
                load.classList.add('d-none');

                console.log(products);

                // Appelle la fonction permettant de créer le tableau HTML
                createTable(products);
            })
        .catch(error => alert(error));
};

// Fonction affiche tous les products

allProducts();

// Article
fetch('https://fakestoreapi.com/products/id')
    .then(res => res.json())
    .then(articles =>
        {
            // Cacher le spinner
        const loader = document.querySelector('.spinner-category');
        loader.classList.add('d-none');

        // Récuperation tableau
        const row = document.querySelector('.row');

        // Boucler sur le tableau reçu
        articles.forEach(id =>
            {
                // <a class="nav-link p-0" href="#">Link</a>
                const detail = document.createElement('div');
                detail.innerText = id;

                // Ajoute le lien au menu
                nav.appendChild(row);
            });

        })