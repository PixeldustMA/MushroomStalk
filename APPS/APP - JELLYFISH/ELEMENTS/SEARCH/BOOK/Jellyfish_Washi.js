import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";

export default class Jellyfish_Washi extends Stalk{

    constructor(
        WASHI_CONFIG_SEARCH_ARRAY = []
    ) {

        super();

        // ========== //
        // << DATA >> //
        // ========== //

        this.ARRAY_SEARCH = WASHI_CONFIG_SEARCH_ARRAY;

        // ============ //
        // << SELECT >> //
        // ============ //

        this.SELECT_ARC = 'UNSET';
        this.SELECT_GROUP = 'UNSET';
        this.SELECT_CHARACTER = 'UNSET';

        // ============= //
        // << OPTIONS >> //
        // ============= //

        this.OPTIONS_ARC = 'UNSET';
        this.OPTIONS_GROUP_EKAHI = 'UNSET';
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_STYLE() {
        
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        if (this.ARRAY_SEARCH.includes('ARC')) {
            let PANEL_ARC = this.#ARC();
            WRAPPER_Page.append(...[PANEL_ARC]);
        };
        if (this.ARRAY_SEARCH.includes('GROUP')) {
            let PANEL_ARC = this.#ARC();
            let PANEL_GROUP = this.#GROUP();
            WRAPPER_Page.append(...[
                PANEL_ARC,
                PANEL_GROUP]);
        };
        if (this.ARRAY_SEARCH.includes('CHARACTER')) {

            let PANEL_ARC = this.#ARC();
            let PANEL_GROUP = this.#GROUP();
            let PANEL_CHARACTER = this.#CHARACTER();

            WRAPPER_Page.append(...[
                PANEL_ARC,
                PANEL_GROUP,
                PANEL_CHARACTER
            ]);
        };
		return WRAPPER_Page;
    };
     #ARC(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Arc = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#LOAD_GROUP_OPTIONS();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Arc.append(...[
            this.SELECT_ARC
        ]);
        return WRAPPER_Arc
    };
     #GROUP(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Group = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#LOAD_CHARACTER_OPTIONS();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Group.append(...[
            this.SELECT_GROUP
        ]);
        return WRAPPER_Group
    };
     #CHARACTER(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Character = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Character.append(...[
            this.SELECT_CHARACTER
        ]);
        return WRAPPER_Character
    };
    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #LOAD_GROUP_OPTIONS() {
        this.SELECT_ARC.addEventListener('change', (event) => {
            let CATEGORY_SELECTED = this.SELECT_ARC.options[this.SELECT_ARC.selectedIndex].text;
            let hold = new Create({});
            console.log(this.OPTIONS_GROUP_EKAHI)
            if (CATEGORY_SELECTED === 'EKAHI') {
                hold.UPDATE_OPTIONS(this.SELECT_GROUP, this.OPTIONS_GROUP_EKAHI);
            };
        });
    };
    #LOAD_CHARACTER_OPTIONS() {
        this.SELECT_GROUP.addEventListener('change', (event) => {
            let CATEGORY_ARC = this.SELECT_ARC.options[this.SELECT_ARC.selectedIndex].text;
            let CATEGORY_GROUP = this.SELECT_GROUP.options[this.SELECT_GROUP.selectedIndex].text;
            let hold = new Create({});
            hold.UPDATE_OPTIONS(this.SELECT_CHARACTER, this.SESSION.TOOLBOX[CATEGORY_ARC][CATEGORY_ARC][CATEGORY_GROUP]);
        });
    };

    // =============== //
    // ## RUN CLASS ## //
    // =============== //

    async INITIALISE(){

        await this.REQUEST_SESSION_PATHS();
        console.log(this.SESSION)
        await this.REQUEST_SESSION_TOOLBOX();

        await this.#OPTIONS();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #SELECT(){

        this.SELECT_ARC = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Washi-Arc',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_ARC
        }).INIT();
        this.SELECT_GROUP = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Washi-Group',
            CREATE_CONFIG_ELEMENT_OPTIONS: []
        }).INIT();
        this.SELECT_CHARACTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Washi-Character',
            CREATE_CONFIG_ELEMENT_OPTIONS: []
        }).INIT();
    };
    async #OPTIONS(){
        this.OPTIONS_ARC = [
            'EKAHI',
            'ELUA',
            'EKOLU',
            'EHA',
            'ELIMA'
        ];
        this.OPTIONS_GROUP_EKAHI = this.SESSION.TOOLBOX.EKAHI.EKAHI.GROUPS;
    };
};

