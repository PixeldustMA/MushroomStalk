class folding {

    constructor() {}

    /**
     * REVEAL A TRACKER BAR OR CRUMB
     * @param {HTMLElement} element 
     * @returns {HTMLElement}
     */
    show(element) {
        element.classList.remove('HideBars');
        element.classList.add("ShowBars");
        element.style.display = ""; 
        return element;  
    }
    /**
     * HIDE A TRACKER BAR OR CRUMB
     * @param {HTMLElement} element 
     */
    hide(element) {
        element.classList.add('HideBars');
        element.classList.remove("ShowBars");
        element.style.display = "none";
    }
    /**
     * FIND ALL CHUNKS WITH THE CHUNK NAME AS PARENT
     * @param {Object} search AN OBJECT TO SEARCH THROUGH
     * @param {String} chunkName THE KEYWORD TO SEARCH FOR
     * @returns {Array} COLLECTION OF CHILDREN
     */
    gatherChildren(search, chunkName){
        let child = [];
        for (const key in search) {
            if (Object.hasOwnProperty.call(search, key)) {
                const element = search[key];
                if (element.PARENT === chunkName) {
                    child.push(element.NAME);
                }
            }
        }
        return child;
    }
    /**
     * SHOW OR HIDE GIVEN NAMES
     * @param {Array} nameList A LIST OF NAMES TO SEARCH FOR
     * @param {Boolean} titles TRUE IF SEARCHING THROUGH TITLES
     * @param {Boolean} crumbs TRUE IF SEARCHING THROUGH CRUMBS
     */
    fold(nameList, titles = false, crumbs = false){

        const activeTitles = document.querySelector('jellyfish-tracker')
                    .shadowRoot
                    .querySelectorAll('jellyfish-titlebar');
        const activeCrumbs = document.querySelector('jellyfish-tracker')
                        .shadowRoot
                        .querySelectorAll('jellyfish-crumbbar');

        if (titles) {
            activeTitles.forEach(titlebar => {
                for (let nameListIndex = 0; nameListIndex < nameList.length; nameListIndex++) {
                    const element = nameList[nameListIndex];
                    if (titlebar.getAttribute('barName') === element) {
                        const check = this.isHidden(titlebar);
                        if (check) {
                            this.show(titlebar);
                        }
                        else {
                            this.hide(titlebar);
                        }
                    }                     
                }
            })
        }
        if (crumbs) {
            activeCrumbs.forEach(crumbbar => {
                for (let nameListIndex = 0; nameListIndex < nameList.length; nameListIndex++) {
                    const element = nameList[nameListIndex];
                    if (crumbbar.getAttribute('crumbName') === element) {
                        const check = this.isHidden(crumbbar);
                        if (check) {
                            this.show(crumbbar);
                        }
                        else {
                            this.hide(crumbbar);
                        }
                    }                     
                }
            })
        }
    }
    /**
     * cHECK VISIBILITY OF ELEMENT
     * @param {HTMLElement} element 
     * @returns {Boolean}
     */
    isHidden(element) {
        if (element.classList.contains('HideBars') && element.style.display === 'none') {
            return true
        }
        return false;
    }
}

export {folding};