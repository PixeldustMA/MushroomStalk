import Branches from "../../CONSOLE/LUNGS/Branches.js";

export default class MYCOLOGY_Main extends Branches{

    constructor(){super()};

    // =============== //
    // ## EXISTANCE ## //
    // =============== //

    /**
     * ## CHECK AND CREATE FOLDERS
     */
    async EXISTANCE_CHECK(PARAMETER_PATHWAY) {
        const STATUS = await this.FOLDER_EXISTANCE(PARAMETER_PATHWAY);
        console.log(STATUS)
        if (!STATUS){
            this.RENDERER_PATH = PARAMETER_PATHWAY
            await this.CREATE_FOLDER();
        };
    };
    /**
     * ## CHECK AND CREATE FILES
     */
    async EXISTANCE_FILE(PARAMETER_PATHWAY, PARAMETER_DATA) {
        if (!await this.FOLDER_EXISTANCE(PARAMETER_PATHWAY)){
            this.RENDERER_PATH = PARAMETER_PATHWAY;
            this.RENDERER_DATA = PARAMETER_DATA;
            await this.SAVE();
        };
    };
    async EXISTANCE_ARCHIVE(PARAMETER_PATHWAY, PARAMETER_ARCHIVE_TEMPLATE) {
        if(!await this.FOLDER_EXISTANCE(PARAMETER_PATHWAY)) {
            this.RENDERER_PATH_ORIGIN = PARAMETER_ARCHIVE_TEMPLATE;
            this.RENDERER_PATH_DESTINATION = PARAMETER_PATHWAY;
            await this.COPY();
        }
    }
};