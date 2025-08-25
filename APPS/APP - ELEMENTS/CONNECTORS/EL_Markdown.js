import MANAGER_Markdown from "../../APP - DATABASE/MANAGERS/Markdown_Manager.js";

export default  class EL_Markdown extends MANAGER_Markdown{

    constructor({
        ELEMENT_CONFIG_TAXONOMY_NAME = 0,
        ELEMENT_CONFIG_TAXONOMY_CATEGORY = 0,
        ELEMENT_CONFIG_TAXONOMY_TYPE = 0,
        ELEMENT_CONFIG_HISTORY_AGE = 0,
        ELEMENT_CONFIG_HISTORY_SPACE = 0,
        ELEMENT_CONFIG_HISTORY_SECTOR = 0,
        ELEMENT_CONFIG_HISTORY_SYSTEM = 0,
        ELEMENT_CONFIG_HISTORY_PLANET = 0,
        ELEMENT_CONFIG_DESCRIPTION_TEXT = 0,
        ELEMENT_CONFIG_PHYSICAL_COLOUR = 0,
        ELEMENT_CONFIG_HERITAGE_SURNAME = 0,
        ELEMENT_CONFIG_PATH_DATABASE = 0
    }){

        super();

        // ================ //
        // ## PROPERTIES ## //
        // ================ //

        this.PATH_MARKDOWN = ELEMENT_CONFIG_PATH_DATABASE;
        // 'C:\\Stitchy\\THE ORB\\Goblin Swamp/'
        // ============== //
        // << TAXONOMY >> //
        // ============== //

        this.PROPERTY_TAXONOMY_NAME = ELEMENT_CONFIG_TAXONOMY_NAME;
        this.PROPERTY_TAXONOMY_CATEGORY = ELEMENT_CONFIG_TAXONOMY_CATEGORY;
        this.PROPERTY_TAXONOMY_TYPE = ELEMENT_CONFIG_TAXONOMY_TYPE;

        // ============= //
        // << HISTORY >> //
        // ============= //

        this.PROPERTY_HISTORY_AGE = ELEMENT_CONFIG_HISTORY_AGE;
        this.PROPERTY_HISTORY_SPACE = ELEMENT_CONFIG_HISTORY_SPACE;
        this.PROPERTY_HISTORY_SECTOR = ELEMENT_CONFIG_HISTORY_SECTOR;
        this.PROPERTY_HISTORY_SYSTEM = ELEMENT_CONFIG_HISTORY_SYSTEM;
        this.PROPERTY_HISTORY_PLANET = ELEMENT_CONFIG_HISTORY_PLANET;

        // ================= //
        // << DESCRIPTION >> //
        // ================= //

        this.PROPERTY_DESCRIPTION_TEXT = ELEMENT_CONFIG_DESCRIPTION_TEXT;

        // ============== //
        // << HERITAGE >> //
        // ============== //

        this.PROPERTY_HERITAGE_SURNAME = ELEMENT_CONFIG_HERITAGE_SURNAME;

        // ============== //
        // << PHYSICAL >> //
        // ============== //

        this.PROPERTY_PHYSICAL_COLOUR = ELEMENT_CONFIG_PHYSICAL_COLOUR;

        // ========== //
        // ## TEXT ## //
        // ========== //

        // ================ //
        // << CATEGORIES >> //
        // ================ //

        this.TEXT_TAXONOMY = 'UNSET';
        this.TEXT_HISTORY = 'UNSET';
        this.TEXT_DESCRIPTION = 'UNSET';
        this.TEXT_CONNEX = 'UNSET';
        this.TEXT_METEOROLOGY = 'UNSET';
        this.TEXT_BIOLOGY = 'UNSET';
        this.TEXT_HERITAGE = 'UNSET';
        this.TEXT_HALEX = 'UNSET';
        this.TEXT_LOCATIONS = 'UNSET';
        this.TEXT_PHYSICAL = 'UNSET';

        // ============== //
        // << TAXONOMY >> //
        // ============== //

        this.TEXT_TAXONOMY_NAME = 'UNSET';
        this.TEXT_TAXONOMY_CATEGORY = 'UNSET';
        this.TEXT_TAXONOMY_TYPE = 'UNSET';

        // ============= //
        // << HISTORY >> //
        // ============= //

        this.TEXT_HISTORY_AGE = 'UNSET';
        this.TEXT_HISTORY_SPACE = 'UNSET';
        this.TEXT_HISTORY_SECTOR = 'UNSET';
        this.TEXT_HISTORY_SYSTEM = 'UNSET';
        this.TEXT_HISTORY_PLANET = 'UNSET';

        // ================= //
        // << DESCRIPTION >> //
        // ================= //

        this.TEXT_DESCRIPTION_TEXT = 'UNSET';

        // ============== //
        // << HERITAGE >> //
        // ============== //

        this.TEXT_HERITAGE_SURNAME = 'UNSET';

        // ============== //
        // << PHYSICAL >> //
        // ============== //

        this.TEXT_PHYSICAL_COLOUR = 'UNSET';
    };

    // ============= //
    // ## UTILITY ## //
    // ============= //

    GENERATE_MARKDOWN() {
        this.LOAD_MARKDOWN();

        return `${this.#GENERATE_TITLE()}
${this.TEXT_DESCRIPTION}
${this.TEXT_TAXONOMY}
${this.TEXT_HISTORY}
${this.TEXT_PHYSICAL}
${this.TEXT_HERITAGE}
${this.TEXT_LOCATIONS}
${this.TEXT_CONNEX}
${this.TEXT_HALEX}
${this.TEXT_METEOROLOGY}
${this.TEXT_BIOLOGY}
`
    };
    LOAD_MARKDOWN() {
        this.TEXT_TAXONOMY = this.#GENERATE_TAXONOMY();
        this.TEXT_HISTORY = this.#GENERATE_HISTORY();
        this.TEXT_DESCRIPTION = this.#GENERATE_DESCRIPTION();
        this.TEXT_CONNEX = this.#GENERATE_CONNEX();
        this.TEXT_METEOROLOGY = this.#GENERATE_METEOROLOGY();
        this.TEXT_BIOLOGY = this.#GENERATE_BIOLOGY();
        this.TEXT_HERITAGE = this.#GENERATE_HERITAGE();
        this.TEXT_HALEX = this.#GENERATE_HALEX();
        this.TEXT_LOCATIONS = this.#GENERATE_LOCATIONS();
        this.TEXT_PHYSICAL = this.#GENERATE_PHYSICAL();
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
    #GENERATE_HISTORY() {
        this.#LOAD_HISTORY();
        return `${this.SET_HEADER_LEVEL_ONE('HISTORY')}
${this.TEXT_HISTORY_AGE}
${this.SET_HEADER_LEVEL_TWO('SOURCE')}
${this.TEXT_HISTORY_SPACE}
${this.TEXT_HISTORY_SECTOR}
${this.TEXT_HISTORY_SYSTEM}
${this.TEXT_HISTORY_PLANET}`
    };
    #GENERATE_DESCRIPTION() {
        this.#LOAD_DESCRIPTION();
        return `${this.TEXT_DESCRIPTION_TEXT}`
    };
    #GENERATE_CONNEX() {
        return `${this.SET_HEADER_LEVEL_ONE('CONNECTIONS')}`;
    };
    #GENERATE_METEOROLOGY() {
        return `${this.SET_HEADER_LEVEL_ONE('METEOROLOGY')}
${this.SET_HEADER_LEVEL_TWO('WEATHER')}
${this.SET_HEADER_LEVEL_TWO('DISASTERS')}`;
    };
    #GENERATE_BIOLOGY() {
        return `${this.SET_HEADER_LEVEL_ONE('BIOLOGY')}
${this.SET_HEADER_LEVEL_TWO('PLANTS')}
${this.SET_HEADER_LEVEL_TWO('ANIMALS')}
${this.SET_HEADER_LEVEL_TWO('DRAGONS')}`;
    };
    #GENERATE_HERITAGE() {
        this.#LOAD_HERITAGE();
        return `${this.SET_HEADER_LEVEL_ONE('HERITAGE')}
${this.TEXT_HERITAGE_SURNAME}
${this.SET_HEADER_LEVEL_TWO('DRAGONS')}
${this.SET_HEADER_LEVEL_TWO('ELDERS')}`;
    };
    #GENERATE_HALEX() {
        return `${this.SET_HEADER_LEVEL_ONE('HALEX')}`
    };
    #GENERATE_LOCATIONS() {
        return `${this.SET_HEADER_LEVEL_ONE('LOCATIONS')}
${this.SET_HEADER_LEVEL_TWO('SPACE')}
${this.SET_HEADER_LEVEL_TWO('SECTOR')}
${this.SET_HEADER_LEVEL_TWO('SYSTEM')}
${this.SET_HEADER_LEVEL_TWO('PLANET')}`;
    };
    #GENERATE_PHYSICAL() {
        this.#LOAD_PHYSICAL();
        return `${this.SET_HEADER_LEVEL_ONE('PHYSICAL')}
${this.TEXT_PHYSICAL_COLOUR}
${this.SET_HEADER_LEVEL_TWO('USES')}`
    };

    // ========== //
    // ## LOAD ## //
    // ========== //

    // ============= //
    // << HEADERS >> //
    // ============= //

    #LOAD_TAXONOMY() {
        this.TEXT_TAXONOMY_NAME = this.#LOAD_NAME();
        this.TEXT_TAXONOMY_CATEGORY = this.#LOAD_CATEGORY();
        this.TEXT_TAXONOMY_TYPE = this.#LOAD_TYPE();
    };
    #LOAD_HISTORY() {
        this.TEXT_HISTORY_AGE = this.#LOAD_AGE();
        this.TEXT_HISTORY_SPACE = this.#LOAD_SOURCE_SPACE();
        this.TEXT_HISTORY_SECTOR = this.#LOAD_SOURCE_SECTOR();
        this.TEXT_HISTORY_SYSTEM = this.#LOAD_SOURCE_SYSTEM();
        this.TEXT_HISTORY_PLANET = this.#LOAD_SOURCE_PLANET();
    };
    #LOAD_DESCRIPTION() {
        this.TEXT_DESCRIPTION_TEXT = this.#LOAD_DESCRIPTION_TEXT();
    };
    #LOAD_HERITAGE() {
        this.TEXT_HERITAGE_SURNAME = this.#LOAD_SURNAME();
    };
    #LOAD_PHYSICAL() {
        this.TEXT_PHYSICAL_COLOUR = this.#LOAD_COLOUR();
    };

    // ============== //
    // << SEGMENTS >> //
    // ============== //

    #LOAD_NAME() {return this.NEW_LINE('NAME', this.PROPERTY_TAXONOMY_NAME)};
    #LOAD_CATEGORY() {return this.NEW_LINE('CATEGORY', this.PROPERTY_TAXONOMY_CATEGORY)};
    #LOAD_TYPE() {return this.NEW_LINE('TYPE', this.PROPERTY_TAXONOMY_TYPE)};
    #LOAD_AGE(){return this.NEW_LINE('AGE', this.PROPERTY_HISTORY_AGE)};
    #LOAD_SOURCE_SPACE(){return this.NEW_LINE('SPACE', this.PROPERTY_HISTORY_SPACE)};
    #LOAD_SOURCE_SECTOR(){return this.NEW_LINE('SECTOR', this.PROPERTY_HISTORY_SECTOR)};
    #LOAD_SOURCE_SYSTEM(){return this.NEW_LINE('SYSTEM', this.PROPERTY_HISTORY_SYSTEM)};
    #LOAD_SOURCE_PLANET(){return this.NEW_LINE('PLANET', this.PROPERTY_HISTORY_PLANET)};
    #LOAD_DESCRIPTION_TEXT(){return `*${this.PROPERTY_DESCRIPTION_TEXT}*`};
    #LOAD_SURNAME(){return this.NEW_LINE('SURNAME', this.PROPERTY_HERITAGE_SURNAME)};
    #LOAD_COLOUR(){return this.NEW_LINE('COLOUR', this.PROPERTY_PHYSICAL_COLOUR)};

    // ============= //
    // ## UPDATES ## //
    // ============= //

    async UPDATE_MARKDOWN_PROPERTY_CATEGORY() {

        // ================ //
        // << FETCH DATA >> //
        // ================ //

        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY_OLD}/${this.PROPERTY_TAXONOMY_NAME}.md`;
        this.RENDERER_PATH = this.ACTIVE_PATH
        let MARKDOWN_ELEMENT = await this.READ();

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
        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY}/${this.PROPERTY_TAXONOMY_NAME}.md`
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
        let HISTORY_SPLIT = await this.SEARCH_HEADER_HISTORY(TYPE_SPLIT.POST_TYPE);

        // =============== //
        // << RECOMBINE >> //
        // =============== //

        this.ACTIVE_DATA = `${TYPE_SPLIT.PRE_TYPE}TYPE:: ${this.ACTIVE_VALUE}
# HISTORY
${HISTORY_SPLIT.POST_COLOUR}`;
        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY}/${this.PROPERTY_TAXONOMY_NAME}.md`
        console.log(this.ACTIVE_PATH);
        console.log('SAVING MARKDOWN')
        await this.#SAVE_UPDATE();
    };
    async UPDATE_MARKDOWN_PROPERTY_ELEMENT() {

        // ================ //
        // << FETCH DATA >> //
        // ================ //

        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY}/${this.PROPERTY_TAXONOMY_NAME}.md`;
        this.RENDERER_PATH = this.ACTIVE_PATH
        let MARKDOWN_ELEMENT = await this.READ();

        console.log(this.RENDERER_PATH);
        console.log(MARKDOWN_ELEMENT)
        // ============ //
        // << SPLITS >> //
        // ============ //

        let NAME_SPLIT = await this.SEARCH_MARKDOWN_HEADER_NAME(MARKDOWN_ELEMENT);
        let CATEGORY_SPLIT = await this.SEARCH_MARKDOWN_HEADER_CATEGORY(NAME_SPLIT.POST_NAME);

        // =============== //
        // << RECOMBINE >> //
        // =============== //

        this.ACTIVE_DATA = `${NAME_SPLIT.PRE_NAME} 
NAME:: ${this.ACTIVE_VALUE}
CATEGORY:: ${CATEGORY_SPLIT.POST_CATEGORY}`;

        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY}/${this.PROPERTY_TAXONOMY_NAME}.md`
        console.log(this.ACTIVE_PATH);
        console.log('SAVING MARKDOWN')
        await this.#SAVE_UPDATE();
    };
    async UPDATE_MARKDOWN_PROPERTY_COLOUR() {

        // ================ //
        // << FETCH DATA >> //
        // ================ //

        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY}/${this.PROPERTY_TAXONOMY_NAME}.md`;
        this.RENDERER_PATH = this.ACTIVE_PATH
        let MARKDOWN_ELEMENT = await this.READ();

        // ============ //
        // << SPLITS >> //
        // ============ //

        let COLOUR_SPLIT = await this.SEARCH_MARKDOWN_HEADER_COLOUR(MARKDOWN_ELEMENT);
        let USES_SPLIT = await this.SEARCH_HEADER_USES(COLOUR_SPLIT.POST_COLOUR);

        // =============== //
        // << RECOMBINE >> //
        // =============== //

        this.ACTIVE_DATA = `${COLOUR_SPLIT.PRE_COLOUR} 
COLOUR:: ${this.ACTIVE_VALUE}
## USES
${USES_SPLIT.POST_USES}`;

        this.ACTIVE_PATH = `${this.PATH_MARKDOWN}/WORLD/ELEMENTS/${this.PROPERTY_TAXONOMY_TYPE}/${this.PROPERTY_TAXONOMY_CATEGORY}/${this.PROPERTY_TAXONOMY_NAME}.md`
        console.log(this.ACTIVE_PATH);
        console.log('SAVING MARKDOWN')
        await this.#SAVE_UPDATE();
    };

    // ============ //
    // ## SEARCH ## //
    // ============ //

    async SEARCH_MARKDOWN_HEADER_NAME(PARAMETER_MARKDOWN) {
        let MD_BROKEN = PARAMETER_MARKDOWN.split('NAME::');
        return {
            PRE_NAME: MD_BROKEN[0],
            POST_NAME: MD_BROKEN[1]
        }
    };
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
    async SEARCH_MARKDOWN_HEADER_AGE(PARAMETER_MARKDOWN){
        let MD_BROKEN = PARAMETER_MARKDOWN.split('AGE::');
        return {
            PRE_AGE: MD_BROKEN[0],
            POST_AGE: MD_BROKEN[1]
        }
    };
    async SEARCH_MARKDOWN_HEADER_SOURCE_SPACE(PARAMETER_MARKDOWN){
        let MD_BROKEN = PARAMETER_MARKDOWN.split('SPACE::');
        return {
            PRE_SPACE: MD_BROKEN[0],
            POST_SPACE: MD_BROKEN[1]
        }
    };
    async SEARCH_MARKDOWN_HEADER_SOURCE_SECTOR(PARAMETER_MARKDOWN){
        let MD_BROKEN = PARAMETER_MARKDOWN.split('SECTOR::');
        return {
            PRE_SECTOR: MD_BROKEN[0],
            POST_SECTOR: MD_BROKEN[1]
        }
    };
    async SEARCH_MARKDOWN_HEADER_SOURCE_SYSTEM(PARAMETER_MARKDOWN){
        let MD_BROKEN = PARAMETER_MARKDOWN.split('SYSTEM::');
        return {
            PRE_SYSTEM: MD_BROKEN[0],
            POST_SYSTEM: MD_BROKEN[1]
        }
    };
    async SEARCH_MARKDOWN_HEADER_SOURCE_PLANET(PARAMETER_MARKDOWN){
        let MD_BROKEN = PARAMETER_MARKDOWN.split('PLANET::');
        return {
            PRE_PLANET: MD_BROKEN[0],
            POST_PLANET: MD_BROKEN[1]
        }
    };
    async SEARCH_MARKDOWN_HEADER_SOURCE_SURNAME(PARAMETER_MARKDOWN){
        let MD_BROKEN = PARAMETER_MARKDOWN.split('SURNAME::');
        return {
            PRE_SURNAME: MD_BROKEN[0],
            POST_SURNAME: MD_BROKEN[1]
        }
    };

    // ================== //
    // ## GRAB HEADERS ## //
    // ================== //

    async SEARCH_HEADER_USES(PARAMETER_MARKDOWN) {
        let MD_BROKEN = PARAMETER_MARKDOWN.split('## USES');
        return {
            PRE_USES: MD_BROKEN[0],
            POST_USES: MD_BROKEN[1]
        }
    };
    async SEARCH_HEADER_SOURCE(PARAMETER_MARKDOWN) {
        let MD_BROKEN = PARAMETER_MARKDOWN.split('## SOURCE');
        return {
            PRE_SOURCE: MD_BROKEN[0],
            POST_SOURCE: MD_BROKEN[1]
        }
    };

    // ============= //
    // << HISTORY >> //
    // ============= //

    async SEARCH_HEADER_TAXONOMY(PARAMETER_MARKDOWN) {
        let MD_BROKEN = PARAMETER_MARKDOWN.split('# TAXONOMY');
        return {
            PRE_TAXONOMY: MD_BROKEN[0],
            POST_TAXONOMY: MD_BROKEN[1]
        }
    };
    async SEARCH_HEADER_HISTORY(PARAMETER_MARKDOWN) {
        let MD_BROKEN = PARAMETER_MARKDOWN.split('# HISTORY');
        return {
            PRE_HISTORY: MD_BROKEN[0],
            POST_HISTORY: MD_BROKEN[1]
        }
    };
    async SEARCH_HEADER_PHYSICAL(PARAMETER_MARKDOWN) {
        let MD_BROKEN = PARAMETER_MARKDOWN.split('# PHYSICAL');
        return {
            PRE_PHYSICAL: MD_BROKEN[0],
            POST_PHYSICAL: MD_BROKEN[1]
        }
    };
    async SEARCH_HEADER_HERITAGE(PARAMETER_MARKDOWN) {
        let MD_BROKEN = PARAMETER_MARKDOWN.split('# HERITAGE');
        return {
            PRE_HERITAGE: MD_BROKEN[0],
            POST_HERITAGE: MD_BROKEN[1]
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