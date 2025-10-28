import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish";
import { Renderer } from "../../../../../CONSOLE/LUNGS/Renderer.js";
import Create from "../../../CREATE/Create.js";

export default class PANEL_Search_Planets extends Renderer{

    constructor({
        PLANETS_CONFIG_SESSION = 0
    }){
        super();

        // ========== //
        // ## DATA ## //
        // ========== //

        this.SESSION = PLANETS_CONFIG_SESSION;

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PANEL = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_BIRTH_GEOLOGICAL = 'UNSET';
        this.SELECT_BIRTH_SPACE = 'UNSET';
        this.SELECT_BIRTH_SECTOR = 'UNSET';
        this.SELECT_BIRTH_SYSTEM = 'UNSET';
        this.SELECT_BIRTH_PLANET = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_SPACE = 'UNSET';
        this.OPTIONS_SECTOR = 'UNSET';
        this.OPTIONS_SYSTEM = 'UNSET';
        this.OPTIONS_PLANET = 'UNSET';

        // ============ //
        // ## BUTTON ## //
        // ============ //

        this.BUTTON_MODE = 'UNSET';
    };

    // ================ //
    // ## DRAW PANEL ## //
    // ================ //

    async DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        this.ACTIVATE_SECTORS();
        this.ACTIVATE_SYSTEMS();
        this.ACTIVATE_PLANETS();

        this.WRAPPER_Page.append(...[
            await this.DRAW_SPACE_SEARCH(),
            await this.DRAW_SECTOR_SEARCH(),
            await this.DRAW_SYSTEM_SEARCH(),
            await this.DRAW_PLANET_SEARCH()
        ]);
        return this.WRAPPER_Page();
    };
    async DRAW_SPACE_SEARCH() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_Page.append(...[
            this.HEADER_PANEL,

            this.LABEL_SPACE,
            this.SELECT_SPACE,

        ]);
        return this.WRAPPER_Page;
    };
    async DRAW_SECTOR_SEARCH() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SECTORS();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_Page.append(...[
            this.HEADER_PANEL,

            this.LABEL_SPACE,
            this.SELECT_SPACE,
            this.LABEL_SECTOR,
            this.SELECT_SECTOR,
        ]);
        return this.WRAPPER_Page;
    };
    async DRAW_SYSTEM_SEARCH() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SECTORS();
        this.ACTIVATE_SYSTEMS();

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
        ]);
        return this.WRAPPER_Page;
    };
    async DRAW_PLANET_SEARCH() {
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

    ACTIVATE_SECTORS() {
        this.SELECT_SPACE.addEventListener('change', (event) => {
            this.OPTIONS_SECTOR = this.SESSION.SPACE[this.SELECT_SPACE.options[this.SELECT_SPACE.selectedIndex].text].SECTORS;
            let hold = new Create();
            hold.UPDATE_OPTIONS(this.SELECT_SECTOR, this.OPTIONS_SECTOR);
        });
    };
    ACTIVATE_SYSTEMS() {
        this.SELECT_SECTOR.addEventListener('change', (event) => {
            this.OPTIONS_SYSTEM = this.SESSION.SECTORS[this.SELECT_SECTOR.options[this.SELECT_SECTOR.selectedIndex].text].SYSTEMS;
            let hold = new Create();
            hold.UPDATE_OPTIONS(this.SELECT_SYSTEM, this.OPTIONS_SYSTEM);
        });
    };
    ACTIVATE_PLANETS() {
        this.SELECT_SYSTEM.addEventListener('change', (event) => {
            this.OPTIONS_PLANET = this.SESSION.SPACE[this.SELECT_SYSTEM.options[this.SELECT_SYSTEM.selectedIndex].text].PLANETS;
            let hold = new Create();
            hold.UPDATE_OPTIONS(this.SELECT_PLANET, this.OPTIONS_PLANET);
        });
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    async INITIALISE(){

        await this.#OPTIONS();
        await this.#SELECT();
        await this.#TEXT();
        await this.#BUTTON();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #SELECT(){
        this.SELECT_GEOLOGICAL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Desk-Geological'
        }).INIT();
        this.SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Desk-Space'
        }).INIT();
        this.SELECT_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Desk-Sector'
        }).INIT();
        this.SELECT_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Desk-System'
        }).INIT();
        this.SELECT_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Desk-Planet'
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_SPACE = this.SESSION.SPACE_LIST;
    };
    async #TEXT() {
        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h1',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Planet-Panel',
        }).INIT();

        this.LABEL_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Desk-Space'
        }).INIT();
        this.LABEL_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Desk-Sector'
        }).INIT();
        this.LABEL_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Desk-System'
        }).INIT();
        this.LABEL_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Desk-Planet'
        }).INIT();

        this.LABEL_GEOLOGICAL_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Desk-Geological-Space'
        }).INIT();
        this.LABEL_GEOLOGICAL_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Desk-Geological-Sector'
        }).INIT();
        this.LABEL_GEOLOGICAL_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Desk-Geological-System'
        }).INIT();
        this.LABEL_GEOLOGICAL_PLANET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Desk-Geological-Planet'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'SELECT PLANET';

        this.LABEL_GEOLOGICAL_SPACE.innerHTML = 'CHOOSE GEOLOGICAL SPACE AREA';
        this.LABEL_GEOLOGICAL_SECTOR.innerHTML = 'CHOOSE GEOLOGICAL SECTOR AREA';
        this.LABEL_GEOLOGICAL_SYSTEM.innerHTML = 'CHOOSE GEOLOGICAL SYSTEM AREA';
        this.LABEL_GEOLOGICAL_PLANET.innerHTML = 'CHOOSE GEOLOGICAL PLANET AREA';

        this.LABEL_PLANET.innerHTML = 'CHOOSE A PLANET';
        this.LABEL_SECTOR.innerHTML = 'CHOOSE A SECTOR';
        this.LABEL_SYSTEM.innerHTML = 'CHOOSE A SYSTEM';
        this.LABEL_SPACE.innerHTML = 'CHOOSE A SPACE AREA';
    };
    async #BUTTON() {
        this.BUTTON_MODE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Planet-Mode',
        }).INIT();
        this.BUTTON_MODE.innerHTML = 'GEOLOGICAL MODE';
    };
}