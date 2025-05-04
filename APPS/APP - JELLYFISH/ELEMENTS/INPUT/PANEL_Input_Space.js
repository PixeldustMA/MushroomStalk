import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Branches from "../../../../CONSOLE/LUNGS/Branches.js";
import EXPLORER_Manager from "../../../APP - EXPLORER/Explorer_Manager.js";
import Create from "../../CREATE/Create.js";

export default class PANEL_Input_Space extends Branches {

    constructor() {
        super();

        // =========== //
        // ## INPUT ## //
        // =========== //

        this.INPUT_SPACE = 'UNSET';

        // ========== //
        // ## TEXT ## //
        // ========== //

        this.HEADER_PANEL = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_SAVE = 'UNSET';
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
            this.INPUT_SPACE,
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

        await this.REQUEST_SESSION_EXPLORER();
        await this.#TEXT();
        await this.#BUTTONS();
        await this.#INPUT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #TEXT () {
        this.HEADER_PANEL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Space-Panel'
        }).INIT();
        this.LABEL_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Space-Space'
        }).INIT();
        this.HEADER_PANEL.innerHTML = 'NAME NEW SPACE AREA';
        this.LABEL_SPACE.innerHTML = 'GIVE IT A NAME';
    };
    async #INPUT(){
        this.INPUT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'input',
            CREATE_CONFIG_PERSONALITY_ID: 'INPUT_Space-Area'
        }).INIT();
    };
    async #BUTTONS(){
        this.BUTTON_SAVE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Space-Save'
        }).INIT();
        this.BUTTON_SAVE.innerHTML = 'SAVE';
    };
}