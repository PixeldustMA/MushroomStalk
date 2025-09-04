import Manager_Database from "../../APP - DATABASE/MANAGERS/Manager_Database.js";
import EL_Markdown from "./EL_Markdown.js";

export default class EL_Manager extends Manager_Database{

    constructor({
        ELEMENT_CONFIG_PROPERTY_TAXONOMY_CATEGORY = 0,
        ELEMENT_CONFIG_PROPERTY_TAXONOMY_TYPE = 0,
        ELEMENT_CONFIG_PROPERTY_TAXONOMY_ELEMENT = 0, 
        ELEMENT_CONFIG_PROPERTY_DESCRIPTION_TEXT = 0,
        ELEMENT_CONFIG_PROPERTY_DESCRIPTION_CODE = 0,
        ELEMENT_CONFIG_PROPERTY_HISTORY_AGE = 0,
        ELEMENT_CONFIG_PROPERTY_HISTORY_SPACE = 0,
        ELEMENT_CONFIG_PROPERTY_HISTORY_SECTOR = 0,
        ELEMENT_CONFIG_PROPERTY_HISTORY_SYSTEM = 0,
        ELEMENT_CONFIG_PROPERTY_HISTORY_PLANET = 0,
        ELEMENT_CONFIG_PROPERTY_HERITAGE_SURNAME = 0,
        ELEMENT_CONFIG_PROPERTY_PHYSICAL_COLOUR = 0,
        ELEMENT_CONFIG_PROPERTY_PHYSICAL_USES = 0,
        ELEMENT_CONFIG_PROPERTY_CONNEX_SISTERS = 0,
        ELEMENT_CONFIG_PROPERTY_ELEMENT_LIST = 0,
        ELEMENT_CONFIG_DATA_OLD = 0       
    }){

        super();

        // ========== //
        // << DATA >> //
        // ========== //

        this.DATA_ELEMENT = {};
        this.DATA_CATEGORY = {};
        this.DATA_MARKDOWN = {};
        this.DATA_OLD = ELEMENT_CONFIG_DATA_OLD;

        // ============== //
        // ## PROPERTY ## //
        // ============== //

        // ============== //
        // << TAXONOMY >> //
        // ============== //

        this.TAXONOMY_PROPERTY_CATEGORY = ELEMENT_CONFIG_PROPERTY_TAXONOMY_CATEGORY;
        this.TAXONOMY_PROPERTY_TYPE = ELEMENT_CONFIG_PROPERTY_TAXONOMY_TYPE;
        this.TAXONOMY_PROPERTY_ELEMENT = ELEMENT_CONFIG_PROPERTY_TAXONOMY_ELEMENT;

        // ================= //
        // << DESCRIPTION >> //
        // ================= //

        this.DESCRIPTION_PROPERTY_TEXT = ELEMENT_CONFIG_PROPERTY_DESCRIPTION_TEXT;
        this.DESCRIPTION_PROPERTY_CODE = ELEMENT_CONFIG_PROPERTY_DESCRIPTION_CODE;

        // ============= //
        // << HISTORY >> //
        // ============= //

        this.HISTORY_AGE = ELEMENT_CONFIG_PROPERTY_HISTORY_AGE;
        this.HISTORY_SPACE = ELEMENT_CONFIG_PROPERTY_HISTORY_SPACE;
        this.HISTORY_SECTOR = ELEMENT_CONFIG_PROPERTY_HISTORY_SECTOR;
        this.HISTORY_SYSTEM = ELEMENT_CONFIG_PROPERTY_HISTORY_SYSTEM;
        this.HISTORY_PLANET = ELEMENT_CONFIG_PROPERTY_HISTORY_PLANET;

        // ============== //
        // << HERITAGE >> //
        // ============== //

        this.HERITAGE_SURNAME = ELEMENT_CONFIG_PROPERTY_HERITAGE_SURNAME;

        // ============== //
        // << PHYSICAL >> //
        // ============== //

        this.PHYSICAL_COLOUR = ELEMENT_CONFIG_PROPERTY_PHYSICAL_COLOUR;
        this.PHYSICAL_USES = ELEMENT_CONFIG_PROPERTY_PHYSICAL_USES;

        // ============ //
        // << CONNEX >> //
        // ============ //

        this.CONNEX_SISTER = ELEMENT_CONFIG_PROPERTY_CONNEX_SISTERS;

        // ================= //
        // << DESCRIPTION >> //
        // ================= //

        this.DESCRIPTION_CODE_ORIGINAL = 'UNSET';
        this.DESCRIPTION_CODE_UPDATED = 'UNSET';

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        this.ELEMENTS_LIST = ELEMENT_CONFIG_PROPERTY_ELEMENT_LIST;

        // ========== //
        // ## TAGS ## //
        // ========== //

        this.TAG_EL_NEW = 'ELEMENT_NEW';
        this.TAG_CAT_NEW = 'ELEMENT_CATEGORY';
        this.TAG_LIST_ELEMENT = 'Element';
        this.TAG_LIST_CATEGORY = 'Category';
        this.TAG_ELEMENT = 'ELEMENTS';
        this.TAG_CATEGORY = 'CATEGORY';
        this.TAG_TAXONOMY = 'TAXONOMY';
        this.TAG_MALRADI = 'Malradi';
        this.TAG_FRAGMENTS = 'Fragment';
        this.TAG_RADIENS = 'Radiens';

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_MARKDOWN_EXISTING_ELEMENT = 'UNSET';
        this.PATH_MARKDOWN_ELEMENT_UPDATED = 'UNSET';

    };

    // ========== //
    // ## LOAD ## //
    // ========== //

    async LOAD_DATA_ELEMENT() {

        await this.SET_EL_DESCRIPTION_CODE_UPDATED();
        this.DATA_ELEMENT = {
            TAXONOMY:{
                        NAME: this.TAXONOMY_PROPERTY_ELEMENT,
                        CATEGORY: this.TAXONOMY_PROPERTY_CATEGORY,
                        TYPE: this.TAXONOMY_PROPERTY_TYPE
                    },
            DESCRIPTION: this.DESCRIPTION_CODE_UPDATED,
            HISTORY: {
                AGE: this.HISTORY_AGE,
                SPACE: this.HISTORY_SPACE,
                SECTOR: this.HISTORY_SECTOR,
                SYSTEM: this.HISTORY_SYSTEM,
                PLANET: this.HISTORY_PLANET
            },
            HERITAGE: {
                SURNAME: this.HERITAGE_SURNAME
            },
            PHYSICAL: {
                COLOUR: this.PHYSICAL_COLOUR,
                USES: []
            },
            CONNEX: {
                SISTER_ELEMENTS: []
            }
        };
    };
    LOAD_DATA_CATEGORY() {

        this.SET_CAT_DESCRIPTION_CODE_UPDATED();
        this.DATA_CATEGORY = {
            TAXONOMY: {
                NAME: this.TAXONOMY_PROPERTY_CATEGORY,
                TYPE: this.TAXONOMY_PROPERTY_TYPE
            },
            DESCRIPTION: this.DESCRIPTION_CODE_UPDATED,
            ELEMENTS: this.ELEMENTS_LIST
        };
    };
    LOAD_DATA_EXISTING_CATEGORY() {
        this.DATA_CATEGORY = this.SESSION.ELEMENTS.DATA.CATEGORY[this.TAXONOMY_PROPERTY_CATEGORY];
    };
    LOAD_MARKDOWN_PATHS() {
        if (this.DATA_OLD.hasOwnProperty('TAXONOMY')) {
            this.PATH_MARKDOWN_EXISTING_ELEMENT = `${this.PATH_MARKDOWN_ELEMENT}/${this.DATA_OLD.TAXONOMY.TYPE}/${this.DATA_OLD.TAXONOMY.CATEGORY}/${this.DATA_OLD.TAXONOMY.NAME}.md`;
        }
        this.PATH_MARKDOWN_UPDATED_ELEMENT = `${this.PATH_MARKDOWN_ELEMENT}/${this.TAXONOMY_PROPERTY_TYPE}/${this.TAXONOMY_PROPERTY_CATEGORY}/${this.TAXONOMY_PROPERTY_ELEMENT}.md`;
    };

    // ============ //
    // ## INSERT ## //
    // ============ //

    /**
     * ## ADD A NEW ELEMENT
     * --------------------
     */
    async INSERT_ELEMENT(){

        // ========== //
        // << LOAD >> //
        // ========== //

        await this.LOAD_PATHS();
        await this.LOAD_MARKDOWN_PATHS();
        await this.LOAD_LISTS();
        await this.LOAD_DATA_ELEMENT();
        this.LOAD_DATA_EXISTING_CATEGORY();

        // ========= //
        // << RUN >> //
        // ========= //

        await this.NEW_ELEMENT();
        await this.UPDATE_LIST_ELEMENT();
        await this.ADD_EL_DESCRIPTION();
        await this.NEW_EL_MARKDOWN();

        // ============= //
        // << UPDATES >> //
        // ============= //

        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_CATEGORY}/${this.TAXONOMY_PROPERTY_CATEGORY}.json`)
        await this.UPDATE_CAT_ELEMENTS();
    };
    async INSERT_CATEGORY() {

        // ========== //
        // << LOAD >> //
        // ========== //

        // ========= //
        // << RUN >> //
        // ========= //

        await this.NEW_CATEGORY();
        if (this.TAXONOMY_PROPERTY_TYPE === 'RADIENS') {await this.UPDATE_LIST_RADIENS()}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'FRAGMENT') {await this.UPDATE_LIST_FRAGMENTS()}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'MALRADI') {await this.UPDATE_LIST_MALRADI()};
        await this.ADD_CAT_DESCRIPTION();
        await this.CREATE_MD_CATEGORY_FOLDER();
    };

    // ============ //
    // ## UPDATE ## //
    // ============ //

    async UPDATE_ELEMENT() {

        await this.LOAD_PATHS()
        await this.LOAD_DATA_ELEMENT();
        this.LOAD_DATA_EXISTING_CATEGORY();
        this.LOAD_MARKDOWN_PATHS();

        if (this.DATA_OLD.TAXONOMY.CATEGORY !== this.TAXONOMY_PROPERTY_CATEGORY) {await this.UPDATE_EL_CATEGORY()};
        if (this.DATA_OLD.TAXONOMY.TYPE !== this.TAXONOMY_PROPERTY_TYPE) {await this.UPDATE_EL_TYPE()};
        if (this.DATA_OLD.CONNEX.SISTER_ELEMENTS !== this.CONNEX_SISTER && this.CONNEX_SISTER.length !== 0) {await this.UPDATE_EL_SISTER();}
        if (this.DATA_OLD.PHYSICAL.COLOUR !== this.PHYSICAL_COLOUR) {await this.UPDATE_EL_COLOUR();}
        if (this.DATA_OLD.PHYSICAL.USES !== this.PHYSICAL_USES) {await this.UPDATE_EL_USES();}
        if (this.DATA_OLD.HERITAGE.SURNAME !== this.HERITAGE_SURNAME) {await this.UPDATE_EL_SURNAME();}
        if (this.DATA_OLD.HISTORY.AGE !== this.HISTORY_AGE) {await this.UPDATE_EL_AGE();}
    };
    async UPDATE_CATEGORY() {
        if (this.DATA_OLD.TAXONOMY.TYPE !== this.TAXONOMY_PROPERTY_TYPE){await this.UPDATE_CAT_TYPE()};
    };

    // ============== //
    // << TAXONOMY >> //
    // ============== //

    async UPDATE_EL_CATEGORY() {

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.SET_EL_DESCRIPTION_CODE_UPDATED();
        await this.UPDATE_EL_PROPERTY_CATEGORY();
        await this.ADD_EL_DESCRIPTION();
        await this.REMOVE_DESCRIPTION();
        await this.UPDATE_EL_MARKDOWN_CATEGORY();
        await this.COPY_EL_MARKDOWN();
        await this.REMOVE_EL_MARKDOWN();

        // ============= //
        // << UPDATES >> //
        // ============= //

        await this.UPDATE_CAT_ELEMENTS();

    };
    async UPDATE_EL_TYPE() {
        await this.UPDATE_EL_PROPERTY_TYPE();
        await this.UPDATE_EL_MARKDOWN_TYPE();
    };
    async UPDATE_EL_SISTER() {
        await this.UPDATE_EL_PROPERTY_SISTER();
        await this.UPDATE_EL_MARKDOWN_SISTER();
    };
    async UPDATE_EL_COLOUR() {
        await this.UPDATE_EL_PROPERTY_COLOUR();
        await this.UPDATE_EL_MARKDOWN_COLOUR();
    };
    async UPDATE_EL_USES() {
        await this.UPDATE_EL_PROPERTY_USES();
        await this.UPDATE_EL_MARKDOWN_USES();
    };
    async UPDATE_EL_SURNAME() {
        await this.UPDATE_EL_PROPERTY_SURNAME();
        await this.UPDATE_EL_MARKDOWN_SURNAME();
    };
    async UPDATE_EL_AGE() {
        await this.UPDATE_EL_PROPERTY_AGE();
        await this.UPDATE_EL_MARKDOWN_AGE();
    };
    async UPDATE_CAT_TYPE() {

        let ACTIVE_ELEMENT_LIST = this.DATA_CATEGORY.ELEMENTS;
        await this.UPDATE_CAT_PROPERTY_TYPE();

        for (let INDEX_ELEMENT = 0; INDEX_ELEMENT < ACTIVE_ELEMENT_LIST.length; INDEX_ELEMENT++) {
            const TAG_ELEMENT = ACTIVE_ELEMENT_LIST[INDEX_ELEMENT];
            this.PATH_MARKDOWN_EXISTING_ELEMENT = `${this.PATH_MARKDOWN_ELEMENT}/${this.DATA_OLD.TAXONOMY.TYPE}/${this.DATA_OLD.TAXONOMY.CATEGORY}/${TAG_ELEMENT}.md`;
            this.PATH_MARKDOWN_UPDATED_ELEMENT = `${this.PATH_MARKDOWN_ELEMENT}/${this.TAXONOMY_PROPERTY_TYPE}/${this.TAXONOMY_PROPERTY_CATEGORY}/${TAG_ELEMENT}.md`;

            await this.COPY_EL_MARKDOWN();
            await this.REMOVE_EL_MARKDOWN();
        };
        await this.DELETE_MD_CATEGORY_FOLDER();
    };
    async UPDATE_CAT_ELEMENTS() {

        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_CATEGORY}/${this.TAXONOMY_PROPERTY_CATEGORY}.json`);
        await this.UPDATE_CAT_PROPERTY_ELEMENTS();
        try {
            await this.REMOVE_CAT_ELEMENTS();
        } catch (error) {
            
        }
    };

    // ================ //
    // ## BASE FILES ## //
    // ================ //

    async NEW_ELEMENT() {

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_TAG(this.TAG_EL_NEW); 
        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_ELEMENT);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_ELEMENT);
        this.SET_ACTIVE_DATA(this.DATA_ELEMENT);

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_ENTRY();
    };
    async NEW_CATEGORY() {

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_TAG(this.TAG_CAT_NEW);
        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CATEGORY); 
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_CATEGORY);
        this.SET_ACTIVE_DATA(this.DATA_CATEGORY);

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_ENTRY();
        await this.UPDATE_LIST_CATEGORY();
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    async UPDATE_LIST_ELEMENT() {

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CONSOLE);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_ELEMENT);
        this.SET_ACTIVE_LIST(this.LIST_ELEMENT);
        this.SET_ACTIVE_LISTTAG(this.TAG_LIST_ELEMENT);

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };
    async UPDATE_LIST_CATEGORY() {

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CONSOLE);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_CATEGORY);
        this.SET_ACTIVE_LIST(this.LIST_CATEGORY);
        this.SET_ACTIVE_LISTTAG(this.TAG_LIST_CATEGORY);

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };
    async UPDATE_LIST_RADIENS() {
        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CONSOLE);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_CATEGORY);
        this.SET_ACTIVE_LIST(this.LIST_RADIENS);
        this.SET_ACTIVE_LISTTAG(this.TAG_RADIENS);

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };
    async UPDATE_LIST_FRAGMENTS() {
        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CONSOLE);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_CATEGORY);
        this.SET_ACTIVE_LIST(this.LIST_FRAGMENT);
        this.SET_ACTIVE_LISTTAG(this.TAG_FRAGMENTS);

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };
    async UPDATE_LIST_MALRADI() {

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CONSOLE);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_CATEGORY);
        this.SET_ACTIVE_LIST(this.LIST_MALRADI);
        this.SET_ACTIVE_LISTTAG(this.TAG_MALRADI);

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };
    async REMOVE_LIST_ELEMENT() {

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CONSOLE);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_ELEMENT);
        this.SET_ACTIVE_LIST(this.MGR_LISTS.ELEMENT.CATEGORY);
        this.SET_ACTIVE_LISTTAG('Category');

        await this.REMOVE_LIST_ENTRY();
    };
    async REMOVE_LIST_RADIENS() {
        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CONSOLE);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_CATEGORY);
        this.SET_ACTIVE_LIST(this.MGR_LISTS.ELEMENT.RADIENS);
        this.SET_ACTIVE_LISTTAG('Radiens');

        await this.REMOVE_LIST_ENTRY();

    };
    async REMOVE_LIST_FRAGMENT() {

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CONSOLE);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_CATEGORY);
        this.SET_ACTIVE_LIST(this.MGR_LISTS.ELEMENT.FRAGMENT);
        this.SET_ACTIVE_LISTTAG('Fragment');

        await this.REMOVE_LIST_ENTRY();
    };
    async REMOVE_LIST_MALRADI() {   

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_PATH(this.PATH_ELEMENT_CONSOLE);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_CATEGORY);
        this.SET_ACTIVE_LIST(this.MGR_LISTS.ELEMENT.MALRADI);
        this.SET_ACTIVE_LISTTAG('Malradi');

        await this.REMOVE_LIST_ENTRY();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ============== //
    // << TAXONOMY >> //
    // ============== //

    async UPDATE_EL_PROPERTY_CATEGORY() {
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_ELEMENT}/${this.TAXONOMY_PROPERTY_ELEMENT}.json`);
        await this.SET_BASE_PROPERTY_WITH_HEADER(this.DATA_ELEMENT, this.TAG_TAXONOMY, this.TAG_CATEGORY, this.TAXONOMY_PROPERTY_CATEGORY);
    };
    async UPDATE_EL_PROPERTY_TYPE() {
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_ELEMENT}/${this.TAXONOMY_PROPERTY_ELEMENT}.json`)
        this.SET_BASE_PROPERTY_WITH_HEADER(this.DATA_ELEMENT, this.TAG_TAXONOMY, 'TYPE', this.TAXONOMY_PROPERTY_TYPE);
    };
    async UPDATE_CAT_PROPERTY_TYPE() {
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_CATEGORY}/${this.TAXONOMY_PROPERTY_CATEGORY}.json`)
        this.SET_BASE_PROPERTY_WITH_HEADER(this.DATA_CATEGORY, this.TAG_TAXONOMY, 'TYPE', this.TAXONOMY_PROPERTY_TYPE);
    };

    // ============ //
    // << CONNEX >> //
    // ============ //

    async UPDATE_EL_PROPERTY_SISTER() {
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_ELEMENT}/${this.TAXONOMY_PROPERTY_ELEMENT}.json`)
        this.ADD_BASE_PROPERTY_LIST_WITH_HEADER(this.DATA_ELEMENT, 'CONNEX', 'SISTER_ELEMENTS', this.CONNEX_SISTER);
    };
    async UPDATE_CAT_PROPERTY_ELEMENTS() {
        await this.ADD_BASE_PROPERTY_LIST_NO_HEADER(this.DATA_CATEGORY, this.TAG_ELEMENT, this.TAXONOMY_PROPERTY_ELEMENT);
    };
    async REMOVE_CAT_ELEMENTS() {
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_ELEMENT);
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_CATEGORY}/${this.DATA_OLD.TAXONOMY.CATEGORY}.json`);
        let DATA = this.SESSION.ELEMENTS.DATA.CATEGORY[this.DATA_OLD.TAXONOMY.CATEGORY];
        await this.REMOVE_BASE_PROPERTY_LIST_NO_HEADER(DATA.ELEMENTS, DATA, 'ELEMENTS');
    };

    // ============== //
    // << PHYSICAL >> //
    // ============== //

    async UPDATE_EL_PROPERTY_COLOUR() {
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_ELEMENT}/${this.TAXONOMY_PROPERTY_ELEMENT}.json`)
        this.SET_BASE_PROPERTY_WITH_HEADER(this.DATA_ELEMENT, 'PHYSICAL', 'COLOUR', this.PHYSICAL_COLOUR);
    };
    async UPDATE_EL_PROPERTY_USES() {
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_ELEMENT}/${this.TAXONOMY_PROPERTY_ELEMENT}.json`)
        this.ADD_BASE_PROPERTY_LIST_WITH_HEADER(this.DATA_ELEMENT, 'PHYSICAL', 'USES', this.PHYSICAL_USES);
    };

    // ============= //
    // << HISTORY >> //
    // ============= //

    async UPDATE_EL_PROPERTY_AGE() {
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_ELEMENT}/${this.TAXONOMY_PROPERTY_ELEMENT}.json`)
        this.SET_BASE_PROPERTY_WITH_HEADER(this.DATA_ELEMENT, 'HISTORY', 'AGE', this.HISTORY_AGE);
    };

    // ============== //
    // << HERITAGE >> //
    // ============== //

    async UPDATE_EL_PROPERTY_SURNAME() {
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_ELEMENT}/${this.TAXONOMY_PROPERTY_ELEMENT}.json`)
        this.SET_BASE_PROPERTY_WITH_HEADER(this.DATA_ELEMENT, 'HISTORY', 'SURNAME', this.HERITAGE_SURNAME);
    };

    // ================= //
    // ## DESCRIPTION ## //
    // ================= //

    async ADD_EL_DESCRIPTION() {

        // ============== //
        // << SETTINGS >> //
        // ============== //

        await this.SET_EL_DESCRIPTION_CODE_UPDATED();
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_DESCRIPTION}/${this.DESCRIPTION_CODE_UPDATED}.txt`);
        this.SET_ACTIVE_TEXT(this.DESCRIPTION_PROPERTY_TEXT);

        // =========== //
        // << FILES >> //
        // =========== //

        await this.NEW_DESCRIPTION_ENTRY();
    };
    async SET_EL_DESCRIPTION_CODE_UPDATED() {
        this.DESCRIPTION_CODE_ORIGINAL = this.DATA_OLD.DESCRIPTION;
        if (this.TAXONOMY_PROPERTY_TYPE === 'RADIENS') {this.DESCRIPTION_CODE_UPDATED = this.EDIT_DESCRIPTION_CODE_EL('RA')}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'FRAGMENT') {this.DESCRIPTION_CODE_UPDATED = this.EDIT_DESCRIPTION_CODE_EL('FR')}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'MALRADI') {this.DESCRIPTION_CODE_UPDATED = this.EDIT_DESCRIPTION_CODE_EL('MA')};
    };
    SET_CAT_DESCRIPTION_CODE_UPDATED() {
        if (this.TAXONOMY_PROPERTY_TYPE === 'RADIENS') {this.DESCRIPTION_CODE_UPDATED = this.EDIT_DESCRIPTION_CODE_CAT('RA')}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'FRAGMENT') {this.DESCRIPTION_CODE_UPDATED = this.EDIT_DESCRIPTION_CODE_CAT('FA')}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'MALRADI') {this.DESCRIPTION_CODE_UPDATED = this.EDIT_DESCRIPTION_CODE_CAT('MA')};
    };
    async ADD_CAT_DESCRIPTION() {

        // ============== //
        // << SETTINGS >> //
        // ============== //
        await this.SET_EL_DESCRIPTION_CODE_UPDATED();
        this.SET_ACTIVE_PATH(`${this.PATH_ELEMENT_DESCRIPTION}/${this.DESCRIPTION_CODE_UPDATED}.txt`);
        this.SET_ACTIVE_TEXT(this.DESCRIPTION_PROPERTY_TEXT);

        // =========== //
        // << FILES >> //
        // =========== //

        await this.NEW_DESCRIPTION_ENTRY();
    };
    async REMOVE_DESCRIPTION() {

        this.RENDERER_PATH = `${this.PATH_ELEMENT_DESCRIPTION}/${this.DESCRIPTION_CODE_ORIGINAL}.txt`;
        await this.REMOVE();
    };

    // ============== //
    // ## MARKDOWN ## //
    // ============== //

    async NEW_EL_MARKDOWN() {

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.SET_ACTIVE_TAG(this.TAG_EL_NEW);
        this.SET_ACTIVE_DATA(this.DATA_ELEMENT);
        this.SET_ACTIVE_FILE(this.TAXONOMY_PROPERTY_ELEMENT);
        this.SET_ACTIVE_PATH(this.PATH_MARKDOWN_UPDATED_ELEMENT);

        // =========== //
        // << FILES >> //
        // =========== //

        await this.NEW_MARKDOWN_ENTRY();
    };
    async COPY_EL_MARKDOWN() {
        this.RENDERER_PATH = this.PATH_MARKDOWN_EXISTING_ELEMENT;
                console.log(this.RENDERER_PATH)
        this.DATA_MARKDOWN = await this.READ();
        console.log(this.DATA_MARKDOWN)
        this.RENDERER_PATH = this.PATH_MARKDOWN_UPDATED_ELEMENT;
        this.RENDERER_DATA = this.DATA_MARKDOWN;

        await this.MARKDOWN();
    };
    async REMOVE_EL_MARKDOWN() {
        this.RENDERER_PATH = this.PATH_MARKDOWN_EXISTING_ELEMENT;
        await this.REMOVE();
    };
    async UPDATE_EL_MARKDOWN_CATEGORY() {
        let INSTANCE_MARKDOWN = await new EL_Markdown({
            ELEMENT_CONFIG_TAXONOMY_TYPE: this.DATA_OLD.TAXONOMY.TYPE,
            ELEMENT_CONFIG_TAXONOMY_CATEGORY: this.TAXONOMY_PROPERTY_CATEGORY,
            ELEMENT_CONFIG_TAXONOMY_NAME: this.TAXONOMY_PROPERTY_ELEMENT,
            ELEMENT_CONFIG_PATH_DATABASE: `${this.PATH_OBSIDIAN}/SHELF - DATABASE/`,
            ELEMENT_CONFIG_ACTIVE: this.TAXONOMY_PROPERTY_CATEGORY
        }).UPDATE_MARKDOWN_PROPERTY_CATEGORY(this.DATA_OLD.TAXONOMY.CATEGORY);
    };
    async UPDATE_EL_MARKDOWN_TYPE() {
        let INSTANCE_MARKDOWN = await new EL_Markdown({
            ELEMENT_CONFIG_TAXONOMY_TYPE: this.DATA_OLD.TAXONOMY.TYPE,
            ELEMENT_CONFIG_TAXONOMY_CATEGORY: this.TAXONOMY_PROPERTY_CATEGORY,
            ELEMENT_CONFIG_TAXONOMY_NAME: this.TAXONOMY_PROPERTY_ELEMENT,
            ELEMENT_CONFIG_PATH_DATABASE: `${this.PATH_OBSIDIAN}/SHELF - DATABASE/`,
            ELEMENT_CONFIG_ACTIVE: this.TAXONOMY_PROPERTY_TYPE
        }).UPDATE_MARKDOWN_PROPERTY_TYPE();
    };
    async UPDATE_EL_MARKDOWN_SISTER() {
        let INSTANCE_MARKDOWN = await new EL_Markdown({
            ELEMENT_CONFIG_TAXONOMY_TYPE: this.DATA_OLD.TAXONOMY.TYPE,
            ELEMENT_CONFIG_TAXONOMY_CATEGORY: this.TAXONOMY_PROPERTY_CATEGORY,
            ELEMENT_CONFIG_TAXONOMY_NAME: this.TAXONOMY_PROPERTY_ELEMENT,
            ELEMENT_CONFIG_HISTORY_CONNEX: this.CONNEX_SISTER,
            ELEMENT_CONFIG_PATH_DATABASE: `${this.PATH_OBSIDIAN}/SHELF - DATABASE/`,
            ELEMENT_CONFIG_ACTIVE: this.CONNEX_SISTER
        }).UPDATE_MARKDOWN_PROPERTY_SISTERS();
    };
    async UPDATE_EL_MARKDOWN_COLOUR() {
        let INSTANCE_MARKDOWN = await new EL_Markdown({
            ELEMENT_CONFIG_TAXONOMY_TYPE: this.DATA_OLD.TAXONOMY.TYPE,
            ELEMENT_CONFIG_TAXONOMY_CATEGORY: this.TAXONOMY_PROPERTY_CATEGORY,
            ELEMENT_CONFIG_TAXONOMY_NAME: this.TAXONOMY_PROPERTY_ELEMENT,
            ELEMENT_CONFIG_PROPERTY_PHYSICAL_COLOUR: this.PHYSICAL_COLOUR,
            ELEMENT_CONFIG_PATH_DATABASE: `${this.PATH_OBSIDIAN}/SHELF - DATABASE/`,
            ELEMENT_CONFIG_ACTIVE: this.PHYSICAL_COLOUR
        }).UPDATE_MARKDOWN_PROPERTY_COLOUR();
    };
    async UPDATE_EL_MARKDOWN_USES() {

    };
    async UPDATE_EL_MARKDOWN_SURNAME() {

    };
    async UPDATE_EL_MARKDOWN_AGE() {

    };

    // ============= //
    // << FOLDERS >> //
    // ============= //

    async CREATE_MD_CATEGORY_FOLDER(PARAMETER_CATEGORY, PARAMETER_TYPE) {
        this.RENDERER_PATH = `${this.PATH_MARKDOWN_ELEMENT}/${PARAMETER_TYPE}/${PARAMETER_CATEGORY}`;
        await this.CREATE_FOLDER();
    };
    async DELETE_MD_CATEGORY_FOLDER(PARAMETER_CATEGORY, PARAMETER_TYPE) {
        this.RENDERER_PATH = `${this.PATH_MARKDOWN_ELEMENT}/${PARAMETER_TYPE}/${PARAMETER_CATEGORY}`;
        await this.DELETE_FOLDER();
    };
};

// ELEMENTS
// --------

// CATEGORY

// [x] PROPERTIES
// [x] DESCRIPTION
// [x] MARKDOWN FILE
// [x] MARKDOWN FOLDERS
// [x] LISTS
// [x] OTHER FILES