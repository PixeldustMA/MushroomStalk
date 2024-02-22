
import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//       DRAW SPLASH SCREEN          //
// ================================= //

// == INSTANCES == //

const stalk = new Stalk();

// == RUN SCRIPT == //

setTimeout(() => {
    document.body.classList.remove('SplashBackground');
    document.body.classList.add('SplashBackgroundTransition');

}, 2000);
setTimeout(() => {
    document.body.classList.remove('SplashBackgroundTransition');
    document.body.classList.add('SplashBackgroundEnd');
    setTimeout(() => {
        stalk.checkLogin();
    }, 5000);
}, 5800);

