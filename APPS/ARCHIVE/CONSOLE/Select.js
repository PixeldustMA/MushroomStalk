import { Archive } from "./Archive.js";

class Select extends Archive{

    constructor({TABLE_NAME, COLUMN_LIST, SEARCH_IF, SEARCH_CONDITION}) {
        super({
            ARCHIVE_TABLE: TABLE_NAME,
            ARCHIVE_COLUMNS: COLUMN_LIST,
            ARCHIVE_IF: SEARCH_IF,
            ARCHIVE_CONDITION: SEARCH_CONDITION,
            ARCHIVE_DATA: "NONE"
        });
    };
    async SELECT_ARCHIVE() {
        return await this.ARCHIVE_READ();
    };
}

export {Select}