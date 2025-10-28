import { Renderer } from "../../LUNGS/Renderer.js";

export default class Cap_Series extends Renderer{

    constructor({
        SERIES_CONFIG_CONSOLE = 0,
        SERIES_CONFIG_SERIES = 0
    }) {

        super();

        this.PATH_CONSOLE = SERIES_CONFIG_CONSOLE;
        this.PATH_SERIES = SERIES_CONFIG_SERIES; 

        this.DATA_SERIES = {}
    };


    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE_SESSION() {

        await this.#GENERATE_LIST_SERIES();
        await this.#GENERATE_DATA_SERIES();

        return {
                DATA: this.DATA_SERIES,
                LIST: this.LIST_SERIES
        }
    };

    // ========== //
    // ## LIST ## //
    // ========== //

    async #GENERATE_LIST_SERIES() {
        console.log(this.PATH_CONSOLE)
        this.RENDERER_PATH = `${this.PATH_CONSOLE}/SeriesList.json`;
        this.LIST_SERIES = JSON.parse(await this.READ());
    };

    // ========== //
    // ## DATA ## //
    // ========== //

    async #GENERATE_DATA_SERIES() {
        for (let INDEX_SERIES = 0; INDEX_SERIES < this.LIST_SERIES.length; INDEX_SERIES++) {
            const SERIES = this.LIST_SERIES[INDEX_SERIES];
            this.RENDERER_PATH = `${this.PATH_SERIES}/${SERIES}.json`;
            this.DATA_SERIES[SERIES] = JSON.parse(await this.READ())
        };
    };
}