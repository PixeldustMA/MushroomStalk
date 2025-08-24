import { Renderer } from "../LUNGS/Renderer.js";

// ================================================ //
// ================================================ //
// ==                                            == //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                MEMORY                      == //
// ##                ROUTES                      ## //
// << ------------------------------------------ >> //
// ==       Generate the Session Routes          == //
// ==                                            == //
// ================================================ //
// ================================================ //

export default class Cap_Routes extends Renderer{

    /**
     * ## MEMORY CONSTRUCTOR -- ROUTES
     */
    constructor(){
        super();
    };

    /**
     * ## INITIALISE MEMORY ROUTES
     * 
     * #### === ASYNC FUNCTION ==
     * Initialise mmemory routes used for loading parts of the app
     * 
     * #### --> RETURNS PROMISE
     */
    async INITIALISE(){
        return {
            MEMORY: await this.AVAILABLE_ROUTES('MEMORY'),
            ASSETS: await this.AVAILABLE_ROUTES('ASSETS'),
            // PLANETS: await this.AVAILABLE_ROUTES('PLANETS'),
            // FONTS: await this.AVAILABLE_ROUTES('FONTS'),
            // USERS: await this.AVAILABLE_ROUTES('USERS')
        };
    };

};