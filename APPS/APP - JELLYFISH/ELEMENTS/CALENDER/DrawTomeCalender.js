import CALENDER from "./DrawCalender.js";

export default class CAL_Tome extends CALENDER{

    constructor({
        TOME_CONFIG_YEAR = 0,
        TOME_CONFIG_FILTER = 0,
        TOME_CONFIG_CHARACTER = 0,
        TOME_CONFIG_SESSION = 0
    }) {
        super();

        this.TAG_YEAR = TOME_CONFIG_YEAR;
        this.TAG_FILTER = TOME_CONFIG_FILTER;
        this.TAG_CHARACTER = TOME_CONFIG_CHARACTER;
        this.SESSION_CURRENT = TOME_CONFIG_SESSION;
        this.ACTIVE_DAY = '';
        this.ACTIVE_MONTH = '';
        this.ACTIVE_YEAR = TOME_CONFIG_YEAR;
    };
    
    async DRAW() {
        return await this.BUILD_CALENDER();
    };
    async INITIALISE() {

        // ============= //
        // << SESSION >> //
        // ============= //

        await this.REQUEST_SESSION_EVENTS();
    };

    // ================ //
    // ## ALL EVENTS ## //
    // ================ //
    async ALL_EVENTS() {
        const DATA_YEAR = this.SESSION_CURRENT.EVENT.DATA.YEARS[this.ACTIVE_YEAR].EVENTS;
        const ARRAY_Months = Object.keys(DATA_YEAR);
        await this.LOOP_MONTHS(ARRAY_Months, DATA_YEAR);
    };
    CELL_TEXT(PARAMETER_MONTH, PARAMETER_DAY, EVENT_TEXT) {
        if (PARAMETER_MONTH === 'M1') {
            document.getElementById(`CELL_Calender-JAN${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }
        if (PARAMETER_MONTH === 'M2') {
            document.getElementById(`CELL_Calender-FEB${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }
        if (PARAMETER_MONTH === 'M3') {
            document.getElementById(`CELL_Calender-MAR${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }
        if (PARAMETER_MONTH === 'M4') {
            document.getElementById(`CELL_Calender-APR${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }

        if (PARAMETER_MONTH === 'M5') {
            document.getElementById(`CELL_Calender-MAY${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }
        if (PARAMETER_MONTH === 'M6') {
            document.getElementById(`CELL_Calender-JUN${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }
        if (PARAMETER_MONTH === 'M7') {
            document.getElementById(`CELL_Calender-JUL${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }
        if (PARAMETER_MONTH === 'M8') {
            document.getElementById(`CELL_Calender-AUG${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }

        if (PARAMETER_MONTH === 'M9') {
            document.getElementById(`CELL_Calender-SEP${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }
        if (PARAMETER_MONTH === 'M10') {
            document.getElementById(`CELL_Calender-OCT${PARAMETER_DAY[1]}`).innerHTML = EVENT_TEXT;
        }
        if (PARAMETER_MONTH === 'M11') {
            document.getElementById(`CELL_Calender-NOV${PARAMETER_DAY[1]}${PARAMETER_DAY[2]}`).innerHTML = EVENT_TEXT;
        }
        if (PARAMETER_MONTH === 'M12') {
            document.getElementById(`CELL_Calender-DEC${PARAMETER_DAY[1]}${PARAMETER_DAY[2]}`).innerHTML = EVENT_TEXT;
        }
    }
    async READ_EVENTS(PARAMETER_EVENTS) {
        
        if (PARAMETER_EVENTS.length !== 0) {
            let EVENT_CODES = PARAMETER_EVENTS;
            let EVENT_TEXT = '';
            for (let INDEX_EVENT = 0; INDEX_EVENT < EVENT_CODES.length; INDEX_EVENT++) {
                const EVENT = EVENT_CODES[INDEX_EVENT];
                let TAG_EVENT = this.SESSION_CURRENT.EVENT.DATA.EVENTS[EVENT].TEXT_TAG
                this.RENDERER_PATH = `${this.SESSION_CURRENT.PATHS.WAR.EVENT.TEXT}/${TAG_EVENT}.txt`;
                let rr = await this.READ();
                EVENT_TEXT += `// ${rr}`;
                this.CELL_TEXT(this.ACTIVE_MONTH, this.ACTIVE_DAY, EVENT_TEXT);
            } 
        }
    };
    async LOOP_DAY(PARAMETER_DAYS, PARAMETER_YEAR) {
        for (let DAY_INDEX = 0; DAY_INDEX < PARAMETER_DAYS.length; DAY_INDEX++) {
            this.ACTIVE_DAY = PARAMETER_DAYS[DAY_INDEX];
            ;
            await this.READ_EVENTS(PARAMETER_YEAR[this.ACTIVE_MONTH][this.ACTIVE_DAY].EVENTS);
        }
    };
    async LOOP_MONTHS(PARAMETER_MONTH, PARAMETER_YEAR) {
        for (let MONTH_INDEX = 0; MONTH_INDEX < PARAMETER_MONTH.length; MONTH_INDEX++) {
            this.ACTIVE_MONTH = PARAMETER_MONTH[MONTH_INDEX];
            const MONTH_ARRAY = PARAMETER_YEAR[PARAMETER_MONTH[MONTH_INDEX]];
            let ARRAY_Days = Object.keys(MONTH_ARRAY);
            await this.LOOP_DAY(ARRAY_Days, PARAMETER_YEAR);
        }
    };

    // =============== //
    // ## CHARACTER ## //
    // =============== //

    async FILTER_CHARACTER(){
        const DATA_YEAR = this.SESSION_CURRENT.EVENT.DATA.YEARS[this.ACTIVE_YEAR].EVENTS;
        const ARRAY_Months = Object.keys(DATA_YEAR);
        await this.LOOP_CHARACTER_MONTHS(ARRAY_Months, DATA_YEAR);
    };
    async LOOP_CHARACTER_MONTHS(PARAMETER_MONTH, PARAMETER_YEAR) {
        for (let MONTH_INDEX = 0; MONTH_INDEX < PARAMETER_MONTH.length; MONTH_INDEX++) {
            this.ACTIVE_MONTH = PARAMETER_MONTH[MONTH_INDEX];
            const MONTH_ARRAY = PARAMETER_YEAR[PARAMETER_MONTH[MONTH_INDEX]];
            let ARRAY_Days = Object.keys(MONTH_ARRAY);
            await this.LOOP_CHARACTER_DAY(ARRAY_Days, PARAMETER_YEAR);
        }
    };
    async LOOP_CHARACTER_DAY(PARAMETER_DAYS, PARAMETER_YEAR) {
        for (let DAY_INDEX = 0; DAY_INDEX < PARAMETER_DAYS.length; DAY_INDEX++) {
            this.ACTIVE_DAY = PARAMETER_DAYS[DAY_INDEX];
            ;
            await this.READ_CHARACTER_EVENTS(PARAMETER_YEAR[this.ACTIVE_MONTH][this.ACTIVE_DAY].EVENTS);
        }
    };
    async READ_CHARACTER_EVENTS(PARAMETER_EVENTS) {
        
        if (PARAMETER_EVENTS.length !== 0) {
            let EVENT_CODES = PARAMETER_EVENTS;
            let EVENT_TEXT = '';
            for (let INDEX_EVENT = 0; INDEX_EVENT < EVENT_CODES.length; INDEX_EVENT++) {

                const EVENT = EVENT_CODES[INDEX_EVENT];
                let TAG_EVENT = this.SESSION_CURRENT.EVENT.DATA.EVENTS[EVENT].TEXT_TAG;
                let CHARACTER_CODE = this.SESSION_CURRENT.TOOLBOX.DATA.MEAT[this.TAG_CHARACTER.replace(" ", "_")].CODES.SHORT;
                if (`${TAG_EVENT[0]}${TAG_EVENT[1]}${TAG_EVENT[2]}${TAG_EVENT[3]}` === CHARACTER_CODE) {
                    this.RENDERER_PATH = `${this.SESSION_CURRENT.PATHS.WAR.EVENT.TEXT}/${TAG_EVENT}.txt`;
                    let rr = await this.READ();
                    EVENT_TEXT += `// ${rr}`;
                    this.CELL_TEXT(this.ACTIVE_MONTH, this.ACTIVE_DAY, EVENT_TEXT);
                };
            };
        }
    };
}