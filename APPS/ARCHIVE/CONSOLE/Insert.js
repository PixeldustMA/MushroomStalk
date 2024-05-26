import { Archive } from "./Archive.js";

class Insert extends Archive{

    constructor({TABLE_NAME, COLUMN_LIST, DATA}) {
        super({
            ARCHIVE_TABLE: TABLE_NAME,
            ARCHIVE_COLUMNS: COLUMN_LIST,
            ARCHIVE_DATA: DATA,
            ARCHIVE_IF: "NONE",
            ARCHIVE_CONDITION: "NONE",
        });
    };

    async INSERT_ARCHIVE() {
        return await this.ARCHIVE_ADD();
    };
}

export {Insert}