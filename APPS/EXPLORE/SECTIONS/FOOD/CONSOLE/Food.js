import { Explorer } from "../../../CONSOLE/Explorer.js";

class Food extends Explorer{

    constructor() {
        super();
        this.categoryName = "FOOD";
        this.filePath = "£££-UserMemory/EXPLORER/DATABASE/CULTURE/FOOD/";
    };

    // == GENERATION == //
    async GENERATE_FOOD(foodName, flavour, type, ingredients, planetOfOrigin) {
        await this.INSERT_NEW_ITEM(this.categoryName, foodName, type, this.filePath, false);
        await this.GENERATE_DATA(foodName);
        await this.SET_FLAVOUR(foodName, flavour);
        await this.SET_TYPE(type, foodName);
        await this.SET_NAME(foodName, foodName);
        await this.SET_PLANET(foodName, planetOfOrigin);
        for (let ingredientIndex = 0; ingredientIndex < ingredients.length; ingredientIndex++) {
            await this.ADD_INGREDIENT(foodName, ingredients[ingredientIndex]);
        };
        await this.UPDATE_FOOD_PLANET_FILE(planetOfOrigin, foodName);
        setTimeout(() => {
            this.UPDATE_ALL_FOOD_FILE(foodName)
                .then((UPDATED) => {
                    console.log("UPDATED??")
                    return UPDATED;
                })

        }, 1000);
    };
    async GENERATE_TYPE(typeName, typeDescription) {
        await this.CREATE_TYPE(this.categoryName, typeName, this.filePath);
        await this.SET_TYPE_DESCRIPTION(typeName, typeDescription);
    };
    async GENERATE_FLAVOUR(flavourName) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'FLAVOURS',
            SECTION: 'FOOD',
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        file[flavourName.toUpperCase()] = flavourName.toUpperCase();
        this.data = file;
        return await this.SAVE();
    }

    // == UPDATES == //
    async SET_TYPE(value, foodName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, foodName);
        libraryFile.TYPE = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_NAME(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.NAME = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_FLAVOUR(foodName, flavour){
        let libraryFile = await this.READ_FOOD_ITEM(foodName);
        libraryFile.FLAVOUR = flavour;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_PLANET(foodName, planetName){

        let planetFile = await this.READ_LOCATION_FILE(planetName, this.categoryName );
        planetFile.FOOD_NAMES.push(foodName);
        this.data = planetFile;
        await this.SAVE();

        let libraryFile = await this.READ_FOOD_ITEM(foodName);
        libraryFile.PLANET = planetName;
        this.data = libraryFile;
        return await this.SAVE();

    };
    async ADD_INGREDIENT(foodName, ingredient){
        let libraryFile = await this.READ_FOOD_ITEM(foodName);
        let arrayOfIngredients = libraryFile.INGREDIENTS;
        arrayOfIngredients.push(ingredient);
        libraryFile.INGREDIENTS = arrayOfIngredients;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async CHANGE_DESCRIPTION(foodName, newDescription) {
        return await this.UPDATE_DESCRIPTION_FILE(this.categoryName, foodName, newDescription);
    };
    async GENERATE_DATA(item) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: item.toUpperCase(),
            SECTION: this.categoryName,
            SUBSECTION: "LIBRARY",
        });
        this.data = this.#MEAL_OR_SNACK_TEMPLATE();
        await this.SAVE();
    };
    async SET_TYPE_DESCRIPTION(typeName, description) {
        return await this.NEW_TEXT_FILE(this.categoryName, typeName, description, this.filePath);
    };
    async UPDATE_ALL_FOOD_FILE(fooditem) {
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
    async UPDATE_FOOD_PLANET_FILE(planetName, foodName) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'PLANETS',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        if (file.hasOwnProperty(planetName.toUpperCase())) {
            file[planetName.toUpperCase()].push(foodName);
        }
        else {
            file[planetName.toUpperCase()] = [];
            file[planetName.toUpperCase()].push(foodName);
        };
        this.data = file;
        await this.SAVE();
    }

    // == READ == //
    async READ_FOOD_ITEM(itemName) {
        return await this.READ_ITEN(this.categoryName, itemName);
    };
    async READ_FLAVOURS() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'FLAVOURS',
            SECTION: 'FOOD',
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        return file;
    };
    async READ_TYPES() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'TYPES',
            SECTION: 'FOOD',
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        return file;
    };
    async READ_DESCRIPTION(itemName) {
        return await this.READ_DETAILS(this.categoryName, itemName);
    };
    async READ_ALL() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: 'FOOD',
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    };
    async READ_FOOD_ALL_PLANET_FILE(){
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'PLANETS',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        console.log(this.path)
        return await this.READ();
    };

    // == SEARCH == //
    async SEARCH_ITEM_BY_FLAVOUR(flavour) {

        const allItemFile = await this.READ_ALL();
        const allItems = Object.keys(allItemFile);
        let flavourList = [];

        for (let itemIndex = 0; itemIndex < allItems.length; itemIndex++) {
            const foodStuff = allItems[itemIndex];
            let itemData = await this.READ_ITEN(this.categoryName, foodStuff);
            if (itemData.FLAVOUR === flavour.toUpperCase()) {
                flavourList.push(foodStuff);
            };
        };
        return flavourList
    };
    async SEARCH_ITEM_BY_TYPE(type) {
        const allItemFile = await this.READ_ALL();
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
    async SEARCH_FOOD_ALPHABETICAL_PLANET(letter) {

        let file = await this.READ_FOOD_ALL_PLANET_FILE();
        console.log(file)
        let planetNames = Object.keys(file);
        let planetList = [];

        planetNames.forEach(Orb => {
            if (Orb[0].toUpperCase() === letter) {
                planetList.push(Orb);
            };
        });
        return planetList;
    };
    async SEARCH_FOOD_BY_PLANET(planetName) {
        return await this.READ_LOCATION_FILE(planetName, this.categoryName);
    };
    async SEARCH_FOOD_ALPHABETICAL(letter) {
        let planetList = await this.SEARCH_FOOD_ALPHABETICAL_PLANET(letter);
        console.log(planetList)
        let usefulObject = {};
        planetList.forEach(PLANET => {
            this.SEARCH_FOOD_BY_PLANET(PLANET).then((RESULT) => {
                usefulObject[PLANET] = RESULT.FOOD_NAMES;
                return usefulObject;
            });
        });
        return usefulObject;
    };

    // == TEMPLATES == //
    #MEAL_OR_SNACK_TEMPLATE() {
        return {
            "NAME": "",
            "FLAVOUR": "",
            "TYPE": "",
            "INGREDIENTS": []
        }
    };
};

export {Food};