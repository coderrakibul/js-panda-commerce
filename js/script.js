var productsName = document.getElementsByClassName("products-name");
for (let product of productsName) {
    product.style.color = "lightblue";
}

const backpack = document.getElementById("backpack-section");
backpack.style.backgroundColor = "";

let card = document.getElementsByClassName("card");
for (let singleCard of card) {
    singleCard.style.borderRadius = "30px";
}

let infoBtn = document.getElementById("more-info-btn");
function infoButton() {
    infoBtn.innerText = "Ha Ha Ha! LOL";
    console.log(infoBtn.innerText);
}


document.getElementById("input-field").addEventListener("keyup", function (event) {
    const emailCheck = document.getElementById("submit-btn");
    if (event.target.value == "submit") {
        emailCheck.removeAttribute("disabled");
    }
    else{
        emailCheck.setAttribute("disabled", true);
    }
});
