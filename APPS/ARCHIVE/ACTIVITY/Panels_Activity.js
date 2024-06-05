import { create } from "../../../CONSOLE/PLATYPUS/Create.js"
import { Panels_Misc } from "../../EXPLORE/SECTIONS/CULTURE/ACTIVITY/MISC/PANELS/Panels_Misc.js";
import { Panels_Music } from "../../EXPLORE/SECTIONS/CULTURE/ACTIVITY/MUSIC/PANELS/Panels_Music.js";
import { Panels_Sports } from "../../EXPLORE/SECTIONS/CULTURE/ACTIVITY/SPORTS/PANELS/Panels_Sports.js";

class Panels_Activity {

    constructor(){
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

        // == ATTACHMENTS == //
        wrapper.append(...[
            this.PANELS_Misc.PANEL_INPUT_ACTIVITY_MISC(),
            this.PANELS_Music.PANEL_INPUT_ACTIVITY_MUSIC(),
            // this.PANELS_Sports.PANEL_INPUT_ACTIVITY_SPORTS()
        ]);
        return wrapper;
    };

}

export {Panels_Activity}