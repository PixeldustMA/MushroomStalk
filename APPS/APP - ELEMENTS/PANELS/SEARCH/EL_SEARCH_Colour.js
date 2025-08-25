import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_SEARCH_Colour extends Stalk{

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_COLOUR = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_SELECT_COLOUR = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_ELEMENT_COLOUR = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_COLOUR = [];

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
         this.DATA_COLOURS = {};
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_COLOUR = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_COLOUR.append(...[
            this.LABEL_SELECT_COLOUR,
            this.SELECT_ELEMENT_COLOUR
        ]);
        return this.WRAPPER_COLOUR;
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
            if (DATA.hasOwnProperty('PHYSICAL')) {
                let COLOUR = DATA.PHYSICAL.COLOUR;
                if (this.DATA_COLOURS.hasOwnProperty(COLOUR)) {
                    this.DATA_COLOURS[COLOUR].push(TAG_ELEMENT)
                }
                else {
                    this.DATA_COLOURS[COLOUR] = [TAG_ELEMENT]
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
        this.OPTIONS_COLOUR = Object.keys(this.DATA_COLOURS);
        this.OPTIONS_COLOUR.unshift('CHOOSE A COLOUR')
    };
    async #LABELS() {
        this.LABEL_SELECT_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Taxonomy-Type'
        }).INIT();

        this.LABEL_SELECT_COLOUR.innerHTML = '';
    };
    async #SELECT() {
        this.SELECT_ELEMENT_COLOUR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Taxonomy-Type',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_COLOUR
        }).INIT();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_COLOUR(){return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ELEMENT_COLOUR);};
};