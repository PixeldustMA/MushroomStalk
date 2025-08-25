import Create from "../../../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_View_Element extends Stalk{
    
    constructor() {

        super();

        // ============== //
        // ## SECTIONS ## //
        // ============== //

        this.SECTION_Title = document.getElementById('SECTION_View-Title');
        this.SECTION_Buttons = document.getElementById('SECTION_View-Buttons');
        this.SECTION_Display = document.getElementById('SECTION_View-Display');

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_BUTTONS = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';
        this.WRAPPER_TAXONOMY = 'UNSET';
        this.WRAPPER_CONNEX = 'UNSET';
        this.WRAPPER_CONNEX_DISPLAY = 'UNSET';
        this.WRAPPER_PHYSICAL = 'UNSET';
        this.WRAPPER_PHYSICAL_DISPLAY = 'UNSET';
        this.WRAPPER_HERITAGE = 'UNSET';
        this.WRAPPER_HERITAGE_DRAGON_DISPLAY = 'UNSET';
        this.WRAPPER_HERITAGE_ELDER_DISPLAY = 'UNSET';
        this.WRAPPER_LOCATION = 'UNSET';
        this.WRAPPER_LOCATION_SPACE_DISPLAY = 'UNSET';
        this.WRAPPER_LOCATION_SECTOR_DISPLAY = 'UNSET';
        this.WRAPPER_LOCATION_SYSTEM_DISPLAY = 'UNSET';
        this.WRAPPER_LOCATION_PLANET_DISPLAY = 'UNSET';

        // ============ //
        // ## HEADER ## //
        // ============ //

        this.HEADER_PAGE = 'UNSET';
        this.HEADER_BUTTONS = 'UNSET';
        this.HEADER_TAXONOMY = 'UNSET';
        this.HEADER_TYPE = 'UNSET';
        this.HEADER_CATEGORY = 'UNSET';
        this.HEADER_CONNEX = 'UNSET';
        this.HEADER_PHYSICAL = 'UNSET';
        this.HEADER_DRAGON = 'UNSET';
        this.HEADER_SURNAME = 'UNSET';
        this.HEADER_ELDER = 'UNSET';
        this.HEADER_SPACE = 'UNSET';
        this.HEADER_SECTOR = 'UNSET';
        this.HEADER_SYSTEM = 'UNSET';
        this.HEADER_PLANET = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_TYPE = 'UNSET';
        this.LABEL_CATEGORY = 'UNSET';
        this.LABEL_SURNAME = 'UNSET';

        // =============== //
        // ## PARAGRAPH ## //
        // =============== //

        this.TEXT_DESCRIPTION = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_BACK = 'UNSET';
        this.BUTTON_TAXONOMY = 'UNSET';
        this.BUTTON_CONNEX = 'UNSET';
        this.BUTTON_PHYSICAL = 'UNSET';
        this.BUTTON_HERITAGE = 'UNSET';
        this.BUTTON_LOCATION = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Buttons.append(this.PANEL_BUTTONS());
        this.SECTION_Display.append(this.PANEL_DISPLAY());
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
    PANEL_BUTTONS(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_BUTTONS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_BUTTONS.append(...[
            this.HEADER_BUTTONS,
            this.BUTTON_BACK,
            this.BUTTON_TAXONOMY,
            this.BUTTON_DESCRIPTION,
            this.BUTTON_CONNEX,
            this.BUTTON_PHYSICAL,
            this.BUTTON_HERITAGE,
            this.BUTTON_LOCATION,
            this.BUTTON_HISTORY
        ]);
        return this.WRAPPER_BUTTONS;
    };
    PANEL_DISPLAY() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_TAXONOMY();
        this.ACTIVATE_DESCRIPTION();
        this.ACTIVATE_CONNEX();
        this.ACTIVATE_HERITAGE();
        this.ACTIVATE_LOCATION();
        this.ACTIVATE_HISTORY();
        this.ACTIVATE_PHYSICAL();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DISPLAY.append(...[

        ]);
        return this.WRAPPER_DISPLAY;
    };

    // ===================== //
    // << DATA CATEGORIES >> //
    // ===================== //

    PANEL_TAXONOMY() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TAXONOMY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TAXONOMY.append(...[
            this.HEADER_TAXONOMY,
            this.HEADER_TYPE,
            this.LABEL_TYPE,
            this.HEADER_CATEGORY,
            this.LABEL_CATEGORY
        ]);
        return this.WRAPPER_TAXONOMY;
    };
    PANEL_DESCRIPTION() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DESCRIPTION = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DESCRIPTION.append(...[
            this.HEADER_DESCRIPTION,
            this.TEXT_DESCRIPTION
        ]);
        return this.WRAPPER_DESCRIPTION;
    };
    PANEL_CONNEX() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_CONNEX = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_CONNEX_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_CONNEX.append(...[
            this.HEADER_CONNEX,
            this.WRAPPER_CONNEX_DISPLAY
        ]);
        return this.WRAPPER_CONNEX;
    };
    PANEL_PHYSICAL() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_PHYSICAL = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_PHYSICAL_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_PHYSICAL.append(...[
            this.HEADER_COLOUR,
            this.LABEL_COLOUR,
            this.HEADER_USES,
            this.WRAPPER_PHYSICAL_DISPLAY
        ]);
        return this.WRAPPER_PHYSICAL;
    };
    PANEL_HERITAGE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_HERITAGE = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_HERITAGE_DRAGON_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_HERITAGE_ELDER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_HERITAGE.append(...[
            this.HEADER_SURNAME,
            this.LABEL_SURNAME,
            this.HEADER_DRAGON,
            this.WRAPPER_HERITAGE_DRAGON_DISPLAY,
            this.HEADER_ELDER,
            this.WRAPPER_HERITAGE_ELDER_DISPLAY
        ]);
        return this.WRAPPER_HERITAGE;
    };
    PANEL_LOCATION() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_LOCATION = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_LOCATION_SPACE_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_LOCATION_SECTOR_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_LOCATION_SYSTEM_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_LOCATION_PLANET_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_LOCATION.append(...[
            this.HEADER_SPACE,
            this.WRAPPER_LOCATION_SPACE_DISPLAY,
            this.HEADER_SECTOR,
            this.WRAPPER_LOCATION_SECTOR_DISPLAY,
            this.HEADER_SYSTEM,
            this.WRAPPER_LOCATION_SYSTEM_DISPLAY,
            this.HEADER_PLANET,
            this.WRAPPER_LOCATION_PLANET_DISPLAY
        ]);
        return this.WRAPPER_LOCATION;
    };
    PANEL_HISTORY() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_HISTORY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_HISTORY.append(...[
            this.HEADER_HISTORY,
            this.HEADER_AGE,
            this.LABEL_AGE,
            this.HEADER_SOURCE_SPACE,
            this.LABEL_SOURCE_SPACE,
            this.HEADER_SOURCE_SECTOR,
            this.LABEL_SOURCE_SECTOR,
            this.HEADER_SOURCE_SYSTEM,
            this.LABEL_SOURCE_SYSTEM,
            this.HEADER_SOURCE_PLANET,
            this.LABEL_SOURCE_PLANET,
        ]);
        return this.WRAPPER_HISTORY;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_BACK() {
        this.BUTTON_BACK.addEventListener('click', (event) => {
            this.LOAD('MENU', 'ELEMENTS');
        });
    };
    ACTIVATE_TAXONOMY() {
        this.BUTTON_TAXONOMY.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_TAXONOMY());
        });
    };
    ACTIVATE_DESCRIPTION() {
        this.BUTTON_DESCRIPTION.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_DESCRIPTION());
        });
    };
    ACTIVATE_CONNEX() {
        this.BUTTON_CONNEX.addEventListener('click', (event) => {

            let ARRAY_SISTERS = this.ACTIVE_DATA.CONNEX.SISTER_ELEMENTS;
            for (let INDEX_SISTER = 0; INDEX_SISTER < ARRAY_SISTERS.length; INDEX_SISTER++) {
                const TAG_ELEMENT = ARRAY_SISTERS[INDEX_SISTER];
                let LABEL = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'label',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
                }).INIT().then((RESULT) => {
                    RESULT.innerHTML = TAG_ELEMENT;
                    RESULT.style.display = 'block';
                    this.WRAPPER_CONNEX_DISPLAY.append(RESULT);
                });
            };
            this.WRAPPER_DISPLAY.append(this.PANEL_CONNEX());
        });
    };
    ACTIVATE_PHYSICAL() {
        this.BUTTON_PHYSICAL.addEventListener('click', (event) => {

            let ARRAY_USES = this.ACTIVE_DATA.PHYSICAL.USES;
            for (let INDEX_USE = 0; INDEX_USE < ARRAY_USES.length; INDEX_USE++) {
                const TAG_USE = ARRAY_USES[INDEX_USE];
                let LABEL = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'label',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
                }).INIT().then((RESULT) => {
                    RESULT.innerHTML = TAG_USE;
                    RESULT.style.display = 'block';
                    this.WRAPPER_PHYSICAL_DISPLAY.append(RESULT);
                });
            };
            this.WRAPPER_DISPLAY.append(this.PANEL_PHYSICAL());
        });
    };
    ACTIVATE_HERITAGE() {
        this.BUTTON_HERITAGE.addEventListener('click', (event) => {

            let ARRAY_DRAGONS = this.ACTIVE_DATA.HERITAGE.DRAGONS;
            for (let INDEX_DRAGONS = 0; INDEX_DRAGONS < ARRAY_DRAGONS.length; INDEX_DRAGONS++) {
                const TAG_DRAGON = ARRAY_DRAGONS[INDEX_DRAGONS];
                let LABEL = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'label',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
                }).INIT().then((RESULT) => {
                    RESULT.innerHTML = TAG_DRAGON;
                    RESULT.style.display = 'block';
                    this.WRAPPER_HERITAGE_DRAGON_DISPLAY.append(RESULT);
                });
            };
            let ARRAY_ELDERS = this.ACTIVE_DATA.HERITAGE.ELDERS;
            for (let INDEX_ELDER = 0; INDEX_ELDER < ARRAY_ELDERS.length; INDEX_ELDER++) {
                const TAG_ELDER = ARRAY_ELDERS[INDEX_ELDER];
                let LABEL = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'label',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
                }).INIT().then((RESULT) => {
                    RESULT.innerHTML = TAG_ELDER;
                    RESULT.style.display = 'block';
                    this.WRAPPER_HERITAGE_ELDER_DISPLAY.append(RESULT);
                });
            };
            this.WRAPPER_DISPLAY.append(this.PANEL_HERITAGE());
        });
    };
    ACTIVATE_LOCATION() {
        this.BUTTON_LOCATION.addEventListener('click', (event) => {

            let ARRAY_SPACE = this.ACTIVE_DATA.LOCATIONS.SPACE;
            for (let INDEX_SPACE = 0; INDEX_SPACE < ARRAY_SPACE.length; INDEX_SPACE++) {
                const TAG_SPACE = ARRAY_SPACE[INDEX_SPACE];
                let LABEL = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'label',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
                }).INIT().then((RESULT) => {
                    RESULT.innerHTML = TAG_SPACE;
                    RESULT.style.display = 'block';
                    this.WRAPPER_LOCATION_SPACE_DISPLAY.append(RESULT);
                });
            };
            let ARRAY_SECTOR = this.ACTIVE_DATA.LOCATIONS.SECTOR;
            for (let INDEX_SECTOR = 0; INDEX_SECTOR < ARRAY_SECTOR.length; INDEX_SECTOR++) {
                const TAG_SECTOR = ARRAY_SECTOR[INDEX_SECTOR];
                let LABEL = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'label',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
                }).INIT().then((RESULT) => {
                    RESULT.innerHTML = TAG_SECTOR;
                    RESULT.style.display = 'block';
                    this.WRAPPER_LOCATION_SECTOR_DISPLAY.append(RESULT);
                });
            };
            let ARRAY_SYSTEM = this.ACTIVE_DATA.LOCATIONS.SYSTEM;
            for (let INDEX_SYSTEM = 0; INDEX_SYSTEM < ARRAY_SYSTEM.length; INDEX_SYSTEM++) {
                const TAG_SYSTEM = ARRAY_SYSTEM[INDEX_SYSTEM];
                let LABEL = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'label',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
                }).INIT().then((RESULT) => {
                    RESULT.innerHTML = TAG_SYSTEM;
                    RESULT.style.display = 'block';
                    this.WRAPPER_LOCATION_SYSTEM_DISPLAY.append(RESULT);
                });
            };
            let ARRAY_PLANET = this.ACTIVE_DATA.LOCATIONS.PLANET;
            for (let INDEX_PLANET = 0; INDEX_PLANET < ARRAY_PLANET.length; INDEX_PLANET++) {
                const TAG_PLANET = ARRAY_PLANET[INDEX_PLANET];
                let LABEL = new Create({
                    CREATE_CONFIG_ELEMENT_TAG: 'label',
                    CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
                }).INIT().then((RESULT) => {
                    RESULT.innerHTML = TAG_PLANET;
                    RESULT.style.display = 'block';
                    this.WRAPPER_LOCATION_PLANET_DISPLAY.append(RESULT);
                });
            };
            this.WRAPPER_DISPLAY.append(this.PANEL_LOCATION());
        });
    };
    ACTIVATE_HISTORY() {
        this.BUTTON_HISTORY.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.PANEL_HISTORY());
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){
        await this.REQUEST_SESSION_ELEMENT();
        await this.REQUEST_SESSION_SETTINGS();
        this.ACTIVE_ELEMENT = this.SESSION.SETTINGS.DATA.STATUS.ELEMENT_ELEMENT;
        this.ACTIVE_DATA = this.SESSION.ELEMENTS.DATA.ELEMENT[this.ACTIVE_ELEMENT];
        this.ACTIVE_DESCRIPTION = await this.GENERATE_DESCRIPTION();
        await this.#HEADERS();
        await this.#BUTTON();
        await this.#LABELS();
        await this.#TEXT();
    };
    async GENERATE_DESCRIPTION() {
        this.RENDERER_PATH = `${this.SESSION.PATHS.WAR.ELEMENTS.DESCRIPTION}/${this.ACTIVE_DATA.DESCRIPTION}.txt`;
        return await this.READ();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #HEADERS() {

        this.HEADER_PAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Title',
        }).INIT();
        this.HEADER_BUTTONS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Buttons',
        }).INIT();
        this.HEADER_TAXONOMY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Taxonomy',
        }).INIT();
        this.HEADER_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_CONNEX = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_USES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_DRAGON = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_ELDER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_HISTORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_SOURCE_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_SOURCE_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_SOURCE_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_SOURCE_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();
        this.HEADER_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h3',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Description',
        }).INIT();

        this.HEADER_PAGE.innerHTML =  this.ACTIVE_DATA.TAXONOMY.NAME;
        this.HEADER_BUTTONS.innerHTML = 'CHOOSE DATA TO DISPLAY';
        this.HEADER_TAXONOMY.innerHTML = 'TAXONOMY';
        this.HEADER_DESCRIPTION.innerHTML = 'DESCRIPTION';
        this.HEADER_TYPE.innerHTML = 'TYPE'
        this.HEADER_CATEGORY.innerHTML = 'CATEGORY'
        this.HEADER_CONNEX.innerHTML = 'SISTER ELEMENTS'
        this.HEADER_USES.innerHTML = 'USES';
        this.HEADER_COLOUR.innerHTML = 'COLOUR';
        this.HEADER_DRAGON.innerHTML = 'DRAGONS';
        this.HEADER_ELDER.innerHTML = 'ELDERS';
        this.HEADER_SURNAME.innerHTML = 'SURNAME';
        this.HEADER_SPACE.innerHTML = 'SPACE';
        this.HEADER_SECTOR.innerHTML = 'SECTOR';
        this.HEADER_SYSTEM.innerHTML = 'SYSTEM';
        this.HEADER_PLANET.innerHTML = 'PLANET';
        this.HEADER_HISTORY.innerHTML = 'HISTORY';
        this.HEADER_SOURCE_SPACE.innerHTML = 'SOURCE SPACE';
        this.HEADER_SOURCE_SECTOR.innerHTML = 'SOURCE SECTOR';
        this.HEADER_SOURCE_SYSTEM.innerHTML = 'SOURCE SYSTEM';
        this.HEADER_SOURCE_PLANET.innerHTML = 'SOURCE PLANET';
        this.HEADER_AGE.innerHTML = 'AGE'
    };
    async #LABELS() {
        this.LABEL_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.LABEL_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.LABEL_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.LABEL_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.LABEL_SOURCE_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.LABEL_SOURCE_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.LABEL_SOURCE_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.LABEL_SOURCE_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.LABEL_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();

        this.LABEL_TYPE.innerHTML = this.ACTIVE_DATA.TAXONOMY.TYPE;
        this.LABEL_CATEGORY.innerHTML = this.ACTIVE_DATA.TAXONOMY.CATEGORY;
        this.LABEL_COLOUR.innerHTML = this.ACTIVE_DATA.PHYSICAL.COLOUR;
        this.LABEL_SURNAME.innerHTML = this.ACTIVE_DATA.HERITAGE.SURNAME;
        this.LABEL_SOURCE_SPACE.innerHTML = this.ACTIVE_DATA.HISTORY.SOURCE.SPACE;
        this.LABEL_SOURCE_SECTOR.innerHTML = this.ACTIVE_DATA.HISTORY.SOURCE.SECTOR;
        this.LABEL_SOURCE_SYSTEM.innerHTML = this.ACTIVE_DATA.HISTORY.SOURCE.SYSTEM;
        this.LABEL_SOURCE_PLANET.innerHTML = this.ACTIVE_DATA.HISTORY.SOURCE.PLANET;
        this.LABEL_AGE.innerHTML = this.ACTIVE_DATA.HISTORY.AGE;

    };
    async #TEXT(){
        this.TEXT_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'p',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Search-Description',
        }).INIT();
        this.TEXT_DESCRIPTION.innerHTML = this.ACTIVE_DESCRIPTION
    }
    async #BUTTON() {
        this.BUTTON_BACK = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Back'
        }).INIT();
        this.BUTTON_TAXONOMY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Taxonomy'
        }).INIT();
        this.BUTTON_DESCRIPTION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Description'
        }).INIT();
        this.BUTTON_CONNEX = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Connex'
        }).INIT();
        this.BUTTON_PHYSICAL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Connex'
        }).INIT();
        this.BUTTON_HERITAGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Connex'
        }).INIT();
        this.BUTTON_LOCATION = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Connex'
        }).INIT();
        this.BUTTON_HISTORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_View-Connex'
        }).INIT();

        this.BUTTON_BACK.innerHTML = '<<';
        this.BUTTON_TAXONOMY.innerHTML = 'TAXONOMY';
        this.BUTTON_DESCRIPTION.innerHTML = 'DESCRIPTION';
        this.BUTTON_CONNEX.innerHTML = 'CONNECTIONS';
        this.BUTTON_PHYSICAL.innerHTML = 'PHYSICAL';
        this.BUTTON_HERITAGE.innerHTML = 'HERITAGE';
        this.BUTTON_LOCATION.innerHTML = 'LOCATION';
        this.BUTTON_HISTORY.innerHTML = 'HISTORY';
    };
};

// ================ //
// ## RUN SCRIPT ## //
// ================ //

const PAGE_View = new DRAW_View_Element();
await PAGE_View.INITIALISE();
await PAGE_View.DRAW();