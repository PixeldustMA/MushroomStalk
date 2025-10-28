    /**
     * ## PANEL - SPACE GEOLOGICAL AREA
     * 
     * -----------------------
     * 
     * Create a panel focussed around a geological area in space
     * 
     * ------------------------
     * ### RETURNS -->> {PANEL}
     * @returns {HTMLElement}
     */
    async #SPACE_GEOLOGICAL_PANEL() {

        await this.mouldy.DEBUG_MODE({
            CATEGORY: this.DEBUG_CATEGORY,
            SCRIPT: this.DEBUG_SCRIPT,
            MESSAGE: 'CREATING PANEL -- CHOOSE GEOGRAPHICAL AREA {SPACE}', 
            TYPE: 'FUNCTION',
            LOCATION: this.DEBUG_LOCATION,
        });

        // << OPTIONS >> //
        const space = await this.Kessikaya.SEARCH_SPACE();
        space.unshift('CHOOSE SPACE');

        // << WRAPPERS >> //
        const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Space-Choice'
        }).init();

        // << SELECT >> //
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

        // << TEXT >> //
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

        // << LISTENERS >> //
        selectSpace.addEventListener('change', (SPACE_EVENT) => {
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
            let availableOptions = this.Kessikaya.SEARCH_PLANETS('Space-Geo', spaceChoice);
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
            this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
        });

        // << ATTACHMENNTS >> //
        wrapper.append(...[
            labelSpace,
            selectSpace,

            labelGeological,
            selectGeological
        ]);

        return wrapper;
    };