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
// validation
const firmDiv = document.querySelector(".div1")
const inputs = document.querySelectorAll("input")
console.log(inputs);
const paterns = {
    firstName: /^[a-z\d]{5,12}$/i,
    email: /(^[a-z\d,-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
}
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}
for (let input of inputs) {
    input.addEventListener("keyup", (e) => {
        console.log(e.target.attributes.name.value);

        validate(e.target, paterns[e.target.attributes.name.value])
    }
    )
}

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