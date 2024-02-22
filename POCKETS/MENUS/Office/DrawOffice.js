import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Office Screen     //
// ================================= //

// == SECTIONS == //
const ButtonPanel = document.getElementById("SECTION_Office-Buttons");

// == INSTANCES == //
const mushroom = new Stalk();

// == DRAW PANELS == //
function drawButtonPanel() {

    // == WRAPPERS == //
    const wrapper = new create({
        tag: 'div',
        id: 'WRAPPER_Office-Wrapper'
    }).init();

    // == BUTTONS == //
    const buttonJobGenerator = new create({
        tag: 'button',
        id: 'BUTTON_Office-JobGenerator',
        elementText: 'JOB GENERATOR'
    }).init();
    const buttonPixelPage = new create({
        tag: 'button',
        id: 'BUTTON_Office-PixelPage',
        elementText: 'PIXEL PAGE'
    }).init();
    const buttonTvTracker = new create({
        tag: 'button',
        id: 'BUTTON_Office-TVTracker',
        elementText: 'TV TRACKER'
    }).init();
    const buttonMumblies = new create({
        tag: 'button',
        id: 'BUTTON_Office-Mumblies',
        elementText: 'MUMBLIES'
    }).init();
    const buttonWheel = new create({
        tag: 'button',
        id: 'BUTTON_Office-Wheel',
        elementText: 'WHEEL'
    }).init();

    buttonJobGenerator.addEventListener('click', (OPEN) => {
        console.log("JOB GENERATION UNDER CONSTRUCTION");
        window.location.href = "../../GENERATOR/FrameworkGenerator.html";
    })
    buttonPixelPage.addEventListener('click', (OPEN) => {
        mushroom.load("PIXELPAGE")
    });
    buttonTvTracker.addEventListener('click', (OPEN) => {
        mushroom.load("TVTRACKER")
    });
    buttonMumblies.addEventListener('click', (OPEN) => {
        mushroom.load("MUMBLIES")
    });   
    buttonWheel.addEventListener('click', (OPEN) => {
        mushroom.load("WHEEL")
    });   

    // == ATTACHMENTS == //
    wrapper.append(...[
        buttonJobGenerator,
        buttonPixelPage,
        buttonTvTracker,
        buttonMumblies,
        buttonWheel
    ])

    return wrapper;
}

function drawOffice() {
    ButtonPanel.append(drawButtonPanel());
}


// == RUN SCRIPT == //

drawOffice();
