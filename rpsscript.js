// a function to play sound on click
function playSound() {
    let audioToPlay = new Audio();
    audioToPlay.src = "clic.wav";
    return audioToPlay.play();
}
// function computerPlay that will randomly return Rock Paper or Scissors
function computerPlay() {

    let arr = Array('Rock', 'Paper', 'Scissors');
    // generater a random integer between 0 and 3 , 0 included and 3 excluded
    let randomInteger = Math.floor(Math.random() * 3);
    return arr[randomInteger];

}
//console.log(computerPlay());
// the function to modify user input 
function capitalizeOnlyTheFirstLater(text) {

    let firstLater = text.slice(0, 1);
    let capitalFirstLater = firstLater.toUpperCase();
    let theRest = text.slice(1);
    let theRestToLower = theRest.toLowerCase();
    let theOutPut = `${capitalFirstLater}${theRestToLower}`;
    return theOutPut;
}
// A function that plays a single round of Paper Rock Scissors
function playRound(playerSelection, computerSelection) {
    let userInput = capitalizeOnlyTheFirstLater(playerSelection);
    if (userInput == 'Rock') {
        switch (computerSelection) {
            case 'Rock':
                return 'null match! Replay the round';
                break;
            case 'Paper':
                return 'You lose! Paper cover Rock';
                break;
            case 'Scissors':
                return 'You win! Rock break Scissors';

        }
    } else if (userInput == 'Paper') {
        switch (computerSelection) {
            case 'Rock':
                return 'You win! Paper cover Rock';
                break;
            case 'Paper':
                return 'null match! replay the round';
                break;
            case 'Scissors':
                return 'You lose! Scissors cut Paper';

        }
    } else if (userInput == 'Scissors') {
        switch (computerSelection) {
            case 'Rock':
                return 'You lose! Rock break Scissors';
                break;
            case 'Paper':
                return 'You win! Scissors cut Paper';
                break;
            case 'Scissors':
                return 'null match! replay the round';

        }
    } else { return 'Your choice should be Rock, Paper or Scissor'; }
}

// output scores in the creen
let resultsText = document.querySelector(".lowerOutputScreen");
let userScoreOutput = document.querySelector(".score.playerScore");
let computerScoreOutput = document.querySelector(".score.computerScore");
// a new function to play the game on clik
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    let outputImage = document.createElement("IMG");
    let outputimageContainer = document.createElement("div");

    outputImage.setAttribute("alt", "hand");
    outputImage.setAttribute("width", "50")
    outputImage.setAttribute("style", "backgrounColor: #00f");
    playerHandBox.appendChild(outputImage);
    computerHanBox.appendChild(outputImage);

    let computerHand = computerPlay();
    switch (userChoice) {
        case 'Paper':

            outputImage.setAttribute("src", "hand.png");
            outputImage.style = "transform: rotate(90deg)";
            outputimageContainer.appendChild(outputImage);
            playerHandBox.innerHTML = outputimageContainer.innerHTML;

            break;
        case 'Rock':

            outputImage.setAttribute("src", "rock.png");
            outputImage.style = "transform: rotate(90deg)";
            outputimageContainer.appendChild(outputImage);
            playerHandBox.innerHTML = outputimageContainer.innerHTML;
            break;
        case "Scissors":

            outputImage.setAttribute("src", "scissors.png");

            outputimageContainer.appendChild(outputImage);
            playerHandBox.innerHTML = outputimageContainer.innerHTML;
            break;
    }
    switch (computerHand) {

        case 'Paper':

            outputImage.setAttribute("src", "hand.png");
            outputImage.style = "transform: rotate(-90deg) rotateY(180deg)";
            outputimageContainer.appendChild(outputImage);
            computerHanBox.innerHTML = outputimageContainer.innerHTML;


            break;
        case 'Rock':

            outputImage.setAttribute("src", "rock.png");
            outputImage.style = "transform: rotate(-90deg) rotateY(180deg)";
            outputimageContainer.appendChild(outputImage);
            computerHanBox.innerHTML = outputimageContainer.innerHTML;
            break;
        case 'Scissors':
            imageCName = ".button.scissors";
            outputImage.setAttribute("src", "scissors.png");
            outputImage.style = "transform: rotateY(180deg)";
            outputimageContainer.appendChild(outputImage);
            computerHanBox.innerHTML = outputimageContainer.innerHTML;

    }

    let roundResult = playRound(userChoice, computerHand);
    if (userScore > 4 || computerScore > 4) {
        userScore = 0;
        computerScore = 0;
    }

    if (roundResult.includes("win")) {
        userScore += 1;
        resultsText.innerHTML = roundResult;
        resultsText.style.color = "#838b0f";
        userScoreOutput.innerHTML = userScore;
        computerScoreOutput.innerHTML = computerScore;
    } else if (roundResult.includes("lose")) {
        computerScore += 1;
        computerScoreOutput.innerHTML = computerScore;
        userScoreOutput.innerHTML = userScore;
        resultsText.style.color = "#F00";
        resultsText.innerHTML = roundResult;

    } else {
        resultsText.style.color = "#99f";
        resultsText.innerHTML = roundResult;
    }
    if (userScore == 5 || computerScore == 5) {
        if (computerScore == 5) {
            resultsText.style.color = "#f50"
            resultsText.innerHTML = "Game over!Computer is the winner";
        } else {
            resultsText.style.color = "#0de";
            resultsText.innerHTML = "Congratulation! You are the winner ";
        }
    }

}

let playerHandBox = document.querySelector(".play.playerPlay");
let computerHanBox = document.querySelector(".play.computerPlay");
let paperButton = document.querySelector(".button.paper");
let rockButton = document.querySelector(".button.rock");
let scissorsButton = document.querySelector(".button.scissors");
paperButton.addEventListener("click", () => playGame("Paper"));
rockButton.addEventListener("click", () => playGame("Rock"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));