import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

class Page_Settings extends Stalk {
 
    constructor() {
        super();
        this.SECTION_Settings_Title = document.getElementById('SECTION_Settings-Title');
        this.ZoomPath = "";
        this.KeyboardPath = "";
    }

    // == A MENU SCREEN
    // == A BUTTON TO VIEW THE SCREEN (PLAYS AN ANIMATION ZOOMING IN TO THE SCREEN)
    // == DISPLAY A CLOSE UP VIEW OF THE SCREEN WITH A DISPLAY OF ALL CURRENT INFORMATION IN THE SETTINGS
    // == A BUTTON TO OPEN THE KEYBOARD (PLAYS AN ANIMATION TO OPEN THE DRAW)
    // == SHOW THE KEYBOARD SCREEN
    // == CHOOSE AN OPTION
    // == SENDS TO DIFFERENT SETTINGS SCREEN

    DRAW_PAGE() {
        this.SECTION_Settings_Title.append(this.PANEL_TITLE());
        
    };
    PANEL_TITLE() {

        // == WRAPPERS == //
        const wrapperTitle = new create({
            tag: 'div'
        }).init();

        // == TEXT == // 
        const headerTitle = new create({
            tag: 'h2',
            elementText: ['SETTINGS', 'HEADERS', 'PAGE']
        }).init();

        // == BUTTONS == //
        const buttonScreen = new create({
            tag: 'button',
            elementText: ['SETTINGS', 'BUTTONS', 'SCREEN']
        }).init();
        const buttonKeyboard = new create({
            tag: 'button',
            elementText: ['SETTINGS', 'BUTTONS', 'KEYBOARD']
        }).init();

        buttonScreen.addEventListener('click', (event) => {
            const animationZoom = new create({
                tag: 'img',
                source: this.ZoomPath,
                classes: ['ANIMATION']
            }).init();
            document.body.appendChild(animationZoom);
            setTimeout(() => {
                this.LOAD(['DISPLAY', 'MAINPAGES', 'SETTINGS'])
            }, 1700);
        });
        buttonKeyboard.addEventListener('click', (event) => {
            const animationKeyboard = new create({
                tag: 'img',
                source: this.KeyboardPath,
                classes: ['ANIMATION']
            }).init();
            document.body.appendChild(animationKeyboard);
            setTimeout(() => {
                this.LOAD(['KEYBOARD', 'MAINPAGES', 'SETTINGS'])
            }, 2750);
        });
        wrapperTitle.append(...[
            headerTitle,
            buttonScreen,
            buttonKeyboard
        ])
        return wrapperTitle;
    }
}

const pageSettings = new Page_Settings();
pageSettings.ZoomPath = await pageSettings.INIT_ROUTE({
    TAG: 'SCREEN',
    SECTION: 'ANIMATIONS',
    SUBSECTION: 'MISC',
    ASSET: 1
});
pageSettings.KeyboardPath = await pageSettings.INIT_ROUTE({
    TAG: 'DRAW',
    SECTION: 'ANIMATIONS',
    SUBSECTION: 'MISC',
    ASSET: 1
});
pageSettings.DRAW_PAGE();