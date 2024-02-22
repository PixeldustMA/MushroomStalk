// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         ACCESS APP MEMORY         //
// ================================= //

import { Stalk } from "../CONTROLLERS/StalkController.js";
import { createRoute } from "../GNOMES/Routes.js";

class Remember{
	constructor(){
        this.stalk = new Stalk();
    }

	/**
	 * FETCH INFORMATION ON THE CURRENT USER
	 */
	async frog() {
		this.stalk.path = await this.stalk.machete("RESIDENT");
		return await this.stalk.Read(resident);
	}
	/**
		* SET THE RESIDENT FROG
	 */
	async setUser(username) {

		this.stalk.path = await createRoute(username, "USER");
		const userData = await this.stalk.Read()
		return await this.saveResident(userData);
	}
	/** 
	 * GET A LIST OF USERS
	*/
	async frogList() {
        this.stalk.path = await this.stalk.machete("FROGS");
		return await this.stalk.Read();
	}
	/**
		 * RAID THE PANTRY FOR INFORMATION
	 */
	async pantry() {
        this.stalk.path = await this.stalk.machete("PANTRY");
		return await this.stalk.Read();
	}
	/**
		 * GET THE ACTIVE CHARACTER
	 */
	async character() {
        this.stalk.path = await this.stalk.machete("CHARACTER");
		return await this.stalk.Read();
	}
	/**
	 * SAVE UPDATED USER LIST
	 */
	async saveUserList(frogList) {
        this.stalk.path = await this.stalk.machete("FROGS");
        this.stalk.data = frogList;
        await this.stalk.Save()
	}
	/**
	 * SAVE RESIDENT FROG
	 */
	async saveResident(frogData) {
        this.stalk.path = await this.stalk.machete("RESIDENT");
        this.stalk.data = frogData;
        await this.stalk.Save()
	}
	/**
	 * LOAD USER PATH FOR FIRST TIME USER
	 */
	async loadLostData(path) {

        this.stalk.path = path;

        const settings = await this.stalk.machete("SETTINGS");
		const fileDetails = await this.stalk.Read();

        const userName = fileDetails.NAME;

		const userPath = await createRoute(userName, "USER");
		this.stalk.path = userPath;
        this.stalk.data = fileDetails;
		console.log(this.stalk.path)
        await this.stalk.NewFile();

        this.stalk.path = settings;
		let userSettings = await this.stalk.Read();
		userSettings.LOCALPATH = path;

        this.stalk.data = userSettings;
        await this.stalk.Save();

		let existingUsers = await this.frogList()
		    .then((memoryObject) => {
                let username = fileDetails.NAME;
                let password = fileDetails.PASSWORD;
                let userNumber = Object.keys(memoryObject);
                memoryObject[userNumber.length + 1] = {
                        NAME: username,
                        PASSWORD: password,
                }
                this.saveUserList(memoryObject);
		})
	}
}

export {Remember}