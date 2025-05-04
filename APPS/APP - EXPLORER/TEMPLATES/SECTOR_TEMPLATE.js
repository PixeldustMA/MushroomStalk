export default class SECTOR {

    constructor({
        SECTOR_CONFIG_NAME = 0,
        SECTOR_CONFIG_CODE = 0,
        SECTOR_CONFIG_ELEMENT = 0,
        SECTOR_CONFIG_GUARDIAN = 0,
        SECTOR_CONFIG_GUARDIAN_SPACE = 0,
        SECTOR_CONFIG_GUARDIAN_SYSTEM = 0,
        SECTOR_CONFIG_GUARDIAN_PLANET = 0,
        SECTOR_CONFIG_SPACE = 0,
        SECTOR_CONFIG_SYSTEMS = 0,
        SECTOR_CONFIG_PLANETS = 0
    }) {

        // ================ // 
        // ## BASIC DATA ## //
        // ================ //

        this.TAG_NAME = SECTOR_CONFIG_NAME;
        this.TAG_CODE = SECTOR_CONFIG_CODE;
        this.TAG_ELEMENT = SECTOR_CONFIG_ELEMENT;

        // ================ //
        // ## CHARACTERS ## //
        // ================ //

        this.CHARACTER_GUARDIAN = SECTOR_CONFIG_GUARDIAN;
        this.CHARACTER_GUARDIAN_SPACE = SECTOR_CONFIG_GUARDIAN_SPACE;
        this.CHARACTER_GUARDIAN_SYSTEM = SECTOR_CONFIG_GUARDIAN_SYSTEM;
        this.CHARACTER_GUARDIAN_PLANET = SECTOR_CONFIG_GUARDIAN_PLANET;

        // =============== //
        // ## LOCATIONS ## //
        // =============== //

        this.LOCATION_SPACE = SECTOR_CONFIG_SPACE;
        this.ARRAY_SYSTEMS = SECTOR_CONFIG_SYSTEMS;
        this.ARRAY_PLANETS = SECTOR_CONFIG_PLANETS;

        // ============= // 
        // ## RESULTS ## //
        // ============= //

        this.SECTOR_TEMPLATE = {
            NAME: "",
            CODE: "",
            ELEMENT: "",
            STAFF: {
                GUARDIAN: "",
                SPACE_GUARDIAN: "",
                SYSTEM_GUARDIAN: "",
                PLANET_GUARDIAN: ""
            },
            LOCATIONS: {
                SPACE: "",
                SYSTEMS: [],
                PLANETS: []
            }
        };
    };

    // ============ //
    // ## BASICS ## //
    // ============ //

    #SET_NAME() {
        this.SECTOR_TEMPLATE.NAME = this.TAG_NAME;
    };
    #GENERATE_CODE() {
        if (this.TAG_CODE[0] === '%') {
            this.SECTOR_TEMPLATE.CODE = this.TAG_CODE.replace('%', '');
        }
        else {
            this.SECTOR_TEMPLATE.CODE = `${this.TAG_NAME[0]}${this.TAG_NAME[1]}`;
        }
    };
    #SET_ELEMENT() {
        this.SECTOR_TEMPLATE.ELEMENT = this.TAG_ELEMENT;
    };

    // ================ //
    // ## CHARACTERS ## //
    // ================ //

    #SET_GUARDIAN() {
        this.SECTOR_TEMPLATE.GUARDIAN = this.CHARACTER_GUARDIAN;
    };
    #SET_SPACE_GUARDIAN() {
        this.SECTOR_TEMPLATE.SPACE_GUARDIAN = this.CHARACTER_GUARDIAN_SPACE;
    };
    #SET_SYSTEM_GUARDIAN() {
        this.SECTOR_TEMPLATE.SYSTEM_GUARDIAN = this.CHARACTER_GUARDIAN_SYSTEM;
    };
    #SET_PLANET_GUARDIAN() {
        this.SECTOR_TEMPLATE.PLANET_GUARDIAN = this.CHARACTER_GUARDIAN_PLANET;
    };

    // =============== //
    // ## LOCATIONS ## //
    // =============== //

    #ADD_SPACE() {
        this.SECTOR_TEMPLATE.LOCATIONS.SPACE = this.LOCATION_SPACE;
    };
    #ADD_SYSTEMS() {
        for (let INDEX_SYSTEMS = 0; INDEX_SYSTEMS < this.ARRAY_SYSTEMS.length; INDEX_SYSTEMS++) {
            const TAG_SYSTEM = this.ARRAY_SYSTEMS[INDEX_SYSTEMS];
            this.SECTOR_TEMPLATE.LOCATIONS.SYSTEMS.push(TAG_SYSTEM);            
        };
    };
    #ADD_PLANETS() {
        for (let INDEX_PLANETS = 0; INDEX_PLANETS < this.ARRAY_PLANETS.length; INDEX_PLANETS++) {
            const TAG_PLANET = this.ARRAY_PLANETS[INDEX_PLANETS];
            this.SECTOR_TEMPLATE.LOCATIONS.PLANETS.push(TAG_PLANET);            
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

        if (this.CHARACTER_GUARDIAN_SPACE !== 0) {
            this.#SET_SPACE_GUARDIAN();
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

        if (this.LOCATION_SPACE !== 0) {
            this.#ADD_SPACE();
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

        return this.SECTOR_TEMPLATE;
    };
}