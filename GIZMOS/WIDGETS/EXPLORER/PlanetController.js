import { planetRoute } from "../../../GEARS/GNOME/Routes.js";
import { ReadFile } from "../../../GEARS/PLATYPUS/RenderFunctions.js";

class Planet {

	constructor() {
		this.Keys = {}
	}

	async FetchKeys() {
		const planetKeys = await planetRoute("Keys");
		const data = await ReadFile(planetKeys)
		return data;
	}

}

export {Planet}