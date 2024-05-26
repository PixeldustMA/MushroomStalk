import { Code_Generator } from "./CodeGenerator.js";

class CodeCreator extends Code_Generator {

    constructor(first, last, year, planet) {
        super(first, last, year, planet);
    };
        /**
     * GENERATE A NEW PROFILE OBJECT CONTAINING UNIQUE KEYS
     * @returns {object} 
     */
        async GENERATE_UNIQUE_CODES() {
            let mushroom = await this.#MUSHROOM_CODE();
            return {
                MUSHROOM: mushroom,
                ACTIVITY: this.#ACTIVITY_CODE(),
                ANCESTRY: this.#ANCESTRY_CODE(),
                EDUCATION: this.#EDUCATION_CODE(),
                EMPLOYMENT: this.#EMPLOYMENT_CODE(),
                HALEX: this.#HALEX_CODE(),
                ORGANISATION: this.#ORGANISATION_CODE(),
                PERSONAL: this.#PERSONAL_CODE(),
                LOCATION: this.#LOCATION_CODE(),
                PET: this.#PET_CODE(),
                RELATIONSHIP: this.#RELATIONSHIP_CODE()
            }
        };
        /**
         * GENERATE A UNIQUE MUSHROOM CODE
         * @returns {Promise<string>} MUSHROOM CODE
         */
        async #MUSHROOM_CODE() {
            const mushroom = await this.CREATE_CODE();
            return mushroom;
        };
        /**
         * GENERATE UNIQUE PERSONAL CODE
         * @returns {string} PERSONAL CODE
         */
        #PERSONAL_CODE() {
            return "PC" + this.row;
        };
        /**
         * GENERATE UNIQUE LOCATION CODE
         * @returns {string} LOCATION CODE
         */
        #LOCATION_CODE() {
            return "LC" + this.row;
        };
        /**
         * GENERATE UNIQUE EDUCATION CODE
         * @returns {string} EDUCATION CODE
         */
        #EDUCATION_CODE() {
            return "ED" + this.row;
        };
        /**
         * GENERATE UNIQUE ACTIVITY CODE
         * @returns {string} ACTIVITY CODE
         */
        #ACTIVITY_CODE(){
            return "AC" + this.row;
        };
        /**
         * GENERATE UNIQUE ORGANISATION CODE
         * @returns {string} ORGANISATION CODE
         */
        #ORGANISATION_CODE(){
            return "OG" + this.row;
        };
        /**
         * GENERATE UNIQUE PET CODE
         * @returns {string} PET CODE
         */
        #PET_CODE(){
            return "PT" + this.row;
        };
        /**
         * GENERATE UNIQUE EMPLOYMENT CODE
         * @returns {string} EMPLOYMENT CODE
         */
        #EMPLOYMENT_CODE(){
            return "EM" + this.row;
        };
        /**
         * GENERATE UNIQUE HALEX CODE
         * @returns {string} HALEX CODE
         */
        #HALEX_CODE(){
            return "HX" + this.row;
        };
        /**
         * GENERATE UNIQUE ANCESTRY CODE
         * @returns {string} ANCESTRY CODE
         */
        #ANCESTRY_CODE(){
            return "AN" + this.row;
        };
        /**
         * GENERATE UNIQUE RELATIONSHIP CODE
         * @returns {string} RELATIONSHIP CODE
         */
        #RELATIONSHIP_CODE(){
            return "RL" + this.row;
        };
}

export {CodeCreator};