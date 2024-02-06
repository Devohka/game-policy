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


const africaM = document.querySelector(".box-mainland-africa");
const pdAmericaM = document.querySelector(".box-mainland-usa-pd");
const australiaM = document.querySelector(".box-mainland-australia");


const tech = document.querySelector("[data-teh]");

function createHideMenu() {
    menu.style.display = "none";
    skip.style.display = "block";
    technologies.style.display = "block";
};



// Країни/взаємодія

const countryObj = {
    britainO: false,
    cccpO: false,
    germanyO: false,
    japanO: false,
    usaO: false,
};

const usaBtn = document.querySelector("[data-pn]");
const pdAmerica = document.querySelector("[data-pd]");
const japanBtn = document.querySelector("[data-japanBtn]");
const cccpBtn = document.querySelector("[data-cccpBtn]");
const germanyBtn = document.querySelector("[data-germanyBtn]");
const britianBtn = document.querySelector("[data-britianBtn]");
const africa = document.querySelector("[data-africa]");
const australia = document.querySelector("[data-australia]");

// choice

function choiceUsa() {
    usaM.style.borderColor = "BlueViolet";

    japanM.style.borderColor = "red";

    cccpM.style.borderColor = "red";

     germanyM.style.borderColor = "red";

     britainM.style.borderColor = "red";

     pdAmericaM.style.borderColor = "red";
};





// Країни ігрока 

usaBtn.addEventListener("click", () => {
    if(countryObj.usaO === true) {
        skip.textContent = "dsf";
    } else {
        skip.textContent = "dsksd";
        choiceUsa()
    };
});

japanBtn.addEventListener("click", () => {
    if(countryObj.japanO === true) {
        skip.textContent = "dsf";
    } else {
        skip.textContent = "dsksd";
        japanM.style.borderColor = "BlueViolet";
    };
});

cccpBtn.addEventListener("click", () => {
    if(countryObj.cccpO === true) {
        skip.textContent = "dsf";
    } else {
        skip.textContent = "dsksd";
        cccpM.style.borderColor = "BlueViolet";
    };
});

germanyBtn.addEventListener("click", () => {
    if(countryObj.germanyO === true) {
        skip.textContent = "dsf";
    } else {
        skip.textContent = "dsksd";
        germanyM.style.borderColor = "BlueViolet";
    };
});

britianBtn.addEventListener("click", () => {
    if(countryObj.britainO === true) {
        skip.textContent = "dsf";
    } else {
        skip.textContent = "dsksd";
        britainM.style.borderColor = "BlueViolet";
    };
});

// Країни бота

pdAmerica.addEventListener("click", () => {
    skip.textContent = "dsksd";
    pdAmericaM.style.borderColor = "BlueViolet";
});

africa.addEventListener("click", () => {
    skip.textContent = "dsksd";
    africaM.style.borderColor = "BlueViolet";
});

australia.addEventListener("click", () => {
    skip.textContent = "dsksd";
    australiaM.style.borderColor = "BlueViolet";
});



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
        mesaggeTech.textContent = "Ви можете вивчити РAКЕКЕТУ";
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

// britainO: false,
// cccpO: false,
// germanyO: false,
// japanO: false,
// usaO: false,

britain.addEventListener("click", () => {
    countryObj.britainO = true;
    britainM.style.borderColor = "green";
    createHideMenu()
});

germany.addEventListener("click", () => {
    countryObj.germanyO = true;
    germanyM.style.borderColor = "green";
    createHideMenu()
});

cccp.addEventListener("click", () => {
    countryObj.cccpO = true;
    cccpM.style.borderColor = "green";
    createHideMenu()
});

japan.addEventListener("click", () => {
    countryObj.japanO = true;
    japanM.style.borderColor = "green";
    createHideMenu()
});


usa.addEventListener("click", () => {
    countryObj.usaO = true;
    usaM.style.borderColor = "green";
    createHideMenu()
});