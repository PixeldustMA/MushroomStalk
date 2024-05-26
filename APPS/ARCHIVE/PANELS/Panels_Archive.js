import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";
import { Panels_Explore } from "../../EXPLORE/PANELS/Panels_Explore.js";

class Panel_Archive extends Stalk {
    constructor() {
        super();
        this.planetPanel = "";
        this.planetInstance = "";
    };

    CHARACTER(){

        // == WRAPPER == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_New-Character-Birth'
        }).init();

        // == TEXT == //
        const panelHeader = new create({
            tag: 'h3',
            elementText: ['ARCHIVE', 'HEADERS', 'NEW'],
            id: 'HEADER_New-Character',
            classes: ['BOX_TITLE']
        }).init();
        const firstNameLabel = new create({
            tag: 'label',
            id: 'LABEL_First-Name',
            elementText: ['ARCHIVE', 'LABELS', 'FIRST'],
            labelFor: 'FIRST-NAME'
        }).init();
        const parentalNameLabel = new create({
            tag: 'label',
            id: 'LABEL_Parental-Name',
            elementText: ['ARCHIVE', 'LABELS', 'PARENTAL'],
            labelFor: 'PARENTAL-NAME'
        }).init();
        const lastNameLabel = new create({
            tag: 'label',
            id: 'LABEL_Last-Name',
            elementText: ['ARCHIVE', 'LABELS', 'LAST'],
            labelFor: 'LAST-NAME'
        }).init();
        const birthPlanetLabel = new create({
            tag: 'label',
            id: 'LABEL_Birth-Planet',
            elementText: ['ARCHIVE', 'LABELS', 'PLANET'],
            labelFor: 'BIRTH-PLANET'
        }).init();
        const birthYearLabel = new create({
            tag: 'label',
            id: 'LABEL_Birth-Year',
            elementText: ['ARCHIVE', 'LABELS', 'YEAR'],
            labelFor: 'BIRTH-YEAR',
        }).init();

        // == INPUT == //
        const firstName = new create({
            tag: 'input',
            id: 'INPUT_First-Name',
            boxName: 'FIRST-NAME',
            placeholder: ['ARCHIVE', 'LABELS', 'FIRST'],
            classes: ['FORM_SELECT']
        }).init();
        const parentalName = new create({
            tag: 'input',
            id: 'INPUT_Parental-Name',
            boxName: 'PARENTAL-NAME',
            placeholder: ['ARCHIVE', 'LABELS', 'PARENTAL'],
            classes: ['FORM_SELECT']
        }).init();
        const lastName = new create({
            tag: 'input',
            id: 'INPUT_Last-Name',
            boxName: 'LAST-NAME',
            placeholder: ['ARCHIVE', 'LABELS', 'LAST']
        }).init();
        const birthYear = new create({
            tag: 'input',
            id: 'INPUT_Birth-Year',
            boxName: 'BIRTH-YEAR',
            type: 'number'
        }).init();


        // == BUTTONS == //
        const submitButton = new create({
            tag: 'button',
            id: 'BUTTON_Submit-New',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT'],
        }).init();
        this.requiredSubmit = submitButton;

        // == LISTENERS == //
        submitButton.addEventListener('click', (event) => {
            let required = {
                FIRST: "None",
                PARENTAL: "None",
                LAST: "None",
                PLANET: "None",
                YEAR: "None"
            };
            if (firstName.value.length > 0) {
                required.FIRST = firstName.value;
            };
            if (parentalName.value.length > 0) {
                required.PARENTAL = parentalName.value;
            };
            if (lastName.value.length > 0) {
                required.LAST = lastName.value;
            };
            if (birthYear.value.length > 0) {
                required.YEAR = birthYear.value;
            };
            required.PLANET = this.planetInstance.planetBox.options[this.planetInstance.planetBox.selectedIndex].text;
            this.REMEMBER("REQUIRED", required).then((data) => {
                submitButton.innerHTML = "SUBMITTED";
                return data;
            });
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            panelHeader,

            firstNameLabel,
            firstName,

            parentalNameLabel,
            parentalName,

            lastNameLabel,
            lastName,

            birthPlanetLabel,
            this.planetPanel,

            birthYearLabel,
            birthYear,

            submitButton
        ]);
        return wrapper;
    };
    async INITIALISE_PAGE() {
        const birthPlanetPanel = new Panels_Explore('PLANET_SINGLE');
        this.planetInstance = birthPlanetPanel;
        this.planetPanel = await birthPlanetPanel.CHOOSE_PLANET();
    }
}

export {Panel_Archive};
