import Connector_Mycology from "../../../../CONSOLE/ARTERIES/Connector_Mycology.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

// ================================================ //
// ================================================ //
// ==                                            == //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                WELCOME                     == //
// ##                SPLASH                      ## //
// << ------------------------------------------ >> //
// ==       Create the splash screen             == //
// ==                                            == //
// ================================================ //
// ================================================ //

// =============== //
// ## INSTANCES ## //
// =============== //

const INSTANCE_Stalk = new Stalk();
await INSTANCE_Stalk.REQUEST_SESSION_PATHS();
// await INSTANCE_Stalk.REQUEST_SESSION_CUPBOARD()
// await INSTANCE_Stalk.REQUEST_SESSION_ROUTES();

// ============ //
// ## SET UP ## //
// ============ //

const TIME_TWO = 2000;
const TIME_Five = 5000;
const TIME_Five_Eight = 5800;

// ================ //
// ## RUN SCRIPT ## //
// ================ //

setTimeout(() => {
    document.body.classList.remove('SplashBackground');
    document.body.classList.add('SplashBackgroundTransition');
}, TIME_TWO);

setTimeout(() => {
    document.body.classList.remove('SplashBackgroundTransition');
    document.body.classList.add('SplashBackgroundEnd');

    setTimeout(() => {
        const INSTANCE_Mycology = new Connector_Mycology(INSTANCE_Stalk.SESSION);
        INSTANCE_Mycology.MYCOLOGY_CUPBOARD().then((RESULT)=> {
            INSTANCE_Stalk.CHECK_LOGIN().then((RES) => {
                return RES;
            });
            return RESULT})
    }, TIME_Five);
}, TIME_Five_Eight);

