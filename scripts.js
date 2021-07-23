function dishSelection(selectedItemName){
    //Takes the full name of the item from the HTML and save it to dishName (also save it to the checkout)
    dishName = document.querySelector("." + selectedItemName + " h3");
    dishName = dishName.innerHTML;
    const checkoutName = document.querySelector(".dish-name");
    checkoutName.innerHTML = dishName;

    //Takes the price from the HTML, convert it to a number and save it to dishPrice (also save it to the checkout)
    dishPrice = document.querySelector("." + selectedItemName + " .price");
    dishPrice = dishPrice.innerHTML;
    dishPrice = dishPrice.replace("R$ ","");
    const checkoutPrice = document.querySelector(".dish-price");
    checkoutPrice.innerHTML = dishPrice;
    dishPrice = dishPrice.replace(/,/g, ".");
    dishPrice = Number(dishPrice);

    //Removes the selection border and checkmark from previous selected item
    const selectionRemove = document.querySelector(".dishes .selected");
    const checkmarkRemove = document.querySelector(".dishes .selected .checkmark");
    if (selectionRemove !== null){
        selectionRemove.classList.remove("selected");
        checkmarkRemove.classList.add("hidden");
    }

    //Gives the new selected item a border and the checkmark icon
    const dishAdd = document.querySelector("." + selectedItemName);
    dishAdd.classList.add("selected");
    const checkmarkAdd = document.querySelector("." + selectedItemName + " .checkmark");
    checkmarkAdd.classList.remove("hidden");

    //Checks if all three items are properly selected
    checkIfReady();
}
function drinkSelection(selectedItemName){
    //Takes the full name of the item from the HTML and save it to drinkName (also save it to the checkout)
    drinkName = document.querySelector("." + selectedItemName + " h3");
    drinkName = drinkName.innerHTML;
    const checkoutName = document.querySelector(".drink-name");
    checkoutName.innerHTML = drinkName;

    //Takes the price from the HTML, convert it to a number and save it to drinkPrice (also save it to the checkout)
    drinkPrice = document.querySelector("." + selectedItemName + " .price");
    drinkPrice = drinkPrice.innerHTML;
    drinkPrice = drinkPrice.replace("R$ ","");
    const checkoutPrice = document.querySelector(".drink-price");
    checkoutPrice.innerHTML = drinkPrice;
    drinkPrice = drinkPrice.replace(/,/g, ".");
    drinkPrice = Number(drinkPrice);

    //Removes the selection border and checkmark from previous selected item
    const selectionRemove = document.querySelector(".drinks .selected");
    const checkmarkRemove = document.querySelector(".drinks .selected .checkmark");
    if (selectionRemove !== null){
        selectionRemove.classList.remove("selected");
        checkmarkRemove.classList.add("hidden");
    }

    //Gives the new selected item a border and the checkmark icon
    const drinkAdd = document.querySelector("." + selectedItemName);
    drinkAdd.classList.add("selected");
    const checkmarkAdd = document.querySelector("." + selectedItemName + " .checkmark");
    checkmarkAdd.classList.remove("hidden");
    
    //Checks if all three items are properly selected
    checkIfReady();
}
function dessertSelection(selectedItemName){
    //Takes the full name of the item from the HTML and save it to dessertName (also save it to the checkout)
    dessertName = document.querySelector("." + selectedItemName + " h3");
    dessertName = dessertName.innerHTML;
    const checkoutName = document.querySelector(".dessert-name");
    checkoutName.innerHTML = dessertName;

    //Takes the price from the HTML, convert it to a number and save it to dessertPrice (also save it to the checkout)
    dessertPrice = document.querySelector("." + selectedItemName + " .price");
    dessertPrice = dessertPrice.innerHTML;
    dessertPrice = dessertPrice.replace("R$ ","");
    const checkoutPrice = document.querySelector(".dessert-price");
    checkoutPrice.innerHTML = dessertPrice;
    dessertPrice = dessertPrice.replace(/,/g, ".");
    dessertPrice = Number(dessertPrice);

    //Removes the selection border and checkmark from previous selected item
    const selectionRemove = document.querySelector(".desserts .selected");
    const checkmarkRemove = document.querySelector(".desserts .selected .checkmark");
    if (selectionRemove !== null){
        selectionRemove.classList.remove("selected");
        checkmarkRemove.classList.add("hidden");
    }

    //Gives the new selected item a border and the checkmark icon
    const dessertAdd = document.querySelector("." + selectedItemName);
    dessertAdd.classList.add("selected");
    const checkmarkAdd = document.querySelector("." + selectedItemName + " .checkmark");
    checkmarkAdd.classList.remove("hidden");

    //Checks if all three items are properly selected
    checkIfReady();
}
function checkIfReady(){
    //Prepares the bottom-bar to be toggled
    const makeReady = document.querySelector(".ready");
    const hideNotReady = document.querySelector(".not-ready");

    //Checks if all three items are properly selected
    if(dishPrice !== undefined && drinkPrice !== undefined && dessertPrice !== undefined){
        makeReady.classList.remove("hidden");
        hideNotReady.classList.add("hidden");
    }
}
function confirmOrder(){
    //Will update the checkout total price before showing the window
    totalPrice = dishPrice + drinkPrice + dessertPrice;
    totalPrice = Number(totalPrice).toFixed(2);
    totalPrice = totalPrice.replace(".", ",");
    const checkoutTotal = document.querySelector(".total-price");
    checkoutTotal.innerHTML = "R$ " + totalPrice;

    //Shows the confirmation window to the user and allow them to proceed or go back
    const showConfirmationWindow = document.querySelector(".checkout-window");
    showConfirmationWindow.classList.toggle("hidden"); 
}
function checkout(){
    //Asks for the name and address for the delivery
    const clientName = prompt("Qual é o seu nome?");
    const clientAddress = prompt("Qual é o endereço da entrega?");

    //Will update the final Price of the order and convert it to the format "1.23"
    totalPrice = totalPrice.replace(",", ".");
    totalPrice = Number(totalPrice).toFixed(2);

    //Converts the order into a URL to send to WhatsApp
    let text = encodeURIComponent("Olá, gostaria de fazer o pedido:§- Prato: " + dishName + "§- Bebida: " + drinkName + "§- Sobremesa: " + dessertName + "§Total: R$ " + totalPrice + "§§Nome: " + clientName + "§Endereço: " + clientAddress);
    
    //After converting every "§" to "%C2%A7", this one will turn it into "%0A" so the message can have the line breaks
    text = text.replace(/%C2%A7/g, "%0A");
    window.open("http://wa.me/5532988352666?text=" + text, "_blank");
}
let dishName;
let dishPrice;
let drinkName;
let drinkPrice;
let dessertName;
let dessertPrice;
let totalPrice;