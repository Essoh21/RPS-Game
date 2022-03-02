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
                console.log('null match! Replay the game');
                break;
            case 'Paper':
                console.log('You lose! Paper cover Rock');
                break;
            case 'Scissors':
                console.log('you Win! Rock break Scissors');

        }
    } else if (userInput == 'Paper') {
        switch (computerSelection) {
            case 'Rock':
                console.log('You win! Paper cover Rock');
                break;
            case 'Paper':
                console.log('null match! replay the game');
                break;
            case 'Scissors':
                console.log('You lose! Scissors cut Paper');

        }
    } else if (userInput == 'Scissors') {
        switch (computerSelection) {
            case 'Rock':
                console.log('You lose! Rock break Scissors');
                break;
            case 'Paper':
                console.log('You win! Scissors cut Paper');
                break;
            case 'Scissors':
                console.log('null match! replay the game');

        }
    } else { console.log('something goes wrong with the comparision') }
}
// let test our function playRound
const playerSelection = 'scissors';
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));