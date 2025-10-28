import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class EL_INPUT_Category extends Stalk{

    constructor() {

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PANEL = 'UNSET';

    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PANEL,

        ]);
        return WRAPPER_Page;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        // =========== //
        // << BUILD >> //
        // =========== //

    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT() {
        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();
        this.HEADER_PANEL.innerHTML = 'ADD ELEMENT CATEGORY';
    };
}