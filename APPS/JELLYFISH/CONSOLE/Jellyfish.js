import { JellyfishButtonPanel } from "../COMPONENTS/BUTTONPANEL/JellyfishButtonPanel.js";
import { JellyfishNavigation } from "../COMPONENTS/NAVIGATION/NavigationMenu.js";
import { JellyfishTracker } from "../COMPONENTS/TRACKER/JellyfishTracker.js";


import { jelly } from "../SETTINGS/Jellyfish.js";


/**
 * ACCESS JELLYFISH COMPONENTS
 */
class Jellyfish {

    constructor() {
        this.NAVROUTE = {};
        this.CONNECT = new jelly();   
    };

    /**
     * LOAD THE JELLYFISH APP
     * @returns LIST OF ROUTES
     */
    async loadJellyfish() {

        await fetch('../../APPS/JELLYFISH/SETTINGS/NavRoutes.json')
        .then((response) => (
            this.NAVROUTE = response.json()
        )) 
        .then(json => 
            Object.keys(json).forEach((tab) => {
                this.NAVROUTE[tab] = json[tab];
        }));     
        return this.NAVROUTE;
    }
    /**
     * CREATE A NAVIGATION MENU
     * @returns {HTMLElement} NAVIGATION MENU
     */
    async navigate() {

        await this.loadJellyfish();
        const nav = document.createElement('jellyfish-navigation');
            nav.NAVIGATION = this.NAVROUTE;
        return nav;
    };
    /**
     * CREATE A DAY TRACKER WITH CHECKBOXES AND CUSTOM STYLING
     * @returns {HTMLElement} DAY TRACKER TABLE
     */
    tracker() {
        return document.createElement('jellyfish-tracker');
    }
    /**
     * DRAW A CUSTOM BUTTON PANEL TO THE PAGE
     * @returns {HTMLElement} BUTTON PANEL
     */
    buttonPanel() {
        return document.createElement('jellyfish-buttonpanel');
    }
    /**
     * CREATE A KEYPRESS ACTIVATED CUSTOM SIDE MENU
     * @returns {HTMLElement} SIDE MENU
     */
    sideMenu() {
        return document.createElement('jellyfish-sidemenu');
    }
}

export {Jellyfish};

