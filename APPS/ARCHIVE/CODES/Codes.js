import { Globe } from "../../../CONSOLE/CONTROLLERS/SpaceController.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";

'A01'// ROW CODE
'AA' // NAME CODE
'0000' // YEAR CODE
'XXXX'

/**
 * GENERATE INDIVIDUAL CODES
 */
class CodeGenerator {

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
		this.row = "";

        this.stalk = new Stalk()
    }

    // ACCESSIBLE METHODS
	/**
	 * CREATE UNIQUE MUSHROOM CODE FOR CHARACTER
	 * @returns CODE STRING
	 */
	async createCode() {
		let row = await this.#generateRowCode();
		let name = this.#generateNameCode();
		let yearString = this.#generateYearCode();
		let planet = await this.#generatePlanetCode();
		this.row = row;
		await this.#updateAlphabet();
		return row + name + yearString + planet;
	} 
    /**
	 * GRAB RELEVANT SECTION CODE FOR INSERTED DATA
	 * @param {*string} tag 
	 * @param {*string} mushroomCode 
	 * @returns SECTION CODE
	 */
	sectionCode(tag, mushroomCode) {
		let code = "";
		switch (tag) {
			case "DRAGON":
				code = this.#DragonCode(mushroomCode);
				break;
			case "WAR":
				code = this.#WARCode(mushroomCode);
				break;
			case "NIGHTMARE":
				code = this.#NightmareCode(mushroomCode);
				break;	
			case "KESSYA":
				code = this.#KessyaCode(mushroomCode);
				break;
			case "PLANET":
				code = this.#PlanetCode(mushroomCode);
				break;
			default:
				break;
		}
		return code;
	}
    /**
     * GET CODES FOR NAME TABLES
     * @param {string} mushroom 
     * @returns {object} NAME CODE OBJECT
     */
	fetchNameCodes(mushroom) {
		return {
			MIDDLE: this.#MiddleNameCode(mushroom),
			SURNAME: this.#SurnameCode(mushroom),
			TITLE: this.#TitleCode(mushroom)
		}
	}

	// UTILITY FUNCTIONS
	/**
	* GET ROW CODE FROM EXISTING NUMBER
	* @param {string} mushroomCode 
	* @returns {string}Letter and a number
	*/
	#getNumber(mushroomCode) {

		const firstCharacter = mushroomCode[0];
		let mushroomNumber = "";

		for (let index = 1; index < mushroomCode.length; index++) {
			mushroomNumber += mushroomCode[index];
			if (isNaN(parseInt(mushroomCode[index + 1])) ) {
                // TODO Number Error
				break;
			}
		}
		return firstCharacter + mushroomNumber;
	}
	/**
	 * GENERATE CODE WITH FIRST LETTER PLUS NUMBER
	 * @returns {Promise<string>} CODE IN FORMAT'A01'
	 */
	async #generateRowCode() {
		let num = await this.#charNum()
		return this.first + num.toString();
	}
	/**
	 * GENERATE THE NEXT AVAILABLE NUMBER BASED ON LETTER
	 * @returns {int}
	 */
	async #charNum() {
		this.stalk.path = await this.stalk.machete("ALPHABET")
		let letterList = await this.stalk.Read();
		let num = letterList[this.first].toString();
		return num;
	}
	/**
	 * FIRST LETTER OF EACH NAME
	 * @returns {string} CODE IN FORMAT 'AA'
	 */
	#generateNameCode() {
		return this.first + this.last;
	}
	/**
	 * CONVERT GIVEN YEAR TO STRING
	 * @returns {string} CODE IN FORMAT '0000'
	 */
	#generateYearCode() {
		return this.year.toString();
	}
	/**
	 * FETCH A 4 CHARACTER CODE CORRESPONDING TO THE PLANET
	 * @returns {Promise<string>} CODE IN FORMAT 'XXXX'
	 */
	async #generatePlanetCode() {
		const Kessikaya = new Globe(this.planet);
		let planetData = await Kessikaya.planet.fetchPlanetData(this.planet);
		return planetData.Identification.FullCode
	}
	/**
	 * UPDATE ALPHABET JSON TO KEEP COUNT OF LETTER USAGE FREQUENCY
	 */
	async #updateAlphabet() {
		this.stalk.path= await this.stalk.machete('alphabet');
		let letterList = await this.stalk.Read();
		let num = parseInt(letterList[this.first]);
		num++
		let stringnum = num.toString();
		letterList[this.first] = stringnum;
		this.stalk.data = letterList
		return await this.stalk.Save();
	}

	// SECTION CODE GENERATORS
	/**
	 * GENERATE DRAGON CODE
	 * @param {*string} mushroomCode 
	 * @returns DRAGON CODE
	 */
	#DragonCode(mushroomCode) {
		let num = this.#getNumber(mushroomCode);
		return "DR" + num;
	}
	/**
	 * GENERATE KESSYA CODE
	 * @param {*string} mushroomCode 
	 * @returns KESSYA CODE
	 */
	#KessyaCode(mushroomCode) {
		let num = this.#getNumber(mushroomCode);
		return "KY" + num;
	}
	/**
	 * GENERATE WAR CODE
	 * @param {*string} mushroomCode 
	 * @returns WAR CODE
	 */
	#WARCode(mushroomCode) {
		let num = this.#getNumber(mushroomCode);
		return "WAR" + num;
	}
	/**
	 * GENERATE NIGHTMARE CODE
	 * @param {*string} mushroomCode 
	 * @returns NIGHTMARE CODE
	 */
	#NightmareCode(mushroomCode) {
		let num = this.#getNumber(mushroomCode);
		return "NM" + num;
	}
	/**
	 * GENERATE PLANET CODE
	 * @param {*string} mushroomCode 
	 * @returns PLANET CODE
	 */
	#PlanetCode(mushroomCode) {
		let planetCode = mushroomCode.slice(-4);
		let num = this.#getNumber(mushroomCode);
		return planetCode + num;
	}

	// ADDITIONAL CODE GENERATORS
	/**
	 * GENERATE MIDDLE NAME CODE
	 * @param {*string} mushroomCode 
	 * @returns MIDDLE NAME CODE
	 */
	#MiddleNameCode(mushroomCode) {
		let num = this.#getNumber(mushroomCode);
		return "MID" + num;
	}
	/**
	 * GENERATE SURNAME CODE
	 * @param {*string} mushroomCode 
	 * @returns SURNAME CODE
	 */
	#SurnameCode(mushroomCode) {
		let num = this.#getNumber(mushroomCode);
		return "SUR" + num;
	}
	/**
	 * GENERATE SURNAME CODE
	 * @param {*string} mushroomCode 
	 * @returns TITLE CODE
	 */
	#TitleCode(mushroomCode) {
		let num = this.#getNumber(mushroomCode);
		return "TIL" + num;
	}
}

export {CodeGenerator};