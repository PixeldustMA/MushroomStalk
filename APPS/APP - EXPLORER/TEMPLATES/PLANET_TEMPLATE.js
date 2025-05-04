export default class SYSTEM {

    constructor({
        PLANET_CONFIG_NAME = 0,
        PLANET_CONFIG_CODE = 0,
        PLANET_CONFIG_ELEMENT = 0,
        PLANET_CONFIG_GUARDIAN = 0,
        PLANET_CONFIG_GUARDIAN_SPACE = 0,
        PLANET_CONFIG_GUARDIAN_SECTOR = 0,
        PLANET_CONFIG_GUARDIAN_SYSTEM = 0,
        PLANET_CONFIG_SPACE = 0,
        PLANET_CONFIG_SECTOR = 0,
        PLANET_CONFIG_SYSTEM = 0
    }) {

        // ================ // 
        // ## BASIC DATA ## //
        // ================ //

        this.TAG_NAME = PLANET_CONFIG_NAME;
        this.TAG_CODE = PLANET_CONFIG_CODE;
        this.TAG_ELEMENT = PLANET_CONFIG_ELEMENT;

        // ================ //
        // ## CHARACTERS ## //
        // ================ //

        this.CHARACTER_GUARDIAN = PLANET_CONFIG_GUARDIAN;
        this.CHARACTER_GUARDIAN_SPACE = PLANET_CONFIG_GUARDIAN_SPACE;
        this.CHARACTER_GUARDIAN_SECTOR = PLANET_CONFIG_GUARDIAN_SECTOR;
        this.CHARACTER_GUARDIAN_SYSTEM = PLANET_CONFIG_GUARDIAN_SYSTEM;

        // =============== //
        // ## LOCATIONS ## //
        // =============== //

        this.LOCATION_SPACE = PLANET_CONFIG_SPACE;
        this.LOCATION_SECTOR = PLANET_CONFIG_SECTOR;
        this.LOCATION_SYSTEM = PLANET_CONFIG_SYSTEM;

        // ============= // 
        // ## RESULTS ## //
        // ============= //

        this.PLANET_TEMPLATE = {
            NAME: "",
            CODE: "",
            ELEMENT: "",
            STAFF: {
                GUARDIAN: "",
                SPACE_GUARDIAN: "",
                SECTOR_GUARDIAN: "",
                SYSTEM_GUARDIAN: ""
            },
            LOCATIONS: {
                SPACE: "",
                SECTOR: "",
                SYSTEM: ""
            }
        };
    };

    // ============ //
    // ## BASICS ## //
    // ============ //

    #SET_NAME() {
        this.PLANET_TEMPLATE.NAME = this.TAG_NAME;
    };
    #GENERATE_CODE() {
        if (this.TAG_CODE[0] === '%') {
            this.PLANET_TEMPLATE.CODE = this.TAG_CODE.replace('%', '');
        }
        else {
            this.PLANET_TEMPLATE.CODE = `${this.TAG_NAME[0]}${this.TAG_NAME[1]}`;
        }
    };
    #SET_ELEMENT() {
        this.PLANET_TEMPLATE.ELEMENT = this.TAG_ELEMENT;
    };

    // ================ //
    // ## CHARACTERS ## //
    // ================ //

    #SET_GUARDIAN() {
        this.PLANET_TEMPLATE.GUARDIAN = this.CHARACTER_GUARDIAN;
    };
    #SET_SPACE_GUARDIAN() {
        this.PLANET_TEMPLATE.SPACE_GUARDIAN = this.CHARACTER_GUARDIAN_SPACE;
    };
    #SET_SECTOR_GUARDIAN() {
        this.PLANET_TEMPLATE.SECTOR_GUARDIAN = this.CHARACTER_GUARDIAN_SECTOR;
    };
    #SET_SYSTEM_GUARDIAN() {
        this.PLANET_TEMPLATE.SYSTEM_GUARDIAN = this.CHARACTER_GUARDIAN_SYSTEM;
    };

    // =============== //
    // ## LOCATIONS ## //
    // =============== //

    #ADD_SPACE() {
        this.PLANET_TEMPLATE.LOCATIONS.SPACE = this.LOCATION_SPACE;
    };
    #ADD_SECTOR() {
        this.PLANET_TEMPLATE.LOCATIONS.SECTOR = this.LOCATION_SECTOR
    };
    #ADD_SYSTEM() {
        this.PLANET_TEMPLATE.LOCATIONS.SYSTEM = this.LOCATION_SYSTEM;
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
        if (this.CHARACTER_GUARDIAN_SYSTEM !== 0) {
            this.#SET_SYSTEM_GUARDIAN();
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
        if (this.LOCATION_SYSTEM !== 0) {
            this.#ADD_SYSTEM();
        };

        // ============= //
        // << RESULTS >> //
        // ============= //

        return this.PLANET_TEMPLATE;
    };
}