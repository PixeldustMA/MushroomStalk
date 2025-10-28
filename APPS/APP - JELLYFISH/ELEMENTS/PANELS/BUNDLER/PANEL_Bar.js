import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Branches from "../../../../../CONSOLE/LUNGS/Branches.js";
import Create from "../../../CREATE/Create.js";

export default class PANEL_Bundler_Bar extends Branches{

    constructor({
        BUNDLER_CONFIG_CHAPTER_NUMBER = 0,
        BUNDLER_CONFIG_CHAPTER_DESCRIPTION = 0,
        BUNDLER_CONFIG_CHAPTER_DAY = 0,
        BUNDLER_CONFIG_CHAPTER_MONTH = 0,
        BUNDLER_CONFIG_CHAPTER_YEAR = 0,
        BUNDLER_CONFIG_CHAPTER_TZ = 0
    }){

        super()
        this.WRAPPER_ROW = 'UNSET';

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.CHAPTER_NUMBER = BUNDLER_CONFIG_CHAPTER_NUMBER;
        this.CHAPTER_DESCRIPTION = BUNDLER_CONFIG_CHAPTER_DESCRIPTION;
        this.CHAPTER_DAY = BUNDLER_CONFIG_CHAPTER_DAY;
        this.CHAPTER_MONTH = BUNDLER_CONFIG_CHAPTER_MONTH;
        this.CHAPTER_YEAR = BUNDLER_CONFIG_CHAPTER_YEAR;
        this.CHAPTER_TZ = BUNDLER_CONFIG_CHAPTER_TZ;

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_CHAPTER = 'UNSET';
        this.HEADER_DAY = 'UNSET';
        this.HEADER_MONTH = 'UNSET';
        this.HEADER_YEAR = 'UNSET';
        this.HEADER_TZ = 'UNSET';
        this.LABEL_DESCRIPTION = 'UNSET';

        // =========== //
        // ## CELLS ## //
        // =========== //

        this.CELL_CHAPTER = 'UNSET';
        this.CELL_DESCRIPTION = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.ROW.append(...[
            this.PANEL_CELL_CHAPTER(),
            this.PANEL_CELL_DESCRIPTION(),
            this.PANEL_CELL_DAY(),
            this.PANEL_CELL_MONTH(),
            this.PANEL_CELL_YEAR(),
            this.PANEL_CELL_TZ()
        ]);
        return this.ROW;
    };

    // =========== //
    // ## CELLS ## //
    // =========== //

    PANEL_CELL_CHAPTER(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_CHAPTER.append(...[
            this.HEADER_CHAPTER            
        ]);
        return this.CELL_CHAPTER;
    };
    PANEL_CELL_DESCRIPTION(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_DESCRIPTION.append(...[
            this.LABEL_DESCRIPTION            
        ]);
        return this.CELL_DESCRIPTION;
    };
    PANEL_CELL_DAY(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_DAY.append(...[
            this.HEADER_DAY            
        ]);
        return this.CELL_DAY;
    };
    PANEL_CELL_MONTH(){
        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_MONTH.append(...[
            this.HEADER_MONTH            
        ]);
        return this.CELL_MONTH;
    };
    PANEL_CELL_YEAR(){

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.CELL_YEAR.append(...[
            this.HEADER_YEAR            
        ]);
        return this.CELL_YEAR;
    };
    PANEL_CELL_TZ(){

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
        await this.#CELLS();
        await this.#TEXT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){

        this.HEADER_CHAPTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Bundler-Chapter'
        }).INIT();
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

        this.HEADER_CHAPTER.innerHTML = this.CHAPTER_NUMBER;
        this.HEADER_DAY.innerHTML = this.CHAPTER_DAY;
        this.HEADER_MONTH.innerHTML = this.CHAPTER_MONTH;
        this.HEADER_YEAR.innerHTML = this.CHAPTER_YEAR;
        this.HEADER_TZ.innerHTML = this.CHAPTER_TZ;

        this.LABEL_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Bundler-Description'
        }).INIT();

        this.LABEL_DESCRIPTION.innerHTML = this.CHAPTER_DESCRIPTION;
    };
    async #CELLS() {
        this.CELL_CHAPTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'td',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Chapter'
        }).INIT(); 
        this.CELL_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'td',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Description'
        }).INIT(); 
        this.CELL_DAY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'td',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Day'
        }).INIT(); 
        this.CELL_MONTH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'td',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Month'
        }).INIT(); 
        this.CELL_YEAR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'td',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-Year'
        }).INIT(); 
        this.CELL_TZ = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'td',
            CREATE_CONFIG_PERSONALITY_ID: 'CELL_Bundler-TZ'
        }).INIT(); 
    }
    async #ROW() {
        this.ROW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'tr',
            CREATE_CONFIG_PERSONALITY_ID: 'ROW_Bundler'
        }).INIT(); 
    }
};