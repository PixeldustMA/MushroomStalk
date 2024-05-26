import { Section_Insert } from "./Section_Insert.js";

class Section {

    constructor() {
    }

    async addValues(data, tag) {
        switch (tag) {
            case 'MUSHROOM':
                let addSectionInstance = new Section_Insert({
                    MUSHROOM: data.MUSHROOM, 
                    ACTIVITY: data.ACTIVITY, 
                    ANCESTRY: data.ANCESTRY, 
                    EDUCATION: data.EDUCATION,  
                    EMPLOYMENT: data.EMPLOYMENT,  
                    HALEX: data.HALEX, 
                    ORGANISATION: data.ORGANISATION,  
                    PERSONAL: data.PERSONAL, 
                    LOCATION: data.LOCATION, 
                    PET: data.PET, 
                    RELATIONSHIP: data.RELATIONSHIP
                });
                return await addSectionInstance.SECTION_MUSHROOM_INSERT();
            default:
                break;
        }

    };
};

export {Section};