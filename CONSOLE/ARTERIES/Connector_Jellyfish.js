import Create from "../../APPS/APP - JELLYFISH/CREATE/Create.js";
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
}