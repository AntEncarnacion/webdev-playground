function playRound(playerSelection, computerSelection) {
	if(playerSelection !== computerSelection) {
        if(playerSelection === 'rock' && computerSelection === 'paper') {
            return 'Computer wins';
        }
        else if(playerSelection === 'scissors' && computerSelection === 'rock') {
            return 'Computer wins';
        }
        else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            return 'Computer wins';
        }
        else if(computerSelection === 'rock' && playerSelection === 'paper') {
            return 'Player wins';
        }
        else if(computerSelection === 'scissors' &&  playerSelection === 'rock') {
            return 'Player wins';
        }
        else if(computerSelection === 'paper' &&  playerSelection === 'scissors') {
            return 'Player wins';
        }
    } else {
        return 'Draw';
    }
}

const computerPlay = () => {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

