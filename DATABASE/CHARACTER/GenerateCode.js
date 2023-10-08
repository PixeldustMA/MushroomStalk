'A01'// ROW CODE
'AA' // NAME CODE
'0000' // YEAR CODE
'XXXX' // PLANET CODE

import { route } from "../../GEARS/GNOME/Routes.js";
import { ReadFile, WelcomeSave } from "../../GEARS/PLATYPUS/RenderFunctions.js";
import { Location } from "../../GIZMOS/WIDGETS/EXPLORER/Location.js";

class codeGenerator{

	constructor(
		firstName,
		lastName,
		year,
		planet
	) {
		this.first = firstName[0].toUpperCase();
		this.last = lastName[0].toUpperCase();
		this.year = year;
		this.planet = planet;
}

	async createCode() {
		let row = await this.generateRowCode();
		let name = await this.generateNameCode();
		let yearString = await this.generateYearCode();
		let planet = await this.generatePlanetCode();
		return row + name + yearString + planet;
	} 
	async charNum() {
		let alphabet = await route("alphabet");
		let letterList = await ReadFile(alphabet);
		let num = letterList[this.first].toString();
		return num;
	}
	async generateRowCode() {
		let num = await this.charNum()
		return this.first + num.toString();
	}
	async generateNameCode() {
		return this.first + this.last;
	}
	async generateYearCode() {
		return this.year.toString();
	}
	async generatePlanetCode() {
		const LocationInstance = new Location(this.planet);
		const Construct = await LocationInstance.construct();
		const Space = await LocationInstance.fetchFile();
		return LocationInstance.planetCode();
	}
	async updateAlphabet() {
		const a = await route("alphabet");
		let letterList = await ReadFile(a);
		let num = parseInt(letterList[this.first]);
		num++
		let stringnum = num.toString();
		letterList[this.first] = stringnum;
		const s = await WelcomeSave(a, letterList);
		return s;
	}
}

export { codeGenerator}


