import { DatabaseDuck } from "../PLATYPUS/DatabaseRenderer.js";
import { Stalk } from "./StalkController.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Query  Database           //
// ================================= //

class Duck extends DatabaseDuck{
	constructor(
        mushroom
	) {
        super()
        this.mushroom = mushroom;
        this.QueryConfig = {
            Type: "",
            Data: ""
        }
        this.stalk = new Stalk();
	}

    /**
     * CREATE A TAG FOR THE CURRENT CHARACTER
     * @param {string} givenTag 
     */
    async setTag(givenTag) {

        this.QueryConfig["Type"] = "Tag";
        this.QueryConfig.Data = givenTag;
        this.QueryConfig.Colunns = ["MUSHROOM", "TAGS"];
        await this.stalk.insert(this.QueryConfig, [givenTag, this.mushroom]);

    }
    /**
     * INSERT SECTION CODES INTO DATABASE
     * @param {Array} "[SectionCodes]"
     */
    async setSectionCode(data) {
        this.QueryConfig["Type"] = "SectionCode";
        this.QueryConfig.Data = data[1];
        this.QueryConfig["Section"] = data[0];
        this.QueryConfig.Columns = ["MUSHROOM", data[0]];
        await insert([this.QueryConfig, [this.mushroom, this.QueryConfig.Data]]);
    }
    /**
     * INSERT INTO NAME TABLE OF DATABASE
     * @param {object} // Data to insert //  
     */
    async InsertNames(data) {
        this.QueryConfig.Type = "Names";
        this.QueryConfig.Data = [data.PERSONALCODE, 
                                data.SECTIONCODE, data.MIDDLECODE, 
                                data.TITLECODE, data.SURNAMECODE, 
                                data.FIRST, data.PARENTAL, 
                                data.SURNAME];
        this.QueryConfig.Columns = [
            "CODE",
            "AREA",
            "MIDDLE",
            "TITLE",
            "SURNAME",
            "FIRST",
            "PARENTAL",
            "FAMILY"];
        await insert([this.QueryConfig, this.QueryConfig.Data]);
    }
    /**
     * INSERT DATA INTO BIRTH TABLE
     * @param {object} data 
     */
    async InsertBirth(data) {
        console.log("INSERT")
        this.QueryConfig.Type = "Birth";
        this.QueryConfig.Data = [data.PERSONALCODE, 
                            data.SECTIONCODE, data.PLANET, 
                            data.LOCALYEAR, data.UHXYEAR, 
                            data.HELIANYEAR];
        this.QueryConfig.Columns = [
            "PERSONAL",
            "AREA",
            "PLANET",
            "YEARLOCAL",
            "YEARUHX",
            "YEARHELIAN", 
            "NAME",
            "NUMBER"
        ];
        await insert([this.QueryConfig, this.QueryConfig.Data]);
    }
    async InsertActivity(sectioncode, activitycode, dataToInsert, Section) {
        this.QueryConfig.Type = `Activity${Section}`;
        this.QueryConfig.Data = [sectioncode, activitycode, dataToInsert];
        this.QueryConfig.Columns = [
            "SECTION",
            "CODE",
            "TASK"
        ]
        await this.insert([this.QueryConfig, this.QueryConfig.Data]);
    }
}

export { Duck}