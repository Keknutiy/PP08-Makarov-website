let burger = document.querySelector(".section");
let clouseBurger = document.querySelector(".clouse");
let navigation = document.querySelector("ol");
let main = document.querySelectorAll("body");
let header = document.querySelector(".header");
let stick = document.querySelector("span");
let amination = document.querySelector("Animation");

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
function OpenAppeal(){
    let button = document.querySelector(".appeal__form");
    let model = document.querySelector(".modal");
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");
    model.style.filter = "none";
    button.addEventListener("click", () =>{
        main.classList.add("blur");
        header.classList.add("blur");
        footer.classList.add("blur");
        model.classList.remove("none");
        main.classList.remove("noblur");
        header.classList.remove("noblur");
        footer.classList.remove("noblur");
    })
}
function ClouseAppeal(){
    let button = document.querySelector(".appeal__form");
    let model = document.querySelector(".modal");
    let clouse__modal = document.querySelector(".clouse__modal");
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    let footer = document.querySelector("footer");
    model.style.filter = "none";
    clouse__modal.addEventListener("click", () =>{
        main.classList.add("noblur");
        header.classList.add("noblur");
        footer.classList.add("noblur");
        model.classList.add("none");
    })
}
OpenAppeal();
ClouseAppeal();
Open();
Clouse();