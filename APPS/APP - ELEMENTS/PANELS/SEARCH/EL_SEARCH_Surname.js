import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";

export default class EL_SEARCH_Surname extends Stalk{

    constructor() {

        // ================= //
        // ## CONNECTIONS ## //
        // ================= //

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_SURNAME = 'UNSET';

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_SELECT_SURNAME = 'UNSET';

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_ELEMENT_SURNAME = 'UNSET';

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_SURNAME = [];

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CREATE = new Create({});
         this.DATA_SURNAMES = {};
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SURNAME = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SURNAME.append(...[
            this.LABEL_SELECT_SURNAME,
            this.SELECT_ELEMENT_SURNAME
        ]);
        return this.WRAPPER_SURNAME;
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
                let SURNAME = DATA.HERITAGE.SURNAME;
                if (this.DATA_SURNAMES.hasOwnProperty(SURNAME)) {
                    this.DATA_SURNAMES[SURNAME].push(TAG_ELEMENT)
                }
                else {
                    this.DATA_SURNAMES[SURNAME] = [TAG_ELEMENT]
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
        this.OPTIONS_SURNAME = Object.keys(this.DATA_SURNAMES);
        this.OPTIONS_SURNAME.unshift('CHOOSE A SURNAME')
    };
    async #LABELS() {
        this.LABEL_SELECT_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Taxonomy-Type'
        }).INIT();

        this.LABEL_SELECT_SURNAME.innerHTML = '';
    };
    async #SELECT() {
        this.SELECT_ELEMENT_SURNAME = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Taxonomy-Type',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_SURNAME
        }).INIT();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    GET_SURNAME(){return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_ELEMENT_SURNAME);};
};