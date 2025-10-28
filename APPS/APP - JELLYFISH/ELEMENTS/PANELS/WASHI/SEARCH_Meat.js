import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Branches from "../../../../../CONSOLE/LUNGS/Branches.js";
import Create from "../../../CREATE/Create.js";

export default class WA_SEARCH_Meat extends Branches{

    constructor(){

        super();

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.LABEL_SELECT_CHARACTER = 'UNSET';
        this.LABEL_SELECT_GROUP = 'UNSET';
        this.LABEL_SELECT_PART = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_CHARACTER = 'UNSET';
        this.SELECT_GROUP = 'UNSET';
        this.SELECT_PART = 'UNSET';

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

        this.ACTIVATE_OPTIONS_GROUP();
        this.ACTIVATE_OPTIONS_WASHI();
        this.ACTIVATE_OPTIONS_CHARACTER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PANEL,

            this.LABEL_SELECT_PART,
            this.SELECT_PART,

            this.LABEL_SELECT_GROUP,
            this.SELECT_GROUP,

            this.LABEL_SELECT_WASHI,
            this.SELECT_WASHI,

            this.LABEL_SELECT_CHARACTER,
            this.SELECT_CHARACTER
        ]);
        return WRAPPER_Page;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    ACTIVATE_OPTIONS_GROUP(){
        this.SELECT_PART.addEventListener('change', (event) => {
            let HOLD = new Create({});
            let TAG_Part = HOLD.READ_OPTION_TEXT(this.SELECT_PART);
            this.OPTIONS_GROUP = this.SESSION.TOOLBOX.DATA.PARTS[TAG_Part].GROUPS;
            this.OPTIONS_GROUP.unshift('CHOOSE A GROUP');
            HOLD.UPDATE_OPTIONS(this.SELECT_GROUP, this.OPTIONS_GROUP);
        });
    };
    ACTIVATE_OPTIONS_WASHI(){
        this.SELECT_GROUP.addEventListener('change', (event) => {
            let HOLD = new Create({});
            let TAG_Washi = HOLD.READ_OPTION_TEXT(this.SELECT_GROUP);
            this.OPTIONS_WASHI = this.SESSION.TOOLBOX.DATA.GROUPS[TAG_Washi].WASHI;
            this.OPTIONS_WASHI.unshift('CHOOSE A GROUP');
            HOLD.UPDATE_OPTIONS(this.SELECT_WASHI, this.OPTIONS_WASHI);
        });
    };
    ACTIVATE_OPTIONS_CHARACTER(){
        this.SELECT_WASHI.addEventListener('change', (event) => {
            let HOLD = new Create({});
            let TAG_Character = HOLD.READ_OPTION_TEXT(this.SELECT_WASHI);
            this.OPTIONS_CHARACTER = this.SESSION.TOOLBOX.DATA.WASHI[TAG_Character].MEAT;
            this.OPTIONS_CHARACTER.unshift('CHOOSE A CHARACTER');
            HOLD.UPDATE_OPTIONS(this.SELECT_CHARACTER, this.OPTIONS_CHARACTER);
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
        console.log(this.SESSION);

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        await this.#OPTIONS();
        await this.#TEXT();
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Meat-Title'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'CHOOSE A CHARACTER';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_SELECT_PART = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Meat-Part'
        }).INIT();
        this.LABEL_SELECT_GROUP = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Meat-Group'
        }).INIT();
        this.LABEL_SELECT_WASHI = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Meat-Washi'
        }).INIT();
        this.LABEL_SELECT_CHARACTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Meat-Character'
        }).INIT();

        this.LABEL_SELECT_PART.innerHTML = 'Select a part';
        this.LABEL_SELECT_GROUP.innerHTML = 'Select a group';
        this.LABEL_SELECT_CHARACTER.innerHTML = 'Select a character';
        this.LABEL_SELECT_WASHI.innerHTML = 'Select a group';
    };
    async #SELECT(){
        this.SELECT_PART = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Meat-Part',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_PART
        }).INIT();
        this.SELECT_GROUP = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Meat-Group',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_GROUP
        }).INIT();
        this.SELECT_WASHI = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Meat-Washi',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_WASHI
        }).INIT();
        this.SELECT_CHARACTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Meat-Character',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_CHARACTER
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_PART = this.SESSION.TOOLBOX.LISTS.PARTS;
        this.OPTIONS_PART.unshift('CHOOSE A PART');
        this.OPTIONS_GROUP = ['X-X-X-X-X-X-X-X-X-X-X'];
        this.OPTIONS_WASHI = ['X-X-X-X-X-X-X-X-X-X-X'];
        this.OPTIONS_CHARACTER = ['X-X-X-X-X-X-X-X-X-X-X'];
    }; 

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_PART() {
        let HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_PART);
    };
    GET_GROUP() {
        let HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_GROUP);
    };
    GET_WASHI() {
        let HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_WASHI);
    };
    GET_CHARACTER() {
        let HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_CHARACTER);
    };
}