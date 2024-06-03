import { create } from "../../../../../../CONSOLE/PLATYPUS/Create.js";
import { Panels_Explore } from "../../../../PANELS/Panels_Explore.js";
import { Panel_Colours } from "../../../CULTURE/COLOUR/PANELS/Panels_Colours.js";
import { Panel_Elements } from "../../../HALEX/ELEMENTS/PANELS/Panels_Elements.js";
import { Geological } from "../CONSOLE/Geological.js";

// A GEOGRAPHICAL LOCATION HAS...
    // NAME -- INPUT BOX
    // TEXT DESCRIPTIONN -- TEXT AREA
    // PRIMARY ELEMENT -- SELECT FROM ELEMENT LIST
    // A FEATURE TYPE -- TYPE LIST
    // A COLOUR -- PRIMARY COLOUR FROM LIST
    // ASSOCIATED RITUALS -- FESTIVAL LINK

class Panel_Geological {

    constructor() {

        this.planetPanel = new Panels_Explore('PLANET_SINGLE');
        this.instanceGeological = new Geological();
        this.instanceColours = new Panel_Colours();
        this.instanceElements = new Panel_Elements();

        // == OPTIONS == //
        this.locationTypes = [];
        this.locationElements = [];
        this.locationColours = [];
    };

    // == INPUTS == //
    PANEL_INPUT_LOCATION(){

        // == WRAPPER == //
        const wrapperLocation = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputName = new create({
            tag: 'input'
        }).init();

        // == SELECT == //
        const selectType = new create({
            tag: 'select',
            options: this.locationTypes
        }).init();
        const selectElement = new create({
            tag: 'select',
            options: this.locationElements
        }).init();
        const selectColour = new create({
            tag: 'select',
            options: this.locationColours
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
        buttonSubmit.addEventListener('click', (SUBMIT_EVENT) => {
            const geologicalName = inputName.value;
            const geologicalType = selectType.options[selectType.selectedIndex].text;
            const geologicalElement = selectElement.options[selectElement.selectedIndex].text;
            const geologicalColour = selectColour.options[selectColour.selectedIndex].text;
            const geologicalDescription = textDescription.value;
            this.instanceGeological.INSERT_NEW_GEOLOGICAL_LOCATION(geologicalName, geologicalType, geologicalElement, geologicalColour, geologicalDescription)
                .then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapperLocation.append(...[
            inputName,
            selectType,
            selectElement, 
            selectColour,
            textDescription,
            buttonSubmit
        ]);
        return wrapperLocation;
    };
    PANEL_INPUT_TYPE(){

        // == WRAPPERS == //
        const wrapperType = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputType = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'GEOLOGICAL', 'TYPES']
        }).init();
        
        // == TEXTAREA == //
        const textDescription = new create({
            tag: 'textarea'
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (TYPE_EVENT) => {
            let typeName = inputType.value;
            let typeDescription = textDescription.value;
            this.instanceGeological.GENERATE_GEOLOGICAL_LOCATION_TYPE(typeName, typeDescription)
                .then((TYPE_RESULT) => {return TYPE_RESULT});
        });

        // == ATTACHMENTS == //
        wrapperType.append(...[
            inputType,
            textDescription,
            buttonSubmit
        ]);
        return wrapperType;
    };

    // == DISPLAY == //
    PANEL_DISPLAY_LOCATION() {};
    PANEL_DISPLAY_TYPE(){};

    // == SET UP == //
    async INITIALISE(){

        this.planet =  await this.planetPanel.CHOOSE_PLANET();

        await this.instanceColours.INITIALISE();
        await this.instanceElements.INITIALISE();

        this.locationTypes = await this.instanceGeological.READ_GEOLOGICAL_TYPES();
        this.locationElements = await this.instanceElements.instanceElements.READ_ELEMENTS_ALL();
        this.locationColours = await this.instanceColours.instanceColours.READ_COLOURS_ALL();
    };
}