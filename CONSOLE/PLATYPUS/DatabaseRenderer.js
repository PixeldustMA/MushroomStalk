
// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Access Renderer            //
//          for Database             //
// ================================= //

class DatabaseDuck {

    constructor () {

    }

    /**
     * INSERT DATA INTO THE ARCHIVE
     * @param {Array} "{QueryConfig} // [Parameters to insert]" 
     * @returns null
     */
    async insert(data) {
        return await window.ipcRender.Insert(data[0], data[1]);
    }
    /**
     * ADD A CHARACTER TO THE DATABASE
     */
    async addCharacter(request) {
        return await window.ipcRender.InsertCharacterKeys(request);
    }
    async fetchMushrooms() {
        return await window.ipcRender.SelectAll('MUSHROOM_Codes');
    }
    async select(nameOfTable, nameOfColumBeingSelected, requestedData, dataMatch) {
        return await window.ipcRender.Select(
            nameOfTable, 
            nameOfColumBeingSelected, 
            requestedData, 
            dataMatch);
    }
    async update(data, column, table, conditionColumn, conditionValue) {
        return await window.ipcRender.UpdateDatabase(data, column, table, conditionColumn, conditionValue);
    }
    
}

export { DatabaseDuck }