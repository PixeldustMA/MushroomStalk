import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Branches from "../../../../../CONSOLE/LUNGS/Branches.js";
import Create from "../../../CREATE/Create.js";

export default class WA_SEARCH_Sections extends Branches{

    constructor({
        SECTION_CONFIG_CHARACTER = 0
    }){

        super();

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.TAG_CHARACTER = SECTION_CONFIG_CHARACTER;
        this.TAG_CODE = 'UNSET';

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.LABEL_SELECT_CHARACTER_PART = 'UNSET';
        this.LABEL_SELECT_CHARACTER_SECTION = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_CHARACTER_PART = 'UNSET';
        this.SELECT_CHARACTER_SECTION = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_CHOOSE = 'UNSET';
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

        this.ACTIVATE_OPTIONS_SECTIONS();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PANEL,
            this.LABEL_SELECT_CHARACTER_PART,
            this.SELECT_CHARACTER_PART,
            this.LABEL_SELECT_CHARACTER_SECTION,
            this.SELECT_CHARACTER_SECTION
        ]);
        return WRAPPER_Page;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    ACTIVATE_OPTIONS_SECTIONS(){
        this.SELECT_CHARACTER_PART.addEventListener('change', (event) => {
            let HOLD = new Create({});
            let TAG_Part = HOLD.READ_OPTION_TEXT(this.SELECT_CHARACTER_PART);
            this.OPTIONS_SECTION = this.SESSION.BUNDLER.DATA[this.TAG_CODE].INDEX[TAG_Part];
            this.OPTIONS_SECTION.unshift('CHOOSE A SECTION');
            HOLD.UPDATE_OPTIONS(this.SELECT_CHARACTER_SECTION, this.OPTIONS_SECTION);
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_TOOLBOX();
        this.TAG_CODE = this.SESSION.TOOLBOX.DATA.MEAT[this.TAG_CHARACTER.replace(' ', '_')].CODES.SHORT;
        await this.REQUEST_SESSION_BUNDLER();

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#OPTIONS();
        await this.#TEXT();
        await this.#BUTTONS();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT () {

        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Section-Title'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'CHOOSE A SECTION';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_SELECT_CHARACTER_PART = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Section-Part'
        }).INIT();
        this.LABEL_SELECT_CHARACTER_SECTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Section-Section'
        }).INIT();

        this.LABEL_SELECT_CHARACTER_PART.innerHTML = 'Select a part';
        this.LABEL_SELECT_CHARACTER_SECTION.innerHTML = 'Select a section';

    };
    async #BUTTONS(){
        this.BUTTON_CHOOSE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Section-Choose'
        }).INIT();

        this.BUTTON_CHOOSE.innerHTML = 'CHOOSE';
    };
    async #SELECT(){
        this.SELECT_CHARACTER_PART = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Section-Part',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_PART
        }).INIT();
        this.SELECT_CHARACTER_SECTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Section-Section',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SECTION
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_PART = this.SESSION.TOOLBOX.LISTS.PARTS;
        this.OPTIONS_PART.unshift('CHOOSE A PART');
        this.OPTIONS_SECTION = ['X-X-X-X-X-X-X-X-X-X-X'];
    }; 

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_PART() {
        let HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_CHARACTER_PART);
    };
    GET_SECTION() {
        let HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_CHARACTER_SECTION);
    };
    GET_SHORT_CODE() {
        return this.TAG_CODE;
    };
}