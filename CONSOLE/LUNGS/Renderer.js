// ================================================ //
// ================================================ //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                                            == //
// ==                  MAIN                      == //
// ##                RENDERER                    ## //
// ==          Access the Main Process           == //
// ==                                            == //
// ================================================ //
// ================================================ //

/**
 * ## RENDERER
 * 
  * ---------------------------
  * 
 * #### Used for the Main structure of the app
 *
 * Access the main process for functions that are used in the backbone of the app
 * 
 * Invoke Node processes
 */
class Renderer{

    /**
     * ## RENDERER CONSTRUCTOR
     * 
     * ------------------------
     * 
     * @param {string} PARAMETER_PATH {MUST BE FORMATTED BEFORE USE UNLESS INVOKING PATH FORMATTING
     * /-/ MAY BE LEFT EMPTY OR NOT CALLED AT ALL}
     * @param {*} PARAMETER_DATA {MUST BE IN THE CORRECT FORMAT FOR THE USAGE /-/
     *  MAY BE LEFT EMPTY OR NOT CALLED AT ALL}
     */
    constructor ( 
        PARAMETER_PATH = "", 
        PARAMETER_DATA = {}, 
        PARAMETER_ORIGIN = "", 
        PARAMETER_DESTINATION = ""
    ) 
    {
        // =============== //
        // << DEBUGGING >> //
        // =============== //

		this.DEBUG_LOCATION = 'Renderer.js';
		this.DEBUG_CATEGORY = 'MAIN';
		this.DEBUG_SCRIPT = 'RENDERER';

        // ================ //
        // << PARAMETERS >> //
        // ================ //

        this.RENDERER_PATH = PARAMETER_PATH;
        this.RENDERER_DATA = PARAMETER_DATA;
        this.RENDERER_PATH_ORIGIN = PARAMETER_ORIGIN;
        this.RENDERER_PATH_DESTINATION = PARAMETER_DESTINATION
    };

    // =============== //
    // ## DEBUGGING ## //
    // =============== //
    
    /**
     * ## CHECK DEBUG SETTINGS
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * @param {string} category {Name of the app area the request is from}
     * @param {string} script {Name of the script that the request is from}
     * 
     * Check if the relevant settings for debug messages are active
     * 
     * Determines if a nessage should be posted
     * 
     * *Relies on settings in the main file*
     * 
     * ## RETURNS --> BOOL
     */
    async DEBUG(PARAMETER_KATEGORY, PARAMETER_SKRIPT) {
        return await window.ipcRender.ACCESS_WINDOW_Debug(PARAMETER_KATEGORY, PARAMETER_SKRIPT);
    };

    // ================== //
    // ## FILE ACTIONS ## //
    // ================== //
    
    /**
     * ## SAVE A MESSAGE TO THE SET FILE PATH
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Uses whatever has been set as this.RENDERER_PATH and this.data
     * 
     * Saves this.data to the given path
     * 
     * **If a file does not exist it will be created**
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} FILE CONTENTS
     */
    async SAVE() {
        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| SAVING TO FILE |||--------');
            console.log(`The Path being saved to is ${this.RENDERER_PATH}`);
            console.log(`The data being saved is ${this.data}`);
            console.log('--------||| SAVING TO FILE |||--------');
        };
        return await window.ipcRender.ACCESS_STALK_Save(this.RENDERER_PATH, this.RENDERER_DATA);
    };
    /**
     * ## READ THE FILE AT THE SET FILE PATH
     * 
     * --------------------------------------
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Read the file that exists at this.RENDERER_PATH
     * 
     * Return the contents of the file
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} FILE CONTENTS
     */
    async READ() {
        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| READING FROM FILE |||--------');
            console.log(`The Path being read from is ${this.RENDERER_PATH}`);
            console.log('--------||| READING FROM FILE |||--------');
        };
        const DATA_File = await window.ipcRender.ACCESS_STALK_Read(this.RENDERER_PATH);

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log(`RETURNED DATA IS -----`);
            console.log(DATA_File);
        };
        return DATA_File;
    };
    /**
     * ## FORMAT A RELATIVE PATH
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * @param {string} destination {A formatted path}
     * @param {string} origin {A formatted path}
     * 
     * Copy a file from the origin path to the destination path
     * 
     * The original file will still exist in its original form
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} NEW FILE CREATED
     */
    async COPY() {

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| COPYING FILE |||--------');
            console.log(`${origin} is being copied to new location: ${destination}`);
            console.log('--------||| COPYING FILE |||--------');
        };

        return window.ipcRender.ACCESS_STALK_CopyFile(this.RENDERER_PATH_ORIGIN, this.RENDERER_PATH_DESTINATION);
    };
    /**
     * ## REMOVE A FILE
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Remove the file at this.RENDERER_PATH
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} REMOVED FILE 
     */
    async REMOVE() {

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| REMOVING A FILE |||--------');
            console.log(`A file is being deleted at ${this.RENDERER_PATH}`);
            console.log('--------||| REMOVING A FILE |||--------');
        };
        return await window.ipcRender.ACCESS_STALK_RemoveFile(this.RENDERER_PATH);

    };
    /**
     * ## CHECK EXISTANCE OF A FILE OR FOLDER
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Given the setting of this.RENDERER_PATH, determine if anything exists at this location
     * 
     * If there is a file or a folder, return true
     * 
     * Otherwise, return false
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} BOOL
     */
    async CHECK_FILE(){

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| LOADING -- CHECKING EXISTANCE |||--------');
            console.log(`Checking if a file or folder exists at ${this.RENDERER_PATH}`);
            console.log('--------||| LOADING -- CHECKING EXISTANCE |||--------');
        };

        return await window.ipcRender.ACCESS_LOAD({
            PARAMETER_MODE: 'CHECK',
            PARAMETER_PATH: this.RENDERER_PATH
        });
    };
    
    // =========== //
    // ## PATHS ## //
    // =========== //
    
    /**
     * ## FORMAT A RELATIVE PATH
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Create a full path from a given relative path
     * 
     * This will link to the app memory, or to the app contents themselves
     * 
     * This depends on language of relative path
     * 
     * ### SETTINGS
     * 
     * - USERNAME will always be converted to the active profile name
     * - £££-UserMemory will always be converted to either testing environment
     * or user memory main folder
     * - Both of these will go to the app memory folder on the user's machine
     * - Failing to inlcude £££-UserMemory will create a path to the app contents instead of
     * the memory
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} TEXT FILE CONTENTS
     */
    async FETCH_PATH() {
        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| FORMATTING PATH |||--------');
            console.log(`${this.RENDERER_PATH} is being turned into a formatted version`);
            console.log('--------||| FORMATTING PATH |||--------');
        };
        return await window.ipcRender.ACCESS_PATH_Retrieve(this.RENDERER_PATH);
    };
    /**
     * ## FETCH A ROUTE FILE
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * @param {string} tag {Identifier for route file} 
     * 
     * Fetch one of the route files included within the app or the memory
     * 
     * ### SETTINGS
     * 
     * - *FONTS*
     * - *PLANETS*
     * - *USERS*
     * - *ASSETS*
     * - *BASE*
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} ROUTE FILE OBJECT
     */
    async AVAILABLE_ROUTES(tag) {
        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| SEARCHING FOR AVAILABLE ROUTE FILES |||--------');
            console.log(`The following route file is being requested: ${tag}`);
            console.log('--------||| SEARCHING FOR AVAILABLE ROUTE FILES |||--------');
        };
        // console.log('AVAILABLE ROUTE FILE SEARCH');
        // console.log(tag)
        return await window.ipcRender.ACCESS_PATH_Route(tag);
    };
    /**
     * ## CHECK IF FILE OR FOLDER
     * ---------------------------
     * 
     * Determine if the path set in the constructor is a file or a folder
     * 
     * ---------------------------
     * ### RETURNS {FILE or FOLDER}
     * @returns {string}
     */
    async PATH_STATUS() {
        return await window.ipcRender.ACCESS_PATH_Status(this.RENDERER_PATH);
    };
    // ============= //
    // ## FOLDERS ## //
    // ============= //

    /**
     * ## OPEN A FOLDER SELECT DIALOGUE
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Generate a folder dialogue pop up
     * 
     * This will allow the user to choose any folder on the host machine
     * 
     * The path will be returned
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} SELECTED FOLDER PATH
     */
    async FOLDER_SELECT() {
        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| SELECTING A FOLDER |||--------');
            console.log(`A folder Select Pop-up is being generated`);
            console.log('--------||| SELECTING A FOLDER |||--------');
        };
        return await window.ipcRender.ACCESS_FOLDER_SelectFolder();
    };
    /**
     * ## READ THE CONTENTS OF A FOLDER
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Access a folder given by 'this.RENDERER_PATH'
     * 
     * Read the files and folders in the folder
     * 
     * Return the names of the contents as an array
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} FOLDER CONTENTS ARRAY
     */
    async READ_FOLDERS() {

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| READING A FOLDER |||--------');
            console.log(`${this.RENDERER_PATH} is having its contents read`);
            console.log('--------||| READING A FOLDER |||--------');
        };

        return await window.ipcRender.ACCESS_FOLDER_ReadFolder(this.RENDERER_PATH);
    };
    /**
     * ## CREATE A FOLDER
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Create a new folder at this.RENDERER_PATH
     * 
     * If the folder already exists, this will return an error
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} NEW FOLDER CREATED
     */
    async CREATE_FOLDER() {

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| CREATING A FOLDER |||--------');
            console.log(`A folder is being created at ${this.RENDERER_PATH}`);
            console.log('--------||| CREATING A FOLDER |||--------');
        };

        return await window.ipcRender.ACCESS_FOLDER_NewFolder(this.RENDERER_PATH);
    };
    /**
     * ## DELETE A FOLDER
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Delete a folder from this.RENDERER_PATH
     * 
     * The folder must exist
     * 
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} FOLDER DELETED
     */
    async DELETE_FOLDER() {

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| DELETING A FOLDER |||--------');
            console.log(`A folder is being deleted at ${this.RENDERER_PATH}`);
            console.log('--------||| DELETING A FOLDER |||--------');
        };

        return await window.ipcRender.ACCESS_FOLDER_DeleteFolder(this.RENDERER_PATH);
    };
    /**
     * ## COPY A FOLDER
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Copy a folder at this.RENDERER_PATH to the destination path
     * 
     * Both paths must be properly formatted
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} NEW FOLDER CREATED
     */
    async COPY_FOLDER() {

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| COPYING FOLDER |||--------');
            console.log(`${this.RENDERER_PATH_ORIGIN} is being copied to new location: ${this.RENDERER_PATH_DESTINATION}`);
            console.log('--------||| COPYING FOLDER |||--------');
        };

        return await window.ipcRender.ACCESS_FOLDER_CopyFolder(this.RENDERER_PATH_ORIGIN, this.RENDERER_PATH_DESTINATION)
    };

    // ============= //
    // ## WINDOWS ## //
    // ============= //
    
    /**
     * ## CLOSE THE APPLICATION
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Close the window
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} WINDOW GO AWAY
     */
    async CLOSE() {
        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| CLOSING THE WINDOW |||--------');
        };
        return await window.ipcRender.ACCESS_WINDOW_Quit();
    };
    /**
     * ## MINIMISE THE APPLICATION
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Minimise the window
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} WINDOW GO SMALL
     */
    async SMALL() {
        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| MINIMISING THE WINDOW |||--------');
        };
        return await window.ipcRender.ACCESS_WINDOW_Smallify();
    };
    /**
     * ## MAXIMISE THE APPLICATION
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Maximise the window
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} WINDOW GO BIG
     */
    async BIG() {
        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| MAXIMISING THE WINDOW |||--------');
        };
        return await window.ipcRender.ACCESS_WINDOW_Bigify();
    };

    // ============================= //
    // ## IMPORTING AND EXPORTING ## //
    // ============================= //

    /**
     * ## READ A BACK UP FILE
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * Read a given user file in the context of a back up file
     * 
     * Return the contents as a JSON parsed object
     *
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} BACK UP FILE CONTENTS
     */
    async READ_BACKUP_FILE(PARAMETER_BACKUP) {

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| READING A BACK UP FILE |||--------');
            console.log(`Reading user data at ${PARAMETER_BACKUP}`);
            console.log('--------||| READING A BACK UP FILE |||--------');
        };

        this.RENDERER_PATH = PARAMETER_BACKUP;
        return await this.READ();
    };
    /**
     * ## EXPORT ARCHIVE TO CSV FILES
     * 
     * --------------------------------------
     * 
     * ## ==> ASYNC FUNCTION <== ##
     * 
     * @param {string} requestedPath {Formatted path where the CSV files should be saved}
     * Read the archive file within the user's profile
     * 
     * Export the contents of the archive file to CSV files
     * 
     * **The given path should be the back up location**
     * ---------------------------------------
     * ## RETURNS --> {PROMISE} CSV FILES
     */
    async EXPORT_ARCHIVE_TO_CSV(PARAMETER_BACKUP) {

        if(await this.DEBUG(this.DEBUG_CATEGORY, this.DEBUG_SCRIPT)) {
            console.log('--------||| EXPORTING ARCHIVE |||--------');
            console.log(`Exporting archive data to CSV files at ${PARAMETER_BACKUP}`);
            console.log('--------||| EXPORTING ARCHIVE |||--------');
        };

        return await window.ipcRender.ACCESS_Archive('EXPORT', {KEY_PATH: PARAMETER_BACKUP});
    };
    async PIXELATE_ARCHIVE() {
        return await window.ipcRender.ACCESS_Archive('PIXELATE', {});
    };

}

export { Renderer }