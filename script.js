/*   Variables  */

let alea, attemptsCount, inputValue, hasWon, stringResult; 
let messageElements, attemptsCounterElements;
let inputFields, spans, submitButton;


/*  Functions  */

function setupGame() {
  
    // initialiser les variables :
    
    attemptsCount = 0;
    inputValue = null;
    hasWon = false;
    messageElements = document.querySelectorAll(".message");
    attemptsCounterElements = document.querySelectorAll(".attempts-counter");    
    // let mini = 0;
    // let maxi = 100;
    // numberToGuess = Math.floor(Math.random() * (maxi - mini + 1) + mini);
    alea = Math.floor (Math.random() * 100);
}

function test (numberToCheck,numberToGuess) {
    
    if (isNaN(numberToCheck) || numberToCheck < 0 || numberToCheck > 100) {      
      result = 1;
      } else {
        // Check if guess is correct
        if (numberToCheck === numberToGuess) {          
          result = 2;
        } else if (numberToCheck < numberToGuess) {          
          result = 3;
        } else {
          result = 4;
        }
    }
    return result;
}

//Fonction playRound pour jouer une partie
function playRound() {
    setupGame()
    // console.log (hasWon);    
    console.log(alea);
    // boucle d'une partie

    // while (hasWon === false) {

        // A la validation par l'utilisaeur (click event), récupération des node list "input" et ".messages"
        // setTimeout(() => {
          submitButton.addEventListener("click", () => {
            attemptsCount++;
            inputValue = inputFields[0].value;
            // Récupération de la valeur du seul input (donc [0]) et conversion en integer             
            let int = parseInt(inputValue);
            // console.log("valeur integer = " + int);
            // Appel de de la fonction test 
            test(int,alea);
            // et affectation du résultat à message[0] :
            switch(test(int,alea)) {
              case 1:
                stringResult = "Erreur: Veuillez entrer un nombre entier entre 0 et 100.";
                break;
              case 2:
                stringResult = "Bravo, vous avez trouvé le nombre en " + attemptsCount + " essai(s)!";
                hasWon = true;
                break;
              case 3:
                stringResult = "Le nombre est trop petit.";
                break;
              case 4:              
                stringResult = "Le nombre est trop grand.";
                break;
              default:
                // code block
            };         
            messageElements[0].textContent = stringResult; 

            if(test(int,alea) != 1) {
              // console.log(attemptsCounterElements);
              attemptsCounterElements[0].textContent = "Depuis le début de la partie, vous avez déjà effectué " + attemptsCount + " essai(s).";
            };
            console.log(hasWon);
            if (hasWon) {
              submitButton.disabled = true;
            }
        }); 
        
        // }, 0);
        
    // };

} 
    

function playAgain () {
    inputFields[0].style.display = "none";
    spans[0].style.display = "flex";
    spans[0].textContent = "Voulez-vous jouer une autre partie ?";
    submitButton.textContent = "Oui !";
    submitButton.addEventListener("click", playRound);
}

function init() {
  // initaliser variables
    alea = 0;
    hasWon = false;
    stringResult = "";
    inputFields = document.querySelectorAll("input");
    spans = document.querySelectorAll("span");
    submitButton = document.getElementById("submitButton");
    dialogs = document.querySelectorAll(".dialog");

  //Afficher le champ input et le bouton "Valider"
    // et cacher le span "Voulez-vous jouer une autre partie ?"
    inputFields[0].style.display = "flex";
    spans[0].style.display = "none";
    submitButton.textContent = "Valider";

  // Démarre le jeu
  playRound();
  if (hasWon) {
    submitButton.disabled = true;
  };
}


init();

