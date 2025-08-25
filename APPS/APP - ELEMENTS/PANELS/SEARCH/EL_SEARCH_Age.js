import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_SEARCH_Age extends Stalk{

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_AGE = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_SELECT_AGE = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_ELEMENT_AGE = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_AGE = [];

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
         this.DATA_AGES = {};
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_AGE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_AGE.append(...[
            this.LABEL_SELECT_AGE,
            this.SELECT_ELEMENT_AGE
        ]);
        return this.WRAPPER_AGE;
    };

    // ============= //
    // ## ACTIONS ## //
    // ============= //

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE(){

        // ============= //
        // << SESSION >> //
        // ============= //
        await this.REQUEST_SESSION_ELEMENT();

        console.log(this.SESSION)
        let ELEMENTS = this.SESSION.ELEMENTS.LIST.ELEMENT;
        for (let INDEX_ELEMENT = 0; INDEX_ELEMENT < ELEMENTS.length; INDEX_ELEMENT++) {
            const TAG_ELEMENT = ELEMENTS[INDEX_ELEMENT];
            let DATA = this.SESSION.ELEMENTS.DATA.ELEMENT[TAG_ELEMENT];
            if (DATA.hasOwnProperty('HERITAGE')) {
                let AGE = DATA.HISTORY.AGE;
                if (this.DATA_AGES.hasOwnProperty(AGE)) {
                    this.DATA_AGES[AGE].push(TAG_ELEMENT)
                }
                else {
                    this.DATA_AGES[AGE] = [TAG_ELEMENT]
                }
            }

        };

        // =========== //
        // << BUILD >> //
        // =========== //

        await this.#OPTIONS();
        await this.#LABELS();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #OPTIONS() {
        this.OPTIONS_AGE = Object.keys(this.DATA_AGES);
        this.OPTIONS_AGE.unshift('CHOOSE A AGE')
    };
    async #LABELS() {
        this.LABEL_SELECT_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Taxonomy-Type'
        }).INIT();

        this.LABEL_SELECT_AGE.innerHTML = '';
    };
    async #SELECT() {
        this.SELECT_ELEMENT_AGE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Taxonomy-Type',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_AGE
        }).INIT();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_AGE(){return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ELEMENT_AGE);};
};