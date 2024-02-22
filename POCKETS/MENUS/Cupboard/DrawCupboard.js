import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Cupboard Screen     //
// ================================= //

// == SECTIONS == //

const ButtonPanel = document.getElementById("SECTION_Cupboard-Buttons");
const mushroom = new Stalk();

function drawButtonPanel() {
    

    // == WRAPPERS == //
    const wrapper = new create({
        tag: 'div',
        id: 'WRAPPER_Cupboard-Wrapper'
    }).init();

    // == BUTTONS == //
    const buttonPickle = new create({
        tag: 'button',
        id: 'BUTTON_Cupboard-Pickle',
        elementText: 'PICKLE'
    }).init();

    buttonPickle.addEventListener('click', (OPEN) => {
        mushroom.load("PICKLE")
    })
    // == ATTACHMENTS == //
    wrapper.append(...[
        buttonPickle
    ])

    return wrapper;
}

function drawCupboard() {
    ButtonPanel.append(drawButtonPanel());
}


// == RUN SCRIPT == //

drawCupboard();
