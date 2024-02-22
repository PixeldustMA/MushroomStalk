import { CodeGenerator } from "./Codes.js";

/**
 * GENERATE CODES
 */
class CodeCreator extends CodeGenerator {

    constructor (
        first,
		last,
		year,
		planet
    ) {
        super(first, last, year, planet);
    }

    /**
     * GENERATE A NEW PROFILE OBJECT CONTAINING UNIQUE KEYS
     * @returns {object} 
     */
    async generateUniqueCodes() {
        let mushroom = await this.#MushroomCode();
        return {
            MUSHROOM: mushroom,
            ACTIVITY: this.#ActivityCode(),
            ANCESTRY: this.#AncestryCode(),
            EDUCATION: this.#EducationCode(),
            EMPLOYMENT: this.#EmploymentCode(),
            HALEX: this.#HalexCode(),
            ORGANISATION: this.#OrganisationCode(),
            PERSONAL: this.#PersonalCode(),
            LOCATION: this.#LocationCode(),
            PET: this.#PetCode(),
            RELATIONSHIP: this.#RelationshipCode()
        }
    }
    /**
     * GENERATE A UNIQUE MUSHROOM CODE
     * @returns {Promise<string>} MUSHROOM CODE
     */
    async #MushroomCode() {
		const mushroom = await this.createCode();
		return mushroom;
	}
    /**
     * GENERATE UNIQUE PERSONAL CODE
     * @returns {string} PERSONAL CODE
     */
	#PersonalCode() {
		return "PC" + this.row;
	}
    /**
     * GENERATE UNIQUE LOCATION CODE
     * @returns {string} LOCATION CODE
     */
    #LocationCode() {
		return "LC" + this.row;
	}
    /**
     * GENERATE UNIQUE EDUCATION CODE
     * @returns {string} EDUCATION CODE
     */
	#EducationCode() {
		return "ED" + this.row;
	}
    /**
     * GENERATE UNIQUE ACTIVITY CODE
     * @returns {string} ACTIVITY CODE
     */
    #ActivityCode(){
		return "AC" + this.row;
	}
    /**
     * GENERATE UNIQUE ORGANISATION CODE
     * @returns {string} ORGANISATION CODE
     */
	#OrganisationCode(){
		return "OG" + this.row;
	}
    /**
     * GENERATE UNIQUE PET CODE
     * @returns {string} PET CODE
     */
	#PetCode(){
		return "PT" + this.row;
	}
    /**
     * GENERATE UNIQUE EMPLOYMENT CODE
     * @returns {string} EMPLOYMENT CODE
     */
	#EmploymentCode(){
		return "EM" + this.row;
	}
    /**
     * GENERATE UNIQUE HALEX CODE
     * @returns {string} HALEX CODE
     */
	#HalexCode(){
		return "HX" + this.row;
	}
    /**
     * GENERATE UNIQUE ANCESTRY CODE
     * @returns {string} ANCESTRY CODE
     */
	#AncestryCode(){
		return "AN" + this.row;
	}
    /**
     * GENERATE UNIQUE RELATIONSHIP CODE
     * @returns {string} RELATIONSHIP CODE
     */
	#RelationshipCode(){
		return "RL" + this.row;
	}
}

export {CodeCreator}