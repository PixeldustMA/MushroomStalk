import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//       DRAW SPLASH SCREEN          //
// ================================= //

// == INSTANCES == //
const stalk = new Stalk();

const titleBar = new create({
    tag: 'div',
    classes: ['draggable']
}).init();

document.body.appendChild(titleBar);

// == RUN SCRIPT == //
setTimeout(() => {
    document.body.classList.remove('SplashBackground');
    document.body.classList.add('SplashBackgroundTransition');
}, 2000);
setTimeout(() => {
    document.body.classList.remove('SplashBackgroundTransition');
    document.body.classList.add('SplashBackgroundEnd');
    setTimeout(() => {
        stalk.CHECK_LOGIN();
    }, 5000);
}, 5800);

