function removeSelectedOption(category){
    const previousOption = document.querySelector("." + category + " .selected");
    const previousOptionCheckmark = document.querySelector("." + category + " .selected ion-icon");
    if(previousOption !== null){
        previousOption.classList.remove("selected");
        previousOptionCheckmark.classList.add("hidden");
    }
}
function selectItem(selectedOption){
    const hiddenCheckmark = selectedOption.querySelector("ion-icon");
    hiddenCheckmark.classList.remove("hidden");
    selectedOption.classList.add("selected");
}
function updateOrder(selectedOption, category){
    if(category === "dish"){
        dishName = selectedOption.querySelector("h3").innerHTML;
        dishPrice = selectedOption.querySelector(".price").innerHTML;
    }
    if(category === "drink"){
        drinkName = selectedOption.querySelector("h3").innerHTML;
        drinkPrice = selectedOption.querySelector(".price").innerHTML;
    }
    if(category === "dessert"){
        dessertName = selectedOption.querySelector("h3").innerHTML;
        dessertPrice = selectedOption.querySelector(".price").innerHTML;
    }
}
function checkIfReady(){
    const notReady = document.querySelector(".not-ready");
    const ready = document.querySelector(".ready");
    if(!!dishName && !!drinkName && !!dessertName){
        notReady.classList.add("hidden");
        ready.classList.remove("hidden");
    }
}
function removeCurrency(price){
    price = price.replace("R$ ","");
    return price;
}
function convertToNumber(price){
    price = Number(price.replace(",","."));
    return price;
}
function totalPriceUpdate(){
    totalPrice = (dishPrice + drinkPrice + dessertPrice).toFixed(2);
    totalPrice = totalPrice.replace(".",",");
    document.querySelector(".total-price").innerHTML = "R$ " + totalPrice;
}
function updateCheckout(category){
    const checkoutName = document.querySelector("." + category + "-name");
    const checkoutPrice = document.querySelector("." + category + "-price");
    if(category === "dish"){
        dishPrice = removeCurrency(dishPrice);
        checkoutName.innerHTML = dishName;
        checkoutPrice.innerHTML = dishPrice;
        dishPrice = convertToNumber(dishPrice);
    }
    if(category === "drink"){
        drinkPrice = removeCurrency(drinkPrice);
        checkoutName.innerHTML = drinkName;
        checkoutPrice.innerHTML = drinkPrice;
        drinkPrice = convertToNumber(drinkPrice);
    }
    if(category === "dessert"){
        dessertPrice = removeCurrency(dessertPrice);
        checkoutName.innerHTML = dessertName;
        checkoutPrice.innerHTML = dessertPrice;
        dessertPrice = convertToNumber(dessertPrice);
    }
    totalPriceUpdate();
}
function addNewItem(selectedOption, category){
    removeSelectedOption(category);
    selectItem(selectedOption);
    updateOrder(selectedOption, category);
    updateCheckout(category);
    checkIfReady();
}
function toggleCheckout(){
    const checkoutWindow = document.querySelector(".checkout-window");
    checkoutWindow.classList.toggle("hidden");
}
function confirmOrder(){
    const clientName = prompt("Qual é o seu nome?");
    const clientAddress = prompt("Qual é o endereço da entrega?");
    let text = encodeURIComponent("Olá, gostaria de fazer o pedido:§- Prato: " + dishName + "§- Bebida: " + drinkName + "§- Sobremesa: " + dessertName + "§Total: R$ " + totalPrice + "§§Nome: " + clientName + "§Endereço: " + clientAddress);
    //After converting every "§" to "%C2%A7", this will turn every "%C2%A7" into "%0A" so the message can have the line breaks
    text = text.replace(/%C2%A7/g, "%0A");
    window.open("http://wa.me/5532988352666?text=" + text);
}
let dishName;
let dishPrice;
let drinkName;
let drinkPrice;
let dessertName;
let dessertPrice;
let totalPrice;