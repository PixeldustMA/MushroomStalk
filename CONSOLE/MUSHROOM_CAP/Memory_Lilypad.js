import { Renderer } from "../LUNGS/Renderer.js";

export default class M_Lilypad extends Renderer{
    constructor(){

        super();
        this.PATH_FILE_RESIDENT = '';
        this.PATH_FILE_FROG_LIST = '';
        this.PATH_FOLDER_FROG = '';

        this.LILYPAD = {
            RESIDENT: {},
            FROGS: {},
            FROG_LIST: {}
        };
    };

    async INITIALISE(PARAMETER_RESIDENT, PARAMETER_FROG_LIST, PARAMETER_FROG_FOLDER){

        this.PATH_FILE_RESIDENT = PARAMETER_RESIDENT;
        this.PATH_FILE_FROG_LIST = PARAMETER_FROG_LIST;
        this.PATH_FOLDER_FROG = PARAMETER_FROG_FOLDER;

        console.log(this.PATH_FILE_RESIDENT)
        await this.#LOAD_RESIDENT();
        await this.#LOAD_FROG_LIST();
        await this.#LOAD_ALL_FROGS();
        return this.LILYPAD;
    };

    // ===================== //
    // ## LOAD FROM FILES ## //
    // ===================== //

    async #LOAD_RESIDENT(){
        this.RENDERER_PATH = this.PATH_FILE_RESIDENT;
        let RESIDENT =  JSON.parse(await this.READ());
        console.log(RESIDENT)
        this.LILYPAD.RESIDENT = RESIDENT;
    };
    async #LOAD_FROG_LIST(){
        this.RENDERER_PATH = this.PATH_FILE_FROG_LIST;
        this.LILYPAD.FROG_LIST = JSON.parse(await this.READ());
    };
    async #LOAD_ALL_FROGS(){
        this.RENDERER_PATH = this.PATH_FOLDER_FROG;
        const TAGS_FROG_FILES = await this.READ_FOLDERS(); 
        for (let INDEX_Frog = 0; INDEX_Frog < TAGS_FROG_FILES.length; INDEX_Frog++) {
            const PATH_Frog = TAGS_FROG_FILES[INDEX_Frog];
            this.RENDERER_PATH = `${this.PATH_FOLDER_FROG}/${PATH_Frog}`;
            this.LILYPAD.FROGS[PATH_Frog] = await this.READ();
        }
    };

    // ================= //
    // ## UPDATE DATA ## //
    // ================= //

    UPDATE_NEWS_PATH(PARAMETER_PATH_NEWS){
        this.LILYPAD.RESIDENT.PATH_NEWS = PARAMETER_PATH_NEWS; 
    };
    UPDATE_FROG_LIST(PARAMETER_FROG){
        let COUNTER = Object.keys(this.LILYPAD.FROG_LIST).length;
        this.LILYPAD.FROG_LIST[COUNTER + 1] = PARAMETER_FROG;
    };
    UPDATE_FROG(PARAMETER_FROG, PARAMETER_TAG){
        this.LILYPAD.FROGS[PARAMETER_TAG] = PARAMETER_FROG;
    };
}