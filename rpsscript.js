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
                return 'null match! Replay the game';
                break;
            case 'Paper':
                return 'You lose! Paper cover Rock';
                break;
            case 'Scissors':
                return 'you Win! Rock break Scissors';

        }
    } else if (userInput == 'Paper') {
        switch (computerSelection) {
            case 'Rock':
                return 'You win! Paper cover Rock';
                break;
            case 'Paper':
                return 'null match! replay the game';
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
                return 'null match! replay the game';

        }
    } else { return 'your choice should be Rock, Paper or Scissor'; }
}
// let test our function playRound
//const playerSelection = 'scissors';
//const computerSelection = computerPlay()
//console.log(playRound(playerSelection, computerSelection));

//  a function to play five round game and output the winner 
function game() {
    let UserScore = 0;
    let ComputerScore = 0;
    for (let i = 1; i <= 5; i++) {

        let UserInput = capitalizeOnlyTheFirstLater(prompt('play your round'));
        let ComputerSelection = computerPlay();
        let RoundResult = playRound(UserInput, ComputerSelection);
        while (RoundResult.includes("null") || RoundResult.includes("choice")) {
            if (RoundResult.includes('null')) {
                ComputerSelection = computerPlay();
                UserInput = capitalizeOnlyTheFirstLater(prompt("you have a null match replay the round"));
                RoundResult = playRound(UserInput, ComputerSelection);
            } else {
                ComputerSelection = computerPlay();
                UserInput = capitalizeOnlyTheFirstLater(prompt(`You didn't input a right choice. ${RoundResult}`));
                RoundResult = playRound(UserInput, ComputerSelection);
            }
        }
        if (RoundResult.includes("win")) {
            //     return RoundResult;
            console.log(RoundResult);
            UserScore += 1;
        } else if (RoundResult.includes("lose")) {
            //      return RoundResult;
            console.log(RoundResult);
            ComputerScore += 1;
        }



    }
    if (UserScore > ComputerScore) {
        let winner = `You are the winner you win ${UserScore} times over 5`;
        // return winner;
        console.log(winner)
    } else {
        let winner = ` You lose! you win ${UserScore} times over 5`;
        //   return winner ;
        console.log(winner);
    }

}
//game();