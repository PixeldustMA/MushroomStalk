import { Insert } from "../CONSOLE/Insert.js";

class Section_Insert {

    constructor(sectionData = {

            MUSHROOM: "",
            ACTIVITY: "",
            ANCESTRY: "",
            EDUCATION: "",
            EMPLOYMENT: "",
            HALEX: "",
            ORGANISATION: "",
            PERSONAL: "",
            LOCATION: "",
            PET: "",
            RELATIONSHIP: "",

        }) {
        this.SECTION_MUSHROOM_DATA = [
            sectionData.MUSHROOM,
            sectionData.ACTIVITY, 
            sectionData.ANCESTRY, 
            sectionData.EDUCATION, 
            sectionData.EMPLOYMENT, 
            sectionData.HALEX,
            sectionData.ORGANISATION,
            sectionData.PERSONAL,
            sectionData.LOCATION,
            sectionData.PET,
            sectionData.RELATIONSHIP
        ];
    }

    async SECTION_MUSHROOM_INSERT() {
        const inserting = new Insert({
            TABLE_NAME: "MUSH_CODE",
            COLUMN_LIST: [
                "MUSHROOM", "ACTIVITY", 
                "ANCESTRY", "EDUCATION", 
                "EMPLOYMENT", "HALEX",
                "ORGANISATION", "PERSONAL",
                "LOCATION","PET","RELATIONSHIP"
            ],
            DATA: this.SECTION_MUSHROOM_DATA
        });
        await inserting.INSERT_ARCHIVE();
    };
};

export {Section_Insert};