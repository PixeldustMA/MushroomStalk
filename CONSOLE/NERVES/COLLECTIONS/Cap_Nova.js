import { Renderer } from "../../LUNGS/Renderer.js";
import Cap_Blueprints from "../NOVA/Cap_Blueprints.js";

export default class Cap_Nova extends Renderer{

    constructor({
        NOVA_CONFIG_PATHS = 0
    }) {

        super();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.DATA_PATHS = NOVA_CONFIG_PATHS
    };

    async GENERATE_SESSION_NOVA() {

        await this.#BLUEPRINTS();

        return {
            BLUEPRINTS: this.DATA_BLUEPRINTS
        }
    };

    async #BLUEPRINTS() {

        this.DATA_BLUEPRINTS = await new Cap_Blueprints({
            BLUEPRINTS_CONFIG_BLUEPRINTS: this.DATA_PATHS.BLUEPRINTS.FOLDERS.BLUEPRINTS,
            BLUEPRINTS_CONFIG_CONSOLE: this.DATA_PATHS.BLUEPRINTS.FOLDERS.CONSOLE
        }).INITIALISE_SESSION();
    };
}