import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_PenPots extends Stalk{

    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_PenPots-Title');

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
            this.BUTTON_BACK
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_PenPots-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'THE PenPots';

        // ============ //
        // << LABELS >> //
        // ============ //

    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_PenPots-Back',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const Page_PenPots = new DRAW_PenPots();
await Page_PenPots.INITIALISE();
Page_PenPots.DRAW();