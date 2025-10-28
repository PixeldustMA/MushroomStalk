import { Renderer } from "../../../CONSOLE/LUNGS/Renderer.js";

export default class Profiles extends Renderer{

    constructor({
        PROFILE_CONFIG_PATH = 0,
        PROFILE_CONFIG_USERNAME = 0,
        PROFILE_CONFIG_DATA = 0
    }){
        super()
        this.PATH_PROFILE = PROFILE_CONFIG_PATH;
        this.USERNAME = PROFILE_CONFIG_USERNAME;
        this.USER_DATA = PROFILE_CONFIG_DATA;
    };

    async ADD_PROFILE(){
        this.RENDERER_PATH = `${this.PATH_PROFILE}/${this.USERNAME}.json`;
        this.RENDERER_DATA = this.USER_DATA;
        await this.SAVE();
    };
}