export default class Message {

    /**
     * ## MESSAGE CONSTRUCTOR
     * 
     * ------------------------
     * 
     * ### COLOUR
     * 
     * The colour that has been requested to display the message
     * 
     * ### MESSAGE
     * 
     * The message displayed on the console
     * 
     * ### SET
     * 
     * The specific border art that has been chosen for the message
     */
    constructor({
        MESSAGE_CONFIG_COLOUR = 0,
        MESSAGE_CONFIG_MESSAGE = 0,
        MESSAGE_CONFIG_SET = 0
    }){

        // ============ //
        // << CONFIG >> //
        // ============ //

        this.MESSAGE_COLOUR = MESSAGE_CONFIG_COLOUR;
        this.MESSAGE_TEXT = MESSAGE_CONFIG_MESSAGE;
        this.MESSAGE_SET = MESSAGE_CONFIG_SET;

        // =============== //
        // << INSTANCES >> //
        // =============== //

        this.NOTE = console.log;

        // ================ //
        // << AESTHETIKS >> //
        // ================ //

        this.SEPERATORS = {
            EQUALS: '===========================================================',
            STARS:  '***********************************************************',
            ARROWS: '<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>',
            CROSSES: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            STEPS:  '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=',
            DOTS:   '............................................................',
            HATS:   '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
            CURVES: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
            SPIKES: '>->->->->->->->->->->->->->->->->->->->->->->->->->->->->->-',
            BATS:   '^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V^V',
            CASTLE: '.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:',
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
    };

    /**
     * ## PRINT A MESSAGE
     * 
     * -----------------
     * 
     * Display a message in the console with a custom colour and border
     * depending on the settings
     */
    DISPLAY(){
        if (this.MESSAGE_SET === 0) {this.NOTE(this.COLOURS[this.MESSAGE_COLOUR], this.MESSAGE_TEXT);}
        else {this.NOTE(this.COLOURS[this.MESSAGE_COLOUR], this.SEPERATORS[this.MESSAGE_SET])};
    };
};