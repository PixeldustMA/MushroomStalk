import MANAGER_Markdown from "../../APP - DATABASE/MANAGERS/Markdown_Manager.js";

export default  class EL_Markdown extends MANAGER_Markdown{

    constructor({
        ELEMENT_CONFIG_TAXONOMY_NAME = 0,
        ELEMENT_CONFIG_TAXONOMY_CATEGORY = 0,
        ELEMENT_CONFIG_TAXONOMY_TYPE = 0
    }){

        super();

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.PATH_MARKDOWN = 'C:\\Stitchy\\THE ORB\\Goblin Swamp/SHELF - DATABASE'
        // ============== //
        // << TAXONOMY >> //
        // ============== //

        this.PROPERTY_TAXONOMY_NAME = ELEMENT_CONFIG_TAXONOMY_NAME;
        this.PROPERTY_TAXONOMY_CATEGORY = ELEMENT_CONFIG_TAXONOMY_CATEGORY;
        this.PROPERTY_TAXONOMY_TYPE = ELEMENT_CONFIG_TAXONOMY_TYPE;

        // ========== //
        // ## TEXT ## //
        // ========== //

        // ================ //
        // << CATEGORIES >> //
        // ================ //

        this.TEXT_TAXONOMY = 'UNSET';

        // ============== //
        // << TAXONOMY >> //
        // ============== //

        this.TEXT_TAXONOMY_NAME = 'UNSET';
        this.TEXT_TAXONOMY_CATEGORY = 'UNSET';
        this.TEXT_TAXONOMY_TYPE = 'UNSET';
    };

    // ============= //
    // ## UTILITY ## //
    // ============= //

    GENERATE_MARKDOWN() {
        this.LOAD_MARKDOWN();

        return `${this.#GENERATE_TITLE()}
${this.TEXT_TAXONOMY}`
    };
    LOAD_MARKDOWN() {
        this.TEXT_TAXONOMY = this.#GENERATE_TAXONOMY();
    };

    // ================ //
    // ## GENERATION ## //
    // ================ //

    #GENERATE_TITLE() {return '---\nbanner: "![[fire.jpg]]\\banner_lock: true"\n---';};
    #GENERATE_TAXONOMY() {
        this.#LOAD_TAXONOMY();
        return `${this.SET_HEADER_LEVEL_ONE('TAXONOMY')}
${this.TEXT_TAXONOMY_NAME}
${this.TEXT_TAXONOMY_CATEGORY}
${this.TEXT_TAXONOMY_TYPE}`
    };

    // ========== //
    // ## LOAD ## //
    // ========== //

    #LOAD_TAXONOMY() {
        this.TEXT_TAXONOMY_NAME = this.#LOAD_NAME();
        this.TEXT_TAXONOMY_CATEGORY = this.#LOAD_CATEGORY();
        this.TEXT_TAXONOMY_TYPE = this.#LOAD_TYPE();
    };
    #LOAD_NAME() {return this.NEW_LINE('NAME', this.PROPERTY_TAXONOMY_NAME)};
    #LOAD_CATEGORY() {return this.NEW_LINE('CATEGORY', this.PROPERTY_TAXONOMY_CATEGORY)};
    #LOAD_TYPE() {return this.NEW_LINE('TYPE', this.PROPERTY_TAXONOMY_TYPE)};

    // ============= //
    // ## UPDATES ## //
    // ============= //

    async UPDATE_MARKDOWN_PROPERTY_CATEGORY() {

        // ================ //
        // << FETCH DATA >> //
        // ================ //

        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY_OLD}/${this.PROPERTY_TAXONOMY_NAME}.md`;
        console.log(this.ACTIVE_PATH)
        this.RENDERER_PATH = this.ACTIVE_PATH
        let MARKDOWN_ELEMENT = await this.READ();
        console.log(MARKDOWN_ELEMENT)

        // ============ //
        // << SPLITS >> //
        // ============ //

        let CATEGORY_SPLIT = await this.SEARCH_MARKDOWN_HEADER_CATEGORY(MARKDOWN_ELEMENT);
        let TYPE_SPLIT = await this.SEARCH_MARKDOWN_HEADER_TYPE(CATEGORY_SPLIT.POST_CATEGORY);

        // =============== //
        // << RECOMBINE >> //
        // =============== //

        this.ACTIVE_DATA = `${CATEGORY_SPLIT.PRE_CATEGORY} 
CATEGORY:: ${this.ACTIVE_VALUE}
TYPE:: ${TYPE_SPLIT.POST_TYPE}`;
        console.log(this.ACTIVE_DATA)
        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY}/${this.PROPERTY_TAXONOMY_NAME}.md`
        console.log(this.ACTIVE_PATH);
        console.log('SAVING MARKDOWN')
        await this.#SAVE_UPDATE();
    };
    async UPDATE_MARKDOWN_PROPERTY_TYPE() {

        // ================ //
        // << FETCH DATA >> //
        // ================ //

        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY}/${this.PROPERTY_TAXONOMY_NAME}.md`;
        console.log(this.ACTIVE_PATH)
        this.RENDERER_PATH = this.ACTIVE_PATH
        let MARKDOWN_ELEMENT = await this.READ();

        // ============ //
        // << SPLITS >> //
        // ============ //

        let TYPE_SPLIT = await this.SEARCH_MARKDOWN_HEADER_TYPE(MARKDOWN_ELEMENT);
        let COLOUR_SPLIT = await this.SEARCH_MARKDOWN_HEADER_COLOUR(TYPE_SPLIT.POST_TYPE);

        // =============== //
        // << RECOMBINE >> //
        // =============== //

        this.ACTIVE_DATA = `${TYPE_SPLIT.PRE_TYPE}TYPE:: ${this.ACTIVE_VALUE}
COLOUR:: ${COLOUR_SPLIT.POST_COLOUR}`;
        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY}/${this.PROPERTY_TAXONOMY_NAME}.md`
        console.log(this.ACTIVE_PATH);
        console.log('SAVING MARKDOWN')
        await this.#SAVE_UPDATE();
    };

    // ============ //
    // ## SEARCH ## //
    // ============ //

    async SEARCH_MARKDOWN_HEADER_CATEGORY(PARAMETER_MARKDOWN) {
        let MD_BROKEN = PARAMETER_MARKDOWN.split('CATEGORY::');
        return {
            PRE_CATEGORY: MD_BROKEN[0],
            POST_CATEGORY: MD_BROKEN[1]
        }
    };
    async SEARCH_MARKDOWN_HEADER_TYPE(PARAMETER_MARKDOWN){
        let MD_BROKEN = PARAMETER_MARKDOWN.split('TYPE::');
        return {
            PRE_TYPE: MD_BROKEN[0],
            POST_TYPE: MD_BROKEN[1]
        }
    };
    async SEARCH_MARKDOWN_HEADER_COLOUR(PARAMETER_MARKDOWN){
        let MD_BROKEN = PARAMETER_MARKDOWN.split('COLOUR::');
        return {
            PRE_COLOUR: MD_BROKEN[0],
            POST_COLOUR: MD_BROKEN[1]
        }
    };

    // ============= //
    // ## UTILITY ## //
    // ============= //

    async #SAVE_UPDATE() {
        this.RENDERER_PATH = this.ACTIVE_PATH;
        this.RENDERER_DATA = this.ACTIVE_DATA;
        await this.MARKDOWN();
    };
};