import { DatabaseController } from "../../../CONSOLE/CONTROLLERS/DatabaseController.js";
import { Activity } from "../ACTIVITY/Activity_Archive.js";
import { CodeCreator } from "../CODES/CodeCreator.js";
import { Personal } from "../PERSONAL/Personal_Archive.js";
import { Section } from "../SECTION/Section.js";

// River loves you tho
class Submit {

    constructor() {
        this.codes = new CodeCreator("TEST", "TEST", 0, "KIAMTA");
        this.databaseInfo = new DatabaseController();
        this.characterCodeList = {};
    };

    async READ_MEMORY() {
        this.codes.path = await this.codes.CODE_INIT_ROUTE({
            TAG: 'NEW_CHARACTER',
            SUBSECTION: 'ARCHIVE'
        });
        return await this.codes.READ();
    };
    async SUBMIT_NEW_CHARACTER(REQUEST) {
        let memory = await this.READ_MEMORY();
        let dataToSubmit = memory.REQUIRED;
        dataToSubmit.SECTION = memory.SECTION;
        await this.CHARACTER_CODES(dataToSubmit);
        if (memory.ACTIVITY !== "NONE") {
            await this.ACTIVITY_DATA(memory.ACTIVITY);
        }
    };
    async CHARACTER_CODES(values) {

        // == CREATE CHARACTER CODES == //
        this.codes.first = values.FIRST;
        this.codes.last = values.LAST;
        this.codes.year = values.YEAR;
        this.codes.planet = values.PLANET;
        const All_Character_Codes = await this.codes.GENERATE_UNIQUE_CODES();

        // == SET UP SECTIONS == //
        this.section = values.SECTION.SECTION;
        this.mushroom = All_Character_Codes.MUSHROOM;
        let All_Character_Section_Codes = this.codes.SECTION_CODE_LIST(All_Character_Codes.MUSHROOM);

        All_Character_Codes.DRAGON = All_Character_Section_Codes.DRAGON;
        All_Character_Codes.WAR = All_Character_Section_Codes.WAR;
        All_Character_Codes.KESSYA = All_Character_Section_Codes.KESSYA;
        All_Character_Codes.NIGHTMARE = All_Character_Section_Codes.NIGHTMARE;
        All_Character_Codes.PLANET = All_Character_Section_Codes.PLANET;
        All_Character_Codes.SECTION = All_Character_Section_Codes[this.section];

        // == INSERT CODE DATA INTO THE ARCHIVE == //
        if (this.section === "FINAL TIMELINE") {
            All_Character_Codes.SECTION = All_Character_Section_Codes.PLANET;
        };
        this.characterCodeList = All_Character_Codes;
        const sectionInstance = new Section();
        await sectionInstance.addValues(All_Character_Codes, 'MUSHROOM');

        // == CREATE BIRTH DATA == //
        let birthInfo = await this.databaseInfo.GENERATE_BIRTH_YEARS(values.PLANET, values.YEAR);

        // == RUN INSERTS == //
        const personalInstance = new Personal();
        await personalInstance.addValues({
            MUSHROOM: this.mushroom,
            PERSONAL: All_Character_Codes.PERSONAL,
            SECTION: All_Character_Codes.SECTION,
            FIRST: values.FIRST,
            PARENTAL: values.PARENTAL,
            FAMILY: values.LAST,
            YEAR: values.YEAR,
            PLANET: values.PLANET,
            UHX: birthInfo.UHX,
            HELIAN: birthInfo.HELIAN
        }, 'BIRTH');
        await personalInstance.addValues({
            MUSHROOM: this.mushroom,
            PERSONAL: All_Character_Codes.PERSONAL,
            SECTION: All_Character_Codes.SECTION,
            FIRST: values.FIRST,
            PARENTAL: values.PARENTAL,
            FAMILY: values.LAST,
            YEAR: values.YEAR,
            PLANET: values.PLANET
        }, 'NAMES');
        personalInstance.addValues({
            MUSHROOM: this.mushroom,
            PERSONAL: All_Character_Codes.PERSONAL,
            SECTION: All_Character_Codes.SECTION,
            FIRST: values.FIRST,
            PARENTAL: values.PARENTAL,
            FAMILY: values.LAST,
            YEAR: values.YEAR,
            PLANET: values.PLANET
        }, 'RACE');
    };
    async ACTIVITY_DATA(data) {
        console.log(data)
        const activityInstance = new Activity();
        if (data.hasOwnProperty('MISC')) {
            await activityInstance.addValues({
                ACTIVITY: this.characterCodeList.ACTIVITY,
                SECTION: this.characterCodeList.SECTION,
                MISC_TASK: data.MISC.ACTIVITY
            }, 'MISC');
        }
        if (data.hasOwnProperty('SPORT')) {
            await activityInstance.addValues({
                ACTIVITY: this.characterCodeList.ACTIVITY,
                SECTION: this.characterCodeList.SECTION,
                SPORT: data.SPORT.SPORT,
                ORGANISATION: data.SPORT.TEAM,
                SPORT_PRO: data.SPORT.SPORT_PRO
            }, 'SPORTS');
        }
        if (data.hasOwnProperty('MUSIC')) {
            await activityInstance.addValues({
                ACTIVITY: this.characterCodeList.ACTIVITY,
                SECTION: this.characterCodeList.SECTION,
                INSTRUMENT: data.MUSIC.INSTRUMENT,
                BAND_NAME: data.MUSIC.BAND_NAME,
                ORCHESTRA_NAME: data.MUSIC.ORCHESTRA_NAME,
                MUSIC_PRO: data.MUSIC.MUSIC_PRO
            }, 'MUSIC');
        }
    };
}

export {Submit};