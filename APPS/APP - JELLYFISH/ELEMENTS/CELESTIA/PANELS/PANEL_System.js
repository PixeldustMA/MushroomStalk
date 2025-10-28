import Connector_Jellyfish from "../../CONSOLE/ARTERIES/Connector_Jellyfish";
import Create from "../APP - JELLYFISH/CREATE/Create";

export default class PANEL_SYSTEM {

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
        this.LABEL_SYSTEM = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_SPACE = 'UNSET';
        this.SELECT_SECTOR = 'UNSET';
        this.SELECT_SYSTEM = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_SPACE = [];
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
            this.SELECT_SECTOR,

            this.LABEL_SYSTEM,
            this.SELECT_SYSTEM
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
        this.LABEL_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Choose-System'
        }).INIT();

        // ================= //
        // << ADJUSTMENTS >> //
        // ================= //

        this.LABEL_SPACE.innerHTML = 'SPACE';
        this.LABEL_SECTOR.innerHTML = 'SECTOR';
        this.LABEL_SYSTEM.innerHTML = 'SYSTEM';
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
        this.SELECT_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TYPE: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_System-Choice',
            CREATE_CONFIG_TAGGING_BOXNAME: 'SYSTEM-SELECT',
            CREATE_CONFIG_PERSONALITY_CLASSES:['FORM_SELECT']
        }).INIT();
    };
    #OPTIONS() {

                // const space = await this.Kessikaya.SEARCH_SPACE();
                // space.unshift('CHOOSE SPACE');
    }
}

    /**
     * ## PANEL - SYSTEM
     * 
     * -----------------------
     * 
     * Create a panel focussed around system
     * 
     * ------------------------
     * ### RETURNS -->> {PANEL}
     * @returns {HTMLElement}
     */
    async #SYSTEM_PANEL() {


        // << OPTIONS >> //
        // const space = await this.Kessikaya.SEARCH_SPACE();
        // space.unshift('CHOOSE SPACE');

        // << WRAPPERS >> //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Sector-Choice'
        }).init();

        // << INSTANCES >> //
        const holdDiv = new create({
            tag: 'select'
        });

        // << LISTENERS >> //
        selectSpace.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;

            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector', spaceChoice);
            availableOptions.unshift("SECTOR OPTIONS");
            holdDiv.CHANGE_OPTIONS(selectSector, availableOptions);
        });
        selectSector.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;

            let availableOptions = this.Kessikaya.SEARCH_PLANETS('System', spaceChoice, sectorChoice);
            availableOptions.unshift("SYSTEM OPTIONS");
            holdDiv.CHANGE_OPTIONS(selectSystem, availableOptions);
        });
        selectSystem.addEventListener('change', (event) => {

            this.memory.SYSTEM.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.SYSTEM.SECTOR = selectSector.options[selectSector.selectedIndex].text;
            this.memory.SYSTEM.SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
        });

        // << ATTACHMENNTS >> //
        wrapper.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            selectSector,

            labelSystem,
            selectSystem
        ]);
        return wrapper;
    };