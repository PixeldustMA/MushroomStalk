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
        await this.REMEMBER();
        console.log(this.SESSION);
        console.log('VALIDATION CHECK')
        const NUMBER_Users = Object.keys(this.SESSION.ROUTES.USERS).length;
        let valid = false;

        UserCheckLoop: for (let index = 0; index < NUMBER_Users.length; index++) {

			let BLOCK_Frog = NUMBER_Users[index];

			if (this.SESSION.USERS[BLOCK_Frog].NAME === PARAMETER_USERNAME && this.SESSION.USERS[BLOCK_Frog].PASSWORD === PARAMETER_PASSWORD) {

                console.log('USERNAME AND PASSWoRD MATCH')
				// this.INSTANCE_MEMORY.SET_ACTIVE_USER(userName);
				valid = true;
				// await this.INSTANCE_Mycology.RUN(false);
				// await this.LOGIN();
				// await this.LOAD("VALIDATION");
				break;
			};
		};

		if (!valid) {

			// let invalid = await this.INSTANCE_MOULD.INVALID_ROUTE();
			// invalid.classList.add('position');
			// document.body.append(invalid);

			setTimeout(() => {
                console.log('ERROR')
				// window.location.reload();				
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
    async ONBOARDING(){
        await this.LOAD('ONBOARDING', 'PROFILE');
    };
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
        await this.REMEMBER();
        const NUMBER_Users = Object.keys(this.SESSION.USERS.USERS).length;
		if (NUMBER_Users.length === 1) {await this.LOAD('WIZARD');};
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

        let STATUS_Logged = false;

        // << GRAB USER LIST >> //

        await this.REMEMBER();
        const COUNT_USERS = Object.keys(this.SESSION.USERS.FROG_LIST).length;

        // << CHECK THE USER LIST >> //
        if (COUNT_USERS >= 2) {
            // << IF THERE ARE USERS... >> //
            // << CHECK LOGIN STATUS >> //

            await this.LOAD('WELCOME', 'WELCOME');
        }
        else {
            // << IF NO USERS >> //

            await this.LOAD('WIZARD', 'PROFILE');
        };
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

        await this.SAVE_SESSION();
        console.log(PARAMETER_PAGE_TAG)
        window.location.href = this.SESSION.ROUTES.MEMORY[PARAMETER_PAGE_CATEGORY][PARAMETER_PAGE_TAG];
    };
    
}