import Connector_Beetle from "../../../../CONSOLE/ARTERIES/Connector_Beetle.js";
import Branches from "../../../../CONSOLE/LUNGS/Branches.js";
import Create from "../../CREATE/Create.js";

// ================================================ //
// ================================================ //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                                            == //
// ==                 CREATE                     == //
// ##                 FRAME                      ## //
// ==       Draw the frame for the app           == //
// ==                                            == //
// ================================================ //
// ================================================ //

/**
 * ## DRAW FRAME FOR WINDOW
 * 
 * ------------------------
 * 
 * Draw the top bar of the window with quit, size and menu buttons
 * 
 */
class JELLYFISH_Frame extends HTMLElement{

    /**
     * ## FRAME CONSTRUCTOR
     */
    constructor() {
		super ();

        // =========== //
        // ## DEBUG ## //
        // =========== //

        this.INSTANCE_BEETLE = new Connector_Beetle({
            BEETLE_CONFIG_MODE: 'DEBUG',
            BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
            BEETLE_CONFIG_TYPE: 'STANDARD',
            BEETLE_CONFIG_CATEGORY: 'CREATE',
            BEETLE_CONFIG_LOCATION: 'JELLYFISH_Frame.js',
            BEETLE_CONFIG_SCRIPT: 'FRAME',
            BEETLE_CONFIG_TEXT: 'INITIALISING FUNCTIONALITY FOR JELLYFISH FRAME'
        });

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        this.INSTANCE_BRANCH = new Branches();

        // =========== //
        // ## PATHS ## //
        // =========== //

        this.PATH_PRESSED = {};
        this.PATH_UNPRESSED = {};

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.menuButtonHover = false;

        // ============== //
        // ## ELEMENTS ## //
        // ============== //

        this.WRAPPER_ELEMENT = '';
    };

    /**
     * ## FRAME ACTIONS
     * 
     * ------------------------
     * 
     * Activate button functions for the frame element
     */
	connectedCallback() {

        const SHADOW = this.attachShadow({mode: 'open'});
		this.WRAPPER_ELEMENT = document.createElement('div');
        this.WRAPPER_ELEMENT.classList.add('Frame');
        this.WRAPPER_ELEMENT.id = 'WRAPPER_Frame-Box';

        customElements.whenDefined('jellyfish-frame').then(() => {

            this.INSTANCE_BEETLE.DAISY_TEXT = 'FRAME IS DEFINED';
            this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});

            this.INSTANCE_BEETLE.READ_MODE().then((RESULT) => {return RESULT});
            this.#FRAME_PRESSED_PATHS().then((RESULT) => {return RESULT});
            this.#FRAME_UNPRESSED_PATHS().then((RESULT) => {return RESULT});
            setTimeout(() => {             
                this.#GENERATE_MENU().then((RESULT) => {return RESULT});
                this.#GENERATE_QUIT().then((RESULT) => {return RESULT});
                this.#GENERATE_MINIMISE().then((RESULT) => {return RESULT});
                this.#GENERATE_FEET().then((RESULT) => {return RESULT});
            }, 800);


            this.WRAPPER_ELEMENT.innerHTML = this.#FETCH_STYLE();
            SHADOW.appendChild(this.WRAPPER_ELEMENT);
        })
    };

    // ========== //
    // ## LOAD ## //
    // ========== //

    /**
     * ## FETCH PRESSED BUTTON PATHS
     * 
     * -------------------------------
     * 
     * Load formatted versions of all paths for pressed versions of buttons
     * 
     */
    async #FRAME_PRESSED_PATHS() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'FETCHING PRESSED BUTTON PATHS';
        await this.INSTANCE_BEETLE.READ_MODE();

        this.PATH_PRESSED = {
            FEET: await this.INSTANCE_BRANCH.READ_MODE({
                PARAMTER_BRANCH_MODE: 'ROUTE',
                PARAMETER_SETTINGS_ROUTE: {
                    TAG: 'PRESSED', 
                    MEMORY: 'ASSETS', 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_FEETS'
                }
            }),
            MINIMISE: await this.INSTANCE_BRANCH.READ_MODE({
                PARAMTER_BRANCH_MODE: 'ROUTE',
                PARAMETER_SETTINGS_ROUTE: {
                    TAG: 'PRESSED', 
                    MEMORY: 'ASSETS', 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_MIN'
                }
            }),
            QUIT: await this.INSTANCE_BRANCH.READ_MODE({
                PARAMTER_BRANCH_MODE: 'ROUTE',
                PARAMETER_SETTINGS_ROUTE: {
                    TAG: 'PRESSED', 
                    MEMORY: 'ASSETS', 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_QUIT'
                }
            }),
            MENU: await this.INSTANCE_BRANCH.READ_MODE({
                PARAMTER_BRANCH_MODE: 'ROUTE',
                PARAMETER_SETTINGS_ROUTE: {
                    TAG: 'PRESSED', 
                    MEMORY: 'ASSETS', 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_MENU'
                }
            })
    };
        return this.PATH_PRESSED;
    };
    /**
     * ## FETCH UNPRESSED BUTTON PATHS
     * 
     * -------------------------------
     * 
     * Load formatted versions of all paths for unpressed versions of buttons
     * 
     */
    async #FRAME_UNPRESSED_PATHS() {
        this.INSTANCE_BEETLE.DAISY_TEXT = 'FETCHING UNPRESSED BUTTON PATHS';
        await this.INSTANCE_BEETLE.READ_MODE();

        this.PATH_UNPRESSED = {
            FEET: await this.INSTANCE_BRANCH.READ_MODE({
                PARAMTER_BRANCH_MODE: 'ROUTE',
                PARAMETER_SETTINGS_ROUTE: {
                    TAG: 'UNPRESSED', 
                    MEMORY: 'ASSETS', 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_FEETS'
                }
            }),
            MINIMISE: await this.INSTANCE_BRANCH.READ_MODE({
                PARAMTER_BRANCH_MODE: 'ROUTE',
                PARAMETER_SETTINGS_ROUTE: {
                    TAG: 'UNPRESSED', 
                    MEMORY: 'ASSETS', 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_MIN'
                }
            }),
            QUIT: await this.INSTANCE_BRANCH.READ_MODE({
                PARAMTER_BRANCH_MODE: 'ROUTE',
                PARAMETER_SETTINGS_ROUTE: {
                    TAG: 'UNPRESSED', 
                    MEMORY: 'ASSETS', 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_QUIT'
                }
            }),
            MENU: await this.INSTANCE_BRANCH.READ_MODE({
                PARAMTER_BRANCH_MODE: 'ROUTE',
                PARAMETER_SETTINGS_ROUTE: {
                    TAG: 'UNPRESSED', 
                    MEMORY: 'ASSETS', 
                    SECTION: 'IMAGES', 
                    SUBSECTION: 'FRAME_MENU'
                }
            })
        };
        return this.PATH_UNPRESSED;
    };

    // ============ //
    // ## IMAGES ## //
    // ============ //

    /**
     * ## CREATE FEET BUTTON IMAGE
     * 
     * -------------------------------
     * 
     * Create the image element for the feet button
     * 
     */
    async #IMAGE_FEET() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CREATING IMAGE ELEMENT FOR FEET BUTTON';
        await this.INSTANCE_BEETLE.READ_MODE();

        return await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_UNPRESSED.FEET,
            CREATE_CONFIG_PERSONALITY_CLASSES: ['pixFeet', 'frameButton']
        }).INIT();
    };
    /**
     * ## CREATE MINIMISE BUTTON IMAGE
     * 
     * -------------------------------
     * 
     * Create the image element for the minimise button
     * 
     */
    async #IMAGE_MINIMISE() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CREATING IMAGE ELEMENT FOR MINIMISE BUTTON';
        await this.INSTANCE_BEETLE.READ_MODE();

        return await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_UNPRESSED.MINIMISE,
            CREATE_CONFIG_PERSONALITY_CLASSES: ['pixMin', 'frameButton']
        }).INIT();
    };
    /**
     * ## CREATE QUIT BUTTON IMAGE
     * 
     * -------------------------------
     * 
     * Create the image element for the quit button
     * 
     */
    async #IMAGE_QUIT() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CREATING IMAGE ELEMENT FOR QUIT BUTTON';
        await this.INSTANCE_BEETLE.READ_MODE();

        return await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_UNPRESSED.QUIT,
            CREATE_CONFIG_PERSONALITY_CLASSES: ['pixQuit', 'frameButton']
        }).INIT();
    };
    /**
     * ## CREATE MENU BUTTON IMAGE
     * 
     * -------------------------------
     * 
     * Create the image element for the menu button
     * 
     */
    async #IMAGE_MENU() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CREATING IMAGE ELEMENT FOR MENU BUTTON';
        await this.INSTANCE_BEETLE.READ_MODE();

        return await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'img',
            CREATE_CONFIG_PERSONALITY_SOURCE: this.PATH_UNPRESSED.MENU,
            CREATE_CONFIG_PERSONALITY_CLASSES: ['pixMenu', 'frameButton']
        }).INIT();
    };

    // ============= //
    // ## BUTTONS ## //
    // ============= //

    /**
     * ## ATTACH FEET BUTTON
     * 
     * -------------------------------
     * 
     * Request creation of a feet button and add it to the frame
     * 
     */
    async #GENERATE_FEET() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CREATING IMAGE ELEMENT FOR FEET BUTTON';
        await this.INSTANCE_BEETLE.READ_MODE();

        const IMAGE_Feet = await this.#IMAGE_FEET();
        let PRESSED = this.PATH_PRESSED;
        let UNPRESSED = this.PATH_UNPRESSED;

        IMAGE_Feet.addEventListener('click', (event) => {this.#LOAD().then((RESULT) => {return RESULT})});
        IMAGE_Feet.onmouseenter = function() {IMAGE_Feet.src = PRESSED.FEET;};
        IMAGE_Feet.onmouseleave = function() {IMAGE_Feet.src = UNPRESSED.FEET;};

        this.WRAPPER_ELEMENT.append(IMAGE_Feet);
        return this.WRAPPER_ELEMENT;
    };
    /**
     * ## ATTACH MINIMISE BUTTON
     * 
     * -------------------------------
     * 
     * Request creation of a minimise button and add it to the frame
     * 
     */
    async #GENERATE_MINIMISE() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CREATING IMAGE ELEMENT FOR MINIMISE BUTTON';
        await this.INSTANCE_BEETLE.READ_MODE();

        const IMAGE_Minimise = await this.#IMAGE_MINIMISE();
        let PRESSED = this.PATH_PRESSED;
        let UNPRESSED = this.PATH_UNPRESSED;

        IMAGE_Minimise.addEventListener('click', (event) => {this.#SMALL().then((RESULT) => {return RESULT})});
        IMAGE_Minimise.onmouseenter = function() {IMAGE_Minimise.src = PRESSED.MINIMISE;};
        IMAGE_Minimise.onmouseleave = function() {IMAGE_Minimise.src = UNPRESSED.MINIMISE;};

        this.WRAPPER_ELEMENT.append(IMAGE_Minimise);
        return this.WRAPPER_ELEMENT;
    };
    /**
     * ## ATTACH QUIT BUTTON
     * 
     * -------------------------------
     * 
     * Request creation of a quit button and add it to the frame
     * 
     */
    async #GENERATE_QUIT() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CREATING IMAGE ELEMENT FOR QUIT BUTTON';
        await this.INSTANCE_BEETLE.READ_MODE();

        const IMAGE_Quit = await this.#IMAGE_QUIT();
        let PRESSED = this.PATH_PRESSED;
        let UNPRESSED = this.PATH_UNPRESSED;

        IMAGE_Quit.addEventListener('click', (event) => {this.#CLOSING().then((RESULT) => {return RESULT})});
        IMAGE_Quit.onmouseenter = function() {IMAGE_Quit.src = PRESSED.QUIT;};
        IMAGE_Quit.onmouseleave = function() {IMAGE_Quit.src = UNPRESSED.QUIT;};

        this.WRAPPER_ELEMENT.append(IMAGE_Quit);
        return this.WRAPPER_ELEMENT;
    };
    /**
     * ## ATTACH MENU BUTTON
     * 
     * -------------------------------
     * 
     * Request creation of a menu button and add it to the frame
     * 
     */
    async #GENERATE_MENU() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'CREATING IMAGE ELEMENT FOR MENU BUTTON';
        await this.INSTANCE_BEETLE.READ_MODE();

        const IMAGE_Menu = await this.#IMAGE_MENU();
        let PRESSED = this.PATH_PRESSED;
        let UNPRESSED = this.PATH_UNPRESSED;

        console.log(PRESSED)
        IMAGE_Menu.addEventListener('click', (event) => {this.MENU().then((RESULT) => {return RESULT})});
        IMAGE_Menu.onmouseenter = function() {IMAGE_Menu.src = PRESSED.MENU;};
        IMAGE_Menu.onmouseleave = function() {IMAGE_Menu.src = UNPRESSED.MENU;};

        this.WRAPPER_ELEMENT.append(IMAGE_Menu);
        return this.WRAPPER_ELEMENT;
    };

    // ================ //
    // ## OPERATIONS ## //
    // ================ //

    /**
     * ## CREATE LOAD BUTTON
     * 
     * -------------------------------
     * 
     * Run load button functionality
     * 
     */
    async #LOAD() {

        this.INSTANCE_BEETLE.DAISY_TEXT = 'ADDING LOAD BUTTON FUNCTIONALITY';
        await this.INSTANCE_BEETLE.READ_MODE();

        return await this.INSTANCE_BRANCH.READ_MODE({
            PARAMETER_TAG_POCKET: 'WELCOME',
            PARAMTER_BRANCH_MODE: 'WINDOW',
            PARAMETER_SUB_MODE: 'LOAD'
        });
    };
    /**
     * ## CREATE MINIMISE BUTTON
     * 
     * -------------------------------
     * 
     * Run minimise button functionality
     * 
     */
    async #SMALL() {
        this.INSTANCE_BEETLE.DAISY_TEXT = 'ADDING MINIMISE BUTTON FUNCTIONALITY';
        await this.INSTANCE_BEETLE.READ_MODE();

        return await this.INSTANCE_BRANCH.SMALL();
    };
    /**
     * ## CREATE QUIT BUTTON
     * 
     * -------------------------------
     * 
     * Run quit button functionality
     * 
     */
    async #CLOSING() {
        this.INSTANCE_BEETLE.DAISY_TEXT = 'ADDING CLOSE BUTTON FUNCTIONALITY';
        await this.INSTANCE_BEETLE.READ_MODE();

        setTimeout(() => {
            this.INSTANCE_BRANCH.RENDERER_PATH = this.INSTANCE_BRANCH.SESSION.PATHS.CUPBOARD.FILES.SESSIONMEMORY;
            this.INSTANCE_BRANCH.RENDERER_DATA = {};
            this.INSTANCE_BRANCH.SAVE().then((RESULT) => {return RESULT});
        }, 1000);
        setTimeout(() => {
            this.INSTANCE_BRANCH.CLOSE(); 
        }, 2000)                        
    };
    /**
     * 
     * -----------------------
     * ## -->> {STYLE TEMPLATE}
     */
    #FETCH_STYLE() {
        return `

        <style>

        .Frame {
            padding: 0%;
            margin: 0%;
        }
        .mainBox {
            -webkit-app-region: drag;
            position: relative;
            top: 0%;
            height: 50px;
            width: 100%;
            background: rgb(46,196,182);
            background: radial-gradient(circle, rgba(46,196,182,1) 12%,
                        rgba(155,93,237,1) 27%, rgba(254,228,64,1) 47%, 
                        rgba(204,0,153,1) 57%, rgba(0,245,212,1) 66%, 
                        rgba(204,0,255,1) 75%, rgba(255,192,0,1) 84%, 
                        rgba(241,91,181,1) 91%); 
            border-color: rgb(148, 204, 214);
            border-style: outset;
            padding: 0%;
            margin: 0%;
        } 
        .frameButton {
            -webkit-app-region: no-drag;
            position: absolute;
            transform: translate(5px, -12px)
        }
        .pixMenu {
            top: 0%;
            left: 0%;
            height: 70px;
            margin: 0%;
        }
        img: {
            margin: 0%;
            padding: 0%;
        }
        .pixQuit {
            top: 0%;
            right: 0%;
            height: 70px;
            margin: 0%;
            padding: 0%;
        }
        .pixFeet {
            top: 0%;
            right: 100px;
            height: 70px;

        }
        .pixMin {
            top: 0%;
            right: 50px;
            height: 70px;
            margin: 0%;
            padding: 0%;
        }
        </style>

        <div id = "WRAPPER_Frame-Box" class = "mainBox">
        </div>
        `
    };
};

window.customElements.define('jellyfish-frame', JELLYFISH_Frame);
export {JELLYFISH_Frame};