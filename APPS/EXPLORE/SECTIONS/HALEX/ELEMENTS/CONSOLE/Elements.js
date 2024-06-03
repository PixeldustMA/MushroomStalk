import { Explorer } from "../../../../CONSOLE/Explorer.js";

class Elements extends Explorer {

    constructor() {
        super();
        this.categoryName = "ELEMENTS";
        this.filePath = "£££-UserMemory/EXPLORER/DATABASE/HALEX/ELEMENTS/";
    };

    // == GENERATION == //
    async GENERATE_ELEMENTS(elementName, elementType, elementDescription) {
        await this.INSERT_NEW_ITEM(this.categoryName, elementName, elementType, this.filePath, false, "NONE", elementDescription);
        await this.GENERATE_ELEMENTS_DATA(elementName);
        await this.SET_ELEMENTS_TYPE(elementType, elementName);
        setTimeout(() => {
            this.SET_ELEMENTS_NAME(elementName, elementName).then((ELE_RESULT) => {return ELE_RESULT})         
        },500);

        setTimeout(() => {
            this.UPDATE_ELEMENTS_ALL_FILE(elementName)
                .then((UPDATED) => {return UPDATED;});
        }, 1000);
    };
    async GENERATE_ELEMENTS_TYPE(typeName, typeDescription) {
        await this.CREATE_TYPE(this.categoryName, typeName, this.filePath);
        await this.SET_ELEMENTS_TYPE_DESCRIPTION(typeName, typeDescription);
    };
    async GENERATE_ELEMENTS_DATA(elementName) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: elementName.toUpperCase(),
            SECTION: this.categoryName,
            SUBSECTION: "LIBRARY",
        });
        this.data = this.#ELEMENT_TEMPLATE();
        await this.SAVE();
    };

    // == SET == //
    async SET_ELEMENTS_TYPE(value, elementName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, elementName);
        libraryFile.TYPE = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_ELEMENTS_NAME(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.NAME = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async SET_ELEMENTS_DESCRIPTION(elementName, newDescription) {
        return await this.UPDATE_DESCRIPTION_FILE(this.categoryName, elementName, newDescription);

    };
    async SET_ELEMENTS_TYPE_DESCRIPTION(typeName, description) {
        return await this.NEW_TEXT_FILE(this.categoryName, typeName, description, this.filePath);
    };

    // == UPDATE == //
    async UPDATE_ELEMENTS_ALL_FILE(elementName) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        file[elementName.toUpperCase()] = [elementName.toUpperCase(), this.categoryName, "LIBRARY"];
        this.data = file;
        await this.SAVE();
    }

    // == READ == //
    async READ_ELEMENTS(elementName) {
        return await this.READ_ITEN(this.categoryName, elementName);
    }
    async READ_ELEMENT_TYPES() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'TYPES',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        return file;
    }
    async READ_ELEMENT_DESCRIPTION(elementName) {
        return await this.READ_DETAILS(this.categoryName, elementName);
    }
    async READ_ELEMENTS_ALL() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: 'FOOD',
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    }

    // == SEARCH == //
    async SEARCH_ELEMENTS_BY_TYPE(type) {
        const allItemFile = await this.READ_ALL();
        const allItems = Object.keys(allItemFile);
        let typeList = [];

        for (let itemIndex = 0; itemIndex < allItems.length; itemIndex++) {
            const foodStuff = allItems[itemIndex];
            let itemData = await this.READ_ITEN(this.categoryName, foodStuff);
            if (itemData.TYPE === type.toUpperCase()) {
                typeList.push(foodStuff);
            };

        };
        return typeList;
    };

    // == TEMPLATES == //
    #ELEMENT_TEMPLATE() {
        return {
            "NAME": "",
            "TYPE": ""
        }
    };
}

export {Elements};