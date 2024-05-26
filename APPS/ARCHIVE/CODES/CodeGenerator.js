import { Code_Explorer } from "../../../CONSOLE/CONTROLLERS/CodeController.js";

// == ROW CODE -- A01;
// == NAME CODE -- 'AA';
// == YEAR CODE -- '0000';
// == PLANET CODE -- 'XXXX'


class Code_Generator extends Code_Explorer {

    constructor(firstName, lastName, year, planet){
        super();
        this.first = firstName[0].toUpperCase();
		this.last = lastName[0].toUpperCase();
		this.year = year;
		this.planet = planet;
		this.row = "";
    };

    async CREATE_CODE() {
		let row = await this.#GENERATE_ROW_CODE();
		let name = this.#GENERATE_NAME_CODE();
		let yearString = this.#GENERATE_YEAR_CODE();
		let planet = await this.#GENERATE_PLANET_CODE();
		this.row = row;
		await this.#UPDATE_ALPHABET();
		return row + name + yearString + planet;
	};
    SECTION_CODE(tag, mushroomCode) {
		let code = "";
		switch (tag) {
			case "DRAGON":
				code = this.#DRAGON_CODE(mushroomCode);
				break;
			case "WAR":
				code = this.#WAR_CODE(mushroomCode);
				break;
			case "NIGHTMARE":
				code = this.#NIGHTMARE_CODE(mushroomCode);
				break;	
			case "KESSYA":
				code = this.#KESSYA_CODE(mushroomCode);
				break;
			case "PLANET":
				code = this.#PLANET_CODE(mushroomCode);
				break;
			default:
				break;
		}
		return code;
	};
    SECTION_CODE_LIST(mushroomCode) {
		return {
			DRAGON: this.SECTION_CODE("DRAGON", mushroomCode),
			WAR: this.SECTION_CODE("WAR", mushroomCode),
			NIGHTMARE: this.SECTION_CODE("NIGHTMARE", mushroomCode),
			KESSYA: this.SECTION_CODE("KESSYA", mushroomCode),
			PLANET: this.SECTION_CODE("PLANET", mushroomCode)
		}
	};
    FETCH_NAME_CODES(mushroom) {
		return {
			MIDDLE: this.#MIDDLE_NAME_CODE(mushroom),
			SURNAME: this.#SURNAME_CODE(mushroom),
			TITLE: this.#TITLE_CODE(mushroom)
		}
	};
    #GET_NUMBER(mushroomCode) {

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
	};
    /**
	 * GENERATE CODE WITH FIRST LETTER PLUS NUMBER
	 * @returns {Promise<string>} CODE IN FORMAT'A01'
	 */
	async #GENERATE_ROW_CODE() {
		let num = await this.#CHAR_NUM()
		return this.first[0] + num.toString();
	}
	/**
	 * GENERATE THE NEXT AVAILABLE NUMBER BASED ON LETTER
	 * @returns {int}
	 */
	async #CHAR_NUM() {
		let letterList = await this.READ_ALPHABET();
		let num = letterList[this.first[0].toUpperCase()];
		return num.toString();
	}
	/**
	 * FIRST LETTER OF EACH NAME
	 * @returns {string} CODE IN FORMAT 'AA'
	 */
	#GENERATE_NAME_CODE() {
		return this.first[0] + this.last[0];
	}
	/**
	 * CONVERT GIVEN YEAR TO STRING
	 * @returns {string} CODE IN FORMAT '0000'
	 */
	#GENERATE_YEAR_CODE() {
		return this.year.toString();
	}
	/**
	 * FETCH A 4 CHARACTER CODE CORRESPONDING TO THE PLANET
	 * @returns {Promise<string>} CODE IN FORMAT 'XXXX'
	 */
	async #GENERATE_PLANET_CODE() {
		const location = await this.LOCATION_ARRAY(this.planet);
		const planetData = await this.PLANET(location.SPACE, location.SECTOR, location.SYSTEM, this.planet);
		return planetData.LOCATION.CODE;
	}
	/**
	 * UPDATE ALPHABET JSON TO KEEP COUNT OF LETTER USAGE FREQUENCY
	 */
	async #UPDATE_ALPHABET() {
		let letterList = await this.READ_ALPHABET();
		let num = parseInt(letterList[this.first[0]]);
		num++
		let stringnum = num.toString();
		letterList[this.first[0]] = stringnum;
		this.data = letterList
		return await this.SAVE();
	}

	// SECTION CODE GENERATORS
	/**
	 * GENERATE DRAGON CODE
	 * @param {*string} mushroomCode 
	 * @returns DRAGON CODE
	 */
	#DRAGON_CODE(mushroomCode) {
		let num = this.#GET_NUMBER(mushroomCode);
		return "DR" + num;
	}
	/**
	 * GENERATE KESSYA CODE
	 * @param {*string} mushroomCode 
	 * @returns KESSYA CODE
	 */
	#KESSYA_CODE(mushroomCode) {
		let num = this.#GET_NUMBER(mushroomCode);
		return "KY" + num;
	}
	/**
	 * GENERATE WAR CODE
	 * @param {*string} mushroomCode 
	 * @returns WAR CODE
	 */
	#WAR_CODE(mushroomCode) {
		let num = this.#GET_NUMBER(mushroomCode);
		return "WAR" + num;
	}
	/**
	 * GENERATE NIGHTMARE CODE
	 * @param {*string} mushroomCode 
	 * @returns NIGHTMARE CODE
	 */
	#NIGHTMARE_CODE(mushroomCode) {
		let num = this.#GET_NUMBER(mushroomCode);
		return "NM" + num;
	}
	/**
	 * GENERATE PLANET CODE
	 * @param {*string} mushroomCode 
	 * @returns PLANET CODE
	 */
	#PLANET_CODE(mushroomCode) {
		let planetCode = mushroomCode.slice(-4);
		let num = this.#GET_NUMBER(mushroomCode);
		return planetCode + num;
	}

	// ADDITIONAL CODE GENERATORS
	/**
	 * GENERATE MIDDLE NAME CODE
	 * @param {*string} mushroomCode 
	 * @returns MIDDLE NAME CODE
	 */
	#MIDDLE_NAME_CODE(mushroomCode) {
		let num = this.#GET_NUMBER(mushroomCode);
		return "MID" + num;
	}
	/**
	 * GENERATE SURNAME CODE
	 * @param {*string} mushroomCode 
	 * @returns SURNAME CODE
	 */
	#SURNAME_CODE(mushroomCode) {
		let num = this.#GET_NUMBER(mushroomCode);
		return "SUR" + num;
	}
	/**
	 * GENERATE SURNAME CODE
	 * @param {*string} mushroomCode 
	 * @returns TITLE CODE
	 */
	#TITLE_CODE(mushroomCode) {
		let num = this.#GET_NUMBER(mushroomCode);
		return "TIL" + num;
	}
}

export {Code_Generator}