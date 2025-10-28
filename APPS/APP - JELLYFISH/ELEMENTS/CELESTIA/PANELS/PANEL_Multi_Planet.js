    /**
     * ## PANEL - MULTIPLE PLANETS
     * 
     * -----------------------
     * 
     * Create a panel focussed around selecting multiple planets
     * 
     * ------------------------
     * ### RETURNS -->> {PANEL}
     * @returns {HTMLElement}
     */
    async #MULTI_PANEL() {
        

        // << CONTAINERS >> //
        const wrapper = new create({
            tag: 'div'
        }).init();

        // << BUTTON >> //
        const addAnotherButton = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'MORE']
        }).init();

        // << PANELS >> //
        const panel = await this.#PLANET_PANEL();

        // << LISTENERS >> //
        addAnotherButton.addEventListener('click', (event) => {


            this.#PLANET_PANEL().then((PLANET) => {wrapper.append(PLANET)});
            this.secondCounter += 1;
        });
        wrapper.append(...[panel, addAnotherButton])
        return wrapper;
    };