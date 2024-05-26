import { Stalk } from "../../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Cupboard Screen     //
// ================================= //

class Page_Cupboard_Exterior extends Stalk {

    constructor() { 
        super();
        this.SECTION_Buttons = document.getElementById("SECTION_Cupboard-Sign");
        this.pathSign = "";
    };

    DRAW_PAGE() {
        this.SECTION_Buttons.append(this.PANEL_BUTTONS());
    };
    PANEL_BUTTONS() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Cupboard-Wrapper'
        }).init();

        // == IMAGES == //
        const imageSign = new create({
            tag: 'img',
            source: this.pathSign,
            classes: ['SIGN']
        }).init();

        imageSign.addEventListener('click', (OPEN) => {
            this.LOAD(['Cupboard', 'MAINPAGES', 'MENUS'])
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            imageSign
        ]);

        return wrapper;
    };
    async INITIALISE_PAGE() {
        this.pathSign = await this.INIT_ROUTE({
            TAG: 'Cupboard_SIGN',
            SECTION: 'IMAGES',
            SUBSECTION: 'EXTERIORS',
            ASSET: 1
        });
    }
};

const pageCupboard = new Page_Cupboard_Exterior();
await pageCupboard.INITIALISE_PAGE();
pageCupboard.DRAW_PAGE();
