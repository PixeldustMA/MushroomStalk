import { User } from "../../../APPS/USERS/User.js";
import { Language } from "../../../CONSOLE/CONTROLLERS/LanguageController.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";
 
class Page_Users extends Stalk {
    constructor() {
        super();
        this.scribble = new Language();
        this.userInstance = new User();
        this.SECTION_Title = document.getElementById('SECTION_Settings-Users-Title');
        this.SECTION_Belly = document.getElementById('SECTION_Settings-Users-Belly');
        this.SECTION_Feet = document.getElementById('SECTION_Settings-Users-Feet');
        this.pathLoginButton = "";
        this.pathLoginButtonPulled = "";
        this.pathAnimationLever = "";
        this.pathAnimationReverse = "";
        this.pathAnimationClose = "";
        this.displayText;
        this.leverState = false;
    }

    DRAW_PAGE() {
        this.SECTION_Title.append(this.PANEL_TITLE());
        this.SECTION_Belly.append(this.PANEL_BELLY());
    };
    PANEL_TITLE() {
        
        // == WRAPPER == //
        const wrapperTitle = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const headerStayLoggedIn = new create({
            tag: 'h1',
            elementText: ['SETTINGS', 'HEADERS', "LOGGED"]
        }).init();
        const labelYesOrNo = new create({
            tag: 'label',
            id: 'LABEL_Display-Login-Status',
            elementText: ['SETTINGS', 'HEADERS', 'NO']
        }).init();
        this.displayText = labelYesOrNo;
        wrapperTitle.append(...[
            headerStayLoggedIn,
            labelYesOrNo
        ]);
        return wrapperTitle;
    };
    PANEL_BELLY() {

        // == WRAPPER == //
        const wrapperBelly = new create({
            tag: 'div'
        }).init();

        // == IMAGE == //
        const imageLever = new create({
            tag: 'img',
            classes: ['LEVER']
        }).init();

        // == BUTTONS == //
        const backButton = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'BACK']
        }).init();

        // == ACTIONS == //
        if (this.leverState) {
            imageLever.src = this.pathLoginButtonPulled;
            imageLever.classList.add('PULLED');
        }
        else {
            imageLever.src = this.pathLoginButton;
        }

        // == LISTENERS == //
        imageLever.addEventListener('click', (event) => {

            if (!this.leverState) {
                imageLever.style.display = 'NONE'
                document.body.classList.remove('UserBackground');
                document.body.classList.add('LeverBackground');
                setTimeout(() => {
                    imageLever.src = this.pathLoginButtonPulled;
                    imageLever.classList.add('PULLED')
                    imageLever.style.display = "block"
                    document.body.classList.add('UserBackground');
                    document.body.classList.remove('LeverBackground');
                }, 500);
                this.displayText.innerHTML = this.scribble.SCRIBE(["SETTINGS", "HEADERS", "YES"]);
                this.leverState = true;
                this.userInstance.UPDATE_USER('LOGGED', true, true);
            }
            else if (this.leverState) {
                console.log("PULLED");
                imageLever.style.display = 'NONE';
                document.body.classList.remove('UserBackground');
                document.body.classList.add('LeverReversedBackground');
                setTimeout(() => {
                    imageLever.src = this.pathLoginButton;
                    imageLever.classList.remove('PULLED')
                    imageLever.style.display = "block"
                    document.body.classList.add('UserBackground');
                    document.body.classList.remove('LeverReversedBackground');
                }, 500);
                this.displayText.innerHTML = this.scribble.SCRIBE(["SETTINGS", "HEADERS", "NO"]);
                this.leverState = false;
                this.userInstance.UPDATE_USER('LOGGED', false, true);
            }
        });
        backButton.addEventListener('click', (event) => {
            document.body.classList.remove('UserBackground');
            document.body.classList.add('KeyboardClose');
            document.body.replaceChildren();
            setTimeout(() => {
                this.LOAD(['KEYBOARD', 'MAINPAGES', 'SETTINGS']);                
            }, 2000);
        });

        // == ATTACHMENTS == //
        wrapperBelly.append(...[
            imageLever,
            backButton
        ]);
        return wrapperBelly;     
    };
    PANEL_FEET() {};
    async INITIALISE_PAGE() {
        this.pathLoginButton = await this.INIT_ROUTE({
            TAG: 'UNPULLED_LEVER',
            SECTION: 'IMAGES',
            SUBSECTION: 'SETTINGS',
            ASSET: 1
        });
        this.pathLoginButtonPulled = await this.INIT_ROUTE({
            TAG: 'PULLED_LEVER',
            SECTION: 'IMAGES',
            SUBSECTION: 'SETTINGS',
            ASSET: 1
        });
        this.pathAnimationLever = await this.INIT_ROUTE({
            TAG: 'KEYBOARD_LEVER',
            SECTION: 'ANIMATIONS',
            SUBSECTION: 'MISC',
            ASSET: 1
        });
        this.pathAnimationReverse = await this.INIT_ROUTE({
            TAG: 'KEYBOARD_LEVER_REVERSE',
            SECTION: 'ANIMATIONS',
            SUBSECTION: 'MISC',
            ASSET: 1
        });
        this.pathAnimationClose = await this.INIT_ROUTE({
            TAG: "KEYBOARD_CLOSES",
            SECTION: "ANIMATIONS",
            SUBSECTION: "MISC",
            ASSET: 1
        })
        await this.scribble.LOAD();

        if (await this.userInstance.CHECK_LOGGED_IN()) {
            this.leverState = true;
            console.log('user')
        }
        else {
            console.log('user off')
            this.leverState = false;
        }
    };
};

const pageUsers = new Page_Users();
await pageUsers.INITIALISE_PAGE();
pageUsers.DRAW_PAGE();