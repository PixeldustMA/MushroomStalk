import { Explorer } from "../../../../../CONSOLE/Explorer.js";

class Misc extends Explorer{
    constructor() {
        super()
        this.categoryName = "MISC";
        this.filePath = "£££-UserMemory/EXPLORER/DATABASE/CULTURE/MISC/";
    };

    // == GENERATION == //
    async GENERATE_MISC_ACTIVITY(activityName, description) {
        await this.NEW_TEXT_FILE(this.categoryName.toUpperCase(), activityName, description, this.filePath);
        await this.INSERT_LIBRARY_FILE(this.categoryName, activityName, this.filePath);
        await this.GENERATE_MISC_ACTIVITY_DATA(activityName);
        await this.SET_MISC_ACTIVITY_NAME(activityName, activityName);
        setTimeout(() => {
            this.UPDATE_ALL_MISC_FILE(activityName)
                .then((UPDATED) => {return UPDATED;});
        }, 1000);
    };

    // == UPDATES == //
    async SET_MISC_ACTIVITY_NAME(value, libraryName) {
        const libraryFile = await this.READ_ITEN(this.categoryName, libraryName);
        libraryFile.NAME = value;
        this.data = libraryFile;
        return await this.SAVE();
    };
    async CHANGE_MISC_ACTIVITY_DESCRIPTION(activityName, newDescription) {
        return await this.UPDATE_DESCRIPTION_FILE(this.categoryName, activityName, newDescription);
    };
    async GENERATE_MISC_ACTIVITY_DATA(item) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: item.toUpperCase(),
            SECTION: this.categoryName,
            SUBSECTION: "LIBRARY",
        });
        this.data = this.#ACTIVITY_TEMPLATE();
        await this.SAVE();
    };
    async UPDATE_ALL_MISC_FILE(miscActivity) {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        let file = await this.READ();
        file[miscActivity.toUpperCase()] = [miscActivity.toUpperCase(), this.categoryName, "LIBRARY"];
        this.data = file;
        await this.SAVE();
    };

    // == READ == //
    async READ_MISC_ACTIVITY(itemName) {
        return await this.READ_ITEN(this.categoryName, itemName);
    };
    async READ_MISC_DESCRIPTION(itemName) {
        return await this.READ_DETAILS(this.categoryName, itemName);
    };
    async READ_MISC_ALL() {
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'ALL',
            SECTION: this.categoryName,
            SUBSECTION: 'CONSOLE'
        });
        return await this.READ();
    };


    // == TEMPLATES == //
    #ACTIVITY_TEMPLATE() {
        return {
            "NAME": ""
        }
    };
};

export {Misc};