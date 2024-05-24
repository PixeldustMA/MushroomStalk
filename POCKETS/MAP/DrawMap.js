// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Map Screen         //
// ================================= //

import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../CONSOLE/PLATYPUS/Create.js";

class Page_Map extends Stalk {

    constructor() {
        super();

        this.SECTION_Title = document.getElementById("MAP_Section-Title");
        this.SECTION_Belly = document.getElementById("MAP_Section-Belly");
        this.SECTION_Feet = document.getElementById("MAP_Section-Feet");

        this.pathArchiveUnpressed = "";
        this.pathCupboardUnpressed = "";
        this.pathExplorerUnpressed = "";
        this.pathLibraryUnpressed = "";
        this.pathOfficeUnpressed = "";
        this.pathPlatatsyPuszUnpressed = "";
        this.pathStalkUnpressed = "";
        this.pathSunflowerUnpressed = "";

    }

    DRAW_PAGE() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Belly.append(this.PANEL_BELLY());
        this.SECTION_Feet.append(this.PANEL_FEET());
    };
    PANEL_TITLE() {
        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'MAP_Title-Wrapper'
        }).init();

        // == TEXT == //
        let header = new create({
            tag: 'h1',
            id: 'MAP_Title-Header',
            elementText: ['USEFUL', 'GENERAL', 'MAP']
        }).init();

        // == ATTACHMENT == //
        wrapper.append(...[
            header
        ]);
        return wrapper;
    }
    PANEL_BELLY() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'MAP_Title-Wrapper'
        }).init();

        // == IMAGES == //
        const ImageArchive = new create({
            tag: 'img',
            source: this.pathArchiveUnpressed,
            classes: ['ARCHIVE', 'LOCATIONS', 'SELECTED']
        }).init();
        const ImageExplorer = new create({
            tag: 'img',
            source: this.pathExplorerUnpressed,
            classes: ['EXPLORER', 'LOCATIONS', 'SELECTED']
        }).init();
        const ImageLibrary = new create({
            tag: 'img',
            source: this.pathLibraryUnpressed,
            classes: ['LIBRARY', 'LOCATIONS', 'SELECTED']
        }).init();
        const ImageOffice = new create({
            tag: 'img',
            source: this.pathOfficeUnpressed,
            classes: ['OFFICE', 'LOCATIONS', 'SELECTED']
        }).init()
        const ImagePlatatsyPusz = new create({
            tag: 'img',
            source: this.pathPlatatsyPuszUnpressed,
            classes: ['TATSY', 'LOCATIONS', 'SELECTED']
        }).init();
        const ImageStalk = new create({
            tag: 'img',
            source: this.pathStalkUnpressed,
            classes: ['STALK', 'LOCATIONS', 'SELECTED']
        }).init();
        const ImageSunflower = new create({
            tag: 'img',
            source: this.pathSunflowerUnpressed,
            classes: ['SUNFLOWER', 'LOCATIONS', 'SELECTED']
        }).init();
        const ImageCupboard = new create({
            tag: 'img',
            source: this.pathCupboardUnpressed,
            classes: ['CUPBOARD', 'LOCATIONS', 'SELECTED']
        }).init();

        // == LISTENERS == //
        ImageStalk.addEventListener('click', (MAINSTALK) => {
            this.LOAD(['STALK', 'MAINPAGES', 'EXTERIORS'])
        });
        ImageLibrary.addEventListener('click', (LIBRARY) => {
            this.LOAD(['LIBRARY', 'MAINPAGES', 'EXTERIORS' ])
        });
        ImageOffice.addEventListener('click', (OFFICE) => {
            this.LOAD(['OFFICE', 'MAINPAGES', 'EXTERIORS' ])
        });
        ImageCupboard.addEventListener('click', (CUPBOARD) => {
            this.LOAD(['CUPBOARD', 'MAINPAGES', 'EXTERIORS' ])
        });
        ImageExplorer.addEventListener('click', (event) => {
            this.LOAD(['OBSERVATORY', 'MAINPAGES', 'EXTERIORS'])
        })

        // == ATTACHMENTS == //
        wrapper.append(...[
            ImageArchive,
            ImageExplorer,
            ImageLibrary,
            ImageOffice,
            ImagePlatatsyPusz,
            ImageStalk,
            ImageSunflower,
            ImageCupboard
        ]);
        return wrapper;
    }
    PANEL_FEET() {
        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'MAP_Title-Wrapper'
        }).init();

        // == ATTACHMENT == //
        // wrapper.append(...[

        // ]);
        return wrapper;
    };
    async INITIALISE_PAGE() {
        this.pathArchiveUnpressed = await this.INIT_ROUTE({
            TAG: "ARCHIVE_UNPRESSED",
            SECTION: "IMAGES",
            SUBSECTION: "MAP",
            ASSET: 1
        });
        this.pathCupboardUnpressed = await this.INIT_ROUTE({
            TAG: "CUPBOARD_UNPRESSED",
            SECTION: "IMAGES",
            SUBSECTION: "MAP",
            ASSET: 1
        });
        this.pathExplorerUnpressed = await this.INIT_ROUTE({
            TAG: "EXPLORER_UNPRESSED",
            SECTION: "IMAGES",
            SUBSECTION: "MAP",
            ASSET: 1
        });
        this.pathExplorerPressed = await this.INIT_ROUTE({
            TAG: "EXPLORER_PRESSED",
            SECTION: "IMAGES",
            SUBSECTION: "MAP",
            ASSET: 1
        });
        this.pathLibraryUnpressed = await this.INIT_ROUTE({
            TAG: "LIBRARY_UNPRESSED",
            SECTION: "IMAGES",
            SUBSECTION: "MAP",
            ASSET: 1
        });
        this.pathOfficeUnpressed = await this.INIT_ROUTE({
            TAG: "OFFICE_UNPRESSED",
            SECTION: "IMAGES",
            SUBSECTION: "MAP",
            ASSET: 1
        });
        this.pathPlatatsyPuszUnpressed = await this.INIT_ROUTE({
            TAG: "PLATATSYPUSZ_UNPRESSED",
            SECTION: "IMAGES",
            SUBSECTION: "MAP",
            ASSET: 1
        });
        this.pathStalkUnpressed = await this.INIT_ROUTE({
            TAG: "STALK_UNPRESSED",
            SECTION: "IMAGES",
            SUBSECTION: "MAP",
            ASSET: 1
        });
        this.pathSunflowerUnpressed = await this.INIT_ROUTE({
            TAG: "SUNFLOWER_UNPRESSED",
            SECTION: "IMAGES",
            SUBSECTION: "MAP",
            ASSET: 1
        });
    };
}

const pageMap = new Page_Map();
await pageMap.INITIALISE_PAGE();
pageMap.DRAW_PAGE();

