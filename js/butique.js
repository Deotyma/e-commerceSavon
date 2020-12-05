var listElt = document.querySelector('div.productsList');

/* product list */
function printProductsList() {
    for (let i = 0; i < products.length; i++) {

        listElt.innerHTML += `<div class="products col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
            <a data-id="${products[i].id}" class="productElt soap" href="#"><img class="card-img-top" src="${products[i].image}" alt="${products[i].name}"></a>
            <div class="card-body text-center">
                <h4 class="card-title">
                    <a data-id="${products[i].id}" class="productElt soap" href="#">${products[i].name}</a>
                </h4>
                <h5>${products[i].price}€</h5>
                <p>Lorem ipsum dolor...</p>
                <button class="btn btn-dark bg-sienna buy">Acheter</button>
            </div>
        </div>
    </div>`;

    }
}

printProductsList();