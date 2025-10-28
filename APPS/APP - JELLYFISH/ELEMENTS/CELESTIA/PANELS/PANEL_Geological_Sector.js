    /**
     * ## PANEL - SECTOR GEOLOGICAL AREA
     * 
     * -----------------------
     * 
     * Create a panel focussed around a geological area in sector
     * 
     * ------------------------
     * ### RETURNS -->> {PANEL}
     * @returns {HTMLElement}
     */
    async #SECTOR_GEOLOGICAL_PANEL() {

        await this.mouldy.DEBUG_MODE({
            CATEGORY: this.DEBUG_CATEGORY,
            SCRIPT: this.DEBUG_SCRIPT,
            MESSAGE: 'CREATING PANEL -- CHOOSE GEOGRAPHICAL AREA {SECTOR}', 
            TYPE: 'FUNCTION',
            LOCATION: this.DEBUG_LOCATION,
        });

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
        const selectGeological = new create({
            tag: 'select',
            id: 'SELECT_Geological-Choice',
            boxName: 'GEO-SELECT',
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
        const labelGeological = new create({
            tag: 'label',
            id: 'LABEL_Choose-Geological',
            elementText: ['EXPLORER', 'LABELS', 'SELECT_GEOLOGICAL'] 
        }).init();

        // << LISTENERS >> //
        selectSpace.addEventListener('change', (event) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;

            this.mouldy.DEBUG_MODE({
                CATEGORY: this.DEBUG_CATEGORY,
                SCRIPT: this.DEBUG_SCRIPT,
                MESSAGE: 'SELECT', 
                TYPE: 'LISTENER',
                LOCATION: this.DEBUG_LOCATION,
                IDENTIFIER: 'SPACE SELECT',
                CHOICE: spaceChoice
            }).then((MSG) => {return MSG});

            const holdDiv = new create({
                tag: 'select'
            });
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector', spaceChoice);
            availableOptions.unshift("SECTOR OPTIONS");
            holdDiv.CHANGE_OPTIONS(selectSector, availableOptions);
        });
        selectSector.addEventListener('change', (SPACE_EVENT) => {
            let spaceChoice = selectSpace.options[selectSpace.selectedIndex].text;
            let sectorChoice = selectSector.options[selectSector.selectedIndex].text;

            this.mouldy.DEBUG_MODE({
                CATEGORY: this.DEBUG_CATEGORY,
                SCRIPT: this.DEBUG_SCRIPT,
                MESSAGE: 'SELECT', 
                TYPE: 'LISTENER',
                LOCATION: this.DEBUG_LOCATION,
                IDENTIFIER: 'SECTOR SELECT',
                CHOICE: sectorChoice
            }).then((MSG) => {return MSG});

            const holdDiv = new create({
                tag: 'select'
            });
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Sector-Geo', spaceChoice, sectorChoice);
            availableOptions.unshift("GEOLOGICAL OPTIONS");
            holdDiv.CHANGE_OPTIONS(selectGeological, availableOptions);
        });
        selectGeological.addEventListener('change', (event) => {

            this.mouldy.DEBUG_MODE({
                CATEGORY: this.DEBUG_CATEGORY,
                SCRIPT: this.DEBUG_SCRIPT,
                MESSAGE: 'SELECT', 
                TYPE: 'LISTENER',
                LOCATION: this.DEBUG_LOCATION,
                IDENTIFIER: 'GEOLOGICAL SELECT',
                CHOICE: selectGeological.options[selectGeological.selectedIndex].text
            }).then((MSG) => {return MSG});

            this.memory.GEOLOGICAL.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
            this.memory.GEOLOGICAL.SECTOR = selectSector.options[selectSector.selectedIndex].text;
            this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
        });

        // << ATTACHMENNTS >> //
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