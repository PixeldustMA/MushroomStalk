import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import EL_FORM_Sister from "./CONNEX/EL_FORM_Sister_Elements.js";
import EL_FORM_Description from "./DESCRIPTION/EL_FORM_Description.js";
import EL_FORM_Heritage from "./EL_FORM_Heritage.js";
import EL_FORM_History from "./EL_FORM_History.js";
import EL_FORM_Physical from "./EL_FORM_Physical.js";
import EL_FORM_Taxonomy from "./EL_FORM_Taxonomy.js";

export default class EL_FORM_Display {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_FORM = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_TAXONOMY = new EL_FORM_Taxonomy();
        this.BLOCK_DESCRIPTION = new EL_FORM_Description();
        this.BLOCK_CONNEX = new EL_FORM_Sister();
        this.BLOCK_PHYSICAL = new EL_FORM_Physical();
        this.BLOCK_HERITAGE = new EL_FORM_Heritage();
        this.BLOCK_HISTORY = new EL_FORM_History();
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_FORM = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_FORM.append(...[
            this.BLOCK_TAXONOMY.DRAW(),
            this.BLOCK_DESCRIPTION.DRAW(),
            this.BLOCK_CONNEX.DRAW(),
            this.BLOCK_PHYSICAL.DRAW(),
            this.BLOCK_HERITAGE.DRAW(),
            this.BLOCK_HISTORY.DRAW()
        ]);
        return this.WRAPPER_FORM;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {
        await this.BLOCK_TAXONOMY.INITIALISE();
        await this.BLOCK_DESCRIPTION.INITIALISE();
        await this.BLOCK_CONNEX.INITIALISE();
        await this.BLOCK_PHYSICAL.INITIALISE();
        await this.BLOCK_HERITAGE.INITIALISE();
        await this.BLOCK_HISTORY.INITIALISE();
    };

    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << SET >> //
    // ========= //

    SET_ELEMENT(PARAMETER_VALUE) {this.BLOCK_TAXONOMY.SET_NAME(PARAMETER_VALUE)};
    SET_CATEGORY(PARAMETER_VALUE) {this.BLOCK_TAXONOMY.SET_CATEGORY(PARAMETER_VALUE)};
    SET_TYPE(PARAMETER_VALUE) {this.BLOCK_TAXONOMY.SET_TYPE(PARAMETER_VALUE)};
    SET_DESCRIPTION(PARAMETER_VALUE){this.BLOCK_DESCRIPTION.SET_DESCRIPTION(PARAMETER_VALUE)}
    async SET_CONNEX(PARAMETER_VALUE){await this.BLOCK_CONNEX.SET_SISTERS(PARAMETER_VALUE)};
    SET_LIST(PARAMETER_VALUE){this.BLOCK_CONNEX.SET_SISTER_LIST(PARAMETER_VALUE)}
    SET_COLOUR(PARAMETER_VALUE){this.BLOCK_PHYSICAL.SET_COLOUR(PARAMETER_VALUE)};
    async SET_USES(PARAMETER_VALUE) {await this.BLOCK_PHYSICAL.SET_USES(PARAMETER_VALUE)};
    SET_SURNAME(PARAMETER_VALUE){this.BLOCK_HERITAGE.SET_SURNAME(PARAMETER_VALUE)};
    SET_AGE(PARAMETER_VALUE){this.BLOCK_HISTORY.SET_AGE(PARAMETER_VALUE)}
    // ========= //
    // << GET >> //
    // ========= //

    GET_ELEMENT() {return this.BLOCK_TAXONOMY.GET_ELEMENT()};
    GET_CATEGORY() {return this.BLOCK_TAXONOMY.GET_CATEGORY()};
    GET_TYPE() {return this.BLOCK_TAXONOMY.GET_TYPE()};
    GET_DESCRIPTION() {return this.BLOCK_DESCRIPTION.GET_DESCRIPTION()};
    GET_CONNEX(){return this.BLOCK_CONNEX.GET_SISTERS()};
    GET_COLOUR() {return this.BLOCK_PHYSICAL.GET_COLOUR()}
    GET_USES(){return this.BLOCK_PHYSICAL.GET_USES()};
    GET_SURNAME(){return this.BLOCK_HERITAGE.GET_SURNAME()};
    GET_AGE(){return this.BLOCK_HISTORY.GET_AGE()};
};