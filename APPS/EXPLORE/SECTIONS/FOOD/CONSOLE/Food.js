import { Explorer } from "../../../CONSOLE/Explorer.js";

class Food extends Explorer{

    constructor() {
        super();
        this.categoryName = "FOOD";
        this.filePath = "£££-UserMemory/EXPLORER/DATABASE/CULTURE/FOOD/";
    };

    // == GENERATION == //
    async GENERATE_FOOD(foodName, flavour, type, ingredients) {
        await this.INSERT_NEW_ITEM(this.categoryName, foodName, type, this.filePath, false);
        await this.GENERATE_DATA(foodName);
        await this.SET_FLAVOUR(foodName, flavour);
        await this.SET_TYPE(type, foodName);
        await this.SET_NAME(foodName, foodName);
        for (let ingredientIndex = 0; ingredientIndex < ingredients.length; ingredientIndex++) {
            await this.ADD_INGREDIENT(foodName, ingredients[ingredientIndex]);
        };
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
    async ADD_INGREDIENT(foodName, ingredient){
        let libraryFile = await this.READ_FOOD_ITEM(foodName);
        let arrayOfIngredients = libraryFile.INGREDIENTS;
        console.log(arrayOfIngredients);
        console.log("BEFORE")
        arrayOfIngredients.push(ingredient);
        console.log(arrayOfIngredients);
        console.log("AFTER")
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
        console.log(this.path)
        this.data = this.#MEAL_OR_SNACK_TEMPLATE();
        await this.SAVE();
    };
    async SET_TYPE_DESCRIPTION(typeName, description) {
        let pathString = this.filePath + "DESCRIPTION/" + typeName + ".txt";
        return await this.NEW_TEXT_FILE(this.categoryName, typeName, description, pathString);
    };

    // == READ == //
    async READ_FOOD_ITEM(itemName) {
        return await this.READ_ITEN(this.categoryName, itemName)
    };
    async READ_FLAVOURS() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'FLAVOURS',
            SECTION: 'FOOD',
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        console.log(file);
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