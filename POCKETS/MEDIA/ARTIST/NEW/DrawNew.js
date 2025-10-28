import Create from "../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import PANEL_Countries from "../../../../APPS/APP - JELLYFISH/ELEMENTS/COUNTRIES/Panel_Countries.js";
import MANAGER_Artist from "../../../../APPS/APP - MEDIA/CONSOLE/Artist_Manager.js";
import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class DrawNew extends Stalk{

    constructor(){

        super();

        this.SECTION_TITLE = document.getElementById('NEW_Section-Title');
        this.SECTION_NAME = document.getElementById('NEW_Section-Name');
        this.SECTION_FOUNDATION = document.getElementById('NEW_Section-Foundation');
        this.SECTION_STYLE = document.getElementById('NEW_Section-Style');
        this.SECTION_LANGUAGE = document.getElementById('NEW_Section-Language');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_NAME = 'UNSET';
        this.WRAPPER_FOUNDATION = 'UNSET';
        this.WRAPPER_STYLE = 'UNSET';
        this.WRAPPER_LANGUAGE = 'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_TITLE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_INPUT_NAME = 'UNSET';
        this.LABEL_SELECT_DECADE = 'UNSET';
        this.LABEL_SELECT_COUNTRY = 'UNSET';
        this.LABEL_SELECT_STYLE = 'UNSET';
        this.LABEL_INPUT_LANGUAGE = 'UNSET';

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_NAME = 'UNSET';
        this.INPUT_LANGUAGE = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_COUNTRY = 'UNSET';
        this.SELECT_DECADE = 'UNSET';
        this.SELECT_STYLE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_COUNTRY = new PANEL_Countries();
        this.BLOCK_CREATE = new Create({});
    };

    DRAW(){

        this.SECTION_TITLE.append(this.PANEL_TITLE());
        this.SECTION_NAME.append(this.PANEL_NAME());
        this.SECTION_FOUNDATION.append(this.PANEL_FOUNDATION())
        this.SECTION_STYLE.append(this.PANEL_STYLE())
        this.SECTION_LANGUAGE.append(this.PANEL_LANGUAGES())
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_TITLE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_BACK();
        this.ACTIVATE_SAVE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.HEADER_TITLE,
            this.BUTTON_BACK,
            this.BUTTON_SAVE
        ]);        
        return this.WRAPPER_TITLE;

    };
    PANEL_NAME() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_NAME = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_NAME.append(...[
            this.LABEL_INPUT_NAME,
            this.INPUT_NAME
        ]);        
        return this.WRAPPER_NAME;
    };
    PANEL_FOUNDATION() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_FOUNDATION = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_FOUNDATION.append(...[
            this.LABEL_SELECT_DECADE,
            this.SELECT_DECADE,
            this.BLOCK_COUNTRY.DRAW()
        ]);        
        return this.WRAPPER_FOUNDATION;
    };
    PANEL_STYLE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_STYLE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_STYLE.append(...[
            this.LABEL_SELECT_STYLE,
            this.SELECT_STYLE
        ]);        
        return this.WRAPPER_STYLE;
    };
    PANEL_LANGUAGES() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_LANGUAGE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_LANGUAGE.append(...[
            this.LABEL_INPUT_LANGUAGE,
            this.INPUT_LANGUAGE
        ]);        
        return this.WRAPPER_LANGUAGE;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_BACK() {

        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('ARTISTS', 'SHOPPING')
        });
    };
    ACTIVATE_SAVE() {

        this.BUTTON_SAVE.addEventListener('click', (event) => {
            let MANAGER = new MANAGER_Artist({
                ARTIST_CONFIG_ARTIST: this.INPUT_NAME.value,
                ARTIST_CONFIG_DECADE: this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_DECADE),
                ARTIST_CONFIG_COUNTRY: this.BLOCK_COUNTRY.GET_COUNTRY(),
                ARTIST_CONFIG_STYLE: this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_STYLE),
                ARTIST_CONFIG_LANGUAGE: this.INPUT_LANGUAGE.value
            });
            MANAGER.INSERT_ARTIST().then((RES) => {
                window.location.reload()
                return RES});
        });
    };
    
    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {
        await this.REQUEST_SESSION_MEDIA();

        await this.#HEADERS();
        await this.#LABELS();
        await this.#OPTIONS();
        await this.#INPUT();
        await this.#SELECT();
        await this.#BLOCKS();
        await this.#BUTTONS();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {

        this.HEADER_TITLE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Artist-Title',
        }).INIT();

        this.HEADER_TITLE.innerHTML = 'NEW ARTIST';
    };
    async #LABELS() {

        this.LABEL_INPUT_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Artist-Name',
        }).INIT();
        this.LABEL_SELECT_COUNTRY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Artist-Name',
        }).INIT();
        this.LABEL_SELECT_DECADE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Artist-Name',
        }).INIT();
        this.LABEL_INPUT_LANGUAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Artist-Name',
        }).INIT();
        this.LABEL_SELECT_STYLE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Artist-Name',
        }).INIT();

        this.LABEL_INPUT_NAME.innerHTML = 'Name the artist';
        this.LABEL_SELECT_COUNTRY.innerHTML = 'Select the country this artist is from';
        this.LABEL_SELECT_DECADE.innerHTML = 'Select the decade this artist started performing in';
        this.LABEL_INPUT_LANGUAGE.innerHTML = 'Input the main language of the artist';
        this.LABEL_SELECT_STYLE.innerHTML = 'Choose the main style of the artist'
    };
    async #INPUT() {

        this.INPUT_NAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Artist-Name',
        }).INIT();
        this.INPUT_LANGUAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Artist-Language',
        }).INIT();

    }
    async #SELECT() {

        this.SELECT_COUNTRY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Artist-Country',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_COUNTRY
        }).INIT();
        this.SELECT_DECADE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Artist-Country',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_DECADE
        }).INIT();
        this.SELECT_STYLE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Artist-Country',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_STYLE
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_COUNTRY = [];
        this.OPTIONS_DECADE = [
            'Choose a decade',
            'CLASSICAL',
            '1920',
            '1930',
            '1940',
            '1950',
            '1960',
            '1970',
            '1980',
            '1990',
            '2000',
            '2010',
            '2020'
        ];
        this.OPTIONS_STYLE = this.SESSION.MEDIA.GENRE.LIST;
        this.OPTIONS_STYLE.unshift('CHOOSE A STYLE')
    };
    async #BUTTONS() {

        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Artist-Title',
        }).INIT();
        this.BUTTON_SAVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Artist-Title',
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_SAVE.innerHTML = 'SAVE'
    };
    async #BLOCKS() {
        await this.BLOCK_COUNTRY.INITIALISE();
    }
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_Artist = new DrawNew();
await PAGE_Artist.INITIALISE();
PAGE_Artist.DRAW();
