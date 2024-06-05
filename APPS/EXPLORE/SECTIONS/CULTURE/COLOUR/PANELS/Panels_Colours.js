import { create } from "../../../../../../CONSOLE/PLATYPUS/Create.js";
import { Colours } from "../CONSOLE/Colours.js";

class Panel_Colours {

    constructor() {

        this.instanceColours = new Colours();
        this.optionsColourTypes = [];
    };

    // == INPUTS == //
    PANEL_INPUT_COLOURS(){

        // == WRAPPERS == //
        const wrapperColour = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputColour = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'TERMS', 'COLOURS']
        }).init();

        // == SELECT == //
        const selectColourType = new create({
            tag: 'select',
            options: this.optionsColourTypes
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            const colourName = inputColour.value;
            const colourType = selectColourType.options[selectColourType.selectedIndex].text;
            this.instanceColours.GENERATE_COLOURS(colourName, colourType)
                .then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapperColour.append(...[
            inputColour,
            selectColourType,
            buttonSubmit
        ]);
        return wrapperColour;
    };
    PANEL_INPUT_COLOUR_TYPE() {

        // == WRAPPERS == //
        const wrapperColour = new create({
            tag: 'div'
        }).init();

        // == INPUTS == //
        const inputTypeName = new create({
            tag: 'input'
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {

            let colourType = inputTypeName.value;
            this.instanceColours.GENERATE_COLOURS_TYPE(colourType)
                .then((TYPE_RESULT) => {return TYPE_RESULT});
        });

        // == ATTACHMENTS == //
        wrapperColour.append(...[
            inputTypeName,
            buttonSubmit
        ]);
        return wrapperColour;
    };

    // == SET UP == //
    async INITIALISE() {

        // == OPTIONS == //
        this.optionsColourTypes = Object.keys(await this.instanceColours.READ_COLOURS_TYPES());
        console.log(this.optionsColourTypes)
    };
}

export {Panel_Colours}