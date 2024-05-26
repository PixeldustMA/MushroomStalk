import { Picker } from "../../../APPS/JELLYFISH/PICKER/Picker.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { Collider } from "../../../CONSOLE/PLATYPUS/Collider.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";
import { Tsunami } from "../../../CONSOLE/PLATYPUS/Tsunami.js";

class Page_Keyboard extends Stalk {

    constructor() {
        super();

        this.SECTION_Belly = document.getElementById('SECTION_Settings-Keyboard-Belly');

        this.ResetInstance = new Tsunami();
        this.collideInstance = new Collider();
        this.picking = new Picker();

        this.pathLanguage = "";
        this.pathUserAnimation = "";
        this.pathUser = "";
        this.pathBack = "";
        this.pathResetButton = "";
        this.pathBackupButton = "";
    }

    DRAW_PAGE() {
        this.SECTION_Belly.append(...[this.PANEL_BUTTONS()]);
    };
    PANEL_USER() {

        // == WRAPPERS == //
        const wrapperUserButtons = new create({
            tag: 'div',
            classes: ['USER_BUTTON_PANEL']
        }).init();

        // == IMAGES == //
        const imageUser = new create({
            tag: 'img',
            source: this.pathUser,
            classes: ['BUTTONS', 'BUTTON_USER']
        }).init();
        const animationUser = new create({
            tag: 'img',
            source: this.pathUserAnimation
        }).init();

        // == LISTENERS == //
        imageUser.addEventListener('click', (event) => {
            wrapperUserButtons.replaceChildren();
            document.body.appendChild(animationUser);
            setTimeout(() => {
                console.log("END");  
                this.LOAD(['USERS', 'MAINPAGES', 'SETTINGS']);
            }, 2000);
        });

        // == ATTACHMENTS == //
        wrapperUserButtons.append(imageUser);
        return wrapperUserButtons;
    }
    PANEL_LANGUAGE() {

        // == WRAPPER == // 
        const wrapperButtons = new create({
            tag: 'div',
            classes: ['LANGUAGE_BUTTON_PANEL']
        }).init();

        // == IMAGES == //
        const imageLanguage = new create({
            tag: 'img',
            source: this.pathLanguage,
            classes: ['BUTTONS', 'BUTTON_LANGUAGE']
        }).init();

        // == LISTENERS == //
        imageLanguage.addEventListener('click', (event) => {
            document.body.replaceChildren();
            document.body.classList.remove('LanguageBackground');
            document.body.classList.add('KeyboardLanguge');
            setTimeout(() => {
                this.LOAD(['LANGUAGES', 'MAINPAGES', 'SETTINGS'])
            }, 2000);
        });

        // == ATTACHMENTS == //
        wrapperButtons.append(...[
            imageLanguage
        ]);
        return wrapperButtons;
    };
    PANEL_RESET() {

        // == WRAPPER == // 
        const wrapperReset = new create({
            tag: 'div',
            classes: ['RESET_BUTTON_PANEL']
        }).init();

        // == IMAGES == //
        const imageReset = new create({
            tag: 'img',
            source: this.pathResetButton,
            classes: ['RESET']
        }).init();

        // == LISTENERS == //
        imageReset.addEventListener('click', (event) => {
            this.SECTION_Belly.replaceChildren();
            this.SECTION_Belly.appendChild(this.PANEL_RESET_PANEL());
        });

        // == ATTACHMENTS == //
        wrapperReset.append(...[
            imageReset
        ]);
        return wrapperReset;
    };
    PANEL_BACK() {

         // == WRAPPER == // 
        const wrapperButtonBack = new create({
            tag: 'div',
            classes: ['BACK_BUTTON_PANEL']
        }).init();

        // == IMAGES == //
        const imageBack = new create({
            tag: 'img',
            classes: ['BACK'],
            source: this.pathBack
        }).init();

        // == LISTENERS == //
        imageBack.addEventListener('click', (event) => {
            this.LOAD(['MAIN', 'MAINPAGES', 'SETTINGS']);
        });

        // == ATTACHMENTS == //
        wrapperButtonBack.append(...[imageBack]);
        return wrapperButtonBack;
    };
    PANEL_BACKUP() {

        // == WRAPPERS == //
        const wrapperUserBackup = new create({
            tag: 'div',
            classes: ['BACKUP_BUTTON_PANEL']
        }).init();

        // == IMAGES == //
        const imageBackUp = new create({
            tag: 'img',
            source: this.pathBackupButton,
            classes: ['BACKUP']
        }).init();

        // == TEXT == //
        const textDisplayBackup = new create({
            tag: 'label'
        }).init();

        // == LISTENERS == //
        imageBackUp.addEventListener('click', (event) => {
            this.picking.CHOOSE_FOLDER(textDisplayBackup)
			.then((RESULT) => {
                this.collideInstance.SMASH(RESULT).then((SAVERESULT) => {
                    return SAVERESULT
                });
                return RESULT
            });
        });
        // == ATTACHMENTS == //
        wrapperUserBackup.append(imageBackUp);
        return wrapperUserBackup;
    }
    PANEL_BUTTONS() {

        // == WRAPPERS == //
        const wrapperPanel = new create({
            tag: 'div'
        }).init();

        wrapperPanel.append(...[
            this.PANEL_USER(),
            this.PANEL_LANGUAGE(),
            this.PANEL_RESET(),
            this.PANEL_BACK(),
            this.PANEL_BACKUP()
        ])
        return wrapperPanel;
    };

    PANEL_RESET_PANEL() {

        const wrapperModal = new create({
            tag: 'div',
            classes: ['modal']
        }).init();

        const headerReset = new create({
            tag: 'h2',
            elementText: ["SETTINGS", "HEADERS", "RESET"]
        }).init();

        const buttonSure = new create({
            tag: 'button',
            elementText: ["SETTINGS", "HEADERS", "SURE"]
        }).init();
        const buttonNo = new create({
            tag: 'button',
            elementText: ["SETTINGS", "HEADERS", "NOT SURE"]
        }).init();
        
        // == LISTENERS == //
        buttonNo.addEventListener('click', (event) => {
            console.log("HELLO")
            window.location.reload();
        });
        buttonSure.addEventListener('click', (event) => {
            this.ResetInstance.EARTHQUAKE().then((RESULT) => {
                console.log('reset complete')
                // wrapperModal.remove();
                // return RESULT
            })
        });

        wrapperModal.append(...[
            headerReset,
            buttonSure,
            buttonNo
        ]);
        return wrapperModal;
    }
    async CREATE_BUTTONS() {
        this.pathLanguage = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_LANGUAGE',
            SECTION: 'IMAGES',
            SUBSECTION: 'SETTINGS',
            ASSET: 1
        });
        this.pathUser = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_USER',
            SECTION: 'IMAGES',
            SUBSECTION: 'SETTINGS',
            ASSET: 1
        });
        this.pathUserAnimation = await this.INIT_ROUTE({
            TAG: 'KEYBOARD_USER',
            SECTION: "ANIMATIONS",
            SUBSECTION: 'MISC',
            ASSET: 1
        });
        this.pathBack = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_BACK',
            SECTION: 'IMAGES',
            SUBSECTION: 'SETTINGS',
            ASSET: 1
        });
        this.pathResetButton = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_RESET',
            SECTION: 'IMAGES',
            SUBSECTION: 'SETTINGS',
            ASSET: 1
        });
        this.pathBackupButton = await this.INIT_ROUTE({
            TAG: 'UNPRESSED_BACKUP',
            SECTION: 'IMAGES',
            SUBSECTION: 'SETTINGS',
            ASSET: 1
        });
    }
}

const pageKeyboard = new Page_Keyboard();
await pageKeyboard.CREATE_BUTTONS();
pageKeyboard.DRAW_PAGE();
