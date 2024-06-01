import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class Page_Kitchen extends Stalk{

    constructor() {
        super();
        this.pathChalkboard = "";
        this.SECTION_Title = document.getElementById('SECTION_Kitchen-Title');
        this.SECTION_Belly = document.getElementById('SECTION_Kitchen-Belly');
    };

    DRAW() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Belly.append(this.PANEL_BELLY());
    };
    PANEL_TITLE() {

        // == WRAPPERS == //
        const wrapperTitle = new create({
            tag: 'div'
        }).init();

        wrapperTitle.append(...[]);
        return wrapperTitle;
    };
    PANEL_BELLY() {

        // == WRAPPERS == //
        const wrapperTitle = new create({
            tag: 'div'
        }).init();

        const imageChalkboard = new create({
            tag: 'img',
            source: this.pathChalkboard
        }).init();

        imageChalkboard.addEventListener('click', (event) => {
            this.LOAD(['CHALKBOARD', 'MAINPAGES', 'EXPLORER']);
        });
        wrapperTitle.append(...[imageChalkboard]);
        return wrapperTitle;
    };
    async INITIALISE() {
        this.pathChalkboard = await this.INIT_ROUTE({
            TAG: 'CHALKBOARD',
            SECTION: 'IMAGES',
            SUBSECTION: 'OBSERVATORY',
            ASSET: 1
        });
    };
}

const pageKitchen = new Page_Kitchen();
await pageKitchen.INITIALISE();
pageKitchen.DRAW();
