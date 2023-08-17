let listElemts = document.querySelectorAll('.list_button__click');

listElemts.forEach(listElemt=>{
    listElemt.addEventListener("click",()=>{
        
        listElemt.classList.toggle('arrow');

        let height=0;
        let menu= listElemt.nextElementSibling;
        console.log(menu.scrollHeight)
        if (menu.clientHeight=="0") {
            height=menu.scrollHeight
        }
        menu.style.height=height+"px"
    })
})

let nav=document.getElementById("nav");
let hambuer=document.getElementById("Hamburguesa");
hambuer.addEventListener("click",()=>{
    if (nav.classList.contains("nav-activo")) {
        nav.classList.remove("nav-activo")
        nav.classList.add("nav")
    }else{
        nav.classList.add("nav-activo")
        nav.classList.remove("nav")
    }
    
});