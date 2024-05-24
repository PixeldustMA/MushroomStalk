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
        this.SECTION_Belly.append(this.PANEL_BUTTONS());
    };
    PANEL_BUTTONS() {

        // == WRAPPER == // 
        const wrapperButtons = new create({
            tag: 'div'
        }).init();

        // == IMAGES == //
        const imageLanguage = new create({
            tag: 'img',
            source: this.pathLanguage,
            classes: ['BUTTONS', 'BUTTON_LANGUAGE']
        }).init();
        const imageUser = new create({
            tag: 'img',
            source: this.pathUser,
            classes: ['BUTTONS', 'BUTTON_USER']
        }).init();
        const imageBack = new create({
            tag: 'img',
            classes: ['BACK'],
            source: this.pathBack
        }).init();
        const imageReset = new create({
            tag: 'img',
            source: this.pathResetButton,
            classes: ['RESET']
        }).init();
        const imageBackUp = new create({
            tag: 'img',
            source: this.pathBackupButton,
            classes: ['BACKUP']
        }).init();
        const animationUser = new create({
            tag: 'img',
            source: this.pathUserAnimation
        }).init();

        // == TEXT == //
        const textDisplayBackup = new create({
            tag: 'label'
        }).init();

        const testDiv = new create({
            tag: 'div'
        }).init();
        const anchorTg = new create({
            tag: 'button'
        }).init();

        // TODO THE LANGUAGE IMAGE BUTTON IS BROKEN
        anchorTg.elementText = "LANGUAGE TEMPORARY BUTTON"
        testDiv.append(imageLanguage, anchorTg);

        // == LISTENERS == //
        imageLanguage.addEventListener('click', (event) => {
            document.body.replaceChildren();
            document.body.classList.remove('LanguageBackground');
            document.body.classList.add('KeyboardLanguge');
            setTimeout(() => {
                this.LOAD(['LANGUAGES', 'MAINPAGES', 'SETTINGS'])
            }, 2000);
        });
        imageUser.addEventListener('click', (event) => {
            wrapperButtons.replaceChildren();
            document.body.appendChild(animationUser);
            setTimeout(() => {
                console.log("END");  
                this.LOAD(['USERS', 'MAINPAGES', 'SETTINGS']);
            }, 2000);
        });
        imageBack.addEventListener('click', (event) => {
            this.LOAD(['MAIN', 'MAINPAGES', 'SETTINGS']);
        });
        imageReset.addEventListener('click', (event) => {
            console.log('H')
            this.SECTION_Belly.appendChild(this.PANEL_RESET());
        });
        imageBackUp.addEventListener('click', (event) => {
            this.picking.CHOOSE_FOLDER(textDisplayBackup)
			.then((RESULT) => {
                this.collideInstance.SMASH(RESULT).then((SAVERESULT) => {
                    console.log("SAVED"); 
                    return SAVERESULT
                });
                return RESULT
            });
        });

        // == ATTACHMENTS == //
        wrapperButtons.append(...[
            testDiv,
            imageUser,
            imageBack,
            imageReset,
            imageBackUp,
            textDisplayBackup
        ]);
        return wrapperButtons;
    };
    PANEL_RESET() {

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
            wrapperModal.remove();
        });
        buttonSure.addEventListener('click', (event) => {
            this.ResetInstance.EARTHQUAKE().then((RESULT) => {
                wrapperModal.remove();
                return RESULT
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
