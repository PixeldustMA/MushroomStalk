import { User } from "../../APPS/USERS/User.js";
import { Renderer } from "./Renderer.js";

class Tsunami extends Renderer {

    constructor() {
        super();
        this.userInstance = new User();
    };
    async EARTHQUAKE () {
        await this.CLEAR_USERS();
        await this.CLEAR_ARCHIVE();
        await this.CLEAR_EXPLORER();
    };
    async CLEAR_USERS() {
        await this.userInstance.CLEAR_USERS();
        await this.userInstance.RESET_FROGS();
        await this.userInstance.RESET_RESIDENT();
        await this.userInstance.RESET_USER_MEMORY();
    };
    async CLEAR_ARCHIVE() {
        await this.RESET_ALPHABET();
        await this.RESET_ARCHIVE();
        await this.RESET_ACTIVE_CHARACTER();
        await this.RESET_NEW_CHARACTER();
    }
    async CLEAR_EXPLORER() {
        console.log('EXPLORE')
        await this.RESET_EXPLORER_DATABASE();

        setTimeout(() => {
            this.RESET_EXPLORER_MEMORY().then((RESULT) => {return RESULT})
            this.RESET_ALL_PLANET().then((RESULT) => {return RESULT})
            this.RESET_ALL_KEYS().then((RESULT) => {return RESULT})
            this.RESET_ALL_PATHS().then((RESULT) => {return RESULT})            
        }, 8000);

    }
    async RESET_ALPHABET() {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: 'ALPHABET', 
            SECTION: "DATABASE", 
            SUBSECTION: "ARCHIVE"
        });
        this.data = this.#ALPHABET();
        return await this.SAVE();
    };
    async RESET_ARCHIVE() {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: 'DATBASE_ORIGIN',
            SECTION: 'RESET',
            SUBSECTION: 'DATABASE'
        });
        let cleanLocation = await this.userInstance.INIT_ROUTE({
            TAG: 'DATBASE_CLEAN',
            SECTION: 'RESET',
            SUBSECTION: 'DATABASE'
        });
        await this.REMOVE();
        await this.COPY(cleanLocation, this.path);
    };
    async RESET_EXPLORER_MEMORY() {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: 'EXPLORER',
            SECTION: 'MEMORY',
            SUBSECTION: 'ROUTES'
        });
        this.data = this.#EXPLORERMEMORY();
        return this.SAVE();
    };
    async RESET_ALL_PLANET() {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: 'ALL',
            SECTION: 'DATABASE',
            SUBSECTION: 'PLANETS'
        });
        this.data = this.#EMPTY_OBJECT();
        return await this.SAVE();
    };
    async RESET_ALL_KEYS() {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: 'KEYS',
            SECTION: 'DATABASE',
            SUBSECTION: 'PLANETS'
        });
        this.data = this.#EMPTY_OBJECT();
        return await this.SAVE();
    };
    async RESET_ALL_PATHS() {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: 'PATHS',
            SECTION: 'DATABASE',
            SUBSECTION: 'PLANETS'
        });
        this.data = this.#EMPTY_OBJECT();
        return await this.SAVE();
    };
    async RESET_EXPLORER_DATABASE() {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: 'ALL',
            SECTION: 'DATABASE',
            SUBSECTION: 'PLANETS'
        });
        let planetList = await this.READ();
        console.log(planetList)
        let spaceList = Object.keys(planetList);
        spaceList.forEach((PLANET) => {
            this.REMOVE_SPACE_FOLDERS(PLANET).then((RES) => {return RES});
        });  
        setTimeout(() => {
            spaceList.forEach((PLANET) => {
                this.REMOVE_SPACE_FILES(PLANET).then((RES) => {return RES});
            });  
        }, 1000);
        setTimeout(() => {         
        for (const spaceKey in planetList) {
            if (Object.hasOwnProperty.call(planetList, spaceKey)) {
                const SPACE = planetList[spaceKey];
                console.log(SPACE);
                for (const sectorKey in SPACE) {
                    if (Object.hasOwnProperty.call(SPACE, sectorKey)) {
                        const SECTOR = SPACE[sectorKey];
                        console.log(SECTOR);
                        for (const systemKey in SECTOR) {
                            if (Object.hasOwnProperty.call(SECTOR, systemKey)) {
                                const SYSTEM = SECTOR[systemKey];
                                console.log(SYSTEM);
                                SYSTEM.forEach(PLANET => {
                                    console.log(PLANET)
                                    setTimeout(() => {
                                        this.REMOVE_PLANET_FILE(PLANET, "DISASTERS").then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'CELEBRITY').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'ENTERTAINMENT').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'MISC').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'MUSIC').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'SPORTS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'SCHOOLS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'UNIVERSITY').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'EMPLOYMENT').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'FESTIVALS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'IMPORTANT').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'ASTRALS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'GODS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'GUARDIANS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'MONARCHY').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'DISEASEs').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'HOSPITAL').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'KURIEJO').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'SANCTUARY').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'ANIMALS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'DRAGONS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'PLANTS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'ROCKS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'BAD').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'BUSINESS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'LOCATION').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'POI').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'NEWSPAPERS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'BAND').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'CULTS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'DICTATORSHIPS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'HAT').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'MISC_ACTIVITIES').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'ORCHESTRA').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'SPORTS_TEAMS').then((RESUULT) => {return RESUULT})
                                        this.REMOVE_PLANET_FILE(PLANET, 'TERRORISM').then((RESUULT) => {return RESUULT});
                                    }, 1000);

                                });
                            }
                        }
                    }
                }
            }
        };
        }, 3000);
    };
    async REMOVE_SPACE_FOLDERS(folderName) {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: folderName,
            SECTION: "PLANET",
            SUBSECTION: "FOLDERS",
            PLANET: 1
        });
        console.log(this.path)
        await this.DELETE_FOLDER();
    };
    async REMOVE_SPACE_FILES(fileame) {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: fileame,
            SECTION: "PLANET",
            SUBSECTION: "SPACE",
            PLANET: 1
        });
        console.log(this.path)
        await this.REMOVE();
    };
    async REMOVE_PLANET_FILE(planetName, categoryName) {
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: planetName,
            SECTION: categoryName,
            SUBSECTION: 'PLANETS',
            PLANET: 1
        });
        console.log(this.path)
        await this.REMOVE();
};
    async RESET_ACTIVE_CHARACTER() {
        console.log("Active")
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: 'ACTIVE_CHARACTER',
            SECTION: 'DATABASE',
            SUBSECTION: 'ARCHIVE'
        });
        console.log(this.path)
        this.data = this.#EMPTY_OBJECT();
        return await this.SAVE();
    };
    async RESET_NEW_CHARACTER() {
        console.log("RESET")
        this.path = await this.userInstance.INIT_ROUTE({
            TAG: 'NEW_CHARACTER',
            SECTION: 'DATABASE',
            SUBSECTION: 'ARCHIVE'
        });
        console.log(this.path)
        this.data = this.#NEW_CHARACTER();
        return await this.SAVE();
    }
    #ALPHABET() {
            return {
                "A": "0",
                "B": "0",
                "C": "0",
                "D": "0",
                "E": "0",
                "F": "0",
                "G": "0",
                "H": "0",
                "I": "0",
                "J": "0",
                "K": "0",
                "L": "0",
                "M": "0",
                "N": "0",
                "O": "0",
                "P": "0",
                "Q": "0",
                "R": "0",
                "S": "0",
                "T": "0",
                "U": "0",
                "V": "0",
                "W": "0",
                "X": "0",
                "Y": "0",
                "Z": "0"
            };
    };
    #EXPLORERMEMORY() {
        return {"ROOT": {
            "ROOT": "../../CONSOLE/ROUTES/Explorer.json"
        },
        "CONSOLE": {
            "KEYS": "../../APPS/EXPLORE/MEMORY/PlanetKeys.json"
        },
        "PLANET": {
            "CONSOLE": {
                "ALL": "../../APPS/EXPLORE/MEMORY/AllPlanets.json",
                "PATHS": "../../APPS/EXPLORE/MEMORY/PlanetPaths.json",
                "KEYS": "../../APPS/EXPLORE/MEMORY/PlanetKeys.json"
            },
            "SPACE": {
            },
            "SECTOR": {
            },
            "SYSTEM": {
            },
            "PLANETS": {
            },
            "FOLDERS": {
                "SPACE": "../../DATABASE/EXPLORER/SPACE/"
            }
        },
        "EDUCATION HEADER": "//",
        "SCHOOLS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "UNIVERSITY": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "COURSES": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        },
        "LESSONS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        },
        "ACCOMODATION": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        },
        "HEALTH HEADER": "//",
        "HOSPITAL": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "DISEASES": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "KURIEJO": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "SANCTUARY": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "ACTIVITY HEADER": "//",
        "MISC": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "SPORTS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "MUSIC": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "CULTURE HEADER": "//",
        "CELEBRITY": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "ENTERTAINMENT": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "LIFE HEADER": "//",
        "ANIMALS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "DRAGONS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "PLANTS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "ROCKS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "LINNEANS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        },
        "HALEX HEADER": "//",
        "ELEMENTS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        },
        "MONARCHY": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "GODS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "GUARDIANS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "ASTRALS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "BONDS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        },
        "POWERS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        },
        "ORGANISATION HEADER": "//",
        "ORCHESTRA": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "BAND": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "DICTATORSHIPS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "CULTS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "SPORTS_TEAMS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "HAT": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "MISC_ACTIVITIES": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "TERRORISM": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "LOCATION HEADER": "//",
        "LOCATION": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "BUSINESS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "BAD": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "POI": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "EMPLOYMENT HEADER": "//",
        "EMPLOYMENT": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "NEWSPAPER": "//",
        "NEWS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        },
        "NEWSPAPERS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "CLIMATE": "//",
        "DISASTERS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "EVENTS": "//",
        "FESTIVALS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "IMPORTANT": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {
            },
            "TYPES": {},
            "MEMORY": {}
        },
        "DESTRUCTION PATH": "//",
        "DESTRUCTION": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        },
        "SECTIONS": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "MEMORY": {}
        }
        }
    };
    #EMPTY_OBJECT() {
        return {};
    };
    #NEW_CHARACTER() {
        return {
            "REQUIRED": "NONE",
            "ACTIVITY": "NONE",
            "PERSONAL": "NONE",
            "ANCESTRY": "NONE",
            "EDUCATION": "NONE",
            "HALEX": "NONE",
            "EMPLOYMENT": "NONE",
            "SECTION": "NONE"
        }
    };
};

export {Tsunami}