import Connector_Mycology from "../ARTERIES/Connector_Mycology.js";
import Mushroom_Cap from "./MushroomCap.js";

export default class Stalk extends Mushroom_Cap {

    /**
     * ## STALK CONSTRUCTOR
     */
    constructor(){
        super();
    };

    // =========== //
    // ## FROGS ## //
    // =========== //

    /**
	 * ## VALIDATE USERS
	 * 
	 * -------------------
	 * 
	 * - Check the given username and password
	 * - Send to validation if they match active frogs
	 * - Send to the no profile found page if they do not match
	 * 
	 * -------------------
     * #### --> RETURNS NEW PAGE {VALIDATION || NO PROFILE}
	 */
    async VALIDATE(PARAMETER_USERNAME, PARAMETER_PASSWORD) {

        await this.REQUEST_SESSION_PATHS();
        await this.REQUEST_SESSION_USERS();
        const NUMBER_Users = Object.keys(this.SESSION.USERS.DATA.USERS);
        let valid = false;

        UserCheckLoop: for (let index = 0; index < NUMBER_Users.length; index++) {

			let BLOCK_Frog = NUMBER_Users[index];
            
			if (this.SESSION.USERS.DATA.USERS[BLOCK_Frog].USERNAME === PARAMETER_USERNAME && this.SESSION.USERS.DATA.USERS[BLOCK_Frog].PASSWORD === PARAMETER_PASSWORD) {
                let INSTANCE_MYCOLOGY = new Connector_Mycology(await this.REQUEST_SESSION_PATHS(), PARAMETER_USERNAME);
                await INSTANCE_MYCOLOGY.MYCOLOGY_WAR();
                await INSTANCE_MYCOLOGY.MYCOLOGY_SETTINGS();
				valid = true;
				await this.LOAD("TITLE", 'WELCOME'); 
				break;
			};
		};
		if (!valid) {
			setTimeout(() => {
				window.location.reload();				
			}, 2000);
		};
    };
    /**
	 * ## LOAD ONBOARDING
	 * 
	 * -------------------
	 * 
	 * - Load the onboarding screen
	 * 
	 * -------------------
     * #### --> RETURNS NEW PAGE {ONBOARDING}
	 */
    async ONBOARDING(){await this.LOAD('ONBOARDING', 'PROFILE');};
    /**
	 * ## CHECK FOR FIRST TIME
	 * 
	 * -------------------
	 * 
	 * - Check the frog list for users
	 * - If there are no active users, load the wizard screen
	 * 
	 * -------------------
     * #### --> RETURNS NEW PAGE {WIZARD}
	 */
    async FIRST() {
        await this.REQUEST_SESSION_APP_SETTINGS();
        const COUNT_USERS = this.SESSION.SETTINGS.MUSHROOM.USER_COUNT;
		if (COUNT_USERS.length === 1) {await this.LOAD('WIZARD');};
    };
    /**
     * ## CHECK LOGIN STATUS
     * 
     * --------------------------------------
     * 
     * ### ==>> ASYNC FUNCTION <<== ##
     * 
     * Check resident frog file
     * 
     * Read stay logged in flag
     * 
     * If true - go to main menu
     * 
     * If false - Go to login screen
     * 
     * If no resident is set, flag is set automatically to false
     * 
     * -------------------------------------
     * ### RETURNS -->> {PROMISE} New screen
     */
    async CHECK_LOGIN() {
        await this.REQUEST_SESSION_APP_SETTINGS();
        const COUNT_USERS = this.SESSION.SETTINGS.MUSHROOM.USER_COUNT;
        if (COUNT_USERS >= 1) {await this.LOAD('WELCOME', 'WELCOME');}
        else {await this.LOAD('WIZARD', 'PROFILE');};
    };   

    // ===================== //
    // ## WINDOW SETTINGS ## //
    // ===================== //

    /**
     * ## LOAD NEW PAGE
     * 
     * -----------------
     * 
     * ### PARAMETERS
     * 
     * ----------------
     * 
     * @param {string} PARAMETER_PAGE_TAG {NAME OF PAGE TO BE LOADED}
     * 
     * ### DETAILS
     * 
     * -----------
     * 
     * Load a new page in the currently active window based on the tag
     * 
     * Page must exist in the app memory for this function to work 
     */
    async LOAD(PARAMETER_PAGE_TAG, PARAMETER_PAGE_CATEGORY) {  
        await this.REQUEST_SESSION_ROUTES();
        this.RENDERER_PATH = this.SESSION.ROUTES.MEMORY[PARAMETER_PAGE_CATEGORY][PARAMETER_PAGE_TAG];
        window.location.href = await this.PATH_POCKET();
    };
    
};