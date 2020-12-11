/* elements selection */

var form = $('form');
var prenomInput = $('prenom');
var nomInput = $('nom');
var emailInput = $('email');
var messageInput = $('message');
var div = $('div.control');

/* function soumission pour recouper touts les champs */

function onSubmit(event) {
    event.preventDefault();

    var nbErrors = 0;
    $('p.error').text("").hide();
    div.hide();

    var prenom = prenomInput.val();
    var nom = nomInput.val();
    var email = emailInput.val();
    var message = messageInput.val();

    console.log(prenom);
    console.log(nom);
    console.log(email);
    console.log(message);

    if (prenom.length == 0) {
        // injecter le texte "le champ doit contenir un prenom" dans le p qui suit l'input
        prenomInput.next().text("le champ doit contenir un prenom").show();
        nbErrors++;
    } else if (prenom.length < 2) {
        prenomInput.next().text("le prénom doit comporter au moins 2 caractères").show();
        nbErrors++;
    }

    if (nom.length == 0) {
        // injecter le texte "le champ doit contenir un prenom" dans le p qui suit l'input
        prenomInput.next().text("le champ doit contenir un prenom").show();
        nbErrors++;
    } else if (prenom.length < 2) {
        prenomInput.next().text("le nom doit comporter au moins 2 caractères").show();
        nbErrors++;
    }

    if (email.length == 0) {
        // injecter le texte "le champ doit contenir un prenom" dans le p qui suit l'input
        prenomInput.next().text("le champ doit contenir un prenom").show();
        nbErrors++;
    } else if (prenom.length < 5) {
        prenomInput.next().text("l'email doit comporter au moins 5 caractères").show();
        nbErrors++;
    }

    if (prenom.length == 0) {
        // injecter le texte "le champ doit contenir un prenom" dans le p qui suit l'input
        prenomInput.next().text("le champ doit contenir un prenom").show();
        nbErrors++;
    } else if (message.length < 10) {
        prenomInput.next().text("le message doit comporter au moins 10 caractères").show();
        nbErrors++;
    }

    if (nbErrors == 0) {
        div.removeClass('danger');
        div.addClass('success');
        div.text("Coool, le formulaire a été envoyé !").slideDown();
        // poster le formulaire au serveur
    } else {
        div.removeClass('success');
        div.addClass('danger');
        div.text("il y " + nbErrors + " erreur(s)").slideDown();
    }

}
form.on('submit', onSubmit);