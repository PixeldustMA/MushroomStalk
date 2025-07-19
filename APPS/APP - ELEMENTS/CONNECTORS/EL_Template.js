import MANAGER_Template from "../../APP - DATABASE/MANAGERS/Template_Manager.js";

export default class EL_Template extends MANAGER_Template{

    constructor(
        TEMPLATE_CONFIG_TAXONOMY_NAME = 0,
        TEMPLATE_CONFIG_TAXONOMY_CATEGORY = 0,
        TEMPLATE_CONFIG_TAXONOMY_TYPE = 0,
    ){

        super();
        // ============== //
        // ## TAXONOMY ## //
        // ============== //

        this.TAXONOMY_NAME = TEMPLATE_CONFIG_TAXONOMY_NAME;
        this.TAXONOMY_CATEGORY = TEMPLATE_CONFIG_TAXONOMY_CATEGORY;
        this.TAXONOMY_TYPE = TEMPLATE_CONFIG_TAXONOMY_TYPE;

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_TAXONOMY = {
            NAME: 'UNSET',
            CATEGORY: 'UNSET',
            TYPE: 'UNSET'
        };
    };

    BUILD() {
        this.TAXONOMY();

        return {
            TAXONOMY: this.DATA_TAXONOMY
        };
    };

    TAXONOMY() {
        if (this.TAXONOMY_NAME !== 0) {this.DATA_TAXONOMY.NAME = this.TAXONOMY_NAME;}
        if (this.TAXONOMY_CATEGORY !== 0) {this.DATA_TAXONOMY.CATEGORY = this.TAXONOMY_CATEGORY;}
        if (this.TAXONOMY_TYPE !== 0) {this.DATA_TAXONOMY.TYPE = this.TAXONOMY_TYPE;}
    };
}