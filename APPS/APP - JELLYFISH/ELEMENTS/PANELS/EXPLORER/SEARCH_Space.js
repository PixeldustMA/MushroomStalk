import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";

export default class EX_SEARCH_Space extends Stalk{

    constructor(){
        super();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.LABEL_SELECT_SPACE = 'UNSET';

        // ============ //
        // << SELECT >> //
        // ============ //

        this.SELECT_SPACE = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

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

            this.LABEL_SELECT_SPACE,
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

        await this.#OPTIONS();
        await this.#TEXT();
        await this.#SELECT();
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Space-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'SPACE';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Space-Select'
        }).INIT();

        this.LABEL_SELECT_SPACE.innerHTML = 'Select a space area to edit';

    };
    async #SELECT() {
        this.SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'space',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Space',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SPACE
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_SPACE = this.SESSION.EXPLORER.LISTS.SPACE;
        this.OPTIONS_SPACE.unshift('CHOOSE A SPACE AREA');
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_SPACE(){
        const HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_SPACE);
    };
}