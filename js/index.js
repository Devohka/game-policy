const usa = document.querySelector("[data-usa]");
const japan = document.querySelector("[data-japan]");
const cccp = document.querySelector("[data-cccp]");
const germany = document.querySelector("[data-germany]");
const britain = document.querySelector("[data-britain]");

const technologies = document.querySelector("[data-technologies]");
const skip = document.querySelector("[data-skip]");

const menu = document.querySelector(".box-game");

const usaM = document.querySelector(".box-mainland-usa-pn");
const japanM = document.querySelector(".box-mainland-japan");
const cccpM = document.querySelector(".box-mainland-cccp");
const germanyM = document.querySelector(".box-mainland-germany");
const britainM = document.querySelector(".box-mainland-britain");

const tech = document.querySelector("[data-teh]");

function createHideMenu() {
    menu.style.display = "none";
    skip.style.display = "block";
    technologies.style.display = "block";
};

technologies.addEventListener("click", () => {
    tech.style.display = "block";
});



britain.addEventListener("click", () => {
    britainM.style.borderColor = "green";
    createHideMenu()
});

germany.addEventListener("click", () => {
    germanyM.style.borderColor = "green";
    createHideMenu()
});

cccp.addEventListener("click", () => {
    cccpM.style.borderColor = "green";
    createHideMenu()
});

japan.addEventListener("click", () => {
    japanM.style.borderColor = "green";
    createHideMenu()
});


usa.addEventListener("click", () => {
    usaM.style.borderColor = "green";
    createHideMenu()
});