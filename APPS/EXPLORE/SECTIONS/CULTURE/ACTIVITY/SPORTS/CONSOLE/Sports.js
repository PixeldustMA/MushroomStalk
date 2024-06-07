import { Explorer } from "../../../../../CONSOLE/Explorer.js";

class Sports extends Explorer{
    constructor() {
        super()
        this.categoryName = "SPORTS";
        this.filePath = "£££-UserMemory/EXPLORER/DATABASE/CULTURE/SPORT/";
    };

    // == GENERATION == //
    async GENERATE_SPORT(sportName, type, planetOfOrigin, description) {
        await this.INSERT_NEW_ITEM(this.categoryName, sportName, type, this.filePath, false, planetOfOrigin, description);
        await this.GENERATE_SPORT_DATA(sportName);
        await this.SET_SPORT_TYPE(type, sportName);
        await this.SET_SPORT_NAME(sportName, sportName);
        await this.SET_SPORT_ORIGIN_PLANET(sportName, planetOfOrigin);
        await this.UPDATE_SPORT_PLANET_FILE(planetOfOrigin, sportName);
        setTimeout(() => {
            this.UPDATE_ALL_SPORT_FILE(sportName)
                .then((UPDATED) => {return UPDATED;});
        }, 1000);
    };
    async GENERATE_SPORT_TYPE(typeName, typeDescription) {
        await this.CREATE_TYPE(this.categoryName, typeName, this.filePath);
        await this.SET_SPORT_TYPE_DESCRIPTION(typeName, typeDescription);
    };

    // == UPDATES == //
    async SET_SPORT_TYPE(value, sportName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, sportName);
        libraryFile.TYPE = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_SPORT_NAME(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.NAME = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_SPORT_ORIGIN_PLANET(sportName, planetName){

        let planetFile = await this.READ_LOCATION_FILE(planetName, this.categoryName );
        if (planetFile.hasOwnProperty("ORIGIN")) {
            planetFile.ORIGIN.push(sportName.toUpperCase());
        }
        else (
            planetFile["ORIGIN"] = [sportName.toUpperCase()]
        );
        this.data = planetFile;
        await this.SAVE();

        let libraryFile = await this.READ_SPORT(sportName);
        libraryFile.PLANET = planetName;
        this.data = libraryFile;
        return await this.SAVE();

    };
    async CHANGE_SPORT_DESCRIPTION(sportName, newDescription) {
        return await this.UPDATE_DESCRIPTION_FILE(this.categoryName, sportName, newDescription);
    };
    async GENERATE_SPORT_DATA(item) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: item.toUpperCase(),
            SECTION: this.categoryName,
            SUBSECTION: "LIBRARY",
        });
        this.data = this.#SPORT_TEMPLATE();
        await this.SAVE();
    };
    async SET_SPORT_TYPE_DESCRIPTION(typeName, description) {
        return await this.NEW_TEXT_FILE(this.categoryName, typeName, description, this.filePath);
    };
    async UPDATE_ALL_SPORT_FILE(fooditem) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        file[fooditem.toUpperCase()] = [fooditem.toUpperCase(), this.categoryName, "LIBRARY"];
        this.data = file;
        await this.SAVE();
    };
    async UPDATE_SPORT_PLANET_FILE(planetName, sportName) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'PLANETS',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        if (file.hasOwnProperty(planetName.toUpperCase())) {
            file[planetName.toUpperCase()].push(sportName);
        }
        else {
            file[planetName.toUpperCase()] = [];
            file[planetName.toUpperCase()].push(sportName);
        };
        this.data = file;
        await this.SAVE();
    }

    // == READ == //
    async READ_SPORT(itemName) {
        return await this.READ_ITEN(this.categoryName, itemName);
    };
    async READ_SPORT_TYPES() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'TYPES',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        return file;
    };
    async READ_SPORT_DESCRIPTION(itemName) {
        return await this.READ_DETAILS(this.categoryName, itemName);
    };
    async READ_SPORT_ALL() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    };
    async READ_SPORT_ALL_PLANET_FILE(){
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'PLANETS',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    };

    // == SEARCH == //
    async SEARCH_SPORT_BY_TYPE(type) {
        const allItemFile = await this.READ_SPORT_ALL();
        const allItems = Object.keys(allItemFile);
        let typeList = [];

        for (let itemIndex = 0; itemIndex < allItems.length; itemIndex++) {
            const foodStuff = allItems[itemIndex];
            let itemData = await this.READ_ITEN(this.categoryName, foodStuff);
            if (itemData.TYPE === type.toUpperCase()) {
                typeList.push(foodStuff);
            };
        };
        return typeList;
    };
    async SEARCH_SPORT_ALPHABETICAL_PLANET(letter) {

        let file = await this.READ_SPORT_ALL_PLANET_FILE();
        let planetNames = Object.keys(file);
        let planetList = [];

        planetNames.forEach(Orb => {
            if (Orb[0].toUpperCase() === letter) {
                planetList.push(Orb);
            };
        });
        return planetList;
    };
    async SEARCH_SPORT_BY_PLANET(planetName) {
        return await this.READ_LOCATION_FILE(planetName, this.categoryName);
    };
    async SEARCH_SPORT_ALPHABETICAL(letter) {
        let planetList = await this.SEARCH_SPORT_ALPHABETICAL_PLANET(letter);
        console.log(planetList)
        let usefulObject = {};
        planetList.forEach(PLANET => {
            this.SEARCH_SPORT_BY_ORIGIN_PLANET(PLANET).then((RESULT) => {
                usefulObject[PLANET] = RESULT.FOOD_NAMES;
                return usefulObject;
            });
        });
        return usefulObject;
    };

    // == TEMPLATES == //
    #SPORT_TEMPLATE() {
        return {
            "NAME": "",
            "TYPE": "",
            "PLANET": ""
        }
    };
};

export {Sports};