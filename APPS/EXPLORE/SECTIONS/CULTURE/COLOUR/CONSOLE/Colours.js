import { Explorer } from "../../../../CONSOLE/Explorer.js";

class Colours extends Explorer {

    constructor() {
        super();
        this.categoryName = "COLOURS";
        this.filePath = "£££-UserMemory/EXPLORER/DATABASE/CULTURE/COLOURS/";
    };

    // == GENERATION == //
    async GENERATE_COLOURS(colourName, colourType) {
        setTimeout(() => {
            this.UPDATE_COLOURS_ALL_FILE(colourName, colourType)
                .then((UPDATED) => {return UPDATED;});
        }, 1000);
    };
    async GENERATE_COLOURS_TYPE(typeName) {
        await this.EDIT_ALL_TYPE_FILE(this.categoryName, typeName);
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        file[typeName.toUpperCase()] = [];
        this.data = file;
        await this.SAVE();
    };

    // == UPDATE == //
    async UPDATE_COLOURS_ALL_FILE(colourName, colourType) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        file[colourType.toUpperCase()].push(colourName);
        this.data = file;
        await this.SAVE();
    };
    async UPDATE_COLOURS_TYPE_FILE(colourName, typeName) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: typeName.toUpperCase(),
            SECTION: this.categoryName,
            SUBSECTION: 'TYPES'
        });
        let file = await this.READ();
        file['COLOURS'].push(colourName);
        this.data = file;
        await this.SAVE();
    };

    // == READ == //
    async READ_COLOURS(colourName) {
        return await this.READ_ITEN(this.categoryName, colourName);
    };
    async READ_COLOURS_TYPES() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'TYPES',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        return file;
    };
    async READ_COLOURS_ALL() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: 'FOOD',
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    };

    // == SEARCH == // 
    async SEARCH_COLOURS_BY_TYPE(type) {};

}

export {Colours};