import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class Page_Observatory_Portal extends Stalk{

    constructor() {
        super()
        this.SECTION_Title = document.getElementById("SECTION_Observatory-Menu-Title");
        this.SECTION_Buttons = document.getElementById("SECTION_Observatory-Menu-Buttons");

        this.pathHealth = "";
        this.pathExplore = "";
        this.pathEmployment = "";
    };

    DRAW_PAGE() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Buttons.append(this.PANEL_BUTTONS());
    };
    PANEL_TITLE() {

        // == WRAPPER == //
        const wrapper = new create({
            tag: 'div'
        }).init();
        
        // == TEXT == //
        const headerPage = new create({
            tag: 'h1',
			elementText: ['OBSERVATORY', 'HEADERS', 'PAGE'],
        }).init();
        
        wrapper.append(...[
            headerPage
        ]);
        return wrapper;
    };
    PANEL_BUTTONS() {

        // == WRAPPER == //
        const wrapper = new create({
            tag: 'div'
        }).init();
        
        // == BUTTONS == //
        const buttonEmployment = new create({
            tag: 'img',
            source: this.pathEmployment,
            classes: ['PLANET', 'EMPLOYMENT']
        }).init();
        const buttonPlanets = new create({
            tag: 'img',
            source: this.pathExplore,
            classes: ['PLANET', 'EXPLORE']
        }).init();
        const buttonHealth = new create({
            tag: 'img',
            source: this.pathHealth,
            classes: ['PLANET', 'HEALTH']
        }).init();
        const buttonKitchen = new create({
            tag: 'button',
            elementText: ['FOOD', 'LABELS', 'KITCHEN']
        }).init();

        // == LISTENERS == //
        buttonPlanets.addEventListener('click', (event) => {
            this.LOAD(['EXPLORER', 'MAINPAGES', 'EXPLORER'])
        });
        buttonEmployment.addEventListener('click', (event) => {
        });
        buttonHealth.addEventListener('click', (event) => {
        });
        buttonKitchen.addEventListener('click', (event) => {
            this.LOAD(['KITCHEN', 'MAINPAGES', 'EXPLORER'])
        });

        // == ATTACHMENT == //
        wrapper.append(...[
            buttonEmployment,
            buttonPlanets,
            buttonHealth,
            buttonKitchen
        ]);
        return wrapper;
    };
    async INITIALISE_PAGE() {
        this.pathHealth = await this.INIT_ROUTE({
            TAG: "HEALTH",
            SECTION: "IMAGES",
            SUBSECTION: "OBSERVATORY",
            ASSET: 1
        })
        this.pathEmployment = await this.INIT_ROUTE({
            TAG: "EMPLOYMENT",
            SECTION: "IMAGES",
            SUBSECTION: "OBSERVATORY",
            ASSET: 1
        })
        this.pathExplore = await this.INIT_ROUTE({
            TAG: "EXPLORER",
            SECTION: "IMAGES",
            SUBSECTION: "OBSERVATORY",
            ASSET: 1
        })
    }
}

const pageObservatory = new Page_Observatory_Portal();
await pageObservatory.INITIALISE_PAGE();
pageObservatory.DRAW_PAGE();