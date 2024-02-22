import { DatabaseDuck } from "../../../CONSOLE/PLATYPUS/DatabaseRenderer.js";

class Quack {

    constructor(
        mushroom
    ) {
        this.mushroom = mushroom;
        this.QueryConfig = {
            Type: "",
            Data: ""
        }
        this.duck = new DatabaseDuck();
    }

    /**
     * READ THE MUSHROOM CODE TABLE
     * @returns {string} QUERY CODE
     */
    async readCode() {
        let query = `SELECT * FROM MUSHROOM_Codes WHERE MushroomCode LIKE '${this.mushroom}%'`;
		const code = await select(query);
		return code;
    }
    /**
     * SET THE TAG FOR THE CHARACTER BETWEEN MEAT AND BREAD
     * @param {string} givenTag
     */
    async setTag(givenTag) {
        // TODO FORCE TO BE MEAT OR BREAD
        this.QueryConfig["Type"] = "Tag";
        this.QueryConfig.Data = givenTag;
        this.QueryConfig.Columns = ["MUSHROOM", "TAGS"];
        await this.duck.insert([this.QueryConfig, [givenTag, this.mushroom]]);
    }
    /**
     * ADD A CODE DESIGNATING THE TIME SECTION OF THE BOOK
     * @param {object} data 
     */
    async addSectionCode(data) {
        this.QueryConfig["Type"] = "SectionCode";
        this.QueryConfig.Data = data[1];
        this.QueryConfig["Section"] = data[0];
        this.QueryConfig.Columns = ["MUSHROOM", data[0]];
        await this.duck.insert([this.QueryConfig, [this.mushroom, this.QueryConfig.Data]]);
    }
    /**
     * INSERT DATA INTO THE NAME TABLE
     * @param {object} data 
     */
    async InsertNames(data) {
        this.QueryConfig.Type = "Names";
        this.QueryConfig.Data = [data.PERSONALCODE, data.SECTIONCODE, data.MIDDLECODE, data.TITLECODE, data.SURNAMECODE, data.FIRST, data.PARENTAL, data.SURNAME];
        this.QueryConfig.Columns = [
            "CODE",
            "AREA",
            "MIDDLE",
            "TITLE",
            "SURNAME",
            "FIRST",
            "PARENTAL",
            "FAMILY"];
        await this.duck.insert([this.QueryConfig, this.QueryConfig.Data]);
    }
    /**
     * INSERT THE BIRTH DATA OF THE CHARACTER
     * @param {object} data 
     */
    async InsertBirth(data) {
        console.log(data)
        this.QueryConfig.Type = "Birth";
        this.QueryConfig.Data = [data.PERSONALCODE, data.SECTIONCODE[1], data.PLANET, data.LOCALYEAR, data.UHXYEAR, data.HELIANYEAR];
        this.QueryConfig.Columns = [
            "PERSONAL",
            "AREA",
            "PLANET",
            "YEARLOCAL",
            "YEARUHX",
            "YEARHELIAN"
        ];
        await this.duck.insert([this.QueryConfig, this.QueryConfig.Data]);
    }
}

export {Quack};