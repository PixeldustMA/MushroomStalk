module.exports = class DISPLAY {
    constructor() {

        this.SEPERATORS = {
            EQUALS: '===========================================================',
            STARS:  '***********************************************************',
            ARROWS: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
            CROSSES: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            STEPS:  '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='
        };
        this.COLOURS = {
            CYAN: '\x1b[36m%s\x1b[0m',
            BRIGHT_CYAN: '\x1b[96m%s\x1b[0m',
            BLACK: '\x1b[30m%s\x1b[0m',
            RED: '\x1b[31m%s\x1b[0m',
            GREEN: '\x1b[32m%s\x1b[0m',
            YELLOW: '\x1b[33m%s\x1b[0m',
            BLUE: '\x1b[34m%s\x1b[0m',
            MAGENTA: '\x1b[35m%s\x1b[0m',
            BRIGHT_MAGENTA: '\x1b[95m%s\x1b[0m',
            WHITE: '\x1b[37m%s\x1b[0m',
            GREY: '\x1b[90m%s\x1b[0m',
            UNDERSCORE: "\x1b[4m"
        };
        this.NOTE = console.log;

        this.PATH_ORIGIN = '';
        this.PATH_DESTINATION = '';
        this.PATH_FILE = '';

        this.TEXT_FUNCTION_NAME = '';
        this.TEXT_CATEGORY = '';
        this.PATH_FILE = '';
        this.DATA_DETAILS = {};
    };

    // ========== //
    // << MAIN >> //
    // ========== //

    async ANNOUNCEMENT(TEXT_ANNOUNCEMENT) {
        this.NOTE(this.COLOURS.RED, this.SEPERATORS.EQUALS);
        this.NOTE(this.COLOURS.RED, TEXT_ANNOUNCEMENT);
        this.NOTE(this.COLOURS.RED, this.SEPERATORS.EQUALS);
    };
    async ALERT_FUNCTION(STYLE, {
        TEXT_FUNCTION_NAME = 'UNSET',
        PARAMETER_PATH = 'UNSET',
        PARAMETER_DETAILS = 'UNSET',
        PARAMETER_CATEGORY = "UNSET"
    }) {

        this.TEXT_FUNCTION_NAME = TEXT_FUNCTION_NAME;
        this.TEXT_CATEGORY = PARAMETER_CATEGORY;
        this.PATH_FILE = PARAMETER_PATH;
        this.DATA_DETAILS = PARAMETER_DETAILS;

        switch (STYLE) {
            case 'WINDOW':
                return this.#ALERT_WINDOW();
            case 'DEBUG':
                return this.#ALERT_DEBUGGING();
            case 'WRITE':
                return this.#ALERT_WRITE();
            case 'COPY':
                return this.#ALERT_COPY();
            case 'DELETE':
                return this.#ALERT_DELETE();
            case 'FOLDERS':
                return this.#ALERT_FOLDERS();
            case 'PATHS':
                return this.#ALERT_PATHWAYS();
            case 'LOAD':
                return this.#ALERT_LOAD();
            default:
                break;
        }
    };
    async ALERT_RESULT(PARAMETER_FUNCTION_NAME, PARAMETER_DETAILS, PARAMETER_PATH = 0) {
        this.NOTE(this.COLOURS.MAGENTA, this.SEPERATORS.ARROWS);
        if (PARAMETER_DETAILS !== 'NONE') {
            this.NOTE(this.COLOURS.BRIGHT_MAGENTA, `THE RESULT OF FUNCTION: ${PARAMETER_FUNCTION_NAME} IS...`);
            this.NOTE(this.COLOURS.BRIGHT_CYAN, PARAMETER_DETAILS);
        }
        else {
            this.NOTE(this.COLOURS.BRIGHT_MAGENTA, `${PARAMETER_FUNCTION_NAME} IS COMPLETE`)
        }
        if (PARAMETER_PATH !== 0) {
            this.NOTE(this.COLOURS.BRIGHT_MAGENTA, 'READING FROM THE FOLLOWING PATH...');
            this.NOTE(this.COLOURS.BRIGHT_MAGENTA, PARAMETER_PATH);
        };
        this.NOTE(this.COLOURS.MAGENTA, this.SEPERATORS.ARROWS);
    };
    async ALERT_TESTING() {
        this.NOTE(this.COLOURS.RED, this.SEPERATORS.CROSSES);
        this.NOTE(this.COLOURS.RED, "------------- WE IN TESTING MODE BOIS ------------------")
        this.NOTE(this.COLOURS.RED, this.SEPERATORS.CROSSES);    
    };
    async ALERT_ARCHIVE(PARAMETER_MODE, PARAMETER_TEXT, {SQL = 0}) {
        if (PARAMETER_MODE === 'AUX') {
            this.NOTE(this.COLOURS.CYAN, this.SEPERATORS.STEPS);
            this.NOTE(this.COLOURS.BRIGHT_CYAN, PARAMETER_TEXT);  
            this.NOTE(this.COLOURS.CYAN, this.SEPERATORS.STEPS);
        }
        else {
            this.NOTE(this.COLOURS.CYAN, this.SEPERATORS.STEPS);
            this.NOTE(this.COLOURS.BRIGHT_CYAN, `RUNNING ${PARAMETER_MODE} ON ARKIVE`);
            this.NOTE(this.COLOURS.BRIGHT_CYAN, PARAMETER_TEXT);
            if (SQL !== 0) {
                this.NOTE(this.COLOURS.BRIGHT_CYAN, `${SQL}`);           
            };
            this.NOTE(this.COLOURS.CYAN, this.SEPERATORS.STEPS);
        };
    };
    async ALERT_MESSAGE(PARAMETER_NAME = 0, PARAMETER_ACTION = 0, PARAMETER_DATA = 0) {
        this.NOTE(this.COLOURS.YELLOW, this.SEPERATORS.ARROWS);
        if (PARAMETER_NAME !== 0){this.NOTE(this.COLOURS.GREEN, `FUNCTION: ${PARAMETER_NAME}`);}
        if (PARAMETER_ACTION !== 0){this.NOTE(this.COLOURS.GREEN, `IS PERFORMING THE TASK: ${PARAMETER_ACTION}`);}
        if (PARAMETER_DATA !== 0){this.NOTE(this.COLOURS.GREEN, `PRODUCING THE FOLLOWING DATA:`);}
        if (PARAMETER_NAME !== 0){this.NOTE(this.COLOURS.BLUE, PARAMETER_DATA);}
        this.NOTE(this.COLOURS.YELLOW, this.SEPERATORS.ARROWS);
    };

    // ============== //
    // << SEKTIONS >> //
    // ============== //

    async #ALERT_WINDOW() {
        this.NOTE(this.COLOURS.BRIGHT_CYAN, this.SEPERATORS.STARS);
        this.NOTE(this.COLOURS.CYAN, this.TEXT_FUNCTION_NAME);
        this.NOTE(this.COLOURS.BRIGHT_CYAN, this.SEPERATORS.STARS);
    };
    async #ALERT_DEBUGGING() {
        this.NOTE(this.COLOURS.MAGENTA, this.SEPERATORS.EQUALS);
        this.NOTE(this.COLOURS.RED, `${this.TEXT_CATEGORY}: ${this.TEXT_FUNCTION_NAME} HAS REQUESTED AKSESS TO DEBUGGING`);
        this.NOTE(this.COLOURS.MAGENTA, this.SEPERATORS.EQUALS);
    };
    async #ALERT_WRITE(PARAMETER_PATH, PARAMETER_DETAILS){
        this.NOTE(this.COLOURS.GREEN, this.SEPERATORS.EQUALS);
        this.NOTE(this.COLOURS.BLUE, "MESSAGE WRITING FUNCTION ACTIVATED...");
        this.NOTE(this.COLOURS.BLUE, "PATH ACCESSED IS...");
        this.NOTE(this.COLOURS.WHITE, PARAMETER_PATH);
        this.NOTE(this.COLOURS.BLUE, "WRITING DATA...");       
        this.NOTE(this.COLOURS.WHITE, PARAMETER_DETAILS);
        this.NOTE(this.COLOURS.GREEN, this.SEPERATORS.EQUALS);
    };
    async #ALERT_COPY() {
        this.NOTE(this.COLOURS.YELLOW, this.SEPERATORS.EQUALS);
        this.NOTE(this.COLOURS.BLUE, `COPYING FILE FROM ${this.PATH_FILE[0]} TO ${this.PATH_FILE[1]}`);
        this.NOTE(this.COLOURS.YELLOW, this.SEPERATORS.EQUALS);
    };
    async #ALERT_DELETE() {
        this.NOTE(this.COLOURS.RED, this.SEPERATORS.EQUALS);
        this.NOTE(this.COLOURS.WHITE, `DELETING FILE FROM ${this.PATH_FILE}`);
        this.NOTE(this.COLOURS.RED, this.SEPERATORS.EQUALS);
    };
    async #ALERT_FOLDERS() {
        this.NOTE(this.COLOURS.GREY, this.SEPERATORS.STARS);
        if (typeof this.PATH_FILE === 'string') {
            this.NOTE(this.COLOURS.WHITE, `${this.TEXT_FUNCTION_NAME} AT PATH: ${this.PATH_FILE}`);
        }
        else {
            this.NOTE(this.COLOURS.WHITE, `COPYING A FOLDER FROM ${this.PATH_FILE[0]} TO ${this.PATH_FILE[1]}`);
        };
        this.NOTE(this.COLOURS.GREY, this.SEPERATORS.STARS);
    };
    async #ALERT_PATHWAYS(){
        this.NOTE(this.COLOURS.GREEN, this.SEPERATORS.EQUALS);
        this.NOTE(this.COLOURS.YELLOW, this.TEXT_FUNCTION_NAME);
        this.NOTE(this.COLOURS.YELLOW, `AT PATH: ${this.PATH_FILE}`);
        this.NOTE(this.COLOURS.GREEN, this.SEPERATORS.EQUALS);    
    };
    async #ALERT_LOAD() {

        this.NOTE(this.COLOURS.YELLOW, this.SEPERATORS.CROSSES);
        this.NOTE(this.COLOURS.BLUE, 'LOADING... LOADING...');
        this.NOTE(this.COLOURS.BLUE, this.TEXT_FUNCTION_NAME);

        if (this.PATH_FILE !== 'UNSET') {
            this.NOTE(this.COLOURS.BLUE, 'LOADING FROM PATH...')
            this.NOTE(this.COLOURS.BLUE, this.PATH_FILE);
        };
        this.NOTE(this.COLOURS.YELLOW, this.SEPERATORS.CROSSES);
    };

}

