import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Library Screen     //
// ================================= //

class Page_Library extends Stalk {

    constructor() { 
        super();
        this.SECTION_Buttons = document.getElementById("SECTION_Library-Buttons");;
    };

    DRAW_PAGE() {
        this.SECTION_Buttons.append(this.PANEL_BUTTONS());
    };
    PANEL_BUTTONS() {
        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Library-Wrapper'
        }).init();

        // == BUTTONS == //
        const buttonHotAirBalloon = new create({
            tag: 'button',
            id: 'BUTTON_Library-HotAirBalloon',
			elementText: ['LIBRARY', 'BUTTON', 'BALLOON'],
        }).init();
        const buttonSquirrel = new create({
            tag: 'button',
            id: 'BUTTON_Library-Squirrel',
			elementText: ['LIBRARY', 'BUTTON', 'SQUIRREL'],
        }).init();
        const buttonArchive = new create({
            tag: 'button',
            id: 'BUTTON_Library-Archive',
            elementText: ['LIBRARY', 'BUTTON', 'ARCHIVE'],
        }).init();
        const buttonExplorer = new create({
            tag: 'button',
            id: 'BUTTON_Library-Archive',
			elementText: ['LIBRARY', 'BUTTON', 'EXPLORER'],
        }).init();

        buttonHotAirBalloon.addEventListener('click', (OPEN) => {
        });
        buttonSquirrel.addEventListener('click', (OPEN) => {
        });
        buttonArchive.addEventListener('click', (OPEN) => {
        });
        buttonExplorer.addEventListener('click', (OPEN) => {
        });

        // == ATTACHMENTS == //
        wrapper.append(...[
            buttonHotAirBalloon,
            buttonSquirrel,
            buttonArchive,
            buttonExplorer
        ])

        return wrapper;
    }
};

const pageLibrary = new Page_Library();
pageLibrary.DRAW_PAGE();

