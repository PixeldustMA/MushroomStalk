import { Archive } from "./Archive.js";

class Update extends Archive{

    constructor({TABLE_NAME, COLUMN_LIST, DATA, SEARCH_IF, SEARCH_CONDITION}) {
        super({
            ARCHIVE_TABLE: TABLE_NAME,
            ARCHIVE_COLUMNS: COLUMN_LIST,
            ARCHIVE_DATA: DATA,
            ARCHIVE_IF: SEARCH_IF,
            ARCHIVE_CONDITION: SEARCH_CONDITION
        });
    };
    async UPDATE_ARCHIVE() {
        return await this.ARCHIVE_CHANGE();
    };
}

export {Update}