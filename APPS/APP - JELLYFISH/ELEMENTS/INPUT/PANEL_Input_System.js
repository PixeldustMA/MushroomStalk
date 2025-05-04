import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Branches from "../../../../CONSOLE/LUNGS/Branches.js";
import EXPLORER_Manager from "../../../APP - EXPLORER/Explorer_Manager.js";
import Create from "../../CREATE/Create.js";

export default class PANEL_Input_System extends Branches {

    constructor() {
        super();

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_SYSTEM = 'UNSET';

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.LABEL_SPACE = 'UNSET';
        this.LABEL_SECTOR = 'UNSET';
        this.LABEL_SYSTEM = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_SAVE = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_SPACE = 'UNSET';
        this.SELECT_SECTOR = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_SPACE = [];
        this.OPTIONS_SECTOR = [];
    }

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SAVE();
        this.ACTIVATE_SECTORS();

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
            this.INPUT_SYSTEM,
            this.BUTTON_SAVE
        ]);
        return WRAPPER_Page;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    ACTIVATE_SAVE(){
        this.BUTTON_SAVE.addEventListener('click', (event) => {
            let HOLD = new Create({});
            let TAG_Space = HOLD.READ_OPTION_TEXT(this.SELECT_SPACE);
            let TAG_Sector = HOLD.READ_OPTION_TEXT(this.SELECT_SECTOR);
            let TAG_System = this.INPUT_SYSTEM.value;
            const INSTANCE_EXPLORE = new EXPLORER_Manager({
                EXPLORER_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.EXPLORER.CONSOLE,
                EXPLORER_CONFIG_PATH_SPACE: this.SESSION.PATHS.WAR.EXPLORER.SPACE,
                EXPLORER_CONFIG_PATH_SECTOR: this.SESSION.PATHS.WAR.EXPLORER.SECTOR,
                EXPLORER_CONFIG_PATH_SYSTEM: this.SESSION.PATHS.WAR.EXPLORER.SYSTEM,
                EXPLORER_CONFIG_NAME_SPACE: TAG_Space,
                EXPLORER_CONFIG_NAME_SECTOR: TAG_Sector,
                EXPLORER_CONFIG_NAME_SYSTEM: TAG_System,
                EXPLORER_CONFIG_SPACE_DATA: this.SESSION.EXPLORER.DATA.SPACE[TAG_Space],
                EXPLORER_CONFIG_SECTOR_DATA: this.SESSION.EXPLORER.DATA.SECTOR[TAG_Sector],
                EXPLORER_CONFIG_SYSTEM_DATA: this.SESSION.EXPLORER.DATA.SYSTEM[TAG_System],
                EXPLORER_CONFIG_SPACE_LIST: this.OPTIONS_SPACE,
                EXPLORER_CONFIG_SECTOR_LIST: this.SESSION.EXPLORER.LISTS.SECTOR,
                EXPLORER_CONFIG_SYSTEM_LIST: this.SESSION.EXPLORER.LISTS.SYSTEM,
            });
            INSTANCE_EXPLORE.INSERT_SYSTEM().then((RESULT) => {return RESULT});
        });
    };
    ACTIVATE_SECTORS() {
        this.SELECT_SPACE.addEventListener('change', (event) => {
            
            let HOLD = new Create({});
            let TAG_Space = HOLD.READ_OPTION_TEXT(this.SELECT_SPACE);
            this.OPTIONS_SECTOR = this.SESSION.EXPLORER.DATA.SPACE[TAG_Space].LOCATIONS.SECTORS;
            HOLD.UPDATE_OPTIONS(this.SELECT_SECTOR, this.OPTIONS_SECTOR);
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        await this.REQUEST_SESSION_EXPLORER();
        await this.#OPTIONS();
        await this.#TEXT();
        await this.#BUTTONS();
        await this.#INPUT();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT () {
        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Sector-Panel'
        }).INIT();
        this.LABEL_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_System-Space'
        }).INIT();
        this.LABEL_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_System-Sector'
        }).INIT();
        this.LABEL_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_System'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'NAME NEW SYSTEM';
        this.LABEL_SECTOR.innerHTML = 'SELECT AN EXISTING SECTOR';
        this.LABEL_SYSTEM.innerHTML = 'GIVE IT A NAME';
        this.LABEL_SPACE.innerHTML = 'SELECT AN EXISTING SPACE AREA';

    };
    async #INPUT(){
        this.INPUT_SYSTEM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_System-Area'
        }).INIT();
    };
    async #BUTTONS(){
        this.BUTTON_SAVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_System-Save'
        }).INIT();
        this.BUTTON_SAVE.innerHTML = 'SAVE';
    };
    async #SELECT() {
        this.SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_System-Space',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SPACE
        }).INIT();
        this.SELECT_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_System-System'
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_SPACE = this.SESSION.EXPLORER.LISTS.SPACE;
        this.OPTIONS_SECTOR = [];
    };
};