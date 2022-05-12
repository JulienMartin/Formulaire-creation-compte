
// On définit nos variables en ciblant les 'id' du document
let form = document.getElementById('form');
let pseudo = document.getElementById('pseudo');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordConfirm = document.getElementById('password-confirm');
let button = document.getElementById('button');

button.addEventListener('click', event => {
    event.preventDefault();

    checkForm()
});

// La fonction checkForm va vérifier les différents éléments du formulaire, et le cas échéant afficher des messages d'erreur
function checkForm(){

    let pseudoValue = pseudo.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let passwordConfirmValue = passwordConfirm.value;

    // Appel aux fonctions errorCheck et successCheck suivant que les champs du formulaire ont été remplis correctement ou non

        // Si le pseudo est vide, on affiche un message
        if(pseudoValue == ''){
            errorCheck(pseudo, ' Le pseudo ne peut pas être vide');
        } else {
            successCheck(pseudo);
        }

        // Si l'e-mail est vide, on affiche un message
        if(emailValue == ''){
            errorCheck(email, ' L\'e-mail ne peut pas être vide');
        } else {
            successCheck(email);
        }

        // Si le mot de passe est vide, on affiche un message
        if(passwordValue == ''){
            errorCheck(password, ' Le mot de passe ne peut pas être vide');
        } else {
            successCheck(password);
        }

        // Si le mot de passe est vide, on affiche un message
        if(passwordConfirmValue == ''){
            errorCheck(passwordConfirm, ' Vous devez confirmer votre mot de passe');
        } else if(passwordConfirmValue != passwordValue) {
            errorCheck(passwordConfirm, ' Les deux mots de passe ne correspondent pas');
        } else {
            successCheck(passwordConfirm);
        }
}

// La fonction errorCheck va gérer les messages d'erreur
function errorCheck(errorInput, errorMessage){
    
    // On cible l'élément parent de chaque entrée du formulaire, à savoir le 'form-control'
    let formCheckElement = errorInput.parentElement;

    // On va ajouter à cette <div> une icone adaptée et un message d'erreur
    let newMessage = document.createElement('p');
    newMessage.setAttribute('class', 'errorpar')
    newMessage.textContent = errorMessage;
    
    let newI = document.createElement('i');
    newI.setAttribute('class', 'fa fa-exclamation-circle');

    formCheckElement.append(newMessage);
    newMessage.prepend(newI);

    // On lui attribue la classe 'error' de façon à afficher le logo correspondant et le message d'erreur
    formCheckElement.className = 'form-control error';
}

// La fonction successCheck va gérer le cas des champs de formulaires correctement remplis
function successCheck(successInput){

    // On cible à nouveau l'élément parent de chaque entrée du formulaire
    let formCheckElement = successInput.parentElement;

    // On va ajouter à cette <div> une icone adaptée dans un paragraphe sans texte
    let newMessage = document.createElement('p');
    
    let newI = document.createElement('i');
    newI.setAttribute('class', 'fa fa-check-circle-o');

    formCheckElement.append(newMessage);
    newMessage.prepend(newI);

    // On lui attribue la classe 'success' de façon à afficher le logo correspondant
    formCheckElement.className = 'form-control success';

}
