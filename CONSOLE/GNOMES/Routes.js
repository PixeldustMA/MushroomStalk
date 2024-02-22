import { Renderer } from "../PLATYPUS/Renderer.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.9          //
//        Load User Settings         //
//          Create Paths             //
// ================================= //

// == ROUTES AND INSTANCES == //
const Platypus = new Renderer();
const AvailableRoutes = await Platypus.availableRoutes();
let Routes = JSON.parse(AvailableRoutes);
    
// == FUNCTIONS == //
/**
 * CREATE A USABLE PATH
 * @param {string} routepath 
 * @returns {Promise} Path
 */
async function getPath(routepath) {
    Platypus.path = routepath
    return await Platypus.fetchPath();
}
/**
 * CREATE A NEW ROUTE
 * @param {string} code 
 * @param {string} assetName 
 * @returns path
 */
async function route(code, assetName = "none") {
    switch (code.toUpperCase()) {

        // == PAGES == //
        case "START":
            return await getPath(Routes.MAINPAGES.STARTSCREEN);
        case "WELCOME":
            return await getPath(Routes.MAINPAGES.WELCOMESCREEN);
        case "TITLE":
            return await getPath(Routes.MAINPAGES.TITLE);
        case "MAP":
            return await getPath(Routes.MAINPAGES.MAP);
        case "COGS":
            return await getPath(Routes.MAINPAGES.COGS);
        case "PANIC":
            return await getPath(Routes.MAINPAGES.PANIC);
        case "ARCHIVE":
            return await getPath(Routes.MAINPAGES.ARCHIVE);               
        case "NOTEBOOK":
            return await getPath(Routes.MAINPAGES.NOTEBOOK);
        case "TRACKER":
            return await getPath(Routes.MAINPAGES.TRACKER)
        case "BUNDLER":
            return await getPath(Routes.MAINPAGES.BUNDLER);
        case "EXPLORER":
            return await getPath(Routes.MAINPAGES.EXPLORER);
        case "SQUIRREL":
            return await getPath(Routes.MAINPAGES.SQUIRREL);
        case "FIREFLIES":
            return await getPath(Routes.MAINPAGES.FIREFLIES);
        case "BALLOONS":
            return await getPath(Routes.MAINPAGES.BALLOONS);
        case "PICKLE":
            return await getPath(Routes.MAINPAGES.PICKLE);
        case "SUNFLOWER":
            return await getPath(Routes.MAINPAGES.SUNFLOWER);
        case "FRIDGE":
            return await getPath(Routes.MAINPAGES.FRIDGE);
        case "TREE":
            return await getPath(Routes.MAINPAGES.TREE);

        // == INSETS == // 

        case "TRACKERSET":
            return await getPath(Routes.JELLYFISH.TRACKERSET);

        // == MENUS == //

        case "LIBRARY":
            return await getPath(Routes.MENUS.LIBRARY);
        case "OFFICE":
            return await getPath(Routes.MENUS.OFFICE);
        case "CUPBOARD":
            return await getPath(Routes.MENUS.CUPBOARD);

        // == ASSETS == //

        case "ANIMATION":
            return await AnimationPath(assetName);
        case "IMAGE":
            return await ImagePath(assetName);

         // == DATABASE == //

        case "EXPLORERDATABASE":
            return await ExplorerPath(assetName);
        case "TIME":
            return await getPath(Routes.DATABASE.PLANET.TIMES)

		// == FOLDERS == //

		case "THEMEFOLDER":
			return await getPath(Routes.FOLDERS.THEMES);
		case "WELCOMEFOLDER":
			return await getPath(Routes.FOLDERS.WELCOMEFOLDER);
        case "CONVERTSPACE":
            return await getPath(Routes.FOLDERS.CONVERSION.SPACE);
        case "CONVERTSECTOR":
            return await getPath(Routes.FOLDERS.CONVERSION.SECTOR);
        case "JELLYFISHBUTTONS":
            return await getPath(Routes.JELLYFISH.BUTTONS.FOLDERS.BUTTONS);
        case "PALETTES":
            return await getPath(Routes.FOLDERS.PALETTES);

        // == MEMORY == //

        case "FROGS":
			return await getPath(Routes.MEMORY.FROGS);
		case "RESIDENT":
			return await getPath(Routes.MEMORY.RESIDENT);
		case "MESSAGES":
			return await getPath(Routes.MEMORY.MESSAGES);
        case "ALPHABET":
            return await getPath(Routes.MEMORY.ALPHABET);
        case "CHARACTER":
            return await getPath(Routes.MEMORY.CHARACTER);
        case "PANTRY":
            return await getPath(Routes.MEMORY.PANTRY);
        case "SETTINGS":
            return await getPath(Routes.MEMORY.SETTINGS);
        case "ACTIVECHARACTER":
            return await getPath(Routes.MEMORY.ACTIVECHARACTER);

        // == ARCHIVE == //       

        case "ARCHIVENEW":
            return await getPath(Routes.SECTIONS.ARCHIVE.NEW);
        case "ARCHIVESEARCH":
            return await getPath(Routes.SECTIONS.ARCHIVE.SEARCH);
        case "ARCHIVEDISPLAY":
            return await getPath(Routes.SECTIONS.ARCHIVE.DISPLAY);
        case "ARCHIVEUPDATE":
            return await getPath(Routes.SECTIONS.ARCHIVE.UPDATE);

        // == LOADING == //

        case "NEWUSER":
            return await getPath(Routes.SECTIONS.LOADING.NEW_USER);
        case "VALIDATION":
            return await getPath(Routes.SECTIONS.LOADING.VALIDATION);
        case "ONBOARDING":
            return await getPath(Routes.SECTIONS.LOADING.ONBOARDING);

        // == GIZMO == //

        case "SKETCH":
            return await getPath(Routes.SECTIONS.GIZMOS.SKETCH);
        case "PIXELPAGE":
            return await getPath(Routes.SECTIONS.GIZMOS.PIXELPAGE);
        case "TVTRACKER":
            return await getPath(Routes.SECTIONS.GIZMOS.TVTRACKER);
        case "MUMBLIES":
            return await getPath(Routes.SECTIONS.GIZMOS.MUMBLIES);
        case "WHEEL":
            return await getPath(Routes.SECTIONS.GIZMOS.WHEEL);          
        default:
            break;
    }
}
/**
 * CREATE PATH TO ANIMATION ASSET
 * @param {string} assetName 
 * @returns Animation Asset Path
 */
async function AnimationPath(assetName) {
    let ObjectPath = Routes.ASSETS.ANIMATIONS;
    return await getPath(ObjectPath[assetName.toUpperCase()]);
}
/**
 * CREATE PATH TO IMAGE ASSET
 * @param {string} assetName 
 * @returns Image Asset Path
 */
async function ImagePath(assetName) {
    let ObjectPath = Routes.ASSETS.IMAGES;
    return await getPath(ObjectPath[assetName.toUpperCase()]);
}
/**
 * CREATE PATH TO EXPLORER DATABASE
 * @param {string} tag 
 * @returns Database Path
 */
async function ExplorerPath(tag) {
    let Explorerpath = Routes.DATABASE.PLANET;
    return await getPath(Explorerpath[tag.toUpperCase()]);
}
/**
 * CREATE A NEW ROUTE
 * @param {string} fileName 
 * @param {string} code 
 * @returns {Promise} path
 */
async function createRoute(fileName, code) {
	let craftedRoute = "";
	let Folder = "";
	let routePath = "";

	switch (code) {

		case "USER":
			Folder = Routes.FOLDERS.USERS;
			routePath = Folder + fileName + ".json"
			craftedRoute = await getPath(routePath)
			return craftedRoute;

		case "messagePath":
			craftedRoute = await getPath(fileName);
			return craftedRoute;

		case "Conversion-Space":
			Folder = Routes.FOLDERS.CONVERSION.SPACE;
			routePath = Folder + fileName;
			craftedRoute = await getPath(routePath);
			return craftedRoute;
		
		case "Conversion-Sector":
			Folder = Routes.FOLDERS.CONVERSION.SECTOR;
			routePath = Folder + fileName;
			craftedRoute = await getPath(routePath);
			return craftedRoute;

		default:
			break;
	}
}
/**
 * CREATE A PATH TO A SPECIFIC EXPLORER FILE
 * @param {String} tag 
 * @param {string} sector 
 * @returns PLANET PATH
 */
async function planetRoute(tag, sector = "empty") {
	let planetPath = "";
	switch (tag.toUpperCase()) {
		case "Keys":
			planetPath = await getPath(Routes.DATABASE.PLANETS.KEYS);
			return planetPath;
		case "ALLIED":
			planetPath = await getPath(Routes.DATABASE.PLANET.ALLIED);
			return planetPath;
		case "Raxxia":
			planetPath = await getPath(Routes.DATABASE.PLANETS.RAXXIA);
			return planetPath;
		case "Dragon":
			planetPath = await getPath(Routes.DATABASE.PLANETS.DRAGON);
			return planetPath;
		case "Niamati":
			planetPath = await getPath(Routes.DATABASE.PLANETS.NIAMATI);
			return planetPath;
		case "Sacred":
			planetPath = await getPath(Routes.DATABASE.PLANETS.SACRED);
			return planetPath;
		default:
			break;
	}
}

async function customRoute(RouteTag, tagArray) {
    let Origin = Routes[RouteTag];
    let customObject = Origin;

    for (let index = 0; index < tagArray.length; index++) {
        customObject = customObject[tagArray[index]];
    };

    console.log(customObject)
    return await getPath(customObject);
}
export { route, createRoute, AnimationPath, planetRoute, customRoute}