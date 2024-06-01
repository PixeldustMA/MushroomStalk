import { create } from "../../../../../CONSOLE/PLATYPUS/Create.js";
import { Panels_Explore } from "../../../PANELS/Panels_Explore.js";
import { Food } from "../CONSOLE/Food.js";

class Panel_Food {

    constructor() {
        this.Flavours = [];
        this.FoodTypes = [];
        this.TypeObject = {};
        this.foodInstance = new Food(); 

        this.FoodName = "";
        this.ingredients = "";
        this.itemFlavour = "";
        this.foodType = "";
        this.foodDescription = "";
        this.planetFood = "";

        this.listIngredients = "";
        this.PlanetFoods = "";
    };

    // == INPUTS == //
    PANEL_INPUT_ITEM() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const labelName = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "NAME"]
        }).init();
        const labelIngredients = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "INGREDIENT"]
        }).init();
        const labelFlavour = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "FLAVOUR"]
        }).init();
        const labelType = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "TYPE"]
        }).init();
        const labelTextBox = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "DESCRIPTION"]
        }).init();

        // == INPUT == //
        const inputName = new create({
            tag: 'input',
            placeholder: ["FOOD", "PLACEHOLDER", "NAME"]
        }).init();
        const inputIngredients = new create({
            tag: 'input',
            placeholder: ["FOOD", "PLACEHOLDER", "INGREDIENT"]
        }).init();

        // == SELECT == //
        const selectFlavour = new create({
            tag: 'select',
            options: this.Flavours
        }).init();
        const selectType = new create({
            tag: 'select',
            options: this.FoodTypes
        }).init();

        // == TEXT BOXES == //
        const textboxDescription = new create({
            tag: 'textarea'
        }).init();

        // == BUTTON == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            const foodItemName = inputName.value;
            const foodItemFlavour = selectFlavour.options[selectFlavour.selectedIndex].text;
            const foodItemType = selectType.options[selectType.selectedIndex].text;
            const foodItemIngredients = inputIngredients.value.split(',');
            const foodItemOriginSelect = this.planetPanel.planetBox;
            const planetName = foodItemOriginSelect.options[foodItemOriginSelect.selectedIndex].text;
            this.foodInstance.GENERATE_FOOD(foodItemName, foodItemFlavour, foodItemType, foodItemIngredients, planetName)
                .then((FOOD) => {return FOOD});
        });

        // == ATTACHMENTS == //
        wrapperItem.append(...[

            labelName,
            inputName,

            labelIngredients,
            inputIngredients,

            labelFlavour,
            selectFlavour,

            labelType,
            selectType,

            labelTextBox,
            textboxDescription,

            this.planet,
            buttonSubmit

        ]);
        return wrapperItem;
    };
    PANEL_INPUT_TYPE() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();
        const wrapperDisplay = new create({
            tag: 'div'
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'dl'
        }).init();
        console.log(this.TypeObject)
        let lists = this.GENERATE_LISTS(this.TypeObject, listDisplay);

        // == TEXT == //
        const labelName = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "NAME"]
        }).init();
        const labelTextBox = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "DESCRIPTION"]
        }).init();

        // == INPUTS == //
        const inputName = new create({
            tag: 'input',
            placeholder: ["FOOD", "PLACEHOLDER", "NAME"]
        }).init();

        // == TEXT BOXES == //
        const textboxDescription = new create({
            tag: 'textarea'
        }).init();

        // == BUTTON == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            const typeName = inputName.value;
            const typeDescription = textboxDescription.value;
            this.foodInstance.GENERATE_TYPE(typeName, typeDescription).then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapperDisplay.append(listDisplay);
        wrapperItem.append(...[

            labelName,
            inputName,

            labelTextBox,
            textboxDescription,

            buttonSubmit
        ]);
        return wrapperItem;
    };
    PANEL_INPUT_FLAVOUR() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();
        const wrapperDisplay = new create({
            tag: 'div'
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'dl'
        }).init();
        let lists = this.GENERATE_LISTS(this.FlavourObject, listDisplay);

        // == TEXT == //
        const labelName = new create({
            tag: 'label',
            elementText: ["FOOD", "LABELS", "NAME"]
        }).init();

        // == INPUTS == //
        const inputName = new create({
            tag: 'input',
            placeholder: ["FOOD", "PLACEHOLDER", "NAME"]
        }).init();

        // == BUTTON == //
        const buttonSubmit = new create({
            tag: 'button',
            elementText: ['USEFUL', 'GENERAL', 'SUBMIT']
        }).init();

        // == LISTENERS == //
        buttonSubmit.addEventListener('click', (event) => {
            this.foodInstance.GENERATE_FLAVOUR(inputName.value).then((RESULT) => {return RESULT});
        });

        // == ATTACHMENTS == //
        wrapperDisplay.append(listDisplay);
        wrapperItem.append(...[

            labelName,
            inputName,

            buttonSubmit
        ]);
        return wrapperItem;
    };

    // == DISPLAY == //
    PANEL_DISPLAY_ITEM() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();

        // == TEXT == //
        const labelName = new create({
            tag: 'label',
            customText: this.FoodName
        }).init();
        const labelType = new create({
            tag: 'label',
            customText: this.foodType
        }).init();
        const labelFlavour = new create({
            tag: 'label',
            customText: this.itemFlavour
        }).init();
        const labelDescription = new create({
            tag: 'p',
            customText: this.foodDescription
        }).init();
        const labelPlanet = new create({
            tag: 'label',
            customText: this.planetFood
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'ul'
        }).init();

        // == ATTACHMENTS == //
        wrapperItem.append(...[
            labelName,
            labelType,
            labelFlavour,
            labelDescription,
            labelPlanet,
            listDisplay
        ]);
        return wrapperItem;
    };
    PANEL_DISPLAY_TYPE() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'dl'
        }).init();
        this.GENERATE_LISTS(this.TypeObject, listDisplay);

        // == ATTACHMENTS == //
        wrapperItem.append(...[
            listDisplay
        ]);
        return wrapperItem;
    };
    PANEL_DISPLAY_FLAVOUR() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();

        // == LISTS == //
        const listDisplay = new create({
            tag: 'dl'
        }).init();
        let lists = this.GENERATE_SIMPLE_LISTS(this.Flavours, listDisplay);

        // == ATTACHMENTS == //
        wrapperItem.append(...[
            listDisplay
        ]);
        return wrapperItem;
    };
    PANEL_DISPLAY_PLANETS() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();
        const wrapperAlphabet = new create({
            tag: 'div'
        }).init();
        const wrapperRowOne = new create({
            tag: 'div'
        }).init();
        const wrapperRowTwo = new create({
            tag: 'div'
        }).init();
        const wrapperRowThree = new create({
            tag: 'div'
        }).init();
        const wrapperRowFour = new create({
            tag: 'div'
        }).init();
        const wrapperRowFive = new create({
            tag: 'div'
        }).init();
        const wrapperDisplay = new create({
            tag: 'div'
        }).init();

        // == BUTTONS == //
        const buttonA = new create({
            tag: 'button',
            customText: 'A'
        }).init();
        const buttonB = new create({
            tag: 'button',
            customText: 'B'
        }).init();
        const buttonC = new create({
            tag: 'button',
            customText: 'C'
        }).init();
        const buttonD = new create({
            tag: 'button',
            customText: 'D'
        }).init();
        const buttonE = new create({
            tag: 'button',
            customText: 'E'
        }).init();

        const buttonF = new create({
            tag: 'button',
            customText: 'F'
        }).init();
        const buttonG = new create({
            tag: 'button',
            customText: 'G'
        }).init();
        const buttonH = new create({
            tag: 'button',
            customText: 'H'
        }).init();
        const buttonI = new create({
            tag: 'button',
            customText: 'I'
        }).init();
        const buttonJ = new create({
            tag: 'button',
            customText: 'J'
        }).init();

        const buttonK = new create({
            tag: 'button',
            customText: 'K'
        }).init();
        const buttonL = new create({
            tag: 'button',
            customText: 'L'
        }).init();
        const buttonM = new create({
            tag: 'button',
            customText: 'M'
        }).init();
        const buttonN = new create({
            tag: 'button',
            customText: 'N'
        }).init();
        const buttonO = new create({
            tag: 'button',
            customText: 'O'
        }).init();

        const buttonP = new create({
            tag: 'button',
            customText: 'P'
        }).init();
        const buttonQ = new create({
            tag: 'button',
            customText: 'Q'
        }).init();
        const buttonR = new create({
            tag: 'button',
            customText: 'R'
        }).init();
        const buttonS = new create({
            tag: 'button',
            customText: 'S'
        }).init();
        const buttonT = new create({
            tag: 'button',
            customText: 'T'
        }).init();

        const buttonU = new create({
            tag: 'button',
            customText: 'U'
        }).init();
        const buttonV = new create({
            tag: 'button',
            customText: 'V'
        }).init();
        const buttonW = new create({
            tag: 'button',
            customText: 'W'
        }).init();
        const buttonX = new create({
            tag: 'button',
            customText: 'X'
        }).init();
        const buttonY = new create({
            tag: 'button',
            customText: 'Y'
        }).init();
        const buttonZ = new create({
            tag: 'button',
            customText: 'Z'
        }).init();

        // == LISTENERS == //
        buttonA.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_A, wrapperDisplay);
        });
        buttonB.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_B, wrapperDisplay);
        });
        buttonC.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            wrapperDisplay.replaceChildren();;
            this.GENERATE_LISTS(this.letter_C, wrapperDisplay)
        });
        buttonD.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_D, wrapperDisplay)
        });
        buttonE.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_E, wrapperDisplay)
        });

        buttonF.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_F, wrapperDisplay)
        });
        buttonG.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_G, wrapperDisplay)
        });
        buttonH.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_H, wrapperDisplay)
        });
        buttonI.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_I, wrapperDisplay)
        });
        buttonJ.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_J, wrapperDisplay)
        });

        buttonK.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_K, wrapperDisplay)
        });
        buttonL.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_L, wrapperDisplay)
        });
        buttonM.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_M, wrapperDisplay)
        });
        buttonN.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_N, wrapperDisplay)
        });
        buttonO.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_O, wrapperDisplay)
        });

        buttonP.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_P, wrapperDisplay)
        });
        buttonQ.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_Q, wrapperDisplay)
        });
        buttonR.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_R, wrapperDisplay)
        });
        buttonS.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_S, wrapperDisplay)
        });
        buttonT.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_T, wrapperDisplay)
        });

        buttonU.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_U, wrapperDisplay)
        });
        buttonV.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_V, wrapperDisplay)
        });
        buttonW.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_W, wrapperDisplay)
        });
        buttonX.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_X, wrapperDisplay)
        });
        buttonY.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_Y, wrapperDisplay)
        });
        buttonZ.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            this.GENERATE_LISTS(this.letter_Z, wrapperDisplay)
        });

        // == ATTACHMENTS == //
        wrapperRowOne.append(...[
            buttonA,
            buttonB,
            buttonC,
            buttonD,
            buttonE
        ]);
        wrapperRowTwo.append(...[
            buttonF,
            buttonG,
            buttonH,
            buttonI,
            buttonJ
        ]);
        wrapperRowTwo.append(...[
            buttonK,
            buttonL,
            buttonM,
            buttonN,
            buttonO
        ]);
        wrapperRowThree.append(...[
            buttonP,
            buttonQ,
            buttonR,
            buttonS,
            buttonT
        ]);
        wrapperRowFour.append(...[
            buttonU,
            buttonV,
            buttonW,
            buttonX,
            buttonY
        ]);
        wrapperRowFive.append(...[
            buttonZ
        ]);
        wrapperAlphabet.append(...[
            wrapperRowOne,
            wrapperRowTwo,
            wrapperRowThree,
            wrapperRowFour,
            wrapperRowFive
        ]);
        wrapperItem.append(...[
            wrapperAlphabet,
            wrapperDisplay
        ]);
        return wrapperItem;
    }

    // == SEARCH == //
    PANEL_SEARCH_ITEM() {

        // == WRAPPERS == //
        const wrapperItem = new create({
            tag: 'div'
        }).init();
        const wrapperDisplay = new create({
            tag: 'div'
        }).init();
        const wrapperbutton  = new create({
            tag: 'div'
        }).init();
        const wrapperResults = new create({
            tag: 'div'
        }).init();

        // == RADIO == //
        const radioName = new create({
            tag: 'input',
            type: 'radio',
            boxName: 'SEARCH TYPE'
        }).init();
        const radioType = new create({
            tag: 'input',
            type: 'radio',
            boxName: 'SEARCH TYPE'
        }).init();
        const radioFlavour = new create({
            tag: 'input',
            type: 'radio',
            boxName: 'SEARCH TYPE'
        }).init();
        const radioPlanet = new create({
            tag: 'input',
            type: 'radio',
            boxName: 'SEARCH TYPE'
        }).init();

        // == SELECT == //
        const selectByName = new create({
            tag: 'select',
            options: this.listIngredients
        }).init();
        const selectByType = new create({
            tag: 'select',
            options: this.FoodTypes 
        }).init();
        const selectByFlavour = new create({
            tag: 'select',
            options: this.Flavours
        }).init();

        // == BUTTONS == //
        const buttonChange = new create({
            tag: 'button',
            customText: 'CHANGE SEARCH'
        }).init();
        const searchButtonName = new create({
            tag: 'button',
            customText: 'SEARCH!'
        }).init();
        const searchButtonType = new create({
            tag: 'button',
            customText: 'SEARCH!'
        }).init();
        const searchButtonPlanet = new create({
            tag: 'button',
            customText: 'SEARCH!'
        }).init();
        const searchButtonFlavour = new create({
            tag: 'button',
            customText: 'SEARCH FLAVOUR!'
        }).init();

        // == LISTENERS == //
        buttonChange.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            wrapperDisplay.append(...[
                radioName,
                radioType,
                radioFlavour,
                radioPlanet
            ]);
            wrapperbutton.append(...[
                radioName,
                radioType,
                radioFlavour,
                radioPlanet,
            ]);
        });
        radioType.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            wrapperbutton.replaceChildren();
            wrapperDisplay.append(...[
                buttonChange,
                selectByType,
                searchButtonType
            ]);
        });
        radioPlanet.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            wrapperbutton.replaceChildren();
            wrapperDisplay.append(...[
                buttonChange,
                this.planet ,
                searchButtonPlanet
            ]);
        });
        radioFlavour.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            wrapperbutton.replaceChildren();
            wrapperDisplay.append(...[
                buttonChange,
                selectByFlavour,
                searchButtonFlavour
            ]);
        });
        radioName.addEventListener('click', (event) => {
            wrapperDisplay.replaceChildren();
            wrapperbutton.replaceChildren();
            wrapperDisplay.append(...[
                buttonChange,
                selectByName,
                searchButtonName
            ]);
        });
        searchButtonName.addEventListener('click', (event) => {
            let nameValue = selectByName.options[selectByName.selectedIndex].text;
            this.SET_UP_DISPLAY(nameValue).then((RES) => {
                wrapperResults.append(this.PANEL_DISPLAY_ITEM());
            });
        });
        searchButtonFlavour.addEventListener('click', (event) => {
            let flavourName = selectByFlavour.options[selectByFlavour.selectedIndex].text
            this.foodInstance.SEARCH_ITEM_BY_FLAVOUR(flavourName).then((RESULT) => {
                console.log(RESULT)
                for (let itemIndex = 0; itemIndex < RESULT.length; itemIndex++) {
                    const item = RESULT[itemIndex];
                    const para = new create({
                        tag: 'p',
                        customText: item
                    }).init();
                    console.log(para)
                    wrapperResults.append(para);
                };
            });
        });
        searchButtonType.addEventListener('click', (event) => {
            let typeeName = selectByType.options[selectByType.selectedIndex].text
            this.foodInstance.SEARCH_ITEM_BY_TYPE(typeeName).then((RESULT) => {
                for (let itemIndex = 0; itemIndex < RESULT.length; itemIndex++) {
                    const item = RESULT[itemIndex];
                    const para = new create({
                        tag: 'p',
                        customText: item
                    }).init();
                    wrapperResults.append(para);
                };
            });
        });
        searchButtonPlanet.addEventListener('click', (event) => {
            this.foodInstance.SEARCH_FOOD_BY_PLANET(this.planetPanel.planetBox.options[this.planetPanel.planetBox.selectedIndex].text)
                .then((RESULT) => {
                    let foodArray = RESULT.FOOD_NAMES;
                    foodArray.forEach(PLANET => {
                        let newItem = new create({
                            tag: 'p',
                            customText: PLANET
                        }).init();
                        wrapperResults.append(newItem);
                    });
                });
        })

         // == ATTACHMENTS == //
        wrapperbutton.append(...[
            radioName,
            radioType,
            radioFlavour,
            radioPlanet,
        ]);
        wrapperItem.append(...[
            wrapperbutton,
            wrapperDisplay,
            wrapperResults
        ]);
        return wrapperItem;
    };

    // == GENERATION == //
    GENERATE_LISTS(tags, element) {
        if (tags === undefined) {
            return element;
        }
        let titles = Object.keys(tags);
        titles.forEach(key => {
            let header = new create({
                tag: 'dt'
            }).init();
            header.innerHTML = key;
            let child = new create({
                tag: 'dd'
            }).init();
            console.log(key);
            child.innerHTML = tags[key];
            element.append(...[header, child])
        });
        return element;
    };
    GENERATE_SIMPLE_LISTS(tags, element) {
        tags.forEach(key => {
            let list = new create({
                tag: 'li',
                customText: key
            }).init();
            element.append(...[list])
        });
        return element;
    };
    async SET_UP_DISPLAY(itemName) {
        if (itemName !== "NONE") {
            
            console.log(itemName); 
            let itemFile = await this.foodInstance.READ_FOOD_ITEM(itemName);
            let descriptionFile = await this.foodInstance.READ_DESCRIPTION(itemName);

            this.FoodName = itemFile.NAME;
            this.ingredients = itemFile.INGREDIENTS;
            this.itemFlavour = itemFile.FLAVOUR;
            this.foodType = itemFile.TYPE;
            this.foodDescription = descriptionFile;
            this.planetFood = itemFile.PLANETS;
        };
    };
    async INITIALISE() {
        this.Flavours =  Object.keys(await this.foodInstance.READ_FLAVOURS());
        this.FoodTypes = Object.keys(await this.foodInstance.READ_TYPES());
        this.FoodTypes.forEach(TYPE => {
            this.foodInstance.READ_DESCRIPTION(TYPE)
                .then((RESULT) => {
                    try {
                        this.TypeObject[TYPE] = RESULT;
                        return this.TypeObject;                      
                    } catch (error) {};
                });
        });
        this.listIngredients = Object.keys(await this.foodInstance.READ_ALL());
        this.planetPanel = new Panels_Explore('PLANET_SINGLE');
        this.planet =  await this.planetPanel.CHOOSE_PLANET();

        this.letter_A = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('A');
        this.letter_B = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('B');
        this.letter_C = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('C');
        this.letter_D = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('D');
        this.letter_E = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('E');

        this.letter_F = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('F');
        this.letter_G = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('G');
        this.letter_H = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('H');
        this.letter_I = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('I');
        this.letter_J = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('J');
        
        this.letter_K = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('K');
        this.letter_L = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('L');
        this.letter_M = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('M');
        this.letter_N = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('N');
        this.letter_O = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('O');
        
        this.letter_P = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('P');
        this.letter_Q = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('Q');
        this.letter_R = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('R');
        this.letter_S = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('S');
        this.letter_T = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('T');
        
        this.letter_U = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('U');
        this.letter_V = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('V');
        this.letter_W = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('W');
        this.letter_X = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('X');
        this.letter_Y = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('Y');
        this.letter_Z = await this.foodInstance.SEARCH_FOOD_ALPHABETICAL('Z');
        
    };
}

export {Panel_Food};