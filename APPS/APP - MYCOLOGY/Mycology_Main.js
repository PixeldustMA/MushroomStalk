import Branches from "../../CONSOLE/LUNGS/Branches.js";

export default class MYCOLOGY_Main extends Branches{

    constructor(){super()};

    // ========= //
    // ## RUN ## //
    // ========= //

    async RUN() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'RUN FILE VALIDATION CHECK';
        await this.INSTANCE_BEETLE.READ_MODE();

        await this.REMEMBER();
        await this.CUPBOARD_CHECK();
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

};