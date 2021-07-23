function dishSelection(selectedItemName, selectedItemPrice){
    dishName = selectedItemName;
    dishprice = selectedItemPrice;

    const selectionRemove = document.querySelector(".dishes .selected");
    const checkmarkRemove = document.querySelector(".dishes .selected .checkmark");
    if (selectionRemove !== null){
        selectionRemove.classList.remove("selected");
        checkmarkRemove.classList.add("hidden");
    }

    const dishAdd = document.querySelector("." + selectedItemName);
    dishAdd.classList.add("selected");
    const checkmarkAdd = document.querySelector("." + selectedItemName + " .checkmark");
    checkmarkAdd.classList.remove("hidden");
    
    checkIfReady();
}
function drinkSelection(selectedItemName, selectedItemPrice){
    drinkName = selectedItemName;
    drinkPrice = selectedItemPrice;

    const selectionRemove = document.querySelector(".drinks .selected");
    const checkmarkRemove = document.querySelector(".drinks .selected .checkmark");
    if (selectionRemove !== null){
        selectionRemove.classList.remove("selected");
        checkmarkRemove.classList.add("hidden");
    }

    const drinkAdd = document.querySelector("." + selectedItemName);
    drinkAdd.classList.add("selected");
    const checkmarkAdd = document.querySelector("." + selectedItemName + " .checkmark");
    checkmarkAdd.classList.remove("hidden");
    
    checkIfReady();
}
function dessertSelection(selectedItemName, selectedItemPrice){
    dessertName = selectedItemName;
    dessertPrice = selectedItemPrice;

    const selectionRemove = document.querySelector(".desserts .selected");
    const checkmarkRemove = document.querySelector(".desserts .selected .checkmark");
    if (selectionRemove !== null){
        selectionRemove.classList.remove("selected");
        checkmarkRemove.classList.add("hidden");
    }

    const dessertAdd = document.querySelector("." + selectedItemName);
    dessertAdd.classList.add("selected");
    const checkmarkAdd = document.querySelector("." + selectedItemName + " .checkmark");
    checkmarkAdd.classList.remove("hidden");

    checkIfReady();
}
function checkIfReady(){
    const makeReady = document.querySelector(".ready");
    const hideNotReady = document.querySelector(".not-ready");
    if(dishprice !== undefined && drinkPrice !== undefined && dessertPrice !== undefined){
        makeReady.classList.remove("hidden");
        hideNotReady.classList.add("hidden");
    }
}


let dishName;
let dishprice;
let drinkName;
let drinkPrice;
let dessertName;
let dessertPrice;