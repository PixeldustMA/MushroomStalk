export default class SYSTEM_TEMPLATE {

    constructor({
        SYSTEM_CONFIG_NAME = 0,
        SYSTEM_CONFIG_CODE = 0,
        SYSTEM_CONFIG_ELEMENT = 0,
        SYSTEM_CONFIG_GUARDIAN = 0,
        SYSTEM_CONFIG_GUARDIAN_SPACE = 0,
        SYSTEM_CONFIG_GUARDIAN_SECTOR = 0,
        SYSTEM_CONFIG_GUARDIAN_PLANET = 0,
        SYSTEM_CONFIG_SPACE = 0,
        SYSTEM_CONFIG_SECTOR = 0,
        SYSTEM_CONFIG_PLANETS = 0
    }) {

        // ================ // 
        // ## BASIC DATA ## //
        // ================ //

        this.TAG_NAME = SYSTEM_CONFIG_NAME;
        this.TAG_CODE = SYSTEM_CONFIG_CODE;
        this.TAG_ELEMENT = SYSTEM_CONFIG_ELEMENT;

        // ================ //
        // ## CHARACTERS ## //
        // ================ //

        this.CHARACTER_GUARDIAN = SYSTEM_CONFIG_GUARDIAN;
        this.CHARACTER_GUARDIAN_SPACE = SYSTEM_CONFIG_GUARDIAN_SPACE;
        this.CHARACTER_GUARDIAN_SECTOR = SYSTEM_CONFIG_GUARDIAN_SECTOR;
        this.CHARACTER_GUARDIAN_PLANET = SYSTEM_CONFIG_GUARDIAN_PLANET;

        // =============== //
        // ## LOCATIONS ## //
        // =============== //

        this.LOCATION_SPACE = SYSTEM_CONFIG_SPACE;
        this.LOCATION_SECTOR = SYSTEM_CONFIG_SECTOR;
        this.ARRAY_PLANETS = SYSTEM_CONFIG_PLANETS;

        // ============= // 
        // ## RESULTS ## //
        // ============= //

        this.SYSTEM_TEMPLATE = {
            NAME: "",
            CODE: "",
            ELEMENT: "",
            STAFF: {
                GUARDIAN: "",
                SPACE_GUARDIAN: "",
                SECTOR_GUARDIAN: "",
                PLANET_GUARDIAN: ""
            },
            LOCATIONS: {
                SPACE: "",
                SECTOR: "",
                PLANETS: []
            }
        };
    };

    // ============ //
    // ## BASICS ## //
    // ============ //

    #SET_NAME() {
        this.SYSTEM_TEMPLATE.NAME = this.TAG_NAME;
    };
    #GENERATE_CODE() {
        if (this.TAG_CODE[0] === '%') {
            this.SYSTEM_TEMPLATE.CODE = this.TAG_CODE.replace('%', '');
        }
        else {
            this.SYSTEM_TEMPLATE.CODE = `${this.TAG_NAME[0]}${this.TAG_NAME[1]}`;
        }
    };
    #SET_ELEMENT() {
        this.SYSTEM_TEMPLATE.ELEMENT = this.TAG_ELEMENT;
    };

    // ================ //
    // ## CHARACTERS ## //
    // ================ //

    #SET_GUARDIAN() {
        this.SYSTEM_TEMPLATE.GUARDIAN = this.CHARACTER_GUARDIAN;
    };
    #SET_SPACE_GUARDIAN() {
        this.SYSTEM_TEMPLATE.SPACE_GUARDIAN = this.CHARACTER_GUARDIAN_SPACE;
    };
    #SET_SECTOR_GUARDIAN() {
        this.SYSTEM_TEMPLATE.SECTOR_GUARDIAN = this.CHARACTER_GUARDIAN_SECTOR;
    };
    #SET_PLANET_GUARDIAN() {
        this.SYSTEM_TEMPLATE.PLANET_GUARDIAN = this.CHARACTER_GUARDIAN_PLANET;
    };

    // =============== //
    // ## LOCATIONS ## //
    // =============== //

    #ADD_SPACE() {
        this.SYSTEM_TEMPLATE.LOCATIONS.SPACE = this.LOCATION_SPACE;
    };
    #ADD_SECTOR() {
        this.SYSTEM_TEMPLATE.LOCATIONS.SECTOR = this.LOCATION_SECTOR
    };
    #ADD_PLANETS() {
        for (let INDEX_PLANETS = 0; INDEX_PLANETS < this.ARRAY_PLANETS.length; INDEX_PLANETS++) {
            const TAG_PLANET = this.ARRAY_PLANETS[INDEX_PLANETS];
            this.SYSTEM_TEMPLATE.LOCATIONS.PLANETS.push(TAG_PLANET);            
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
        if (this.CHARACTER_GUARDIAN_SECTOR !== 0) {
            this.#SET_SECTOR_GUARDIAN();
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
        if (this.LOCATION_SECTOR !== 0) {
            this.#ADD_SECTOR();
        };
        if (this.ARRAY_PLANETS !== 0) {
            this.#ADD_PLANETS();
        };

        // ============= //
        // << RESULTS >> //
        // ============= //

        return this.SYSTEM_TEMPLATE;
    };
}