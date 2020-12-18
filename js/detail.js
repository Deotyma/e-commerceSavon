var id = window.location.href.split('=')[1];
var product = products.find(function(product) { return product.id == id });
console.log(product);

var nameElt = document.querySelector('h2.name');
var imgElt = document.querySelector('img.image');
var descElt = document.querySelector('p.description');
var priceElt = document.querySelector('h3.price');


nameElt.textContent = product.name;
imgElt.src = product.image;
descElt.textContent = product.description;
priceElt.textContent = product.price.toFixed(2) + "€";