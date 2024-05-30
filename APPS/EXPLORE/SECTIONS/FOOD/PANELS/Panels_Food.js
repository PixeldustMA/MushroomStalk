import { create } from "../../../../../CONSOLE/PLATYPUS/Create.js";
import { Food } from "../CONSOLE/Food.js";

class Panel_Food {

    constructor() {
        this.Flavours = [];
        this.FoodTypes = [];
        this.FlavourObject = {};
        this.TypeObject = {};
        this.foodInstance = new Food(); 

        this.FoodName = "";
        this.ingredients = "";
        this.itemFlavour = "";
        this.foodType = "";
        this.foodDescription = "";
        this.planetFood = "";
    };

    // == INPUTS == //
    PANEL_INPUT_ITEM() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const labelName = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "NAME"]
        }).init();
        const labelIngredients = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "INGREDIENT"]
        }).init();
        const labelFlavour = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "FLAVOUR"]
        }).init();
        const labelType = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "TYPE"]
        }).init();
        const labelTextBox = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "DESCRIPTION"]
        }).init();

        // == INPUT == //
        const inputName = new create({
            tag: 'input',
            placeholder: ["FOOD", "PLACEHOLDER", "NAME"]
        }).init();
        const inputIngredients = new create({
            tag: 'input',
            placeholder: ["FOOD", "PLACEHOLDER", "INGREDIENT"]
        }).init();

        // == SELECT == //
        const selectFlavour = new create({
            tag: 'select',
            options: this.Flavours
        }).init();
        const selectType = new create({
            tag: 'select',
            options: this.FoodTypes
        }).init();

        // == TEXT BOXES == //
        const textboxDescription = new create({
            tag: 'textarea'
        }).init();

        // == BUTTON == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            const foodItemName = inputName.value;
            const foodItemFlavour = selectFlavour.options[selectFlavour.selectedIndex].text;
            const foodItemType = selectType.options[selectType.selectedIndex].text;
            const foodItemIngredients = inputIngredients.value.split(',');

            this.foodInstance.GENERATE_FOOD(foodItemName, foodItemFlavour, foodItemType, foodItemIngredients)
                .then((FOOD) => {return FOOD});
        });

        // == ATTACHMENTS == //
        wrapperItem.append(...[

            labelName,
            inputName,

            labelIngredients,
            inputIngredients,

            labelFlavour,
            selectFlavour,

            labelType,
            selectType,

            labelTextBox,
            textboxDescription,

            buttonSubmit

        ]);
        return wrapperItem;
    };
    PANEL_INPUT_TYPE() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();
        const wrapperDisplay = new create({
            tag: 'div'
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'dl'
        }).init();
        let lists = this.GENERATE_LISTS(this.TypeObject);

        // == TEXT == //
        const labelName = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "NAME"]
        }).init();
        const labelTextBox = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "DESCRIPTION"]
        }).init();

        // == INPUTS == //
        const inputName = new create({
            tag: 'input',
            placeholder: ["FOOD", "PLACEHOLDER", "NAME"]
        }).init();

        // == TEXT BOXES == //
        const textboxDescription = new create({
            tag: 'textarea'
        }).init();

        // == BUTTON == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            const typeName = inputName.value;
            const typeDescription = textboxDescription.value;
            this.foodInstance.GENERATE_TYPE(typeName, typeDescription).then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        listDisplay.append(lists);
        wrapperDisplay.append(listDisplay);
        wrapperItem.append(...[

            labelName,
            inputName,

            labelTextBox,
            textboxDescription,

            buttonSubmit
        ]);
        return wrapperItem;
    };
    PANEL_INPUT_FLAVOUR() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();
        const wrapperDisplay = new create({
            tag: 'div'
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'dl'
        }).init();
        let lists = this.GENERATE_LISTS(this.FlavourObject);

        // == TEXT == //
        const labelName = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "NAME"]
        }).init();

        // == INPUTS == //
        const inputName = new create({
            tag: 'input',
            placeholder: ["FOOD", "PLACEHOLDER", "NAME"]
        }).init();

        // == BUTTON == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            this.foodInstance.GENERATE_FLAVOUR(inputName.value).then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        listDisplay.append(lists);
        wrapperDisplay.append(listDisplay);
        wrapperItem.append(...[

            labelName,
            inputName,

            buttonSubmit
        ]);
        return wrapperItem;
    };

    // == DISPLAY == //
    PANEL_DISPLAY_ITEM() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const labelName = new create({
            tag: 'label',
            customText: this.FoodName
        }).init();
        const labelType = new create({
            tag: 'label',
            customText: this.foodType
        }).init();
        const labelFlavour = new create({
            tag: 'label',
            customText: this.itemFlavour
        }).init();
        const labelDescription = new create({
            tag: 'p',
            customText: this.foodDescription
        }).init();
        const labelPlanet = new create({
            tag: 'label',
            customText: this.planetFood
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'ul'
        }).init();
        let listItems = this.GENERATE_LISTS(this.ingredients, listDisplay);

        // == ATTACHMENTS == //
        listItems.append(listDisplay);
        wrapperItem.append(...[
            labelName,
            labelType,
            labelFlavour,
            labelDescription,
            labelPlanet,
            listDisplay
        ]);
        return wrapperItem;
    };
    PANEL_DISPLAY_TYPE() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'dl'
        }).init();
        let lists = this.GENERATE_LISTS(this.TypeObject);

        // == ATTACHMENTS == //
        listDisplay.append(lists);
        wrapperItem.append(...[
            listDisplay
        ]);
    };
    PANEL_DISPLAY_FLAVOUR() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'dl'
        }).init();
        let lists = this.GENERATE_LISTS(this.FlavourObject);

        // == ATTACHMENTS == //
        listDisplay.append(lists);
        wrapperItem.append(...[
            listDisplay
        ]);
        return wrapperItem;
    };

    // == GENERATION == //
    GENERATE_LISTS(tags, element) {
        let titles = Object.keys(tags);
        titles.forEach(key => {
            let header = new create({
                tag: 'dt'
            }).init();
            header.innerHTML = key;
            let child = new create({
                tag: 'dd'
            }).init();
            child.innerHTML = tags[key];
            element.append(...[header, child])
        });
        return element;
    };
    GENERATE_SIMPLE_LISTS(tags, element) {
        tags.forEach(key => {
            let list = new create({
                tag: 'li',
                customText: key
            }).init();
            element.append(...[header])
        });
        return element;
    };
    async SET_UP_DISPLAY(itemName) {
        if (itemName !== "NONE") {
            let itemFile = await this.foodInstance.READ_FOOD_ITEM(itemName);
            let descriptionFile = await this.foodInstance.READ_DESCRIPTION(itemName);

            this.FoodName = itemFile.NAME;
            this.ingredients = itemFile.INGREDIENTS;
            this.itemFlavour = itemFile.FLAVOUR;
            this.foodType = itemFile.TYPE;
            this.foodDescription = descriptionFile;
            this.planetFood = itemFile.PLANETS;
        };
    };
    async INITIALISE() {
        this.Flavours =  Object.keys(await this.foodInstance.READ_FLAVOURS());
        this.FoodTypes = Object.keys(await this.foodInstance.READ_TYPES());
        // this.Flavours.forEach(FLAVOUR => {
        //     this.foodInstance.READ_DESCRIPTION(FLAVOUR)
        //         .then((RESULT) => {
        //             this.FlavourObject[FLAVOUR] = RESULT
        //             return this.FlavourObject;
        //         });
        // });
        // this.FoodTypes.forEach(TYPE => {
        //     this.foodInstance.READ_DESCRIPTION(TYPE)
        //         .then((RESULT) => {
        //             this.TypeObject[TYPE] = RESULT
        //             return this.TypeObject;
        //         });
        // });
    };
}

export {Panel_Food};