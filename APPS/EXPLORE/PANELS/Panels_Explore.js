import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";
import { Explorer } from "../CONSOLE/Explorer.js";

class Panels_Explore extends Stalk {

    constructor(selectSections) {
        super();
        this.selectSections = selectSections;
        this.planetBox = "";
        this.memory = {};

        this.Kessikaya = new Explorer();
        this.Keys = "";
    };
    async CHOOSE_PLANET() {

        await this.Kessikaya.INIT();

        // == WRAPPERS == //
        const wrapperChoice = new create({
            tag: 'wrapper'
        }).init();
        const wrapper = new create({
            tag: 'wrapper',
            id: 'WRAPPER_Circles'
        }).init();

        // == RADIO == //
        const radioSpace = new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_Space',
            boxName: 'PLANET_STYLE',
            classes: ["circles"]
        }).init();
        const radioSector = new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_Sector',
            boxName: 'PLANET_STYLE',
            classes: ["circles"]
        }).init();
        const radioSystem = new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_System',
            boxName: 'PLANET_STYLE',
            classes: ["circles"]
        }).init();
        const radioPlanetMultiple = new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_Planet-Multiple',
            boxName: 'PLANET_STYLE',
            classes: ["circles"]
        }).init();
        const radioPlanetSingle = new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_Planet-Single',
            boxName: 'PLANET_STYLE',
            classes: ["circles"]
        }).init();
        const radioPlanetMultipleRegionLocked= new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_Planet-Multiple-Locked-Region',
            boxName: 'PLANET_STYLE',
            classes: ["circles"]
        }).init();
        const radioGeological = new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_Geological',
            boxName: 'PLANET_STYLE',
            classes: ["circles"]
        }).init();

        // == LABELS == //
        const labelSpace = new create({
            tag: 'label',
            labelFor: 'PLANET_STYLE',
            classes: ['CIRCLES-Label']
        }).init();
        const labelSector = new create({
            tag: 'label',
            classes: ['CIRCLES-Label'],
            labelFor: 'PLANET_STYLE'
        }).init();
        const labelSystem = new create({
            tag: 'label',
            classes: ['CIRCLES-Label'],
            labelFor: 'PLANET_STYLE'
        }).init();
        const labelPlanet = new create({
            tag: 'label',
            classes: ['CIRCLES-Label'],
            labelFor: 'PLANET_STYLE'
        }).init();
        const labelMultiPlanet = new create({
            tag: 'label',
            classes: ['CIRCLES-Label'],
            labelFor: 'PLANET_STYLE'
        }).init();
        const labelMultiPlanetOneRegion = new create({
            tag: 'label',
            classes: ['CIRCLES-Label'],
            labelFor: 'PLANET_STYLE'
        }).init(); 
        const labelGeological = new create({
            tag: 'label',
            classes: ['CIRCLES-Label'],
            labelFor: 'PLANET_STYLE'
        }).init();

        // == TEXT == //
        const labelSpaceText = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'SPACE']
        }).init();
        const labelSectorText = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'SECTOR']
        }).init();
        const labelSystemText = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'SYSTEM']
        }).init();
        const labelPlanetText = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'PLANET']
        }).init();
        const labelMultiPlanetText = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'MULTI_PLANET']
        }).init();
        const labelMultiPlanetSameRegionText = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'MULTI_PLANET_REGION']
        }).init();
        const labelGeologicalText = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'GEOLOGICAL']
        }).init();

        // == ATTACHMENTS == //
        labelSpace.append(...[radioSpace, labelSpaceText]);
        labelSector.append(...[radioSector, labelSectorText]);
        labelSystem.append(...[radioSystem, labelSystemText]);
        labelPlanet.append(...[radioPlanetSingle, labelPlanetText]);
        labelMultiPlanet.append(...[radioPlanetMultiple, labelMultiPlanetText]);
        labelMultiPlanetOneRegion.append(...[radioPlanetMultipleRegionLocked, labelMultiPlanetSameRegionText]);
        labelGeological.append(...[radioGeological, labelGeologicalText]);

        // == LISTENERS == //
        radioSpace.addEventListener('click', (event) => {
            wrapperChoice.replaceChildren();
            this.memory = {
                SPACE: {},
                SECTOR: {},
                SYSTEM: {},
                PLANET: {
                    MULTI: []
                },
                GEOLOGICAL: {}
            };
            this.MODE = "SPACE";
            this.SELECT_SEARCH("SPACE").then((result) => {wrapperChoice.append(result);});
        });
        radioSector.addEventListener('click', (event) => {
            wrapperChoice.replaceChildren();
            this.memory = {
                SPACE: {},
                SECTOR: {},
                SYSTEM: {},
                PLANET: {
                    MULTI: []
                },
                GEOLOGICAL: {}
            };
            this.MODE = "SECTOR";
            this.SELECT_SEARCH("SECTOR").then((SPACE) => {wrapperChoice.append(SPACE)});
        });
        radioSystem.addEventListener('click', (event) => {
            wrapperChoice.replaceChildren();
            this.memory = {
                SPACE: {},
                SECTOR: {},
                SYSTEM: {},
                PLANET: {
                    MULTI: []
                    },
                GEOLOGICAL: {}
            };
            this.MODE = "SYSTEM";
            this.SELECT_SEARCH("SYSTEM").then((SPACE) => {wrapperChoice.append(SPACE);});
        });
        radioPlanetMultiple.addEventListener('click', (event) => {
            wrapperChoice.replaceChildren();
            this.memory = {
                SPACE: {},
                SECTOR: {},
                SYSTEM: {},
                PLANET: {
                    MULTI: []
                },
                GEOLOGICAL: {}
            };
            this.MODE = "PLANET_MULTIPLE";
            this.SELECT_SEARCH("MULTI-PLANET").then((MULTIPLE) => {wrapperChoice.append(MULTIPLE);});
        });
        radioPlanetMultipleRegionLocked.addEventListener('click', (event) => {
            wrapperChoice.replaceChildren();
            this.memory = {
                SPACE: {},
                SECTOR: {},
                SYSTEM: {},
                PLANET: {
                    MULTI: []
                },
                GEOLOGICAL: {}
            };
            this.MODE = "PLANET_MULTIPLE";
            this.SELECT_SEARCH("MULTI-PLANET-REGION-LOCKED").then((MULTIPLE) => {wrapperChoice.append(MULTIPLE);});
        });
        radioPlanetSingle.addEventListener('click', (event) => {
            wrapperChoice.replaceChildren();
            this.memory = {
                SPACE: {},
                SECTOR: {},
                SYSTEM: {},
                PLANET: {
                    MULTI: []
                },
                GEOLOGICAL: {}
            };
            this.MODE = "PLANET_SINGLE";
            this.SELECT_SEARCH("PLANET").then((SPACE) => {wrapperChoice.append(SPACE);});
        });
        radioGeological.addEventListener('click', (event) => {
            wrapperChoice.replaceChildren();
            this.memory = {
                SPACE: {},
                SECTOR: {},
                SYSTEM: {},
                PLANET: {
                    MULTI: []
                },
                GEOLOGICAL: {}
            };
            this.MODE = "GEOLOGICAL";
            this.SELECT_SEARCH('GEOGRAPHICAL').then((GEOLOGICAL) => {wrapperChoice.append(GEOLOGICAL);});
        });

        // == ATTACHMENTS == //
        if (this.selectSections.includes("SPACE")) {
            wrapper.append(...[labelSpace, wrapperChoice]);
        };
        if(this.selectSections.includes("SECTOR")) {
            wrapper.append(...[labelSector, wrapperChoice]);
        };
        if(this.selectSections.includes("SYSTEM")) {
            wrapper.append(...[labelSystem, wrapperChoice]);
        };
        if(this.selectSections.includes("PLANET_SINGLE")) {
            wrapper.append(...[ wrapperChoice]);
            wrapperChoice.replaceChildren();
            this.memory = {
                SPACE: {},
                SECTOR: {},
                SYSTEM: {},
                PLANET: {
                    MULTI: []
                },
                GEOLOGICAL: {}
            };
            this.MODE = "PLANET_SINGLE";
            this.SELECT_SEARCH("PLANET").then((SPACE) => {wrapperChoice.append(SPACE);});
        };
        if(this.selectSections.includes("PLANET_MULTI")) {
            wrapper.append(...[labelMultiPlanet, wrapperChoice]);
        };
        if(this.selectSections.includes("PLANET_MULTI_REGION_SAME")) {
            wrapper.append(...[labelMultiPlanetOneRegion, wrapperChoice]);
        };
        if(this.selectSections.includes("GEOLOGICAL")) {
            wrapper.append(...[labelGeological, wrapperChoice]);
        };
        return wrapper;
    };
    async SELECT_SEARCH(tag) {
        switch (tag) {
            case "SPACE":
                return await this.#SPACE_PANEL();
            case "SECTOR":
                return await this.#SECTOR_PANEL();
            case "SYSTEM":
                return await this.#SYSTEM_PANEL();
            case "MULTI-PLANET":
                return await this.#MULTI_PANEL();
            case "MULTI-PLANET-REGION-LOCKED":
                return await this.#MULTI_PLANET_SAME_SYSTEM_PANEL();
            case "PLANET":
                return await this.#PLANET_PANEL();
            case "GEOGRAPHICAL":
                return await this.#GEOGRAPHICAL_PANEL();
            default:
                break;
        }
    };
    async #SPACE_PANEL() {

        // == OPTIONS == //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Space-Choice'
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            id: 'SELECT_Space-Choice',
            options: space,
            boxName: 'SPACE-SELECT',
            classes: ['FORM_SELECT']
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'label',
            id: 'LABEL_Choose-Space',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SPACE']
        }).init();

        selectSpace.addEventListener('change', (event) => {
            this.memory.SPACE.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
        });

        // == ATTACHMENNTS == //
        wrapper.append(...[
            labelSpace,
            selectSpace
        ]);
        return wrapper;
    };
    async #SECTOR_PANEL() {

        // == OPTIONS == //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Sector-Choice'
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            id: 'SELECT_Space-Choice',
            options: space,
            boxName: 'SPACE-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSector = new create({
            tag: 'select',
            id: 'SELECT_Sector-Choice',
            boxName: 'SECTOR-SELECT',
            classes: ['FORM_SELECT']
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'label',
            id: 'LABEL_Choose-Space',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SPACE']
        }).init();
        const labelSector = new create({
            tag: 'label',
            id: 'LABEL_Choose-Sector',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SECTOR']
        }).init();

        // == LISTENERS == //
        selectSpace.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            const holdDiv = new create({
                tag: 'select'
            });
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector', spaceChoice);
            availableOptions.unshift("SECTOR OPTIONS");
            holdDiv.changeOptions(selectSector, availableOptions);
        });
        selectSector.addEventListener('change', (event) => {
            this.memory.SECTOR.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.SECTOR.SECTOR = selectSector.options[selectSector.selectedIndex].text;
        });

        // == ATTACHMENNTS == //
        wrapper.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            selectSector
        ]);

        return wrapper;
    };
    async #SYSTEM_PANEL() {

        // == OPTIONS == //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Sector-Choice'
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            id: 'SELECT_Space-Choice',
            options: space,
            boxName: 'SPACE-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSector = new create({
            tag: 'select',
            id: 'SELECT_Sector-Choice',
            boxName: 'SECTOR-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSystem = new create({
            tag: 'select',
            id: 'SELECT_System-Choice',
            boxName: 'SYSTEM-SELECT',
            classes: ['FORM_SELECT']
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'label',
            id: 'LABEL_Choose-Space',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SPACE']
        }).init();
        const labelSector = new create({
            tag: 'label',
            id: 'LABEL_Choose-Sector',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SECTOR']
        }).init();
        const labelSystem = new create({
            tag: 'label',
            id: 'LABEL_Choose-System',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SYSTEM']
        }).init();

        // == INSTANCES == //
        const holdDiv = new create({
            tag: 'select'
        });

        // == LISTENERS == //
        selectSpace.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector', spaceChoice);
            availableOptions.unshift("SECTOR OPTIONS");
            holdDiv.changeOptions(selectSector, availableOptions);
        });
        selectSector.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('System', spaceChoice, sectorChoice);
            availableOptions.unshift("SYSTEM OPTIONS");
            holdDiv.changeOptions(selectSystem, availableOptions);
        });
        selectSystem.addEventListener('change', (event) => {
            this.memory.SYSTEM.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.SYSTEM.SECTOR = selectSector.options[selectSector.selectedIndex].text;
            this.memory.SYSTEM.SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
        });

        // == ATTACHMENNTS == //
        wrapper.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            selectSector,

            labelSystem,
            selectSystem
        ]);
        return wrapper;
    };
    async #PLANET_PANEL() {

        // == OPTIONS == //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Sector-Choice'
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            id: 'SELECT_Space-Choice',
            options: space,
            boxName: 'SPACE-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSector = new create({
            tag: 'select',
            id: 'SELECT_Sector-Choice',
            boxName: 'SECTOR-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSystem = new create({
            tag: 'select',
            id: 'SELECT_System-Choice',
            boxName: 'SYSTEM-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectPlanet = new create({
            tag: 'select',
            id: 'SELECT_Planet-Choice',
            boxName: 'PLANET-SELECT',
            classes: ['FORM_SELECT']
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'label',
            id: 'LABEL_Choose-Space',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SPACE']
        }).init();
        const labelSector = new create({
            tag: 'label',
            id: 'LABEL_Choose-Sector',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SECTOR']
        }).init();
        const labelSystem = new create({
            tag: 'label',
            id: 'LABEL_Choose-System',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SYSTEM']
        }).init();
        const labelPlanet = new create({
            tag: 'label',
            id: 'LABEL_Choose-Planet',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_PLANET']
        }).init();

        // == INSTANCES == //
        const holdDiv = new create({
            tag: 'select'
        });

        // == LISTENERS == //
        selectSpace.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH('Sector', spaceChoice)
                .then((SECTOR) => {
                    SECTOR.unshift("SECTOR OPTIONS");
                    holdDiv.changeOptions(selectSector, SECTOR);
                });
        });
        selectSector.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH('System', spaceChoice, sectorChoice)
                .then((SYSTEM) => {
                    SYSTEM.unshift("SYSTEM OPTIONS");
                    holdDiv.changeOptions(selectSystem, SYSTEM);
                });
        });
        selectSystem.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
            let systemChoice = selectSystem.options[selectSystem.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH('Planet', spaceChoice, sectorChoice, systemChoice)
                .then((PLANET) => {
                    PLANET.unshift("PLANET OPTIONS");
                    holdDiv.changeOptions(selectPlanet, PLANET);
                });
        });
        selectPlanet.addEventListener('change', (event) => {
            this.memory.PLANET[this.secondCounter] = {};
            this.memory.PLANET[this.secondCounter].SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.PLANET[this.secondCounter].SECTOR = selectSector.options[selectSector.selectedIndex].text;
            this.memory.PLANET[this.secondCounter].SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
            this.memory.PLANET[this.secondCounter].PLANET = selectPlanet.options[selectPlanet.selectedIndex].text;
        });
        this.planetBox = selectPlanet;

        // == ATTACHMENNTS == //
        wrapper.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            selectSector,

            labelSystem,
            selectSystem,

            labelPlanet,
            selectPlanet
        ]);
        return wrapper;
    };
    async #MULTI_PANEL() {
        
        // == CONTAINERS == //
        const wrapper = new create({
            tag: 'div'
        }).init();

        // == BUTTON == //
        const addAnotherButton = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'MORE']
        }).init();

        // == PANELS == //
        const panel = await this.#PLANET_PANEL();

        // == LISTENERS == //
        addAnotherButton.addEventListener('click', (event) => {
            this.#PLANET_PANEL().then((PLANET) => {wrapper.append(PLANET)});
            this.secondCounter += 1;
        });
        wrapper.append(...[panel, addAnotherButton])
        return wrapper;
    };
    async #MULTI_PLANET_SAME_SYSTEM_PANEL() {

        // == WRAPPERS // 
        const wrapper = new create({
            tag: 'div'
        }).init();

        // == BUTTONS == //
        const addAnotherButton = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'MORE']
        }).init();

        // == OPTIONS == //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            id: 'SELECT_Space-Choice',
            options: space,
            boxName: 'SPACE-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSector = new create({
            tag: 'select',
            id: 'SELECT_Sector-Choice',
            boxName: 'SECTOR-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSystem = new create({
            tag: 'select',
            id: 'SELECT_System-Choice',
            boxName: 'SYSTEM-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectPlanet = new create({
            tag: 'select',
            id: 'SELECT_Planet-Choice',
            boxName: 'PLANET-SELECT',
            classes: ['FORM_SELECT']
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'label',
            id: 'LABEL_Choose-Space',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SPACE'] 
        }).init();
        const labelSector = new create({
            tag: 'label',
            id: 'LABEL_Choose-Sector',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SECTOR'] 
        }).init();
        const labelSystem = new create({
            tag: 'label',
            id: 'LABEL_Choose-System',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SYSTEM'] 
        }).init();
        const labelPlanet = new create({
            tag: 'label',
            id: 'LABEL_Choose-Planet',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_PLANET'] 
        }).init();

        // == INSTANCES == //
        const holdDiv = new create({
            tag: 'select'
        });
        let regionOptions = [];

        // == LISTENERS == //
        selectSpace.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector', spaceChoice);
            availableOptions.unshift("SECTOR OPTIONS");
            holdDiv.changeOptions(selectSector, availableOptions);
        });
        selectSector.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('System', spaceChoice, sectorChoice);
            availableOptions.unshift("SYSTEM OPTIONS");
            holdDiv.changeOptions(selectSystem, availableOptions);
        });
        selectSystem.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
            let systemChoice = selectSystem.options[selectSystem.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Planet', spaceChoice, sectorChoice, systemChoice);
            availableOptions.unshift("PLANET OPTIONS");
            regionOptions = availableOptions;
            holdDiv.changeOptions(selectPlanet, availableOptions);
        });
        selectPlanet.addEventListener('change', (event) => {
            this.memory.PLANET.MULTI[this.counter] = {}
            this.memory.PLANET.MULTI[this.counter].SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.PLANET.MULTI[this.counter].SECTOR = selectSector.options[selectSector.selectedIndex].text;
            this.memory.PLANET.MULTI[this.counter].SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
            this.memory.PLANET.MULTI[this.counter].PLANET = selectPlanet.options[selectPlanet.selectedIndex].text;
        });
        addAnotherButton.addEventListener('click', (event) => {
            let planet = new create({
                tag: 'select',
                options: regionOptions,
                id: `PLANET${this.counter}`
            }).init();
            wrapper.append(planet);
            this.counter += 1;
            planet.addEventListener('change', (event) => {
                this.memory.PLANET.MULTI[this.counter] = {}
                this.memory.PLANET.MULTI[this.counter].SPACE = selectSpace.options[selectSpace.selectedIndex].text;
                this.memory.PLANET.MULTI[this.counter].SECTOR = selectSector.options[selectSector.selectedIndex].text;
                this.memory.PLANET.MULTI[this.counter].SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
                this.memory.PLANET.MULTI[this.counter].PLANET = planet.options[planet.selectedIndex].text;
            })
        });

        // == ATTACHMENNTS == //
        wrapper.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            selectSector,

            labelSystem,
            selectSystem,

            labelPlanet,
            selectPlanet,
            addAnotherButton
        ]);
        return wrapper;
    };
    async #GEOGRAPHICAL_PANEL() {

        // == WRAPPERS == //
        const wrapperChoice = new create({
            tag: 'div',
            id: 'WRAPPER_Geological-Choice'
        }).init();
        const wrapperGeological = new create({
            tag: 'div'
        }).init();

        // == RADIO == //
        const radioGeologicalSpace = new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_Geological-Space',
            boxName: 'GEOLOGICAL_STYLE',
            classes: ["circles"]
        }).init();
        const radioGeologicalSector = new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_Geological-Sector',
            boxName: 'GEOLOGICAL_STYLE',
            classes: ["circles"]
        }).init();
        const radioGeologicalSystem = new create({
            tag: 'input',
            type: 'radio',
            id: 'RADIO_Geological-System',
            boxName: 'GEOLOGICAL_STYLE',
            classes: ["circles"]
        }).init();

        // == TEXT == //
        const labelSpanSpace = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'SPACE'],
        }).init();
        const labelSpanSector = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'SECTOR'],
        }).init();
        const labelSpanSystem = new create({
            tag: 'span',
            elementText: ['EXPLORER', 'TERMS', 'SYSTEM'],
        }).init();
        const labelSpace = new create({
            tag: 'label',
            labelFor: 'PLANET_STYLE',
            classes: ['CIRCLES-Label']
        }).init();
        const labelSector = new create({
            tag: 'label',
            classes: ['CIRCLES-Label'],
            labelFor: 'PLANET_STYLE'
        }).init();
        const labelSystem = new create({
            tag: 'label',
            classes: ['CIRCLES-Label'],
            labelFor: 'PLANET_STYLE'
        }).init();

        labelSpace.append(...[radioGeologicalSpace, labelSpanSpace]);
        labelSector.append(...[radioGeologicalSector, labelSpanSector]);
        labelSystem.append(...[radioGeologicalSystem, labelSpanSystem]);

        // == ATTACHMENT == //
        wrapperChoice.append(...[
            labelSpace,
            labelSector,
            labelSystem,
            wrapperGeological
        ]);

        // == LISTENERS == //
        radioGeologicalSpace.addEventListener('click', (event) => {

            wrapperGeological.replaceChildren();
            this.#SPACE_GEOLOGICAL_PANEL().then((SPACE) => {
                wrapperGeological.append(SPACE);
                const selectSpace = document.getElementById('SELECT_Space-Choice');
                const selectGeological = document.getElementById('SELECT_Geological-Choice');
                selectGeological.addEventListener('change', (event) => {
                    this.memory.GEOLOGICAL.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
                    this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
                });
            });
        });
        radioGeologicalSector.addEventListener('click', (event) => {
            wrapperGeological.replaceChildren();
            this.#SECTOR_GEOLOGICAL_PANEL().then((SECTOR) => {
                wrapperGeological.append(SECTOR)
                const selectSpace = document.getElementById('SELECT_Space-Choice');
                const selectSector = document.getElementById('SELECT_Sector-Choice');
                const selectGeological = document.getElementById('SELECT_Geological-Choice');
                selectGeological.addEventListener('change', (event) => {
                    this.memory.GEOLOGICAL.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
                    this.memory.GEOLOGICAL.SECTOR = selectSector.options[selectSector.selectedIndex].text;
                    this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
                });
            });
        });
        radioGeologicalSystem.addEventListener('click', (event) => {
            wrapperGeological.replaceChildren();
            this.#SYSTEM_GEOLOGICAL_PANEL().then((SYSTEM) => {

                wrapperGeological.append(SYSTEM)
                const selectSpace = document.getElementById('SELECT_Space-Choice');
                const selectSector = document.getElementById('SELECT_Sector-Choice');
                const selectSystem = document.getElementById('SELECT_System-Choice');
                const selectGeological = document.getElementById('SELECT_Geological-Choice');

                selectGeological.addEventListener('change', (event) => {
                    this.memory.GEOLOGICAL.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
                    this.memory.GEOLOGICAL.SECTOR = selectSector.options[selectSector.selectedIndex].text;
                    this.memory.GEOLOGICAL.SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
                    this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
                });
            });
        });
        return wrapperChoice;
    };
    async #SPACE_GEOLOGICAL_PANEL() {

        // == OPTIONS == //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Space-Choice'
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            id: 'SELECT_Space-Choice',
            options: space,
            boxName: 'SPACE-SELECT'
        }).init();
        const selectGeological = new create({
            tag: 'select',
            id: 'SELECT_Geological-Choice',
            boxName: 'GEO-SELECT'
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'label',
            id: 'LABEL_Choose-Space',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SPACE']
        }).init();
        const labelGeological = new create({
            tag: 'label',
            id: 'LABEL_Choose-Geological',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_GEOLOGICAL']
        }).init();

        selectSpace.addEventListener('change', (SPACE_EVENT) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            const holdDiv = new create({
                tag: 'select'
            });
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Space-Geo', spaceChoice);
            availableOptions.unshift("GEOLOGICAL OPTIONS");
            holdDiv.changeOptions(selectGeological, availableOptions);
        });
        selectGeological.addEventListener('change', (event) => {
            this.memory.GEOLOGICAL.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
        });

        // == ATTACHMENNTS == //
        wrapper.append(...[
            labelSpace,
            selectSpace,

            labelGeological,
            selectGeological
        ]);

        return wrapper;
    };
    async #SECTOR_GEOLOGICAL_PANEL() {

        // == OPTIONS == //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Sector-Choice'
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            id: 'SELECT_Space-Choice',
            options: space,
            boxName: 'SPACE-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSector = new create({
            tag: 'select',
            id: 'SELECT_Sector-Choice',
            boxName: 'SECTOR-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectGeological = new create({
            tag: 'select',
            id: 'SELECT_Geological-Choice',
            boxName: 'GEO-SELECT',
            classes: ['FORM_SELECT']
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'label',
            id: 'LABEL_Choose-Space',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SPACE'] 
        }).init();
        const labelSector = new create({
            tag: 'label',
            id: 'LABEL_Choose-Sector',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SECTOR'] 
        }).init();
        const labelGeological = new create({
            tag: 'label',
            id: 'LABEL_Choose-Geological',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_GEOLOGICAL'] 
        }).init();

        // == LISTENERS == //
        selectSpace.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            const holdDiv = new create({
                tag: 'select'
            });
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector', spaceChoice);
            availableOptions.unshift("SECTOR OPTIONS");
            holdDiv.changeOptions(selectSector, availableOptions);
        });
        selectSector.addEventListener('change', (SPACE_EVENT) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
            const holdDiv = new create({
                tag: 'select'
            });
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector-Geo', spaceChoice, sectorChoice);
            availableOptions.unshift("GEOLOGICAL OPTIONS");
            holdDiv.changeOptions(selectGeological, availableOptions);
        });
        selectGeological.addEventListener('change', (event) => {
            this.memory.GEOLOGICAL.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.GEOLOGICAL.SECTOR = selectSector.options[selectSector.selectedIndex].text;
            this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
        });

        // == ATTACHMENNTS == //
        wrapper.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            selectSector,

            labelGeological,
            selectGeological
        ]);
        return wrapper;
    };
    async #SYSTEM_GEOLOGICAL_PANEL() {

        // == OPTIONS == //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // == WRAPPERS == //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Sector-Choice'
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            id: 'SELECT_Space-Choice',
            options: space,
            boxName: 'SPACE-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSector = new create({
            tag: 'select',
            id: 'SELECT_Sector-Choice',
            boxName: 'SECTOR-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectSystem = new create({
            tag: 'select',
            id: 'SELECT_System-Choice',
            boxName: 'SYSTEM-SELECT',
            classes: ['FORM_SELECT']
        }).init();
        const selectGeological = new create({
            tag: 'select',
            id: 'SELECT_Geological-Choice',
            boxName: 'GEO-SELECT',
            classes: ['FORM_SELECT']
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'label',
            id: 'LABEL_Choose-Space',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SPACE']
        }).init();
        const labelSector = new create({
            tag: 'label',
            id: 'LABEL_Choose-Sector',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SECTOR']
        }).init();
        const labelSystem = new create({
            tag: 'label',
            id: 'LABEL_Choose-System',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_SYSTEM']
        }).init();
        const labelGeological = new create({
            tag: 'label',
            id: 'LABEL_Choose-Geological',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_GEOLOGICAL']
        }).init();

        // == INSTANCES == //
        const holdDiv = new create({
            tag: 'select'
        });

        // == LISTENERS == //
        selectSpace.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector', spaceChoice);
            availableOptions.unshift("SECTOR OPTIONS");
            holdDiv.changeOptions(selectSector, availableOptions);
        });
        selectSector.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('System', spaceChoice, sectorChoice);
            availableOptions.unshift("SYSTEM OPTIONS");
            holdDiv.changeOptions(selectSystem, availableOptions);
        });
        selectSystem.addEventListener('change', (SPACE_EVENT) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
            let systemChoice = selectSystem.options[selectSystem.selectedIndex].text;
            const holdDiv = new create({
                tag: 'select'
            });
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('System-Geo', spaceChoice, sectorChoice, systemChoice);
            availableOptions.unshift("GEOLOGICAL OPTIONS");
            holdDiv.changeOptions(selectGeological, availableOptions);
        });
        selectGeological.addEventListener('change', (event) => {
            this.memory.GEOLOGICAL.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.GEOLOGICAL.SECTOR = selectSector.options[selectSector.selectedIndex].text;
            this.memory.GEOLOGICAL.SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
            this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
        });

        // == ATTACHMENNTS == //
        wrapper.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            selectSector,

            labelSystem,
            selectSystem,

            labelGeological,
            selectGeological
        ]);
        return wrapper;
    };
}
export {Panels_Explore}