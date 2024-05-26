import { Renderer } from "./Renderer.js";

class DatabaseRenderer extends Renderer{

    constructor() {
        super()
        this.archiveData = {};
    };

    async INSERT_DATA_INTO_ARCHIVE() {
        let query = this.#QUERY_CONFIG();
        console.log(query)
        return await window.ipcRender.Archive('INSERT', query);
    };
    async UPDATE_ROW_IN_ARCHIVE() {
        this.#QUERY_CONFIG();
        return await window.ipcRender.Archive('UPDATE', query);
    };
    async SELECT_ROW_IN_ARCHIVE() {
        this.#QUERY_CONFIG();
        return await window.ipcRender.Archive('SELECT', query);
    };
    async SELECT_ALL_ROWS_IN_ARCHIVE() {
        this.#QUERY_CONFIG();
        return await window.ipcRender.Archive('SELECT', query);
    };
    async DELETE_ROW_FROM_ARCHIVE() {
        this.#QUERY_CONFIG();
        return await window.ipcRender.Archive('DELETE', query);
    }
    #QUERY_CONFIG() {
        return {
            RANGE: this.archiveData.RANGE,
            TABLE: this.archiveData.TABLE,
            COLUMNS: this.archiveData.COLUMNS,

            DATA: this.archiveData.DATA,

            SEARCHVALUES: this.archiveData.CONDITION,
            SEARCHCONSTRAINTS: this.archiveData.IF_DATA
        };
    }
}

export {DatabaseRenderer}