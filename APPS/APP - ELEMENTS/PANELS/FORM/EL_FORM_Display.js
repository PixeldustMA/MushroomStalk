import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
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
            this.BLOCK_TAXONOMY.DRAW()
        ]);
        return this.WRAPPER_FORM;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {
        await this.BLOCK_TAXONOMY.INITIALISE();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //


    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    SET_ELEMENT(PARAMETER_VALUE) {this.BLOCK_TAXONOMY.SET_NAME(PARAMETER_VALUE)};
    SET_CATEGORY(PARAMETER_VALUE) {this.BLOCK_TAXONOMY.SET_CATEGORY(PARAMETER_VALUE)};
    SET_TYPE(PARAMETER_VALUE) {this.BLOCK_TAXONOMY.SET_TYPE(PARAMETER_VALUE)};

    GET_ELEMENT() {return this.BLOCK_TAXONOMY.GET_ELEMENT()};
    GET_CATEGORY() {return this.BLOCK_TAXONOMY.GET_CATEGORY()};
    GET_TYPE() {return this.BLOCK_TAXONOMY.GET_TYPE()};
}