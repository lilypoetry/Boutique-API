/**
 * Affichage des détails d'un produit
 */


// Récuperation de la valeur du paramètre d'URL "id"
const idProduct = queryParam('id');

fetch(`https://fakestoreapi.com/products/${idProduct}`)
    .then(res => res.json())
    .then(product =>
        {
            // Cacher le spinner
            const loader = document.querySelector('.spinner-article');
            loader.classList.add('d-none');

            const row = document.querySelector('.row');

            const details = `<div class="col-4">
                    <img src="${product.image}" alt="photo du produit" class="w-100">
                </div>
                <div class="col-4">
                    <h1 class="fw-bold fs-1">${product.title}</h1>
                    <p>${product.price} €</p>
                    <p class="fw-bold fs-2">${product.category}</p>
                    <p>
                        Catégorie : 
                        <a href="category.php?name=${product.category}">
                            ${product.category}
                        </a>
                    </p>
                </div>`;

            row.innerHTML = details;        
        })
    .catch(error =>
        {
            errorAlert(error.message, '.alert-danger');
        });