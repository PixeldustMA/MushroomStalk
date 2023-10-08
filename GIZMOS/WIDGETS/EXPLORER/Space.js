import { Planet } from "./PlanetController.js";

class Space extends Planet{

	constructor(
		spaceName
	){
		super();
		this.spaceName = spaceName;
		this.space = this.fetchObject();
	}

	async fetchObject() {
		console.log("HHHHH")
		const keys = await this.FetchKeys()
			.then((key) => {
				console.log("H")
				this.space = key[this.spaceName];				
				return this.space});
		console.log(this.space)
		return this.space
	}

	
}

export {Space}