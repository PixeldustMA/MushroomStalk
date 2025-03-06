export default class M_Pockets {

    constructor(){};

    WELCOME() {
        return {
            "SPLASH": "../WELCOME/SPLASH/FrameworkSplash.html",
            "WELCOME": "../WELCOME/FrameworkWelcome.html",
            "WIZARD": "../WELCOME/FrameworkWizard.html",
            "TITLE": "../TITLE/FrameworkTitle.html",
            "MAP": "../MAP/FrameworkMap.html"
        }
    };
    INITIALISE() {
        return {
            WELCOME: this.WELCOME()
        }
    }
}