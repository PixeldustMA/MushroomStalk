import { create } from "../../../../../../../CONSOLE/PLATYPUS/Create.js";
import { Panels_Explore } from "../../../../../PANELS/Panels_Explore.js";
import { Sports } from "../CONSOLE/Sports.js";

class Panels_Sports {

    constructor(){
        this.instanceSportPanel = new Sports();
        this.optionsSportsTypes = [];
        this.dataSports = {};
    };

    PANEL_INPUT_ACTIVITY_SPORTS() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div'
        }).init();

        // == SELECT == //
        const selectSport = new create({
            tag: 'select',
            id: 'SELECT-Band-Team-Name',
            labelFor: ["CULTURE", "SPORTS", "TYPE"],
            options: this.optionsSportsTypes,
            classes: ['INPUT_LAYOUTS', 'DEFAULT_SELECT']
        }).init();

        // == INPUT == //
        const inputSportName = new create({
            tag: 'input'
        }).init();

        // == TEXT == //
        const header_Sport = new create({
            tag: 'h2',
            elementText: ["CULTURE", "ACTIVITY_SPORTS", "SPORT"],
            classes: ['BOX_TITLE']
        }).init();

        // == TEXT BOXES == //
        const textboxDescription = new create({
            tag: 'textarea'
        }).init();

        // == BUTTON == //
        const buttonSubmitSport = new create({
            tag: 'button',
            elementText: ["GENERAL", "USEFUL", "SUBMIT"],
        }).init();

        // == LISTENERS == //
        buttonSubmitSport.addEventListener('click', (event) => {
            const sportType = selectSport.options[selectSport.selectedIndex].text
            const sportName = inputSportName.value;
            const sportDescription =  textboxDescription.value; 
            const planetName = this.planetPanel.planetBox;
            const planetNameChosen = planetName.options[planetName.selectedIndex].text;
            this.instanceSportPanel.GENERATE_SPORT(sportName, sportType, planetNameChosen, sportDescription)
                    .then((SPORT) => {return SPORT});
            buttonSubmitSport.innerHTML = 'SUMBITTED';          
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            header_Sport,
            inputSportName,
            selectSport,
            textboxDescription,
            this.planet,
            buttonSubmitSport
        ]);
        return wrapper;
    };
    PANEL_INPUT_SPORT_TYPE() {
        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputType = new create ({
            tag: 'input',
            boxName: 'INPUT-TYPE,',
            id: 'INPUT_Music-Type',
            classes: ['INPUT_LAYOUTS']
        }).init();

        // == TEXT == //
        const labelType = new create({
            tag: 'label',
            elementText: ["CULTURE", "ACTIVITY_SPORT", "TYPE"],
            labelFor: 'SELECT-TYPE'
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button'
        }).init();

        // == TEXT BOXES == //
        const textboxDescription = new create({
            tag: 'textarea'
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            const typeName = inputType.value;
            const typeDescription = textboxDescription.value;
            this.instanceSportPanel.GENERATE_SPORT_TYPE(typeName, typeDescription).then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            labelType,
            inputType,
            textboxDescription,
            buttonSubmit
        ]);
        return wrapper;
    };
    PANEL_INPUT_CHARACTER_SPORTS() {

        // == WRAPPER == //
        const wrapperSports = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const headerSports = new create({
            tag: 'h2',
            elementText: ['CULTURE', 'ACTIVITY_SPORTS', 'SPORTS']
        }).init();

        // == SELECT == //
        const selectType = new create({
            tag: 'select',
            options: this.optionsSportsTypes
        }).init();
        const selectSport = new create({
            tag: 'select'
        }).init();

        // == RADIO == //
        const radioProfessional = new create({
            tag: 'input',
            type: 'radio'
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            this.dataSports['SPORT'] = selectSport.options[selectSport.selectedIndex].text;
            radioProfessional.checked 
                                    ? this.dataSports['SPORT_PRO'] = true
                                    : this.dataSports['SPORT_PRO'] = false 
            this.dataSports['TEAM'] = 'NONE';
            buttonSubmit.innerHTML = 'SUBMITTED';
        });
        selectType.addEventListener('change', (event) => {
            this.instanceSportPanel.SEARCH_SPORT_BY_TYPE(selectType.options[selectType.selectedIndex].text)
                .then((SPORTS) => {
                    let hold = new create({tag: 'div'})
                    hold.changeOptions(selectSport, SPORTS);
                });
        });

        // == ATTACHMENTS == //
        wrapperSports.append(...[headerSports, selectType, selectSport, radioProfessional, buttonSubmit]);
        return wrapperSports
    }
    async INITIALISE() {
        this.planetPanel = new Panels_Explore('PLANET_SINGLE');
        this.planet =  await this.planetPanel.CHOOSE_PLANET();
        this.optionsSportsTypes = Object.keys(await this.instanceSportPanel.READ_SPORT_TYPES());
    }
}

export {Panels_Sports}