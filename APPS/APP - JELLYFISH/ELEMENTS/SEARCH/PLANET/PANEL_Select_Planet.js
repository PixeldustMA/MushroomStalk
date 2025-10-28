import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";


export default class PANEL_Select_Planet extends Stalk{

    constructor(){
        super()
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SECTORS();
        this.ACTIVATE_SYSTEMS();
        this.ACTIVATE_PLANETS();

        
        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_Page.append(...[
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
        return this.WRAPPER_Page;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_SECTORS(){
        this.SELECT_SPACE.addEventListener('change', (event) => {
            const HOLD = new Create({});
            const TAG_SPACE = HOLD.READ_OPTION_TEXT(this.SELECT_SPACE);
            this.OPTIONS_SECTOR =  this.SESSION.EXPLORER.DATA.SPACE[TAG_SPACE].LOCATIONS.SECTORS;
            this.OPTIONS_SECTOR.unshift('SELECT A SECTOR');
            HOLD.UPDATE_OPTIONS(this.SELECT_SECTOR, this.OPTIONS_SECTOR);
        });
    };
    ACTIVATE_SYSTEMS(){
        this.SELECT_SECTOR.addEventListener('change', (event) => {
            const HOLD = new Create({});
            const TAG_SECTOR = HOLD.READ_OPTION_TEXT(this.SELECT_SECTOR);
            this.OPTIONS_SYSTEM = this.SESSION.EXPLORER.DATA.SECTOR[TAG_SECTOR].LOCATIONS.SYSTEMS;
            this.OPTIONS_SYSTEM.unshift('SELECT A SYSTEM');
            HOLD.UPDATE_OPTIONS(this.SELECT_SYSTEM, this.OPTIONS_SYSTEM);
        });
    };
    ACTIVATE_PLANETS(){
        this.SELECT_SYSTEM.addEventListener('change', (event) => {
            const HOLD = new Create({});
            const TAG_SYSTEM = HOLD.READ_OPTION_TEXT(this.SELECT_SYSTEM);
            this.OPTIONS_PLANET = this.SESSION.EXPLORER.DATA.SYSTEM[TAG_SYSTEM].LOCATIONS.PLANETS;
            this.OPTIONS_PLANET.unshift('SELECT A PLANET');
            HOLD.UPDATE_OPTIONS(this.SELECT_PLANET, this.OPTIONS_PLANET);
        });
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE(){

        await this.REQUEST_SESSION_EXPLORER();
        await this.#TEXT();
        await this.#OPTIONS();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT(){
        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Planet-Panel'
        }).INIT();
        this.LABEL_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Space'
        }).INIT();
        this.LABEL_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Sector'
        }).INIT();
        this.LABEL_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_System'
        }).INIT();
        this.LABEL_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Planet'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'SELECT A PLANET';
        this.LABEL_SPACE.innerHTML = 'SELECT SPACE AREA';
        this.LABEL_SECTOR.innerHTML = 'SELECT A SECTOR';
        this.LABEL_SYSTEM.innerHTML = 'SELECT A SYSTEM';
        this.LABEL_PLANET.innerHTML = 'SELECT A PLANET';
    };
    async #SELECT(){
        this.SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Space',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SPACE
        }).INIT();
        this.SELECT_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Sector',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SECTOR
        }).INIT();
        this.SELECT_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_System',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SYSTEM
        }).INIT();
        this.SELECT_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Planet',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_PLANET
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_SPACE = this.SESSION.EXPLORER.LISTS.SPACE;
        this.OPTIONS_SPACE.unshift('SELECT A SPACE AREA');
        this.OPTIONS_SECTOR = ['SELECT SECTOR'];
        this.OPTIONS_SYSTEM = ['SELECT SYSTEM'];
        this.OPTIONS_PLANET = ['SELECT PLANET'];
    };
};