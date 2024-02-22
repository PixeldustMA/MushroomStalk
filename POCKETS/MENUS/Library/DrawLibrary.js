import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Library Screen     //
// ================================= //

// == SECTIONS == //

const ButtonPanel = document.getElementById("SECTION_Library-Buttons");

// == INSTANCES == //
const mushroom = new Stalk();

// == DRAW PANELS == //
function drawButtonPanel() {

    // == WRAPPERS == //
    const wrapper = new create({
        tag: 'div',
        id: 'WRAPPER_Library-Wrapper'
    }).init();

    // == BUTTONS == //
    const buttonHotAirBalloon = new create({
        tag: 'button',
        id: 'BUTTON_Library-HotAirBalloon',
        elementText: 'HOT AIR BALLOON'
    }).init();
    const buttonSquirrel = new create({
        tag: 'button',
        id: 'BUTTON_Library-Squirrel',
        elementText: 'SQUIRREL'
    }).init();
    const buttonArchive = new create({
        tag: 'button',
        id: 'BUTTON_Library-Archive',
        elementText: 'ARCHIVE'
    }).init();

    buttonHotAirBalloon.addEventListener('click', (OPEN) => {
        mushroom.load("BALLOONS");
    });
    buttonSquirrel.addEventListener('click', (OPEN) => {
        mushroom.load("SQUIRREL");
    });
    buttonArchive.addEventListener('click', (OPEN) => {
        mushroom.load("ARCHIVE");
    });

    // == ATTACHMENTS == //
    wrapper.append(...[
        buttonHotAirBalloon,
        buttonSquirrel,
        buttonArchive
    ])

    return wrapper;
}

function drawLibrary() {
    ButtonPanel.append(drawButtonPanel());
}


// == RUN SCRIPT == //

drawLibrary();
