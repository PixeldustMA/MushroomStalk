import { Sunflower } from "../../APPS/SUNFLOWER/CONSOLE/SunflowerController.js";
import { DatabaseRenderer } from "../PLATYPUS/DatabaseRenderer.js";
import { pathways } from "../ROUTES/Routes.js";

class DatabaseController extends DatabaseRenderer {

    constructor() {
        super();
    }

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
        }
    };
    async GENERATE_BIRTH_YEARS(Planet, Year) {
        let dateObject = await this.SUNFLOWER(Planet, Year, "Ekstera");
        return {
            HELIAN: (dateObject.targetObject["EKSTERA"]).toString(),
            UHX: (dateObject.planetObject.UHX).toString(),
            LOCAL: Year
        };
    };
    async SUNFLOWER(origin, date, target) {
        const sun = new Sunflower(origin, target, date);
        return await sun.CONVERT();
    };
    async EXPLORER_INIT_ROUTE({ TAG, SECTION = "", SUBSECTION = "", CUSTOM = 0, PLANET = 1, ASSET = 0, USER = 0}) {
        const pathway = new pathways({TAG, SECTION, SUBSECTION, CUSTOM, PLANET, ASSET, USER });
        await pathway.SETUP();
        console.log(TAG, SECTION, SUBSECTION)
        return await pathway.ROUTE();
    };
}

export {DatabaseController}