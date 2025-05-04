export default class SPACE {

    constructor({
        SPACE_CONFIG_NAME = 0,
        SPACE_CONFIG_CODE = 0,
        SPACE_CONFIG_ELEMENT = 0,
        SPACE_CONFIG_GUARDIAN = 0,
        SPACE_CONFIG_GUARDIAN_SECTOR = 0,
        SPACE_CONFIG_GUARDIAN_SYSTEM = 0,
        SPACE_CONFIG_GUARDIAN_PLANET = 0,
        SPACE_CONFIG_SECTORS = 0,
        SPACE_CONFIG_SYSTEMS = 0,
        SPACE_CONFIG_PLANETS = 0
    }) {

        // ================ // 
        // ## BASIC DATA ## //
        // ================ //

        this.TAG_NAME = SPACE_CONFIG_NAME;
        this.TAG_CODE = SPACE_CONFIG_CODE;
        this.TAG_ELEMENT = SPACE_CONFIG_ELEMENT;

        // ================ //
        // ## CHARACTERS ## //
        // ================ //

        this.CHARACTER_GUARDIAN = SPACE_CONFIG_GUARDIAN;
        this.CHARACTER_GUARDIAN_SECTOR = SPACE_CONFIG_GUARDIAN_SECTOR;
        this.CHARACTER_GUARDIAN_SYSTEM = SPACE_CONFIG_GUARDIAN_SYSTEM;
        this.CHARACTER_GUARDIAN_PLANET = SPACE_CONFIG_GUARDIAN_PLANET;

        // =============== //
        // ## LOCATIONS ## //
        // =============== //

        this.ARRAY_SECTORS = SPACE_CONFIG_SECTORS;
        this.ARRAY_SYSTEMS = SPACE_CONFIG_SYSTEMS;
        this.ARRAY_PLANETS = SPACE_CONFIG_PLANETS;

        // ============= // 
        // ## RESULTS ## //
        // ============= //

        this.SPACE_TEMPLATE = {
            NAME: "",
            CODE: "",
            ELEMENT: "",
            STAFF: {
                GUARDIAN: "",
                SECTOR_GUARDIAN: "",
                SYSTEM_GUARDIAN: "",
                PLANET_GUARDIAN: ""
            },
            LOCATIONS: {
                SECTORS: [],
                SYSTEMS: [],
                PLANETS: []
            }
        };
    }

    // ============ //
    // ## BASICS ## //
    // ============ //

    #SET_NAME() {
        this.SPACE_TEMPLATE.NAME = this.TAG_NAME;
    };
    #GENERATE_CODE() {
        if (this.TAG_CODE[0] === '%') {
            this.SPACE_TEMPLATE.CODE = this.TAG_CODE.replace('%', '');
        }
        else {
            this.SPACE_TEMPLATE.CODE = `${this.TAG_NAME[0]}${this.TAG_NAME[1]}`;
        }
    };
    #SET_ELEMENT() {
        this.SPACE_TEMPLATE.ELEMENT = this.TAG_ELEMENT;
    };

    // ================ //
    // ## CHARACTERS ## //
    // ================ //

    #SET_GUARDIAN() {
        this.SPACE_TEMPLATE.GUARDIAN = this.CHARACTER_GUARDIAN;
    };
    #SET_SECTOR_GUARDIAN() {
        this.SPACE_TEMPLATE.SECTOR_GUARDIAN = this.CHARACTER_GUARDIAN_SECTOR;
    };
    #SET_SYSTEM_GUARDIAN() {
        this.SPACE_TEMPLATE.SYSTEM_GUARDIAN = this.CHARACTER_GUARDIAN_SYSTEM;
    };
    #SET_PLANET_GUARDIAN() {
        this.SPACE_TEMPLATE.PLANET_GUARDIAN = this.CHARACTER_GUARDIAN_PLANET;
    };

    // =============== //
    // ## LOCATIONS ## //
    // =============== //

    #ADD_SECTORS() {
        for (let INDEX_SECTORS = 0; INDEX_SECTORS < this.ARRAY_SECTORS.length; INDEX_SECTORS++) {
            const TAG_SECTOR = this.ARRAY_SECTORS[INDEX_SECTORS];
            this.SPACE_TEMPLATE.LOCATIONS.SECTORS.push(TAG_SECTOR);            
        };
    };
    #ADD_SYSTEMS() {
        for (let INDEX_SYSTEMS = 0; INDEX_SYSTEMS < this.ARRAY_SYSTEMS.length; INDEX_SYSTEMS++) {
            const TAG_SYSTEM = this.ARRAY_SYSTEMS[INDEX_SYSTEMS];
            this.SPACE_TEMPLATE.LOCATIONS.SYSTEMS.push(TAG_SYSTEM);            
        };
    };
    #ADD_PLANETS() {
        for (let INDEX_PLANETS = 0; INDEX_PLANETS < this.ARRAY_PLANETS.length; INDEX_PLANETS++) {
            const TAG_PLANET = this.ARRAY_PLANETS[INDEX_PLANETS];
            this.SPACE_TEMPLATE.LOCATIONS.PLANETS.push(TAG_PLANET);            
        };
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    TEMPLATE() {

        // ============ //
        // << BASICS >> //
        // ============ //

        this.#SET_NAME();
        this.#GENERATE_CODE();

        if (this.TAG_ELEMENT !== 0) {
            this.#SET_ELEMENT();
        };
        if (this.CHARACTER_GUARDIAN !== 0) {
            this.#SET_GUARDIAN();
        };

        // ================ //
        // << CHARACTERS >> //
        // ================ //

        if (this.CHARACTER_GUARDIAN_SECTOR !== 0) {
            this.#SET_SECTOR_GUARDIAN();
        };
        if (this.CHARACTER_GUARDIAN_SYSTEM !== 0) {
            this.#SET_SYSTEM_GUARDIAN();
        };
        if (this.CHARACTER_GUARDIAN_PLANET !== 0) {
            this.#SET_PLANET_GUARDIAN();
        };

        // =============== //
        // << LOCATIONS >> //
        // =============== //

        if (this.ARRAY_SECTORS !== 0) {
            this.#ADD_SECTORS();
        };
        if (this.ARRAY_SYSTEMS !== 0) {
            this.#ADD_SYSTEMS();
        };
        if (this.ARRAY_PLANETS !== 0) {
            this.#ADD_PLANETS();
        };

        // ============= //
        // << RESULTS >> //
        // ============= //

        return this.SPACE_TEMPLATE;
    };
}