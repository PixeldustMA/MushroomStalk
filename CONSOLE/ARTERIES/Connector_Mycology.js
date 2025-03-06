import Myco_Cupboard from "../../APPS/APP - MYCOLOGY/Mycology_Cupboard.js";

export default class Connector_Mycology {

    constructor(SESSION) {
        this.INSTANCE_MEMORY = SESSION
    };

    async NO_USERNAME_MYCOLOGY() {

        let BUCKET_Folders = []
        let KEYS_Cupboard = Object.keys(this.INSTANCE_MEMORY.PATHS.CUPBOARD);
        for (let INDEX_Cupboard = 0; INDEX_Cupboard < KEYS_Cupboard.length; INDEX_Cupboard++) {
            const KEY = KEYS_Cupboard[INDEX_Cupboard];
            if (KEY !== 'FILES') {
                BUCKET_Folders.push(this.INSTANCE_MEMORY.PATHS.CUPBOARD[KEY]);
            };
        };
        await new Myco_Cupboard({
            CUPBOARD_CONFIG_TOP: this.INSTANCE_MEMORY.PATHS.TOP.CUPBOARD,
            CUPBOARD_CONFIG_FOLDERS: BUCKET_Folders,
            CUPBOARD_CONFIG_FILES: this.INSTANCE_MEMORY.PATHS.CUPBOARD.FILES,
            CUPBOARD_CONFIG_TEMPLATES: this.INSTANCE_MEMORY.TEMPLATES.MYCOLOGY
        }).RUN();
    };
}