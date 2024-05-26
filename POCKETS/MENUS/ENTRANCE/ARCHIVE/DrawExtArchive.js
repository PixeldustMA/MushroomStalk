import { Stalk } from "../../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Archive Screen     //
// ================================= //

class Page_Archive_Exterior extends Stalk {

    constructor() { 
        super();
        this.SECTION_Buttons = document.getElementById("SECTION_Archive-Sign");
        this.pathSign = "";
    };

    DRAW_PAGE() {
        this.SECTION_Buttons.append(this.PANEL_BUTTONS());
    };
    PANEL_BUTTONS() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Archive-Wrapper'
        }).init();

        // == IMAGES == //
        const imageSign = new create({
            tag: 'img',
            source: this.pathSign,
            classes: ['SIGN']
        }).init();

        imageSign.addEventListener('click', (OPEN) => {
            this.LOAD(['ARCHIVE', 'MAINPAGES', 'MENUS'])
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            imageSign
        ]);

        return wrapper;
    };
    async INITIALISE_PAGE() {
        this.pathSign = await this.INIT_ROUTE({
            TAG: 'ARCHIVE_SIGN',
            SECTION: 'IMAGES',
            SUBSECTION: 'EXTERIORS',
            ASSET: 1
        });
    }
};

const pageArchive = new Page_Archive_Exterior();
await pageArchive.INITIALISE_PAGE();
pageArchive.DRAW_PAGE();
