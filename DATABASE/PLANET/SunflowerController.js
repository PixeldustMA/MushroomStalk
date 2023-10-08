import { Planet } from "./PlanetController.js";

class Sunflower extends Planet {

	constructor(
		planetCode = "XX",
		requestCode = "XX",
		startDate = 0
	) {
		super(planetCode)
		this.planetCode = planetCode;
		this.requestCode = requestCode;
		this.startDate = startDate;
	}

	async UHXTime() {
		await this.init();
		let conversionNumber = this.details.Sunflower.UHXYear;
		return parseInt(this.startDate) + parseInt(conversionNumber);
	}
}

export {Sunflower}