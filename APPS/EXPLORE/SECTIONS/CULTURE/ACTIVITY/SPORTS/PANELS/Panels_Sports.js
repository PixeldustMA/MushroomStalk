import { create } from "../../../../../../../CONSOLE/PLATYPUS/Create.js";

class Panels_Sports {

    constructor(){};

    PANEL_INPUT_ACTIVITY_SPORTS() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div'
        }).init();

         // == OPTIONS == //
        let sportOptions = []
        if (this.planet === "NONE") {
            sportOptions = ["SPORT NAME", "SPORT NAME TWO"];
            sportOptions.unshift("CHOOSE SPORT");
        }
        else {
            // sportTeamOptions = await this.SPORT_TEAM_OPTIONS();
            sportTeamOptions.unshift("CHOOSE TEAM");
        }

        // == PANELS == //

        // == INPUTS == //
        const selectSport = new create({
            tag: 'select',
            id: 'SELECT-Band-Team-Name',
            labelFor: 'Team-Name',
            options: sportOptions,
            classes: ['INPUT_LAYOUTS', 'DEFAULT_SELECT']
        }).init();
        const professional_Check = new create({
            tag: 'input',
            id: 'INPUT-Professional-Sport-Activity-Name',
            type: 'radio',
            boxName: 'Professional-Check',
            classes: ['INPUT_LAYOUTS', 'checkmark']
        }).init();

        // == TEXT == //
        const header_Sport = new create({
            tag: 'h2',
            elementText: 'SPORT',
            classes: ['BOX_TITLE']
        }).init();
        const labelSport = new create({
            tag: 'label',
            id: 'LABEL-Team-Activity-Name',
            elementText: 'CHOOSE TEAM',
            labelFor: 'Team-Name',
            classes: ['INPUT_LAYOUTS']
        }).init();
        const label_Professional = new create({
            tag: 'label',
            id: 'LABEL-Professional-Sport-Activity-Name',
            elementText: 'CHECK IF THIS SPORT IS THE CHARACTER\'S JOB',
            labelFor: 'Professional-Check'
        }).init();

        // == BUTTON == //
        const buttonSubmitSport = new create({
            tag: 'button',
            elementText: 'SUBMIT SPORT',
        }).init();

        // == LISTENERS == //
        buttonSubmitSport.addEventListener('click', (event) => {
                this.sportData.SPORT = selectSport.options[selectSport.selectedIndex].text
                if (professional_Check.checked) {
                    this.sportData.PROFESSIONAL = "True"; 
            };
            if (!professional_Check.checked) {
                this.sportData.PROFESSIONAL = "False"; 
        }; 
        buttonSubmitSport.innerHTML = 'SUMBITTED';          
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            header_Sport,

            labelSport,
            selectSport,

            label_Professional,
            professional_Check,

            buttonSubmitSport
        ]);
        return wrapper;
    };

}

export {Panels_Sports}