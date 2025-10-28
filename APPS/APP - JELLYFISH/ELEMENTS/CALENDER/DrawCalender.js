import Branches from "../../../../CONSOLE/LUNGS/Branches.js";
import Create from "../../CREATE/Create.js";

export default class CALENDER extends Branches{

    constructor(){super()};


    async BUILD_CALENDER() {
        this.TABLE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'table',
            CREATE_CONFIG_PERSONALITY_ID: 'TABLE_Calender'
        }).INIT();
        this.TABLE.append(...[
            await this.#BUILD_MONTH_ROW(),

            await this.#BUILD_DATA_ROW("1", "ONE"),
            await this.#BUILD_DATA_ROW("2", "TWO"),
            await this.#BUILD_DATA_ROW("3", "THREE"),
            await this.#BUILD_DATA_ROW("4", "FOUR"),
            await this.#BUILD_DATA_ROW("5", "FIVE"),

            await this.#BUILD_DATA_ROW("6", "SIX"),
            await this.#BUILD_DATA_ROW("7", "SEVEN"),
            await this.#BUILD_DATA_ROW("8", "EIGHT"),
            await this.#BUILD_DATA_ROW("9", "NINE"),
            await this.#BUILD_DATA_ROW("10", "TEN"),

            await this.#BUILD_DATA_ROW("11", "ELEVEN"),
            await this.#BUILD_DATA_ROW("12", "TWELVE"),
            await this.#BUILD_DATA_ROW("13", "THIRTEEN"),
            await this.#BUILD_DATA_ROW("14", "FOURTEEN"),
            await this.#BUILD_DATA_ROW("15", "FIFTEEN"),

            await this.#BUILD_DATA_ROW("16", "SIXTEEN"),
            await this.#BUILD_DATA_ROW("17", "SEVENTEEN"),
            await this.#BUILD_DATA_ROW("18", "EIGHTEEN"),
            await this.#BUILD_DATA_ROW("19", "NINETEEN"),
            await this.#BUILD_DATA_ROW("20", "TWENTY"),

            await this.#BUILD_DATA_ROW("21", "TWENTY-ONE"),
            await this.#BUILD_DATA_ROW("22", "TWENTY-TWO"),
            await this.#BUILD_DATA_ROW("23", "TWENTY-THREE"),
            await this.#BUILD_DATA_ROW("24", "TWENTY-FOUR"),
            await this.#BUILD_DATA_ROW("25", "TWENTY-FIVE"),

            await this.#BUILD_DATA_ROW("26", "TWENTY-SIX"),
            await this.#BUILD_DATA_ROW("27", "TWENTY-SEVEN"),
            await this.#BUILD_DATA_ROW("28", "TWENTY-EIGHT"),
            await this.#BUILD_DATA_ROW("29", "TWENTY-NINE"),
            await this.#BUILD_DATA_ROW("30", "THIRTY"),
            await this.#BUILD_DATA_ROW("31", "THIRTY-ONE"),
        ]);
        console.log(this.TABLE)
        return this.TABLE
    };
    async #BUILD_MONTH_ROW(){
        this.ROW_MONTH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'tr',
            CREATE_CONFIG_PERSONALITY_ID: 'ROW_Calender-Month'
        }).INIT();
        let CELL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: `CELL_Calender-Empty`
        }).INIT(); 
        this.ROW_MONTH.append(...[
            CELL,
            await this.#BUILD_MONTH_CELL('JANUARY'),
            await this.#BUILD_MONTH_CELL('FEBRUARY'),
            await this.#BUILD_MONTH_CELL('MARCH'),
            await this.#BUILD_MONTH_CELL('APRIL'),

            await this.#BUILD_MONTH_CELL('MAY'),
            await this.#BUILD_MONTH_CELL('JUNE'),
            await this.#BUILD_MONTH_CELL('JULY'),
            await this.#BUILD_MONTH_CELL('AUGUST'),

            await this.#BUILD_MONTH_CELL('SEPTEMBER'),
            await this.#BUILD_MONTH_CELL('OCTOBER'),
            await this.#BUILD_MONTH_CELL('NOVEMBER'),
            await this.#BUILD_MONTH_CELL('DECEMBER')
        ]);
        return this.ROW_MONTH;
    };
    async #BUILD_DATA_ROW(PARAMETER_DAY, PARAMETER_DAY_TEXT){
        let ROW = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'tr',
            CREATE_CONFIG_PERSONALITY_ID: `ROW_Calender-${PARAMETER_DAY_TEXT}`
        }).INIT();
        ROW.append(...[
            await this.#BUILD_DAY_CELL(PARAMETER_DAY, PARAMETER_DAY_TEXT),
            await this.#BUILD_CELL(PARAMETER_DAY, "JAN"),
            await this.#BUILD_CELL(PARAMETER_DAY, "FEB"),
            await this.#BUILD_CELL(PARAMETER_DAY, "MAR"),
            await this.#BUILD_CELL(PARAMETER_DAY, "APR"),

            await this.#BUILD_CELL(PARAMETER_DAY, "MAY"),
            await this.#BUILD_CELL(PARAMETER_DAY, "JUN"),
            await this.#BUILD_CELL(PARAMETER_DAY, "JUL"),
            await this.#BUILD_CELL(PARAMETER_DAY, "AUG"),

            await this.#BUILD_CELL(PARAMETER_DAY, "SEP"),
            await this.#BUILD_CELL(PARAMETER_DAY, "OCT"),
            await this.#BUILD_CELL(PARAMETER_DAY, "NOV"),
            await this.#BUILD_CELL(PARAMETER_DAY, "DEC")
        ]);
        return ROW;
    };
    async #BUILD_DAY_CELL(PARAMETER_DAY, PARAMETER_DAY_TEXT){
        let CELL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: `CELL_Calender-${PARAMETER_DAY_TEXT}`
        }).INIT(); 
        CELL.innerHTML = PARAMETER_DAY;
        return CELL;
    };
    async #BUILD_CELL(PARAMETER_DAY, PARAMETER_MONTH){
        let CELL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'td',
            CREATE_CONFIG_PERSONALITY_ID: `CELL_Calender-${PARAMETER_MONTH}${PARAMETER_DAY}`
        }).INIT(); 
        if (PARAMETER_DAY === "28" && PARAMETER_MONTH === 'FEB') {
            CELL.style.background = 'black';
        };
        if (PARAMETER_DAY === "29" && PARAMETER_MONTH === 'FEB') {
            CELL.style.background = 'black';
        };
        if (PARAMETER_DAY === "30" && PARAMETER_MONTH === 'FEB') {
            CELL.style.background = 'black';
        };
        if (PARAMETER_DAY === "31") {
            if (PARAMETER_MONTH === 'FEB') {
                CELL.style.background = 'black';
            }
            if (PARAMETER_MONTH === 'APR') {
                CELL.style.background = 'black';
            }
            if (PARAMETER_MONTH === 'JUN') {
                CELL.style.background = 'black';
            }
            if (PARAMETER_MONTH === 'SEP') {
                CELL.style.background = 'black';
            }
            if (PARAMETER_MONTH === 'NOV') {
                CELL.style.background = 'black';
            }
        }
        return CELL;
    };
    async #BUILD_MONTH_CELL(PARAMETER_MONTH){
        let CELL = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'th',
            CREATE_CONFIG_PERSONALITY_ID: `CELL_Calender-${PARAMETER_MONTH}`
        }).INIT(); 
        CELL.innerHTML = PARAMETER_MONTH;
        return CELL;
    };
}