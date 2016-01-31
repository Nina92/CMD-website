var projectForm = document.querySelector("#project");
var stageForm = document.querySelector("#stage");
var chooseProject = document.querySelector("#chooseProject");
var chooseStage = document.querySelector("#chooseStage");

function showStageForm() {
    stageForm.classList.remove("hideFieldset");
    projectForm.classList.add("hideFieldset");
}

function showProjectForm() {
    stageForm.classList.add("hideFieldset");
    projectForm.classList.remove("hideFieldset");
}

function toggle() {
    stageForm.classList.add("hideFieldset");
    projectForm.classList.add("hideFieldset");

    chooseProject.addEventListener("click", function() {
        showProjectForm();
    });

    chooseStage.addEventListener("click", function() {
        showStageForm();
    });
}

if (stageForm != null) {
    toggle();
}


//formulierpagina
var aanmelden = document.querySelector("div > h1");
var contentAanmelden = document.querySelector("div");

function showAanmeldenArtikelen() {
    for (i = 1; i < contentAanmelden.childElementCount; i++) {
        contentAanmelden.children[i].classList.toggle("hideRelatedContent");
    }
}

if (aanmelden != null) {
    aanmelden.addEventListener("click", function() {
                showAanmeldenArtikelen()
            }
    );
}


//artikelpagina
var opleiding = document.querySelector("main > article h1");
var mainArtikel = document.querySelector("main > article ");

function showMainArtikelen() {
    for (i = 1; i < mainArtikel.childElementCount; i++) {
        mainArtikel.children[i].classList.toggle("hideRelatedContent");
    }

}

if (opleiding != null) {
    opleiding.addEventListener("click", function() {
                    showMainArtikelen()
            }
    );
}


//related articles
var meerLezen = document.querySelector(".related > h2"); //pakt de h2
var artikelen = document.querySelectorAll(".related > article");

function showArtikelen() {
    for (i = 0; i < artikelen.length; i++) {
        artikelen[i].classList.toggle("hideRelatedContent");
    }

}

function meerLezenToggle() {
    for(i = 0; i < artikelen.length; i++) {
        artikelen[i].classList.add("hideRelatedContent");
    }


    meerLezen.addEventListener("click", function() {
                    showArtikelen()
            }
    );
}

meerLezenToggle();


//aside
var kopjes = document.querySelectorAll("aside > section h2");
var laatsteMeldingen = document.querySelectorAll("aside > section:nth-of-type(1) article");
var uitagendaContent = document.querySelectorAll("aside > section:nth-of-type(2) article");

function showLaatsteMeldingen() {
    for (i = 0; i < laatsteMeldingen.length; i++) {
        laatsteMeldingen[i].classList.toggle("hideRelatedContent");
    }
}

function showUitagenda() {
    for (i = 0; i < uitagendaContent.length; i++) {
        uitagendaContent[i].classList.toggle("hideRelatedContent");
    }
}

function asideToggle() {
    for (i = 0; i < laatsteMeldingen.length; i++) {
        laatsteMeldingen[i].classList.add("hideRelatedContent");
    }

    for (i = 0; i < uitagendaContent.length; i++) {
        uitagendaContent[i].classList.add("hideRelatedContent");
    }


    kopjes[0].addEventListener("click", function() {
            showLaatsteMeldingen()
        }
    );

    kopjes[1].addEventListener("click", function() {
            showUitagenda()
        }
    );
}

asideToggle();
