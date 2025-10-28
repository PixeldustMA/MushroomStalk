import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Blueprints extends Renderer{

    constructor({
        BLUEPRINTS_CONFIG_CONSOLE = 0,
        BLUEPRINTS_CONFIG_BLUEPRINTS = 0
    }) {

        super();

        this.PATH_CONSOLE = BLUEPRINTS_CONFIG_CONSOLE;
        this.PATH_LIBRARY = BLUEPRINTS_CONFIG_BLUEPRINTS; 

        this.DATA_BLUEPRINT = {}
    };


    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#GENERATE_LIST_BLUEPRINT();
        await this.#GENERATE_DATA_BLUEPRINTS();

        return {
                DATA: this.DATA_BLUEPRINT,
                LIST: this.LIST_BLUEPRINT
        }
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #GENERATE_LIST_BLUEPRINT() {
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/BlueprintList.json`;
        this.LIST_BLUEPRINT = JSON.parse(await this.READ());
        console.log(this.RENDERER_PATH)
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #GENERATE_DATA_BLUEPRINTS() {
        for (let INDEX_BLUEPRINTS = 0; INDEX_BLUEPRINTS < this.LIST_BLUEPRINT.length; INDEX_BLUEPRINTS++) {
            const BLUEPRINT = this.LIST_BLUEPRINT[INDEX_BLUEPRINTS];
            this.RENDERER_PATH = `${this.PATH_LIBRARY}/${BLUEPRINT}.json`;
            this.DATA_BLUEPRINT[BLUEPRINT] = JSON.parse(await this.READ())
        };
    };
}