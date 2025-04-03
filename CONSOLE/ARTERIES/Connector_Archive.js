import Database_Renderer from "../LUNGS/Database_Renderer.js";

export default class Connector_Archive extends Database_Renderer{

    constructor(){
        super();
    };

    async ARCHIVE(TAG) {
        switch (TAG) {
            case 'SELECT':
                await this.SELECT_ALL_ROWS_IN_ARCHIVE();
                break;
            case 'UPDATE':
                await this.UPDATE_ROW_IN_ARCHIVE();
                break;
            case 'INSERT':
                await this.INSERT_DATA_INTO_ARCHIVE();
                break;
            case 'DELETE':
                await this.DELETE_ROW_FROM_ARCHIVE();
                break;
            default:
                break;
        };
    };
}