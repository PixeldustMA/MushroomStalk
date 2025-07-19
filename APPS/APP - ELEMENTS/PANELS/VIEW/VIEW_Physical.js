import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";

export default class EL_VIEW_Physical extends Stalk{

    constructor() {

        super();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.HEADER_COLOUR = 'UNSET';
        this.HEADER_DESCRIPTION = 'UNSET';

        this.LABEL_COLOUR = 'UNSET';
        this.LABEL_DESCRIPTION = 'UNSET';

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

            this.HEADER_COLOUR,
            this.LABEL_COLOUR,

            this.HEADER_DESCRIPTION,
            this.LABEL_DESCRIPTION,
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
        this.HEADER_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();
        this.HEADER_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'PHYSICAL';
        this.HEADER_COLOUR.innerHTML = '::COLOUR::';
        this.HEADER_DESCRIPTION.innerHTML = '::DESCRIPTION::';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-AGE'
        }).INIT();
        this.LABEL_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-DESCRIPTION'
        }).INIT();

        this.LABEL_COLOUR.innerHTML = ' ';
        this.LABEL_DESCRIPTION.innerHTML = ' ';

    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_COLOUR(PARAMETER_VALUE){
        this.LABEL_COLOUR.innerHTML = PARAMETER_VALUE;
    };
    SET_DESCRIPTION(PARAMETER_VALUE){
        this.LABEL_DESCRIPTION.innerHTML = PARAMETER_VALUE;
    };
}