import { route, createRoute } from "../../GEARS/GNOME/Routes.js";
import { Stalk } from "../../GEARS/GNOME/Stalk.js";
import { ReadFile } from "../../GEARS/PLATYPUS/RenderFunctions.js";

class User extends Stalk{

	constructor () {

		super()
		// this.basePath = route("message").then((base) => {return base});
		// this.customPath = createRoute(this.MessagePath, "messagePath");
	}

	async syncMessages() {
		return this.createMessageObject()
			.then((result) => {return result})
	}
	async readBaseMessages() {
		let basePath = await route("message").then((base) => {return base})
		let base = await ReadFile(basePath)
			.then((baseMessages) => { console.log(baseMessages); return baseMessages})
			return base;
	}
	async readCustomMessages() {
		let custom = await ReadFile(this.MessagePath)
			.then((customMessage) => { return customMessage});
		return custom;
	}
	async MergeMessage() {
		const Base = await this.readBaseMessages()
			.then((baseMessages) => {return baseMessages});
		const Custom = await this.readCustomMessages()
			.then((NewMessage) => {return NewMessage;})

		const MessageObject = {...Base}
		const CustomObject = {...Custom}
	
		let BaseEPArray = Object.values(MessageObject.ENGLISH.POSITIVE);
		let BaseENArray = Object.values(MessageObject.ENGLISH.NEGATIVE);
		let BaseEMArray = Object.values(MessageObject.ENGLISH.MEMES);
		let BaseHPArray = Object.values(MessageObject.HAWAIIAN.POSITIVE);
		let BaseHNArray = Object.values(MessageObject.HAWAIIAN.NEGATIVE);
		let BaseHMArray = Object.values(MessageObject.HAWAIIAN.MEMES);
	
		let CustomEPArray = Object.values(CustomObject.ENGLISH.POSITIVE);
		let CustomENArray = Object.values(CustomObject.ENGLISH.NEGATIVE);
		let CustomEMArray = Object.values(CustomObject.ENGLISH.MEMES);
		let CustomHPArray = Object.values(CustomObject.HAWAIIAN.POSITIVE);
		let CustomHNArray = Object.values(CustomObject.HAWAIIAN.NEGATIVE);
		let CustomHMArray = Object.values(CustomObject.HAWAIIAN.MEMES);
	
		let ENGLISHPOSITIVE = [...BaseEPArray, ...CustomEPArray];
		let ENGLISHNEGATIVE = [...BaseENArray, ...CustomENArray];
		let ENGLISHMEME = [...BaseEMArray, ...CustomEMArray];
		let HAWAIIANPOSITIVE = [...BaseHPArray, ...CustomHPArray];
		let HAWAIIANNEGATIVE = [...BaseHNArray, ...CustomHNArray];
		let HAWAIIANMEME = [...BaseHMArray, ...CustomHMArray];
	
		const SyncedObject = {
			ENGLISH: {
				POSITIVE: ENGLISHPOSITIVE,
				NEGATIVE: ENGLISHNEGATIVE,
				MEMES: ENGLISHMEME
			},
			HAWAIIAN: {
				POSITIVE: HAWAIIANPOSITIVE,
				NEGATIVE: HAWAIIANNEGATIVE,
				MEMES: HAWAIIANMEME
			}
		}
	
		let MergedObjectOne  = {
			...CustomObject,
			...SyncedObject
		}
		let MergedObject = {
			...MessageObject,
			...MergedObjectOne
		}
		return MergedObject 
	}
	async createMessageObject() {
		const WelcomeMessages = await this.MergeMessage()
			.then((result) => {
				console.log(result)
				return result;})
		return WelcomeMessages
	}

}

export { User }