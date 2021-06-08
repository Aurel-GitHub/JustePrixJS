// Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');


// Cacher l'erreur
error.style.display = 'none';

// Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let tentatives = 0;
let nombreSaisie;

// Créer la fonction vérifier
function verifier(chiffre) {

    let instruction = document.createElement('div');
     
    if(chiffre < nombreAleatoire){
        instruction.className = 'moins';
        instruction.textContent = '#' + tentatives + ' || ' + 'C\'est plus de ' + chiffre;

    }else if(chiffre > nombreAleatoire){
        instruction.classList = 'plus';
        instruction.textContent = '#' + tentatives + ' || ' +  ' C\'est moins de ' + chiffre;

    }else{
        instruction.classList = 'fini';
        instruction.textContent = 'Bravo vous avez trouvé le juste prix qui est :' + nombreAleatoire + ' en ' + tentatives + ' tentatives';
    }
    document.querySelector('#instructions').prepend(instruction);

}

// Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value) || input.value >= 1001 || input.value < 0 || !input.value){
        error.style.display = 'inline';
    }else{
        error.style.display = 'none';

    }
});

// Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if(isNaN(input.value) || input.value >= 1001 || input.value < 0 ){
        input.style.borderColor = "red";
    }else{
        tentatives++;
        input.style.borderColor = "green";
        nombreSaisie = input.value;
        input.value = '';
        verifier(nombreSaisie);
    }
})

