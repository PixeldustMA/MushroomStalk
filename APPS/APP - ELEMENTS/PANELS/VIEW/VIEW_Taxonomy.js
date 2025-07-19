import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";

export default class EL_VIEW_Taxonomy extends Stalk{

    constructor() {

        super();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.HEADER_CATEGORY = 'UNSET';
        this.HEADER_TYPE = 'UNSET';

        this.LABEL_CATEGORY = 'UNSET';
        this.LABEL_TYPE = 'UNSET';

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

            this.HEADER_CATEGORY,
            this.LABEL_CATEGORY,

            this.HEADER_TYPE,
            this.LABEL_TYPE,
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
        this.HEADER_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();
        this.HEADER_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'ELEMENT NAME';
        this.HEADER_CATEGORY.innerHTML = '::CATEGORY::';
        this.HEADER_TYPE.innerHTML = '::TYPE::';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-Category'
        }).INIT();
        this.LABEL_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-Type'
        }).INIT();

        this.LABEL_CATEGORY.innerHTML = ' ';
        this.LABEL_TYPE.innerHTML = ' ';

    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_CATEGORY(PARAMETER_VALUE){
        this.LABEL_CATEGORY.innerHTML = PARAMETER_VALUE;
    };
    SET_ELEMENT(PARAMETER_VALUE) {
        this.HEADER_PANEL.innerHTML = PARAMETER_VALUE;
        console.log(this.HEADER_PANEL)
    };
    SET_TYPE(PARAMETER_VALUE){
        this.LABEL_TYPE.innerHTML = PARAMETER_VALUE;
    };
}