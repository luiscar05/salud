let dino = document.querySelector('.dino');
let dinoStop=document.querySelector('.dino2')
let ground = document.querySelector('.ground');
let trampa=document.querySelectorAll('.trampa')
let background = document.querySelector('.background');
let gameOverMessage = document.querySelector('.game-over');

let isGameOver = false;


trampa[0].style.animation = " movertrampa 2.5s  linear infinite"

document.body.addEventListener("keydown", function(event){
    if(event.key == "f"){

        trampa[0].style.animation = ""

    }
})


setInterval(() => {
    let perdioTop = 0;
let perdioLeft = 0;
    if((trampa[0].offsetLeft <= dino.offsetLeft + dino.clientWidth && (trampa[0].offsetLeft + trampa[0].clientWidth >= dino.offsetLeft + dino.clientWidth)) ){
        alert("xd")
    }

    if((dino.offsetTop + dino.scrollHeight > trampa[0].offsetTop) &&  (dino.offsetTop + dino.scrollHeight < trampa[0].offsetTop + trampa[0].scrollHeight) && ((dino.offsetLeft + dino.clientWidth -  (trampa[0].offsetLeft)) > 0 && ((dino.offsetLeft + dino.clientWidth -  (trampa[0].offsetLeft)) /* + (trampa[0].clientWidth) */ < dino.scrollHeight))){

alert("perdio   ")
    }
    console.log(((dino.offsetLeft + dino.clientWidth -  (trampa[0].offsetLeft)) > 0 && (dino.offsetLeft -  (trampa[0].offsetLeft)) /* + (trampa[0].clientWidth) */ < (dino.scrollHeight / 2)))
   /*  console.log("perdio", dino.offsetTop + dino.scrollHeight , trampa[0].offsetTop, ((dino.offsetLeft + dino.clientWidth -  (trampa[0].offsetLeft)) > 0 && (dino.offsetLeft + dino.clientWidth -  (trampa[0].offsetLeft)) - (trampa[0].clientWidth) < 195)) */
    /* console.log(trampa[0].offsetLeft , trampa[0].offsetLeft + trampa[0].clientWidth,  dino.offsetLeft, dino.offsetLeft + dino.clientWidth, (dino.offsetLeft > trampa[0].offsetLeft) &&  (dino.offsetLeft  < trampa[0].offsetLeft + trampa[0].clientWidth), (dino.offsetLeft > trampa[0].offsetLeft) &&  (dino.offsetLeft + dino.clientWidth < trampa[0].offsetLeft + trampa[0].clientWidth), "x", dino.offsetLeft  -  (trampa[0].offsetLeft) ,  ) */
    /* console.log((trampa[0].offsetLeft <= dino.offsetLeft + dino.scrollWidth) && (trampa[0].offsetLeft + trampa[0].scrollWidth >= dino.offsetLeft + dino.scrollWidth) ) */
    /* console.log( trampa[0].offsetTop <= dino.offsetTop + dino.clientHeight && (trampa[0].offsetTop + trampa[0].clientHeight >= dino.offsetTop + dino.clientHeight ) , "Top" , trampa[0].offsetLeft <= dino.offsetLeft + dino.scrollWidth && (trampa[0].offsetLeft + trampa[0].scrollWidth >= dino.offsetLeft + dino.scrollWidth), " left    ") */
/* console.log(trampa[0].offsetTop, dino.offsetTop + dino.clientHeight - 1 , trampa[0].offsetLeft , dino.offsetLeft + dino.scrollWidth + 1) */
   /*  console.log(trampa[0].offsetTop , dino.offsetTop + dino.clientHeight) */
}, 100);


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
/* dino.classList.remove('dino'); */
dinoStop.classList.add('dino2')
function moveBackground() {
    let position = parseInt(getComputedStyle(background).backgroundPositionX, 10);
    background.style.backgroundPositionX = (position - 1) + 'px';
    dino.classList.add('dino');
    dinoStop.classList.remove('dino2')
    moverTrampa()
    if (!isGameOver) {
        requestAnimationFrame(moveBackground);
    }
}

function moverTrampa() {
    let position = parseInt(getComputedStyle(trampa).trampaPositionX, 10);
    trampa.style.trampaPositionX = (position - 1) + 'px';
    if (!isGameOver) {
        requestAnimationFrame(moverTrampa);
    }
}


