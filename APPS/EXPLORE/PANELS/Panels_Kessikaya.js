import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";
import { Explorer } from "../CONSOLE/Explorer.js";

class Panels_Kessikaya extends Stalk{

    constructor() {
        super();
        this.optionsSpace = [];
        this.explore = new Explorer();
    }

    PANEL_INPUT_ORB() {

        // == WRAPPER == //
        const wrapperPanel = new create({
            tag: 'div'
        }).init();
        const wrapperOrb = new create({
            tag: 'div'
        }).init();

        // == RADIO == //
        const radioSpace = new create({
            tag: 'input',
            type: 'radio',
            boxName: 'CHOICE'
        }).init();
        const radioSector = new create({
            tag: 'input',
            type: 'radio',
            boxName: 'CHOICE'
        }).init();
        const radioSystem = new create({
            tag: 'input',
            type: 'radio',
            boxName: 'CHOICE'
        }).init();
        const radioPlanet = new create({
            tag: 'input',
            type: 'radio',
            boxName: 'CHOICE'
        }).init();

        // == TEXT == //
        const labelSpace = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SPACE']
        }).init();
        const labelSector = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SECTOR']
        }).init();
        const labelSystem = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SYSTEM']
        }).init();
        const labelPlanet = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'PLANET']
        }).init();

        // == PANELS == //
        let spacePanel = this.PANEL_INPUT_NEW_SPACE();
        let sectorPanel = this.PANEL_INPUT_NEW_SECTOR();
        let systemPanel = this.PANEL_INPUT_NEW_SYSTEM();
        let planetPanel = this.PANEL_INPUT_NEW_PLANET();

        // == LISTENERS == //
        radioSpace.addEventListener('click', (event) => {
            wrapperPanel.replaceChildren();
            wrapperPanel.append(spacePanel);
        });
        radioSector.addEventListener('click', (event) => {
            wrapperPanel.replaceChildren();
            wrapperPanel.append(sectorPanel);
        });
        radioSystem.addEventListener('click', (event) => {
            wrapperPanel.replaceChildren();
            wrapperPanel.append(systemPanel);
        });
        radioPlanet.addEventListener('click', (event) => {
            wrapperPanel.replaceChildren();
            wrapperPanel.append(planetPanel);
        });

        // == ATTACHMENTS == //
        wrapperOrb.append(...[
            labelSpace,
            radioSpace,
            labelSector,
            radioSector,
            labelSystem,
            radioSystem,
            labelPlanet,
            radioPlanet,
            wrapperPanel
        ]);
        return wrapperOrb;
    }
    PANEL_INPUT_NEW_SPACE() {

        // == WRAPPERS == //
        const wrapperSpace = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputSpace = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'TERMS', 'SPACE']
        }).init();
        const inputCode = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'LABELS', 'CODE']
        }).init();

        // == TEXT == //
        const headerSpace = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SPACE']
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            this.explore.CREATE_SPACE(inputSpace.value, inputCode.value).then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapperSpace.append(...[
            headerSpace,
            inputSpace,,
            inputCode,
            buttonSubmit
        ]);
        return wrapperSpace;
    };
    PANEL_INPUT_NEW_SECTOR() {

        // == WRAPPERS == //
        const wrapperSector = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputSector = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'TERMS', 'SECTOR']
        }).init();
        const inputCode = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'LABELS', 'CODE']
        }).init();

        // == TEXT == //
        const labelSector = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SECTOR']
        }).init();
        const labelSpace = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SPACE']
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            options: this.optionsSpace
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            let spaceChosen = selectSpace.options[selectSpace.selectedIndex].text;
            this.explore.CREATE_SECTOR(spaceChosen, inputSector.value, inputCode.value)
                .then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapperSector.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            inputSector,

            inputCode,

            buttonSubmit
        ]);
        return wrapperSector;
    };
    PANEL_INPUT_NEW_SYSTEM() {

        // == WRAPPERS == //
        const wrapperSystem = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputSystem = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'TERMS', 'SYSTEM']
        }).init();
        const inputCode = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'LABELS', 'CODE']
        }).init();

        // == TEXT == //
        const labelSystem = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SYSTEM']
        }).init();
        const labelSector = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SECTOR']
        }).init();
        const labelSpace = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SPACE']
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            options: this.optionsSpace
        }).init();
        const selectSector = new create({
            tag: 'select'
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == INSTANCES == //
        let hold = this.CREATE();

        // == LISTENERS == //
        selectSpace.addEventListener('change', (event) => {
            let sectorOptions = this.explore.SEARCH('Sector', selectSpace.options[selectSpace.selectedIndex].text)
                .then((SECTORS) => {
                    SECTORS.unshift('CHOOSE SECTOR');
                    hold.changeOptions(selectSector, SECTORS);
                });
        });
        buttonSubmit.addEventListener('click', (event) => {
            let spaceChosen = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChosen = selectSector.options[selectSector.selectedIndex].text;
            this.explore.CREATE_SYSTEM(spaceChosen, sectorChosen, inputSystem.value, inputCode.value)
                .then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapperSystem.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            selectSector,

            labelSystem,
            inputSystem,

            inputCode,

            buttonSubmit
        ]);
        return wrapperSystem;
    };
    PANEL_INPUT_NEW_PLANET() {

        // == WRAPPERS == //
        const wrapperPlanet = new create({
            tag: 'div'
        }).init();

        // == INPUT == //
        const inputPlanet = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'TERMS', 'PLANET']
        }).init();
        const inputCode = new create({
            tag: 'input',
            placeholder: ['EXPLORER', 'TERMS', 'CODE']
        }).init();

        // == TEXT == //
        const labelPlanet = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'PLANET']
        }).init();
        const labelSystem = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SYSTEM']
        }).init();
        const labelSector = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SECTOR']
        }).init();
        const labelSpace = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'TERMS', 'SPACE']
        }).init();
        const labelCode = new create({
            tag: 'label',
            elementText: ['EXPLORER', 'LABELS', 'CODE']
        }).init();

        // == SELECT == //
        const selectSpace = new create({
            tag: 'select',
            options: this.optionsSpace
        }).init();
        const selectSector = new create({
            tag: 'select'
        }).init();
        const selectSystem = new create({
            tag: 'select'
        }).init();

        // == BUTTONS == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        let hold = this.CREATE();

        // == LISTENERS == //
        selectSpace.addEventListener('change', (event) => {
            sectorOptions = this.explore.SEARCH('Sector', selectSpace.options[selectSpace.selectedIndex].text)
                .then((SECTORS) => {
                    SECTORS.unshift("CHOOSE SECTOR")
                    hold.changeOptions(selectSector, SECTORS);
                    selectSector.addEventListener('change', (event) => {
                        systemOptions = this.explore.SEARCH('System', selectSpace.options[selectSpace.selectedIndex].text, selectSector.options[selectSector.selectedIndex].text)
                                        .then((PLANET_SYSTEMS) => {
                                            PLANET_SYSTEMS.unshift('CHOOSE SYSTEM')
                                            hold.changeOptions(selectSystem, PLANET_SYSTEMS);
                                        });
                    });
                }) 
        });
        buttonSubmit.addEventListener('click', (event) => {
            let spaceChosen = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChosen = selectSector.options[selectSector.selectedIndex].text;
            let systemChosen = selectSystem.options[selectSystem.selectedIndex].text;
            this.explore.CREATE_PLANET(spaceChosen, sectorChosen, systemChosen, inputPlanet.value, inputCode.value)
                .then((RESULT) => {return RESULT});
        });

        wrapperPlanet.append(...[
            labelSpace,
            selectSpace,

            labelSector,
            selectSector,

            labelSystem,
            selectSystem,

            labelPlanet,
            inputPlanet,

            labelCode,
            inputCode,

            buttonSubmit
        ]);
        return wrapperPlanet;
    };
    CREATE() {
        return new create({
            tag: 'div'
        })
    };
    async INITIALISE() {
        await this.explore.INIT();
        this.optionsSpace = this.explore.SEARCH_SPACE();
        this.optionsSpace.unshift('CHOOSE SPACE');
    }
}

export {Panels_Kessikaya};



