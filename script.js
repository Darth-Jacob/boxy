const box = document.getElementById('box');
const scoreDisplay = document.getElementById('score');
let score = 0;

function moveBox() {
    const gameArea = document.getElementById('gameArea');
    const x = Math.floor(Math.random() * (gameArea.clientWidth - box.clientWidth));
    const y = Math.floor(Math.random() * (gameArea.clientHeight - box.clientHeight));
    
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}

box.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

// Move the box every 1 second
setInterval(moveBox, 1000);