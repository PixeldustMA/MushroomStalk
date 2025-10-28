import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import ELEMENT_Manager from "../../../../APP - ELEMENTS/Element_Manager.js";
import Create from "../../../CREATE/Create.js";

export default class EX_UPDATE_Space extends Stalk{

    constructor() {

        super();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.LABEL_SPACE = 'UNSET';

        // =========== //
        // << INPUT >> //
        // =========== //

        // ============= //
        // << OPTIONS >> //
        // ============= //

        this.OPTIONS_SPACE = [];

        // ============ //
        // << SELECT >> //
        // ============ //

        this.SELECT_SPACE = 'UNSET';
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

            this.LABEL_SPACE,
            this.SELECT_SPACE
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

        await this.REQUEST_SESSION_EXPLORER();

        // =========== //
        // << BUILD >> //
        // =========== //

    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //




    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_VALUE(PARAMETER_VALUE){
        this.LABEL_VALUE.innerHTML = PARAMETER_VALUE;
    };
}