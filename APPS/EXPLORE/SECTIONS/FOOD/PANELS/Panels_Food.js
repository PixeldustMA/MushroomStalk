import { create } from "../../../../../CONSOLE/PLATYPUS/Create.js";
import { Food } from "../CONSOLE/Food.js";

class Panel_Food {

    constructor() {
        this.Flavours = [];
        this.FoodTypes = [];
        this.FlavourObject = {};
        this.TypeObject = {};
        this.foodInstance = new Food(); 
    };

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
    async INITIALISE() {
        this.Flavours = await this.foodInstance.READ_FLAVOURS();
        this.FoodTypes = await this.foodInstance.READ_TYPES();

        this.Flavours.forEach(FLAVOUR => {
            this.foodInstance.READ_DESCRIPTION(FLAVOUR)
                .then((RESULT) => {
                    this.FlavourObject[FLAVOUR] = RESULT
                    return this.FlavourObject;
                });
        });
        this.FoodTypes.forEach(FLAVOUR => {
            this.foodInstance.READ_DESCRIPTION(TYPE)
                .then((RESULT) => {
                    this.TypeObject[TYPE] = RESULT
                    return this.TypeObject;
                });
        });

    };
}

export {Food};