import { DatabaseController } from "../../../CONSOLE/CONTROLLERS/DatabaseController.js";

class Archive extends DatabaseController{

    constructor({ 
        ARCHIVE_TABLE, 
        ARCHIVE_COLUMNS, 
        ARCHIVE_DATA,
        ARCHIVE_IF,
        ARCHIVE_CONDITION
    }) 
    {
        super();
        this.archiveData = {
            TABLE: ARCHIVE_TABLE,
            COLUMNS: ARCHIVE_COLUMNS,
            DATA: ARCHIVE_DATA,
            IF_DATA: ARCHIVE_IF,
            CONDITION: ARCHIVE_CONDITION
        }
    };

    async ARCHIVE_ADD() {
        return await this.ARCHIVE('INSERT');
    }
    async ARCHIVE_READ() {
        return await this.ARCHIVE('SELECT');
    };
    async ARCHIVE_DELETE() {
        return await this.ARCHIVE('SELECT');
    };
    async ARCHIVE_CHANGE() {
        return await this.ARCHIVE('UPDATE');
    }
};

export {Archive}