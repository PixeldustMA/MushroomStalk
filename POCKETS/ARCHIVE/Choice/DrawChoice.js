import { Character } from "../../../CONSOLE/CONTROLLERS/CharacterController.js";
import { Duck } from "../../../CONSOLE/CONTROLLERS/DuckController.js";
import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         CHOOSE A CHARACTER        //
//              TO UPDATE            //
// ================================= //

// == ELEMENTS == //

const SectionTitle =document.getElementById("CHOICE_Section-Title");
const SectionInput = document.getElementById("CHOICE_Section-Input");
const SectionDisplay = document.getElementById("CHOICE_Section-Display");

let characterLabel = new create({
    tag: 'label',
    id: 'CHOICE_Label-Character',
    elementText: 'Character'
}).init();
let InputName = new create({
    tag: 'input',
    id: 'CHOICE_Input-ChooseName'
}).init();
let InputCode = new create({
    tag: 'select',
    id: 'CHOICE_Select-ChooseCode',
    options: codeOptions
}).init();

// == INSTANCES == //
const stalk = new Stalk();
const Ducky = new Duck();

// == CODES == //
let codeOptions = await getMushroomCodes();
const isEmpty = str => !str.trim().length;

// == DRAW PANELS == //

/**
 *  CREATE TITE PANEL FOR CHOICE PAGE
 * @returns {HTMLElement} Panel
 */
function DrawTitlePanel() {

    // == WRAPPERS == //

    let wrapper = new create({
        tag: 'div',
        id: 'CHOICE_Wrapper-TitlePanel'
    }).init();

    // == TEXT == //

    let PageTitle = new create({
        tag: 'h1',
        id: 'CHOICE_Header-PageTitle',
        elementText: 'CHOOSE CHARACTER'
    }).init();
    // == ATTACHMENTS == //

    wrapper.append(...[
        PageTitle
    ]);

    return wrapper;
}
/**
 *  CREATE INPUT PANEL FOR CHOICE PAGE
 * @returns {HTMLElement} Panel
 */
function DrawInputPanel() {
    
        // == WRAPPERS == //

        let wrapper = new create({
            tag: 'div',
            id: 'CHOICE_Wrapper-TitlePanel'
        }).init();



        // == ATTACHMENTS == //
    
        wrapper.append(...[
            InputName,
            InputCode
        ]);
    
        return wrapper;

}
/**
 *  CREATE DISPLAY PANEL FOR CHOICE PAGE
 * @returns {HTMLElement} Panel
 */
function DrawDisplayPanel() {
    
    // == WRAPPERS == //

    let wrapper = new create({
        tag: 'div',
        id: 'CHOICE_Wrapper-TitlePanel'
    }).init();

    // == BUTTONS == //

    let submitButton = new create({
        tag: 'button',
        id: 'CHOICE_Button-Submit',
        elementText: 'SELECT'
    }).init();
    let loadCharacterButton = new create({
        tag: 'button',
        id: 'CHOICE_Button-LoadCharacter',
        elementText: 'LOAD'
    }).init();

    submitButton.addEventListener('click', (event) => {
        getText();
    });
    loadCharacterButton.addEventListener('click', (event) => {

        const first = InputName.value.split(" ")[0]
        const last = InputName.value.split(" ")[1]

        const character = new Character(first, last);
        character.buildAPerson();
        character.savePerson();
        stalk.load("ARCHIVEUPDATE");
    });

    // == ATTACHMENTS == //

    wrapper.append(...[
        submitButton,
        characterLabel,
        loadCharacterButton
    ]);

    return wrapper;

}
/**
 *  ATTACH PANELS TO THE PAGE
 */
function DrawChoicePage() {

    SectionTitle.append(DrawTitlePanel());
    SectionInput.append(DrawInputPanel());
    SectionDisplay.append(DrawDisplayPanel());

}

// == FUNCTIONALITY == //
/**
 *  GET MUSHROM CODE FOR CHARACTER
 * @returns {Promise<Array>} ARRAY OF CODES
 */
async function getMushroomCodes() {
    let codeList = await Ducky.fetchMushrooms();
    let codes = []
    codeList.forEach((row) => {
        codes.push(row['Mushroom-Code'])
    });
    return codes;
}
/**
 * CREATE TEXT STRING FOR LABEL
 */
function getText() {

    let result = [];

    if( !isEmpty(InputName.value) ) {

        result.push(InputName.value);

    }

    if (InputCode.value > 2) {

        result.push(InputCode.options[InputCode.selectedIndex].text);
    }

    console.log(result)
    if (result.length === 1) {
        characterLabel.innerHTML = result;
    }
    else {
        characterLabel.innerHTML = "Only One Character Can Be Chosen";
    }

}
// == RUN SCRIPT == //

DrawChoicePage();

