import Connector_Jellyfish from "../../CONSOLE/ARTERIES/Connector_Jellyfish";
import Create from "../APP - JELLYFISH/CREATE/Create";

export default class PANEL_SECTOR {

    constructor() {

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_MEMORY = {};

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.LABEL_SPACE = 'UNSET';
        this.LABEL_SECTOR = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_SPACE = 'UNSET';
        this.SELECT_SECTOR = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //
        this.OPTIONS_SPACE = []
    };

        /**
     * ## PANEL - SPACE
     * 
     * -----------------------
     * 
     * Create a panel focussed around space
     * 
     * ------------------------
     * ### RETURNS -->> {PANEL}
     * @returns {HTMLElement}
     */
    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Character = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_UPDATE();

        // ================== //
        // << ATTACHMENNTS >> //
        // ================== //

        WRAPPER_Character.append(...[
            this.LABEL_SPACE,
            this.SELECT_SPACE,

            this.LABEL_SECTOR,
            this.SELECT_SECTOR
        ]);
        return WRAPPER_Character;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_UPDATE() {
        this.SELECT_SPACE.addEventListener('change', (event) => {
            let CHOICE_Space = this.SELECT_SPACE.options[this.SELECT_SPACE.selectedIndex].text;
            // const holdDiv = new create({
            //     tag: 'select'
            // });
            let availableOptions = this.INSTANCE_KESSIKAYA.SEARCH_PLANETS('Sector', spaceChoice);
            availableOptions.unshift("SECTOR OPTIONS");
            holdDiv.CHANGE_OPTIONS(selectSector, availableOptions);
        });
        this.SELECT_SECTOR.addEventListener('change', (event) => {
            this.DATA_MEMORY.SECTOR.SPACE = this.SELECT_SPACE.options[this.SELECT_SPACE.selectedIndex].text;
            this.DATA_MEMORY.SECTOR.SECTOR = this.SELECT_SECTOR.options[this.SELECT_SECTOR.selectedIndex].text;
        });
    }

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE() {

        await this.#TEXT();
        await this.#SELECT();
        await this.#OPTIONS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT() {

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Choose-Space'
        }).INIT();
        this.LABEL_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Choose-Sector'
        }).INIT();

        // ================= //
        // << ADJUSTMENTS >> //
        // ================= //

        this.LABEL_SPACE.innerHTML = 'SPACE';
        this.LABEL_SECTOR.innerHTML = 'SECTOR';
    };
    async #SELECT() {

        this.SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Space-Choice',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SPACE,
            CREATE_CONFIG_TAGGING_BOXNAME: 'SPACE-SELECT',
            CREATE_CONFIG_PERSONALITY_CLASSES:['FORM_SELECT']
        }).INIT();
        this.SELECT_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Sector-Choice',
            CREATE_CONFIG_TAGGING_BOXNAME: 'SECTOR-SELECT',
            CREATE_CONFIG_PERSONALITY_CLASSES:['FORM_SELECT']
        }).INIT();

    };
    #OPTIONS() {

                // const space = await this.Kessikaya.SEARCH_SPACE();
                // space.unshift('CHOOSE SPACE');
    }
}