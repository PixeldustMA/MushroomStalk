import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";

export default class EX_VIEW_Space extends Stalk{

    constructor() {

        super();

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

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#TEXT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT() {

        // ============ //
        // << HEADER >> //
        // ============ //

        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'SPACE';

        // ============ //
        // << LABELS >> //
        // ============ //

    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_VALUE(PARAMETER_VALUE){
        this.LABEL.innerHTML = PARAMETER_VALUE;
    };
}