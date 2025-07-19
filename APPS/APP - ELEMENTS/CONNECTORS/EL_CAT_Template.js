import MANAGER_Template from "../../APP - DATABASE/MANAGERS/Template_Manager.js";

export default class EL_CAT_Template extends MANAGER_Template{

    constructor({
        TEMPLATE_CONFIG_TAXONOMY_CATEGORY = 0,
        TEMPLATE_CONFIG_TAXONOMY_TYPE = 0,
        TEMPLATE_CONFIG_DESCRIPTION_CODE = 0
    }){

        super();

        // ============== //
        // ## TAXONOMY ## //
        // ============== //

        this.TAXONOMY_CATEGORY = TEMPLATE_CONFIG_TAXONOMY_CATEGORY;
        this.TAXONOMY_TYPE = TEMPLATE_CONFIG_TAXONOMY_TYPE;

        // ================= //
        // ## DESCRIPTION ## //
        // ================= //

        this.DESCRIPTION_CODE = TEMPLATE_CONFIG_DESCRIPTION_CODE;

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_TAXONOMY = {
            NAME: 'UNSET',
            TYPE: 'UNSET'
        };
        this.DATA_DESCRIPTION = 'UNSET';
    };

    BUILD() {
        this.TAXONOMY();
        this.DESCRIPTION();

        return {
            TAXONOMY: this.DATA_TAXONOMY,
            DESCRIPTION: this.DATA_DESCRIPTION,
            ELEMENTS: []
        };
    };

    TAXONOMY() {
        if (this.TAXONOMY_CATEGORY !== 0) {this.DATA_TAXONOMY.NAME = this.TAXONOMY_CATEGORY;}
        if (this.TAXONOMY_TYPE !== 0) {this.DATA_TAXONOMY.TYPE = this.TAXONOMY_TYPE;}
    };
    DESCRIPTION() {
        if (this.DESCRIPTION_CODE !== 0) {this.DATA_DESCRIPTION = this.DESCRIPTION_CODE}
    };
}