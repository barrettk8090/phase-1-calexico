

fetch("http://localhost:3000/menu")
.then((r) => r.json())
.then(menu => {
    menu.forEach(menuItem => addMenuItemToMenu(menuItem))
    addMenuItemToMain(menu[0]);
});

function addMenuItemToMenu(menuItem){
    fullMenu = document.querySelector("#menu-items");
    span = document.createElement("span");

    fullMenu.appendChild(span);
    span.textContent = menuItem.name  ;

    span.addEventListener("click", function () {
        addMenuItemToMain(menuItem);
    })
    
}


let currentMenuItem

function addMenuItemToMain(menuItem){
    currentMenuItem = menuItem;

   const image = document.querySelector("#dish-image");
   const dishName = document.querySelector("#dish-name");
   const dishDescription = document.querySelector("#dish-description");
   const dishPrice = document.querySelector("#dish-price");
   const numberInCart = document.querySelector("#number-in-cart")

   image.src = menuItem.image;
   dishName.textContent = menuItem.name;
   dishDescription.textContent = menuItem.description;
   dishPrice.textContent =`$${menuItem.price}`
   numberInCart.textContent = menuItem.number_in_bag;

}

const cartForm = document.getElementById("cart-form");
const numbInCart = document.getElementById("number-in-cart");

cartForm.addEventListener("submit", function(e) {
    e.preventDefault();

    cartInput = e.target["cart-amount"].value;
    currentMenuItem.number_in_bag += parseInt(cartInput);

    numbInCart.textContent = currentMenuItem.number_in_bag;

    addMenuItemToMain(currentMenuItem); // here 
    e.target.reset();

})