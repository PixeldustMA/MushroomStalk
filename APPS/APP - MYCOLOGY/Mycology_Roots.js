import MYCOLOGY_Main from "./Mycology_Main.js";

export default class MYCOLOGY_Roots extends MYCOLOGY_Main{

    constructor({
        ROOT_CONFIG_PATHS = 0
    }) {

        super()
        this.PATHS_ROOT = ROOT_CONFIG_PATHS;
    };

    async RUN() {

        await this.#LAVALAMPS();
        await this.#MEDIA();
        await this.#SETTINGS();
    };

    async #MEDIA() {
        await this.EXISTANCE_CHECK(this.PATHS_ROOT.MEDIA.MAIN);
        await this.EXISTANCE_CHECK(this.PATHS_ROOT.MEDIA.BOOKS);
    };
    async #LAVALAMPS() {
        await this.EXISTANCE_CHECK(this.PATHS_ROOT.LAVALAMPS.MAIN);
        await this.EXISTANCE_CHECK(this.PATHS_ROOT.LAVALAMPS.POKEMON);
    };
    async #SETTINGS() {
        await this.EXISTANCE_CHECK(this.PATHS_ROOT.SETTINGS.MAIN);
    };
};