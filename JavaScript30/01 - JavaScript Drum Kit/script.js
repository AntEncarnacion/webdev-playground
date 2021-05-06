
const keys = Array.from(document.querySelectorAll('div.key'));


function removeTransition(e) {
    if(e.propertyName === 'transform') {
        e.target.classList.remove('playing');
    }
}

function playSound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode - 32}"]`); 
    const audio = document.querySelector(`audio[data-key="${e.keyCode - 32}"]`);
    if(key === null) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    
}

// we use the .forEach method to iterate through each button
keys.forEach((key) => {key.addEventListener('transitionend', removeTransition)});
window.addEventListener('keypress', playSound);