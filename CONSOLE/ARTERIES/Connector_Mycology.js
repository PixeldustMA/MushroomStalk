// import Myco_Archive from "../../APPS/APP - MYCOLOGY/Mycology_Archive.js";
import Myco_Cupboard from "../../APPS/APP - MYCOLOGY/Mycology_Cupboard.js";

export default class Connector_Mycology {

    constructor(SESSION, USERNAME = 0) {
        this.INSTANCE_MEMORY = SESSION;
        this.USERNAME = USERNAME
    };
    async MYCOLOGY_CUPBOARD() {
        let BUCKET_Folders = await this.FILL_BUCKET(this.INSTANCE_MEMORY.PATHS.CUPBOARD);
            await new Myco_Cupboard({
            CUPBOARD_CONFIG_TOP: this.INSTANCE_MEMORY.PATHS.TOP.CUPBOARD,
            CUPBOARD_CONFIG_FOLDERS: BUCKET_Folders,
            CUPBOARD_CONFIG_FILES: this.INSTANCE_MEMORY.PATHS.CUPBOARD.FILES,
            CUPBOARD_CONFIG_TEMPLATES: this.INSTANCE_MEMORY.TEMPLATES.MYCOLOGY
        }).RUN();
    };
    async MYCOLOGY_USERNAME() {
        // let BUCKET_Folders = await this.FILL_BUCKET(this.INSTANCE_MEMORY.PATHS.CUPBOARD);
            await new Myco_Profile({

        }).RUN();
    };
    async MYCOLOGY_ARCHIVE() {
        let BUCKET_Archive_Folders = await this.FILL_BUCKET(this.INSTANCE_MEMORY.PATHS.ARCHIVE);
        await new Myco_Archive({
            ARCHIVE_CONFIG_FILES: this.INSTANCE_MEMORY.PATHS.ARCHIVE,
            ARCHIVE_CONFIG_FOLDERS: BUCKET_Archive_Folders,
            ARCHIVE_CONFIG_FILES: this.INSTANCE_MEMORY.PATHS.ARCHIVE.FILES,
            ARCHIVE_CONFIG_TEMPLATES: this.INSTANCE_MEMORY.TEMPLATES.MYCOLOGY.ARCHIVE,
            ARCHIVE_CONFIG_TOP: this.INSTANCE_MEMORY.PATHS.TOP.ARCHIVE,
            ARCHIVE_CONFIG_USERNAME: this.USERNAME
        }).RUN();
    }
    async FILL_BUCKET(PARAMATER_PATHS){
        let BUCKET_Folders = []
        let KEYS_File_Array = Object.keys(PARAMATER_PATHS);
        for (let INDEX_Cupboard = 0; INDEX_Cupboard < KEYS_File_Array.length; INDEX_Cupboard++) {
            const KEY = KEYS_File_Array[INDEX_Cupboard];
            if (KEY !== 'FILES') {
                BUCKET_Folders.push(PARAMATER_PATHS[KEY]);
            };
        };
        return BUCKET_Folders;
    };
}