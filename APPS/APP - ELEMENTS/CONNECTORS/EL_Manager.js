import Manager_Database from "../../APP - DATABASE/MANAGERS/Manager_Database.js";
import EL_Markdown from "./EL_Markdown.js";

export default  class EL_Manager extends Manager_Database{

    constructor({
        ELEMENT_CONFIG_PROPERTY_TAXONOMY_CATEGORY = 0,
        ELEMENT_CONFIG_PROPERTY_TAXONOMY_TYPE = 0,
        ELEMENT_CONFIG_PROPERTY_TAXONOMY_ELEMENT = 0, 
        ELEMENT_CONFIG_PROPERTY_DESCRIPTION_TEXT = 0,
        ELEMENT_CONFIG_PROPERTY_DESCRIPTION_CODE = 0,
        ELEMENT_CONFIG_DATA_OLD = 0       
    }){

        super();

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

    };

    // ============ //
    // ## INSERT ## //
    // ============ //

    async INSERT_ELEMENT(){

        await this.NEW_ELEMENT();
        await this.UPDATE_LIST_ELEMENT();
        await this.NEW_MARKDOWN_ELEMENT();

        // ============= //
        // << UPDATES >> //
        // ============= //

        await this.UPDATE_PROPERTY_ELEMENT_CATEGORY();
    };
    async INSERT_CATEGORY() {
        await this.NEW_CATEGORY();
        await this.UPDATE_LIST_CATEGORY();
        if (this.TAXONOMY_PROPERTY_TYPE === 'RADIENS') {await this.UPDATE_LIST_RADIENS()}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'FRAGMENT') {await this.UPDATE_LIST_FRAGMENTS()}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'MALRADI') {await this.UPDATE_LIST_MALRADI()};
        await this.NEW_DESCRIPTION_CATEGORY();
    };

    async UPDATE_ELEMENT_TAXONOMY_CATEGORY() {
        await this.UPDATE_PROPERTY_ELEMENT_CATEGORY();
        await this.UPDATE_ARRAY_CATEGORY_ELEMENT();
        await this.REMOVE_LIST_ELEMENT();
        await this.UPDATE_LIST_ELEMENT();
    };
    async UPDATE_ELEMENT_TAXONOMY_TYPE() {

        await this.UPDATE_PROPERTY_ELEMENT_TYPE();
    };

    // ============ //
    // ## UPDATE ## //
    // ============ //

    async UPDATE_ELEMENT() {

        console.log(this.DATA_OLD);
        if (this.DATA_OLD.CATEGORY !== this.TAXONOMY_PROPERTY_CATEGORY) {await this.UPDATE_ELEMENT_TAXONOMY_CATEGORY();};
        if (this.DATA_OLD.TYPE !== this.TAXONOMY_PROPERTY_TYPE) {await this.UPDATE_ELEMENT_TAXONOMY_TYPE();}

    };
    async UPDATE_CATEGORY() {
        console.log(this.DATA_OLD); 
        if (this.DATA_OLD.TAXONOMY.TYPE !== this.TAXONOMY_PROPERTY_TYPE) {await this.#CHANGE_TYPE();}
        await this.REQUEST_SESSION_ELEMENT();
        await this.UPDATE_DESCRIPTION();
    };
    async UPDATE_DESCRIPTION() {

        await this.INITIALISE_SESSION();

        this.CODE_OLD = '';
        this.CODE_NEW = '';
        if (this.DATA_OLD.TAXONOMY.TYPE !== this.TAXONOMY_PROPERTY_TYPE) {
            this.CODE_OLD = `${this.DATA_OLD.TAXONOMY.TYPE[0]}A-${this.DESCRIPTION_PROPERTY_CODE}`;
            this.CODE_NEW = `${this.TAXONOMY_PROPERTY_TYPE[0]}A-${this.DESCRIPTION_PROPERTY_CODE}`;
            this.RENDERER_PATH = `${this.MGR_PATHS.ELEMENT.DESCRIPTION}/${this.CODE_OLD}.txt`;
            await this.REMOVE();
        }
        else {this.CODE_NEW = `${this.TAXONOMY_PROPERTY_TYPE[0]}A-${this.DESCRIPTION_PROPERTY_CODE}`};

        this.MGR_ACTIVE_PATH = `${this.MGR_PATHS.ELEMENT.DESCRIPTION}/${this.CODE_NEW}.txt`;
        this.MGR_ACTIVE_TEXT = this.DESCRIPTION_PROPERTY_TEXT;
        console.log(this.MGR_ACTIVE_PATH)
        await this.NEW_DESCRIPTION_ENTRY();
    };

    // ================ //
    // ## BASE FILES ## //
    // ================ //

    async NEW_ELEMENT() {
        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_ELEMENT,
            CATEGORY: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.ELEMENT,
            FILE: this.TAXONOMY_PROPERTY_ELEMENT,
            DATA: this.MGR_PROPERTIES,
            LIST: 'UNSET',
            LIST_TYPE: 'UNSET',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_ENTRY();
        // this.MGR_SETTINGS.PATH = this.MGR_PATHS.ELEMENT.CONSOLE;
    };
    async NEW_CATEGORY() {
        this.MGR_ACTIVE_TAG = 'ELEMENT_CATEGORY';
        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_PROPERTIES.DESCRIPTION = this.DESCRIPTION_PROPERTY_CODE;
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CATEGORY,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
            DATA: this.MGR_PROPERTIES,
            LIST: 'UNSET',
            LIST_TYPE: 'UNSET',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_ENTRY();

        this.RENDERER_PATH = `C:\\Stitchy\\THE ORB\\Goblin Swamp\\SHELF - DATABASE/WORLD/ELEMENTS/${this.TAXONOMY_PROPERTY_TYPE}/${this.TAXONOMY_PROPERTY_CATEGORY}`
        await this.CREATE_FOLDER();
    };

    async #CHANGE_TYPE() {

        console.log('CURRENT TYPE IS')
        console.log(this.TAXONOMY_PROPERTY_TYPE);

        console.log('OLD DATA IS...');
        console.log(this.DATA_OLD)
        await this.UPDATE_PROPERTY_CATEGORY_TYPE();

        if (this.DATA_OLD.TAXONOMY.TYPE === 'RADIENS'){await this.REMOVE_LIST_RADIENS()}
        else if (this.DATA_OLD.TAXONOMY.TYPE === 'FRAGMENT'){await this.REMOVE_LIST_FRAGMENT()}
        else if (this.DATA_OLD.TAXONOMY.TYPE === 'MALRADI'){await this.REMOVE_LIST_MALRADI()};

        if (this.TAXONOMY_PROPERTY_TYPE === 'RADIENS'){
            await this.UPDATE_LIST_RADIENS()
            await this.LOOP_CATEGORIES(this.TAXONOMY_PROPERTY_CATEGORY, 'RADIENS', this.DATA_OLD.TAXONOMY.TYPE);
        }
        else if (this.TAXONOMY_PROPERTY_TYPE === 'FRAGMENT'){
            await this.UPDATE_LIST_FRAGMENTS()
            await this.LOOP_CATEGORIES(this.TAXONOMY_PROPERTY_CATEGORY, 'FRAGMENT', this.DATA_OLD.TAXONOMY.TYPE);
        }
        else if (this.TAXONOMY_PROPERTY_TYPE === 'MALRADI'){
            await this.UPDATE_LIST_MALRADI();
            await this.LOOP_CATEGORIES(this.TAXONOMY_PROPERTY_CATEGORY, 'MALRADI', this.DATA_OLD.TAXONOMY.TYPE);
        };

        await this.LOOP_UPDATE_ELEMENT_BY_TYPE();
    };

    async LOOP_CATEGORIES(PARAMETER_CATEGORY, PARAMETER_TYPE, PARAMETER_TYPE_OLD) {

        let TAG_CATEGORY = PARAMETER_CATEGORY
        this.RENDERER_PATH = `C:\\Stitchy\\THE ORB\\Goblin Swamp\\SHELF - DATABASE/WORLD/ELEMENTS/${PARAMETER_TYPE}/${TAG_CATEGORY}`;
        await this.CREATE_FOLDER();

        await this.REQUEST_SESSION_ELEMENT();
        let ARRAY_ELEMENTS = this.SESSION.ELEMENTS.DATA.CATEGORY[TAG_CATEGORY].ELEMENTS;
        for (let INDEX_ELEMENT = 0; INDEX_ELEMENT < ARRAY_ELEMENTS.length; INDEX_ELEMENT++) {
            const TAG_ELEMENT = ARRAY_ELEMENTS[INDEX_ELEMENT];
            await this.LOOP_UPDATE_ELEMENT_BY_TYPE();
            this.RENDERER_PATH = `C:\\Stitchy\\THE ORB\\Goblin Swamp\\SHELF - DATABASE/WORLD/ELEMENTS/${PARAMETER_TYPE_OLD}/${TAG_CATEGORY}/${TAG_ELEMENT}.md`;
            let MARKDOWN_ORIGINAL = await this.READ();
            this.RENDERER_PATH = `C:\\Stitchy\\THE ORB\\Goblin Swamp\\SHELF - DATABASE/WORLD/ELEMENTS/${PARAMETER_TYPE}/${TAG_CATEGORY}/${TAG_ELEMENT}.md`;
            this.RENDERER_DATA = MARKDOWN_ORIGINAL;
            await this.MARKDOWN();
            this.RENDERER_PATH = `C:\\Stitchy\\THE ORB\\Goblin Swamp\\SHELF - DATABASE/WORLD/ELEMENTS/${PARAMETER_TYPE_OLD}/${TAG_CATEGORY}/${TAG_ELEMENT}.md`;
            await this.REMOVE();
            let MD = new EL_Markdown({
                ELEMENT_CONFIG_TAXONOMY_NAME: TAG_ELEMENT,
                ELEMENT_CONFIG_TAXONOMY_CATEGORY: TAG_CATEGORY,
                ELEMENT_CONFIG_TAXONOMY_TYPE: PARAMETER_TYPE
            })
            MD.ACTIVE_VALUE = PARAMETER_TYPE
            await MD.UPDATE_MARKDOWN_PROPERTY_TYPE();
        };
        this.RENDERER_PATH = `C:\\Stitchy\\THE ORB\\Goblin Swamp\\SHELF - DATABASE/WORLD/ELEMENTS/${PARAMETER_TYPE_OLD}/${TAG_CATEGORY}`;
        await this.DELETE_FOLDER();
    };

    // =========== //
    // ## LISTS ## //
    // =========== //

    // ============ //
    // << UPDATE >> //
    // ============ //

    async UPDATE_LIST_ELEMENT() {
        await this.INITIALISE_SESSION();
        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_ELEMENT,
            CATEGORY: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.TAXONOMY_PROPERTY_ELEMENT,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.ELEMENT,
            LIST_TYPE: 'Element',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };
    async UPDATE_LIST_CATEGORY() {
        await this.INITIALISE_SESSION();
        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.CATEGORY,
            LIST_TYPE: 'Category',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };
    async UPDATE_LIST_RADIENS() {
        await this.INITIALISE_SESSION();
        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.RADIENS,
            LIST_TYPE: 'Radiens',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };
    async UPDATE_LIST_FRAGMENTS() {
        await this.INITIALISE_SESSION();
        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.FRAGMENT,
            LIST_TYPE: 'Fragment',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };
    async UPDATE_LIST_MALRADI() {
        await this.INITIALISE_SESSION();
        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.MALRADI,
            LIST_TYPE: 'Malradi',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_LIST_ENTRY();
    };

    // ============ //
    // << REMOVE >> //
    // ============ //

    async REMOVE_LIST_ELEMENT() {

        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_ELEMENT,
            CATEGORY: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.TAXONOMY_PROPERTY_ELEMENT,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.CATEGORY,
            LIST_TYPE: 'Category',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.REMOVE_LIST_ENTRY();
    };
    async REMOVE_LIST_RADIENS() {

        console.log('REMOVING FROM RADIENS');

        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.RADIENS,
            LIST_TYPE: 'Radiens',
            MARKDOWN: 'UNSET'
        };
        console.log(this.MGR_LISTS)
        await this.INITIALISE_DATA();
        await this.REMOVE_LIST_ENTRY();
    };
    async REMOVE_LIST_FRAGMENT() {

        console.log('REMOVING FROM FRAGMENTS');

        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.FRAGMENT,
            LIST_TYPE: 'Fragment',
            MARKDOWN: 'UNSET'
        };

        await this.INITIALISE_DATA();
        await this.REMOVE_LIST_ENTRY();
    };
    async REMOVE_LIST_MALRADI() {   

        console.log('REMOVING FROM MALRADI');

        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CONSOLE,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
            DATA: 'UNSET',
            LIST: this.MGR_LISTS.ELEMENT.MALRADI,
            LIST_TYPE: 'Malradi',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();
        await this.REMOVE_LIST_ENTRY();
    };

    // ============== //
    // ## MARKDOWN ## //
    // ============== //

    async NEW_MARKDOWN_ELEMENT() {

        this.MGR_ACTIVE_TAG = 'ELEMENT_NEW'
        await this.INITIALISE_SESSION();
        this.MGR_PATHS.MARKDOWN = "C:\\Stitchy\\THE ORB\\Goblin Swamp\\SHELF - DATABASE"
        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_PROPERTIES.TAXONOMY = {
            NAME: this.TAXONOMY_PROPERTY_ELEMENT,
            CATEGORY: this.TAXONOMY_PROPERTY_CATEGORY,
            TYPE: this.TAXONOMY_PROPERTY_TYPE
        };
        this.MGR_SETTINGS = {
            PATH: `${this.MGR_PATHS.MARKDOWN}/WORLD/ELEMENTS/${this.TAXONOMY_PROPERTY_TYPE}/${this.TAXONOMY_PROPERTY_CATEGORY}/${this.TAXONOMY_PROPERTY_ELEMENT}.md`,
            FILE: this.TAXONOMY_PROPERTY_ELEMENT,
            DATA: this.MGR_PROPERTIES,
            LIST: 'UNSET',
            LIST_TYPE: 'Element',
            MARKDOWN: 'UNSET'
        };
        await this.INITIALISE_DATA();

        // ================ //
        // << BASE FILES >> //
        // ================ //

        await this.NEW_MARKDOWN_ENTRY();
    };

    // ================= //
    // ## DESCRIPTION ## //
    // ================= //

    async NEW_DESCRIPTION_CATEGORY() {
        await this.INITIALISE_SESSION();
        if (this.TAXONOMY_PROPERTY_TYPE === 'RADIENS') {this.DESCRIPTION_PROPERTY_CODE = `RA-${this.DESCRIPTION_PROPERTY_CODE}`}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'FRAGMENT') {this.DESCRIPTION_PROPERTY_CODE = `FA-${this.DESCRIPTION_PROPERTY_CODE}`}
        else if (this.TAXONOMY_PROPERTY_TYPE === 'MALRADI') {this.DESCRIPTION_PROPERTY_CODE = `MA-${this.DESCRIPTION_PROPERTY_CODE}`};

        this.MGR_SETTINGS = {
            PATH: `${this.MGR_PATHS.ELEMENT.DESCRIPTION}/${this.DESCRIPTION_PROPERTY_CODE}.txt`,
            FILE: 'UNSET',
            DATA: 'UNSET',
            LIST: 'UNSET',
            LIST_TYPE: 'UNSET',
            MARKDOWN: 'UNSET',
            TEXT: this.DESCRIPTION_PROPERTY_TEXT
        };
        await this.INITIALISE_DATA();
        await this.NEW_DESCRIPTION_ENTRY();
    };

    // ============ //
    // ## UPDATE ## //
    // ============ //

    /**
     * ## UPDATE ELEMENT PROPERTY
     * --------------------------
     * 
     * Update the category file
     * This will update the array of elements to add in a new element
     */
    async UPDATE_ARRAY_CATEGORY_ELEMENT() {
        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CATEGORY,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
            VALUE: this.TAXONOMY_PROPERTY_ELEMENT
        };
        await this.INITIALISE_DATA();

        // ============= //
        // << UPDATES >> //
        // ============= //

        await this.UPDATE_LIST_PROPERTY_NO_HEADER('ELEMENTS', this.TAXONOMY_PROPERTY_ELEMENT);
    };
    /**
     * ## UPDATE CATEGORY PROPERTY
     * --------------------------
     * 
     * Update the Element file
     * This will update the category property to alter the existing category
     */
    async UPDATE_PROPERTY_ELEMENT_CATEGORY() {
        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.ELEMENT,
            FILE: this.TAXONOMY_PROPERTY_ELEMENT,
        };
        await this.INITIALISE_DATA();

        // ============= //
        // << UPDATES >> //
        // ============= //

        await this.UPDATE_PROPERTY_HEADER('TAXONOMY', 'CATEGORY', this.TAXONOMY_PROPERTY_CATEGORY);
    };
    async UPDATE_PROPERTY_ELEMENT_TYPE() {
        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.ELEMENT,
            FILE: this.TAXONOMY_PROPERTY_ELEMENT,
        };
        await this.INITIALISE_DATA();

        // ============= //
        // << UPDATES >> //
        // ============= //

        await this.UPDATE_PROPERTY_HEADER('TAXONOMY', 'TYPE', this.TAXONOMY_PROPERTY_TYPE);
    };
    async UPDATE_PROPERTY_CATEGORY_TYPE() {
        await this.INITIALISE_SESSION();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MGR_SETTINGS = {
            PATH: this.MGR_PATHS.ELEMENT.CATEGORY,
            FILE: this.TAXONOMY_PROPERTY_CATEGORY,
        };
        await this.INITIALISE_DATA();

        // ============= //
        // << UPDATES >> //
        // ============= //

        await this.UPDATE_PROPERTY_HEADER('TAXONOMY', 'TYPE', this.TAXONOMY_PROPERTY_TYPE);
    };

    // ========== //
    // ## LOOP ## //
    // ========== //

    async LOOP_UPDATE_ELEMENT_BY_TYPE() {

        await this.REQUEST_SESSION_ELEMENT();
        let OBJECT_DATA = this.SESSION.ELEMENTS.DATA.ELEMENT;
        let ELEMENTS = Object.keys(OBJECT_DATA);
        let ARRAY_CATEGORY = [];
        for (let INDEX_ELEMENT = 0; INDEX_ELEMENT < ELEMENTS.length; INDEX_ELEMENT++) {
            const KEY = ELEMENTS[INDEX_ELEMENT];
            let DATA = OBJECT_DATA[KEY];
            if (DATA.TAXONOMY.CATEGORY === this.TAXONOMY_PROPERTY_CATEGORY) {
                ARRAY_CATEGORY.push(KEY);
            };
        };
        for (let INDEX_ELEMENT = 0; INDEX_ELEMENT < ARRAY_CATEGORY.length; INDEX_ELEMENT++) {
            this.TAXONOMY_PROPERTY_ELEMENT = ARRAY_CATEGORY[INDEX_ELEMENT];
            await this.UPDATE_PROPERTY_ELEMENT_TYPE();
        };
    };

    // ============ //
    // ## REMOVE ## //
    // ============ //


}