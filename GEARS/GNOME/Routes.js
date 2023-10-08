import { createNewPath } from "../PLATYPUS/RenderFunctions.js"

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Load User Settings         //
//          Create Paths             //
// ================================= //

async function getRoute(path) {
	return await createNewPath(path);
}
const Routes = {
	MAIN_PAGES: {
		STARTSCREEN: "../../POCKETS/STARTSCREEN/FrameworkStartScreen.html",
		WELCOMESCREEN:"../../POCKETS/WELCOME/FrameworkWelcome.html",
		COGS: "../../POCKETS/COGS/CogsFramework.html",
		PANIC: "../../POCKETS/PANIC/FrameworkPanic.html",
		GAMES: "../../POCKETS/GAME/FrameworkGameMenu.html",
		NEWUSER: "../../POCKETS/ONBOARDING/FrameworkOnboarding.html",
		ARCHIVE: "../../POCKETS/ARCHIVE/FrameworkArchive.html",
		NOTEBOOK: "../../POCKETS/NOTEBOOK/FrameworkNotebook.html"
	},
	ARCHIVE: {
		ARCHIVENEW: "../../POCKETS/ARCHIVE/FrameworkArchiveNewCharacter.html",
		ARCHIVESEARCH: "../../POCKETS/ARCHIVE/FrameworkArchiveSearchDatabase.html",
		ARCHIVEMEAT: "../../POCKETS/ARCHIVE/FrameworkViewMeat.html"
	},
	FOLDERS: {
		THEMES: "../../ASSETS/IMAGES/PALETTES",
		USERS: "../../REMEMBER/",
		WELCOMEIMAGE: "../../ASSETS/IMAGES/PIXIES"
	},
	MEMORY: {
		FROGS: "../../REMEMBER/Frogs.json",
		RESIDENT: "../../REMEMBER/ResidentFrog.json",
		MESSAGES: "../../SETTINGS/TEXTS/Message.json",
		ALPHABET: "../../SETTINGS/USER/Alphabet.json",
		CHARACTER: "../../REMEMBER/CurrentCharacter.json",
		PANTRY: "../../REMEMBER/PantryState.json"
	},
	IMAGES: {
		COG: "../../ASSETS/IMAGES/COG.png",
		DOORS: "../../ASSETS/IMAGES/BUTTONS/Button - Door.png"
	},
	PLANETS: {
		KEYS: "../../DATABASE/PLANET/PlanetKeys.json",
		PATHS: "../../DATABASE/PLANET/PlanetPaths.json",
		ALLIED: "../../DATABASE/PLANET/SPACE/Allied.json",
		RAXXIA: "../../DATABASE/PLANET/SPACE/Raxxia.json"
	},
	REJENNI: "../../Rejenni.xlsx"
}

async function route(code) {
	let createroute = "";
	switch (code) {

		// == PAGES == //

		case "start":
			createroute = await getRoute(Routes.MAIN_PAGES.STARTSCREEN);
			return createroute;
		case "cogs":
			createroute = await getRoute(Routes.MAIN_PAGES.COGS);
			return createroute;
		case "panic":
			createroute = await getRoute(Routes.MAIN_PAGES.PANIC);
			return createroute;
		case "archive":
			createroute = await getRoute(Routes.MAIN_PAGES.ARCHIVE);
			return createroute;
		case "newUser":
			createroute = await getRoute(Routes.MAIN_PAGES.NEWUSER);
			return createroute;
		case "game":
			createroute = await getRoute(Routes.MAIN_PAGES.GAMES);
			return createroute;		
		case "notebook":
			createroute = await getRoute(Routes.MAIN_PAGES.NOTEBOOK);
			return createroute;

		// == ARCHIVE == //

		case "archiveNew":
			createroute = await getRoute(Routes.ARCHIVE.ARCHIVENEW);
			return createroute;		
		case "archiveSearch":
			createroute = await getRoute(Routes.ARCHIVE.ARCHIVESEARCH);
			return createroute;	
		case "meatPage":
			createroute = await getRoute(Routes.ARCHIVE.ARCHIVEMEAT);
			return createroute;	

			// == FOLDERS == //

		case "themeFolder":
			createroute = await getRoute(Routes.FOLDERS.THEMES);
			return createroute;
		case "userPaths":
			createroute = await getRoute(Routes.FOLDERS.USERS);
			return createroute;
		case "welcomeImage":
			createroute = await getRoute(Routes.FOLDERS.WELCOMEIMAGE);
			return createroute;	
		
		// == MEMORY == //

		case "frogs":
			createroute = await getRoute(Routes.MEMORY.FROGS);
			return createroute;
		case "resident":
			createroute = await getRoute(Routes.MEMORY.RESIDENT);
			return createroute;
		case "message":
			createroute = await getRoute(Routes.MEMORY.MESSAGES);
			return createroute;		
		case "alphabet":
			createroute = await getRoute(Routes.MEMORY.ALPHABET);
			return createroute;	
		case "currentCharacter":
			createroute = await getRoute(Routes.MEMORY.CHARACTER);
			return createroute;	
		case "pantry":
			createroute = await getRoute(Routes.MEMORY.PANTRY);
			return createroute;	

		// == IMAGES == //

		case "ImageCog":
			createroute = await getRoute(Routes.IMAGES.COG);
			return createroute;
		case "ButtonDoor":
			createroute = await getRoute(Routes.IMAGES.DOORS);
			return createroute;				

		case "RejenniTest":
			createroute = await getRoute(Routes.REJENNI);
			return createroute;			

		// == PLANETS == //

		case "PlanetPaths":
			createroute = await getRoute(Routes.PLANETS.PATHS);
			return createroute;			

		default:
			break;
	}
} 

async function createRoute(fileName, code) {
	let createroute = "";
	switch (code) {
		case "userPaths":
			let Folder = Routes.FOLDERS.USERS;
			let routePath = Folder + fileName + ".json"
			createroute = await getRoute(routePath);
			return createroute;
		case "messagePath":
			createroute = await getRoute(fileName);
			return createroute;		
		default:
			break;
	}
}
async function planetRoute(tag, sector = "empty") {
	let createroute = "";
	switch (tag) {
		case "Keys":
			createroute = await getRoute(Routes.PLANETS.KEYS);
			return createroute;
		case "Allied":
			createroute = await getRoute(Routes.PLANETS.ALLIED);
			return createroute;
		case "Raxxia":
			createroute = await getRoute(Routes.PLANETS.RAXXIA);
			return createroute;		
		default:
			break;
	}
}
export {route, createRoute, planetRoute};