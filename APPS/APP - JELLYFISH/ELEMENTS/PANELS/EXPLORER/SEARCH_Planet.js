import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";

export default class EX_SEARCH_Planet extends Stalk{

    constructor() {

        super();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.LABEL_SPACE = 'UNSET';
        this.LABEL_SECTOR = 'UNSET';
        this.LABEL_SYSTEM = 'UNSET';
        this.LABEL_PLANET = 'UNSET';

        // ============= //
        // << OPTIONS >> //
        // ============= //

        this.OPTIONS_SPACE = [];
        this.OPTIONS_SECTOR = [];
        this.OPTIONS_SYSTEM = [];
        this.OPTIONS_PLANET = [];

        // ============ //
        // << SELECT >> //
        // ============ //

        this.SELECT_SPACE = 'UNSET';
        this.SELECT_SECTOR = 'UNSET';
        this.SELECT_SYSTEM = 'UNSET';
        this.SELECT_PLANET = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_OPTIONS_SECTOR();
        this.ACTIVATE_OPTIONS_SYSTEM();
        this.ACTIVATE_OPTIONS_PLANET();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PANEL,
            this.LABEL_SPACE,
            this.SELECT_SPACE,
            this.LABEL_SECTOR,
            this.SELECT_SECTOR,
            this.LABEL_SYSTEM,
            this.SELECT_SYSTEM,
            this.LABEL_PLANET,
            this.SELECT_PLANET
        ]);
        return WRAPPER_Page;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    ACTIVATE_OPTIONS_SECTOR() {
        this.SELECT_SPACE.addEventListener('change', (event) => {
            
            let HOLD = new Create({});
            let TAG_Space = HOLD.READ_OPTION_TEXT(this.SELECT_SPACE);
            this.OPTIONS_SECTOR = this.SESSION.EXPLORER.DATA.SPACE[TAG_Space].LOCATIONS.SECTORS;
            this.OPTIONS_SECTOR.unshift('CHOOSE A SECTOR');
            HOLD.UPDATE_OPTIONS(this.SELECT_SECTOR, this.OPTIONS_SECTOR);
        });
    };
    ACTIVATE_OPTIONS_SYSTEM() {
        this.SELECT_SECTOR.addEventListener('change', (event) => {
            
            let HOLD = new Create({});
            let TAG_Sector = HOLD.READ_OPTION_TEXT(this.SELECT_SECTOR);
            this.OPTIONS_SYSTEM = this.SESSION.EXPLORER.DATA.SECTOR[TAG_Sector].LOCATIONS.SYSTEMS;
            this.OPTIONS_SYSTEM.unshift('CHOOSE A SYSTEM');
            HOLD.UPDATE_OPTIONS(this.SELECT_SYSTEM, this.OPTIONS_SYSTEM);
        });
    };
    ACTIVATE_OPTIONS_PLANET() {
        this.SELECT_SYSTEM.addEventListener('change', (event) => {
            
            let HOLD = new Create({});
            let TAG_System = HOLD.READ_OPTION_TEXT(this.SELECT_SYSTEM);
            this.OPTIONS_PLANET = this.SESSION.EXPLORER.DATA.SYSTEM[TAG_System].LOCATIONS.PLANETS;
            this.OPTIONS_PLANET.unshift('CHOOSE A PLANET');
            HOLD.UPDATE_OPTIONS(this.SELECT_PLANET, this.OPTIONS_PLANET);
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_EXPLORER();

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#OPTIONS();
        await this.#TEXT();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT() {

        // ============ //
        // << HEADER >> //
        // ============ //

        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();
        this.HEADER_PANEL.innerHTML = 'SELECT A PLANET!';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-Space'
        }).INIT();
        this.LABEL_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-Sector'
        }).INIT();
        this.LABEL_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-System'
        }).INIT();
        this.LABEL_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-Planet'
        }).INIT();

        this.LABEL_SPACE.innerHTML = 'Select a space area';
        this.LABEL_SECTOR.innerHTML = 'Select a sector';
        this.LABEL_SYSTEM.innerHTML = 'Select a system';
        this.LABEL_PLANET.innerHTML = 'Select a planet';
    };
    async #SELECT() {
        this.SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_New-Space',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SPACE
        }).INIT();
        this.SELECT_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_New-Sector',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SECTOR
        }).INIT();
        this.SELECT_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_New-System',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SYSTEM
        }).INIT();
        this.SELECT_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_New-Planet',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_PLANET
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_SPACE = this.SESSION.EXPLORER.LISTS.SPACE;
        this.OPTIONS_SPACE.unshift('SELECT A SPACE AREA');
        this.OPTIONS_SECTOR = ['-X-X-X-X-X-X-X-X-'];
        this.OPTIONS_SYSTEM = ['-X-X-X-X-X-X-X-X-'];
        this.OPTIONS_PLANET = ['-X-X-X-X-X-X-X-X-'];
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_SPACE(){
        const HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_SPACE);
    };
    GET_SECTOR() {
        const HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_SECTOR);
    };
    GET_SYSTEM(){
        const HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_SYSTEM);
    };
    GET_PLANET(){
        const HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_PLANET);
    };
}