import EL_CAT_Template from "../../APP - ELEMENTS/CONNECTORS/EL_CAT_Template.js";
import EL_Template from "../../APP - ELEMENTS/CONNECTORS/EL_Template.js";

export default class FILTER_Templates {

    constructor({
        FILTER_CONFIG_TAG = 0,
        FILTER_CONFIG_DATA = 0
    }) {

        // ============== //
        // ## SETTINGS ## //
        // ============== //

        this.TAG_FILTER = FILTER_CONFIG_TAG;
        this.DATA_PROPERTIES = FILTER_CONFIG_DATA;
    };

    async TEMPLATE() {

        console.log(this.TAG_FILTER)
        switch (this.TAG_FILTER) {
            case 'ELEMENT_NEW':

            console.log('BUILDING ELEMENT FILE');
                return await this.#ELEMENT_NEW();
            case 'ELEMENT_CATEGORY':
            console.log('BUILDING ELEMENT CATEGORY FILE');
                return await this.#ELEMENT_CATEGORY();
            default:
                break;
        };
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #ELEMENT_NEW(){
        return new EL_Template({
            TEMPLATE_CONFIG_TAXONOMY_NAME: this.DATA_PROPERTIES.TAXONOMY.NAME,
            TEMPLATE_CONFIG_TAXONOMY_TYPE: this.DATA_PROPERTIES.TAXONOMY.TYPE,
            TEMPLATE_CONFIG_TAXONOMY_CATEGORY: this.DATA_PROPERTIES.TAXONOMY.CATEGORY
        }).BUILD();
    };
    async #ELEMENT_CATEGORY(){
        return await new EL_CAT_Template({
            TEMPLATE_CONFIG_TAXONOMY_TYPE: this.DATA_PROPERTIES.TAXONOMY.TYPE,
            TEMPLATE_CONFIG_TAXONOMY_CATEGORY: this.DATA_PROPERTIES.TAXONOMY.NAME,
            TEMPLATE_CONFIG_DESCRIPTION_CODE: this.DATA_PROPERTIES.DESCRIPTION
        }).BUILD();
    };
}