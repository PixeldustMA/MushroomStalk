import { Character } from "../../../CONSOLE/CONTROLLERS/CharacterController.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Update Archive            //
// ================================= //

// == SECTIONS == //
const Title = document.getElementById('UPDATE_Section-Title');
const Belly = document.getElementById('UPDATE_Section-Belly');
const Base = document.getElementById('UPDATE_Section-Base');
const CHARACTER = new Character("Romella", "Kessiyara");

function DrawTitlePanel() {

    // == WRAPPER == //

    const wrapper = new create({
        tag: 'div',
        id: 'UPDATE_Wrapper-Title'
    }).init();

    // == TITLES == //

    const title = new create({
        tag: 'h1',
        elementText: 'UPDATE SCREEN',
        id: 'UPDATE_Header-Title'
    }).init();

    // == ATTACHMENTTS == //
    wrapper.append(...[
        title
    ])

    return wrapper
}

function DrawBelly() {

    // == WRAPPER == //
    const wrapper = new create({
        tag: 'div',
        id: 'UPDATE_Wrapper-Title'
    }).init();
    const activityMisc = new create({
        tag: 'button',
        id: 'UPDATE_Button-Employment',
        elementText: 'ACTIVITY MISC'
    }).init();
    const activityMiscInput = new create({
        tag: 'input',
        id: 'UPDATE_Input_Activity'
    }).init();

    activityMisc.addEventListener('click', (event) => {
        console.log(activityMiscInput.value)
        CHARACTER.update('ACTIVITY-MISC', activityMiscInput.value)
        // INSERT VALUE INTO DATABASE WITH ACTIVE CHAR ACTIVITY CODE
    })
    // == ATTACHMENTTS == //
    wrapper.append(...[
        activityMisc,
        activityMiscInput
    ]);

    return wrapper;
}

function DrawPanels() {

    Title.append(DrawTitlePanel());
    Belly.append(DrawBelly());
}

// == RUN SCRIPT == //

DrawPanels();

const character = new Character("Romella", "Kessiyara");
const x = await character.buildAPerson();
console.log(x)