import { User } from "../../../APPS/USERS/User.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Title Screen       //
// ================================= //

class Page_Title extends Stalk {

    constructor() {
        super();
        this.SECTION_Title = document.getElementById('TITLE_Section-Title');
        this.SECTION_Belly = document.getElementById('TITLE_Section-Belly');
        this.SECTION_Feet = document.getElementById('TITLE_Section-Feet');
        this.ACTIVE = "USERNAME";

        this.settingsButtonPath = "";
        this.stalkButtonPath = "";
        this.loginButtonPath = "";
        this.changeUserButtonPath = "";
        this.mapButtonPath = "";

    };

    // == MAIN == //
    DRAW_PAGE() {
        this.SECTION_Title.append(this.PANEL_Title());
        this.SECTION_Belly.append(this.PANEL_Belly());
    }

    // == DRAW PANELS == //
    PANEL_Title() {

        // == CONTAINERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Title-Title'
        }).init();

        // == TEXT == //
        let header = new create({
            tag: 'h1',
            id: 'HEADER_Title-Text',
            elementText: ['TITLE', "HEADER", "PAGE"]
        }).init();

        // == ATTATCHMENTS == //
        wrapper.append(...[
            header
        ]);
        return wrapper;
    };
    PANEL_Belly() {

        // == CONTAINERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Title-Title'
        }).init();
        const wrapperAvatar = new create({
            tag: 'div',
            classes: ['PICTURE_FRAME']
        }).init();

        // == TEXT == //
        const loggedInUserText = new create({
            tag: 'label',
            id: 'LABEL_Title-UserName'
        }).init();

        // == IMAGES == //
        const imageSettingsButton = new create({
            tag: 'img',
            id: 'IMAGE_Title-Settings-Button',
            classes: ['BOARD', 'SETTINGS_BUTTON'],
            source: this.settingsButtonPath
        }).init();
        const imageMapButton = new create({
            tag: 'img',
            id: 'IMAGE_Title-Map-Button',
            classes: ['BOARD', 'MAP_BUTTON'],
            source: this.mapButtonPath
        }).init();
        const imageLoginButton = new create({
            tag: 'img',
            id: 'IMAGE_Title-Login-Button',
            classes: ['BOARD', 'LOGIN_BUTTON'],
            source: this.loginButtonPath
        }).init();
        const imageStalkButton = new create({
            tag: 'img',
            id: 'IMAGE_Title-Stalk-Button',
            classes: ['BOARD', 'STALK_BUTTON'],
            source: this.stalkButtonPath
        }).init();

        // == LISTENERS == //
        imageStalkButton.addEventListener('click', (STALKEVENT) => {
            this.LOAD(['START', "MAINPAGES", "MENUS"]);
        });
        imageMapButton.addEventListener('click', (MAPEVENT) => {
            this.LOAD(['MAP', "MAINPAGES", "MENUS"]);
        });
        imageSettingsButton.addEventListener('click', (event) => {
            this.LOAD(['MAIN', 'MAINPAGES', 'SETTINGS']);
        })
        // == ATTATCHMENTS == //
        wrapper.append(...[
            loggedInUserText,

            imageLoginButton,
            imageMapButton,
            imageSettingsButton,
            imageStalkButton,
            wrapperAvatar
        ]);
        return wrapper;
    };

    // == ACTIONS == //
    async ACTIVE_USER() {

        this.settingsButtonPath = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_SETTINGS',
            SECTION: 'IMAGES',
            SUBSECTION: 'FROG_BOARD',
            ASSET: 1  
        });
        this.stalkButtonPath = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_MAIN',
            SECTION: 'IMAGES',
            SUBSECTION: 'FROG_BOARD',
            ASSET: 1
        });
        this.loginButtonPath = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_LOGIN',
            SECTION: 'IMAGES',
            SUBSECTION: 'FROG_BOARD',
            ASSET: 1  
        });
        this.changeUserButtonPath = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_CHANGE',
            SECTION: 'IMAGES',
            SUBSECTION: 'FROG_BOARD',
            ASSET: 1  
        });
        this.mapButtonPath = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_MAP',
            SECTION: 'IMAGES',
            SUBSECTION: 'FROG_BOARD',
            ASSET: 1  
        });

        const frogs = new User();
        let frog = await frogs.GET_RESIDNT_FROG();
        this.ACTIVE = frog.NAME;
        console.log(frog.NAME);
        return frog;
    };
};

const titlePage = new Page_Title();
await titlePage.ACTIVE_USER();
titlePage.DRAW_PAGE();
setTimeout(() => {
    if (titlePage.ACTIVE !== "USERNAME") {
        // let y = document.getElementById('BUTTON_Title-ChangeUser').innerHTML;
        // document.getElementById('BUTTON_Title-ChangeUser').innerHTML = 'CHANGE USER';
        document.getElementById('LABEL_Title-UserName').innerHTML = `HELLO ${titlePage.ACTIVE}`;
        document.getElementById('IMAGE_Title-Login-Button').src = titlePage.changeUserButtonPath;
    };
}, 1000);

