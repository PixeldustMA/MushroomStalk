import { route } from "../../GEARS/GNOME/Routes.js";
import { ReadFile } from "../../GEARS/PLATYPUS/RenderFunctions.js";

class Planet {

	constructor(
		planetCode = "XX"
	) {
		this.planetCode = planetCode;
		this.currentPath = "";
		this.details = {};
	}

	async init() {
		await this.getFilePath();
		this.details = await this.getPlanetInformation();
		console.log(this.details);
	}
	async getFilePath() {

		const keyPath = await route("PlanetPaths");
		const keys = await ReadFile(keyPath);
		const options = Object.keys(keys);
		options.forEach(planet => {
			console.log(planet.slice(0, 2))
			if (planet.slice(0, 2) === this.planetCode) {
				this.currentPath = keys[planet];
			}
		});
		return this.currentPath;

	}
	async getPlanetInformation() {
		return await ReadFile(this.currentPath);
	}

}

export { Planet };