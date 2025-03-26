import M_Lilypad from "../MUSHROOM_CAP/Memory_Lilypad.js";
import M_Paths from "../MUSHROOM_CAP/Memory_Paths.js";
import M_Routes from "../MUSHROOM_CAP/Memory_Routes.js";
import M_Templates from "../MUSHROOM_CAP/Memory_Templates.js";
import { Renderer } from "./Renderer.js";

export default class Mushroom_Cap extends Renderer{

    /**
     * ## MUSHROOM CAP CONSTRUCTOR
     */
    constructor(){

        super();

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        this.INSTANCE_M_PATHS = new M_Paths();
        this.INSTANCE_M_ROUTES = new M_Routes();
        this.INSTANCE_M_TEMPLATES = new M_Templates();
        this.INSTANCE_M_LILYPAD = new M_Lilypad();

        // ========== //
        // ## DATA ## //
        // ========== //

        this.SESSION = {
            PATHS: {},
            ROUTES: {},
            TEMPLATES: {},
            POCKETS: {},
            USERS: {},
            CHUNK: {}
        };
    };

    // ================== //
    // ## SESSION FILE ## //
    // ================== // 

    async CREATE_SESSION_FILE(){
        this.RENDERER_PATH = '£££-UserMemory/CUPBOARD/MEMORY/SessionMemory.json';
        this.RENDERER_DATA = this.SESSION;
        await this.SAVE();
    };
    async LOAD_SESSION(){
        this.RENDERER_PATH = await this.#FETCH_SESSION_PATH();
        return JSON.parse(await this.READ());
    };
    async SAVE_SESSION(){
        this.RENDERER_PATH = await this.#FETCH_SESSION_PATH();
        this.RENDERER_DATA = this.SESSION;
        await this.SAVE();
    };
    /**
     * ## LOAD THE APP SESSION FILE
     * 
     * --------------------------
     * 
     * Read previously saved data in the session file
     * 
     * File may be empty if no data has been saved to memory
     */
    async #FETCH_SESSION_PATH(){
        this.RENDERER_PATH = '£££-UserMemory/CUPBOARD/MEMORY/SessionMemory.json';
        return await this.READ();
    };
    
    // ===================== //
    // ## REQUEST SESSION ## //
    // ===================== //

    async REQUEST_SESSION_PATHS(){
        this.SESSION.PATHS = await this.INSTANCE_M_PATHS.INITIALISE();
    };
    async REQUEST_SESSION_ROUTES(){
        this.SESSION.ROUTES = await this.INSTANCE_M_ROUTES.INITIALISE();
    };
    async REQUEST_SESSION_TEMPLATES(){
        this.SESSION.TEMPLATES = await this.INSTANCE_M_TEMPLATES.RUN_MEMORY_TEMPLATES();
    };
    async REQUEST_SESSION_USERS(){
        await this.REQUEST_SESSION_PATHS();
        this.SESSION.USERS = await this.INSTANCE_M_LILYPAD.INITIALISE(
            this.SESSION.PATHS.CUPBOARD.FILES.RESIDENTFROG,
            this.SESSION.PATHS.CUPBOARD.FILES.FROGS,
            this.SESSION.PATHS.CUPBOARD.LILYPAD
        );
    }
}