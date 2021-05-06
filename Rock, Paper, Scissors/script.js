let scores = [0, 0];
const choices = Array.from(document.querySelectorAll('.choice'));
const newGameBTN = document.querySelector('#newGame');

choices.forEach((choice) => {
    choice.addEventListener('click', playRound);
})

newGameBTN.addEventListener('click', newGame);

function playRound(e) {
    if(scores[0] < 5 && scores[1] < 5) {
        const computerSelection = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        const playerSelection = e.target.id;
        const playerSelectionP = document.querySelector('#playerSelection');
        const computerSelectionP = document.querySelector('#computerSelection');
        document.querySelector('.round').style.display = 'block';

        playerSelectionP.textContent = `You chose ${playerSelection}`;
        computerSelectionP.textContent = `The CPU chose ${computerSelection}`;


        if(playerSelection !== computerSelection) {
            if((playerSelection === 'rock' && computerSelection === 'paper') || 
            (computerSelection === 'rock' && playerSelection === 'paper')) {
                playerSelection === 'paper' ? roundWin(0) : roundWin(1);
            }
            else if((playerSelection === 'scissors' && computerSelection === 'rock') || 
            (computerSelection === 'scissors' &&  playerSelection === 'rock')) {
                playerSelection === 'rock' ? roundWin(0) : roundWin(1);
            }
            else {
                playerSelection === 'scissors' ? roundWin(0) : roundWin(1);
            }
            
        } else {
            //  draw
        }
        if(scores[0] === 5 || scores[1] === 5) {
            gameWin();
        }
    } 
}

function roundWin(playerNum) {
    if(playerNum === 0) {
        scores[0]++;
        document.querySelector('#playerScore').textContent = `Player Score: ${scores[0]}`;
    } else {
        scores[1]++;
        document.querySelector('#computerScore').textContent = `Computer Score: ${scores[1]}`;
    }
}

function gameWin() {
    if(scores[0] === 5) {
        document.querySelector('#playerScore').textContent = 'You win!';
    } else {
        document.querySelector('#computerScore').textContent = 'The CPU wins!';
    }
}

function newGame() {
    scores = [0, 0];
    document.querySelector('#playerScore').textContent = `Player Score: 0`;
    document.querySelector('#computerScore').textContent = `Computer Score: 0`;
    document.querySelector('.round').style.display = 'none';
    
}
