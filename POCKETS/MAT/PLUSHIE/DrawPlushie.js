import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class Plushie extends Stalk{

    constructor(){
        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('SECTION_Plushie-Section-Party');
        this.SECTION_PANEL = document.getElementById('SECTION_Plushie-Section-Panel');
        this.SECTION_PANEL = document.getElementById('SECTION_Plushie-Section-Form');

        // =============== //
        // ## DATABASES ## //
        // =============== //

        this.PARTY_ACTIVE = 'UNSET';
        this.POKEMON_DATABASE = 'UNSET';
        this.POKEMON_ELEMENTS = 'UNSET';
        this.POKEMON_ALL = 'UNSET';

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PARTY_ONE = 'UNSET';
        this.HEADER_PARTY_TWO = 'UNSET';
        this.HEADER_PARTY_THREE = 'UNSET';
        this.HEADER_PARTY_FOUR = 'UNSET';
        this.HEADER_PARTY_FOUR = 'UNSET';
        this.HEADER_PARTY_SIX = 'UNSET';

        this.LABEL_LEVEL = 'UNSET';
        this.LABEL_NAME = 'UNSET';
        this.LABEL_NICKNAME = 'UNSET';
        this.LABEL_NUMBER = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_POKEMON_UPDATE = 'UNSET';
        this.BUTTON_POKEMON_ONE = 'UNSET';
        this.BUTTON_POKEMON_TWO = 'UNSET';
        this.BUTTON_POKEMON_THREE = 'UNSET';
        this.BUTTON_POKEMON_FOUR = 'UNSET';
        this.BUTTON_POKEMON_FIVE = 'UNSET';
        this.BUTTON_POKEMON_SIX = 'UNSET';

        // ============ //
        // ## INPUTS ## //
        // ============ //

        this.INPUT_POKEMON_LEVEL = 'UNSET';
        this.INPUT_POKEMON_NAME = 'UNSET';
        this.INPUT_POKEMON_NICKNAME = 'UNSET';
        this.INPUT_POKEMON_NUMBER = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_POKEMON_TYPE_ONE = 'UNSET';
        this.SELECT_POKEMON_TYPE_TWO = 'UNSET';
        this.SELECT_POKEMON = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    /**
     * ## DRAW THE PAGE
     * 
     * -------------------
     * 
     * #### *CLASS MUST BE INITIALISED FIRST*
     * 
     * Run all functions associated with drawing the welcome page
     * 
     * Attach all relevant wrappers to their appropriate sections
     * 
     * Run this function to run the class
     */
    async DRAW_PAGE() {

        // this.INSTANCE_BEETLE.DAISY_TEXT = 'DRAWING PEN POT PAGE';
        // await this.INSTANCE_BEETLE.READ_MODE();

        await this.REMEMBER();

        this.SECTION_TITLE.append(this.PANEL_Title());
        this.SECTION_PANEL.append(this.PANEL_Info_Panel());
        this.SECTION_PANEL.append(this.PANEL_Form());
    };
    PANEL_Title() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.UPDATE_DATABASE(this.BUTTON_POKEMON_UPDATE, this.INPUT_POKEMON_NAME, this.INPUT_POKEMON_NICKNAME, this.INPUT_POKEMON_LEVEL, this.SELECT_POKEMON_TYPE_ONE, this.SELECT_POKEMON_TYPE_TWO);
        this.LISTENER_LEVEL(this.BUTTON_POKEMON_ONE, this.HEADER_PARTY_ONE.innerHTML);
        this.LISTENER_LEVEL(this.BUTTON_POKEMON_TWO, this.HEADER_PARTY_TWO.innerHTML);
        this.LISTENER_LEVEL(this.BUTTON_POKEMON_THREE, this.HEADER_PARTY_THREE.innerHTML);
        this.LISTENER_LEVEL(this.BUTTON_POKEMON_FOUR, this.HEADER_PARTY_FOUR.innerHTML);
        this.LISTENER_LEVEL(this.BUTTON_POKEMON_FIVE, this.HEADER_PARTY_FIVE.innerHTML);
        this.LISTENER_LEVEL(this.BUTTON_POKEMON_SIX, this.HEADER_PARTY_SIX.innerHTML);

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PARTY_ONE,
            this.BUTTON_POKEMON_ONE,
            this.HEADER_PARTY_TWO,
            this.BUTTON_POKEMON_TWO,
            this.HEADER_PARTY_THREE,
            this.BUTTON_POKEMON_THREE,
            this.HEADER_PARTY_FOUR,
            this.BUTTON_POKEMON_FOUR,
            this.HEADER_PARTY_FIVE,
            this.BUTTON_POKEMON_FIVE,
            this.HEADER_PARTY_SIX,
            this.BUTTON_POKEMON_SIX,

            this.BUTTON_POKEMON_UPDATE,
            this.SELECT_POKEMON_TYPE_ONE,
            this.SELECT_POKEMON_TYPE_TWO,
            this.LABEL_LEVEL,
            this.INPUT_POKEMON_LEVEL,
            this.LABEL_NAME,
            this.INPUT_POKEMON_NAME,
            this.LABEL_NICKNAME,
            this.INPUT_POKEMON_NICKNAME,
            this.LABEL_NUMBER,
            this.INPUT_POKEMON_NUMBER,
        ]);
        return WRAPPER_Page;
    };
    PANEL_Form(){

        // ================ //
        // << CONTAINERS >> //
        // ================ //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.BUTTON_POKEMON_UPDATE,
            this.SELECT_POKEMON_TYPE_ONE,
            this.SELECT_POKEMON_TYPE_TWO,
            this.LABEL_LEVEL,
            this.INPUT_POKEMON_LEVEL,
            this.LABEL_NAME,
            this.INPUT_POKEMON_NAME,
            this.LABEL_NICKNAME,
            this.INPUT_POKEMON_NICKNAME,
            this.LABEL_NUMBER,
            this.INPUT_POKEMON_NUMBER,
        ]);
        return WRAPPER_Page;
    };
    PANEL_Info_Panel(){

        // ================ //
        // << CONTAINERS >> //
        // ================ //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CHANGE_PANEL(this.SELECT_POKEMON);
        WRAPPER_Page.append(...[

            this.SELECT_POKEMON,
            this.HEADER_NAME,
            this.HEADER_LEVEL

        ]);
        return WRAPPER_Page;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    UPDATE_DATABASE(PARAMETER_BUTTON, PARAMETER_NAME_INPUT, PARAMETER_NICKNAME_INPUT, PARAMETER_LEVEL_INPUT, PARAMETER_SELECT_ONE, PARAMETER_SELECT_TWO) {
        PARAMETER_BUTTON.addEventListener('click', (event) => {
            const DATA_DATABASE_ENTRY = {
                NAME: PARAMETER_NAME_INPUT.value,
                NICKNAME: PARAMETER_NICKNAME_INPUT.value,
                LEVEL:  PARAMETER_LEVEL_INPUT.value,
                TYPE: {
                    ONE: PARAMETER_SELECT_ONE.options[PARAMETER_SELECT_ONE.selectedIndex].text,
                    TWO: PARAMETER_SELECT_TWO.options[PARAMETER_SELECT_TWO.selectedIndex].text
                }
            }
            this.INSTANCE_M_CHUNK.NEW_POKEMON_DATABASE_ENTRY(DATA_DATABASE_ENTRY, this.INPUT_POKEMON_NUMBER.value).then((RESULT) => {return RESULT})
        });
    };
    LISTENER_LEVEL(PARAMETER_BUTTON, PARAMETER_NAME) {
        PARAMETER_BUTTON.addEventListener('click', (event) => {
            console.log(PARAMETER_NAME)
            return this.UPDATE_LEVEL(PARAMETER_NAME);
        })
    };
    CHANGE_PANEL(PARAMETER_SELECT) {
        PARAMETER_SELECT.addEventListener('click', (event) => {
            let POKEMON_NAME = PARAMETER_SELECT.options[PARAMETER_SELECT.selectedIndex].text;
            let Pokemon_Keys = Object.keys(this.POKEMON_DATABASE);
            for (let INDEX_Keys = 0; INDEX_Keys < Pokemon_Keys.length; INDEX_Keys++) {
                const KEY_Block = Pokemon_Keys[INDEX_Keys];
                const BLOCK_Pokemon = this.POKEMON_DATABASE[KEY_Block];

                if (BLOCK_Pokemon.NAME === POKEMON_NAME){
                    this.HEADER_PANEL_NAME.innerHTML = BLOCK_Pokemon.NAME;
                    this.HEADER_PANEL_LEVEL.innerHTML = BLOCK_Pokemon.LEVEL;
                    this.HEADER_PANEL_NICKNAME.innerHTML = BLOCK_Pokemon.NICKNAME;
                    this.HEADER_PANEL_TYPE.innerHTML = `${BLOCK_Pokemon.TYPE.ONE} / ${BLOCK_Pokemon.TYPE.TWO}`;
                };
                
            } 
        });
    }
    // =================== //
    // ## CURRENT PARTY ## //
    // =================== //

    SWITCH_PARTY_MEMBER(PARAMETER_POKEMON, PARAMETER_POSITION){

        this.PARTY_ACTIVE[PARAMETER_POSITION] = PARAMETER_POKEMON;

        // << SAVE THE NEW PARTY >> //
    };
    /**
     * ## UPDATE LEVEL OF POKEMON IN PARTY
     * -----------------------------------
     * 
     * ### PARAMETERS
     * 
     * @param {string} PARAMETER_POKEMON_NAME 
     * 
     * ### DETAILS
     * 
     * Update the level of the active pokemon
     */
    UPDATE_LEVEL(PARAMETER_POKEMON_NAME) {

        let KEYS_Database = Object.keys(this.POKEMON_DATABASE);

        for (let INDEX_Pokemon = 0; INDEX_Pokemon < KEYS_Database.length; INDEX_Pokemon++) {
            const KEY = KEYS_Database[INDEX_Pokemon];

            if (this.POKEMON_DATABASE[KEY].NAME === PARAMETER_POKEMON_NAME) {
                let LEVEL_Curremt = parseInt(this.POKEMON_DATABASE[KEY].LEVEL);
                let LEVEL_New = LEVEL_Curremt += 1;
                this.POKEMON_DATABASE[KEY].LEVEL = LEVEL_New;
            };
        };

        this.INSTANCE_M_CHUNK.SAVE_DATABASE(this.POKEMON_DATABASE).then((RESULT) => {return RESULT});
    };

    // ================ //
    // ## INFO PANEL ## //
    // ================ //

    REGENERATE_PANEL(PARAMETER_DATA) {

        this.HEADER_PANEL_NAME.innerHTML = PARAMETER_DATA.NAME;
        this.HEADER_PANEL_LEVEL.innerHTML = PARAMETER_DATA.LEVEL;
        this.HEADER_PANEL_NICKNAME.innerHTML = PARAMETER_DATA.NICKNAME;
        this.HEADER_PANEL_TYPE.innerHTML = `${PARAMETER_DATA.TYPE.ONE} / ${PARAMETER_DATA.TYPE.TWO}`;

    };

    // ========= //
    // ## RUN ## //
    // ========= //

    /**
     * ## INITIALISE DATA FOR THE PAGE
     * -------------------------------
     * 
     * Initialise the memory and elements for the page
     */
    async INITIALISE(){

        // ============ //
        // << MEMORY >> //
        // ============ //

        await this.REMEMBER();
        this.PARTY_ACTIVE = this.SESSION.CHUNK.POKEMON.PARTY;
        this.POKEMON_DATABASE = this.SESSION.CHUNK.POKEMON.DATABASE;
        this.POKEMON_ELEMENTS = this.SESSION.CHUNK.POKEMON.ELEMENTS;
        this.POKEMON_NAMES = [];

        let KEYS_Pokemon = Object.keys(this.POKEMON_DATABASE);
        for (let INDEX_Pokemon = 0; INDEX_Pokemon < KEYS_Pokemon.length; INDEX_Pokemon++) {
            const KEY_Block = KEYS_Pokemon[INDEX_Pokemon];
            const BLOCK_Pokemon = this.POKEMON_DATABASE[KEY_Block];
            this.POKEMON_NAMES.push(BLOCK_Pokemon.NAME);
        };

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#TEXT();
        await this.#BUTTON();
        await this.#INPUT();
        await this.#SELECT();
    };

    // ==================== //
    // ## BUILD ELEMENTS ## //
    // ==================== //

    /**
     * ## CREATE ALL TEXT BASED ELEMENTS FOR PLUSHIE PAGE
     * --------------------------------------------------
     * 
     * Generate any element on the page which is primarily text focused, 
     * such as headers and labels
     */
    async #TEXT(){

        //TODO - TOADSTOOL TEXT ELEMENT TEXT UPDATE REQUIRED

        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PARTY_ONE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Party-One'
        }).INIT();
        this.HEADER_PARTY_TWO = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Party-Two'
        }).INIT();
        this.HEADER_PARTY_THREE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Party-Three'
        }).INIT();
        this.HEADER_PARTY_FOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Party-Four'
        }).INIT();
        this.HEADER_PARTY_FIVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Party-Five'
        }).INIT();
        this.HEADER_PARTY_SIX = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Party-Six'
        }).INIT();
        this.HEADER_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Pokemon-Name'
        }).INIT();
        this.HEADER_LEVEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Pokemon-Level'
        }).INIT();
        HEADER_PANEL_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Pokemon-Panel-Name'
        }).INIT(); 

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_NUMBER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Pokemon-Number',
            CREATE_CONFIG_TAGGING_LABELFOR: 'Pokemon_Number'
        }).INIT();
        this.LABEL_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Pokemon-Name',
            CREATE_CONFIG_TAGGING_LABELFOR: 'Pokemon_Name'
        }).INIT();
        this.LABEL_LEVEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Pokemon-Level',
            CREATE_CONFIG_TAGGING_LABELFOR: 'Pokemon_Level'
        }).INIT();
        this.LABEL_NICKNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Pokemon-Nickname',
            CREATE_CONFIG_TAGGING_LABELFOR: 'Pokemon_Nickname'
        }).INIT();

        // ================== //
        // << ELEMENT TEXT >> //
        // ================== //

        this.HEADER_PARTY_ONE.innerHTML = this.PARTY_ACTIVE.ONE;
        this.HEADER_PARTY_TWO.innerHTML = this.PARTY_ACTIVE.TWO;
        this.HEADER_PARTY_THREE.innerHTML = this.PARTY_ACTIVE.THREE;
        this.HEADER_PARTY_FOUR.innerHTML = this.PARTY_ACTIVE.FOUR;
        this.HEADER_PARTY_FIVE.innerHTML = this.PARTY_ACTIVE.FIVE;
        this.HEADER_PARTY_SIX.innerHTML = this.PARTY_ACTIVE.SIX;
        this.LABEL_NUMBER.innerHTML = 'NUMBER';
        this.LABEL_NAME.innerHTML = 'NAME';
        this.LABEL_LEVEL.innerHTML = 'LEVEL';
        this.LABEL_NICKNAME.innerHTML = 'NICKNAME';
    };
    /**
     * ## CREATE ALL BUTTON ELEMENTS FOR PLUSHIE PAGE
     * --------------------------------------------------
     * 
     * Generate any element on the page which is a button and
     * temporarily set text for it
     */
    async #BUTTON() {

        //TODO - TOADSTOOL BUTTON TEXT UPDATE REQUIRED

        // ================ //
        // << FUNCTIONAL >> //
        // ================ //

        this.BUTTON_POKEMON_UPDATE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Pokemon-Update'
        }).INIT();

        // =========== //
        // << PARTY >> //
        // =========== //

        this.BUTTON_POKEMON_ONE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Pokemon-One'
        }).INIT();
        this.BUTTON_POKEMON_TWO = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Pokemon-Two'
        }).INIT();
        this.BUTTON_POKEMON_THREE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Pokemon-Three'
        }).INIT();
        this.BUTTON_POKEMON_FOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Pokemon-Four'
        }).INIT();
        this.BUTTON_POKEMON_FIVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Pokemon-Five'
        }).INIT();
        this.BUTTON_POKEMON_SIX = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Pokemon-Six'
        }).INIT();

        // ================== //
        // << ELEMENT TEXT >> //
        // ================== //

        this.BUTTON_POKEMON_ONE.innerHTML = '+';
        this.BUTTON_POKEMON_TWO.innerHTML = '+';
        this.BUTTON_POKEMON_THREE.innerHTML = '+';
        this.BUTTON_POKEMON_FOUR.innerHTML = '+';
        this.BUTTON_POKEMON_FIVE.innerHTML = '+';
        this.BUTTON_POKEMON_SIX.innerHTML = '+';
        this.BUTTON_POKEMON_UPDATE.innerHTML = 'UPDATE DATABASE';

    };
    /**
     * ## CREATE ALL INPUT ELEMENTS FOR PLUSHIE PAGE
     * --------------------------------------------------
     * 
     * Generate any element on the page which is an input
     */
    async #INPUT(){

        //TODO - TOADSTOOL PLACEHOLDER TEXT UPDATE REQUIRED

        // ==================== //
        // << INPUT ELEMENTS >> //
        // ==================== //

        this.INPUT_POKEMON_NUMBER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'NUMBER',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Pokemon-Number',
            CREATE_CONFIG_ELEMENT_TYPE: 'input',
            CREATE_CONFIG_TAGGING_BOXNAME: 'Pokemon_Number'
        }).INIT();
        this.INPUT_POKEMON_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Pokemon-Name',
            CREATE_CONFIG_TAGGING_BOXNAME: 'Pokemon_Name'
        }).INIT();
        this.INPUT_POKEMON_LEVEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'NUMBER',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Pokemon-Level',
            CREATE_CONFIG_ELEMENT_TYPE: 'input',
            CREATE_CONFIG_TAGGING_BOXNAME: 'Pokemon_Level'
        }).INIT();
        this.INPUT_POKEMON_NICKNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Pokemon-Nickname',
            CREATE_CONFIG_TAGGING_BOXNAME: 'Pokemon_Nickname'
        }).INIT();
    };
    /**
     * ## CREATE ALL SELECT ELEMENTS FOR PLUSHIE PAGE
     * --------------------------------------------------
     * 
     * Generate any element on the page which is a select element
     * 
     * Options are generated from a pre-loaded file 
     */
    async #SELECT() {
        this.SELECT_POKEMON_TYPE_ONE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_ELEMENT_TYPE: 'SELECT',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Pokemon-Type-One',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.POKEMON_ELEMENTS
        }).INIT();
        this.SELECT_POKEMON_TYPE_TWO = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_ELEMENT_TYPE: 'SELECT',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Pokemon-Type-Two',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.POKEMON_ELEMENTS
        }).INIT();
        this.SELECT_POKEMON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_ELEMENT_TYPE: 'SELECT',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Pokemon-Data',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.POKEMON_NAMES
        }).INIT();
    };
};

// =============== //
// ## LOAD PAGE ## //
// =============== //

const PAGE_Plushie = new Plushie();
await PAGE_Plushie.INITIALISE();
await PAGE_Plushie.DRAW_PAGE();