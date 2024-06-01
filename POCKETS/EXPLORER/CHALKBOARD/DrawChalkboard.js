import { Panel_Food } from "../../../APPS/EXPLORE/SECTIONS/FOOD/PANELS/Panels_Food.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class Page_Chalkboard extends Stalk{

    constructor() {
        super();

        this.pathImage = "";
        this.pathPlanet = "";
        this.pathType = "";
        this.pathFlavour = "";
        this.pathSearch = "";

        this.SECTION_Title = document.getElementById('SECTION_Chalkboard-Title');
        this.SECTION_Belly = document.getElementById('SECTION_Chalkboard-Belly');
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
        const wrapperDisplay = new create({
            tag: 'div',
            classes: ['DISPLAY']
        }).init();

        // == IMAGES == //
        const imagePhoto = new create({
            tag: 'img',
            source: this.pathImage,
            classes: ['PHOTO']
        }).init();
        const imagePlanet = new create({
            tag: 'img',
            source: this.pathPlanet,
            classes: ['PLANET']
        }).init();
        const imageType = new create({
            tag: 'img',
            source: this.pathType,
            classes: ['TYPE']
        }).init();
        const imageFlavour = new create({
            tag: 'img',
            source: this.pathFlavour,
            classes: ['FLAVOUR']
        }).init();
        const imageSearch = new create({
            tag: 'img',
            source: this.pathSearch,
            classes: ['SEARCH']
        }).init();

        // == LISTENERS == //
        imagePhoto.addEventListener('click', (event) => {
            console.log("PHOTO CLICKED");
        });
        imagePlanet.addEventListener('click', (event) => {
            console.log("PLANET SPICE CLICKED");
            headerChangable.innerHTML = "PLANET";
            wrapperDisplay.append(this.panelFoodInstance.PANEL_DISPLAY_PLANETS());
        });
        imageType.addEventListener('click', (event) => {
            console.log("TYPE SPICE CLICKED");
            headerChangable.innerHTML = "TYPE";
            wrapperDisplay.append(this.panelFoodInstance.PANEL_DISPLAY_TYPE());
        });
        imageFlavour.addEventListener('click', (event) => {
            console.log("FLAVOUR CLICKED");
            headerChangable.innerHTML = "FLAVOUR";
            wrapperDisplay.append(this.panelFoodInstance.PANEL_DISPLAY_FLAVOUR());
        });
        imageSearch.addEventListener('click', (event) => {
            console.log("SEARCH CLICKED");
            headerChangable.innerHTML = "SEARCH";
            wrapperDisplay.append(this.panelFoodInstance.PANEL_SEARCH_ITEM());
        });

        // == TEXT == //
        const headerTitle = new create({
            tag: 'h1'
        }).init();
        headerTitle.innerHTML = 'FOOD!';
        const headerChangable = new create({
            tag: 'h2',
        }).init();
        headerChangable.innerHTML = "CLICK A SPICE TO DISPLAY FOOD";

        // == ATTACHMENTS == //
        wrapperDisplay.append(...[headerTitle, headerChangable]);
        wrapperTitle.append(...[
            imagePhoto,
            imagePlanet,
            imageType,
            imageFlavour,
            imageSearch,
            wrapperDisplay,
        ]);
        return wrapperTitle;
    };
    async INITIALISE() {
        this.pathImage = await this.INIT_ROUTE({
            TAG: 'PHOTO',
            SECTION: 'IMAGES',
            SUBSECTION: 'OBSERVATORY',
            ASSET: 1
        });
        this.pathPlanet = await this.INIT_ROUTE({
            TAG: 'PLANET',
            SECTION: 'IMAGES',
            SUBSECTION: 'OBSERVATORY',
            ASSET: 1
        });
        this.pathType = await this.INIT_ROUTE({
            TAG: 'TYPE',
            SECTION: 'IMAGES',
            SUBSECTION: 'OBSERVATORY',
            ASSET: 1
        });
        this.pathFlavour = await this.INIT_ROUTE({
            TAG: 'FLAVOUR',
            SECTION: 'IMAGES',
            SUBSECTION: 'OBSERVATORY',
            ASSET: 1
        });
        this.pathSearch = await this.INIT_ROUTE({
            TAG: 'SEARCH',
            SECTION: 'IMAGES',
            SUBSECTION: 'OBSERVATORY',
            ASSET: 1
        });

        this.panelFoodInstance = new Panel_Food();
        this.panelFoodInstance.INITIALISE();
    };
}

const pageChalkboard = new Page_Chalkboard();
await pageChalkboard.INITIALISE();
pageChalkboard.DRAW();
