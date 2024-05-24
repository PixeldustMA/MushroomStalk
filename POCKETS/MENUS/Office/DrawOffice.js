import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Office Screen     //
// ================================= //

class Page_Office extends Stalk {

    constructor() { 
        super();
        this.SECTION_Buttons = document.getElementById("SECTION_Office-Buttons");
    };

    DRAW_PAGE() {
        this.SECTION_Buttons.append(this.PANEL_BUTTONS());
    };
    PANEL_BUTTONS() {

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Office-Wrapper'
        }).init();

        // == BUTTONS == //
        // const buttonJobGenerator = new create({
        //     tag: 'button',
        //     id: 'BUTTON_Office-JobGenerator',
		// 	elementText: ['OFFICE', 'BUTTON', 'JOB'],
        // }).init();
        // const buttonPixelPage = new create({
        //     tag: 'button',
        //     id: 'BUTTON_Office-PixelPage',
		// 	elementText: ['OFFICE', 'BUTTON', 'PIXEL'],
        // }).init();
        // const buttonTvTracker = new create({
        //     tag: 'button',
        //     id: 'BUTTON_Office-TVTracker',
		// 	elementText: ['OFFICE', 'BUTTON', 'TV'],
        // }).init();
        // const buttonMumblies = new create({
        //     tag: 'button',
        //     id: 'BUTTON_Office-Mumblies',
		// 	elementText: ['OFFICE', 'BUTTON', 'MUMBLIES'],
        // }).init();
        // const buttonWheel = new create({
        //     tag: 'button',
        //     id: 'BUTTON_Office-Wheel',
		// 	elementText: ['OFFICE', 'BUTTON', 'WHEEL'],
        // }).init();

        // buttonJobGenerator.addEventListener('click', (OPEN) => {
        // })
        // buttonPixelPage.addEventListener('click', (OPEN) => {
        // });
        // buttonTvTracker.addEventListener('click', (OPEN) => {
        // });
        // buttonMumblies.addEventListener('click', (OPEN) => {
        // });   
        // buttonWheel.addEventListener('click', (OPEN) => {
        // });   

        // == ATTACHMENTS == //
        wrapper.append(...[
            buttonJobGenerator,
            buttonPixelPage,
            buttonTvTracker,
            buttonMumblies,
            buttonWheel
        ])

        return wrapper;
    }
};

const pageOffice = new Page_Office();
pageOffice.DRAW_PAGE();

