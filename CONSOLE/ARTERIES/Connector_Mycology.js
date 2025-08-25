import AR_Mycology from "../../APPS/APP - ARCHIVE/CONNECTORS/AR_Mycology.js";
import BN_Mycology from "../../APPS/APP - BUNDLER/CONNECTORS/BN_Mycology.js";
import EL_Mycology from "../../APPS/APP - ELEMENTS/CONNECTORS/EL_Mycology.js";
import EV_Mycology from "../../APPS/APP - EVENTS/CONNECTORS/EV_Mycology.js";
import EX_Mycology from "../../APPS/APP - EXPLORER/CONNECTORS/EX_Mycology.js";
import Myco_Cupboard from "../../APPS/APP - MYCOLOGY/Mycology_Cupboard.js";
import ST_Mycology from "../../APPS/APP - MYCOLOGY/Mycology_Settings.js";
import NM_Mycology from "../../APPS/APP - NAMES/CONNECTORS/NM_Mycology.js";
import SF_Mycology from "../../APPS/APP - SUNFLOWER/CONNECTORS/SF_Mycology.js";
import TB_Mycology from "../../APPS/APP - TOOLBOX/CONNECTORS/TB_Mycology.js";
import Mushroom_Cap from "../LUNGS/MushroomCap.js";

export default class Connector_Mycology extends Mushroom_Cap{

    /**
     * ## MYCOLOGY CONSTRUCTOR
     */
    constructor(SESSION, USERNAME = 0) {

        super();

        // =============== //
        // ## INSTANCES ## //
        // =============== //

        this.INSTANCE_MEMORY = SESSION;

        // =============== //
        // ## USER DATA ## //
        // =============== //

        this.USERNAME = USERNAME
    };

    // ============== //
    // ## SEGMENTS ## //
    // ============== //

    /**
     * ## VALIDATION AND BUILDING OF CUPBOARD
     * --------------------------------------
     * 
     * - Activate the Mycology Cupboard Class
     * - Run a validation check
     * - Build any necessary files
     */
    async MYCOLOGY_CUPBOARD() {

        await this.REQUEST_SESSION_PATHS();
        await this.REQUEST_SESSION_TEMPLATES();

        let BUCKET_Folders = this.SESSION.PATHS.CUPBOARD;

        await new Myco_Cupboard({
            CUPBOARD_CONFIG_TOP: this.SESSION.PATHS.TOP.CUPBOARD,
            CUPBOARD_CONFIG_PATHS_FOLDERS: BUCKET_Folders.TOP,
            CUPBOARD_CONFIG_PATHS_USERS: BUCKET_Folders.USERS,
            CUPBOARD_CONFIG_PATHS_TEXT: BUCKET_Folders.TEXT,
            CUPBOARD_CONFIG_PATHS_ROUTES: BUCKET_Folders.ROUTES,
            CUPBOARD_CONFIG_PATHS_PANTRY: BUCKET_Folders.PANTRY,
            CUPBOARD_CONFIG_PATHS_MEMORY: BUCKET_Folders.MEMORY,
            CUPBOARD_CONFIG_PATHS_SETTINGS: BUCKET_Folders.APP.SETTINGS,
            CUPBOARD_CONFIG_TEMPLATES: this.SESSION.TEMPLATES.MYCOLOGY
        }).RUN();
    };
    async MYCOLOGY_WAR() {
        let SESSION_PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');

        let INSTANCE_ELEMENTS = new EL_Mycology({
            MYCOLOGY_CONFIG_PATH_CATEGORY: SESSION_PATHS.WAR.ELEMENTS.CATEGORIES,
            MYCOLOGY_CONFIG_PATH_DESCRIPTION: SESSION_PATHS.WAR.ELEMENTS.DESCRIPTION,
            MYCOLOGY_CONFIG_PATH_CONSOLE: SESSION_PATHS.WAR.ELEMENTS.CONSOLE,
            MYCOLOGY_CONFIG_PATH_ELEMENT: SESSION_PATHS.WAR.ELEMENTS.ELEMENTS
        });
        await INSTANCE_ELEMENTS.INITIALISE_ELEMENT();
        
        console.log('ELEMENTS COMPLETE');

        let INSTANCE_EXPLORER = new EX_Mycology({
            MYCOLOGY_CONFIG_PATH_CONSOLE: SESSION_PATHS.WAR.EXPLORER.CONSOLE,
            MYCOLOGY_CONFIG_PATH_PLANET: SESSION_PATHS.WAR.EXPLORER.PLANET,
            MYCOLOGY_CONFIG_PATH_SYSTEM: SESSION_PATHS.WAR.EXPLORER.SYSTEM,
            MYCOLOGY_CONFIG_PATH_SECTOR: SESSION_PATHS.WAR.EXPLORER.SECTOR,
            MYCOLOGY_CONFIG_PATH_SPACE: SESSION_PATHS.WAR.EXPLORER.SPACE
        });

        await INSTANCE_EXPLORER.INITIALISE_EXPLORER();

        console.log('EXPLORER COMPLETE');

        let INSTANCE_ARCHIVE = new AR_Mycology({
            MYCOLOGY_CONFIG_PATH_CONSOLE: SESSION_PATHS.WAR.ARCHIVE.CONSOLE,
            MYCOLOGY_CONFIG_PATH_CHARACTER: SESSION_PATHS.WAR.ARCHIVE.CHARACTERS
        });
        await INSTANCE_ARCHIVE.INITIALISE_ARCHIVE();

        console.log('ARCHIVE COMPLETE');

        let INSTANCE_EVENTS = new EV_Mycology({
            MYCOLOGY_CONFIG_PATH_CONSOLE: SESSION_PATHS.WAR.EVENT.CONSOLE,
            MYCOLOGY_CONFIG_PATH_EVENTS: SESSION_PATHS.WAR.EVENT.EVENTS,
            MYCOLOGY_CONFIG_PATH_INDEX: SESSION_PATHS.WAR.EVENT.YEARS,
            MYCOLOGY_CONFIG_PATH_TEXT: SESSION_PATHS.WAR.EVENT.TEXT
        });
        await INSTANCE_EVENTS.INITIALISE_EVENT();

        console.log('EVENTS COMPLETE');

        let INSTANCE_BUNDLER = new BN_Mycology({
            MYCOLOGY_CONFIG_PATH_CONSOLE: SESSION_PATHS.WAR.BUNDLER.CONSOLE
        });
        await INSTANCE_BUNDLER.INITIALISE_BUNDLER();

        console.log('BUNDLER COMPLETE');

        let INSTANCE_SUNFLOWER = new SF_Mycology({
            MYCOLOGY_CONFIG_PATH_TIME: SESSION_PATHS.WAR.SUNFLOWER.TIME
        });
        await INSTANCE_SUNFLOWER.INITIALISE_SUNFLOWER();

        console.log('SUNFLOWER COMPLETE');

        let INSTANCE_TOOLBOX = new TB_Mycology({
            MYCOLOGY_CONFIG_PATH_TRACKER: SESSION_PATHS.TOOLBOX.TOP.TRACKER,
            MYCOLOGY_CONFIG_PATH_WASHI: SESSION_PATHS.TOOLBOX.TOP.WASHI
        });
        await INSTANCE_TOOLBOX.INITIALISE_TOOLBOX();

        console.log('TOOLBOX COMPLETE');

        let INSTANCE_NAMES = new NM_Mycology({
            MYCOLOGY_CONFIG_PATH_CONSOLE: SESSION_PATHS.WAR.NAMES.CONSOLE,
            MYCOLOGY_CONFIG_PATH_CATEGORY: SESSION_PATHS.WAR.NAMES.CATEGORY,
            MYCOLOGY_CONFIG_PATH_LOCATIONS: SESSION_PATHS.WAR.NAMES.LOCATIONS,
            MYCOLOGY_CONFIG_PATH_NAMES: SESSION_PATHS.WAR.NAMES.NAMES
        });

        await INSTANCE_NAMES.INITIALISE_NAMES();
        console.log('NAMES COMPLETE');
    };
    async MYCOLOGY_SETTINGS() {
        let SESSION_PATHS = await this.INSTANCE_M_PATHS.INITIALISE_USERNAME('PIXEL');
        let INSTANCE_SETTINGS = new ST_Mycology({
            SETTINGS_CONFIG_PATHS: SESSION_PATHS
        });
        await INSTANCE_SETTINGS.RUN();
    };
}