import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";

export default class EX_SEARCH_Sector extends Stalk{

    constructor(){
        super();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PANEL = 'UNSET';
        this.LABEL_SELECT_SPACE = 'UNSET';
        this.LABEL_SELECT_SECTOR = 'UNSET';

        // ============ //
        // << SELECT >> //
        // ============ //

        this.SELECT_SPACE = 'UNSET';
        this.SELECT_SECTOR = 'UNSET';

        // ============= //
        // << OPTIONS >> //
        // ============= //

        this.OPTIONS_SPACE = [];
        this.OPTIONS_SECTOR = [];
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW(){

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        const WRAPPER_Page = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_SECTOR_CHOICES();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PANEL,

            this.LABEL_SELECT_SPACE,
            this.SELECT_SPACE,

            this.LABEL_SELECT_SECTOR,
            this.SELECT_SECTOR
        ]);
        return WRAPPER_Page;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    ACTIVATE_SECTOR_CHOICES() {

        this.SELECT_SPACE.addEventListener('change', (event) => {
            let HOLD = new Create({});
            let TAG_Space = HOLD.READ_OPTION_TEXT(this.SELECT_SPACE);
            this.OPTIONS_SECTOR = this.SESSION.EXPLORER.DATA.SPACE[TAG_Space].LOCATIONS.SECTORS;
            this.OPTIONS_SECTOR.unshift('CHOOSE A SECTOR');
            HOLD.UPDATE_OPTIONS(this.SELECT_SECTOR, this.OPTIONS_SECTOR);
        })
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
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Sector-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'SECTOR';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Sector-Select'
        }).INIT();
        this.LABEL_SELECT_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Sector-Select'
        }).INIT();

        this.LABEL_SELECT_SPACE.innerHTML = 'Select a space area';
        this.LABEL_SELECT_SECTOR.innerHTML = 'Select a sector';

    };
    async #SELECT() {
        this.SELECT_SPACE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'space',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Sector-Space',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SPACE
        }).INIT();
        this.SELECT_SECTOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'space',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Sector',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SECTOR
        }).INIT();
    };
    async #OPTIONS() {
        this.OPTIONS_SPACE = this.SESSION.EXPLORER.LISTS.SPACE;
        this.OPTIONS_SPACE.unshift('CHOOSE A SPACE AREA');
        this.OPTIONS_SECTOR = ['X-X-X-X-X-X-X-X-X-X-X']
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_SPACE(){
        const HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_SPACE);
    };
    GET_SECTOR(){
        const HOLD = new Create({});
        return HOLD.READ_OPTION_TEXT(this.SELECT_SECTOR);
    };
}