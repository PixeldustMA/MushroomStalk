import Cap_Elements from "../DATABASE/Cap_Elements.js";

export default class Cap_Database {

    constructor({
        DATABASE_CONFIG_PATHS = 0
    }) {

        this.PATH_ALL = DATABASE_CONFIG_PATHS;

    };

    async INITIALISE_MEMORY_DATABASE() {
        await this.ELEMENTS();

        return {
            ELEMENTS: this.DATA_ELEMENTS
        }
    };
    async ELEMENTS() {

        this.INSTANCE_ELEMENTS = new Cap_Elements({
            ELEMENT_CONFIG_CONSOLE: this.PATH_ALL.ELEMENTS.ELEMENT.FOLDERS.CONSOLE,
            ELEMENT_CONFIG_ELEMENTS: this.PATH_ALL.ELEMENTS.ELEMENT.FOLDERS.ROOT
        });
        this.DATA_ELEMENTS = await this.INSTANCE_ELEMENTS.INITIALISE_SESSION();
    }
}