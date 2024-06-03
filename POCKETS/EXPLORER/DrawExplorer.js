import { Panels_Kessikaya } from "../../APPS/EXPLORE/PANELS/Panels_Kessikaya.js";
import { Panel_Colours } from "../../APPS/EXPLORE/SECTIONS/CULTURE/COLOUR/PANELS/Panels_Colours.js";
import { Panel_Food } from "../../APPS/EXPLORE/SECTIONS/FOOD/PANELS/Panels_Food.js";
import { Panel_Elements } from "../../APPS/EXPLORE/SECTIONS/HALEX/ELEMENTS/PANELS/Panels_Elements.js";
import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../CONSOLE/PLATYPUS/Create.js";

class Page_Explorer extends Stalk{

    constructor() {
        super();

        this.titleSection = document.getElementById('SECTION_Explorer-Title');
        this.tabSection = document.getElementById('SECTION_Explorer-Tabs');
        this.contentSection = document.getElementById('SECTION_Explorer-Content');
        
        this.panels = new Panels_Kessikaya();
        this.foodPanelInstance = new Panel_Food();
        this.elementPanelInstance = new Panel_Elements();
        this.colourPanelInstance = new Panel_Colours();

        this.viewPlanet = "";
    };

    // == MAIN == //
    DRAW_PAGE(){
        this.titleSection.append(this.SECTION_TITLE());
        this.tabSection.append(this.SECTION_TABS());
        this.contentSection.append(this.SECTION_CONTENT());
    };

    // == STRUCTURE == //
    SECTION_TITLE() {

        // == WRAPPERS == //
        const wrapperTitle = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const headerPage = new create({
            tag: 'h1',
            id: 'HEADER_Explorer-Page',
            elementText: ['EXPLORER', 'HEADERS', 'EXPLORE']
        }).init();
        const headerPlanet = new create({
            tag: 'h2',
            id: 'HEADER_Explorer-Planet',
            elementText: ['EXPLORER', 'HEADERS', 'PLANET']
        }).init();

        wrapperTitle.append(...[
            headerPage,
            headerPlanet
        ]);
        return wrapperTitle;
    };
    SECTION_TABS() {

        // == WRAPPERS == //
        const wrapperSearch = new create ({
            tag: 'div',
            id: "WRAPPER_Explorer-Search",
            classes: ["TAB"]
        }).init();
        const wrapperView = new create ({
            tag: 'div',
            id: "WRAPPER_Explorer-Info",
            classes: ["TAB"]
        }).init();
        const wrapperNew = new create ({
            tag: 'div',
            id: "WRAPPER_Explorer-Add-New",
            classes: ["TAB"]
        }).init();
        const wrapperType = new create ({
            tag: 'div',
            id: "WRAPPER_Explorer-Edit-Type",
            classes: ["TAB"]
        }).init();
        const wrapperNewButtons = new create({
            tag: 'div'
        }).init();
        const wrapperSectionTabs = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const headerSearch = new create({
            tag: 'h4',
            id: 'HEADER_Tab-Search',
            elementText: ['USEFUL', 'GENERAL', 'SEARCH']
        }).init();
        const headerView = new create({
            tag: 'h4',
            id: 'HEADER_Tab-View',
            elementText: ['USEFUL', 'GENERAL', 'VIEW']
        }).init();
        const headerNew = new create({
            tag: 'h4',
            id: 'HEADER_Tab-New',
            elementText: ['USEFUL', 'GENERAL', 'NEW']
        }).init();
        const headerType = new create({
            tag: 'h4',
            id: 'HEADER_Tab-Type',
            elementText: ['USEFUL', 'GENERAL', 'TYPE']
        }).init();

        // == BUTTONS == //
        const buttonSpace = new create({
            tag: 'button',
            elementText: ['EXPLORER', 'BUTTONS', 'KESSIKAYA']
        }).init();
        const buttonFood = new create({
            tag: 'button',
            elementText: ['EXPLORER', 'BUTTONS', 'FOOD']
        }).init();
        const buttonElements = new create({
            tag: 'button',
            elementText: ['EXPLORER', 'BUTTONS', 'ELEMENTS']
        }).init();
        const buttonColours = new create({
            tag: 'button',
            elementText: ['EXPLORER', 'BUTTONS', 'COLOURS']
        }).init();

        // == PANELS == //
        let spacePanel = this.panels.PANEL_INPUT_ORB();
        let foodPanel = this.foodPanelInstance.PANEL_INPUT_ITEM();
        let elementPanel = this.elementPanelInstance.PANEL_INPUT_ELEMENT();
        let colourPanel = this.colourPanelInstance.PANEL_INPUT_COLOURS();

        // == LISTENERS == //
        buttonSpace.addEventListener('click', (event) => {
            this.contentSection.replaceChildren();
            this.contentSection.append(spacePanel);
        });
        buttonFood.addEventListener('click', (event) => {
            this.contentSection.replaceChildren();
            this.contentSection.append(foodPanel);
        });
        buttonElements.addEventListener('click', (event) => {
            this.contentSection.replaceChildren();
            this.contentSection.append(elementPanel);
        });
        buttonColours.addEventListener('click', (event) => {
            this.contentSection.replaceChildren();
            this.contentSection.append(colourPanel);
        });
        wrapperNew.addEventListener('click', (event) => {
            this.contentSection.replaceChildren();
            this.contentSection.append(wrapperNewButtons);
        });
        wrapperType.addEventListener('click', (event)=> {
            this.contentSection.replaceChildren();
            this.contentSection.append(this.TYPES_PANEL());
        });

        // == ATTACHMENTS == //
        wrapperSearch.append(headerSearch);
        wrapperView.append(headerView);
        wrapperNew.append(headerNew);
        wrapperType.append(headerType);
        wrapperNewButtons.append(...[
            buttonSpace,
            buttonFood,
            buttonElements,
            buttonColours
        ]);
        wrapperSectionTabs.append(...[
            wrapperSearch,
            wrapperView,
            wrapperNew,
            wrapperType
        ]);
        return wrapperSectionTabs;
    };
    SECTION_CONTENT() {

        // == WRAPPERS == //
        const wrapperContent = new create({
            tag: 'div'
        }).init();

        const wrapperLeft = new create ({
            tag: 'div',
            id: "WRAPPER_Explorer-Left",
            classes: ["LEFT"]
        }).init();
        const wrapperRight = new create ({
            tag: 'div',
            id: "WRAPPER_Explorer-Right",
            classes: ["RIGHT"]
        }).init();

        wrapperContent.append(...[
            wrapperLeft,
            wrapperRight
        ]);
        return wrapperContent;
    };
    PLANET_DISPLAY() {

        // == WRAPPERS == //
        // == TOP LEVEL == //
        const wrapperDisplay = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Display'
        }).init();

        const wrapperBackground = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Background',
            classes: ['BACKGROUND']
        }).init();
        const wrapperTop = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Display-Top',
            classes: ['DISPLAY_BOX']
        }).init();
        const wrapperBelt = new create({
            tag: 'section',
            id: 'SECTION_Planets-Page-Belt',
            classes: ['BELT']
        }).init();
        const warpperBase = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Display-Base',
            classes: ['DISPLAY_BOX']
        }).init();

        // == SUB LEVEL -- //
        const wrapperTitle = new create({
            tag: 'section',
            id: 'SECTION_Planets-Title',
            classes: ['HEADER_BOX']
        }).init();
        const wrapperTitleText = new create({
            tag: 'div',
            id: 'WRAPPER_Planet-Title',
            classes: ['TITLE_PLANET']
        }).init();
        const wrapperPlanetImage = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Planet-Image',
            classes: ['IMAGE']
        }).init();
        const wrapperElementImage = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Element-Image',
            classes: ['IMAGE']
        }).init();

        // == ROWS == //
        const wrapperRowOne = new create({
            tag: 'section',
            id: 'SECTION_Planets-Row-One',
            classes: ['TILE_WRAPPER', 'ROW_ONE']
        }).init();
        const wrapperRowTwo = new create({
            tag: 'section',
            id: 'SECTION_Planets-Row-Two',
            classes: ['TILE_WRAPPER', 'ROW_TWO']
        }).init();
        const wrapperRowThree = new create({
            tag: 'section',
            id: 'SECTION_Planets-Row-Three',
            classes: ['TILE_WRAPPER', 'ROW_THREE']
        }).init();

        // == CUBES == //
        const wrapperCubeOneLeft = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-One-Cube-Left',
            classes: ['LEFT_CUBE', 'TILE']
        }).init();
        const wrapperCubeOneCentre = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-One-Cube-Centre',
            classes: ['CENTRE_CUBE', 'LOCATION', 'TILE']
        }).init();
        const wrapperCubeOneRight = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-One-Cube-Right',
            classes: ['RIGHT_CUBE', 'TILE']
        }).init();
        const wrapperCubeTwoLeft = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Two-Cube-Left',
            classes: ['LEFT_CUBE', 'TILE']
        }).init();
        const wrapperCubeTwoCentre = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Two-Cube-Centre',
            classes: ['CENTRE_CUBE', 'TILE']
        }).init();
        const wrapperCubeTwoRight = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Two-Cube-Right',
            classes: ['RIGHT_CUBE', 'TILE']
        }).init();
        const wrapperCubeThreeLeft = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Three-Cube-Left',
            classes: ['LEFT_CUBE', 'TILE']
        }).init();
        const wrapperCubeThreeCentre = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Three-Cube-Centre',
            classes: ['CENTRE_CUBE', 'TILE']
        }).init();
        const wrapperCubeThreeRight = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Three-Cube-Right',
            classes: ['RIGHT_CUBE', 'TILE']
        }).init();
        
        // == TEXT == //
        const headerPage = new create({
            tag: 'h1',
            id: 'HEADER_Plane-Title',
            elementText: ['USEFUL', 'GENERAL', 'NAME'],
            classes: ['FIXED', 'PLANET_NAME']
        }).init();

        // == IMAGES == //
        const iamgePlanet = new create({
            tag: 'img',
            id: 'IMAGE_Planets-Image-Planet',
            source: "../../ASSETS/IMAGES/PLANETS/Planet - Light.png"
        }).init();
        const iamgeElement = new create({
            tag: 'img',
            id: 'IMAGE_Planets-Image-Element',
            source: "../../ASSETS/IMAGES/ELEMENTS/Light.jpg"
        }).init();

        iamgePlanet.alt = "Image of Planet";
        iamgeElement.alt = "Image of ELement";

        // == ATTACHMENTS == //
        // == SUB LEVEL -- //
        wrapperPlanetImage.append(...[iamgePlanet]);
        wrapperTitleText.append(...[headerPage]);
        wrapperTitle.append(...[wrapperTitleText]);
        wrapperElementImage.append(...[iamgeElement]);

        // == CUBES == //
        wrapperCubeOneLeft.append(...[wrapperPlanetImage])
        wrapperCubeOneCentre.append(...[locationPanel]);
        wrapperCubeOneRight.append(...[wrapperElementImage]);

        wrapperCubeTwoLeft.append(...[]);
        wrapperCubeTwoCentre.append(...[]);
        wrapperCubeTwoRight.append(...[]);

        wrapperCubeThreeLeft.append(...[]);
        wrapperCubeThreeCentre.append(...[]);
        wrapperCubeThreeRight.append(...[]);

        // == ROWS == //
        wrapperRowOne.append(...[wrapperCubeOneLeft, wrapperCubeOneCentre, wrapperCubeOneRight]);
        wrapperRowTwo.append(...[wrapperCubeTwoLeft, wrapperCubeTwoCentre, wrapperCubeTwoRight]);
        wrapperRowThree.append(...[wrapperCubeThreeLeft, wrapperCubeThreeCentre, wrapperCubeThreeRight]);

        // == LARGE SECTIONS == //
        wrapperTop.append(...[wrapperTitle, wrapperRowOne]);
        warpperBase.append(...[wrapperRowTwo, wrapperRowThree]);
        wrapperDisplay.append(...[
            wrapperBackground,
            wrapperTop,
            wrapperBelt,
            warpperBase
        ]);
        return wrapperDisplay;
    };
    DISPLAY_SPACE_LOCATION() {

        // == WRAPPER == //
        const wrapperLocation = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Location'
        }).init();
        const wrapperTextSpace = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Text-Space',
            classes: ['GAP']
        }).init();
        const wrapperTextSector = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Text-Sector',
            classes: ['GAP']
        }).init();
        const wrapperTextSystem = new create({
            tag: 'div',
            id: 'WRAPPER_Planets-Text-System',
            classes: ['GAP']
        }).init();
        const wrapperButtonImage = new create({
            tag: 'div',
            classes: ["BUTTON"]
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'span',
            id: 'TEXT_Planets-Space',
            elementText: ["EXPLORER", "TERMS", "SPACE"]
        }).init();
        const labelSector = new create({
            tag: 'span',
            id: 'TEXT_Planets-Sector',
            elementText: ["EXPLORER", "TERMS", "SECTOR"]
        }).init();
        const labelSystem = new create({
            tag: 'span',
            id: 'TEXT_Planets-System',
            elementText: ["EXPLORER", "TERMS", "SYSTEM"]
        }).init();

        const imageEdit = new create({
            tag: 'img',
            classes: ['EDIT'],
            source: "../../ASSETS/IMAGES/BUTTONS/Button - Edit Button.png"
        }).init();

        // == ACTIONS == //
        if (this.viewPlanet === "") {
            labelSpace.innerHTML = "NO PLANET SET";
            labelSector.innerHTML = "",
            labelSystem.innerHTML = ""
        }

        // == LISTENERS == //
        imageEdit.addEventListener('click', (event) => { 
            if (!this.toggleLocationEdit) {
                this.EDIT_MODE(wrapperLocation, [labelSector, labelSpace, labelSystem]);
            }
            else {
                this.RESET_EDIT_MODE(wrapperLocation, [labelSector, labelSpace, labelSystem]);
            };
        });

        // == ATTACHMENTS == //
        wrapperButtonImage.append(...[imageEdit]);
        wrapperTextSpace.append(...[labelSpace]);
        wrapperTextSector.append(...[labelSector]);
        wrapperTextSystem.append(...[labelSystem]);
        wrapperLocation.append(...[
            wrapperTextSpace,
            wrapperTextSector,
            wrapperTextSystem,
            wrapperButtonImage
        ]);
        return wrapperLocation;
    };
    TYPES_PANEL() {

        // == WRAPPERS == //
        const wrapperButton = new create({
            tag: 'div'
        }).init();
        const wrapperPanel = new create({
            tag: 'div'
        }).init();

        // == BUTTONS == //
        const buttonFood = new create({
            tag: 'button',
            elementText: ['EXPLORER', 'SECTIONS', 'FOOD']
        }).init();
        const buttonFlavour = new create({
            tag: 'button',
            elementText: ['EXPLORER', 'SECTIONS', 'FLAVOUR']
        }).init();
        const buttonElements = new create({
            tag: 'button',
            elementText: ['EXPLORER', 'SECTIONS', 'ELEMENTS']
        }).init();
        const buttonColours = new create({
            tag: 'button',
            elementText: ['EXPLORER', 'SECTIONS', 'COLOURS']
        }).init();

        // == LISTENERS == //
        buttonFood.addEventListener('click', (event) => {
            wrapperPanel.replaceChildren();
            const food = new Panel_Food();
            food.INITIALISE().then((RESULT) => {
                wrapperPanel.append(food.PANEL_INPUT_TYPE());
            });
        });
        buttonFlavour.addEventListener('click', (event) => {
            wrapperPanel.replaceChildren();
            wrapperPanel.append(this.foodPanelInstance.PANEL_INPUT_FLAVOUR());
        });
        buttonElements.addEventListener('click', (event) => {
            wrapperPanel.replaceChildren();
            this.elementPanelInstance.INITIALISE().then((RESULT) => {
                wrapperPanel.append(this.elementPanelInstance.PANEL_INPUT_ELEMENT_TYPE());
            });
        });
        buttonColours.addEventListener('click', (event) => {
            wrapperPanel.replaceChildren();
            this.colourPanelInstance.INITIALISE().then((RESULT) => {
                wrapperPanel.append(this.colourPanelInstance.PANEL_INPUT_COLOUR_TYPE());
            });
        });

        // == ATTACHMENTS == //
        wrapperButton.append(...[
            buttonFood,
            buttonFlavour,
            buttonElements,
            buttonColours,
            wrapperPanel
        ]);
        return wrapperButton;
    };
    EDIT_MODE(element, textElements) {
        element.style.backgroundColor = "blue";
        textElements.forEach(words => {
            words.setAttribute('contenteditable', true);
        });
        this.toggleLocationEdit = true;
    };
    RESET_EDIT_MODE(element, textElements) {
        element.style.backgroundColor = 'purple';
        textElements.forEach(words => {
            words.setAttribute('contenteditable', false);
        });
        this.toggleLocationEdit = false;
    };
    async INITIALITSE() {
        await this.panels.INITIALISE();
        await this.foodPanelInstance.INITIALISE();
        await this.elementPanelInstance.INITIALISE();
        await this.colourPanelInstance.INITIALISE();
    };
}

// RUN THE PAGE
const page = new Page_Explorer();
await page.INITIALITSE();
page.DRAW_PAGE();