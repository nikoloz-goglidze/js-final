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
const figureArticle = document.querySelector(".figure_article")
const getProducts = async () => {
    const result = await fetch("https://fakestoreapi.com/products")
    const products = await result.json()
    return products
}

const createCards = async (items) => {

    for (let product of items) {
        let cardHome = document.createElement("div");
        cardHome.classList = ("card_home");

        let guitarImage = document.createElement("img");
        guitarImage.classList = ("guitar_image");
        guitarImage.src = product.image;

        let title = document.createElement("p");
        title.classList = ("card-p");
        title.innerText = product.title;

        let starPrise = document.createElement("div");
        starPrise.classList = ("star_price");

        let rating = document.createElement("p");
        rating.innerText = `rating : ${product.rating.rate}`;
        rating.classList = ("card-rating");

        let price = document.createElement("p")
        price.classList = ("card-price")
        price.innerText = ` $ ${product.price}`

        cardHome.appendChild(guitarImage);
        cardHome.appendChild(title);
        cardHome.appendChild(starPrise);
        starPrise.appendChild(rating);
        starPrise.appendChild(price);
        figureArticle.appendChild(cardHome);
    }
}
const renderCards = async () => {
    const products = await getProducts();
    createCards(products);
}

renderCards();

const search = document.getElementById("search");

search.addEventListener("change", async (e) => {
    const products = await getProducts();
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase()));
    figureArticle.innerHTML = "";
    createCards(filteredProducts);
}

)
const sort = document.getElementById("sort")
sort.addEventListener("change", async(e)=>{
    const products = await getProducts()
    console.log(products);
    
    console.log(e.target.value);
    if(e.target.value==="rating"){
products.sort((a,b)=> b.rating.rate-a.rating.rate)
 }
    // console.log(products);
    else if(e.target.value==="price"){
        products.sort((a,b)=> b.price-a.price)
        } figureArticle.innerHTML = "";
        createCards(products);
    }

)
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

