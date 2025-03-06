import Connector_Beetle from "../../../CONSOLE/ARTERIES/Connector_Beetle.js";
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

const INSTANCE_Stalk = new Stalk();
await INSTANCE_Stalk.REMEMBER();
const INSTANCE_Beetle = new Connector_Beetle({
    BEETLE_CONFIG_MODE: 'DEBUG',
    BEETLE_CONFIG_DAISY_MODE: 'FUNCTION',
    BEETLE_CONFIG_TYPE: 'STANDARD',
    BEETLE_CONFIG_CATEGORY: 'WELCOME',
    BEETLE_CONFIG_LOCATION: 'DrawSplash.js',
    BEETLE_CONFIG_SCRIPT: 'SPLASH',
    BEETLE_CONFIG_TEXT: 'OPENING APP!'
})

// ============ //
// ## SET UP ## //
// ============ //

await INSTANCE_Beetle.READ_MODE();
const TIME_TWO = 2000;
const TIME_Five = 5000;
const TIME_Five_Eight = 5800;

// ================ //
// ## RUN SCRIPT ## //
// ================ //

setTimeout(() => {

    INSTANCE_Beetle.DAISY_MODE = 'TIME';
    INSTANCE_Beetle.DAISY_TIME = TIME_TWO;
    INSTANCE_Beetle.DAISY_TEXT = 'BEGINNING SPLASH BACKGROUND TRANSITION';
    INSTANCE_Beetle.READ_MODE().then((BEETLE_RESULT) => {BEETLE_RESULT});

    document.body.classList.remove('SplashBackground');
    document.body.classList.add('SplashBackgroundTransition');
}, TIME_TWO);
setTimeout(() => {

    INSTANCE_Beetle.DAISY_MODE = 'TIME';
    INSTANCE_Beetle.DAISY_TIME = TIME_Five_Eight;
    INSTANCE_Beetle.DAISY_TEXT = 'ENDING SPLASH BACKGROUND TRANSITION';
    INSTANCE_Beetle.READ_MODE().then((BEETLE_RESULT) => {BEETLE_RESULT});

    document.body.classList.remove('SplashBackgroundTransition');
    document.body.classList.add('SplashBackgroundEnd');
    setTimeout(() => {
        INSTANCE_Beetle.DAISY_MODE = 'TIME';
        INSTANCE_Beetle.DAISY_TIME = TIME_Five;
        INSTANCE_Beetle.DAISY_TEXT = 'EMPTY INTERVAL';
        INSTANCE_Beetle.READ_MODE().then((BEETLE_RESULT) => {BEETLE_RESULT});

        INSTANCE_Stalk.CHECK_LOGIN();
    }, TIME_Five);
}, TIME_Five_Eight);

