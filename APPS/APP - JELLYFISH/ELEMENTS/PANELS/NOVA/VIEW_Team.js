import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Branches from "../../../../../CONSOLE/LUNGS/Branches.js";
import Create from "../../../CREATE/Create.js";

export default class PANEL_Bundler_Bar extends Branches{

    constructor(){

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.LABEL_SLOT_ONE = 'UNSET';
        this.LABEL_SLOT_TWO = 'UNSET';
        this.LABEL_SLOT_THREE = 'UNSET';
        this.LABEL_SLOT_FOUR = 'UNSET';
        this.LABEL_SLOT_FIVE = 'UNSET';
        this.LABEL_SLOT_SIX = 'UNSET';
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
            this.LABEL_SLOT_ONE,
            this.LABEL_SLOT_TWO,
            this.LABEL_SLOT_THREE,
            this.LABEL_SLOT_FOUR,
            this.LABEL_SLOT_FIVE,
            this.LABEL_SLOT_SIX
        ]);
        return WRAPPER_Page;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_NOVA();

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#TEXT();

    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        // ============ //
        // << HEADER >> //
        // ============ //

        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Plushie-Panel'
        }).INIT();
        this.HEADER_PANEL.innerHTML = 'CURRENT TEAM';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_SLOT_ONE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_SLOT_ONE'
        }).INIT();
        this.LABEL_SLOT_TWO = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_SLOT_TWO'
        }).INIT();
        this.LABEL_SLOT_THREE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_SLOT_THREE'
        }).INIT();
        this.LABEL_SLOT_FOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_SLOT_FOUR'
        }).INIT();
        this.LABEL_SLOT_FIVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_SLOT_FIVE'
        }).INIT();
        this.LABEL_SLOT_SIX = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_SLOT_SIX'
        }).INIT();

        this.LABEL_SLOT_ONE.innerHTML = this.SESSION.NOVA.PLUSHIE.ACTIVE.ONE;
        this.LABEL_SLOT_TWO.innerHTML = this.SESSION.NOVA.PLUSHIE.ACTIVE.TWO;
        this.LABEL_SLOT_THREE.innerHTML = this.SESSION.NOVA.PLUSHIE.ACTIVE.THREE;
        this.LABEL_SLOT_FOUR.innerHTML = this.SESSION.NOVA.PLUSHIE.ACTIVE.FOUR;
        this.LABEL_SLOT_FIVE.innerHTML = this.SESSION.NOVA.PLUSHIE.ACTIVE.FIVE;
        this.LABEL_SLOT_SIX.innerHTML = this.SESSION.NOVA.PLUSHIE.ACTIVE.SIX;
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_SLOT(PARAMETER_VALUE, PARAMETER_SLOT) {
        this[`LABEL_SLOT_${PARAMETER_SLOT}`].innerHTML = PARAMETER_VALUE;
    };
}