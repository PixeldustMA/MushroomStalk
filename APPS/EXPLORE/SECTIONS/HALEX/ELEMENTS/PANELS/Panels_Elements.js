import { create } from "../../../../../../CONSOLE/PLATYPUS/Create.js";
import { Elements } from "../CONSOLE/Elements.js";

class Panel_Elements {

    constructor() {

        this.instanceElements;
        this.optionsElementTypes = [];
    };

    // == INPUTS == //
    PANEL_INPUT_ELEMENT(){

        // == WRAPPERS == //
        const wrapperElement = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputElement = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'TERMS', 'ELEMENTS']
        }).init();

        // == TEXTAREAS == //
        const textDescription = new create({
            tag: 'textarea'
        }).init();

        // == SELECT == //
        const selectElementType = new create({
            tag: 'select',
            options: this.optionsElementTypes
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            const elementName = inputElement.value;
            const elementType = selectElementType.options[selectElementType.selectedIndex].text;
            const elementDescription = textDescription.value;
            this.instanceElements.GENERATE_ELEMENTS(elementName, elementType, elementDescription)
                .then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapperElement.append(...[
            inputElement,
            selectElementType,
            textDescription,
            buttonSubmit
        ]);
        return wrapperElement;
    };
    PANEL_INPUT_ELEMENT_TYPE() {

        // == WRAPPERS == //
        const wrapperElement = new create({
            tag: 'div'
        }).init();

        // == INPUTS == //
        const inputTypeName = new create({
            tag: 'input'
        }).init();

        // == TEXTAREAS == //
        const textDescription = new create({
            tag: 'textarea'
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {

            let elementType = inputTypeName.value;
            let elementDescription = textDescription.value;

            this.instanceElements.GENERATE_ELEMENTS_TYPE(elementType, elementDescription)
                .then((TYPE_RESULT) => {return TYPE_RESULT});
        });

        // == ATTACHMENTS == //
        wrapperElement.append(...[
            inputTypeName,
            textDescription,
            buttonSubmit
        ]);
        return wrapperElement;
    };

    // == SET UP == //
    async INITIALISE() {

        // == INSTANCES == //
        this.instanceElements = new Elements();

        // == OPTIONS == //
        this.optionsElementTypes = Object.keys(await this.instanceElements.READ_ELEMENT_TYPES());
    };
}

export {Panel_Elements}