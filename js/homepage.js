/**
 * Catégories
 */

 fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(categories =>
        {
            // Cacher le spinner
            const loader = document.querySelector('.spinner-category');
            loader.classList.add('d-none');

            // Récuperation du menu
            const nav = document.querySelector('.nav');

            // Boucler sur le tableau reçu
            categories.forEach(category =>
                {
                    // <a class="nav-link p-0" href="#">Link</a>
                    const link = document.createElement('a');
                    link.innerText = category;
                    link.href = `category.php?name=${category}`;
                    link.classList.add('nav-link', 'p-0');

                    // Ajoute le lien au menu
                    nav.appendChild(link);
                });
        })
    .catch(error =>
        {
            errorAlert(error.message, '.alert-danger');
        });

/**
 * Articles
 */

fetch('https://fakestoreapi.com/products?limit=16')
    .then(res => res.json())
    .then(products =>
        {            
            // Cacher le spinner
            const loader = document.querySelector('.spinner-article');
            loader.classList.add('d-none');

            // Sélection la ligne (#listProducts)
            const row = document.querySelector('#listProducts');

            products.forEach(product =>
                {                    
                    // Création de la carte produit en HTML
                    let article = cardProduct(product);

                    // Concaténation de la carte au code existant dans la ligne
                    row.innerHTML += article;
                });
        })
        .catch(error =>
            {
                errorAlert(error.message, '.alert-danger');
            });
        