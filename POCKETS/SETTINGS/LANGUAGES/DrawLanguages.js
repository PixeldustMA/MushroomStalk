import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";
 
class Page_Languages extends Stalk {
    constructor() {
        super();
        // -- SECTIONS
        this.SECTION_Buttons = document.getElementById('SECTION_Settings-Language-Belly')
        // -- PATHS
        this.pathHawaiianUnpressed = "";
        // -- TEXT
        this.languageSetting = "";
    }

    DRAW_PAGE() {
        this.SECTION_Buttons.append(this.DRAW_BUTTONS());
    };
    DRAW_BUTTONS() {

        // == WRAPPERS == //
        const wrapperButtons = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const currentText = new create({
            tag: 'h2',
            classes: ['DISPLAY']
        }).init();
        currentText.innerHTML = this.languageSetting;

        // == IMAGES == //
        const imageHawaiian = new create({
            tag: 'img',
            source: this.pathHawaiianUnpressed,
            classes: ['LANGUAGES']
        }).init();

        // == BUTTONS == //
        const buttonBack = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'BACK']
        }).init();

        // == LISTENERS == //
        imageHawaiian.addEventListener('click', (event) => {
            currentText.innerHTML = "HAWAIIAN";
            this.CHANGE_SETTINGS('LANGUAGE', 'HAWAIIAN').then((LANG) => {return LANG});
        });
        buttonBack.addEventListener('click', (event) => {
            document.body.replaceChildren();
            document.body.classList.remove('LanguageBackground');
            document.body.classList.add('KeyboardLangugeReverse');
            setTimeout(() => {
                this.LOAD(['KEYBOARD', 'MAINPAGES', 'SETTINGS']);                  
            }, 2000);
        });
        // == ATTACHMENTS == //
        wrapperButtons.append(...[
            imageHawaiian,
            currentText,
            buttonBack
        ])
        return wrapperButtons;
    }
    async INITIALISE_PAGE() {
        this.pathHawaiianUnpressed = await this.INIT_ROUTE({
            TAG: 'HAWAIIAN_UNPRESSED',
            SECTION: 'IMAGES',
            SUBSECTION: 'LANGUAGES',
            ASSET: 1
        });
        const settings = await this.READ_SETTINGS();
        console.log(settings)
        this.languageSetting = settings['LANGUAGE'];
    }
};

const pageLanguage = new Page_Languages();
await pageLanguage.INITIALISE_PAGE();
pageLanguage.DRAW_PAGE();