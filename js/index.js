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

const mesaggeTech = document.querySelector("[data-titleTeh]");

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
 mesaggeTech.textContent = "Ви можете вивчити ПВО";
});

airDefense.addEventListener("click", () => {
    if ( objTech.sniperO === true) {
        mesaggeTech.textContent = "Ви можете вивчити ТРИВОГУ";
        objTech.airDefenseO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ СНАЙПЕРА";
    }
});

anxienty.addEventListener("click", () => {
    if ( objTech.airDefenseO === true) {
        mesaggeTech.textContent = "Ви можете вивчити РАДАР";
        objTech.anxientyO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ ПВО";
    }
});

radar.addEventListener("click", () => {
    if ( objTech.anxientyO === true) {
        mesaggeTech.textContent = "Ви можете вивчити РОЗВІТКУ";
       objTech.radarO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ ТРИВОГУ";
    }
});

debriefing.addEventListener("click", () => {
    if ( objTech.radarO === true) {
        mesaggeTech.textContent = "Ви можете вивчити ШИНИ";
       objTech.debriefingO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ ТРИВОГУ";
    }
});

tires.addEventListener("click", () => {
    if ( objTech.debriefingO === true) {
        mesaggeTech.textContent = "Ви можете вивчити ЛІТАК/МАШИНУ";
       objTech.tiresO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ РОЗВІТКУ";
    }
});

plane.addEventListener("click", () => {
    if ( objTech.tiresO === true) {
        mesaggeTech.textContent = "Ви можете вивчити КОРАБЕЛЬ";
       objTech.planeO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ ШИНИ";
    }
});

ships.addEventListener("click", () => {
    if ( objTech.planeO === true) {
        mesaggeTech.textContent = "Ви можете вивчити РКЕКЕТУ";
       objTech.shipsO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ ЛІТАК/МАШИНУ";
    }
});

rocket.addEventListener("click", () => {
    if ( objTech.shipsO === true) {
        mesaggeTech.textContent = "Ви можете вивчити МАЛУ-АТОМНУ БОМБУ";
       objTech.rocketO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ КОРАБЛІ";
    }
});

sab.addEventListener("click", () => {
    if ( objTech.rocketO === true) {
        mesaggeTech.textContent = "Ви можете вивчити ЦАРЬ БОМБУ";
       objTech.sabO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ РАКЕТУ";
    }
});

tb.addEventListener("click", () => {
    if ( objTech.sabO === true) {
        mesaggeTech.textContent = "ВИ ВИВЧИЛИ ВСІ ТЕХНОЛОГІЇ";
       objTech.tbO = true;  
    } else {
        mesaggeTech.textContent = "ВИВЧІТЬ МВЛУ-АТОМНУ БОМБУ";
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