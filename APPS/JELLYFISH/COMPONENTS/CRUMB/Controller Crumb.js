class Crumb {

    constructor(titleText, shadow, id = "NOT_SET") {

        this.ID = id;
        this.TITLETEXT = titleText;
        this.tableShadow = shadow;
        this.SHADOW;
    };

    /**
     * CREATE THE CRUMB BAR
     * @returns {HTMLElement}
     */
    build() {
        let newCrumb = document.createElement('jellyfish-crumbbar');
        this.#CHECKID();
            newCrumb.id = this.ID;
        return newCrumb;
    };
    /**
     * GET THE SHADOW OF THE CRUMB BAR
     */
    shadow() {
        this.SHADOW = this.tableShadow.getElementById(this.ID).shadowRoot;
    };
    /**
     * SET THE TITLE TEXT OF THE BAR
     */
    text() {
        this.SHADOW.getElementById('JELLYFISH_Wrapper-Title-Cat-Cell')
                    .innerHTML = this.TITLETEXT;
    };
    /**
     * CREATE THE INDIVIDUAL CELLS OF CRUMB BAR
     * @param {Array} squareNumber 
     */
    cells(squareNumber) {

        let container = this.SHADOW.getElementById('CrumbColumnContainer');
        let num = 0;
        let idHeader = this.TITLETEXT;

        BlockLoop: for (let index = 0; index < squareNumber.length; index++) {

            let newDiv = document.createElement('div');
                newDiv.id = `${idHeader}${num}`;
                newDiv.style.float = 'left';
                newDiv.classList.add('clickable')
                newDiv.classList.add('cell');
            container.appendChild(newDiv);
            num++;
        };

    };
    /**
     * IF NOT EXISTING, GENERATE A NEW ID FOR THE CURRENT CRUMB
     * @returns ID STRING
     */
    #CHECKID() {
        if (this.ID === 'NOT_SET') {
            this.ID = this.#GENERATEID();
            return this.ID;
        }
        else {
            return this.ID;
        }
    };
    /**
     * GENERATE AN ID
     * @returns {String} UNIQUE ID
     */
    #GENERATEID() {
        return `Crumb${this.TITLETEXT}${Date.now().toString(36) + Math.random().toString(36).substring(2, 12).padStart(12, 0)}`;
    };

}

export {Crumb};

// watch() {
//     const elementRoot = this.SHADOW;
//     const elementToObserve = this.shadowRoot.getElementById(this.ID);

//     let observer = new MutationObserver((mutationList, observer) => {

//         // GET THE OBJECT WITH CRUMB INFORMATION

//         // panicBase.getGrapefruitObject()
//         // .then((result) => {
//         //     let originalCrumb = crumbBlox;

//             // TEXT OF CRUMB
//             let crumbBlox = elementToObserve.innerHTML;

//             // GET ARRAY OF CRUMBS

//             // let crumbArray = result[arcNumber].Fragment[fragNum].Crumbs

//             // IF THE ORIGINAL TEXT MATCHES THE TEXT WHEN LOOPING, CHANGE THE TEXT
//             // for (let index = 0; index < crumbArray.length; index++) {
//             //     if (crumbArray[index] === originalCrumb) {
//             //         crumbArray[index] = crumbBlox;
//             //         console.log(crumbBlox);
//             //     }
//             // }

//             // SAVE THE NEW VERSION OF THE OBJECT

//     //         panicBase.saveObject(result)
//     //         .then((result) => {
//     //             return result;});									
//     //     return result});

//     // DONT KNOW
//     // let block = elementRoot.getElementById('createAPopBox');
//     // block.remove();
//     })
//     observer.observe(elementToObserve, {
//         characterData: false, 
//         childList: true, 
//         attributes: false
//     });
// }