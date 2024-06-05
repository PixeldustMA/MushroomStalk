import { Explorer } from "../../../../../CONSOLE/Explorer.js";

class Music extends Explorer{
    constructor() {
        super()
        this.categoryName = "MUSIC";
        this.filePath = "£££-UserMemory/EXPLORER/DATABASE/CULTURE/MUSIC/";
    };

    // == GENERATION == //
    async GENERATE_INSTRUMENT(instrumentName, type, planetOfOrigin, description) {
        await this.INSERT_NEW_ITEM(this.categoryName, instrumentName, type, this.filePath, false, planetOfOrigin, description);
        await this.GENERATE_INSTRUMENT_DATA(instrumentName);
        await this.SET_INSTRUMENT_TYPE(type, instrumentName);
        await this.SET_INSTRUMENT_NAME(instrumentName, instrumentName);
        await this.SET_INSTRUMENT_ORIGIN_PLANET(instrumentName, planetOfOrigin);
        await this.UPDATE_MUSIC_PLANET_FILE(planetOfOrigin, instrumentName);
        setTimeout(() => {
            this.UPDATE_ALL_MUSIC_FILE(instrumentName)
                .then((UPDATED) => {return UPDATED;});
        }, 1000);
    };
    async GENERATE_INSTRUMENT_TYPE(typeName, typeDescription) {
        await this.CREATE_TYPE(this.categoryName, typeName, this.filePath);
        await this.SET_INSTRUMENT_TYPE_DESCRIPTION(typeName, typeDescription);
    };

    // == UPDATES == //
    async SET_INSTRUMENT_TYPE(value, instrumentName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, instrumentName);
        libraryFile.TYPE = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_INSTRUMENT_NAME(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.NAME = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_INSTRUMENT_ORIGIN_PLANET(instrumentName, planetName){

        let planetFile = await this.READ_LOCATION_FILE(planetName, this.categoryName );
        if (planetFile.hasOwnProperty("ORIGIN")) {
            planetFile.ORIGIN.push(instrumentName.toUpperCase());
        }
        else (
            planetFile["ORIGIN"] = [instrumentName.toUpperCase()]
        );
        this.data = planetFile;
        await this.SAVE();

        let libraryFile = await this.READ_INSTRUMENT(instrumentName);
        libraryFile.PLANET = planetName;
        this.data = libraryFile;
        return await this.SAVE();

    };
    async CHANGE_INSTRUMENT_DESCRIPTION(instrumentName, newDescription) {
        return await this.UPDATE_DESCRIPTION_FILE(this.categoryName, instrumentName, newDescription);
    };
    async GENERATE_INSTRUMENT_DATA(item) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: item.toUpperCase(),
            SECTION: this.categoryName,
            SUBSECTION: "LIBRARY",
        });
        this.data = this.#INSTRUMENT_TEMPLATE();
        await this.SAVE();
    };
    async SET_INSTRUMENT_TYPE_DESCRIPTION(typeName, description) {
        return await this.NEW_TEXT_FILE(this.categoryName, typeName, description, this.filePath);
    };
    async UPDATE_ALL_MUSIC_FILE(fooditem) {
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
    async UPDATE_MUSIC_PLANET_FILE(planetName, instrumentName) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'PLANETS',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        if (file.hasOwnProperty(planetName.toUpperCase())) {
            file[planetName.toUpperCase()].push(instrumentName);
        }
        else {
            file[planetName.toUpperCase()] = [];
            file[planetName.toUpperCase()].push(instrumentName);
        };
        this.data = file;
        await this.SAVE();
    }

    // == READ == //
    async READ_INSTRUMENT(itemName) {
        return await this.READ_ITEN(this.categoryName, itemName);
    };
    async READ_INSTRUMENT_TYPES() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'TYPES',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        return file;
    };
    async READ_MUSIC_DESCRIPTION(itemName) {
        return await this.READ_DETAILS(this.categoryName, itemName);
    };
    async READ_MUSIC_ALL() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    };
    async READ_MUSIC_ALL_PLANET_FILE(){
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'PLANETS',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    };

    // == SEARCH == //
    async SEARCH_INSTRUMENT_BY_TYPE(type) {
        const allItemFile = await this.READ_MUSIC_ALL();
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
    async SEARCH_INSTRUMENT_ALPHABETICAL_PLANET(letter) {

        let file = await this.READINSTRUMENT_ALL_PLANET_FILE();
        let planetNames = Object.keys(file);
        let planetList = [];

        planetNames.forEach(Orb => {
            if (Orb[0].toUpperCase() === letter) {
                planetList.push(Orb);
            };
        });
        return planetList;
    };
    async SEARCH_INSTRUMENT_BY_PLANET(planetName) {
        return await this.READ_LOCATION_FILE(planetName, this.categoryName);
    };
    async SEARCH_INSTRUMENT_ALPHABETICAL(letter) {
        let planetList = await this.SEARCH_INSTRUMENT_ALPHABETICAL_PLANET(letter);
        console.log(planetList)
        let usefulObject = {};
        planetList.forEach(PLANET => {
            this.SEARCH_INSTRUMENT_BY_ORIGIN_PLANET(PLANET).then((RESULT) => {
                usefulObject[PLANET] = RESULT.FOOD_NAMES;
                return usefulObject;
            });
        });
        return usefulObject;
    };

    // == TEMPLATES == //
    #INSTRUMENT_TEMPLATE() {
        return {
            "NAME": "",
            "TYPE": "",
            "PLANET": ""
        }
    };
};

export {Music};