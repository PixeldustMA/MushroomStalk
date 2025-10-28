export default class LL_Mycology extends MYCOLOGY_Main{

    constructor({
        LAVALAMPS_CONFIG_PATHS = 0
    }){
        super();

        this.SESSION_PATH = LAVALAMPS_CONFIG_PATHS;

        // =========== //
        // << PATHS >> //
        // =========== //

        this.PATH_TOP = 'UNSET';
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    async INITIALISE(){
        await this.#LOAD_PATHS();
    };

    async RUN() {

        console.log('INITIALISING MEDIA')
        await this.INITIALISE();

        // ================= //
        // << MAIN FOLDER >> //
        // ================= //

        await this.EXISTANCE_CHECK(this.PATH_TOP);

        // ================ //
        // << JSON FILES >> //
        // ================ //

    };
    async #LOAD_PATHS() {

        await this.#LOAD_FOLDERS();

    };
    async #LOAD_FOLDERS() {
        this.PATH_TOP = this.SESSION_PATH.ROOT.LAVALAMP.MAIN;

    };

};