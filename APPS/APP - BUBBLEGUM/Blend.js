import Connector_Beetle from "../../CONSOLE/ARTERIES/Connector_Beetle.js";
import PixelScript from "./PixelScript.js";

export default class Blend extends PixelScript{

    constructor(){

        super();

        // =============== //
        // << DEBUGGING >> //
        // =============== //

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'BUBBLEGUM',
            BEETLE_CONFIG_LOCATION: 'Blend.js',
            BEETLE_CONFIG_SCRIPT: 'BLEND',
            BEETLE_CONFIG_TEXT: 'CONVERT PIXEL SCRIPT TO JSON'
        });
    };

    /**
     * ## USER BUBBLE TO JAVASCRIPT
     * 
     * ---------------------------
     * 
     * ### PARAMETERS
     * 
     * @param {string} PARAMETER_DATA {A data String in PixelScript}
     * 
     * ### DETAILS
     * 
     * Translate a PixelScript bubble referring to the Users category to a 
     * javascript object
     * 
     * -------------------------------
     * ### RETURNS -->> {OBJECT} USER DATA
     * @returns {object} User Data
     */
    async BLEND_USERS(PARAMETER_DATA) {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CONVERTING PIXEL SCRIPT TO USER DATA';
        await this.INSTANCE_BEETLE.READ_MODE();

        const DATA_Seperated = this.SNAP(PARAMETER_DATA);
        let CONFIG_User = {
            CATEGORY: '',
            MAME: ''
        };
        let DATA_User = {};

        LOOP_Snapped: for (let INDEX_Seperator = 0; INDEX_Seperator < DATA_Seperated.length; INDEX_Seperator++) {
            const TAG_Snapped = DATA_Seperated[INDEX_Seperator];

            if (this.SQUARES(TAG_Snapped) && TAG_Snapped.indexOf(':') === 0) {
                CONFIG_User.CATEGORY = this.STRIP_CATEGORY(TAG_Snapped);
            };
            if (this.OPEN_INSERTABLE(TAG_Snapped)) {
                CONFIG_User.NAME = this.STRIP_INSERTABLE(TAG_Snapped);
            };
            if (this.CLOSE_INSERTABLE(TAG_Snapped)) {

                let PARAMETER_DATA = TAG_Snapped.split(']');

                for (let INDEX_Data = 0; INDEX_Data < PARAMETER_DATA.length; INDEX_Data++) {
                    const DATA_User_Seperated = PARAMETER_DATA[INDEX_Data];
                    if (!this.OPEN_MEMORY(DATA_User_Seperated)) {
                        CONFIG_User.PASSWORD = DATA_User_Seperated;
                    };
                    if (this.OPEN_MEMORY(DATA_User_Seperated)){
                        DATA_User = await this.GENERATE_DATA(DATA_User_Seperated);
                    };
                };
            };
        };

        // if (Object.keys(this.preparedData.USERS.DATA).length >= 1) {
        //     this.Status.USERS = true;
        // };
        return {
            CONFIG: CONFIG_User,
            DATA: DATA_User
        };
    };
}