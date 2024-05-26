import { Personal_Insert } from "./Personal_Insert.js";

class Personal {

    constructor() {
    }

    async addValues(data, tag) {
        switch (tag) {
            case 'BIRTH':
                let addBirthInstance = new Personal_Insert({
                    PERSONAL: data.PERSONAL, 
                    SECTION:  data.SECTION,
                    YEAR:  data.YEAR,
                    HELIAN:  data.HELIAN,
                    UHX:  data.UHX,
                    PLANET: data.PLANET
                });
                return await addBirthInstance.PERSONAL_BIRTH_INSERT();
            case 'NAMES':
                let addNameInstance = new Personal_Insert({
                    PERSONAL: data.PERSONAL, 
                    SECTION:  data.SECTION,
                    FIRST: data.FIRST,
                    PARENTAL: data.PARENTAL,
                    FAMILY: data.FAMILY
                });
                return await addNameInstance.PERSONAL_NAMES_INSERT();
            case 'RACE':
                let addRaceInstance = new Personal_Insert({
                    PERSONAL: data.PERSONAL, 
                    SECTION:  data.SECTION,
                    RACE: data.PLANET
                });
                return await addRaceInstance.PERSONAL_RACE_INSERT();
            case 'TITLE':
                let addTitleInstance = new Personal_Insert({
                    PERSONAL: data.PERSONAL, 
                    SECTION:  data.SECTION,
                    TITLE_TYPE: data.TITLE_TYPE,
                    TITLE: data.TITLE,
                    TITLE_START: data.TITLE_START,
                    TITLE_NUMBER: data.TITLE_NUMBER
                });
                return await addTitleInstance.PERSONAL_TITLE_INSERT();
            case 'ALL':
                let addInstance = new Personal_Insert({
                    PERSONAL: data.PERSONAL, 
                    SECTION:  data.SECTION,
                    YEAR:  data.YEAR,
                    HELIAN:  data.HELIAN,
                    UHX:  data.UHX,
                    PLANET: data.PLANET,
                    FIRST: data.FIRST,
                    PARENTAL: data.PARENTAL,
                    FAMILY: data.FAMILY,
                    RACE: data.RACE,
                    TITLE_TYPE: data.TITLE_TYPE,
                    TITLE: data.TITLE,
                    TITLE_START: data.TITLE_START,
                    TITLE_NUMBER: data.TITLE_NUMBER
                });
                await addInstance.PERSONAL_BIRTH_INSERT();
                await addInstance.PERSONAL_BIRTH_INSERT();
                await addInstance.PERSONAL_RACE_INSERT();
                return await addInstance.PERSONAL_TITLE_INSERT();
            default:
                break;
        }

    };
};

export {Personal};