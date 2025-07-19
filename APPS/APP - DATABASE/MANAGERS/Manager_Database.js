import Branches from "../../../CONSOLE/LUNGS/Branches.js";
import FILTER_Markdown from "../FILTERS/Filter_Markdown.js";
import FILTER_Templates from "../FILTERS/Filter_Template.js";
import Insert from "../OPERATIONS/Insert.js";
import DB_Load from "../OPERATIONS/Load_Database.js";

export default class DB_Manager extends Branches{

    constructor(){

        super();

        // ============== //
        // ## SETTINGS ## //
        // ============== //

        this.MGR_SETTINGS = {
            PATH: 'UNSET',
            FILE: 'UNSET',
            DATA: 'UNSET',
            LIST: 'UNSET',
            LIST_TYPE: 'UNSET',
            MARKDOWN: 'UNSET'
        };
        this.MGR_PROPERTIES = {
            TAXONOMY: {}
        };
        this.MGR_PATHS = {}; 
        this.MGR_LISTS = {};

        // ============ //
        // ## ACTIVE ## //
        // ============ //

        this.MGR_ACTIVE_PATH = 'UNSET';
        this.MGR_ACTIVE_FILE = 'UNSET';
        this.MGR_ACTIVE_DATA = 'UNSET';
        this.MGR_ACTIVE_TAG = 'UNSET';
        this.MGR_ACTIVE_LIST_TITLE = 'UNSET';
        this.MGR_ACTIVE_LIST = 'UNSET';

        this.INSTANCE_AGGREGATOR = 'UNLOADED';
        this.INSTANCE_LOAD = new DB_Load();
        this.INSTANCE_INSERT = 'UNLOADED';
    };

    async INITIALISE_SESSION() {

        console.log('Initialising database session');

        // ============ //
        // << SET UP >> //
        // ============ //

        const DATA = await this.INSTANCE_LOAD.LOAD();
        console.log(this.SESSION)
        this.MGR_PATHS = DATA.PATHS;
        console.log('DATABASE PATHS ARE::')
        console.log(this.MGR_PATHS)
        this.MGR_LISTS = DATA.LISTS;
        console.log('DATABASE LISTS ARE::')
        console.log(this.MGR_LISTS);
    };
    async INITIALISE_DATA() {

        this.INSTANCE_MARKDOWN = await new FILTER_Markdown({
            FILTER_CONFIG_TAG: this.MGR_ACTIVE_TAG,
            FILTER_CONFIG_DATA: this.MGR_PROPERTIES
        })
        this.MGR_ACTIVE_MARKDOWN = this.INSTANCE_MARKDOWN.GOBLIN();

        if (this.MGR_SETTINGS.FILE !== 'UNSET') {this.MGR_ACTIVE_FILE = this.MGR_SETTINGS.FILE;};
        if (this.MGR_SETTINGS.PATH !== 'UNSET') {this.MGR_ACTIVE_PATH = this.MGR_SETTINGS.PATH;};
        if (this.MGR_SETTINGS.DATA !== 'UNSET') {this.MGR_ACTIVE_DATA = this.MGR_SETTINGS.DATA;};
        if (this.MGR_SETTINGS.LIST !== 'UNSET') {this.MGR_ACTIVE_LIST = this.MGR_SETTINGS.LIST;};
        if (this.MGR_SETTINGS.LIST_TYPE !== 'UNSET') {this.MGR_ACTIVE_LIST_TYPE = this.MGR_SETTINGS.LIST_TYPE;};
        if (this.MGR_SETTINGS.MARKDOWN !== 'UNSET') {this.MGR_ACTIVE_MARKDOWN = this.MGR_SETTINGS.MARKDOWN;};
        if (this.MGR_SETTINGS.TEXT !== 'UNSET') {this.MGR_ACTIVE_TEXT = this.MGR_SETTINGS.TEXT}

        this.MGR_TEMPLATE_DATA = await new FILTER_Templates({
            FILTER_CONFIG_TAG: this.MGR_ACTIVE_TAG,
            FILTER_CONFIG_DATA: this.MGR_PROPERTIES
        }).TEMPLATE();

        console.log(this.MGR_TEMPLATE_DATA)
    };

    // ============ //
    // ## INSERT ## //
    // ============ //

    async NEW_ENTRY() {
        this.INSTANCE_INSERT = new Insert({
            INSERT_CONFIG_PATH: this.MGR_ACTIVE_PATH,
            INSERT_CONFIG_DATA: this.MGR_TEMPLATE_DATA,
            INSERT_CONFIG_FILE: this.MGR_ACTIVE_FILE
        });
        await this.INSTANCE_INSERT.BASE_FILE();
    };
    async NEW_LIST_ENTRY() {
        this.INSTANCE_INSERT = new Insert({
            INSERT_CONFIG_PATH: this.MGR_ACTIVE_PATH,
            INSERT_CONFIG_DATA: this.MGR_ACTIVE_DATA,
            INSERT_CONFIG_FILE: this.MGR_ACTIVE_FILE,
            INSERT_CONFIG_LIST: this.MGR_ACTIVE_LIST,
            INSERT_CONFIG_TAG: this.MGR_ACTIVE_LIST_TYPE
        });
        await this.INSTANCE_INSERT.LIST_FILE();
    };
    async NEW_MARKDOWN_ENTRY() {
        this.INSTANCE_INSERT = new Insert({
            INSERT_CONFIG_PATH: this.MGR_ACTIVE_PATH,
            INSERT_CONFIG_DATA: this.MGR_ACTIVE_DATA,
            INSERT_CONFIG_FILE: this.MGR_ACTIVE_FILE,
            INSERT_CONFIG_MARKDOWN: this.MGR_ACTIVE_MARKDOWN
        });
        await this.INSTANCE_INSERT.GOBLIN_FILE();
    };
    async NEW_DESCRIPTION_ENTRY() {
        this.RENDERER_PATH = this.MGR_ACTIVE_PATH;
        this.RENDERER_DATA = this.MGR_ACTIVE_TEXT;
        console.log(this.RENDERER_DATA)
        await this.MARKDOWN();
    };

    // ============ //
    // ## UPDATE ## //
    // ============ //

    async UPDATE_LIST_PROPERTY_NO_HEADER(PARAMETER_TAG, PARAMETER_VALUE) {
        let DATA = await this.READ_SPECIFIC_FILE();
        DATA[PARAMETER_TAG].push(PARAMETER_VALUE);
        this.RENDERER_DATA = DATA;
        await this.SAVE();
    };
    async UPDATE_PROPERTY_HEADER(PARAMETER_HEADER, PARAMETER_PROPERTY, PARAMETER_VALUE) {
        let DATA = await this.READ_SPECIFIC_FILE();
        DATA[PARAMETER_HEADER][PARAMETER_PROPERTY] = PARAMETER_VALUE;
        this.RENDERER_DATA = DATA;
        await this.SAVE();
    };

    // ========== //
    // ## READ ## //
    // ========== //

    async READ_SPECIFIC_FILE() {
        this.RENDERER_PATH = `${this.MGR_ACTIVE_PATH}/${this.MGR_ACTIVE_FILE}.json`;
        return JSON.parse(await this.READ());
    };

    // ============ //
    // ## REMOVE ## //
    // ============ //

    async REMOVE_LIST_ENTRY() {

        console.log('XXXXXXXXXXXXXXXXXXXXXXXX');
        console.log('REMOVING OLD LIST ENTRY');
        console.log('XXXXXXXXXXXXXXXXXXXXXXXX');

        console.log(this.MGR_ACTIVE_LIST)
        let ARRAY_ELEMENTS = [];
        if (this.MGR_ACTIVE_LIST.includes(this.MGR_ACTIVE_FILE)) {
            ARRAY_ELEMENTS = this.MGR_ACTIVE_LIST.filter(ELEMENT => ELEMENT !== this.MGR_ACTIVE_FILE);
            console.log(ARRAY_ELEMENTS);
            this.MGR_ACTIVE_LIST = ARRAY_ELEMENTS;
            this.RENDERER_PATH = `${this.MGR_ACTIVE_PATH}/${this.MGR_ACTIVE_LIST_TYPE}List.json`;
            this.RENDERER_DATA = this.MGR_ACTIVE_LIST;
            console.log(this.RENDERER_DATA);
            console.log('SAVING')
            await this.SAVE();
        }
    };

    findAndReplace(obj, findStr, replaceStr) {
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
                if(obj[key] === findStr.toUpperCase()){
                    console.log("Changed " + obj[key] + " for " + replaceStr.toUpperCase())
                    obj[key] = obj[key].split(findStr.toUpperCase()).join(replaceStr.toUpperCase());
                }    
            } 
            else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    this.findAndReplace(obj[key], findStr, replaceStr);
            }
        }
        return obj
    };
}