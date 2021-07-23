function dishSelection(selectedItemName){
    //Takes the full name of the item from the HTML and save it to dishName
    dishName = document.querySelector("." + selectedItemName + " h3");
    dishName = dishName.innerHTML;

    //Takes the price from the HTML, convert it to a number and save it to dishPrice
    dishPrice = document.querySelector("." + selectedItemName + " .price");
    dishPrice = dishPrice.innerHTML;
    dishPrice = dishPrice.replace("R$ ","");
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
    //Takes the full name of the item from the HTML and save it to drinkName
    drinkName = document.querySelector("." + selectedItemName + " h3");
    drinkName = drinkName.innerHTML;

    //Takes the price from the HTML, convert it to a number and save it to drinkPrice
    drinkPrice = document.querySelector("." + selectedItemName + " .price");
    drinkPrice = drinkPrice.innerHTML;
    drinkPrice = drinkPrice.replace("R$ ","");
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
    //Takes the full name of the item from the HTML and save it to dessertName
    dessertName = document.querySelector("." + selectedItemName + " h3");
    dessertName = dessertName.innerHTML;

    //Takes the price from the HTML, convert it to a number and save it to dessertPrice
    dessertPrice = document.querySelector("." + selectedItemName + " .price");
    dessertPrice = dessertPrice.innerHTML;
    dessertPrice = dessertPrice.replace("R$ ","");
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
function checkout(){
    //Asks for the name and address for the delivery
    const clientName = prompt("Qual é o seu nome?");
    const clientAddress = prompt("Qual é o endereço da entrega?");

    //Will update the final Price of the order and convert it to the format (1.23)
    totalPrice = dishPrice + drinkPrice + dessertPrice;
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