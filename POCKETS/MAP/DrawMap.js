import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Map Screen         //
// ================================= //

// == VARIABLES == //
const Title = document.getElementById("MAP_Section-Title");
const Belly = document.getElementById("MAP_Section-Belly");
const Feet = document.getElementById("MAP_Section-Feet");

// == INSTANCES == //

const stalk = new Stalk();

// == DRAW PANELS == //
function DrawTitlePanel() {

    // == WRAPPERS == //

    const wrapper = new create({
        tag: 'div',
        id: 'MAP_Title-Wrapper'
    }).init();

    // == TEXT == //

    let header = new create({
        tag: 'h1',
        id: 'MAP_Title-Header',
        elementText: 'MAP'
    }).init();

    // == ATTACHMENT == //
    wrapper.append(...[
        header
    ]);
    return wrapper;
}
function DrawBellyPanel() {

    // == WRAPPERS == //

    const wrapper = new create({
        tag: 'div',
        id: 'MAP_Title-Wrapper'
    }).init();

    // == BUTTONS == //
    let mainStalkButton = new create({
        tag: 'button',
        id: 'MAP_Button-MainStalk',
        elementText: 'MAIN STALK'
    }).init();
    // BOOK STUFF
    let libraryButton = new create({
        tag: 'button',
        id: 'MAP_Button-Library',
        elementText: 'LIBRARY'      
    }).init();
    // GIZMOS
    let officeButton = new create({
        tag: 'button',
        id: 'MAP_Button-Office',
        elementText: 'OFFICE'      
    }).init();
    // GAMES
    let cupboardButton = new create({
        tag: 'button',
        id: 'MAP_Button-Game',
        elementText: 'CUPBOARD'      
    }).init();
    let sunflowerButton = new create({
        tag: 'button',
        id: 'MAP_Button-Sunflower',
        elementText: 'SUNFLOWER'      
    }).init();

    // == LISTENERS == //

    mainStalkButton.addEventListener('click', (MAINSTALK) => {
        stalk.load('START');
    });
    libraryButton.addEventListener('click', (LIBRARY) => {
        stalk.load('LIBRARY');
    });
    officeButton.addEventListener('click', (OFFICE) => {
        stalk.load('OFFICE');
    });
    cupboardButton.addEventListener('click', (CUPBOARD) => {
        stalk.load('CUPBOARD');
    });
    sunflowerButton.addEventListener('click', (SUNFLOWER) => {
        stalk.load('SUNFLOWER');
    });

    // == ATTACHMENT == //
    wrapper.append(...[
        mainStalkButton,
        libraryButton,
        officeButton,
        cupboardButton,
        sunflowerButton
    ]);
    return wrapper;
};
function DrawFeetPanel() {

    // == WRAPPERS == //

    const wrapper = new create({
        tag: 'div',
        id: 'MAP_Title-Wrapper'
    }).init();


    // == ATTACHMENT == //
    // wrapper.append(...[

    // ]);
    return wrapper;
};
function DrawMap() {
    Title.append(DrawTitlePanel());
    Belly.append(DrawBellyPanel());
    Feet.append(DrawFeetPanel());
};

// == RUN PAGE == //
DrawMap();