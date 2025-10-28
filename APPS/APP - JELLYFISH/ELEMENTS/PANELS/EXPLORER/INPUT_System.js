import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Branches from "../../../../CONSOLE/LUNGS/Branches.js";
import EXPLORER_Manager from "../../../APP - EXPLORER/Explorer_Manager.js";
import Create from "../../CREATE/Create.js";

export default class EX_INPUT_System extends Branches {

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
        this.SELECT_SYSTEM = 'UNSET';

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

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PANEL,
            this.LABEL_SPACE,
            this.SELECT_SPACE,
            this.LABEL_SECTOR,
            this.SELECT_SELECT,
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
            let TAG_Space = this.INPUT_SPACE.value;
            const INSTANCE_EXPLORE = new EXPLORER_Manager({
                EXPLORER_CONFIG_PATH_CONSOLE: this.SESSION.PATHS.WAR.EXPLORER.CONSOLE,
                EXPLORER_CONFIG_PATH_SPACE: this.SESSION.PATHS.WAR.EXPLORER.SPACE,
                EXPLORER_CONFIG_NAME_SPACE: TAG_Space,
                EXPLORER_CONFIG_SPACE_DATA: this.SESSION.EXPLORER.DATA.SPACE[TAG_Space],
                EXPLORER_CONFIG_SPACE_LIST: this.SESSION.EXPLORER.LISTS.SPACE
            });
            INSTANCE_EXPLORE.INSERT_SPACE().then((RESULT) => {
                window.location.reload();
                return RESULT});
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

        // ============== //
        // << ELEMENTS >> //
        // ============== //

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

        // ============= //
        // << HEADERS >> //
        // ============= //

        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_System-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'NAME NEW SYSTEM';

        // ============ //
        // << LABELS >> //
        // ============ //

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

        this.LABEL_SPACE.innerHTML = 'Select Space area';
        this.LABEL_SECTOR.innerHTML = 'Select Sector';
        this.LABEL_SYSTEM.innerHTML = 'GIVE IT A NAME';
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
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Sector-Save'
        }).INIT();

        this.BUTTON_SAVE.innerHTML = 'SAVE';
    };
    async #SELECT(){
        this.SELECT_SELECT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_System-Sector',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SPACE
        }).INIT();
        this.SELECT_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_System-Sector',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SECTOR
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_SPACE = this.SESSION.EXPLORER.LISTS.SPACE;
        this.OPTIONS_SPACE.unshift('CHOOSE A SPACE AREA');
        this.OPTIONS_SECTOR = ['X-X-X-X-X-X-X-X-X'];
    }; 
}