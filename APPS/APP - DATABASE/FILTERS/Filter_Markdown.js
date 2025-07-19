import EL_Markdown from "../../APP - ELEMENTS/CONNECTORS/EL_Markdown.js";

export default class FILTER_Markdown {

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

    async GOBLIN() {
        switch (this.TAG_FILTER) {
            case 'ELEMENT_NEW':
                return await this.#ELEMENT_NEW();
            default:
                break;
        };
    };
    async ACCESS() {
        switch (this.TAG_FILTER) {
            case 'ELEMENT_UPDATE':
                return new EL_Markdown({});
            default:
                break;
        };
    }
    async #ELEMENT_NEW() {
        return new EL_Markdown({
            ELEMENT_CONFIG_TAXONOMY_NAME: this.DATA_PROPERTIES.TAXONOMY.NAME,
            ELEMENT_CONFIG_TAXONOMY_TYPE: this.DATA_PROPERTIES.TAXONOMY.TYPE,
            ELEMENT_CONFIG_TAXONOMY_CATEGORY: this.DATA_PROPERTIES.TAXONOMY.CATEGORY
        }).GENERATE_MARKDOWN();
    };
}