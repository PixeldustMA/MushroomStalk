import { JellyfishRainbow } from "../RAINBOW/JellyfishRainbowBar.js";
import { JellyfishTitleBar } from "../TITLE/JellyfishTitle.js";
import { JellyfishCrumbBar } from "../CRUMB/JellyfishCrumb.js";

import { Crumb } from "../CRUMB/Controller Crumb.js";
import {Memory} from "../../MEMORY/JellyfishMemory.js"
import { folding } from "../../CONSOLE/folding.js";

class Tracker{

    constructor(
        tag,
        shadows
    ) {

        this.columnCount = 0;
        this.settings = {};
        this.squares;
        this.Tag = tag;
        this.shadows = shadows;
        this.count = 0;
        this.activeStyle;
        this.header = {};
        this.headerKeys;
        this.styleKeys;
        this.squareKeys;
        this.activeCrumb;
        this.memory = new Memory();
        self = this;
        this.foldable = new folding();
        this.state = {}
    }

    /**
     * SET UP THE TRACKER CLASS DATA
     */
    async #FETCHDATA() {
        await this.#TRACKERSETTINGS();

        this.squares = await this.#ACTIVESQUARES();
        this.squareKeys = Object.keys(this.squares);
        this.columncount = this.squareKeys.length;

        this.activeStyle = await this.#ACTIVESTYLE();
        this.styleKeys = Object.keys(this.activeStyle);
    }
    /**
     * CREATE THE STRUCTURE OF THE JELLYFISH TABLE
     */
    async loadTracker() {
            await this.#FETCHDATA();
            let size = this.#COUNT_CHUNKS().length;
            let squareSize = size * 100;

            let titleElement = this.shadows.querySelectorAll('jellyfish-titlebar');

            this.#COLUMNS(this.shadows.getElementById('ColumnContainer'));
            titleElement.forEach(titleBar => {
                let barCells = titleBar.shadowRoot.querySelector(".bar");
                barCells.style.width = `${squareSize}px`;
            });

            this.#GENERATE_PARENTS();
            this.#GENERATE_NESTED_TITLES();

            let titleBoxes = this.shadows.querySelector('#ColumnnContainer');
                await this.DrawTitles(titleBoxes);

            window.addEventListener('click', this.BarName);
    };
    /**
     * ADD EVENT LISTENER
     * @param {Event} clickEvent 
     */
    BarName(clickEvent) {
        try {
            self.fold(clickEvent.composedPath()[3].getAttribute('barName'));
        } catch (error) {
            // TODO ADD ERROR
            console.log(error);
        }
    };

    // == SECTION DETAILS == //
    /**
     * CRUMB BAR SET UP
     * @returns {Object}
     */
    #Crumb = () => {
        return {Theme: "Theme Name",
        Classes: ["CrumbCell"]}
    };
    /**
     * TABLE BAR SET UP
     * @returns {Object}
     */
    #Table  = () => {
        return {Theme: "None", 
        Classes: ["Empty"]}
    };
    /**
     * TITLE BAR SET UP
     * @returns {Object}
     */
    #Title = () => {
    return {Theme: "Theme Name",
	Classes: ["cell", "Editable"]}
    };

    // == BUILD == //
    /**
     * 
     * @param {*} styleIndex 
     * @returns 
     */
    createCrumbs(styleIndex) {
        this.activeCrumb = new Crumb(this.activeStyle[styleIndex]["NAME"], this.shadows);
        return this.activeCrumb.build();

    };

    createState() {
        let stateBlock = {"CHILDREN": [], "VISIBILITY": []};

        const activeTitles = document.querySelector('jellyfish-tracker')
                    .shadowRoot
                    .querySelectorAll('jellyfish-titlebar');
        const activeCrumbs = document.querySelector('jellyfish-tracker')
                        .shadowRoot
                        .querySelectorAll('jellyfish-crumbbar');

        ChunkLoop: for (const key in this.activeStyle) {

            let activeChunkName = this.activeStyle[key].NAME;
            let activeChunkParent = this.activeStyle[key].PARENT;

            if (Object.hasOwnProperty.call(this.activeStyle, key)) {

                if (activeChunkParent === 'NONE') {
                    const child = this.foldable.gatherChildren(this.activeStyle, activeChunkName);

                    this.state[activeChunkName] = stateBlock;
                    this.state[activeChunkName].CHILDREN = child;

                    child.forEach(element => {
                        const listOfChildren = this.foldable.gatherChildren(this.activeStyle, element);
                        listOfChildren.forEach(bar => {
                            this.state[activeChunkName].CHILDREN.push(bar);
                        })
                    });
            }
        }
        }
        for (const key in this.state) {
            if (Object.hasOwnProperty.call(this.state, key)) {
                const element = this.state[key];
                let nameList = element.CHILDREN;
                activeTitles.forEach(titlebar => {
                    for (let nameListIndex = 0; nameListIndex < nameList.length; nameListIndex++) {
                        const element = nameList[nameListIndex];
                        if (titlebar.getAttribute('barName') === element) {
                            const check = this.foldable.isHidden(titlebar);
                            if (check) {
                                this.state[key].VISIBILITY.push("H");
                            }
                            else {
                                this.state[key].VISIBILITY.push("S");
                            }
                        }                     
                    }
                })
    
                activeCrumbs.forEach(crumbbar => {
                    for (let nameListIndex = 0; nameListIndex < nameList.length; nameListIndex++) {
                        const element = nameList[nameListIndex];
                        if (crumbbar.getAttribute('crumbName') === element) {
                            const check = this.foldable.isHidden(crumbbar);
                            if (check) {
                                this.state[key].VISIBILITY.push("H");
                            }
                            else {
                                this.state[key].VISIBILITY.push("S");
                            }
                        }                     
                }}
            )
            }
        }

        console.log("CURRENT STATE IS");
        console.log(this.state)
    }
    // == OPERATIONS == //
    /**
     * UPDATE COLUMN NUMBER AND SAVE FILE
     */
    async AddColumn() {
        this.memory.holdCells();
        this.memory.JELLY.path = this.settings["SQUARES"];

        let holdData = await this.memory.JELLY.Read();
        let num = Object.keys(holdData).length + 1;
        holdData[num.toString()] = {"DISPLAY": "NS", "HOVER": "NOT SET"};

        this.memory.JELLY.data = holdData;
        await this.memory.JELLY.Save();
        window.location.reload();
    };
    /**
     * ACTIVATE FOLD OR DISPLAY
     * @param {String} tag 
     */
    fold(tag) {
        this.createState();
    //     ChunkLoop: for (const key in this.activeStyle) {

    //         let activeChunkName = this.activeStyle[key].NAME;
    //         let activeChunkParent = this.activeStyle[key].PARENT;

    //         if (Object.hasOwnProperty.call(this.activeStyle, key)) {
    //             if (activeChunkParent === 'NONE') {
    //                 if (activeChunkName === tag) {
    //                     let newChild = []
    //                     const child = this.foldable.gatherChildren(this.activeStyle, activeChunkName);
    //                     let nestedChildNames = {};
    //                     if (child.length >= 0) {
                        
    //                     EmptyTitleLoop: for (let childIndex = 0; childIndex < child.length; childIndex++) {
    //                         const element = child[childIndex];
    //                         let holdELement;

    //                         const activeTitles = document.querySelector('jellyfish-tracker')
    //                                             .shadowRoot
    //                                             .querySelectorAll('jellyfish-titlebar');
    //                         const activeCrumbs = document.querySelector('jellyfish-tracker')
    //                                             .shadowRoot
    //                                             .querySelectorAll('jellyfish-crumbbar');

    //                         TitleLoop: for (let titleIndex = 0; titleIndex < activeTitles.length; titleIndex++) {
    //                             const titleelement = activeTitles[titleIndex];
    //                             if (titleelement.getAttribute('barName') === element) {
    //                                 holdELement = titleelement
    //                             }
    //                         }
    //                         CrumbLoop: for (let crumbIndex = 0; crumbIndex < activeCrumbs.length; crumbIndex++) {
    //                             const crumbElement = activeCrumbs[crumbIndex];
    //                             if (crumbElement.getAttribute('crumbName') === element) {
    //                                 holdELement = crumbElement
    //                             }
    //                         }
    //                         if (!this.foldable.isHidden(holdELement)) {
    //                             newChild.push(element);
    //                         }
    //                     }
    //                 }
    //                     this.foldable.fold (newChild ,false, true);
        
    //                     newChild.forEach(element => {
    //                         const listOfChildren = this.foldable.gatherChildren(this.activeStyle, element);
    //                         nestedChildNames[element] = listOfChildren;
    //                     });
    //                     console.log(nestedChildNames)
    //                     for (const key in nestedChildNames) {
    //                         if (Object.hasOwnProperty.call(nestedChildNames, key)) {
    //                             const element = nestedChildNames[key];
    //                             this.foldable.fold(element, false, true);
    //                         }
    //                     }
    //                 };                    
    //             }
    //             if (activeChunkName === tag) {
    //             const child = this.foldable.gatherChildren(this.activeStyle, activeChunkName);
    //             // this.state[activeChunkName] = child;
    //             let nestedChildNames = {};
    //             this.foldable.fold(child, true, true);

    //             child.forEach(element => {
    //                 const listOfChildren = this.foldable.gatherChildren(this.activeStyle, element);
    //                 nestedChildNames[element] = listOfChildren;
    //                 listOfChildren.forEach(bar => {
    //                     // this.state[activeChunkName].push(bar);
    //                 })
    //             });
    //             console.log(nestedChildNames)
    //             for (const key in nestedChildNames) {
    //                 if (Object.hasOwnProperty.call(nestedChildNames, key)) {
    //                     const element = nestedChildNames[key];
    //                     this.foldable.fold(element, false, true);
    //                 }
    //             }
    //         };
    //     };
    // }
    };
    /**
     * 
     * @param {*} newName 
     * @param {*} LocationName 
     * @param {*} crumb 
     */
    async addBars(newName, LocationName, crumb = false) {
        await this.#TRACKERSETTINGS();
        this.squares = await this.#ACTIVESQUARES();
        this.squareKeys = Object.keys(this.squares);
        this.columncount = this.squareKeys.length;

        this.activeStyle = await this.#ACTIVESTYLE();
        const newBlock = {
            "NAME": newName,
            "STYLE": {
                "BARCOLOUR": "#FFFFFF",
                "TEXTCOLOUR": "#000000",
                "FONT": "centralia",
                "BORDERSIZE": "2",
                "BORDERCOLOUR": "#000000"
            },
            "TYPE": "TITLE",
            "PARENT": LocationName
        };
        if (crumb) {
            newBlock.TYPE = 'CRUMB'
        };

        let num = Object.keys(this.activeStyle).length + 1;
        this.activeStyle[num] = newBlock;

        this.data = this.activeStyle;
        this.path = this.settings["STYLE"];
        this.Save();

        const trackerContainer = document.querySelector('jellyfish-tracker')
                                .shadowRoot
                                .getElementById('ColumnnContainer')
                                .querySelectorAll('jellyfish-crumbbar');

        for (const bar of trackerContainer) {
            let cells = bar.shadowRoot
                        .querySelectorAll('.cell');
            for (const cell of cells) {
                if (cell.classList.contains('Selected')) {
                    this.memory.push(cell.id);
                }
            }
        }
        window.location.reload();
    };

    // == STRUCTURE == //
    /**
     * GET ALL INFORMATION ABOUT TABLE CONSTRUCTION
     * @returns TABLE SET UP OBJECT
     */
    async #ACTIVESTYLE() {
        this.memory.JELLY.path = this.settings["STYLE"];
        return await this.memory.JELLY.Read();
    };
    /**
     * GET ALL SQUARES INFORMATION
     * @returns SQUARES OBJECT
     */
    async #ACTIVESQUARES() {
        this.memory.JELLY.path = this.settings["SQUARES"];
        return await this.memory.JELLY.Read();
    };
    /**
     * SET UP SETTINGS FOR THE TABLE
     */
    async #TRACKERSETTINGS() {
        this.memory.JELLY.path = await this.memory.JELLY.search('TRACKERSET');
        this.settings = await this.memory.JELLY.Read();
    };
    /**
     * GET CLASS INFORMATION ABOUT SPECIFIC ELEMENT TYPE
     * @returns ARRAY
     */
    #ACCESS_CLASS() {
		switch (this.Tag) {
			case "Crumb":
				return this.#Crumb().Classes;
			case "Table":
				return this.#Table().Classes;
			case "Title":
				return this.#Title().Classes;
			default:
				break;
		}
	};
    /**
     * SET CLASSES OF ELEMENTS
     * @param {*} classArray 
     * @param {*} container 
     * @returns HTML ELEMENT 
     */
    #ATTACH_CLASS(classArray, container) {
        classArray.forEach(className => {
			container.classList.add(className);
        });
		return container;

    };
    /**
     * CREATE THE COLUMNS FOR THE TABLE AND DRAW IN TITLE STRUCTURE
     * @param {HTMLElement} container 
     * @returns {HTMLElement}
     */
    #COLUMNS(container) {
		const tagObject = this.#ACCESS_CLASS();
		if (this.Tag !== "Table" ) {
            this.squareKeys.forEach(title => {
                let titleText = this.squares[title]["DISPLAY"];
                let stretchText = this.squares[title]["HOVER"];
                let colours = ["RedTitle", "OrangeTitle", 
                                "YellowTitle", "GreenTitle", 
                                "BlueTitle", "IndigoTitle", 
                                "VioletTitle", "RaspberryTitle"];

                let newdiv = document.createElement('div');
                    newdiv.id = titleText;
                    newdiv.innerHTML = titleText.toUpperCase();
                    newdiv.setAttribute("part", titleText);
                    this.#ATTACH_CLASS(tagObject, newdiv);
                    newdiv.classList.add(`${colours[this.count]}`);

                if (this.count === 7) {
                    this.count = 0;}
                else {
                    this.count += 1;
                };
                newdiv.addEventListener("mouseover", (event) => {
                    newdiv.innerHTML = stretchText.toUpperCase();
                    newdiv.contentEditable = true;
                });
                newdiv.addEventListener("mouseout", (e) => {
                    newdiv.innerHTML = titleText.toUpperCase();
                });
                container.append(newdiv);
            });
            return container;
        };
	};
    /**
     * FETCH SQUARES KEYS
     * @returns {Array}
     */
    #COUNT_CHUNKS() {
            return Object.keys(this.squares);    
    };

    // == DRAW == //
    /**
     * CREATE TITLES
     * @param {string} parentName 
     * @param {Array} keys 
     */
    #CREATE_ARC_TITLES(parentName, keys) {

        keys.forEach(entry => {
            let entryParent = this.activeStyle[entry].PARENT; 

            if (entryParent === parentName) {
                let hold = this.header[parentName];
                let num = hold.length;
                this.header[parentName][num] = entry;
            };
        });
    };
    /**
     * FIND ALL CHILDREN OF A GIVEN TAG
     * @param {string} TITLENAME 
     * @returns {Array}
     */
    #CHILD_SEARCH(TITLENAME) {
        let holdKeys = [];

        this.styleKeys.forEach(key => {
            if (this.activeStyle[key]["PARENT"] === TITLENAME) {
                holdKeys.push(key);
            }
        });

        return holdKeys;
    };
    /**
     * INSERT NESTED SUBTITLE IDS INTO HEADER ARRAY
     */
    #GENERATE_NESTED_TITLES() {

        let headerKeys = Object.keys(this.header);
 
        StyleLoop: for (let index = 1; index < this.styleKeys.length; index++) {
            let children = this.#CHILD_SEARCH(this.activeStyle[index.toString()]["NAME"]);

            HeaderLoop: for (let headerIndex = 0; headerIndex < headerKeys.length; headerIndex++) {
                
                if (this.header[headerKeys[headerIndex]].includes(index.toString())) {

                    let indi =  this.header[headerKeys[headerIndex]].indexOf(index.toString());
                    let arr = this.header[headerKeys[headerIndex]];

                    for (let testindex = 0; testindex < children.length; testindex++) {
                        arr.splice(indi + 1, 0, children[testindex]);
                        indi++
                    }

                    let newarr = [];
                    for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
                        if (!newarr.includes(arr[arrayIndex])) {
                            newarr.push(arr[arrayIndex]);
                        }
                    }
                    this.header[headerKeys[headerIndex]] = newarr;
                }
            }
        }

    };
    /**
     * FETCH ALL TITLES WITH NO PARENTS
     */
    #GENERATE_PARENTS() {
        this.styleKeys.forEach(entry => {

            let entryParent = this.activeStyle[entry].PARENT;
            if (entryParent === "NONE") {
                this.header[this.activeStyle[entry].NAME] = [entry];
                this.#CREATE_ARC_TITLES(this.activeStyle[entry].NAME, this.styleKeys);
            };
        });
    };
    /**
     * CREATE THE INTERNAL CRUMB BLOCKS
    */
    async DrawCrumbs() {
        this.activeCrumb.cells(this.#COUNT_CHUNKS());
    };
    async DrawTitles(ColContainer) {

        let headerKeys = Object.keys(this.header);
        let num = 0;

        headerKeys.forEach(piece => {

            let ids = this.header[piece];
        
            IdLoop: for (let index = 0; index < ids.length; index++) {
                try {
                    let tag = this.activeStyle[ids[index]];

                    if (tag["TYPE"] === "TITLE") {
                        let newTitle = document.createElement('jellyfish-titlebar');
                        newTitle.id = `tit${num}`;
                        ColContainer.appendChild(newTitle);
                        
                        let sha = this.shadows.getElementById(`tit${num}`).shadowRoot;
                        sha.getElementById('JELLYFISH_Wrapper-Title-Cat-Cell').innerHTML = this.activeStyle[ids[index]]["NAME"]
                    }
    
                    else if (tag["TYPE"] === "CRUMB") {
    
                        let newTitle = this.createCrumbs(ids[index]);
                        ColContainer.appendChild(newTitle);
                        this.activeCrumb.shadow();
                        this.activeCrumb.text();
                        this.activeCrumb.cells(this.#COUNT_CHUNKS());
                    }
                    num++;                    
                } catch (error) {
                    // TODO ERROR
                }

            }
        })
    };
}

export {Tracker};