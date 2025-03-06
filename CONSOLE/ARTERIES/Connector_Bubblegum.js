import Blend from "../../APPS/APP - BUBBLEGUM/Blend.js";
import Pixelate from "../../APPS/APP - BUBBLEGUM/Pixelate.js";
import Connector_Beetle from "./Connector_Beetle.js";

export default class Connector_Bubblegum {

    /**
     * ## BUBBLEGUM CONNECTOR CONSTRUCTOR
     */
    constructor(){

        // =============== //
        // << DEBUGGING >> //
        // =============== /

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'BUBBLEGUM',
            BEETLE_CONFIG_LOCATION: 'Connector_Bubblegum.js',
            BEETLE_CONFIG_SCRIPT: 'BUBBLEGUM',
            BEETLE_CONFIG_TEXT: 'LOADING BUBBLEGUM CONNECTOR'
        });

        // =============== // 
        // << INSTANCES >> //
        // =============== //

        this.INSTANCE_BLEND = new Blend();
        this.INSTANCE_PIXELATE  = new Pixelate({});

        // ========== //
        // << DATA >> //
        // ========== //

        this.RESULT = {USERS: {}};
        this.PIXELSTRINGS = {USERS: ""};
    };

    INITIALISE(){};

    /**
     * ## PIXEL SCRIPT TO JAVASCRIPT
     * 
     * -----------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMETER_PIXEL_STRING {A pixel script string}
     * 
     * ### DETAILS
     * Turn Pixel Script into a java script object seperated by category
     * 
     * The input string must be valid Pixel Script
     * 
     * --------------------------------
     * ## RETURN -->> {OBJECT} A Memory Object
     */
    async BLEND(PARAMETER_PIXEL_STRING){

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CONVERTING PIXEL SCRIPT FILE TO JAVASCIPT';
        await this.INSTANCE_BEETLE.READ_MODE();

        const DATA_Sections = this.INSTANCE_PIXELSCRIPT.DOT_SNAP(PARAMETER_PIXEL_STRING);    
        const DATA_Categories = Object.keys(DATA_Sections);

        LOOP_Categories: for (let INDEX_Section = 0; INDEX_Section < DATA_Categories.length; INDEX_Section++) {

            const TAG_Category = DATA_Categories[INDEX_Section];

            //. Add new Memory DATA_Categories here if necessary
            if (TAG_Category === 'USERS') {
                this.RESULT.USERS = await this.INSTANCE_BLEND.BLEND_USERS(DATA_Sections[TAG_Category]);
            };
            // if (TAG_Category === 'EXPLORER') {
            //     await this.BLEND_EXPLORER(sections[TAG_Category]);
            // };
            // if (TAG_Category === 'ARCHIVE') {
            //     await this.BLEND_ARCHIVE(sections[TAG_Category]);
            // };
            // if (TAG_Category === 'ROUTES') {
            //     await this.BLEND_ROUTES(sections[TAG_Category]);
            // };
            // if (TAG_Category === 'SETTINGS') {
            //     await this.BLEND_SETTINGS(sections[TAG_Category]);
            // };
            // if (TAG_Category === 'MEMORY_EXP') {
            //     await this.BLEND_EXPLORER_MEMORY(sections[TAG_Category]);
            // };
            // if (TAG_Category === 'MEMORY_ARC') {
            //     await this.BLEND_ARCHIVE_MEMORY(sections[TAG_Category]);
            // };
        };
        return this.RESULT;
    };
    /**
     * ## JAVASCRIPT TO PIXEL SCRIPT
     * 
     * ------------------------------
     * 
     * Create a string in the Pixel Script language based on a file
     * containing Javascript or Text
     * 
     * ------------------------------
     * ## RETURN -->> {PIXEL SCRIPT STRING}
     */
    async PIXELATE(){

        await this.INSTANCE_PIXELATE.REMEMBER();

        // << USERS >> //
        const PIXELATED_Resident = await this.INSTANCE_PIXELATE.PIXELATE_RESIDENT();
        const PIXELATED_Users = await this.INSTANCE_PIXELATE.PIXELATE_USERS();
        this.PIXELSTRINGS.USERS = `${PIXELATED_Resident}${PIXELATED_Users}`;

    };


}