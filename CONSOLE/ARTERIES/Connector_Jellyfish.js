import JELLYFISH_Collapsible from "../../APPS/APP - JELLYFISH/ELEMENTS/COLLAPSIBLE/Jellyfish_Collapsible.js";
import Jellyfish_Picker from "../../APPS/APP - JELLYFISH/ELEMENTS/PICKER/Jellyfish_Picker.js";
import Branches from "../LUNGS/Branches.js";

export default class Connector_Jellyfish extends Branches{

    /**
     * ## JELLYFISH CONNECTOR CONSTRUCTOR
     */
    constructor(){super()};

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    /**
     * ## LOAD A BASIC WRAPPER
     * 
     * -----------------------
     * 
     * Create a basic wrapper div
     */
    INITIALISE_WRAPPER() {
        return document.createElement('div')
    };
    COLLAPSIBLE(PARAMETER_TITLE, PARAMETER_CONTENT) {
        return new JELLYFISH_Collapsible({
            // COLLAPSIBLE_CONFIG_CHARACTER: PARAMETER_CHARACTER,
            COLLAPSIBLE_CONFIG_CONTENT: PARAMETER_CONTENT,
            // COLLAPSIBLE_CONFIG_TAG: PARAMETER_TAG,
            COLLAPSIBLE_CONFIG_TITLE: PARAMETER_TITLE
        }).DRAW();
    };
    async FOLDER_PICKER(PARAMETER_DISPLAY){
        return await new Jellyfish_Picker().CHOOSE_FOLDER(PARAMETER_DISPLAY)
    };
}