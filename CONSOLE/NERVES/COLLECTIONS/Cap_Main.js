import { Renderer } from "../../LUNGS/Renderer.js";
import Cap_Profiles from "../MAIN/Cap_Profiles.js";
import Cap_Routes from "../MAIN/Cap_Routes";

export default class Cap_Main extends Renderer {

    constructor() {

        // ========== //
        // ## DATA ## //
        // ========== //

        this.DATA_PROFILES = {};
    };

    async INITIALISE_MEMORY_MAIN() {
        await this.#PROFILES();

        return {
            PROFILES: this.DATA_PROFILES
        }
    };
    async #PROFILES() {
        this.DATA_PROFILES = await new Cap_Profiles({
            PROFILE_CONFIG_ROOT: '',
            PROFILE_CONFIG_PATHS: ''
        }).INITIALISE_SESSION();
    };
    // async #ROUTES() {
    //     this.DATA_ROUTES = await new Cap_Routes({
            
    //     }).I
    // }
}