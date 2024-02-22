import { jellyRoute } from "../../CONSOLE/JellyfishRoutes.js";
import { jelly } from "../../SETTINGS/Jellyfish.js";

import { JellyfishButton } from "./JellyfishButton.js";

/**
 * CREATE CUSTOM BUTTON
 */
class Buttons extends jelly{

    constructor(buttonpath = "None", buttonName = "None") {
        super()
        this.buttonpath = buttonpath;
        this.buttonName = buttonName;
        this.trails = new jellyRoute();
    }

    /**
     * BUILD REQUESTED BUTTON
     * @returns {HTMLElement} CUSTOM BUTTON
     */
    async build() {

		const button = document.createElement('jellyfish-button');
            button.id = this.buttonName;
        const buttonModule = await import(this.buttonpath); 
        await this.getButtons();

        button.addEventListener('click', (event) => {
            buttonModule[this.buttonName]();
        })
        return button;
    } 
    /**
     * GET A LIST OF ALL CUSTOM BUTTONS
     * @returns {Object} LIST
     */
    async getButtons() {
        this.path = await this.trails.route('BUTTONLIST');
        return await this.Read();
    }
    /**
     * GET BUTTON LIST WITH LOCATION AND STYLE DATA
     * @returns {Object} LIST
     */
    async getuserData() {
        this.path = await this.trails.route("BUTTONRECORD");
        return await this.Read();
    }
}

export { Buttons}
