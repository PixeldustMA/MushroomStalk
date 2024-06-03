import { Explorer } from "../../../../CONSOLE/Explorer.js";

class Geological extends Explorer {

    constructor() {
        super();
        this.categoryName = "GEOLOGICAL";
        this.filePath = "£££-UserMemory/EXPLORER/DATABASE/LOCATION/GEOLOGICAL/";
    };

    // == GENERATION == //
    async GENERATE_GEOLOGICAL_LOCATION(geoName, geoType, geoElement, geoColour, geoDescription) {
        await this.INSERT_NEW_ITEM(this.categoryName, geoName, geoType, this.filePath, false, "NONE", geoDescription);
        await this.GENERATE_GEOLOGICAL_LOCATION_DATA(geoName);
        await this.SET_GEOLOGICAL_LOCATION_TYPE(geoType, geoName);
        setTimeout(() => {
            this.SET_GEOLOGICAL_LOCATION_NAME(geoName, geoName).then((ELE_RESULT) => {return ELE_RESULT})         
        },500);

        setTimeout(() => {
            this.UPDATE_GEOLOGICAL_LOCATION_ALL_FILE(geoName)
                .then((UPDATED) => {return UPDATED;});
        }, 1000);
    };
    async GENERATE_GEOLOGICAL_LOCATION_TYPE(typeName, typeDescription) {};
    async GENERATE_GEOLOGICAL_LOCATION_DATA(item) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: item.toUpperCase(),
            SECTION: this.categoryName,
            SUBSECTION: "LIBRARY",
        });
        this.data = this.#GEOLOGICAL_TEMPLATE();
        await this.SAVE();
    };

    // == SET == //
    async SET_GEOLOGICAL_LOCATION_TYPE(value, geoName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, geoName);
        libraryFile.TYPE = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_GEOLOGICAL_LOCATION_NAME(value, libraryName) {};
    async SET_GEOLOGICAL_LOCATION_DESCRIPTION(foodName, newDescription) {};
    async SET_GEOLOGICAL_LOCATION_TYPE_DESCRIPTION(typeName, description) {};

    // == UPDATE == //
    async UPDATE_GEOLOGICAL_LOCATION_ALL_FILE(fooditem) {}
    async UPDATE_GEOLOGICAL_LOCATION_PLANET_FILE(planetName, foodName) {}

    // == READ == //
    async READ_GEOLOGICAL_LOCATION(itemName) {}
    async READ_GEOLOGIAL_TYPES() {}
    async READ_GEOLOGICAL_DESCRIPTION(itemName) {}
    async READ_GEOLOGICAL_LOCATION_ALL() {}
    async READ_GEOLOGICAL_ALL_PLANET_FILE(){}

    // == SEARCH == //
    async SEARCH_GEOLOGICAL_LOCATION_BY_ELEMENT(element) {};
    async SEARCH_GEOLOGICAL_LOCATION_BY_COLOUR(colour) {};
    async SEARCH_GEOLOGICAL_LOCATION_BY_TYPE(type) {};
    async SEARCH_GEOLOGICAL_LOCATION_BY_PLANET(planetName) {};

    // == TEMPLATES == //
    #GEOLOGICAL_TEMPLATE() {
        return {
            "NAME": "",
            "TYPE": "",
            "COLOUR": "",
            "ELEMENT": ""
        }
    };
}

export {Geological};