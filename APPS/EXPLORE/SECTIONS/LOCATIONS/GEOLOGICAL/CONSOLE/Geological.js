import { Explorer } from "../../../../CONSOLE/Explorer.js";

class Geological extends Explorer {

    constructor() {
        super();
        this.categoryName = "GEOLOGICAL";
        this.filePath = "£££-UserMemory/EXPLORER/DATABASE/LOCATIONS/GEOLOGICAL/";
    };

    // == GENERATION == //
    async GENERATE_GEOLOGICAL_LOCATION(geoName, geoType, geoElement, geoColour, geoDescription, geoPlanet) {
        await this.INSERT_NEW_ITEM(this.categoryName, geoName, geoType, this.filePath, false, "NONE", geoDescription);
        await this.GENERATE_GEOLOGICAL_LOCATION_DATA(geoName);
        await this.SET_GEOLOGICAL_LOCATION_TYPE(geoType, geoName);
        await this.SET_GEOLOGICAL_LOCATION_ELEMENT(geoElement, geoName);
        await this.SET_GEOLOGICAL_LOCATION_COLOUR(geoColour, geoName);
        await this.SET_GEOLOGICAL_LOCATION_PLANET(geoPlanet, geoName);
        setTimeout(() => {
            this.SET_GEOLOGICAL_LOCATION_NAME(geoName, geoName).then((ELE_RESULT) => {return ELE_RESULT})         
        },500);

        setTimeout(() => {
            this.UPDATE_GEOLOGICAL_LOCATION_ALL_FILE(geoName)
                .then((UPDATED) => {return UPDATED;});
        }, 1000);
    };
    async GENERATE_GEOLOGICAL_LOCATION_TYPE(typeName, typeDescription) {
        console.log("LOCATION")
        await this.CREATE_TYPE(this.categoryName, typeName, this.filePath);
        await this.SET_GEOLOGICAL_LOCATION_DESCRIPTION(typeName, typeDescription);
    };
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
    async SET_GEOLOGICAL_LOCATION_NAME(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.NAME = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_GEOLOGICAL_LOCATION_DESCRIPTION(locationName, newDescription) {
        return await this.UPDATE_DESCRIPTION_FILE(this.categoryName, locationName, newDescription);
    };
    async SET_GEOLOGICAL_LOCATION_TYPE_DESCRIPTION(typeName, description) {
        return await this.NEW_TEXT_FILE(this.categoryName, typeName, description, this.filePath);
    };
    async SET_GEOLOGICAL_LOCATION_ELEMENT(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.ELEMENT = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_GEOLOGICAL_LOCATION_COLOUR(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.COLOUR = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_GEOLOGICAL_LOCATION_PLANET(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.PLANET = value;
        this.data = libraryFile;
        return await this.SAVE();
    };

    // == UPDATE == //
    async UPDATE_GEOLOGICAL_LOCATION_ALL_FILE(locationName) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        file[locationName.toUpperCase()] = [locationName.toUpperCase(), this.categoryName, "LIBRARY"];
        this.data = file;
        await this.SAVE();
    }
    async UPDATE_GEOLOGICAL_LOCATION_PLANET_FILE(planetName, locationName) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'PLANETS',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        if (file.hasOwnProperty(planetName.toUpperCase())) {
            file[planetName.toUpperCase()].push(locationName);
        }
        else {
            file[planetName.toUpperCase()] = [];
            file[planetName.toUpperCase()].push(locationName);
        };
        this.data = file;
        await this.SAVE();
    }

    // == READ == //
    async READ_GEOLOGICAL_LOCATION(itemName) {
        return await this.READ_ITEN(this.categoryName, itemName);
    }
    async READ_GEOLOGIAL_TYPES() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'TYPES',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        console.log(file)
        return file;
    }
    async READ_GEOLOGICAL_DESCRIPTION(itemName) {
        return await this.READ_DETAILS(this.categoryName, itemName);
    }
    async READ_GEOLOGICAL_LOCATION_ALL() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    }
    async READ_GEOLOGICAL_ALL_PLANET_FILE(){
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'PLANETS',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    }

    // == SEARCH == //
    async SEARCH_GEOLOGICAL_LOCATION_BY_ELEMENT(element) {
        const allItemFile = await this.READ_ALL();
        const allItems = Object.keys(allItemFile);
        let elemenList = [];

        for (let itemIndex = 0; itemIndex < allItems.length; itemIndex++) {
            const location = allItems[itemIndex];
            let itemData = await this.READ_ITEN(this.categoryName, location);
            if (itemData.ELEMENT === element.toUpperCase()) {
                elemenList.push(location);
            };
        };
        return elemenList
    };
    async SEARCH_GEOLOGICAL_LOCATION_BY_COLOUR(colour) {
        const allItemFile = await this.READ_ALL();
        const allItems = Object.keys(allItemFile);
        let colourList = [];

        for (let itemIndex = 0; itemIndex < allItems.length; itemIndex++) {
            const location = allItems[itemIndex];
            let itemData = await this.READ_ITEN(this.categoryName, location);
            if (itemData.COLOUR === colour.toUpperCase()) {
                colourList.push(location);
            };
        };
        return colourList
    };
    async SEARCH_GEOLOGICAL_LOCATION_BY_TYPE(type) {
        const allItemFile = await this.READ_ALL();
        const allItems = Object.keys(allItemFile);
        let typeList = [];

        for (let itemIndex = 0; itemIndex < allItems.length; itemIndex++) {
            const location = allItems[itemIndex];
            let itemData = await this.READ_ITEN(this.categoryName, location);
            if (itemData.TYPE === type.toUpperCase()) {
                typeList.push(location);
            };
        };
        return typeList
    };
    async SEARCH_GEOLOGICAL_LOCATION_BY_PLANET(planetName) {
        const allItemFile = await this.READ_ALL();
        const allItems = Object.keys(allItemFile);
        let planetList = [];

        for (let itemIndex = 0; itemIndex < allItems.length; itemIndex++) {
            const location = allItems[itemIndex];
            let itemData = await this.READ_ITEN(this.categoryName, location);
            if (itemData.PLANET === planetName.toUpperCase()) {
                planetList.push(location);
            };
        };
        return planetList
    };

    // == TEMPLATES == //
    #GEOLOGICAL_TEMPLATE() {
        return {
            "NAME": "",
            "TYPE": "",
            "COLOUR": "",
            "ELEMENT": "",
            "PLANET": ""
        }
    };
}

export {Geological};