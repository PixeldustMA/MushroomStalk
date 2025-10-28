import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Branches from "../../../../../CONSOLE/LUNGS/Branches.js";
import Create from "../../../CREATE/Create.js";

export default class PANEL_Bundler_Character extends Branches{

    constructor(){

        super();

        // ========= //
        // ## ROW ## //
        // ========= //

        this.WRAPPER_ROW = 'UNSET';

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_CHARACTER = 'UNSET';
        this.HEADER_CHARACTER_NAME = 'UNSET';
        this.HEADER_CODE = 'UNSET';
        this.HEADER_CHARACTER_CODE = 'UNSET';
        this.HEADER_SECTION = 'UNSET';
        this.HEADER_SECTION_NUMBER = 'UNSET';

        // =========== //
        // ## CELLS ## //
        // =========== //

        this.CELL_CODE = 'UNSET';
        this.CELL_NAME = 'UNSET';
        this.CELL_SECTION = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ROW = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //


        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ROW.append(...[
            this.CELL_CHARACTER_NAME(),
            this.CELL_CHARACTER_CODE(),
            this.CELL_CHARACTER_SECTION()
        ]);
        console.log(this.WRAPPER_ROW)
        return this.WRAPPER_ROW;
    };

    // =========== //
    // ## CELLS ## //
    // =========== //

    CELL_CHARACTER_NAME(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_NAME.append(...[
            this.HEADER_CHARACTER,
            this.HEADER_CHARACTER_NAME
        ]);
        return this.CELL_NAME;
    };
    CELL_CHARACTER_CODE(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_CODE.append(...[
            this.HEADER_CODE,
            this.HEADER_CHARACTER_CODE
        ]);
        return this.CELL_CODE;
    };
    CELL_CHARACTER_SECTION(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        let wrapper = new Connector_Jellyfish().INITIALISE_WRAPPER();
        // wrapper.classList.add('DISPLAY_LINE');

        // =============== //
        // << LISTENERS >> //
        // =============== //


        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        wrapper.append(...[
            this.HEADER_SECTION,
            this.HEADER_SECTION_NUMBER
        ]);
        return wrapper;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.#TEXT();
        await this.#CELLS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        // ================ //
        // << CHARACTERS >> //
        // ================ //

        this.HEADER_CHARACTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Character'
        }).INIT();
        this.HEADER_CHARACTER_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Character-Name'
        }).INIT();

        this.HEADER_CHARACTER.innerHTML = 'CHARACTER::';
        this.HEADER_CHARACTER_NAME.innerHTML = ' ';

        // ========== //
        // << CODE >> //
        // ========== //

        this.HEADER_CODE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Code'
        }).INIT();
        this.HEADER_CHARACTER_CODE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Character-Code'
        }).INIT();

        this.HEADER_CODE.innerHTML = 'CODE::';
        this.HEADER_CHARACTER_CODE.innerHTML = ' ';

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.HEADER_SECTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Section'
        }).INIT();
        this.HEADER_SECTION_NUMBER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Section-Name'
        }).INIT();

        this.HEADER_SECTION.innerHTML = 'SECTION::';
        this.HEADER_SECTION_NUMBER.innerHTML = ' ';

    };
    async #CELLS() {

        this.CELL_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_CODE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_SECTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_NAME(PARAMETER_VALUE) {
        this.HEADER_CHARACTER_NAME.innerHTML = PARAMETER_VALUE;
    };
    SET_CODE(PARAMETER_VALUE) {
        this.HEADER_CHARACTER_CODE.innerHTML = PARAMETER_VALUE;
    };
    SET_SECTION(PARAMETER_VALUE) {
        this.HEADER_SECTION_NUMBER.innerHTML = PARAMETER_VALUE;
    };

};