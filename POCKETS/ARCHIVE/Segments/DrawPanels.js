import { create } from "../../../CONSOLE/PLATYPUS/create.js";

class Panel {

    constructor() {}

    addNew() {
        let wrapper = new create({
            tag: 'div'
        }).init();

        // == LABELS == //
        let LabelFirstName = new create({
            tag: 'label',
            elementText: 'FIRST NAME: ',
            labelFor: 'firstNameInput',
            classes: ['defaultLabel']
        }).init();
        let LabelLastName = new create({
            tag: 'label',
            elementText: 'MAIN LAST NAME: ',
            labelFor: 'lastNameInput',
            classes: ['defaultLabel']
        }).init();
        let LabelMiddleName = new create({
            tag: 'label',
            elementText: 'MAIN MIDDLE NAME: ',
            labelFor: 'mainMiddleNameInput',
            classes: ['defaultLabel']
        }).init();
        let LabelBirthPlanet = new create({
            tag: 'label',
            elementText: 'BIRTH PLANET: ',
            labelFor: 'birthPlanetInput',
            classes: ['defaultLabel']
        }).init();
        let LabelBirthYear = new create({
            tag: 'label',
            elementText: 'BIRTH YEAR [Localised]: ',
            labelFor: 'birthYearInput',
            classes: ['defaultLabel']
        }).init();
        let LabelMainMother = new create({
            tag: 'label',
            elementText: 'MAIN MOTHER: ',
            labelFor: 'mainMotherInput',
            classes: ['defaultLabel']		
        }).init();
        let tagLabel = new create({
            tag: 'label',
            id: 'LABEL_Tag-Meat',
            labelFor: 'INPUT_Checkbox-Tags',
            elementText: 'MEAT CHARACTER?'
        }).init();

        // == INPUTS == //
        let InputFirstName = new create({
            tag: 'input',
            boxName: 'firstNameInput',
            classes: ['defaultInput'],
            id: 'INPUT_First-Name'
        }).init();
        let InputMiddleName = new create({
            tag: 'input',
            boxName: 'mainMiddleNameInput',
            classes: ['defaultInput'],
            id: 'INPUT_Middle-Name'
        }).init();
        let InputlastName = new create({
            tag: 'input',
            boxName: 'lastNameInput',
            classes: ['defaultInput'],
            id: 'INPUT_Last-Name'
        }).init();
        let InputBirthPlanet = new create({
            tag: 'input',
            boxName: 'birthPlanetInput',
            classes: ['defaultInput'],
            id: 'INPUT_Birth-Planet'
        }).init();
        let InputBirthYear = new create({
            tag: 'input',
            boxName: 'birthYearInput',
            classes: ['defaultInput'],
            id: 'INPUT_Birth-Year'
        }).init();
        let InputMainMother = new create({
            tag: 'input',
            boxName: 'mainMotherInput',
            classes: ['defaultInput'],
            id: 'INPUT_Main-Mother'
        }).init();
        let TagButton = new create({
            tag: 'input',
            id: "INPUT_Check-Tag",
            classes: ['defaultInput'],
            boxName: 'INPUT_Checkbox-Tags'
        }).init();
        TagButton.type = "checkbox";

        // == SUBMIT == //
        let submitButton = new create({
            tag: 'button',
            elementText: 'SUBMIT CHARARCTER',
            id: 'Button_Submit_Archive_New',
            classes: ['defaultButton']
        }).init();
        let backButton = new create({
            tag: 'button',
            elementText: 'BACK',
            id: 'Button_Submit_Archive_New',
            classes: ['defaultButton']
        }).init();

        backButton.addEventListener('click', (backEvent) => {
		    window.location.href = "../Main/FrameworkArchive.html";
	    });
        // == ATTACHMENTS == //
        wrapper.append(...[
            tagLabel,
            TagButton,

            LabelFirstName,
            InputFirstName,

            LabelMiddleName,
            InputMiddleName,

            LabelLastName,
            InputlastName,

            LabelBirthPlanet,
            InputBirthPlanet,

            LabelBirthYear,
            InputBirthYear,

            LabelMainMother,
            InputMainMother,

            submitButton,
            backButton

        ]);
        return wrapper;
    }
}

export {Panel}