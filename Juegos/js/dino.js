let dino = document.querySelector(".img-dino")
window.addEventListener("keydown",(Event)=>{
   
    if (Event.key == "ArrowRight") {
        dino.classList.add(".right-movemen");
        
    }
})