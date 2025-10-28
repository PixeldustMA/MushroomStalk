    /**
     * ## PANEL - PLANET
     * 
     * -----------------------
     * 
     * Create a panel focussed around planets
     * 
     * ------------------------
     * ### RETURNS -->> {PANEL}
     * @returns {HTMLElement}
     */
    async #PLANET_PANEL() {

        // << OPTIONS >> //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // << WRAPPERS >> //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Sector-Choice'
        }).init();

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

        // << LISTENERS >> //
        selectSpace.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;


            let availableOptions = this.Kessikaya.SEARCH('Sector', spaceChoice)
                .then((SECTOR) => {
                    SECTOR.unshift("SECTOR OPTIONS");
                    holdDiv.CHANGE_OPTIONS(selectSector, SECTOR);
                });
        });
        selectSector.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;

            let availableOptions = this.Kessikaya.SEARCH('System', spaceChoice, sectorChoice)
                .then((SYSTEM) => {
                    SYSTEM.unshift("SYSTEM OPTIONS");
                    holdDiv.CHANGE_OPTIONS(selectSystem, SYSTEM);
                });
        });
        selectSystem.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;
            let systemChoice = selectSystem.options[selectSystem.selectedIndex].text;


            let availableOptions = this.Kessikaya.SEARCH('Planet', spaceChoice, sectorChoice, systemChoice)
                .then((PLANET) => {
                    PLANET.unshift("PLANET OPTIONS");
                    holdDiv.CHANGE_OPTIONS(selectPlanet, PLANET);
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

        // << ATTACHMENNTS >> //
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