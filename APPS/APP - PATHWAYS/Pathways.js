import Connector_Beetle from "../../CONSOLE/ARTERIES/Connector_Beetle.js";
import Mushroom_Cap from "../../CONSOLE/LUNGS/MushroomCap.js";

export default class Pathways extends Mushroom_Cap{

    constructor({
        PATHWAYS_CONFIG_TAG = 0,
        PATHWAYS_CONFIG_SECTION = 0,
        PATHWAYS_CONFIG_SUBSECTION = 0,
        PATHWAYS_CONFIG_MEMORY_SET = 0
    }) {

        super();

        // ============== //
        // << SETTINGS >> //
        // ============== //

        this.MEMORY_SET = PATHWAYS_CONFIG_MEMORY_SET;

        // ========== //
        // << DATA >> //
        // ========== //

        this.ROUTES_ACTIVE = {};
        this.ROUTE_TAG = PATHWAYS_CONFIG_TAG;

        // ========== //
        // << KEYS >> //
        // ========== //

        this.KEY_SECTION = PATHWAYS_CONFIG_SECTION;
        this.KEY_SUBSECTION = PATHWAYS_CONFIG_SUBSECTION;
        this.KEY_NAME = PATHWAYS_CONFIG_TAG;

        // =============== //
        // << INSTANCES >> //
        // =============== //

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'PATHWAYS',
            BEETLE_CONFIG_LOCATION: 'STALK_Routes.js',
            BEETLE_CONFIG_SCRIPT: 'ROUTES',
            BEETLE_CONFIG_TEXT: 'SETTING UP PATHWAYS FILE'
        });
    };

    // ============ //
    // ## ROUTES ## //
    // ============ //

    /**
     * ## INITIALISE THE ROUTE SETTINGS
     * 
     * -------------------
     * 
     * ### ==>> ASYNC FUNCTION <<== ##
     * 
     * Set all necessary settings for the functioning of the pathways class
     * 
     * Retrieve requested route file
     * 
     * -------------------
     * ## RETURNS -->> {PROMISE} LOADED ROUTE CLASS
     */
    async INIT() {

        await this.INSTANCE_BEETLE.READ_MODE();
        await this.REMEMBER();

        await this.LOAD_SET();
        if (!this.#CHECK_NULL(this.KEY_SUBSECTION)) {
            await this.KEY_ROUTE_GENERATOR(false)
        } 
        else {await this.KEY_ROUTE_GENERATOR(true)};
        return await this.ROUTE();
    };
    async LOAD_SET() {
        this.ROUTES_ACTIVE = this.SESSION.ROUTES[this.MEMORY_SET];
    };
    async KEY_ROUTE_GENERATOR(PARAMETER_SUBSECTION_FLAG) {
        if (!PARAMETER_SUBSECTION_FLAG) {
            this.KEY_ROUTE = this.ROUTES_ACTIVE[this.KEY_SECTION][this.KEY_NAME];
        }
        else {
            this.KEY_ROUTE = this.ROUTES_ACTIVE[this.KEY_SECTION][this.KEY_SUBSECTION][this.KEY_NAME];
        }
    };
    /**
     * ## ACCESS TO ROUTE CLASS
     * 
     * -------------------
     * 
     * ### ==>> ASYNC FUNCTION <<== ##
     * 
     * Create a route based on the given settings object
     * 
     * Accesses the other methods in the class
     * 
     * -------------------
     * ## RETURNS -->> {PROMISE} PATH
     */
    async ROUTE() {

        await this.GENERATE_DEBUG('CREATING A FORMATTED PATH');
        this.RENDERER_PATH = this.KEY_ROUTE;
        return await this.FETCH_PATH();
    };

    // ============= //
    // ## UTILITY ## //
    // ============= //

    /**
     * ## DETERMINE VALIDITY OF PROPERTY
     * 
     * -------------------
     * 
     * ### ==>> ASYNC FUNCTION <<== ##
     * 
     * #### PARAMETERS
     * @param {string} property { **NAME OF PROPERTY BEING CHECKED** }
     * 
     * Check a route object setting and determine if it is 0 or 1
     * 
     * Return true or false depending on this finding
     * 
     * -------------------
     * ## RETURNS -->> {BOOL} on ||| off
     */
    async #CHECK_NULL(property) {

        await this.GENERATE_DEBUG('CHECKING ACTIVATION OF ROUTE STYLES');

		if (property != 0) {return true;}
        return false;
	};

    // =========== //
    // ## DEBUG ## //
    // =========== //

    async GENERATE_DEBUG(PARAMETER_MESSAGE) {
        this.INSTANCE_BEETLE.DAISY_MESSAGE = PARAMETER_MESSAGE;
        await this.INSTANCE_BEETLE.READ_MODE();
    }

}