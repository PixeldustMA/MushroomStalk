import { Insert } from "../CONSOLE/Insert.js";

class Personal_Insert {

    constructor(
        personalData = {

            PERSONAL: "",
            SECTION: "",

            FIRST: "",
            PARENTAL: "",
            FAMILY: "",

            YEAR: "",
            HELIAN: "",
            UHX: "",

            PLANET: "",
            RACE: "",

            TITLE_TYPE: "",
            TITLE: "",
            TITLE_START: "",
            TITLE_NUMBER: ""

        }) {
        this.TITLE_CODE = personalData.PERSONAL.replace('PC', 'TT');
        this.PERSONAL_BIRTH_DATA = [
            personalData.PERSONAL,
            personalData.SECTION, 
            personalData.PLANET,
            personalData.YEAR, 
            personalData.HELIAN, 
            personalData.UHX, 
        ];
        this.PERSONAL_NAME_DATA = [
            personalData.PERSONAL,
            personalData.SECTION,
            personalData.FIRST,
            personalData.PARENTAL,
            personalData.FAMILY
        ];
        this.PERSONAL_RACE_DATA = [
            personalData.PERSONAL,
            personalData.SECTION,
            personalData.RACE
        ];
        this.PERSONAL_TITLE_DATA = [
            personalData.PERSONAL,
            personalData.SECTION,
            personalData.TITLE_CODE,
            personalData.TITLE_TYPE,
            personalData.TITLE,
            personalData.TITLE_START,
            personalData.TITLE_NUMBER
        ];
    }

    async PERSONAL_BIRTH_INSERT() {
        console.log(this.PERSONAL_BIRTH_DATA)
        const inserting = new Insert({
            TABLE_NAME: "PERS_BIRTH",
            COLUMN_LIST: [
                "PERSONAL", "SECTION", 
                "PLANET", "YEAR_LOCAL", 
                "YEAR_UHX", "YEAR_HELIAN"
            ],
            DATA: this.PERSONAL_BIRTH_DATA
        });
        await inserting.INSERT_ARCHIVE();
    };
    async PERSONAL_NAMES_INSERT() {
        const inserting = new Insert({
            TABLE_NAME: "PERS_NAMES",
            COLUMN_LIST: [
                "PERSONAL", "SECTION", 
                "FIRST", "PARENTAL", 
                "FAMILY"
            ],
            DATA: this.PERSONAL_NAME_DATA
        });
        await inserting.INSERT_ARCHIVE();
    };
    async PERSONAL_RACE_INSERT() {
        const inserting = new Insert({
            TABLE_NAME: "PERS_RACE",
            COLUMN_LIST: [
                "PERSONAL", "SECTION", 
                "RACE"
            ],
            DATA: this.PERSONAL_RACE_DATA
        });
        await inserting.INSERT_ARCHIVE();
    };
    async PERSONAL_TITLE_INSERT() {
        const inserting = new Insert({
            TABLE_NAME: "PERS_TITLE",
            COLUMN_LIST: [
                "PERSONAL", "SECTION", 
                "TITLE_CODE", "TYPE", 
                "TITLE", "START", 
                "TITLE_NUMBER"
            ],
            DATA: this.PERSONAL_TITLE_DATA
        });
        await inserting.INSERT_ARCHIVE();
    };
};

export {Personal_Insert};