import Connector_Jellyfish from "../../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../CREATE/Create.js";
import EL_SEARCH_Element from "./SEARCH_Element.js";
import EL_VIEW_History from "./VIEW_History.js";
import EL_VIEW_Physical from "./VIEW_Physical.js";
import EL_VIEW_Taxonomy from "./VIEW_Taxonomy.js";

export default class EL_VIEW_Element extends Stalk{

    constructor() {

        super();

        // ========== //
        // << TEXT >> //
        // ========== //

        this.HEADER_PANEL = 'UNSET';

        // ============= //
        // << PANELS  >> //
        // ============= //

        this.PANEL_HISTORY = 'UNSET';
        // this.PANEL_LOCATION = 'UNSET';
        this.PANEL_PHYSICAL = 'UNSET';
        this.PANEL_TAXONOMY = 'UNSET';
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


        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        WRAPPER_Page.append(...[
            this.HEADER_PANEL,
            this.PANEL_TAXONOMY.DRAW(),
            this.PANEL_HISTORY.DRAW(),
            this.PANEL_PHYSICAL.DRAW()
        ]);
        return WRAPPER_Page;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //



    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#TEXT();
        await this.#PANEL();
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
        this.HEADER_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();
        this.HEADER_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Element-Panel'
        }).INIT();

        this.HEADER_PANEL.innerHTML = 'ELEMENT NAME';
        this.HEADER_CATEGORY.innerHTML = '::CATEGORY::';
        this.HEADER_TYPE.innerHTML = '::TYPE::';

        // ============ //
        // << LABELS >> //
        // ============ //

        this.LABEL_CATEGORY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-Category'
        }).INIT();
        this.LABEL_TYPE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Element-Type'
        }).INIT();

        this.LABEL_CATEGORY.innerHTML = ' ';
        this.LABEL_TYPE.innerHTML = ' ';

    };
    async #PANEL() {

        this.PANEL_HISTORY = new EL_VIEW_History();
        await this.PANEL_HISTORY.INITIALISE();

        this.PANEL_PHYSICAL = new EL_VIEW_Physical();
        await this.PANEL_PHYSICAL.INITIALISE();

        this.PANEL_TAXONOMY = new EL_VIEW_Taxonomy();
        await this.PANEL_TAXONOMY.INITIALISE();
    }
}