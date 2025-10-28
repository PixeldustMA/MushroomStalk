import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Panel_Number_Picker from "../../../../APPS/APP - JELLYFISH/ELEMENTS/NUMBERS/Panel_Number_Picker.js";
import MANAGER_Author from "../../../../APPS/APP - MEDIA/CONSOLE/Author_Manager.js";
import Manager_Series from "../../../../APPS/APP - MEDIA/CONSOLE/Series_Manager.js";
import Panel_Search_Author from "../../../../APPS/APP - MEDIA/PANELS/AUTHORS/Panel_Search_Author.js";
import Panel_Select_Genre from "../../../../APPS/APP - MEDIA/PANELS/GENRE/Panel_Search_Genre.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class DrawNew extends Stalk{

    constructor() {

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_TITLE = document.getElementById('SECTION_New-Title');
        this.SECTION_DETAILS = document.getElementById('SECTION_New-Details');

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PAGE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_COMPLETION = 'UNSET';
        this.LABEL_NAME = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_NAME = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ // 

        this.SELECT_COMPLETION = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_COMPLETION = [];

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_AUTHOR = new Panel_Search_Author();
        this.BLOCK_GENRE = new Panel_Select_Genre();
        this.BLOCK_NUMBER = new Panel_Number_Picker();
        this.BLOCK_CREATE = new Create({})
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        this.SECTION_TITLE.append(this.PANEL_TITLE());
        this.SECTION_DETAILS.append(this.PANEL_DETAILS());
    };

    // ========== //
    // ## DRAW ## //
    // ========== //

    PANEL_TITLE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_BACK();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_PAGE,
            this.BUTTON_BACK
        ]);        
        return this.WRAPPER_TITLE;
    };
    PANEL_DETAILS() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DETAILS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_SAVE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DETAILS.append(...[
            this.LABEL_NAME,
            this.INPUT_NAME,
            this.BLOCK_AUTHOR.DRAW(),
            this.BLOCK_GENRE.DRAW(),
            this.BLOCK_NUMBER.DRAW(),
            this.LABEL_COMPLETION,
            this.SELECT_COMPLETION,
            this.BUTTON_SAVE
        ]);        
        return this.WRAPPER_DETAILS;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_SAVE() {

        this.BUTTON_SAVE.addEventListener('click', (event) => {
            let INSTANCE = new Manager_Series({
                    SERIES_CONFIG_NAME: this.INPUT_NAME.value,
                    SERIES_CONFIG_AUTHOR: this.BLOCK_AUTHOR.GET_AUTHOR(),
                    SERIES_CONFIG_PARTS: this.BLOCK_NUMBER.GET_NUMBER(),
                    SERIES_CONFIG_GENRE: this.BLOCK_GENRE.GET_GENRE(),
                    SERIES_CONFIG_SUBGENRE: this.BLOCK_GENRE.GET_SUBGENRE(),
                    SERIES_CONFIG_COMPLETION:this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_COMPLETION)
            }).INSERT().then((RESULT) => {
                let INSTANCE_SERIES = new MANAGER_Author({
                    AUTHOR_CONFIG_AUTHOR: this.BLOCK_AUTHOR.GET_AUTHOR(),
                    AUTHOR_CONFIG_SERIES: this.INPUT_NAME.value
                }).UPDATE_PROPERTY('SERIES').then((SRS_RESULT) => {return SRS_RESULT});
                return RESULT});
        });
    };
    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('SERIES', 'SHOPPING')
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.#HEADERS();
        await this.#BUTTON();
        await this.#BLOCKS();
        await this.#LABEL();
        await this.#INPUT();
        await this.#OPTIONS();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS(){

        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_MenuBooks-Title',
        }).INIT();

        this.HEADER_PAGE.innerHTML = 'NEW SERIES';

    };
    async #LABEL(){

        this.LABEL_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_SeriesNew-Name',
        }).INIT();
        this.LABEL_COMPLETION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_SeriesNew-Name',
        }).INIT();

        this.LABEL_NAME.innerHTML = 'Add the name of the series';
        this.LABEL_COMPLETION.innerHTML = 'Has the author finished the series?'
    };
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Bookshop-Genre'
        }).INIT();
        this.BUTTON_SAVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Bookshop-Genre'
        }).INIT();
        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SAVE.innerHTML = 'SAVE';
    };
    async #INPUT(){
        this.INPUT_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_SeriesNew-Name',
        }).INIT();

    };
    async #SELECT(){
        this.SELECT_COMPLETION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_SeriesNew-Completion',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_COMPLETION
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_COMPLETION = [
            'SERIES COMPLETION',
            'COMPLETE',
            'INCOMPLETE'
        ];
    };
    async #BLOCKS() {
        await this.BLOCK_GENRE.INITIALISE();
        await this.BLOCK_NUMBER.INITIALISE();
        await this.BLOCK_AUTHOR.INITIALISE();
        await this.BLOCK_NUMBER.INITIALISE(20);
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Menu_Series = new DrawNew();
await PAGE_Menu_Series.INITIALISE();
PAGE_Menu_Series.DRAW();