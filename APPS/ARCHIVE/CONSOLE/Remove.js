import { Archive } from "./Archive.js";

class Remove extends Archive{

    constructor({TABLE_NAME, COLUMN_LIST, DATA}) {
        super({
            ARCHIVE_TABLE: TABLE_NAME,
            ARCHIVE_COLUMNS: COLUMN_LIST,
            ARCHIVE_DATA: DATA,
            ARCHIVE_IF: "NONE",
            ARCHIVE_CONDITION: "NONE",
        });
    };
    async ARCHIVE_REMOVE() {
        return await this.ARCHIVE_DELETE();
    };
}

export {Remove}