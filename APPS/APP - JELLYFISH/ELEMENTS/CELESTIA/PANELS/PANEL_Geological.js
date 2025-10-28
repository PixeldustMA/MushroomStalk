    /**
     * ## PANEL - GEOGRAPHICAL
     * 
     * -----------------------
     * 
     * Create a panel focussed around Geographical areas
     * 
     * ------------------------
     * ### RETURNS -->> {PANEL}
     * @returns {HTMLElement}
     */
    async #GEOGRAPHICAL_PANEL() {

        await this.mouldy.DEBUG_MODE({
            CATEGORY: this.DEBUG_CATEGORY,
            SCRIPT: this.DEBUG_SCRIPT,
            MESSAGE: 'CREATING PANEL -- CHOOSE GEOGRAPHICAL AREA', 
            TYPE: 'FUNCTION',
            LOCATION: this.DEBUG_LOCATION,
        });

        // << WRAPPERS >> //
        const wrapperChoice = new create({
            tag: 'div',
            id: 'WRAPPER_Geological-Choice'
        }).init();
        const wrapperGeological = new create({
            tag: 'div'
        }).init();

        // << RADIO >> //
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

        // << TEXT >> //
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

        // << ATTACHMENT >> //
        wrapperChoice.append(...[
            labelSpace,
            labelSector,
            labelSystem,
            wrapperGeological
        ]);

        // << LISTENERS >> //
        radioGeologicalSpace.addEventListener('click', (event) => {

            this.mouldy.DEBUG_MODE({
                CATEGORY: this.DEBUG_CATEGORY,
                SCRIPT: this.DEBUG_SCRIPT,
                MESSAGE: 'CLICK', 
                TYPE: 'LISTENER',
                LOCATION: this.DEBUG_LOCATION,
                EVENT: 'RADIO',
                IDENTIFIER: 'GEOLOGICAL SPACE CHECKBOX',
                ACTIVATION: 'GEOLOGICAL SPACE CHOICE'
            }).then((MSG) => {return MSG});

            wrapperGeological.replaceChildren();
            this.#SPACE_GEOLOGICAL_PANEL().then((SPACE) => {
                wrapperGeological.append(SPACE);
                const selectSpace = document.getElementById('SELECT_Space-Choice');
                const selectGeological = document.getElementById('SELECT_Geological-Choice');
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
            });
        });
        radioGeologicalSector.addEventListener('click', (event) => {

            this.mouldy.DEBUG_MODE({
                CATEGORY: this.DEBUG_CATEGORY,
                SCRIPT: this.DEBUG_SCRIPT,
                MESSAGE: 'CLICK', 
                TYPE: 'LISTENER',
                LOCATION: this.DEBUG_LOCATION,
                EVENT: 'RADIO',
                IDENTIFIER: 'GEOLOGICAL SECTOR CHECKBOX',
                ACTIVATION: 'GEOLOGICAL SECTOR CHOICE'
            }).then((MSG) => {return MSG});
            
            wrapperGeological.replaceChildren();
            this.#SECTOR_GEOLOGICAL_PANEL().then((SECTOR) => {
                wrapperGeological.append(SECTOR)
                const selectSpace = document.getElementById('SELECT_Space-Choice');
                const selectSector = document.getElementById('SELECT_Sector-Choice');
                const selectGeological = document.getElementById('SELECT_Geological-Choice');
                selectGeological.addEventListener('change', (event) => {

                    this.mouldy.DEBUG_MODE({
                        CATEGORY: this.DEBUG_CATEGORY,
                        SCRIPT: this.DEBUG_SCRIPT,
                        MESSAGE: 'SELECT', 
                        TYPE: 'LISTENER',
                        LOCATION: this.DEBUG_LOCATION,
                        IDENTIFIER: 'GEOLOGICAL SECTOR SELECT',
                        CHOICE: selectGeological.options[selectGeological.selectedIndex].text
                    }).then((MSG) => {return MSG});

                    this.memory.GEOLOGICAL.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
                    this.memory.GEOLOGICAL.SECTOR = selectSector.options[selectSector.selectedIndex].text;
                    this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
                });
            });
        });
        radioGeologicalSystem.addEventListener('click', (event) => {

            this.mouldy.DEBUG_MODE({
                CATEGORY: this.DEBUG_CATEGORY,
                SCRIPT: this.DEBUG_SCRIPT,
                MESSAGE: 'CLICK', 
                TYPE: 'LISTENER',
                LOCATION: this.DEBUG_LOCATION,
                EVENT: 'RADIO',
                IDENTIFIER: 'GEOLOGICAL SYSTEM CHECKBOX',
                ACTIVATION: 'GEOLOGICAL SYSTEM CHOICE'
            }).then((MSG) => {return MSG});

            wrapperGeological.replaceChildren();
            this.#SYSTEM_GEOLOGICAL_PANEL().then((SYSTEM) => {

                wrapperGeological.append(SYSTEM)
                const selectSpace = document.getElementById('SELECT_Space-Choice');
                const selectSector = document.getElementById('SELECT_Sector-Choice');
                const selectSystem = document.getElementById('SELECT_System-Choice');
                const selectGeological = document.getElementById('SELECT_Geological-Choice');

                selectGeological.addEventListener('change', (event) => {

                    this.mouldy.DEBUG_MODE({
                        CATEGORY: this.DEBUG_CATEGORY,
                        SCRIPT: this.DEBUG_SCRIPT,
                        MESSAGE: 'SELECT', 
                        TYPE: 'LISTENER',
                        LOCATION: this.DEBUG_LOCATION,
                        IDENTIFIER: 'GEOLOGICAL SYSTEM SELECT',
                        CHOICE: selectGeological.options[selectGeological.selectedIndex].text
                    }).then((MSG) => {return MSG});

                    this.memory.GEOLOGICAL.SPACE = selectSpace.options[selectSpace.selectedIndex].text;
                    this.memory.GEOLOGICAL.SECTOR = selectSector.options[selectSector.selectedIndex].text;
                    this.memory.GEOLOGICAL.SYSTEM = selectSystem.options[selectSystem.selectedIndex].text;
                    this.memory.GEOLOGICAL.GEOLOGICAL = selectGeological.options[selectGeological.selectedIndex].text;
                });
            });
        });
        return wrapperChoice;
    };