import { Renderer } from "./Renderer.js";

export default class Database_Renderer extends Renderer{

    constructor(){
        this.DATA_ARCHIVE = {};
    };

    async INSERT_DATA_INTO_ARCHIVE() {
        let query = this.#QUERY_CONFIG();
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
    };
    async IMPORT_ARCHIVE_DATA() {
        let query = this.#QUERY_CONFIG();
        console.log(query)
        return await window.ipcRender.Archive('IMPORT', query);
    };
    #QUERY_CONFIG() {
        return {
            RANGE: this.DATA_ARCHIVE.RANGE,
            TABLE: this.DATA_ARCHIVE.TABLE,
            COLUMNS: this.DATA_ARCHIVE.COLUMNS,

            DATA: this.DATA_ARCHIVE.DATA,

            SEARCHVALUES: this.DATA_ARCHIVE.CONDITION,
            SEARCHCONSTRAINTS: this.DATA_ARCHIVE.IF_DATA
        };
    };
};