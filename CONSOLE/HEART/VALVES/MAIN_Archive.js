const DISPLAY = require("./MAIN_Note");
const PATHWAYS = require("./MAIN_Pathways");

module.exports = class MAIN_Archive {

    constructor(){

        // ============= //
        // << INSTANCE >> //
        // ============= //

        this.INSTANCE_ALERTS = new DISPLAY();
        this.INSTANCE_PATHS = new PATHWAYS();

        // =============== //
        // << TEXT DATA >> //
        // =============== //

        this.NAME_TABLE = '';
        this._SQL = '';

        // ========== //
        // << DATA >> //
        // ========== //

        this.DATA = [];
        this.LIST_COLUMNS = [];
        this.LIST_CONSTRAINTS_SEARCH = [];
        this.LIST_SEARCH_VALUES = [];

        // ============ //
        // << TABLES >> //
        // ============ //

        this.DATA_QUERY = {};
        this.DATA_TABLES = {};

        // ============= //
        // << NUMBERS >> //
        // ============= //

        this.KEY_NUMBER = '';

        // =========== //
        // << FLAGS >> //
        // =========== //

        this.STATUS_RANGE = false;
        this.STATUS_TESTING = false;

        // =============== //
        // << TEMPORARY >> //
        // =============== //

        this.HOLD_COLUMNS = '';
        this.HOLD_SEARCH_COLUMNS = '';
    };

    // ================== //
    // ## INITIALISING ## //
    // ================== //

    async INITIALISE({
        KEY_TABLE = 'UNSET', 
        ARRAY_COLUMNS = [], ARRAY_DATA = [], 
        STATUS_RANGE = false, STATUS_TESTING = false,
        SEARCH_CONSTRAINTS = [], SEARCH_VALUES = [],  
        MODE = 'UNSET', QUERY_DATA = {}, TABLE_DATA = {}
    }) {

        let DatabasePath = this.INSTANCE_PATHS.GENERATE_PATH("£££-UserMemory/USERNAME/ARCHIVE/SQLITE/Archive.sqlite");
        DATABASE_Archive = new sqlite3.Database(DatabasePath);

        // =============== //
        // << TEXT DATA >> //
        // =============== //

        this.NAME_TABLE = KEY_TABLE;
        this._SQL = '';

        // ========== //
        // << DATA >> //
        // ========== //

        this.DATA = ARRAY_DATA;
        this.LIST_COLUMNS = ARRAY_COLUMNS;
        this.LIST_CONSTRAINTS_SEARCH = SEARCH_CONSTRAINTS;
        this.LIST_SEARCH_VALUES = SEARCH_VALUES;

        // ============ //
        // << TABLES >> //
        // ============ //

        this.DATA_QUERY = QUERY_DATA;
        this.DATA_TABLES = TABLE_DATA;

        // ============= //
        // << NUMBERS >> //
        // ============= //

        this.KEY_NUMBER = this.DATA_QUERY[this.DATA_TABLES[KEY_TABLE].NUMBER];

        // =========== //
        // << FLAGS >> //
        // =========== //

        if (STATUS_RANGE) {this.STATUS_RANGE = true};
        this.STATUS_TESTING = STATUS_TESTING;

        // ========= //
        // << RUN >> //
        // ========= //

        return await this.MODE(MODE);
    };
    async MODE(PARAMETER_MODE) {

        switch (PARAMETER_MODE) {
            case "INSERT":
                await this.INSERT();
                break;
            case "SELECT":
                await this.SELECT_FROM_ARCHIVE();
                break;
            case "DELETE":
                await this.DELETE_ROW();
                break;
            case "UPDATE":
                await this.UPDATE_ARCHIVE();
                break;
            case "IMPORT":
                await this.IMPORT_ARCHIVE();
                break;
            case "EXPORT":
                await this.EXPORT();
                break;
            case "PIXELATE":
                await this.PIXELATE();
                break;
            case "IMPORT":
                await this.IMPORT();            
            default:
                break;
            }
    };

    // =========== //
    // ## PIECES ## //
    // =========== //

    async GENERATE_COLUMNS(){
        this.HOLD_COLUMNS = "";
        this.LIST_COLUMNS.forEach(ITEM_Column => {
            this.HOLD_COLUMNS += this.DATA_QUERY[this.NAME_TABLE][ITEM_Column] + this.DATA_QUERY.BITS.COMMA;
        });
        this.HOLD_COLUMNS = this.HOLD_COLUMNS.slice(0, -2);
        return this.HOLD_COLUMNS;
    };
    async GENERATE_SEARCH_COLUMNS(){
        this.HOLD_SEARCH_COLUMNS = "";
        this.LIST_CONSTRAINTS_SEARCH.forEach(ITEM_Search_Column => {
            this.HOLD_SEARCH_COLUMNS += `${ITEM_Search_Column} = ? AND `
        });
        this.HOLD_SEARCH_COLUMNS = this.HOLD_SEARCH_COLUMNS.slice(0, -5);
        return this.HOLD_SEARCH_COLUMNS;
    };
    async GENERATE_SQL(PARAMETER_MODE, {PARAMETER_TYPE = 0, PARAMETER_COLUMNS = 0, PAAMETER_SEARCH_COLUMNS = 0}) {

        let STRING_Hold     = this.DATA_QUERY.QUERIES[PARAMETER_TYPE] + this.DATA_QUERY.BITS.SPACE;
        let STRING_Table    = this.DATA_QUERY[this.NAME_TABLE]["NAME"];
        let STRING_Columns  = this.DATA_QUERY.BITS.OPENPARENTHESES
                            + PARAMETER_COLUMNS 
                            + this.DATA_QUERY.BITS.CLOSEPARENTHESES
        let STRING_Values   = this.DATA_QUERY.QUERIES.VALUES 
                            + this.DATA_QUERY.BITS.SPACE
                            + this.DATA_QUERY.QUESTION[this.KEY_NUMBER];
        let STRING_Search   = this.DATA_QUERY.QUERIES.FROM 
                            + this.DATA_QUERY.BITS.SPACE 
                            + STRING_Table
                            + this.DATA_QUERY.BITS.SPACE 
                            + this.DATA_QUERY.QUERIES.WHERE
                            + this.DATA_QUERY.BITS.SPACE 
                            + PAAMETER_SEARCH_COLUMNS;
        if (PARAMETER_MODE === 'INSERT') {return STRING_Hold + STRING_Table + STRING_Columns + STRING_Values;};
        if (PARAMETER_MODE === 'SEARCH') {return STRING_Hold + STRING_Columns + this.DATA_QUERY.BITS.SPACE + STRING_Search;};
        if (PARAMETER_MODE === 'SELECT') {
            return STRING_Hold 
                + this.DATA_QUERY.BITS.SPACE + PARAMETER_COLUMNS 
                + this.DATA_QUERY.BITS.SPACE + this.DATA_QUERY.QUERIES.FROM 
                + this.DATA_QUERY.BITS.SPACE + STRING_Table;   
        };
        if (PARAMETER_MODE === 'UPDATE') {
            return STRING_Hold 
                    + QUERY.BITS.SPACE + this.NAME_TABLE
                    + QUERY.BITS.SPACE + QUERY.QUERIES.SET 
                    + QUERY.BITS.SPACE + PARAMETER_COLUMNS
                    + QUERY.BITS.SPACE + QUERY.QUERIES.WHERE 
                    + QUERY.BITS.SPACE + PAAMETER_SEARCH_COLUMNS;
        };
        if(PARAMETER_MODE === 'REMOVE') {
            return STRING_Hold
                + QUERY.BITS.SPACE 
                + STRING_Table
                + this.DATA_QUERY.BITS.SPACE 
                + this.DATA_QUERY.QUERIES.WHERE
                + this.DATA_QUERY.BITS.SPACE 
                + PAAMETER_SEARCH_COLUMNS;
        };
        if(PARAMETER_MODE == 'RANGE') {
            return this.DATA_QUERY.QUERIES.SELECT 
                    + this.DATA_QUERY.BITS.SPACE + '*'
                    + this.DATA_QUERY.BITS.SPACE  
                    + this.DATA_QUERY.QUERIES.FROM
                    + this.DATA_QUERY.BITS.SPACE 
                    + this.NAME_TABLE;
        };
    };
    /**
    * ## GENERATE COLUMNS FOR DATABASE
    * 
    * -----------------------------------
    * 
    * ### PARAMETERS
    * @param {object} queryObject {An object filled with information about current database
    * query}
    * 
    * ### DETAILS
    * 
    * Given a query object, generate an array of column names
    * 
    * Return only the column headers from an array
    * 
    * -------------------------
    * ### RETURN -->> {ARRAY} Column Names
    */
    async CREATE_COLUMNS(PARAMETER_QUERY) {

        this.INSTANCE_ALERTS.ALERT_ARCHIVE('AUX', 'CREATING COLUMNS');

        const LIST_Columns = [];
        for (const KEY_Columns in PARAMETER_QUERY) {
            if (Object.hasOwnProperty.call(PARAMETER_QUERY, KEY_Columns)) {

                const NAME_Column = PARAMETER_QUERY[KEY_Columns];
                if (KEY_Columns !== "NUMBER" && KEY_Columns !== "NAME") {

                    this.INSTANCE_ALERTS.ALERT_MESSAGE('ARCHIVE', 'ADDING COLUMN KEY', NAME_Column);
                    let DATA_Column = JSON.parse(NAME_Column);
                    LIST_Columns.push(DATA_Column);
                };
            }
        };
        return LIST_Columns;
    };

    // ============= //
    // ## METHODS ## //
    // ============= //

    /**
     * ## ADD NEW DATABASE ROW
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {string} PARAMETER_TABLE_NAME {Identifier for table}
     * @param {Array} PARAMETER_ARRAY_COLUMN_NAMES {Array of column identifiers}
     * @param {Array} PARAMETER_DATA {Array of data to be placed in corresponding columns}
     * @param {string} PARAMETER_NUMBER_KEY {Text version of number of key to access question mark string}
     * 
     * ### DETAILS
     * 
     * Create a new row in the database
     * 
     * Add data into the row based on matching column names
     * 
     * -------------------------
     * ### RETURN -->> {NEW RECORD}
     */
    async INSERT() {

        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('INSERT', 'INSERTING ROW')};
        const STRING_COLUMNS = this.GENERATE_COLUMNS();
        this._SQL = this.GENERATE_SQL('INSERT', {PARAMETER_COLUMNS: STRING_COLUMNS, PARAMETER_TYPE: 'INSERT'}); 

        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('INSERT', 'THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...', {SQL: this._SQL})};

        this.RESULT_STATEMENT();
    };
    /**
     * ## SELECT DATA IN DATABSE
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {string} RANGE {Setting for the select function}
     * @param {string} TABLE {Identifier for table}
     * @param {Array} COLUMNS {Array of identifiers to access columns}
     * @param {Array} SEARCH {Array of columns in which data will be matched}
     * @param {Array} SEARCH_DATA {Array of data to match against}
     * 
     * ### DETAILS
     * 
     * Retrieve data from the database
     * 
     * Match search criteria to narrow down the results generated
     * 
     * Where search data in search columns matches, the results will be generated
     * 
     * -------------------------
     * ### RETURN -->> {OBJECT} Database Records
     */
    async SELECT() {

        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('SELEKT', 'SELEKTING DATA FROM ARKIVE', {})};

        let STRING_COLUMNS = '';
        if(this.STATUS_RANGE) {
            this.RANGE_ALL();
        }
        else {
            if (COLUMNS.length >1) {
                STRING_COLUMNS = this.GENERATE_COLUMNS();
            }
            else {
                STRING_COLUMNS = this.DATA_QUERY[this.NAME_TABLE][this.LIST_COLUMNS[0]];
            };
            if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('SELEKT', 'THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...', {SQL: this._SQL})};

            if (this.LIST_CONSTRAINTS_SEARCH.length != 0) {
                let _SEARCH_COLUMNS = this.GENERATE_SEARCH_COLUMNS();
                this._SQL =  this.GENERATE_SQL('SEARCH', {PAAMETER_SEARCH_COLUMNS: _SEARCH_COLUMNS, PARAMETER_TYPE: 'SELECT', PARAMETER_COLUMNS: STRING_COLUMNS});
                return this.RESULT_EACH();
            }
            else {
                this_SQL =  this.GENERATE_SQL('SELECT', {})
                if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('SELEKT', 'THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...', {SQL: this._SQL})};
                return this.RESULT_ALL();
            };
        };
    };
    /**
     * ## CHANGE DATABASE ROW
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {string} TABLE {Identifier for table}
     * @param {Array} COLUMNS {Array of identifiers to access columns}
     * @param {Array} SEARCH {Array of columns in which data will be matched}
     * @param {Array} SEARCH_DATA {Array of data to match against}
     * 
     * ### DETAILS
     * 
     * Find data matching the search parameters
     * 
     * Update the existing records in the database
     * 
     * -------------------------
     * ### RETURN -->> {ALTERED RECORDS}
     */
    async UPDATE() {
        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('UPDATE', 'UPDATING ARCHIVE', {})};

        let STRING_COLUMNS = this.GENERATE_COLUMNS(); 
        let _SEARCH_COLUMNS = this.GENERATE_SEARCH_COLUMNS();

        this._SQL =  this.GENERATE_SQL('UPDATE', {
            PARAMETER_TYPE: 'UPDATE', PARAMETER_COLUMNS: STRING_COLUMNS, PAAMETER_SEARCH_COLUMNS: _SEARCH_COLUMNS
        });

        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('UPDATE', 'THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...', {SQL: this._SQL})};

        return await this.RESULT_ALL();
    };
    /**
     * ## DELETE DATABASE ROW
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {string} TABLE {Identifier for table}
     * @param {Array} SEARCH {Array of columns in which data will be matched}
     * @param {Array} SEARCH_DATA {Array of data to match against}
     * 
     * ### DETAILS
     * 
     * Remove one full row from the database
     * 
     * This iwlll likley cause errors if it leaves a foreign key abandoned somewehere
     * 
     * -------------------------
     * ### RETURN -->> {UPDATED ARCHIVE} 
     */
    async DELETE() {
        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('DELETE', 'DELETING ROW', {})};

        let _SEARCH_COLUMNS = this.GENERATE_SEARCH_COLUMNS();

        this._SQL = this.GENERATE_SQL('REMOVE', {PARAMETER_TYPE: 'DELETE', PAAMETER_SEARCH_COLUMNS: _SEARCH_COLUMNS});
        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('DELETE', 'THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...', {SQL: this._SQL})};

        DATABASE_Archive.serialize(() => {
            var statement = DATABASE_Archive.prepare(this._SQL);
                statement.run(this.LIST_SEARCH_VALUES);
                statement.finalize();
        });
    };
    /**
     * ## POPULATE DATABASE
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {string} TABLE {Identifier for table}
     * @param {Array} COLUMNS {Array of column identifiers}
     * @param {Array} DATA {Array of data to be placed in corresponding columns}
     * 
     * ### DETAILS
     * 
     * Add data from an outside file in json format
     * 
     * Json must be converted before arriving
     * 
     * Duplicate rows will not work
     * 
     * TABLE must be exact table name 
     * 
     * -------------------------
     * ### RETURN -->> {NEW RECORD}
     */
    async IMPORT() {
        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('SELECT', 'IMPORTING DATA', {TABLE: this.NAME_TABLE, COLUMNS: this.LIST_COLUMNS, DATA: this.DATA})};

        let NUM = "(";
        let _COLUMNS = this.GENERATE_COLUMNS();

        // todo add as values
        for (let numLength = 0; numLength < _COLUMNS.length; numLength++) {
            if (numLength === _COLUMNS.length - 1) {NUM += '(?)';}
            else {NUM += '(?),'};
        };
        this.KEY_NUMBER += ")";
        this._SQL =  this.GENERATE_SQL('INSERT', {PARAMETER_COLUMNS: _COLUMNS});

        // if (STATUS_TESTING){
        //     console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        //     console.log('THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...');                            
        //     console.log(_SQL);
        //     console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
        // }
        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('SELECT', 'IMPORTING DATA', {TABLE: this.NAME_TABLE, COLUMNS: this.LIST_COLUMNS, DATA: this.DATA})};

    
        return this.RESULT_STATEMENT();
    };

    // ============= //
    // ## RESULTS ## //
    // ============= //

    async RANGE_ALL() {

        this._SQL =  this.GENERATE_SQL('RANGE');
        if (this.STATUS_TESTING){this.INSTANCE_ALERTS.ALERT_ARCHIVE('SELEKT', 'THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...', {SQL: this._SQL})};

        return this.RESULT_ALL();
    };
    async RESULT_ALL() {
        return new Promise((resolve) => {
            DATABASE_Archive.all(
                this._SQL, [], (err, LIST_Rows) => {
                    if (err) {throw err;}
                    resolve(LIST_Rows);
                    }
                )
        });
    };
    async RESULT_EACH() {
        return new Promise((resolve) => {
            let OBJECT_Response;
            let DATA_All_Rekords = []
            DATABASE_Archive.each(
                this._SQL, this.LIST_SEARCH_VALUES, (err, DATA_Rows) => {
                    if (err) {throw err;}
                    OBJECT_Response = {
                        rows: DATA_Rows
                    };
                    DATA_All_Rekords.push(DATA_Rows);
                    resolve(DATA_All_Rekords);
                })
        });
    };
    async RESULT_STATEMENT(){
        DATABASE_Archive.serialize(() => {
            var STATEMENT_INSERT = DATABASE_Archive.prepare(this._SQL);
                STATEMENT_INSERT.run(this.DATA);
                STATEMENT_INSERT.finalize();
        });
    };

    // ============ //
    // ## EXPORT ## //
    // ============ //

    /**
     * ## EXPORT TO CSV FILE
     * 
     * -----------------------------------
     * 
     * ### PARAMETERS
     * @param {*} event {Recieved from Access File}
     * @param {*} path {A path to a back-up location. This is where the CSV file will be saved}
     * 
     * ### DETAILS
     * 
     * Turn the existing archive database into a CSV file with a table
     * 
     * -------------------------
     * ### RETURN -->> {CSV FILES}
     */
    async EXPORT(PARAMETER_PATH) {

        this.INSTANCE_ALERTS.ALERT_FUNCTION('EXPORT', {
            TEXT_FUNCTION_NAME: `EXPORTING ARCHIVE...`,
            PARAMETER_PATH: PARAMETER_PATH
        });

        this.TIMER = 0;
        this.EXPORT_TABLE_SETUP('MUSHROOMCODES', PARAMETER_PATH);
        this.EXPORT_TABLE_SETUP('MUSHROOMAREAS', PARAMETER_PATH);
        this.EXPORT_TABLE_SETUP("PERSONAL_BIRTH", PARAMETER_PATH);
        this.EXPORT_TABLE_SETUP("PERSONAL_NAMES", PARAMETER_PATH);
        this.EXPORT_TABLE_SETUP("PERSONAL_RACE", PARAMETER_PATH);
    };
    async EXPORT_TABLE_SETUP (PARAMETER_TYPE, PARAMETER_PATH) {
        this.TIMER += 500;
        return setTimeout(() => {

            this.INSTANCE_ALERTS.ALERT_FUNCTION('EXPORT', {
                TEXT_FUNCTION_NAME: `EXPORTING ${PARAMETER_TYPE} FROM ARCHIVE`,
                PARAMETER_PATH: PARAMETER_PATH
            });

            OBJECT_Query = this.DATA_QUERY[PARAMETER_TYPE];
            PATH_Formatted_Export = PARAMETER_PATH + "/" + OBJECT_Query.NAME + '.csv';
            STREAM_Writable = fs.createWriteStream(PATH_Formatted_Export);
            COLUMNS_Code = CREATE_COLUMNS(OBJECT_Query);
            STREAM_Stringifier = stringify({ header: true, columns: COLUMNS_Code });
        
            DATABASE_Archive.each(`select * from ${OBJECT_Query.NAME}`, (error, DATA_Row) => {
                if (error) {return console.log(error.message);}
                STREAM_Stringifier.write(DATA_Row);
            });
            STREAM_Stringifier.pipe(STREAM_Writable);
        }, this.TIMER);
    };
    /**
     * ## PIXELATING ARCHIVE
     * 
     * ----------------------
     * 
     * Select all data from archive and create a JSON object
     * 
     * JSON object is sepearted by table name
     * 
     * ------------------------
     * ### RETURNS -->> {JSON} Archive Data
     */
    async PIXELATE() {

        // if (STATUS_TESTING){
        //     console.log('=====================');
        //     console.log('PIXELATING ARCHIVE...');
        //     console.log('=====================');
        // };

        let DATA_Pixelated = {};

        for (const KEY_Table in this.DATA_TABLES) {
            if (Object.hasOwnProperty.call(this.DATA_TABLES, KEY_Table)) {

                const DATA_Chunk = this.DATA_TABLES[KEY_Table];
                this.NAME_TABLE = DATA_Chunk;
                this.LIST_COLUMNS = this.DATA_QUERY[DATA_Chunk];
                let KEY_Columns = Object.keys(this.LIST_COLUMNS);
                DATA_Pixelated[this.NAME_TABLE] = {};

                this._SQL =  this.GENERATE_SQL('RANGE', {});

                // if (STATUS_TESTING){
                //     console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                //     console.log('THE FOLLOWING QUERY HAS BEEN GENERATED FROM YOUR REQUEST...');                            
                //     console.log(_SQL);
                //     console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                // };

                let DATA_Selekted = await this.RESULT_ALL()

                for (let INDEX_Row = 0; INDEX_Row < DATA_Selekted.length; INDEX_Row++) {
                    DATA_Selekted_Pixelated[this.NAME_TABLE][INDEX_Row] = {};
                    const row = DATA_Selekted[INDEX_Row];
                    for (let columnIndex = 0; columnIndex < KEY_Columns.length; columnIndex++) {
                        let columnTag = _COLUMNS[KEY_Columns[columnIndex]].replaceAll('"', '');
                        if (KEY_Columns[columnIndex] !== 'NAME' && KEY_Columns[columnIndex] !== 'NUMBER') {
                            DATA_Pixelated[this.NAME_TABLE][INDEX_Row][KEY_Columns[columnIndex]] = row[ columnTag];
                        };
                    };
                };
            }
        }
        return DATA_Pixelated;
    };

};

