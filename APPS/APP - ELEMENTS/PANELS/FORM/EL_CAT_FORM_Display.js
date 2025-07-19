import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import EL_FORM_Description from "./DESCRIPTION/EL_FORM_Description.js";
import EL_FORM_Category from "./TAXONOMY/EL_FORM_Category.js";
import EL_FORM_Type from "./TAXONOMY/EL_FORM_Type.js";

export default class EL_CAT_FORM_Display {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_FORM = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_CATEGORY = new EL_FORM_Category();
        this.BLOCK_TYPE = new EL_FORM_Type();
        this.BLOCK_DESCRIPTION = new EL_FORM_Description();
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
            this.BLOCK_CATEGORY.DRAW(),
            this.BLOCK_TYPE.DRAW(),
            this.BLOCK_DESCRIPTION.DRAW()
        ]);
        return this.WRAPPER_FORM;
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {
        await this.BLOCK_CATEGORY.INITIALISE();
        await this.BLOCK_TYPE.INITIALISE();
        await this.BLOCK_DESCRIPTION.INITIALISE();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //


    // ================ //
    // ## PROPERTIES ## //
    // ================ //

    // ========= //
    // << SET >> //
    // ========= //

    SET_CATEGORY(PARAMETER_VALUE) {this.BLOCK_CATEGORY.SET_CATEGORY(PARAMETER_VALUE)};
    SET_TYPE(PARAMETER_VALUE) {this.BLOCK_TYPE.SET_TYPE(PARAMETER_VALUE)};
    SET_DESCRIPTION(PARAMETER_VALUE) {this.BLOCK_DESCRIPTION.SET_DESCRIPTION(PARAMETER_VALUE)};

    // ========= //
    // << GET >> //
    // ========= //

    GET_CATEGORY() {return this.BLOCK_CATEGORY.GET_CATEGORY()};
    GET_TYPE() {return this.BLOCK_TYPE.GET_TYPE()};
    GET_DESCRIPTION() {return this.BLOCK_DESCRIPTION.GET_DESCRIPTION()};
}