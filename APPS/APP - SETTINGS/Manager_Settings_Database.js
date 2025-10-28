import Stalk from "../../CONSOLE/LUNGS/Stalk.js";

export default class MANAGER_Settings_Database extends Stalk{

    constructor() {
        super();
    };

    async STATUS() {
        await this.REQUEST_SESSION_SETTINGS();
        this.RENDERER_PATH = this.SESSION.PATHS.SETTINGS.STATUS;
        this.DATA_STATUS = JSON.parse(await this.READ());
    };
    async SET_ACTIVE_ELEMENT_CATEGORY(PARAMETER_TAG) {
        await this.STATUS();
        this.DATA_STATUS.ELEMENT_CATEGORY = PARAMETER_TAG;
        this.RENDERER_DATA = this.DATA_STATUS;
        await this.SAVE();
        console.log(this.DATA_STATUS)
    };
    async SET_ACTIVE_ELEMENT_ELEMENT(PARAMETER_TAG) {
        await this.STATUS();
        this.DATA_STATUS.ELEMENT_ELEMENT = PARAMETER_TAG;
        this.RENDERER_DATA = this.DATA_STATUS;
        await this.SAVE();
        console.log(this.DATA_STATUS)
    };
}