const usa = document.querySelector("[data-usa]");
const japan = document.querySelector("[data-japan]");
const cccp = document.querySelector("[data-cccp]");
const germany = document.querySelector("[data-germany]");
const britain = document.querySelector("[data-britain]");

const technologies = document.querySelector("[data-technologies]");
const skip = document.querySelector("[data-skip]");
const closeTech = document.querySelector("[data-close]");

const sniper = document.querySelector("[data-sniper]");
const plane = document.querySelector("[data-plane]");
const ships = document.querySelector("[data-ships]");
const rocket = document.querySelector("[data-rocket]");
const sab = document.querySelector("[data-sab]");
const tb = document.querySelector("[data-tb]");
const debriefing = document.querySelector("[data-debriefing]");
const tires = document.querySelector("[data-tires]");
const radar = document.querySelector("[data-radar]");
const anxienty = document.querySelector("[data-anxiety]");
const airDefense = document.querySelector("[data-airDefense]");


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



// Технології
closeTech.addEventListener("click", () => {
    tech.style.display = "none";
});

technologies.addEventListener("click", () => {
    tech.style.display = "block";
});


// самі технології

const objTech = {
    sniperO: false,
    planeO: false,
    shipsO: false,
    rocketO: false,
    sabO: false,
    tbO: false,
    debriefingO: false,
    tiresO: false,
    radarO: false,
    anxientyO: false,
    airDefenseO: false,

    

};

sniper.addEventListener("click", () => {
 const snip = objTech.sniperO = true;
 localStorage.setItem("snip", JSON.stringify(snip));
});

airDefense.addEventListener("click", () => {
   
    if (localStorage.getItem("snip") === true) {
        skip.textContent = "csdjvj";
    } else {
        skip.textContent = "sssdaadf";
    }
});





// Країни

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