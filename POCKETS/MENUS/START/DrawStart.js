import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js"
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class Page_Main_Stalk extends Stalk {

    constructor() {
        super();
        this.SECTION_Title = document.getElementById('START-PAGE-section-header');
        this.SECTION_Belly = document.getElementById('START-PAGE-section-belly');
        this.SECTION_Feet = document.getElementById('START-PAGE-section-base');

        this.pathBag = "";
        this.pathBook = "";
        this.pathChalkBoard = "";
        this.pathDayMarker = "";
        this.pathDoor = "";
        this.pathFrame = "";
        this.pathPanic = "";
        this.pathSettings = "";
        this.pathSwampBook = "";

    };

    DRAW_PAGE() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Belly.append(this.PANEL_BELLY());
        this.SECTION_Feet.append(this.PANEL_FEET());
    };
    PANEL_TITLE() {

        // == WRAPPER == //
        let wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Start-Header',
            classes: ['WRAPPER-Layout']
        }).init();
        let TopLeftCornerBox = new create ({
            tag: 'div',
            id: 'WRAPPER_Start-TopLeft',
            classes: ['WRAPPER-Layout-Top-Left']
        }).init();
        let TitleBox = new create({
            tag: 'div',
            id: 'WRAPPER_Start-TopMiddle',
            classes: ['WRAPPER-Layout-Top-Middle']
        }).init();
        let SettingsBox = new create({
            tag: 'div',
            id: 'WRAPPER_Start-TopRight',
            classes: ['WRAPPER-Layout-Top-Right']
        }).init();	

        // == IMAGES == //
        let settingsImage = new create ({ 
            tag: 'img',
            id: 'IMAGE_Start-Settings',
            source: this.pathSettings,
            classes: ['IMAGE-Settings']
        }).init();
        let bagImage = new create ({ 
            tag: 'img',
            id: 'IMAGE_Start-Bag',
            source: this.pathBag,
            classes: ['IMAGE-Bag']
        }).init();

        // == TEXT == //
        let pageTitle = new create({
            tag: 'h1',
            id: 'TEXT_Text-Header',
            classes: ['mainPageTitle']
        }).init();
        pageTitle.innerHTML = 'WELCOME BACK GOBLIN';

        // == LISTENERS == //
        bagImage.addEventListener('click', (archiveEvent) => {
            // this.LOAD(['ARCHIVE', 'MAINPAGES', 'EXTERIORS'])
        });
        settingsImage.addEventListener('click', (event) => {
            // this.LOAD(['SETTINGS', 'MAINPAGES', 'SETTINGS'])
        });
    
        // == ATTACHMENTS == //
        TitleBox.append(pageTitle);
        SettingsBox.append(settingsImage);
        TopLeftCornerBox.append(bagImage);
        wrapper.append(...[
            TopLeftCornerBox,
            TitleBox,
            SettingsBox
        ]);
        return wrapper;
    };
    PANEL_BELLY() {

        // == WRAPPERS == //
        let wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Start-Belly',
            classes: ['WRAPPER-Layout']
        }).init();
        let leftBox = new create({
            tag: 'div',
            id: 'WRAPPER_Start-Left',
            classes: ['WRAPPER-Layout-Middle-Left']
        }).init();
        let centreBox = new create({
            tag: 'div',
            id: 'WRAPPER_Start-Centre',
            classes: ['WRAPPER-Layout-Middle-Centre']
        }).init();
        let rightBox = new create({
            tag: 'div',
            id: 'WRAPPER_Start-Right',
            classes: ['WRAPPER-Layout-Middle-Right']
        }).init();

        // == IMAGES == //
        // let pictureFrame = new create({
        //     tag: 'img',
        //     id: 'IMAGE_Start-Frame',
        //     classes: ['imageWithBorder'],
        //     source
        // }).init();
        let leftDoor = new create ({
            tag: 'img',
            id: 'IMAGE_Start-LeftDoor',
            classes: ['doorButtonLeft'],
            source: this.pathDoor
        }).init();
        let rightDoor = new create ({
            tag: 'img',
            id: 'IMAGE_Start-RightDoor',		
            classes: ['doorButtonRight'],
            source: this.pathDoor
        }).init();
        let frames = new create ({
            tag: 'img',
            id: 'IMAGE_Start-Frames',
            source: this.pathFrame,
            classes: ['FRAME']
        }).init();
        let chalkboard = new create({
            tag: 'img',
            source: this.pathChalkBoard,
            classes: ['CHALK']
        }).init();

	    // == LISTENERS AND CLICKS == //
        leftDoor.addEventListener('click', (event) => {
            // OPEN LEFT DOOR
        });
        rightDoor.addEventListener('click', (event) => {
            // OPEN LEFT DOOR
        });

	    // == ATTACHMENTS == //
        centreBox.append(...[
            frames,
            chalkboard
        ]);
        leftBox.append(leftDoor);
        rightBox.append(rightDoor);
        wrapper.append(...[
            leftBox,
            centreBox,
            rightBox
        ]);
        return wrapper;

    };
    PANEL_FEET() {

        // == WRAPPERS == //
        const wrapperFeet = new create({
            tag: 'div'
        }).init();

        // == IMAGES == //
        const imageSwamp = new create({
            tag: 'img',
            source: this.pathSwampBook,
            classes: ['SWAMP']
        }).init();
        const imageNotebook = new create({
            tag: 'img',
            source: this.pathBook,
            classes: ['BOOK']
        }).init();

        wrapperFeet.append(...[
            imageSwamp,
            imageNotebook
        ]);
        return wrapperFeet;
    };
    async INITIALISE_PAGE() {

        this.pathBag = await this.INIT_ROUTE({
            TAG: "BAG",
            SECTION: "IMAGES",
            SUBSECTION: "STALK",
            ASSET: 1
        });
        this.pathBook = await this.INIT_ROUTE({
            TAG: "BOOK",
            SECTION: "IMAGES",
            SUBSECTION: "STALK",
            ASSET: 1
        });
        this.pathChalkBoard = await this.INIT_ROUTE({
            TAG: "CHALKBOARD",
            SECTION: "IMAGES",
            SUBSECTION: "STALK",
            ASSET: 1
        });
        this.pathDayMarker = await this.INIT_ROUTE({
            TAG: "DAY",
            SECTION: "IMAGES",
            SUBSECTION: "STALK",
            ASSET: 1
        });
        this.pathDoor = await this.INIT_ROUTE({
            TAG: "DOOR",
            SECTION: "IMAGES",
            SUBSECTION: "STALK",
            ASSET: 1
        });
        this.pathFrame = await this.INIT_ROUTE({
            TAG: "FRAME",
            SECTION: "IMAGES",
            SUBSECTION: "STALK",
            ASSET: 1
        });
        this.pathPanic = await this.INIT_ROUTE({
            TAG: "PANIC",
            SECTION: "IMAGES",
            SUBSECTION: "STALK",
            ASSET: 1
        });
        this.pathSettings = await this.INIT_ROUTE({
            TAG: "SETTINGS",
            SECTION: "IMAGES",
            SUBSECTION: "STALK",
            ASSET: 1
        });
        this.pathSwampBook = await this.INIT_ROUTE({
            TAG: "SWAMP",
            SECTION: "IMAGES",
            SUBSECTION: "STALK",
            ASSET: 1
        });
    }
}

const pageStalk = new Page_Main_Stalk();
await pageStalk.INITIALISE_PAGE();
pageStalk.DRAW_PAGE();