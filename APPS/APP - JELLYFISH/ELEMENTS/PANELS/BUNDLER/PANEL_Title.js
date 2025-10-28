import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Branches from "../../../../../CONSOLE/LUNGS/Branches.js";
import Create from "../../../CREATE/Create.js";

export default class PANEL_Bundler_Title extends Branches{

    constructor({

    }){

        super();

        this.WRAPPER_ROW = 'UNSET';

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        // ========== //
        // ## TEXT ## //
        // ========== //


    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.ROW.append(...[
            this.CELL_PANEL_NO(),
            this.CELL_PANEL_DESCRIPTION(),
            this.CELL_PANEL_DAY(),
            this.CELL_PANEL_MONTH(),
            this.CELL_PANEL_YEAR(),
            this.CELL_PANEL_TZ()
        ]);
        return this.ROW;
    };

    // =========== //
    // ## CELLS ## //
    // =========== //

    CELL_PANEL_NO(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_CHAPTER.append(...[
            this.HEADER_NUMBER
        ]);
        return this.CELL_CHAPTER;
    };
    CELL_PANEL_DESCRIPTION(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_DESCRIPTION.append(...[
            this.HEADER_DESCRIPTION
        ]);
        return this.CELL_DESCRIPTION;
    };
    CELL_PANEL_DAY(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_DAY.append(...[
            this.HEADER_DAY
        ]);
        return this.CELL_DAY;
    };
    CELL_PANEL_MONTH(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_MONTH.append(...[
            this.HEADER_MONTH
        ]);
        return this.CELL_MONTH;
    };
    CELL_PANEL_YEAR(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_YEAR.append(...[
            this.HEADER_YEAR
        ]);
        return this.CELL_YEAR;
    };
    CELL_PANEL_TZ(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_TZ.append(...[
            this.HEADER_TZ
        ]);
        return this.CELL_TZ;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.#ROW();
        await this.#TEXT();
        await this.#CELLS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        // ============ //
        // << TITLES >> //
        // ============ //

        this.HEADER_BUNDLER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Bundler'
        }).INIT();
        this.HEADER_NUMBER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Number'
        }).INIT();
        this.HEADER_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Description'
        }).INIT();

        this.HEADER_BUNDLER.innerHTML = 'BUNDLING';
        this.HEADER_NUMBER.innerHTML = 'No';
        this.HEADER_DESCRIPTION.innerHTML = 'DESCRIPTION';

        // =========== //
        // << DATES >> //
        /// ========== //

        this.HEADER_DAY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Day'
        }).INIT();
        this.HEADER_MONTH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Month'
        }).INIT();
        this.HEADER_YEAR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Year'
        }).INIT();
        this.HEADER_TZ = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-TZ'
        }).INIT();

        this.HEADER_DAY.innerHTML = 'D';
        this.HEADER_MONTH.innerHTML = 'M';
        this.HEADER_YEAR.innerHTML = 'Y';
        this.HEADER_TZ.innerHTML = 'TZ';

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

        this.CELL_CHAPTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_DAY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_MONTH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_YEAR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_CODE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_TZ = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
    };
    async #ROW() {
        this.ROW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'tr',
            CREATE_CONFIG_PERSONALITY_ID: 'ROW_Bundler-Row'
        }).INIT(); 
    }
};