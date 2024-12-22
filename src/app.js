// All functionality of the game ends here
//Imports
import { closeModal, openModal } from "./scripts/nav.js";
import { rainningEffect } from "./scripts/rainEffect.js"
import { dateCellphone } from "./scripts/topCellphone.js";
import { cellphoneButtons, openApps } from "./scripts/cellphoneBtns.js";

document.addEventListener('DOMContentLoaded', () => {
    // Rainning effect on the background
    rainningEffect();

    //Nav functionality
    openModal();
    closeModal();

    //Cellphone navbar
    dateCellphone();

    // Navigatins buttons cellphone & apps
    cellphoneButtons();
    openApps();
})