/* elements selection */

var form = $('form');
var prenomInput = $('.prenom');
var nomInput = $('.nom');
var emailInput = $('.email');
var messageInput = $('.message');
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
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(prenom);
    console.log(nom);
    console.log(email);
    console.log(message);

    if (prenom.length == 0) {
        // injecter le texte "le champ doit contenir un prenom" dans le p qui suit l'input
        prenomInput.next().text("le champ doit contenir votre prenom").show();
        nbErrors++;
    } else if (prenom.length < 2) {
        prenomInput.next().text("le prénom doit comporter au moins 2 caractères").show();
        nbErrors++;
    }

    if (nom.length == 0) {
        // injecter le texte "le champ doit contenir votre prenom" dans le p qui suit l'input
        nomInput.next().text("le champ doit contenir votre nom").show();
        nbErrors++;
    } else if (nom.length < 2) {
        nomInput.next().text("le nom doit comporter au moins 2 caractères").show();
        nbErrors++;
    }

    if (email.length == 0 && email.match(regex)) {
        // injecter le texte "le champ doit contenir votre nom" dans le p qui suit l'input
        emailInput.next().text("le champ doit contenir votre email").show();
        nbErrors++;
    } else if (email.length < 5) {
        emailInput.next().text("l'email doit comporter au moins 5 caractères").show();
        nbErrors++;
    }

    if (message.length == 0) {
        // injecter le texte "le champ doit contenir un message de plus de 10 caractéres" dans le p qui suit l'input
        messageInput.next().text("le champ doit contenir votre message").show();
        nbErrors++;
    } else if (message.length < 10) {
        messageInput.next().text("le message doit comporter au moins 10 caractères").show();
        nbErrors++;
    }

    if (nbErrors == 0) {
        div.removeClass('danger');
        div.addClass('success');
        div.text("Bravo, le formulaire a été envoyé !").slideDown();
        // poster le formulaire au serveur
    } else {
        div.removeClass('success');
        div.addClass('danger');
        div.text("il y " + nbErrors + " erreur(s)").slideDown();
    }

}
form.on('submit', onSubmit);