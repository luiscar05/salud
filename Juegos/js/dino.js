let dino = document.querySelector('.dino');
let dinoStop=document.querySelector('.dino2')
let ground = document.querySelector('.ground');
let background = document.querySelector('.background');
let gameOverMessage = document.querySelector('.game-over');

let isGameOver = false;

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);

function jump(event) {
    if ((event.keyCode === 32 || event.type === 'click') && !isGameOver) {
        if (!dino.classList.contains('jumping')) {
            dino.classList.add('jumping');
            setTimeout(() => {
                dino.classList.remove('jumping');
            }, 1000);
        }
    }
}


/* function checkCollision() {
    let dinoPos = dino.getBoundingClientRect();
    let groundPos = ground.getBoundingClientRect();

    if (dinoPos.bottom > groundPos.top) {
        isGameOver = true;
        gameOverMessage.style.display = 'block';
        return;
    }

    if (!isGameOver) {
        requestAnimationFrame(checkCollision);
    }
}

checkCollision();  */
dino.classList.remove('dino');
dinoStop.classList.add('dino2')
function moveBackground() {
    let position = parseInt(getComputedStyle(background).backgroundPositionX, 10);
    background.style.backgroundPositionX = (position - 1) + 'px';
    dino.classList.add('dino');
    dinoStop.classList.remove('dino2')
    if (!isGameOver) {
        requestAnimationFrame(moveBackground);
    }
}


