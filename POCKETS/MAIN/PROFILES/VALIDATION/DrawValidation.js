import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class DrawValidation extends Stalk{

    constructor(){

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('SECTION_Validation-Title');
        this.SECTION_BUTTONS = document.getElementById('SECTION_Validation-Buttons');

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_BUTTON = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_PAGE = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_RESULTS = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        this.SECTION_TITLE.append(this.PANEL_TITLE());
        this.SECTION_BUTTONS.append(this.PANEL_BUTTONS());

    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_TITLE() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK
        ]);
        return this.WRAPPER_TITLE;
    };
    PANEL_BUTTONS() {

        // ================ //
        // << CONTAINERS >> //
        // ================ //

        this.WRAPPER_BUTTON = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BUTTON.append(...[

        ]);
        return this.WRAPPER_BUTTON;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== // 

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {
        await this.#HEADERS();
        await this.#BUTTON();

        setTimeout(() => {
            this.LOAD('TITLE', 'WELCOME')
        }, 2000);
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {
        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Validating-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'VALIDATING';
    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Validating-Back',
        }).INIT();
        this.BUTTON_RESULTS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Validating-Results',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_RESULTS.innerHTML = 'SEE RESULTS';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Welcome = new DrawValidation();
await PAGE_Welcome.INITIALISE();
PAGE_Welcome.DRAW();
