import { Renderer } from "../LUNGS/Renderer.js";

export default class M_Routes extends Renderer{

    constructor(){
        super();
    }

    async INITIALISE(){
        return {
            MEMORY: await this.AVAILABLE_ROUTES('MEMORY'),
            ASSETS: await this.AVAILABLE_ROUTES('ASSETS'),
            PLANETS: await this.AVAILABLE_ROUTES('PLANETS'),
            FONTS: await this.AVAILABLE_ROUTES('FONTS'),
            USERS: await this.AVAILABLE_ROUTES('USERS')
        };
    };
}