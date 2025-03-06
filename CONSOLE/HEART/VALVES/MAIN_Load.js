const fs = require('fs');
const STALK = require('./MAIN_Stalk');
const PATHWAYS = require('./MAIN_Pathways');
const DISPLAY = require('./MAIN_Note');
module.exports = class MAIN_Load {

    constructor(){
        this.INSTTANCE_STALK = new STALK();
        this.INSTANCE_PATHWAYS = new PATHWAYS();
        this.INSTANCE_ALERT = new DISPLAY();

        this.MODE = '';
        this.PATH_FILE = '';
        this.STATUS_TEST = ''
        this.PATH_APPLICATION = ''

    };

    async INITIALISE({
        PARAMETER_MODE = 0, 
        PARAMETER_PATH = 0, 
        PARAMETER_DETAILS = 0, 
        PARAMETER_USERNAME = 0, 
        PARAMETER_STATUS = 0, 
        PARAMETER_APP}) {

            console.log('INITIALISING!!!!!!!!')
            console.log(PARAMETER_MODE)
        this.MODE = PARAMETER_MODE;
        this.PATH_FILE = PARAMETER_PATH;
        this.DATA = PARAMETER_DETAILS;
        this.USERNAME = PARAMETER_USERNAME;
        this.STATUS_TEST = PARAMETER_STATUS;
        this.PATH_APPLICATION = PARAMETER_APP

        switch (this.MODE) {
            case 'READ':
                return await this.MAIN_LOAD_READ(PARAMETER_PATH);
            case 'WRITE':
                return await this.MAIN_LOAD_WRITE();
            case 'CHECK':
                return await this.MAIN_LOAD_CHECK();
            case 'PATH':
                return await this.MAIN_LOAD_PATH();
            case 'FOLDER':
                return await this.MAIN_LOAD_FOLDER();
            case 'COPY':
                return await this.MAIN_LOAD_COPY();
            case 'SEARCH':
                return await this.MAIN_LOAD_SEARCH_FOLDER();
            default:
                break;
        }
    };
    /**
     * ## LOADING - READ FILE
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {string} path {Formatted path}
     * 
     * ### DETAILS
     * 
     * Read the contents of a file during the loading process
     * 
     * -------------------------
     * ### RETURN -->> {FILE CONTENTS}
     */
    async MAIN_LOAD_READ(PARAMETER_PATH) {
        console.log('LOADING READING LOADING READING')
        this.INSTANCE_ALERT.ALERT_FUNCTION('LOAD', {TEXT_FUNCTION_NAME: 'READING', PARAMETER_PATH: this.PATH_FILE})
        return this.INSTTANCE_STALK.READ(PARAMETER_PATH);
    };
    /**
 * ## LOADING - WRITE A FILE
 * 
 * -----------------------------------
 * 
 * ### PARAMETERS
 * @param {*}  {Recieved from Access File}
 * @param {string} path {A formatted path to a file or location}
 * @param {*} data {Writable data that will be made the file contents}
 * 
 * ### DETAILS
 * 
 * Write to a file or create a file and write to it during the loading process
 * -------------------------
 * ### RETURN -->> {ARCHIVE DATA ||| NONE}
 */
    async MAIN_LOAD_WRITE() {
        this.INSTANCE_ALERT.ALERT_FUNCTION('LOAD', {TEXT_FUNCTION_NAME: 'WRITING', PARAMETER_PATH: this.PATH_FILE, PARAMETER_DETAILS: this.DATA})
        return this.INSTTANCE_STALK.WRITE(this.DATA, this.PATH_FILE, this.STATUS_TEST);
    };
    /**
     * ## LOADING - CHECK EXISTANCE
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {*}  {Recieved from Access File}
     * @param {string} path {A formatted path to a file}
     * 
     * ### DETAILS
     * 
     * Check the existance of a file or folder during the loading proceses
     * 
     * -------------------------
     * ### RETURN -->> {ARCHIVE DATA ||| NONE}
     */
    async MAIN_LOAD_CHECK() {
        this.INSTANCE_ALERT.ALERT_FUNCTION('LOAD', {TEXT_FUNCTION_NAME: 'CHECKING CONTENTS', PARAMETER_PATH: this.PATH_FILE})
        return fs.existsSync(this.PATH_FILE);
    };
    /**
     * ## LOADING - FORMAT PATH
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {*}  {Recieved from Access File}
     * @param {string} PARAMETER_PATH {A relative path with correct codes}
     * @param {string} userName {The name of the active profile}
     * 
     * ### DETAILS
     * 
     * Format a path from a relative path during the loading process
     * 
     * -------------------------
     * ### RETURN -->> {ARCHIVE DATA ||| NONE}
     */
    async MAIN_LOAD_PATH() {
        this.INSTANCE_ALERT.ALERT_FUNCTION('LOAD', {TEXT_FUNCTION_NAME: 'LOADING PATH', PARAMETER_PATH: this.PATH_FILE})
        this.INSTANCE_PATHWAYS.GENERATE_PATH(this.PATH_FILE, this.STATUS_TEST, this.PATH_APPLICATION);
    };
    /**
     * ## LOADING - CREATE FOLDER
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {*}  {Recieved from Access File}
     * @param {string} path {Formatted path to a folder}
     * -------------------------
     * 
     * ### DETAILS
     * 
     * Create a folder during the loading process
     * 
     * ### RETURN -->> {ARCHIVE DATA ||| NONE}
     */
    async MAIN_LOAD_FOLDER() {
        this.INSTANCE_ALERT.ALERT_FUNCTION('LOAD', {TEXT_FUNCTION_NAME: 'LOADING FOLDER', PARAMETER_PATH: this.PATH_FILE})
        return fs.mkdirSync(this.PATH_FILE);
    };
    /**
     * ## LOADING - COPY
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {*}  {Recieved from Access File}
     * @param {string} sourcePath {Formatted path containing file or folder}
     * @param {string} destinationPath {Formatted path to copy the file or folder to}
     * 
     * ### DETAILS
     * 
     * Copy a folder or file during the loading process
     * 
     * -------------------------
     * ### RETURN -->> {ARCHIVE DATA ||| NONE}
     */
    async MAIN_LOAD_COPY() {
        this.INSTANCE_ALERT.ALERT_FUNCTION('LOAD', {TEXT_FUNCTION_NAME: 'KOPY', PARAMETER_PATH: [this.PATH_FILE[0], this.PATH_FILE[1]]})
        return fs.copyFileSync(this.PATH_FILE[0], this.PATH_FILE[1], 2);
    };
    /**
     * ## LOADING - FOLDER CONTENTS
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {*}  {Recieved from Access File}
     * @param {string} folderPath {Formatted folder path}
     * 
     * ### DETAILS
     * 
     * Fetch the contents of a folder during the loading process
     * 
     * -------------------------
     * ### RETURN -->> {ARCHIVE DATA ||| NONE}
     */
    async MAIN_LOAD_SEARCH_FOLDER() {
        this.INSTANCE_ALERT.ALERT_FUNCTION('LOAD', {TEXT_FUNCTION_NAME: 'READ FOLDER', PARAMETER_PATH: this.PATH_FILE})
        return this.INSTTANCE_STALK.FOLDER(this.PATH_FILE);
    };
}