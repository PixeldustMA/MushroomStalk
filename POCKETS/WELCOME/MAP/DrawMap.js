import Create from "../../../APPS/APP - JELLYFISH/CREATE/Create.js";
import Connector_Jellyfish from "../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

export default class DRAW_Map extends Stalk{

    constructor(){

        super();

        // ============== //
        // << SECTIONS >> //
        // ============== //

        this.SECTION_BUTTON = document.getElementById('SECTION_Map-Button');

        // ============== //
        // << ELEMENTS >> //
        // ============== //

        this.BUTTON_ELEMENTS = 'UNSET';
        this.BUTTON_EXPLORER = 'UNSET';
        this.BUTTON_CHANGELOG = 'UNSET';
    };

    // ========= //
    // ## RUN ## //
    // ========= //

    DRAW() {

        this.SECTION_BUTTON.append(this.PANEL_BUTTONS());

    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    PANEL_BUTTONS() {

        // ============= //
        // ## WRAPPER ## //
        // ============= //

        this.WRAPPER_BUTTONS = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // ============== //
        // ## LISTENER ## //
        // ============== //

        this.ACTIVATE_PAGE_CRYSTALLARIUM();
        this.ACTIVATE_PAGE_SHOPPING();
        this.ACTIVATE_PAGE_LAVA_LAMPS();
        this.ACTIVATE_PAGE_NOVA();
        this.ACTIVATE_PAGE_TANGIBLES();
        this.ACTIVATE_PAGE_WAR();
        this.ACTIVATE_PAGE_SUNFLOWER();

        // ================= //
        // ## ATTACHMENTS ## //
        // ================= //

        this.WRAPPER_BUTTONS.append(...[
            this.BUTTON_CRYSTALLARIUM,
            this.BUTTON_SHOPPING,
            this.BUTTON_LAVA_LAMPS,
            this.BUTTON_NOVA,
            this.BUTTON_TANGIBLES,
            this.BUTTON_WAR,
            this.BUTTON_SUNFLOWER
        ]);
        return this.WRAPPER_BUTTONS;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_PAGE_SHOPPING() {
        this.BUTTON_SHOPPING.addEventListener('click', (event) => {
            this.LOAD('SHOPPING', 'MENU');
        }); 
    };
    ACTIVATE_PAGE_LAVA_LAMPS() {
        this.BUTTON_LAVA_LAMPS.addEventListener('click', (event) => {
            this.LOAD('LAVA_LAMPS', 'MENU');
        }); 
    };
    ACTIVATE_PAGE_NOVA() {
        this.BUTTON_NOVA.addEventListener('click', (event) => {
            this.LOAD('NOVA', 'MENU');
        }); 
    };
    ACTIVATE_PAGE_CRYSTALLARIUM() {
        this.BUTTON_CRYSTALLARIUM.addEventListener('click', (event) => {
            this.LOAD('CRYSTALLARIUM', 'MENU');
        }); 
    };
    ACTIVATE_PAGE_TANGIBLES() {
        this.BUTTON_TANGIBLES.addEventListener('click', (event) => {
            this.LOAD('TANGIBLES', 'MENU');
        }); 
    };
    ACTIVATE_PAGE_WAR() {
        this.BUTTON_WAR.addEventListener('click', (event) => {
            this.LOAD('WAR', 'MENU');
        }); 
    };
    ACTIVATE_PAGE_SUNFLOWER() {
        this.BUTTON_SUNFLOWER.addEventListener('click', (event) => {
            this.LOAD('SUNFLOWER', 'WAR');
        }); 
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {

        await this.#BUTTON();

    };
    async #BUTTON() {

        this.BUTTON_CRYSTALLARIUM = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Map-Crystallarium',
        }).INIT();
        this.BUTTON_SHOPPING = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Map-Shopping',
        }).INIT();
        this.BUTTON_LAVA_LAMPS = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Map-Lava-Lamps',
        }).INIT();
        this.BUTTON_NOVA = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Map-Nova',
        }).INIT();
        this.BUTTON_TANGIBLES = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Map-Tangibles',
        }).INIT();
        this.BUTTON_WAR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Map-War',
        }).INIT();
        this.BUTTON_SUNFLOWER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Map-Sunflower',
        }).INIT();

        this.BUTTON_CRYSTALLARIUM.innerHTML = 'CRYSTALLARIUM';
        this.BUTTON_LAVA_LAMPS.innerHTML = 'LAVA_LAMPS';
        this.BUTTON_NOVA.innerHTML = 'NOVA';
        this.BUTTON_SHOPPING.innerHTML = 'SHOPPING';

        this.BUTTON_TANGIBLES.innerHTML = 'TANGIBLES';
        this.BUTTON_WAR.innerHTML = 'WAR';
        this.BUTTON_SUNFLOWER.innerHTML = 'SUNFLOWER';
    };
};

const PAGE_Map = new DRAW_Map();
await PAGE_Map.INITIALISE();
PAGE_Map.DRAW();
