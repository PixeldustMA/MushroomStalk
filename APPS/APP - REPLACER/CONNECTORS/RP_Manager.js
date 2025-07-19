import Manager_Database from "../../APP - DATABASE/MANAGERS/Manager_Database.js";
import EL_Markdown from "../../APP - ELEMENTS/CONNECTORS/EL_Markdown.js";

export default  class RP_Manager extends Manager_Database{

    constructor({
        REPLACER_CONFIG_TAG_OLD = 0,
        REPLACER_CONFIG_TAG_NEW = 0
    }){
        super();

        // ================ //
        // << PROPERTIES >> //
        // ================ //

        this.CATEGORY_OLD = REPLACER_CONFIG_TAG_OLD;
        this.CATEGORY_NEW = REPLACER_CONFIG_TAG_NEW;

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.RP_PATH = 'UNSET';
        this.RP_DATA = 'UNSET';
        this.RP_LIST = 'UNSET';
        this.RP_SESSION = 'UNSET';
    };

    async REPLACE_CATEGORY() {

        await this.INITIALISE_SESSION();
        await this.REQUEST_SESSION_ELEMENT();
        console.log(this.SESSION.ELEMENTS.DATA.CATEGORY)
        this.LIST_ELEMENTS = this.SESSION.ELEMENTS.DATA.CATEGORY[this.CATEGORY_OLD].ELEMENTS;

        // ===================== //
        // << UPDATE ELEMENTS >> //
        // ===================== //
        this.CURRENT_TYPE = this.SESSION.ELEMENTS.DATA.CATEGORY[this.CATEGORY_OLD].TAXONOMY.TYPE
        this.RENDERER_PATH = `C:\\Stitchy\\THE ORB\\Goblin Swamp/SHELF - DATABASE/WORLD/ELEMENTS/${this.CURRENT_TYPE}/${this.CATEGORY_NEW}`
        await this.CREATE_FOLDER();

        console.log('CREATED FOLDER');

        await this.ELEMENT_CATEGORY_REFERENCES();

        // ================ //
        // << BASE FILE >> //
        // =============== //

        await this.ELEMENT_CATEGORY_BASE_NEW();
        await this.ELEMENT_CATEGORY_BASE_REMOVE();

        // =============== //
        // << LIST FILE >> //
        // =============== //

        await this.ELEMENT_CATEGORY_REMOVE_LIST();
        await this.ELEMENT_CATEGORY_NEW_LIST();

        await  this.REQUEST_SESSION_ELEMENT();

        // ================== //
        // << TYPE UPDATES >> //
        // ================== //

        
        if (this.CURRENT_TYPE === 'RADIENS') {
            await this.ELEMENT_CATEGORY_REMOVE_LIST_RADIENS();
            await this.ELEMENT_CATEGORY_NEW_LIST_RADIENS();
        }
        else if (this.CURRENT_TYPE === 'FRAGMENT') {
            await this.ELEMENT_CATEGORY_REMOVE_LIST_FRAGMENT();
            await this.ELEMENT_CATEGORY_NEW_LIST_FRAGMENT();
        }
        else if (this.CURRENT_TYPE === 'MALRADI') {
            await this.ELEMENT_CATEGORY_REMOVE_LIST_MALRADI();
            await this.ELEMENT_CATEGORY_NEW_LIST_MALRADI();
        };
    };

    // ================ //
    // << BASE FILES >> //
    // ================ //

    async ADD_NEW_FILE() {
        this.RENDERER_PATH = this.RP_PATH;
        this.RENDERER_DATA = this.RP_DATA;
        await this.SAVE();
    };
    async REMOVE_FILE() {
        this.RENDERER_PATH = this.RP_PATH;
        await this.REMOVE();
    };

    // ================ //
    // << REFERENCES >> //
    // ================ //

    async UPDATE_REFERENCES() {

        this.MGR_ACTIVE_TAG = 'ELEMENT_UPDATE';
        console.log(this.INSTANCE_MARKDOWN)
        const INSTANCE = new EL_Markdown({});

        for (let INDEX_REFERENCES = 0; INDEX_REFERENCES < this.RP_LIST.length; INDEX_REFERENCES++) {

            const TAG_REFERENCE = this.RP_LIST[INDEX_REFERENCES];
            let DATA_REFERENCE = this.RP_SESSION[TAG_REFERENCE];

            console.log(DATA_REFERENCE);
            DATA_REFERENCE = this.findAndReplace(DATA_REFERENCE, this.CATEGORY_OLD, this.CATEGORY_NEW);
            console.log(DATA_REFERENCE)
            this.RENDERER_PATH = `${this.RP_PATH}/${TAG_REFERENCE}.json`;
            this.RENDERER_DATA = DATA_REFERENCE;

            console.log(this.RENDERER_DATA)
            await this.SAVE();

            INSTANCE.PROPERTY_TAXONOMY_NAME = DATA_REFERENCE.TAXONOMY.NAME;
            INSTANCE.PROPERTY_TAXONOMY_CATEGORY = this.CATEGORY_NEW;
            INSTANCE.PROPERTY_TAXONOMY_CATEGORY_OLD = this.CATEGORY_OLD;
            INSTANCE.PROPERTY_TAXONOMY_TYPE = DATA_REFERENCE.TAXONOMY.TYPE;
            INSTANCE.ACTIVE_VALUE = this.CATEGORY_NEW
            await INSTANCE.UPDATE_MARKDOWN_PROPERTY_CATEGORY();
            this.RENDERER_PATH = `C:\\Stitchy\\THE ORB\\Goblin Swamp/SHELF - DATABASE/WORLD/ELEMENTS/${DATA_REFERENCE.TAXONOMY.TYPE}/${this.CATEGORY_OLD}/${DATA_REFERENCE.TAXONOMY.NAME}.md`;
            await this.REMOVE_FILE();
        };
        this.RENDERER_PATH = `C:\\Stitchy\\THE ORB\\Goblin Swamp/SHELF - DATABASE/WORLD/ELEMENTS/${this.CURRENT_TYPE}/${this.CATEGORY_OLD}`;
        await this.DELETE_FOLDER();
    };

    // ====================== //
    // << ELEMENT CATEGORY >> //
    // ====================== //

    async ELEMENT_CATEGORY_BASE_NEW() {
        this.RP_PATH = `${this.MGR_PATHS.ELEMENT.CATEGORY}/${this.CATEGORY_NEW}.json`;
        this.RP_DATA = this.SESSION.ELEMENTS.DATA.CATEGORY[this.CATEGORY_OLD];
        this.RP_DATA.TAXONOMY.NAME = this.CATEGORY_NEW;
        await this.ADD_NEW_FILE();
    };
    async ELEMENT_CATEGORY_BASE_REMOVE() {
        this.RP_PATH = `${this.MGR_PATHS.ELEMENT.CATEGORY}/${this.CATEGORY_OLD}.json`;
        await this.REMOVE_FILE();
    };
    async ELEMENT_CATEGORY_REFERENCES() {

        await this.INITIALISE_DATA();
        this.RP_LIST = this.LIST_ELEMENTS;
        this.RP_SESSION = this.SESSION.ELEMENTS.DATA.ELEMENT;
        this.RP_PATH = this.MGR_PATHS.ELEMENT.ELEMENT;
        await this.UPDATE_REFERENCES();

    };
    async ELEMENT_CATEGORY_REMOVE_LIST() {

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.CATEGORY_OLD,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.CATEGORY,
            LIST_TYPE: 'Category',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.REMOVE_LIST_ENTRY();
    };
    async ELEMENT_CATEGORY_NEW_LIST() {

        await this.INITIALISE_SESSION();
        
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.CATEGORY_NEW,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.CATEGORY,
            LIST_TYPE: 'Category',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.NEW_LIST_ENTRY();
    };
    async ELEMENT_CATEGORY_REMOVE_LIST_RADIENS() {

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.CATEGORY_OLD,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.RADIENS,
            LIST_TYPE: 'Radiens',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.REMOVE_LIST_ENTRY();
    };
    async ELEMENT_CATEGORY_NEW_LIST_RADIENS() {

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.CATEGORY_NEW,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.RADIENS,
            LIST_TYPE: 'Radiens',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.NEW_LIST_ENTRY();
    };
    async ELEMENT_CATEGORY_REMOVE_LIST_FRAGMENT() {

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.CATEGORY_OLD,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.FRAGMENT,
            LIST_TYPE: 'Fragment',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.REMOVE_LIST_ENTRY();
    };
    async ELEMENT_CATEGORY_NEW_LIST_FRAGMENT() {

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.CATEGORY_NEW,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.FRAGMENT,
            LIST_TYPE: 'Fragment',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.NEW_LIST_ENTRY();
    };
    async ELEMENT_CATEGORY_REMOVE_LIST_MALRADI() {

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.CATEGORY_OLD,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.MALRADI,
            LIST_TYPE: 'Malradi',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.REMOVE_LIST_ENTRY();
    };
    async ELEMENT_CATEGORY_NEW_LIST_MALRADI() {

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.CATEGORY_NEW,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.MALRADI,
            LIST_TYPE: 'Malradi',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.NEW_LIST_ENTRY();
    };

}