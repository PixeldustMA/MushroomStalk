import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_Plushie extends Stalk{

    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_Plushie-Title');
        this.SECTION_Team = document.getElementById('SECTION_Plushie-Team');

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PAGE = 'UNSET';

        // ============ //
        // ## BUTTON ## //
        // ============ //

        this.BUTTON_BACK = 'UNSET';
    };

    DRAW(){
        this.SECTION_Title.append(...[this.PANEL_TITLE()]);
        this.SECTION_Team.append(...[this.PANEL_DISPLAY_ACTIVE_TEAM()]);
    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    PANEL_TITLE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Title = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BACK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Title.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK,
            this.LABEL_ONE
        ]);        
        return WRAPPER_Title;
    };
    PANEL_DISPLAY_ACTIVE_TEAM() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Title = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Title.append(...[
            this.HEADER_TEAM,
            this.LABEL_SLOT_ONE,
            this.LABEL_SLOT_TWO,
            this.LABEL_SLOT_THREE,
            this.LABEL_SLOT_FOUR,
            this.LABEL_SLOT_FIVE,
            this.LABEL_SLOT_SIX,
        ]);        
        return WRAPPER_Title;
    };
    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('NOVA', 'MENU')
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // await this.REQUEST_SESSION_MEDIA();
        // console.log(this.SESSION);
        await this.#TEXT();
        await this.#BUTTON();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Plushie-Title',
        }).INIT();
        this.HEADER_TEAM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Plushie-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'THE Plushie';
        this.HEADER_TEAM.innerHTML = 'CURRENT TEAM';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_SLOT_ONE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Plushie-One',
        }).INIT();
        this.LABEL_SLOT_TWO = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Plushie-One',
        }).INIT();
        this.LABEL_SLOT_THREE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Plushie-One',
        }).INIT();
        this.LABEL_SLOT_FOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Plushie-One',
        }).INIT();
        this.LABEL_SLOT_FIVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Plushie-One',
        }).INIT();
        this.LABEL_SLOT_SIX = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Plushie-One',
        }).INIT();

        this.LABEL_SLOT_ONE.innerHTML = 'SLOT ONE';
        this.LABEL_SLOT_TWO.innerHTML = 'SLOT TWO';
        this.LABEL_SLOT_THREE.innerHTML = 'SLOT THREE';
        this.LABEL_SLOT_FOUR.innerHTML = 'SLOT FOUR';
        this.LABEL_SLOT_FIVE.innerHTML = 'SLOT FIVE';
        this.LABEL_SLOT_SIX.innerHTML = 'SLOT SIX';
    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Plushie-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const Page_Plushie = new DRAW_Plushie();
await Page_Plushie.INITIALISE();
Page_Plushie.DRAW();