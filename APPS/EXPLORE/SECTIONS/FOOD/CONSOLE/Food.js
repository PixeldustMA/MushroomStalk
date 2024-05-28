import { Explorer } from "../../../CONSOLE/Explorer.js";

class Food extends Explorer{

    constructor() {
        super();
        this.categoryName = "FOOD";
    };

    // == GENERATION == //
    async GENERATE_FOOD(foodName, flavour, type, ingredients) {
        await this.INSERT_NEW_ITEM(this.categoryName, foodName, type, this.pathString, false);
        await this.SET_FLAVOUR(foodName, flavour);
        ingredients.forEach(item => {
            this.ADD_INGREDIENT(item).then((RESULT) => {return RESULT});
        });
    };

    // == UPDATES == //
    async SET_TYPE(value, foodName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, foodName);
        libraryFile.TYPE = value;
        return await this.SAVE();
    };
    async SET_NAME(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.NAME = value;
        return await this.SAVE();
    };
    async SET_FLAVOUR(foodName, flavour){
        const libraryFile = await this.READ_ITEN(this.categoryName, foodName);
        libraryFile.FLAVOUR = flavour;
        return await this.SAVE();
    };
    async ADD_INGREDIENT(foodName, ingredient){
        const libraryFile = await this.READ_ITEN(this.categoryName, foodName);
        libraryFile.INGREDIENTS.push(ingredient);
        return await this.SAVE();
    }
    async CHANGE_DESCRIPTION(foodName, newDescription) {
        return await this.UPDATE_DESCRIPTION_FILE(this.categoryName, foodName, newDescription);
    };
    async READ_FLAVOURS() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'FLAVOURS',
            SECTION: 'FOOD',
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        return Object.keys(file.ALL_FLAVOURS);
    };
    async READ_TYPES() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'TYPE',
            SECTION: 'FOOD',
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        return Object.keys(file.ALL_TYPES);
    };
    async READ_DESCRIPTION(itemName) {
        return await this.READ_DETAILS(this.categoryName, itemName);
    }
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