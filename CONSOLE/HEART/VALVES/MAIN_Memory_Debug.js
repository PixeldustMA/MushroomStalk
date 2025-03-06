module.exports = class DEBUG {
    constructor() {

        this.TOADSTOOL = {
            TOADSTOOL: false,
            LOAD: false,
            MOOD: false,
            ADVERB: false,
            RANDOMISER: false,
            FLOWERPOT: false,
            SPEECH: false,
            CULTIVATION: false,
            MEMORY: false,
            FILTER: false,
            TRANSLATE: false,
            SUBJECT: false,
            OBJECT: false
        };
        this.MEMORY = {
            BUILD: false,
            CHECK: false, 
            RESET: false,
            RENDERER: false,
            IMPORT: false,
            REMEMBER: false,
            USER: false
        };
        this.WELCOME = {
            ONBOARDING: false,
            WELCOME: false,
            WIZARD: false,
            SPLASH: false,
            TITLE: false,
            VALIDATION: false
        };
        this.FONTS = {
            FONT: false
        };
        this.PATHWAYS = {
            ROUTES: false
        };
        this.MAIN = {
            RENDERER: false,
            STALK: false,
            SESSION: false
        };
        this.CREATE = {
            RANDOM: false,
            CREATE: false,
            COLLAPSE: false,
            FRAME: false,
            NAVIGATE: false,
            PICK: false
        };
        this.BUBBLEGUM = {
            BUBBLEGUM: false,
            AUTOSAVE: false
        };
        this.ARCHIVE = {
            ACTIVITY_MAIN: false,
            ACTIVITY_INSERT: false,
            ACTIVITY_PANELS: false,
            CODE_CREATE: false,
            CODE_CREATE: false,
            CODES: false,
            CONSOLE: false,
            INSERT: false,
            REMOVE: false,
            SELECT: false,
            SUBMIT: false,
            UPDATE: false,
            PANELS: false,
            PERSONAL_MAIN: false,
            PERSONAL_INSERT: false,
            SECTION_MAIN: false,
            SECTION_INSERT: false
        };
        this.EXPLORER = {
            MAIN: false,
            PANELS: false,
            KESSI: false,
            MISC: false,
            PANELS_MISC: false,
            MUSIC_MAIN: false,
            PANELS_MUSIC: false,
            SPORT_MAIN: false,
            PANELS_SPORTS: false
        }
    }
    async TEST_MODE(PARAMETER_CATEGORY, PARAMETER_SCRIPT_NAME) {
        if (this[PARAMETER_CATEGORY][PARAMETER_SCRIPT_NAME]) {return true;}
        return false;
    };
}
