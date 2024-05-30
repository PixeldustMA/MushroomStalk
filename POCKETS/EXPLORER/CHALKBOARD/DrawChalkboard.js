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

        // == TEXT == //
        const headerTitle = new create({
            tag: 'h1'
        }).init();
        headerTitle.innerHTML = 'FOOD!'

        // == ATTACHMENTS == //
        wrapperDisplay.append(...[headerTitle]);
        wrapperTitle.append(...[
            imagePhoto, 
            imagePlanet,
            imageType,
            imageFlavour,
            imageSearch,
            wrapperDisplay
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
    };
}

const pageChalkboard = new Page_Chalkboard();
await pageChalkboard.INITIALISE();
pageChalkboard.DRAW();
