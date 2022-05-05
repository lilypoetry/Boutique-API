/**
 * Fonctions
 */


/**
 * Affiche une erreur fetch()
 * 
 * @param String message
 * @param Element element
 * @return Void
 */
const errorAlert = (message, element) => 
    {
        const el = document.querySelector(element);
        el.innerText = message;
        el.classList.remove('d-none');
    }


/**
 * Création d'une carte de produit
 * 
 * @param Object product
 * @return String
 */
const cardProduct = (product) => 
    {
        return `<div class="col-3 mb-5">
                    <img src="${product.image}" alt="Photo" class="rounded img-fluid">
                    <p class="mt-2 mb-0 fw-bold">${product.title}</p>
                    <p>${product.price}</p>
                    <a href="product.php?id=${product.id}" class="btn btn-warning">
                        Voir le produit
                    </a>
                </div>`;
    }

/**
 * Récupération du paramètre de la requête
 * Utilisation : const valeur = queryParam('nom-du-parametre')
 * 
 * @param String param
 * @return String
 */

const queryParam = (param) =>
    {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }