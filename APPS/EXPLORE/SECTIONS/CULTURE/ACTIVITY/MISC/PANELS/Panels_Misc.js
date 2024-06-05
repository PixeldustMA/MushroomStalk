import { create } from "../../../../../../../CONSOLE/PLATYPUS/Create.js";
import { Misc } from "../CONSOLE/Misc.js";

class Panels_Misc {

    constructor(){
        this.instanceMisc = new Misc();
    };

    PANEL_INPUT_ACTIVITY_MISC() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div'
        }).init();

        // == INPUTS == //
        const inputActivity = new create({
            tag: 'input',
            id: 'INPUT-Misc-Activity-Name',
            boxName: 'Activity-Name',
            placeholder: ['CULTURE', "ACTIVITY_MISC", 'ACTIVITY_NAMES'],
            classes: ['INPUT_LAYOUTS']
        }).init();

        // == TEXT == //
        const Label_Activity = new create({
            tag: 'label',
            id: 'LABEL-Misc-Activity-Name',
            elementText: ['CULTURE', 'ACTIVITY_MISC', 'NAME_OF_ACTIVITY'],
            labelFor: 'Activity-Name',
            classes: ['LABEL_LAYOUT']
        }).init();
        const header_Misc = new create({
            tag: 'h2',
            elementText: ['CULTURE', 'ACTIVITY_MISC', 'MISC'],
            classes: ['BOX_TITLE']
        }).init();
        
        // == TEXT BOXES == //
        const textboxDescription = new create({
            tag: 'textarea'
        }).init();
        // == BUTTON == //
        const buttonSubmitActivity = new create({
                tag: 'button',
                elementText: ['CULTURE', 'ACTIVITY_MISC', 'SUBMIT'],
        }).init();

        // == LISTENERS == //
        buttonSubmitActivity.addEventListener('click', (event) => {
            const miscName = inputActivity.value;
            
            const instrumentDescription =  textboxDescription.value; 
            this.instanceMisc.GENERATE_MISC_ACTIVITY(miscName, instrumentDescription)
                .then((MUSIC) => {return MUSIC});
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            header_Misc, 
            inputActivity, 
            Label_Activity,
            textboxDescription,
            buttonSubmitActivity
        ]);
        return wrapper;
    };
    async INITIALISE(){
    };

}

export {Panels_Misc}