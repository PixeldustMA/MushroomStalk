import Branches from "../../CONSOLE/LUNGS/Branches.js";
import SECTOR from "./TEMPLATES/SECTOR_TEMPLATE.js";
import SPACE from "./TEMPLATES/SPACE_TEMPLATE.js";
import SYSTEM_TEMPLATE from "./TEMPLATES/SYSTEM_TEMPLATE.js";

export default class EXPLORER_Manager extends Branches{

    constructor({
        EXPLORER_CONFIG_PATH_CONSOLE = 0,
        EXPLORER_CONFIG_PATH_SPACE = 0,
        EXPLORER_CONFIG_PATH_SECTOR = 0,
        EXPLORER_CONFIG_PATH_SYSTEM = 0,
        EXPLORER_CONFIG_PATH_PLANET = 0,
        EXPLORER_CONFIG_NAME_SPACE = 0,
        EXPLORER_CONFIG_NAME_SECTOR = 0,
        EXPLORER_CONFIG_NAME_SYSTEM = 0,
        EXPLORER_CONFIG_NAME_PLANET = 0,
        EXPLORER_CONFIG_SPACE_DATA = 0,
        EXPLORER_CONFIG_SECTOR_DATA = 0,
        EXPLORER_CONFIG_SYSTEM_DATA = 0,
        EXPLORER_CONFIG_SPACE_LIST = 0,
        EXPLORER_CONFIG_SECTOR_LIST = 0,
        EXPLORER_CONFIG_SYSTEM_LIST = 0,
        EXPLORER_CONFIG_PLANET_LIST = 0
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_CONSOLE = EXPLORER_CONFIG_PATH_CONSOLE;
        this.PATH_SPACE = EXPLORER_CONFIG_PATH_SPACE;
        this.PATH_SECTOR = EXPLORER_CONFIG_PATH_SECTOR;
        this.PATH_SYSTEM = EXPLORER_CONFIG_PATH_SYSTEM;
        this.PATH_PLANET = EXPLORER_CONFIG_PATH_PLANET;

        // =================== //
        // ## LOCATION TAGS ## //
        // =================== //

        this.TAG_SPACE = EXPLORER_CONFIG_NAME_SPACE;
        this.TAG_SECTOR = EXPLORER_CONFIG_NAME_SECTOR;
        this.TAG_SYSTEM = EXPLORER_CONFIG_NAME_SYSTEM;
        this.TAG_PLANET = EXPLORER_CONFIG_NAME_PLANET;

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_SPACE = EXPLORER_CONFIG_SPACE_DATA;
        this.DATA_SECTOR = EXPLORER_CONFIG_SECTOR_DATA;
        this.DATA_SYSTEM = EXPLORER_CONFIG_SYSTEM_DATA;

        // ========== //
        // ## LIST ## //
        // ========== //

        this.LIST_SPACE = EXPLORER_CONFIG_SPACE_LIST;
        this.LIST_SECTOR = EXPLORER_CONFIG_SECTOR_LIST;
        this.LIST_SYSTEM = EXPLORER_CONFIG_SYSTEM_LIST;
        this.LIST_PLANET = EXPLORER_CONFIG_PLANET_LIST;
    };

    // ===================== //
    // ## INSERT LOCATION ## //
    // ===================== //

    async INSERT_SPACE() {

        // ================ //
        // << SPACE DATA >> //
        // ================ //

        this.RENDERER_PATH = `${this.PATH_SPACE}/${this.TAG_SPACE}.json`;
        this.RENDERER_DATA = new SPACE({

            SPACE_CONFIG_NAME: this.TAG_SPACE,
            SPACE_CONFIG_ELEMENT: "ELEMENT",
            SPACE_CONFIG_CODE: "%SP",

            SPACE_CONFIG_GUARDIAN: "SPACE GUARDIAN",
            SPACE_CONFIG_GUARDIAN_SECTOR: "SECTOR GUARDIAN",
            SPACE_CONFIG_GUARDIAN_SYSTEM: "SYSTEM GUARDIAN",
            SPACE_CONFIG_GUARDIAN_PLANET: "PLANET GUARDIAN",

            SPACE_CONFIG_GUARDIAN_SECTOR: ["SECTOR ONE", "SECTOR TWO"],
            SPACE_CONFIG_SYSTEMS: ["SYSTEM ONE", "SYSTEM TWO"],
            SPACE_CONFIG_PLANETS: ["PLANET ONE", "PLANET TWO"]
        }).TEMPLATE(); 
        await this.SAVE();

        // =========== //
        // << LISTS >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_CONSOLE}/SpaceList.json`;
        this.LIST_SPACE.push(this.TAG_SPACE);
        this.RENDERER_DATA = this.LIST_SPACE;
        await this.SAVE();
    };
    async INSERT_SECTOR() {

        // ================= //
        // << SECTOR DATA >> //
        // ================= //

        this.RENDERER_PATH = `${this.PATH_SECTOR}/${this.TAG_SECTOR}.json`;
        this.RENDERER_DATA = new SECTOR({

            SECTOR_CONFIG_NAME: this.TAG_SECTOR,
            SECTOR_CONFIG_ELEMENT: "ELEMENT",
            SECTOR_CONFIG_CODE: "%SC",

            SECTOR_CONFIG_GUARDIAN: "SECTOR GUARDIAN",
            SECTOR_CONFIG_GUARDIAN_SPACE: "SPACE GUARDIAN",
            SECTOR_CONFIG_GUARDIAN_SYSTEM: "SECTOR GUARDIAN",
            SECTOR_CONFIG_GUARDIAN_PLANET: "PLANET GUARDIAN",

            SECTOR_CONFIG_SPACE: this.TAG_SPACE,
            SECTOR_CONFIG_SYSTEMS: ["SYSTEM ONE", "SYSTEM TWO"],
            SECTOR_CONFIG_PLANETS: ["PLANET ONE", "PLANET TWO"]
        }).TEMPLATE(); 
        await this.SAVE();

        // ================ //
        // << SPACE DATA >> //
        // ================ //

        this.DATA_SPACE.LOCATIONS.SECTORS.push(this.TAG_SECTOR);
        this.RENDERER_PATH = `${this.PATH_SPACE}/${this.TAG_SPACE}.json`;
        this.RENDERER_DATA = this.DATA_SPACE;
        await this.SAVE();

        // =========== //
        // << LISTS >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_CONSOLE}/SectorList.json`;
        this.LIST_SECTOR.push(this.TAG_SECTOR);
        this.RENDERER_DATA = this.LIST_SECTOR;
        await this.SAVE();

    };
    async INSERT_SYSTEM() {

        // ================= //
        // << SYSTEM DATA >> //
        // ================= //

        this.RENDERER_PATH = `${this.PATH_SYSTEM}/${this.TAG_SYSTEM}.json`;
        this.RENDERER_DATA = new SYSTEM_TEMPLATE({
            SYSTEM_CONFIG_NAME: this.TAG_SYSTEM,
            SYSTEM_CONFIG_ELEMENT: "ELEMENT",
            SYSTEM_CONFIG_CODE: "%SY",
            SYSTEM_CONFIG_GUARDIAN: "SYSTEM GUARDIAN",
            SYSTEM_CONFIG_GUARDIAN_SPACE: "SPACE GUARDIAN",
            SYSTEM_CONFIG_GUARDIAN_SECTOR: "SECTOR GUARDIAN",
            SYSTEM_CONFIG_GUARDIAN_PLANET: "PLANET GUARDIAN",
            SYSTEM_CONFIG_SPACE: this.TAG_SPACE,
            SYSTEM_CONFIG_SECTOR: this.TAG_SECTOR,
            SYSTEM_CONFIG_PLANETS: ["PLANET ONE", "PLANET TWO"]
        }).TEMPLATE(); 
        await this.SAVE();

        // ================ //
        // << SPACE DATA >> //
        // ================ //

        this.DATA_SPACE.LOCATIONS.SYSTEMS.push(this.TAG_SYSTEM);
        this.RENDERER_PATH = `${this.PATH_SPACE}/${this.TAG_SPACE}.json`;
        this.RENDERER_DATA = this.DATA_SPACE;
        await this.SAVE();

        // ================= //
        // << SECTOR DATA >> //
        // ================= //

        this.DATA_SECTOR.LOCATIONS.SYSTEMS.push(this.TAG_SYSTEM);
        this.RENDERER_PATH = `${this.PATH_SECTOR}/${this.TAG_SECTOR}.json`;
        this.RENDERER_DATA = this.DATA_SECTOR;
        await this.SAVE();

        // =========== //
        // << LISTS >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_CONSOLE}/SystemList.json`;
        this.LIST_SYSTEM.push(this.TAG_SYSTEM);
        this.RENDERER_DATA = this.LIST_SYSTEM;
        await this.SAVE();
    };
    async INSERT_PLANET() {

        // ================= //
        // << PLANET DATA >> //
        // ================= //

        this.RENDERER_PATH = `${this.PATH_PLANET}/${this.TAG_PLANET}.json`;
        this.RENDERER_DATA = {
            NAME: this.TAG_PLANET,
            SPACE: this.TAG_SPACE,
            SECTOR: this.TAG_SECTOR,
            SYSTEM: this.TAG_SYSTEM
        };
        await this.SAVE();

        // ================ //
        // << SPACE DATA >> //
        // ================ //

        this.DATA_SPACE.LOCATIONS.PLANETS.push(this.TAG_PLANET);
        this.RENDERER_PATH = `${this.PATH_SPACE}/${this.TAG_SPACE}.json`;
        this.RENDERER_DATA = this.DATA_SPACE;
        await this.SAVE();

        // ================= //
        // << SECTOR DATA >> //
        // ================= //

        this.DATA_SECTOR.LOCATIONS.PLANETS.push(this.TAG_PLANET);
        this.RENDERER_PATH = `${this.PATH_SECTOR}/${this.TAG_SECTOR}.json`;
        this.LIST_PLANET.push(this.TAG_PLANET);
        this.RENDERER_DATA = this.DATA_SECTOR;
        await this.SAVE();

        // ================= //
        // << SYSTEM DATA >> //
        // ================= //

        this.DATA_SYSTEM.LOCATIONS.PLANETS.push(this.TAG_PLANET);
        this.RENDERER_PATH = `${this.PATH_SYSTEM}/${this.TAG_SYSTEM}.json`;
        this.RENDERER_DATA = this.DATA_SYSTEM;
        await this.SAVE();

        // =========== //
        // << LISTS >> //
        // =========== //
    
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/PlanetList.json`;
        this.RENDERER_DATA = this.LIST_PLANET;
        await this.SAVE();
    };

    async GOBLIN_FOLDER_SPACE(){

        // CREATE THE PATH
        
    };
};