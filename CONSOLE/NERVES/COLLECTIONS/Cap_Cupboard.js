import Cap_Profiles from "../MAIN/Cap_Profiles";
import Cap_Routes from "../MAIN/Cap_Routes";
import Cap_Settings from "../MAIN/Cap_Settings";

export default class Cap_Cupboard {

    constructor() {

    };

    async GENERATE_MEMORY_CUPBOARD() {
        await this.#PROFILES();
        await this.#ROUTES();
        await this.#SETTINGS();
    };
    async #PROFILES() {
        this.DATA_PROFILE = await new Cap_Profiles({
            
        }).INITIALISE_SESSION();
    };
    async #ROUTES() {
        this.DATA_ROUTES = await new Cap_Routes({

        }).INITIALISE_SESSION_BASIC();
    };
    async #SETTINGS() {

        this.DATA_SETTINGS = await new Cap_Settings({

        }).INITIALISE_SESSION_BASIC();
    };
}