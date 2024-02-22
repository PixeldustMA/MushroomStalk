import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../CONSOLE/PLATYPUS/create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Create Title Screen       //
// ================================= //

// == INSTANCES == //

const stalk = new Stalk();

// == VARIABLES == //
const Title = document.getElementById('TITLE_Section-Title');
const Belly = document.getElementById('TITLE_Section-Belly');
const Feet = document.getElementById('TITLE_Section-Feet');

// == DRAW PANELS == //
function drawTitlePanel() {

    // == CONTAINERS == //
    const wrapper = new create({
        tag: 'div',
        id: 'WRAPPER_Title-Title'
    }).init();
    
    // == TEXT == //
    let header = new create({
        tag: 'h1',
        id: 'HEADER_Title-Text',
        elementText: 'MUSHROOM STALK'
    }).init();

    // == ATTATCHMENTS == //
    wrapper.append(...[
        header
    ]);

    return wrapper;
}
function DrawBellyPanel() {

    // == CONTAINERS == //
    const wrapper = new create({
            tag: 'div',
            id: 'WRAPPER_Title-Title'
    }).init();

    // == BUTTONS == // 
    const changeUserButton = new create({
        tag: 'button',
        elementText: 'CHANGE USER',
        id: 'BUTTON_Title-ChangeUser'
    }).init();
    const settingsButton = new create({
        tag: 'button',
        elementText: 'SETTINGS',
        id: 'BUTTON_Title-Settings'
    }).init();
    const loadMapButton = new create({
        tag: 'button',
        elementText: 'MAP',
        id: 'BUTTON_Title-Map'
    }).init();
    const loadStalkButton = new create({
        tag: 'button',
        elementText: 'MAIN STALK',
        id: 'BUTTON_Title-MainStalk'
    }).init();

    loadStalkButton.addEventListener('click', (STALKEVENT) => {
        stalk.load('START');
    });
    loadMapButton.addEventListener('click', (MAPEVENT) => {
        stalk.load('MAP');
    });
    // == ATTATCHMENTS == //
    wrapper.append(...[
            changeUserButton,
            settingsButton,
            loadMapButton,
            loadStalkButton
    ]);
    
        return wrapper;
};
function DrawFeetPanel() {

    // == CONTAINERS == //
    const wrapper = new create({
        tag: 'div',
        id: 'WRAPPER_Title-Title'
    }).init();

    // == ATTATCHMENTS == //
    // wrapper.append(...[

    // ]);

    return wrapper;
};

// == MAIN FUNCTIONS == //
function DrawTitlePage() {

    Title.appendChild(drawTitlePanel());
    Belly.append(DrawBellyPanel());
    Feet.append(DrawFeetPanel());

}

// == RUN SCRIPTS == //

DrawTitlePage();