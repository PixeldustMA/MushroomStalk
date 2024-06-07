
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js"
import { Panels_Misc } from "../../EXPLORE/SECTIONS/CULTURE/ACTIVITY/MISC/PANELS/Panels_Misc.js";
import { Panels_Music } from "../../EXPLORE/SECTIONS/CULTURE/ACTIVITY/MUSIC/PANELS/Panels_Music.js";
import { Panels_Sports } from "../../EXPLORE/SECTIONS/CULTURE/ACTIVITY/SPORTS/PANELS/Panels_Sports.js";

class Panels_Activity extends Stalk{

    constructor(){
        super();
        this.miscData = {TASK: ""};

        this.PANELS_Misc = new Panels_Misc();
        this.PANELS_Music = new Panels_Music();
        this.PANELS_Sports = new Panels_Sports();
    }

    DRAW() {

        // == WRAPPER == //
        const wrapper = new create({
            tag: 'div'
        }).init();

        // == BUTTON == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENEERS == //
        buttonSubmit.addEventListener('click', (event) => {
            let activityObject = {};
            activityObject.SPORT = this.PANELS_Sports.dataSports;
            activityObject.MISC = this.PANELS_Misc.dataMisc
            activityObject.MUSIC = this.PANELS_Music.dataMusic;
            this.REMEMBER("ACTIVITY", activityObject)
                .then((DATA) => {
                    buttonSubmit.innerHTML = "ACTIVITIES SUBMITTED"
                    return DATA
            });
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            this.PANELS_Misc.PANEL_INPUT_CHARACTER_MISC(),
            this.PANELS_Music.PABEL_INPUT_CHARACTER_MUSUC(),
            this.PANELS_Sports.PANEL_INPUT_CHARACTER_SPORTS(),
            buttonSubmit
        ]);
        return wrapper;
    };
    async INITIALISE() {
        await this.PANELS_Misc.INITIALISE();
        await this.PANELS_Music.INITIALISE();
        await this.PANELS_Sports.INITIALISE();
    };

}

export {Panels_Activity}