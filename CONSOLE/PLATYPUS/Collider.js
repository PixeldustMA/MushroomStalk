import { pathways } from "../ROUTES/Routes.js";
import { Renderer } from "./Renderer.js";

class Collider extends Renderer {

    constructor() {
        super();
    };

    async SMASH(requestedPath) {
        this.data = {
            USERS: await this.EXPORT_USERS()
        };
        this.path = requestedPath + "TEST.json";
        await this.SAVE();
        await this.EXPORT_ARCHIVE_TO_CSV(requestedPath);
        await this.EXPORT_EXPLORER(requestedPath);
    };
    async EXPORT_USERS() {
        let userObject = {}
        this.path = await this.COLLIDER_INIT_ROUTE({
            TAG: 'USERS', 
            SECTION: 'FOLDERS', 
            SUBSECTION: 'MEMORY',
        });
        const files = await this.READ_FOLDERS();
        for (let userIndex = 0; userIndex < files.length; userIndex++) {
            let userFile = files[userIndex];
            let userFileName = userFile.replace('.json', '');
            let holdObject = await this.CREATE_OBJECT(userFileName);
            userObject[userFileName.toUpperCase()] = holdObject;
        };
        return userObject;
    };
    async EXPORT_DATABASE() {
        await this.EXPORT_ARCHIVE_TO_CSV();
    }
    async CREATE_OBJECT(userTag, userObject) {
        this.path = await this.COLLIDER_INIT_ROUTE({
            TAG: userTag.toUpperCase(),
            SECTION: '',
            USER: 1
        });
        const fileData = await this.READ();
        return [fileData.NAME, fileData];
    }
    async COLLIDER_INIT_ROUTE({ TAG, SECTION = "", SUBSECTION = 0, CUSTOM = 0, PLANET = 0, ASSET = 0, USER = 0}) {
        const pathway = new pathways({TAG, SECTION, SUBSECTION, CUSTOM, PLANET, ASSET, USER });
        await pathway.SETUP();
        return await pathway.ROUTE();
    };
    async EXPORT_EXPLORER(requestedPath) {
        this.path = await this.COLLIDER_INIT_ROUTE({
            TAG: 'EXPLORER_FOLDER',
            SECTION: "RESET",
            SUBSECTION: "EXPLORER"
        });
        await this.COPY_FOLDER(requestedPath);
    }
}

export {Collider};