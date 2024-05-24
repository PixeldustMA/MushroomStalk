import { Renderer } from "../PLATYPUS/Renderer.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//        Load User Settings         //
//          Create Paths             //
// ================================= //

/**
 * CREATE A PATH
 */
class pathways extends Renderer{

    /**
     * /-/ TAG -> THE NAME OF THE REQUESTED ROUTE
     * /-/ SECTION -> THE SECTION THE TAG IS IS
     * /-/ SUBSECTION -> THE TIDIED SECTION THE TAG IS NESTLED IN
     * @param {object} REQUEST
     */
    constructor({TAG, SECTION, SUBSECTION, CUSTOM, PLANET, ASSET, USER}){

        super();
    
        this.nameOfRoute = TAG.toUpperCase();
        this.sectionTag = SECTION.toUpperCase();
        this.subsection = SUBSECTION;
        this.custom = CUSTOM;
        this.planet = PLANET;
        this.asset = ASSET;
        this.userTag = USER;

        this.routeKey = "";
        this.routePath = "";
        this.routeObject = {};
    }; 

    // == ACCESS == //
    /**
     * ACCESS TO THE ROUTE CLASS - CREATE A  ROUTE BASED ON TAG
     * @returns -- PROMISE -- PATH
     */
    async ROUTE() {
        this.routePath = this.routeKey;
        return await this.#CREATE_PATH();
    };
    /**
     * CREATE A FORMATTED PATH BASED ON GIVEN INFORMATION
     * @returns -- PROMISE -- PATH
     */
    async #CREATE_PATH() {
        this.path = this.routePath;
        return await this.FETCH_PATH();
    };

    // == UTILITY == //
    /**
     * DETERMINE IS PROPERTY IS VALID
     * @param property 
     * @returns {boolean} RETURNS TRUE IF PROPERTY IS VALID
     */
    #CHECK_NULL(property) {
		if (property != 0) {
			return true;
		}
		return false;
	};
    /**
     * SET UP THE ROUTE SYSTEM FOR USE
     */
    async SETUP() {
        if (this.asset !== 0) {
            await this.#READ_ASSETS();
            this.routeKey = this.routeObject[this.sectionTag][this.subsection][this.nameOfRoute];
        }
        else if (this.userTag !== 0) {
            await this.#READ_USERS();
            this.routeKey = this.routeObject[this.nameOfRoute];
        }
        else if (this.planet !== 0) {
            await this.#READ_PLANET();
            if (this.#CHECK_NULL(this.subsection)) {
                this.subsection = this.subsection.toUpperCase();
                this.routeKey = this.routeObject[this.sectionTag][this.subsection][this.nameOfRoute];
            }
            else if (this.#CHECK_NULL(this.custom)) {
                return await this.#CUSTOM_ROUTE(this.custom.Tag, this.custom.tagArray);
            }
            else {
                this.routeKey = this.routeObject[this.sectionTag][this.nameOfRoute];
            };
            return this.routeKey
        }
        else if (this.#CHECK_NULL(this.custom)) {
            return await this.#CUSTOM_ROUTE(this.custom.Tag, this.custom.tagArray);
        }
        else {
            await this.#LOAD_ROUTES();
            this.routeKey = this.routeObject[this.sectionTag][this.subsection][this.nameOfRoute]; 
        };
        return this.routeKey;
    };

    // == ROUTE SETTINGS == //
    /**
     * READ THE MEMORY TO GET AVAILABLE ROUTES
     * @returns -- PROMISE -- LIST OF AVAIALABLE ROUTES
     */
    async #LOAD_ROUTES() {
        const availableRoutes = await this.AVAILABLE_ROUTES('BASE');
        this.routeObject = JSON.parse(availableRoutes);
        return this.routeObject;
    };
    /**
     * CREATE A ROUTE NOT IN MEMORY
     * @param {string} RouteTag 
     * @param {Array} tagArray 
     * @returns CUSTOM PATH
     */
    async #CUSTOM_ROUTE(RouteTag, tagArray) {
        let Origin = this.routeObject[RouteTag];
        let customObject = Origin;
        for (let index = 0; index < tagArray.length; index++) {
            customObject = customObject[tagArray[index]];
        };
        this.routePath = customObject;
        return await this.createPath();
    };
    async #READ_PLANET() {
        const availablePlanetRoutes = await this.AVAILABLE_ROUTES('PLANETS');
        this.routeObject = JSON.parse(availablePlanetRoutes);
        return this.routeObject;
    };
    async #READ_USERS() {
        const availableUserRoutes = await this.AVAILABLE_ROUTES('USERS');
        this.routeObject = JSON.parse(availableUserRoutes);
        return this.routeObject;
    };
    async #READ_ASSETS() {
        const availableUAssetRoutes = await this.AVAILABLE_ROUTES('ASSETS');
        this.routeObject = JSON.parse(availableUAssetRoutes);
        return this.routeObject;
    };
}

export{pathways}