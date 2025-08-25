import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";

export default class EL_VIEW_Heritage extends Stalk{

    constructor() {

        super();

        // << WRAPPERS
        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PANEL = 'UNSET';
        this.HEADER_SURNAME = 'UNSET';
        this.HEADER_DRAGONS = 'UNSET';
        this.HEADER_ELDERS = 'UNSET';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_SURNAME = 'UNSET';
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

            this.HEADER_AGE,
            this.LABEL_AGE,

            this.HEADER_SURNAME,
            this.LABEL_SURNAME,
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
        this.HEADER_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();
        this.HEADER_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'HISTORICAL';
        this.HEADER_AGE.innerHTML = '::AGE::';
        this.HEADER_SURNAME.innerHTML = '::SURNAME::';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-AGE'
        }).INIT();
        this.LABEL_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-SURNAME'
        }).INIT();

        this.LABEL_AGE.innerHTML = ' ';
        this.LABEL_SURNAME.innerHTML = ' ';

    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_AGE(PARAMETER_VALUE){
        this.LABEL_AGE.innerHTML = PARAMETER_VALUE;
    };
    SET_SURNAME(PARAMETER_VALUE){
        this.LABEL_SURNAME.innerHTML = PARAMETER_VALUE;
    };
}