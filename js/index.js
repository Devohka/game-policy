const usa = document.querySelector("[data-usa]");
const japan = document.querySelector("[data-japan]");
const cccp = document.querySelector("[data-cccp]");
const germany = document.querySelector("[data-germany]");
const britain = document.querySelector("[data-britain]");


const menu = document.querySelector(".box-game");



function createHideMenu() {
    menu.style.display = "none";

};



usa.addEventListener("click", () => {
    createHideMenu()
});