import Branches from "../../CONSOLE/LUNGS/Branches.js";

export default class Mycology extends Branches {

    constructor(){
        super();
        this.PATH_ACTIVE = 'UNSET';
        this.DATA_ACTIVE = 'UNSET';
    };

    async MYCOLOGY_BUILD_FOLDER() {

        this.RENDERER_PATH = this.PATH_ACTIVE;
        if (!await this.CHECK_FILE()) {
            await this.CREATE_FOLDER();
        };
    };
    async MYCOLOGY_BUILD_FILE() {

        this.RENDERER_PATH = this.PATH_ACTIVE;
        this.RENDERER_DATA = this.DATA_ACTIVE;

        try {
            await this.READ();
        } catch (error) {
            await this.SAVE();
        };
    };
}