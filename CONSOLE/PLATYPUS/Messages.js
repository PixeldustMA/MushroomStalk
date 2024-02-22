import { LocalData } from "./LocalData.js";

class Messages extends LocalData{

	constructor () {
		super();
	} 

	// == ACCESS METHOD == //
	/**
	 * CREATE A MERGED MESSAGE OBJECT
	 * @returns MESSAGE OBJECT
	 */
	async syncMessages() {
		return this.#MergeMessage();
	}

	// == FUUNCTIONALITY METHODS == //

	/**
	 * READ APP FILES TO GET THE BASE MESSAGE OBJECT
	 * @returns {object}BASE MESSAGE OBJECT
	 */
	async #readBaseMessages() {
		this.mushroom.path = await this.mushroom.machete('MESSAGES');
		const baseMessage = await this.mushroom.Read();
		return baseMessage;    
	}
	/**
	 * READ USER FILES TO GET A CUSTOM MESSAGE OBJECT
	 * @returns {object} CUSTOM MESSAGE OBJECT
	 */
	async #readCustomMessages() {
		this.mushroom.path = this.message;
		return await this.mushroom.Read();
	}
	/**
	 * CREATE A MERGED CUSTOM AND BASE MESSAGE OBJECT
	 * @returns {object} MESSAGE OBJECT
	 */
	async #MergeMessage() {

		const Base = await this.#readBaseMessages();
		const Custom = await this.#readCustomMessages();
		const MessageObject = {...Base}
		const CustomObject = {...Custom}
		let BaseKeys = Object.keys(MessageObject);
		let SyncedObject = {};

		BaseKeys.forEach(LANGUAGE => {
			SyncedObject[LANGUAGE] = {};
			let moods = Object.keys(MessageObject[LANGUAGE]);

			moods.forEach(MOOD => {
				SyncedObject[LANGUAGE][MOOD] = []
				let BaseArray = Object.values(MessageObject[LANGUAGE][MOOD]);
				let CustomArray = Object.values(CustomObject[LANGUAGE][MOOD]);
				SyncedObject[LANGUAGE][MOOD] = [...BaseArray, CustomArray];
			});
		});

		let MergedObjectOne  = {
			...CustomObject,
			...SyncedObject
		}
		return {
			...MessageObject,
			...MergedObjectOne
		};
	}

}

export { Messages }