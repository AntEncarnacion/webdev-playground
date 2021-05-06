/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying;

startGame();

function startGame() {
    gamePlaying = true;
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
};

const nextPlayer = () => {
    roundScore = 0;
    
    document.querySelector('#current-' + activePlayer).textContent = '0';
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 

    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

const playerWins = () => {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
}

document.querySelector('.btn-roll').addEventListener('click', () => {
    if(gamePlaying){
        let dice = Math.floor(Math.random() * 6) + 1;
        const diceDOM = document.querySelector(".dice");

        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";
        
        if(dice !== 1) {  
            roundScore += dice; 
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } 
        else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    if(gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        scores[activePlayer] >= 10 ? playerWins() : nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', startGame);

// const dice, score0, score1, current1, current2;
//  setter
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//  getter
// let x = document.querySelector('#score-0').textContent;

// dice = document.querySelector('.dice');
// score0 = document.getElementById('score-0');
// score1 = document.getElementById('score-1');
// current0 = document.getElementById('current-0')
// current1 = document.getElementById('current-1');

// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;


// dice.style.display = 'none';
// score0.textContent = '0';
// score1.textContent = '0';
// current0.textContent = '0';
// current1.textContent = '0';