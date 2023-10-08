import { codeGenerator } from "./GenerateCode.js";

class code extends codeGenerator {

	constructor(
		first,
		last,
		year,
		planet
	){
		super(first, last, year, planet);
	}

	async MushroomCode() {
		const mushroom = await this.createCode();
		return mushroom;
	}
	async PersonalCode() {
		const row = await this.generateRowCode();
		return "PC" + row;
	}
	async LocationCode() {
		const row = await this.generateRowCode();
		return "LC" + row;
	}
	async EducationCode() {
		const row = await this.generateRowCode();
		return "ED" + row;
	}
	async UniversityCode(){
		const row = await this.generateRowCode();
		return "UC" + row;
	}
	async ActivityCode(){
		const row = await this.generateRowCode();
		return "AC" + row;
	}
	async OrganisationCode(){
		const row = await this.generateRowCode();
		return "OG" + row;
	}
	async PetCode(){
		const row = await this.generateRowCode();
		return "PT" + row;
	}
	async EmploymentCode(){
		const row = await this.generateRowCode();
		return "EM" + row;
	}
	async HalexCode(){
		const row = await this.generateRowCode();
		return "HX" + row;
	}
	getNumber(mushroomCode) {
		const firstCharacter = mushroomCode[0];
		console.log(mushroomCode)
		let mushroomNumber = "";
		for (let index = 1; index < mushroomCode.length; index++) {
			mushroomNumber += mushroomCode[index];
			if (isNaN(parseInt(mushroomCode[index + 1])) ) {
				console.log(mushroomCode[index + 1]);
				console.log("This is not a number");
				break;
			}
		}
		return firstCharacter + mushroomNumber;
	}
	DragonCode(mushroomCode) {
		let num = this.getNumber(mushroomCode);
		return "DR" + num;
	}
	KessyaCode(mushroomCode) {
		let num = this.getNumber(mushroomCode);
		return "KY" + num;
	}
	WARCode(mushroomCode) {
		let num = this.getNumber(mushroomCode);
		return "WAR" + num;
	}
	NightmareCode(mushroomCode) {
		let num = this.getNumber(mushroomCode);
		return "NM" + num;
	}
	PlanetCode(mushroomCode) {
		let planetCode = mushroomCode.slice(-4);
		let num = this.getNumber(mushroomCode);
		console.log(num)
		return planetCode + num;
	}
	MiddleNameCode(mushroomCode) {
		let num = this.getNumber(mushroomCode);
		return "MID" + num;
	}
	SurnameCode(mushroomCode) {
		let num = this.getNumber(mushroomCode);
		return "SUR" + num;
	}
}

export { code };