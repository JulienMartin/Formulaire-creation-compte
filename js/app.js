// Test en console
console.log('Hello tout le monde');


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
            errorCheck(pseudo, 'Le pseudo ne peut pas être vide');
        } else {
            successCheck(pseudo);
        }

        // Si l'e-mail est vide, on affiche un message
        if(emailValue == ''){
            errorCheck(email, 'L\'e-mail ne peut pas être vide');
        } else {
            successCheck(email);
        }

        // Si le mot de passe est vide, on affiche un message
        if(passwordValue == ''){
            errorCheck(password, 'Le mot de passe ne peut pas être vide');
        } else {
            successCheck(password);
        }

        // Si le mot de passe est vide, on affiche un message
        if(passwordConfirmValue == ''){
            errorCheck(passwordConfirm, 'Vous devez confirmer votre mot de passe');
        } else if(passwordConfirmValue != passwordValue) {
            errorCheck(passwordConfirm, 'Les deux mots de passe ne correspondent pas');
        } else {
            successCheck(passwordConfirm);
        }
}

// La fonction errorCheck va gérer les messages d'erreur
function errorCheck(errorInput, errorMessage){
    
    // On cible l'élément parent de chaque entrée du formulaire, à savoir le 'form-control'
    let formCheckElement = errorInput.parentElement;

    // On cible le message d'erreur
    let errorDiv = formCheckElement.querySelector('.errormsg');

    // On lui attribue la classe 'error' de façon à afficher le message d'erreur
    formCheckElement.className = 'form-control error';
    errorDiv.textContent = errorMessage;

}

// La fonction successCheck va gérer les cas où les formulaires sont correctement remplis
function successCheck(successInput){

    // On cible à nouveau l'élément parent de chaque entrée du formulaire
    let formCheckElement = successInput.parentElement;

    // On lui attribue la classe 'success' de façon à afficher le logo correspondant
    formCheckElement.className = 'form-control success';

}