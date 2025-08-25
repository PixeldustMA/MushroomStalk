import MANAGER_Template from "../../APP - DATABASE/MANAGERS/Template_Manager.js";

export default class EL_Template extends MANAGER_Template{

    constructor({
        TEMPLATE_CONFIG_TAXONOMY_NAME = 0,
        TEMPLATE_CONFIG_TAXONOMY_CATEGORY = 0,
        TEMPLATE_CONFIG_TAXONOMY_TYPE = 0,
        TEMPLATE_CONFIG_DESCRIPTION_CODE = 0,
        TEMPLATE_CONFIG_HISTORY_AGE = 0,
        TEMPLATE_CONFIG_HISTORY_SPACE = 0,
        TEMPLATE_CONFIG_HISTORY_SECTOR = 0,
        TEMPLATE_CONFIG_HISTORY_SYSTEM = 0,
        TEMPLATE_CONFIG_HISTORY_PLANET = 0,
        TEMPLATE_CONFIG_HERITAGE_SURNAME = 0,
        TEMPLATE_CONFIG_PHYSICAL_COLOUR = 0
    }){

        super();
        // ============== //
        // ## TAXONOMY ## //
        // ============== //

        this.TAXONOMY_NAME = TEMPLATE_CONFIG_TAXONOMY_NAME;
        this.TAXONOMY_CATEGORY = TEMPLATE_CONFIG_TAXONOMY_CATEGORY;
        this.TAXONOMY_TYPE = TEMPLATE_CONFIG_TAXONOMY_TYPE;

        // ================= //
        // ## DESCRIPTION ## //
        // ================= //

        this.DESCRIPTION_CODE = TEMPLATE_CONFIG_DESCRIPTION_CODE;

        // ============= //
        // ## HISTORY ## //
        // ============= //

        this.HISTORY_AGE = TEMPLATE_CONFIG_HISTORY_AGE;
        this.HISTORY_SPACE = TEMPLATE_CONFIG_HISTORY_SPACE;
        this.HISTORY_SECTOR = TEMPLATE_CONFIG_HISTORY_SECTOR;
        this.HISTORY_SYSTEM = TEMPLATE_CONFIG_HISTORY_SYSTEM;
        this.HISTORY_PLANET = TEMPLATE_CONFIG_HISTORY_PLANET;

        // ============== //
        // ## HERITAGE ## //
        // ============== //

        this.HERITAGE_SURNAME = TEMPLATE_CONFIG_HERITAGE_SURNAME;

        // ============== //
        // ## PHYSICAL ## //
        // ============== //

        this.PHYSICAL_COLOUR = TEMPLATE_CONFIG_PHYSICAL_COLOUR;

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_TAXONOMY = {
            NAME: 'UNSET',
            CATEGORY: 'UNSET',
            TYPE: 'UNSET'
        };
        this.DATA_DESCRIPTION = 'UNSET';
        this.DATA_HISTORY = {
            AGE: 'UNSET',
            SOURCE: {
                SPACE: 'UNSET',
                SECTOR: 'UNSET',
                SYSTEM: 'UNSET',
                PLANET: 'UNSET'
            }
        };
        this.DATA_HERITAGE = {
            SURNAME: 'UNSET',
            DRAGONS: [],
            ELDERS: []
        };
        this.DATA_PHYSICAL = {
            COLOUR: 'UNSET',
            USES: []
        };
    };

    BUILD() {
        this.TAXONOMY();
        this.DESCRIPTION();
        this.HISTORY();
        this.HERITAGE();
        this.PHYSICAL();

        return {
            TAXONOMY: this.DATA_TAXONOMY,
            DESCRIPTION: this.DATA_DESCRIPTION,
            HISTORY: this.DATA_HISTORY,
            HERITAGE: this.DATA_HERITAGE,
            PHYSICAL: this.DATA_PHYSICAL,
            CONNEX: {
                SISTER_ELEMENTS: []
            },
            METEOROLOGY: {},
            BIOLOGY: {},
            HALEX: {},
            LOCATIONS: {
                SPACE: [],
                SECTOR: [],
                SYSTEM: [],
                PLANET: []
            }
        };
    };

    TAXONOMY() {
        if (this.TAXONOMY_NAME !== 0) {this.DATA_TAXONOMY.NAME = this.TAXONOMY_NAME;}
        if (this.TAXONOMY_CATEGORY !== 0) {this.DATA_TAXONOMY.CATEGORY = this.TAXONOMY_CATEGORY;}
        if (this.TAXONOMY_TYPE !== 0) {this.DATA_TAXONOMY.TYPE = this.TAXONOMY_TYPE;}
    };
    DESCRIPTION() {
        if (this.DESCRIPTION_CODE !== 0) {this.DATA_DESCRIPTION = this.DESCRIPTION_CODE;}
    };
    HISTORY() {
        if (this.HISTORY_AGE !== 0) {this.DATA_HISTORY.AGE = this.HISTORY_AGE;}
        if (this.HISTORY_SPACE !== 0) {this.DATA_HISTORY.SOURCE.SPACE = this.HISTORY_SPACE;}
        if (this.HISTORY_SECTOR !== 0) {this.DATA_HISTORY.SOURCE.SECTOR = this.HISTORY_SECTOR;}
        if (this.HISTORY_SYSTEM !== 0) {this.DATA_HISTORY.SOURCE.SYSTEM = this.HISTORY_SYSTEM;}
        if (this.HISTORY_PLANET !== 0) {this.DATA_HISTORY.SOURCE.PLANET = this.HISTORY_PLANET;}
    };
    HERITAGE() {
        if (this.HERITAGE_SURNAME !== 0) {this.DATA_HERITAGE.SURNAME = this.HERITAGE_SURNAME;}
    };
    PHYSICAL() {
        if (this.PHYSICAL_COLOUR !== 0) {this.DATA_PHYSICAL.COLOUR = this.PHYSICAL_COLOUR;}
    };
}