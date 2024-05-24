import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Cupboard Screen     //
// ================================= //

class Page_Cupboard extends Stalk {

    constructor() { 
        super();
        this.SECTION_Buttons = document.getElementById("SECTION_Cupboard-Buttons");

        this.pathPickleBox = "";
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
        const imagePickle = new create({
            tag: 'img',
            id: 'IMAGE_Cupboard-Pickle',
            source: this.pathPickleBox,
            classes: ['PICKLE']
        }).init();

        imagePickle.addEventListener('click', (OPEN) => {

        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            imagePickle
        ]);
        return wrapper;
    };
    async INITIALISE_PAGE() {

        this.pathPickleBox = await this.INIT_ROUTE({
            TAG: 'PICKLE',
            SECTION: 'IMAGES',
            SUBSECTION: 'CUPBOARD',
            ASSET: 1
        })
    }
};

const pageCupboard = new Page_Cupboard();
await pageCupboard.INITIALISE_PAGE();
pageCupboard.DRAW_PAGE();
