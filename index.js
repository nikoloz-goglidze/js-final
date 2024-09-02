let burger = document.querySelector(".burger");
let xmark = document.querySelector(".xmark");
let mobileMenu = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    xmark.style.display = "block";
    burger.style.display = "none";
});

xmark.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    xmark.style.display = "none";
    burger.style.display = "block";
});


// slider
const container = document.querySelector(".section1")
const card = document.getElementsByClassName("background-div")
const leftSide = document.querySelector(".left-arrow")
const rightSide = document.querySelector(".right-arrow")
console.log(card);
const removeActiveCards = () => {
    for (let item of card) {
        item.classList.remove("active")
    }

}

let activIndex = 0
rightSide.addEventListener("click", () => {
    if (activIndex == card.length - 1) {
        activIndex = 0
    } else {
        activIndex += 1;
    }

    removeActiveCards()
    card[activIndex].classList.add("active");

})
leftSide.addEventListener("click", () => {
    if (activIndex == 0) {
        activIndex = card.length - 1
    }
    else {
        activIndex -= 1
    }
    removeActiveCards()
    card[activIndex].classList.add("active");
})
// local storge

const toggleButton = document.querySelector(".search_button")
let isDarkMode = localStorage.getItem("darkMode")
console.log(isDarkMode);
if(isDarkMode=== "enabled"){
    document.body.classList.add("dark-mode")
}

toggleButton.addEventListener("click", () => {
    
    isDarkMode = localStorage.getItem("darkMode")
    if (isDarkMode == "enabled") {


        localStorage.setItem("darkMode", "disabled")
        document.body.classList.remove("dark-mode")
    }
    else {
        localStorage.setItem("darkMode", "enabled")
        document.body.classList.add("dark-mode")
    }
}


)