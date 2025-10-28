export default class PATHS_Root_Cupboard {

    constructor({
        ROOT_CONFIG_FOLDER = 0
    }) {

        this.PATH_MAIN = ROOT_CONFIG_FOLDER;
    };

    GENERATE_ROOT_PATHS() {
        return {
            CUPBOARD: `${this.PATH_MAIN}/CUPBOARD`,
            MEMORY: `${this.PATH_MAIN}/CUPBOARD/MEMORY`,
            PANTRY: `${this.PATH_MAIN}/CUPBOARD/PANTRY`,
            ROUTES: `${this.PATH_MAIN}/CUPBOARD/ROUTES`,
            SETTINGS: `${this.PATH_MAIN}/CUPBOARD/SETTINGS`,
            TEXT: `${this.PATH_MAIN}/CUPBOARD/TEXT`,
            USERS: `${this.PATH_MAIN}/CUPBOARD/USERS`
        }
    };
}