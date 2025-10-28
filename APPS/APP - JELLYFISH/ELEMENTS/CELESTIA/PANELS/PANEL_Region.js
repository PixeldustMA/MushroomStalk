async #MULTI_PLANET_SAME_SYSTEM_PANEL() {


    // << WRAPPERS // 
    const wrapper = new create({
        tag: 'div'
    }).init();

    // << BUTTONS >> //
    const addAnotherButton = new create({
        tag: 'button',
        elementText: ['USEFUL', 'GENERAL', 'MORE']
    }).init();

    // << OPTIONS >> //
    const space = await this.Kessikaya.SEARCH_SPACE();
    space.unshift('CHOOSE SPACE');

    // << SELECT >> //
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

    // << TEXT >> //
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

    // << INSTANCES >> //
    const holdDiv = new create({
        tag: 'select'
    });
    let regionOptions = [];

    // << LISTENERS >> //
    selectSpace.addEventListener('change', (event) => {
        let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;

        let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector', spaceChoice);
        availableOptions.unshift("SECTOR OPTIONS");
        holdDiv.CHANGE_OPTIONS(selectSector, availableOptions);
    });
    selectSector.addEventListener('change', (event) => {
        let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
        let sectorChoice = selectSector.options[selectSector.selectedIndex].text;


        let availableOptions = this.Kessikaya.SEARCH_PLANETS('System', spaceChoice, sectorChoice);
        availableOptions.unshift("SYSTEM OPTIONS");
        holdDiv.CHANGE_OPTIONS(selectSystem, availableOptions);
    });
    selectSystem.addEventListener('change', (event) => {
        let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
        let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
        let systemChoice = selectSystem.options[selectSystem.selectedIndex].text;

        let availableOptions = this.Kessikaya.SEARCH_PLANETS('Planet', spaceChoice, sectorChoice, systemChoice);
        availableOptions.unshift("PLANET OPTIONS");
        regionOptions = availableOptions;
        holdDiv.CHANGE_OPTIONS(selectPlanet, availableOptions);
    });
    selectPlanet.addEventListener('change', (event) => {



        this.memory.PLANET.MULTI[this.counter] = {}
        this.memory.PLANET.MULTI[this.counter].SPACE = selectSpace.options[selectSpace.selectedIndex].text;
        this.memory.PLANET.MULTI[this.counter].SECTOR = selectSector.options[selectSector.selectedIndex].text;
        this.memory.PLANET.MULTI[this.counter].SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
        this.memory.PLANET.MULTI[this.counter].PLANET = selectPlanet.options[selectPlanet.selectedIndex].text;
    });
    addAnotherButton.addEventListener('click', (event) => {

        this.mouldy.DEBUG_MODE({
            CATEGORY: this.DEBUG_CATEGORY,
            SCRIPT: this.DEBUG_SCRIPT,
            MESSAGE: 'CLICK', 
            TYPE: 'LISTENER',
            LOCATION: this.DEBUG_LOCATION,
            EVENT: 'BUTTON',
            IDENTIFIER: 'ADD',
            ACTIVATION: 'ADDING ANOTHER BUTTON'
        }).then((MSG) => {return MSG});

        let planet = new create({
            tag: 'select',
            options: regionOptions,
            id: `PLANET${this.counter}`
        }).init();
        wrapper.append(planet);
        this.counter += 1;
        planet.addEventListener('change', (event) => {

            this.mouldy.DEBUG_MODE({
                CATEGORY: this.DEBUG_CATEGORY,
                SCRIPT: this.DEBUG_SCRIPT,
                MESSAGE: 'SELECT', 
                TYPE: 'LISTENER',
                LOCATION: this.DEBUG_LOCATION,
                IDENTIFIER: 'PLANET SELECT',
                CHOICE: planet.options[planet.selectedIndex].text
            }).then((MSG) => {return MSG});

            this.memory.PLANET.MULTI[this.counter] = {}
            this.memory.PLANET.MULTI[this.counter].SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.PLANET.MULTI[this.counter].SECTOR = selectSector.options[selectSector.selectedIndex].text;
            this.memory.PLANET.MULTI[this.counter].SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
            this.memory.PLANET.MULTI[this.counter].PLANET = planet.options[planet.selectedIndex].text;
        })
    });

    // << ATTACHMENNTS >> //
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