import Connector_Mycology from "../../../CONSOLE/ARTERIES/Connector_Mycology.js";
import Stalk from "../../../CONSOLE/LUNGS/Stalk.js";

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

// Set up Instances //
const INSTANCE_Stalk = new Stalk();

// Set up necessary memory session //
await INSTANCE_Stalk.REQUEST_SESSION_PATHS();
await INSTANCE_Stalk.REQUEST_SESSION_ROUTES();
await INSTANCE_Stalk.REQUEST_SESSION_TEMPLATES();

// ============ //
// ## SET UP ## //
// ============ //

// Hold the magic numbers here //
const TIME_TWO = 2000;
const TIME_Five = 5000;
const TIME_Five_Eight = 5800;

// ================ //
// ## RUN SCRIPT ## //
// ================ //

// Animate the background of the screen //
setTimeout(() => {
    document.body.classList.remove('SplashBackground');
    document.body.classList.add('SplashBackgroundTransition');
}, TIME_TWO);

// End the animation, run file validation and load the next screen //
setTimeout(() => {
    // Change the background //
    document.body.classList.remove('SplashBackgroundTransition');
    document.body.classList.add('SplashBackgroundEnd');

    //Change the page //
    setTimeout(() => {
        // Mycology app //
        const INSTANCE_Mycology = new Connector_Mycology(INSTANCE_Stalk.SESSION);
        INSTANCE_Mycology.MYCOLOGY_CUPBOARD().then((RESULT)=> {
            
            INSTANCE_Stalk.CHECK_LOGIN().then((RES) => {
                return RES;
            });
            return RESULT})

        // Load next page //
        
    }, TIME_Five);
}, TIME_Five_Eight);

