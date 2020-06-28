let burger = document.querySelector(".section");
let clouseBurger = document.querySelector(".clouse");
let Guide = document.querySelector(".guide");
let navigation = document.querySelector("ol");
let stick = document.querySelector("span");

function Open(){
    burger.addEventListener("click", () =>{
        navigation.classList.remove("none");
        clouseBurger.classList.add("none");
        burger.style.opacity = "1";
        burger.classList.add("BorderBurger");
    })
}
function Clouse(){
    document.body.addEventListener ("click", (event) =>{
        let target = event.target.closest("section");
        if (event.target === stick || event.target === burger){
            navigation.classList.add("none");
            clouseBurger.classList.remove("none");
            burger.style.opacity = "0.5";
            burger.classList.remove("BorderBurger");
        }
    })
}

function swipeMenu(){
    Guide.addEventListener("click", (event) =>{
        Guide.classList.add("guideSwipeMenu");
    })
}

function ClouseswipeMenu(){
    document.body.addEventListener("click", (event) =>{
        let li = document.querySelector("li");
        let target = event.target.closest("guide");
        if (event.target !== Guide){
            Guide.classList.remove("guideSwipeMenu");
        }
    })
}
swipeMenu();
ClouseswipeMenu();
Open();
Clouse();