import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import EL_Multi_Input from "../INPUT/EL_Multi_Input.js";;

export default class EL_UPDATE_Heritage {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_HERITAGE = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_HERITAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_DRAGON = 'UNSET';
        this.BUTTON_ELDER = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_SELECT_CHARACTER = 'NONE';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_PHYSICAL = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_PHYSICAL.append(...[
            this.HEADER_PHYSICAL,
            this.BUTTON_DRAGON,
            this.WRAPPER_DISPLAY
        ]);
        return this.WRAPPER_PHYSICAL;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_INPUT_USE(){
        this.BUTTON_USE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.BLOCK_INPUT_USE.DRAW());
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============== //
        // << SESSIONS >> //
        // ============== //

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#HEADERS();
        await this.#BUTTON();
        await this.#BLOCK();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        this.HEADER_PHYSICAL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Taxonomy-Taxonomy',
        }).INIT();

        this.HEADER_PHYSICAL.innerHTML = 'UPDATE PHYSICAL';
    };
    async #BUTTON() {
        this.BUTTON_USE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Taxonomy-Category',
        }).INIT();

        this.BUTTON_USE.innerHTML = 'UPDATE USES';
    };
    async #BLOCK() {
        await this.BLOCK_INPUT_USE.INITIALISE();
    };

    
};

// ADD SETTINGS TO EDIT IN PLACE FOR COLOUR
// USE NEEDS TO BE ADDED AS AN INPUT OR EDIT IN PLACE