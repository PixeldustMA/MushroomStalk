import Branches from "../../CONSOLE/LUNGS/Branches.js";
// import Myco_Cupboard from "./Mycology_Cupboard.js";

export default class MYCOLOGY_Main extends Branches{

    constructor(){super()};

    // ========= //
    // ## RUN ## //
    // ========= //

    async RUN() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'RUN FILE VALIDATION CHECK';
        await this.INSTANCE_BEETLE.READ_MODE();

        await this.REMEMBER();
        console.log(this.SESSION)
        // const INSTANCE_Cupboard = new Myco_Cupboard({
        //     CUPBOARD_CONFIG_TEMPLATES: this.SESSION.TEMPLATES.MYCOLOGY,
        //     CUPBOARD_CONFIG_FILES: this.SESSION.PATHS.CUPBOARD.FILES,
        //     CUPBOARD_CONFIG_FOLDERS: this.SESSION.PATHS.CUPBOARD,
        //     CUPBOARD_CONFIG_TOP: this.SESSION.PATHS.TOP.CUPBOARD
        // });
        // await INSTANCE_Cupboard.CUPBOARD_CHECK();
    };

    // =============== //
    // ## EXISTANCE ## //
    // =============== //

    /**
     * ## CHECK AND CREATE FOLDERS
     */
    async EXISTANCE_CHECK(PARAMETER_PATHWAY) {
        const STATUS = await this.FOLDER_EXISTANCE(PARAMETER_PATHWAY);
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