

// Récuperation de la valeur du paramètre d'URL "name"
const categoryName =queryParam('name');

const detailProduct = document.querySelector('.category-name');
detailProduct.innerText = categoryName;


fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then(res => res.json())
    .then(products =>
        {
            // Cacher le spinner
            const loader = document.querySelector('.spinner-article');
            loader.classList.add('d-none');

            // Sélection la ligne (#listProducts)
            const row = document.querySelector('.row');
            
            // Boucler sur les produits
            products.forEach(product =>
                {                                        
                    let card = cardProduct(product);

                    // Concaténation de la carte au code existant dans la ligne
                    row.innerHTML += card;
                });
        })
    .catch(error =>
        {
            errorAlert(error.message, '.alert-danger');
        });