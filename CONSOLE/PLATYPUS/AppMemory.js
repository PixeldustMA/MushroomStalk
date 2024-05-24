import { Stalk } from "../CONTROLLERS/StalkController.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         ACCESS APP MEMORY         //
// ================================= //

class Remember extends Stalk{
	constructor(){
		super();
    };
	/**
		* SET THE RESIDENT FROG
	 */
	async SET_ACTIVE_USER(username) {
		this.path = await this.INIT_ROUTE({
			TAG: username.toUpperCase(), 
			SECTION: '', 
			USER: 1
		});
		const userData = await this.READ();
		userData.NAME = username;
		return await this.SAVE_ACTIIVE_RESIDENT(userData);
	};
	/** 
	 * GET A LIST OF USERS
	*/
	async READ_FROG_LIST() {
        this.path = await this.INIT_ROUTE({
			TAG: 'FROGS', 
			SECTION: 'MEMORY', 
			SUBSECTION: 'USERS'
		});
		return await this.READ();
	}
	/**
	 * SAVE UPDATED USER LIST
	 */
	async SAVE_FROG_LIST(frogList) {
        this.path = await this.INIT_ROUTE({
			TAG: 'FROGS', 
			SECTION: 'MEMORY', 
			SUBSECTION: 'USERS'
		})
        this.data = frogList;
        await this.SAVE()
	};
	/**
	 * SAVE RESIDENT FROG
	 */
	async SAVE_ACTIIVE_RESIDENT(frogData) {
        this.path = await this.INIT_ROUTE({
			TAG: 'RESIDENT', 
			SECTION: 'MEMORY', 
			SUBSECTION: 'USERS'
		})
        this.data = frogData;
        await this.SAVE();
	};
}

export {Remember}