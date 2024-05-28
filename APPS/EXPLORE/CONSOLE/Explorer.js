import { DatabaseController } from "../../../CONSOLE/CONTROLLERS/DatabaseController.js";

class Explorer extends DatabaseController{

    constructor() {
        super();
        this.paths = {};
        this.planetFile = {};
        this.culture = {};
        this.sports = {};
        this.headers = {
            CONSOLE: "CONSOLE",
            FOLDER: "FOLDERS",
            LIBRARY: "LIBRARY",
            DESCRIPTION: "DESCRIPTION",
            PLANET: "PLANETS",
            TYPE: "TYPES"
        };
        this.keys = "";
    };

    async INIT() {
        await this.KEYS();
        // let planets = await this.LOCATION_ARRAY(planet);
        // await this.PATHS();
        // // await this.PLANET(planets.space, planets.sector, planets.system, planet);
        // // await this.GENERATE_CULTURE();
    };
    async PATHS(){
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'PATHS'
        });
        return await this.Read();
    };
    async KEYS(){
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: 'KEYS',
            SECTION: "CONSOLE",
        });
        this.keys =  await this.READ(); 
        return this.keys;
    };
    /**
     * FETCH THE FULL LOCATION OF A PLANET FROM JUST A PLANET STRING
     * @param {string} planet 
     * @returns 
     */
    async LOCATION_ARRAY(planet) {
            await this.KEYS();
            let planetArray = {};
            for (const space in this.keys) {
                if (Object.hasOwnProperty.call(this.keys, space)) {
                    const SPACE_NAMES = this.keys[space];
                    for (const sector in SPACE_NAMES) {
                        if (Object.hasOwnProperty.call(SPACE_NAMES, sector)) {
                            const SECTOR_NAMES = SPACE_NAMES[sector];

                            for (const spacesystem in SECTOR_NAMES) {
                                if (Object.hasOwnProperty.call(SECTOR_NAMES, spacesystem)) {
                                    const SYSTEM_NAMES = SECTOR_NAMES[spacesystem];
                                    if (SYSTEM_NAMES.includes(planet)) {
                                        planetArray = {
                                            SPACE: space,
                                            SECTOR: sector,
                                            SYSTEM: spacesystem,
                                            PLANET: planet
                                        };
                                        return planetArray;
                                    }
                                }
                            }
                        }
                    }
                }
            };
            return planetArray;
    };
    /**
         * SEARCH FOR PLANET FILE PATH AND READ FILE
         * @param {string} space 
         * @param {string} sector 
         * @param {string} system 
         * @param {string} planet 
         */
    async PLANET(space, sector, system, planet){
            await this.PATHS();
            let planetSystem = this.paths[space.toUpperCase()][sector.toUpperCase()][system.toUpperCase()];
            let planetList = Object.keys(planetSystem);
            for (const orb in planetList) {
                if (Object.hasOwnProperty.call(planetList, orb)) {
                    let planets = planetList[orb];
                    let chosenPlanet = planetSystem[planets];
                    if (chosenPlanet[0] === planet.toUpperCase()) {
                        this.path = await this.EXPLORER_INIT_ROUTE({
                            TAG: chosenPlanet[0],
                            SECTION: chosenPlanet[1]
                        });
                        return await this.READ();
                    };
                }               
            }
    };
    /**
         * SEARCH FOR THE REQUESTED LIST OF PLANETARY ELEMENTS
         * @param {string} tag REQUESTED LIST TYPE
         * @param {string} space VALID SPACE NAME
         * @param {string} sector VALID SECTOR NAME (IF NEEDED)
         * @param {string} planetarySystem  VALID SYSTEM NAME (IF NEEDED)
         * 
         */
    async SEARCH(tag, space, sector = "None", planetarySystem = "None") {
            await this.KEYS();  
            const spaceList = this.SEARCH_SPACE();
            const sectorList = this.SEARCH_SECTORS(space);
            const systemList = this.SEARCH_SYSTEMS(sectorList, sector);
            const planetList = this.SEARCH_PLANETS(systemList, planetarySystem);
    
            switch (tag) {
                case "Space":
                    return spaceList;
                case "Sector":
                    return Object.keys(sectorList);
                case "System":
                    return Object.keys(systemList);
                case "Planet":
                    return planetList;
                default:
                    break;
            };
    
    };
    /**
         * RETRIEVE ALL SPACE TYPES
         * @returns {object} SPACE LIST
         */
    SEARCH_SPACE() {
        return Object.keys(this.keys);
    };
    /**
         * RETRIEVE ALL SECTORS FOR SPECIFIED SPACE
         * @param {string} space 
         * @returns {object} SECTOR LIST
         */
    SEARCH_SECTORS(space) {
            if (space !== "None") {
                return this.keys[space];
            }
            return ["None"];
    };
    /**
         * RETRIEVE ALL SYSTEMS FOR SPECIFIED SECTOR
         * @param {String} space 
         * @param {String} sector 
         * @returns {object} SYSTEM LIST
         */
    SEARCH_SYSTEMS(sectorList, sector) {
            if (sector !== "None") {
                return sectorList[sector];
            }
            return ["None"];
    }
    /**
         * RETRIEVE ALL PLANETS FOR SPECIFIED SYSTEM
         * @param {String} systemList 
         * @param {String} planetarySystem 
         * @returns {object} PLANET LIST
         */
    SEARCH_PLANETS(systemList, planetarySystem) {
            if (planetarySystem !== "None") {
                return systemList[planetarySystem];
            }
            return ["None"];
    };

    // == CREATE A NEW THING == //
    async INSERT_NEW_ITEM(categoryTag, tag, type, pathString, newType = false, origin = "NONE", description = "This is a new thing!") {
            
            if(description !== "NONE") {
                await this.NEW_TEXT_FILE(categoryTag.toUpperCase(), tag, description, pathString);
            }
            
            if (newType) {
                await this.NEW_TYPE_FILE(categoryTag.toUpperCase(), type);
            }
            else {
                this.EDIT_TYPE_FILE(categoryTag.toUpperCase(), tag, type);
            };
            await this.EDIT_ALL_FILE(categoryTag, instrument);
            if (origin !== "NONE") {
                await this.ENTER_ORIGIN(categoryTag, tag, origin);
            };
            await this.INSERT_LIBRARY_FILE(categoryTag, tag, pathString);
    };
    async CREATE_TYPE(section, tag, filePath) {
            await this.NEW_TYPE_FILE(section, tag);
            await this.EDIT_PATHWAYS(section, tag, filePath, this.headers.TYPE);
            await this.ADD_TYPE_TO_ALL_TYPE(category, newType);
    };
    async CREATE_SPACE(nameOfSpace, spaceCode) {
    
            // == VARIABLES == //
            let filePath = `£££-UserMemory/EXPLORER/DATABASE/EXPLORER/SPACE/${nameOfSpace}.json`;
            let folderPath = `£££-UserMemory/EXPLORER/DATABASE/EXPLORER/${nameOfSpace.toUpperCase()}/`;
            let data = {
                TYPE: 'SPACE',
                SPACE: nameOfSpace,
                CODE: spaceCode
            };
    
            // == Set the pathways marker for the file
            await this.EDIT_PATHWAYS('PLANET', nameOfSpace.toUpperCase(), filePath, "SPACE");
    
            // == Set the pathways marker for the folder
            await this.EDIT_PATHWAYS('PLANET', nameOfSpace.toUpperCase(), folderPath, "FOLDERS");
            
            // == Create the folder
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: nameOfSpace.toUpperCase(),
                SECTION: "PLANET",
                SUBSECTION:  this.headers.FOLDER,
            });
            await this.CREATE_FOLDER();

            // == Create the library file
            let pathRoot = await this.EXPLORER_INIT_ROUTE({
                TAG: 'SPACE',
                SECTION: "PLANET",
                SUBSECTION:  this.headers.FOLDER,
            });
            this.path = pathRoot + "/" + nameOfSpace + ".json";
            this.data = {LOCATION: {SHORT_CODE: data.CODE}};
            await this.SAVE();

            // == Create the marker in the All Planet file
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: 'ALL',
                SECTION: "PLANET",
                SUBSECTION: "CONSOLE",
            });
            let planetFile = await this.READ();
            planetFile[nameOfSpace.toUpperCase()] = {};
            this.data = planetFile;
            await this.SAVE();

            // == Create the planet key
            await this.INSERT_PLANET_KEY(data);
    
            // == Create the path key
            await this.UPDATE_PLANET_PATHS(data);
    
    };
    async CREATE_SECTOR(nameOfSpace, nameOfSector, sectorCode) {

            // == VARIABLES == //
            let filePath = `£££-UserMemory/EXPLORER/DATABASE/EXPLORER/${nameOfSpace.toUpperCase()}/${nameOfSector}.json`;
            let folderPath = `£££-UserMemory/EXPLORER/DATABASE/EXPLORER/${nameOfSpace.toUpperCase()}/${nameOfSector.toUpperCase()}/`;
            let data = {
                TYPE: 'SECTOR',
                SPACE: nameOfSpace,
                SECTOR: nameOfSector,
                CODE: sectorCode
            };

            // == Set the pathways marker for the file
            await this.EDIT_PATHWAYS('PLANET', nameOfSector.toUpperCase(), filePath, "SECTOR");
    
            // == Set the pathways marker for the folder
            await this.EDIT_PATHWAYS('PLANET', nameOfSector.toUpperCase(), folderPath, "FOLDERS");

            // == Create the folder
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: nameOfSector.toUpperCase(),
                SECTION: "PLANET",
                SUBSECTION:  this.headers.FOLDER,
            });
            await this.CREATE_FOLDER();

            // == Create the library file
            let pathRoot = await this.EXPLORER_INIT_ROUTE({
                TAG: nameOfSpace.toUpperCase(),
                SECTION: "PLANET",
                SUBSECTION:  this.headers.FOLDER,
            });
            this.path = pathRoot + "/" + nameOfSector + ".json";
            this.data = {LOCATION: {SHORT_CODE: data.CODE}};
            await this.SAVE();

            // == Create the marker in the All Planet file
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: 'ALL',
                SECTION: "PLANET",
                SUBSECTION: "CONSOLE",
            });
            let planetFile = await this.READ();
            planetFile[nameOfSpace.toUpperCase()][nameOfSector.toUpperCase()] = {};
            this.data = planetFile;
            await this.SAVE();
    
            // == Create the planet key
            await this.INSERT_PLANET_KEY(data);
            
            // == Create the path key
            await this.UPDATE_PLANET_PATHS(data);
    };
    async CREATE_SYSTEM(nameOfSpace, nameOfSector, nameOfSystem, systemCode) {
            // == VARIABLES == //
            let filePath = `£££-UserMemory/EXPLORER/DATABASE/EXPLORER/${nameOfSpace.toUpperCase()}/${nameOfSector.toUpperCase()}/${nameOfSystem}.json`;
            let folderPath = `£££-UserMemory/EXPLORER/DATABASE/EXPLORER/${nameOfSpace.toUpperCase()}/${nameOfSector.toUpperCase()}/${nameOfSystem.toUpperCase()}/`;
            let data = {
                TYPE: 'SYSTEM',
                SPACE: nameOfSpace,
                SECTOR: nameOfSector,
                SYSTEM: nameOfSystem,
                CODE: systemCode
            };
            // == Set the pathways marker for the file
            await this.EDIT_PATHWAYS('PLANET', nameOfSystem.toUpperCase(), filePath, "SYSTEM");
    
            // == Set the pathways marker for the folder
            await this.EDIT_PATHWAYS('PLANET', nameOfSystem.toUpperCase(), folderPath, "FOLDERS");
    
            // == Create the folder
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: nameOfSystem.toUpperCase(),
                SECTION: "PLANET",
                SUBSECTION: this.headers.FOLDER,
            });
            await this.CREATE_FOLDER();
    
            // == Create the library file
            let pathRoot = await this.EXPLORER_INIT_ROUTE({
                TAG: nameOfSector.toUpperCase(),
                SECTION: "PLANET",
                SUBSECTION: this.headers.FOLDER,
            });
            this.path = pathRoot + "/" + nameOfSystem + ".json";
            this.data = {LOCATION: {SHORT_CODE: data.CODE}};
            await this.SAVE();

            // == Create the marker in the All Planet file
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: 'ALL',
                SECTION: "PLANET",
                SUBSECTION: "CONSOLE",
            });
            let planetFile = await this.READ();
            planetFile[nameOfSpace.toUpperCase()][nameOfSector.toUpperCase()][nameOfSystem.toUpperCase()] = [];
            this.data = planetFile;
            await this.SAVE();

            // == Create the planet key
            await this.INSERT_PLANET_KEY(data);

            // == Create the path key
            await this.UPDATE_PLANET_PATHS(data);
    };
    async CREATE_PLANET(nameOfSpace, nameOfSector, nameOfSystem, nameOfPlanet, planetCode) {

            // == VARIABLES == //
            let filePath = `£££-UserMemory/EXPLORER/DATABASE/EXPLORER/${nameOfSpace.toUpperCase()}/${nameOfSector.toUpperCase()}/${nameOfSystem.toUpperCase()}/${nameOfPlanet}.json`;
            let data = {
                TYPE: 'PLANET',
                SPACE: nameOfSpace,
                SECTOR: nameOfSector,
                SYSTEM: nameOfSystem,
                PLANET: nameOfPlanet,
                CODE: planetCode
            };
            const codeResult = await this.GENERATE_PLANET_CODE(nameOfSector, nameOfSystem, planetCode)

            // == Set the pathways marker for the file
            await this.EDIT_PATHWAYS('PLANET', nameOfPlanet.toUpperCase(), filePath, "PLANETS");

            // == Create the library file
            let pathRoot = await this.EXPLORER_INIT_ROUTE({
                TAG: nameOfSystem.toUpperCase(),
                SECTION: "PLANET",
                SUBSECTION: this.headers.FOLDER,
            });
            this.data = {LOCATION: {CODE: codeResult}};
            this.path = pathRoot + "/" + nameOfPlanet + ".json";
            await this.SAVE();

            // == Create the marker in the All Planet file
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: 'ALL',
                SECTION: "PLANET",
                SUBSECTION: "CONSOLE",
            });
            let planetFile = await this.READ();
            planetFile[nameOfSpace.toUpperCase()][nameOfSector.toUpperCase()][nameOfSystem.toUpperCase()].push(nameOfPlanet.toUpperCase());
            this.data = planetFile;
            await this.SAVE();

            // == Create the planet key
            await this.INSERT_PLANET_KEY(data);

            // == Create the path key
            await this.UPDATE_PLANET_PATHS(data);
            await this.INSERT_ARCHIVE_PLANET_FILES(nameOfPlanet);
    }; 
    async GENERATE_PLANET_CODE(sectorName, systemName, planetCode) {

        let systemFile = {};
        let sectorFile = {};

        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: systemName,
            SECTION: 'PLANET',
            SUBSECTION: 'SYSTEM'
        });

        systemFile = await this.READ();
        this.path = await this.EXPLORER_INIT_ROUTE({
            TAG: sectorName,
            SECTION: 'PLANET',
            SUBSECTION: 'SECTOR'
        });
        sectorFile = await this.READ();

        let sectorCode = sectorFile.LOCATION.SHORT_CODE;
        let systemCode = systemFile.LOCATION.SHORT_CODE;

        return sectorCode + systemCode + planetCode;
    }
    async INSERT_ARCHIVE_PLANET_FILES(planetName) {

            // -- CLIMATE -- //
            // DISASTERS
            let filePath = `£££-UserMemory/EXPLORER/DATABASE/CLIMATE/DISASTERS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('DISASTERS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, "DISASTERS");

            // -- CULTURE -- //
            // CELEBRTITIES
            filePath = `£££-UserMemory/EXPLORER/DATABASE/CULTURE/CELEBRITIES/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('CELEBRITY', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'CELEBRITY');
            // ENTERTAINMENT
            filePath = `£££-UserMemory/EXPLORER/DATABASE/CULTURE/ENTERTAINMENT/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('ENTERTAINMENT', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'ENTERTAINMENT');
            // MISC ACTIVITIES
            filePath = `£££-UserMemory/EXPLORER/DATABASE/CULTURE/MISC ACTIVITIES/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('MISC', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'MISC');
            // MUSIC 
            filePath = `£££-UserMemory/EXPLORER/DATABASE/CULTURE/MUSIC/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('MUSIC', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'MUSIC');
            // SPORT
            filePath = `£££-UserMemory/EXPLORER/DATABASE/CULTURE/SPORT/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('SPORTS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'SPORTS');

            // -- EDUCATION -- //
            // SCHOOLS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/EDUCATION/SCHOOLS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('SCHOOLS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'SCHOOLS');
            // UNIVERSITITES
            filePath = `£££-UserMemory/EXPLORER/DATABASE/EDUCATION/UNIVERSITIES/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('UNIVERSITY', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'UNIVERSITY');

            // -- EMPLOYMENT -- //
            // EMPLOYTMENT
            filePath = `£££-UserMemory/EXPLORER/DATABASE/EMPLOYMENT/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('EMPLOYMENT', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'EMPLOYMENT');

            // -- EVENTS -- //
            // FESTIVALS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/EVENTS/FESTIVALS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('FESTIVALS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'FESTIVALS');
            // IMPORTANT
            filePath = `£££-UserMemory/EXPLORER/DATABASE/EVENTS/IMPORTANT/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('IMPORTANT', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'IMPORTANT');

            // -- HALEX -- //
            // ASTRALS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/HALEX/ASTRALS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('ASTRALS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'ASTRALS');
            // GODS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/HALEX/GODS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('GODS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'GODS');
            // GUARDIANS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/HALEX/GUARDIANS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('GUARDIANS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'GUARDIANS');
            // ROYALTY
            filePath = `£££-UserMemory/EXPLORER/DATABASE/HALEX/ROYALTY/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('MONARCHY', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'MONARCHY');

            // -- HEALTH -- //
            // DISEASES
            filePath = `£££-UserMemory/EXPLORER/DATABASE/HEALTH/DISEASE/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('DISEASEs', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'DISEASEs');
            // HOSPITALS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/HEALTH/HOSPITALS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('HOSPITAL', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'HOSPITAL');
            // KURACIEJO
            filePath = `£££-UserMemory/EXPLORER/DATABASE/HEALTH/KURACIEJO/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('KURIEJO', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'KURIEJO');
            // SANCTUARIES
            filePath = `£££-UserMemory/EXPLORER/DATABASE/HEALTH/SANCTUARIES/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('SANCTUARY', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'SANCTUARY');

            // -- LIFE -- //
            // ANIMALS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/LIFE/ANIMALS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('ANIMALS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'ANIMALS');
            // DRAGONS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/LIFE/DRAGONS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('DRAGONS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'DRAGONS');
            // PLANTS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/LIFE/PLANTS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('PLANTS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'PLANTS');
            // ROCKS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/LIFE/ROCKS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('ROCKS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'ROCKS');

            // -- LOCATIONS -- //
            // BAD
            filePath = `£££-UserMemory/EXPLORER/DATABASE/LOCATIONS/BAD/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('BAD', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'BAD');
            // BUSINESS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/LOCATIONS/BUSINESS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('BUSINESS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'BUSINESS');
            // LOCATION
            filePath = `£££-UserMemory/EXPLORER/DATABASE/LOCATIONS/LOCATION/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('LOCATION', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'LOCATION');
            // POI
            filePath = `£££-UserMemory/EXPLORER/DATABASE/LOCATIONS/POI/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('POI', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'POI');

            // -- NEWS -- //
            // NEWSPAPERS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/NEWS/PAPERS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('NEWSPAPERS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'NEWSPAPERS');

            // -- ORGANISATION -- //
            // BAND
            filePath = `£££-UserMemory/EXPLORER/DATABASE/ORGANISATION/BAND/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('BAND', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'BAND');
            // CULT
            filePath = `£££-UserMemory/EXPLORER/DATABASE/ORGANISATION/CULT/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('CULTS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'CULTS');
            // DICTATORSHIP
            filePath = `£££-UserMemory/EXPLORER/DATABASE/ORGANISATION/DICTATORSHIP/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('DICTATORSHIPS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'DICTATORSHIPS');
            // HALEX_ASSISTANCE_TEAM
            filePath = `£££-UserMemory/EXPLORER/DATABASE/ORGANISATION/HALEX_ASSISTANCE_TEAM/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('HAT', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'HAT');
            // MISC
            filePath = `£££-UserMemory/EXPLORER/DATABASE/ORGANISATION/MISC/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('MISC_ACTIVITIES', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'MISC_ACTIVITIES');
            // ORCHESTRA
            filePath = `£££-UserMemory/EXPLORER/DATABASE/ORGANISATION/ORCHESTRA/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('ORCHESTRA', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'ORCHESTRA');
            // SPORTS_TEAMS
            filePath = `£££-UserMemory/EXPLORER/DATABASE/ORGANISATION/SPORTS_TEAMS/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('SPORTS_TEAMS', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'SPORTS_TEAMS');
            // TERRORISM
            filePath = `£££-UserMemory/EXPLORER/DATABASE/ORGANISATION/TERRORISM/PLANETS/${planetName.toUpperCase()}.json`;
            await this.EDIT_PATHWAYS('TERRORISM', planetName.toUpperCase(), filePath, "PLANETS");
            await this.CREATE_NEW_PLANET_FILE(planetName, 'TERRORISM');
    };
    async CREATE_NEW_PLANET_FILE(planetName, categoryName) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: planetName,
                SECTION: categoryName,
                SUBSECTION: this.headers.PLANET,
            });
            this.data = {};
            return this.SAVE();
    };

    // == FILES == //
    async INSERT_NEW_GEOLOGICAL(place, geographical) {
            const pathRoot = await this.EXPLORER_INIT_ROUTE({
                TAG: place.toUpperCase(),
                SECTION: this.headers.PLANET,
                SUBSECTION: this.headers.FOLDER,
            });
            const filePath = pathRoot + "/" + geographical + ".json";
            this.path = filePath;
            this.data = {};
            await this.SAVE();
    }
    /**
         * ADD A NEW TEXT FILE FOR A GIVEN ITEM TO THE DATABASE
         * This creates a new text file and adds a description if given
         * For example the sport Tennis may be added and a text file is created
         * The description may be, Two players hit a ball across a stretched net
         * @param {string} section SPORTS may be an example of this
         * @param {string} filename TENNIS may be an example of this
         * @param {string} description Two players hit a ball across a stretched net may be an example of this
         * 
         * RETURNS -> Text file created within relevant database with a short amout of text
         */
    async NEW_TEXT_FILE(section, filename, description, pathString) {
            const pathRoot = await this.EXPLORER_INIT_ROUTE({
                TAG: this.headers.DESCRIPTION,
                SECTION: section.toUpperCase(),
                SUBSECTION: this.headers.FOLDER,
            });
            pathRoot = pathRoot + "/" + filename + ".txt";
            this.path = pathRoot;
            this.data = description;
            await this.SAVE();
            await this.PATHWAYS_TEXT_FILE(section, tag, pathString);
    };
    /**
         * ADD A NEW TYPE FILE TO THE DATABASE
         * This specifically creates a new type file in the type library
         * @param {string} Subsection == OPTIONAL == SPORT may be an example of this 
         * @param {string} section CULTURE may be an example of this
         * @param {string} tag BALL may be an example of this
         * 
         * RETURNS -> A new file is created in the database (Section) type library
         */
    async NEW_TYPE_FILE(section, tag) {
        const pathRoot = await this.EXPLORER_INIT_ROUTE({
            TAG: this.headers.TYPE,
            SECTION: section.toUpperCase(),
            SUBSECTION: this.headers.FOLDER,
        });
        this.path = pathRoot + "/" + tag + ".json";
        this.data = {NAME: tag};
        await this.SAVE(); 
        await this.EDIT_ALL_TYPE_FILE(categoryTag, type);
        await this.PATHWAYS_TYPE_FILE(categoryTag, type, pathString);
    };
    /**
         * INSERT A NEW FILE INTO THE LIBRARY
         * Creates a new library file with the given name
         * @param {string} section SPORTS would be an example
         * @param {string} tag TENNIS would be an example
         * 
         * RETURNS -> New library file is created
         */
    async INSERT_LIBRARY_FILE(section, tag, pathString) {
            const pathRoot = await this.EXPLORER_INIT_ROUTE({
                TAG: this.headers.LIBRARY,
                SECTION: section.toUpperCase(),
                SUBSECTION: this.headers.FOLDER,
            });
            this.path = pathRoot + "/" + tag + ".json";
            this.data = {};
            await this.SAVE();
            await this.PATHWAYS_LIBRARY_FILE(section, tag, pathString);
    };

    // == EDIT PATHS == //
    async EDIT_PATHWAYS(section, tag, filePath, subsection) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: 'ROOT',
                SECTION: "ROOT"
            });
            const routes = await this.READ();
            routes[section.toUpperCase()][subsection.toUpperCase()][tag.toUpperCase()] = filePath;
            this.data = routes;
            await this.SAVE();
    }
    async INSERT_PLANET_KEY (data) {
    
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: 'KEYS',
                SECTION: "PLANET",
                SUBSECTION: this.headers.CONSOLE,
            });
            const keyObject = await this.READ();

            if (data.TYPE === "SPACE") {
                keyObject[data.SPACE.toUpperCase()] = {};
            }
            if (data.TYPE === "SECTOR") {
                keyObject[data.SPACE.toUpperCase()][data.SECTOR.toUpperCase()] = {};
            }
            if (data.TYPE === "SYSTEM") {
                keyObject[data.SPACE.toUpperCase()][data.SECTOR.toUpperCase()][data.SYSTEM.toUpperCase()] = [];
            }
            if (data.TYPE === "PLANET") {
                keyObject[data.SPACE.toUpperCase()][data.SECTOR.toUpperCase()][data.SYSTEM.toUpperCase()].push(data.PLANET.toUpperCase());
            }
            this.data = keyObject;
            await this.SAVE();
    };
    async UPDATE_PLANET_PATHS(data) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: 'PATHS',
                SECTION: "PLANET",
                SUBSECTION: this.headers.CONSOLE,
            });
            let planetTag = data.CODE + " / " + data.PLANET;
            const keyObject = await this.READ();
    
            if (data.TYPE === "SPACE") {
                keyObject[data.SPACE.toUpperCase()] = {};
            }
            if (data.TYPE === "SECTOR") {
                keyObject[data.SPACE.toUpperCase()][data.SECTOR.toUpperCase()] = {};
            }
            if (data.TYPE === "SYSTEM") {
                keyObject[data.SPACE.toUpperCase()][data.SECTOR.toUpperCase()][data.SYSTEM.toUpperCase()] = {};
            }
            if (data.TYPE === "PLANET") {
                keyObject[data.SPACE.toUpperCase()][data.SECTOR.toUpperCase()][data.SYSTEM.toUpperCase()][planetTag] = [data.PLANET.toUpperCase(), "PLANET", "PLANETS"];
            }
            this.data = keyObject;
            await this.SAVE();
    }
    async PATHWAYS_LIBRARY_FILE(section, tag, pathString) {
            return await this.EDIT_PATHWAYS(section, tag, pathString, this.headers.LIBRARY);
    };
    async PATHWAYS_TEXT_FILE(section, tag, pathString) {
            return await this.EDIT_PATHWAYS(section, tag, pathString, this.headers.DESCRIPTION);
    };
    async PATHWAYS_TYPE_FILE(section, tag, pathString) {
            return await this.EDIT_PATHWAYS(section, tag, pathString, this.headers.TYPE);
    }; 
    // == GENERATE PLANET OBJECT == //
    /**
         * CREATE CULTURE OBJECT
         */
    async GENERATE_CULTURE() {
            let cultureAray = this.planetFile.CULTURE;
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: cultureAray[0],
                SECTION:  cultureAray[1],
                SUBSECTION: cultureAray[2],
            });
            this.culture = await this.READ();
    };
    async GENERATE_SPORTS(planetFile){
            let sportArray = planetFile.CULTURE.SPORTS;
            this.path = await this.initRoute(sportArray[0], sportArray[1], sportArray[2]);
            this.sports = await this.Read();
    };
    async GENERATE_LOCATION(planetName) {
        const file = await this.READ_PLANET_FILE(planetName);
        return file.LOCATION;
    }; 
    // == EDIT AND UPDATE FILES == //
    /**
         * ADD A TYPE FILE TO A DATABASE
         * This is a category within databases which an item may be entered into
         * For example sports my be ball or elemental or gymnastics as a type 
         * @param {string} section SPORT may be an example of this 
         * @param {string} tag TENNIS may be an example of this
         * @param {string} type BALL may be an example of this
         * 
         * RETURNS -> Files edited and created within relevant (section) database
         */
    async EDIT_TYPE_FILE(section, tag, type) {
            const typeFile = await this.READ_TYPE(section, type);
            typeFile[tag.toUpperCase()] = [tag.toUpperCase(), section.toUpperCase(), section.toUpperCase()];
            this.data = typeFile;
            await this.SAVE();
    };
    /**
         * EDIT THE ALL FILE FOR THE GIVEN DATABASE
         * Enter the sport into the All file using the given type and given database
         * @param {string} section CULTURE may be an example of this
         * @param {string} tag TENNIS may be an example of this
         * @param {string} subsection SPORTS may be an example of this
         * @param {string} type BALL may be an example of this
         * 
         * RETURNS -> Edited all type file in database
         */
    async EDIT_ALL_TYPE_FILE(section, type) {
            const allTypeFile = await this.READ_ALL_TYPE_FILE(section);
            allTypeFile[type.toUpperCase()] = [type.toUpperCase(), section.toUpperCase(), this.headers.TYPE];
            this.data = allTypeFile;
            await this.SAVE();
    };
    /**
         * ENTER A NEW PLANET AS AN ORIGIN FOR A DATABASE ITEM
         * This will add a planet to both the origin and available list for the planet within the database
         * @param {string} section CULTURE would be an example section
         * @param {string} tag TENNIS would be an example tag
         * @param {string} location KIAMTA would be an example location
         * @param {string} subsection SPORTS would be an example subsection
         * 
         * RETURNS -> Edited the origin and available list for a planet file within the database with
         */
    async ENTER_ORIGIN(section, tag, location) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: location.toUpperCase(),
                SECTION: section.toUpperCase(),
                SUBSECTION: this.headers.PLANET,
            });
            const originFile = await this.READ();
            for (const locationKey in originFile) {
                if (Object.hasOwnProperty.call(originFile, locationKey)) {
                    const element = originFile[locationKey];
                    element.push(tag.toUpperCase());
                };
            };
            this.data = originFile;
            await this.SAVE();
    };
    async UPDATE_PLANET_FILE(category, planet, updateData, updatePaths, size = 0) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: planet.toUpperCase(),
                SECTION: category.toUpperCase(),
                SUBSECTION: this.headers.PLANET,
            });
            let planetFile = await this.READ();
            if (size === 0) {
                planetFile[category.toUpperCase()][updatePaths.toUpperCase()] = updateData;
                this.data = planetFile;
                return await this.SAVE();
            };
    };
    async UPDATE_DESCRIPTION_FILE(category, tag, updatedText) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: tag.toUpperCase(),
                SECTION: category.toUpperCase(),
                SUBSECTION: this.headers.DESCRIPTION,
            });
            this.data = updatedText;
            await this.SAVE();
    };
    async CHANGE_TYPE(category, oldType, newType, dataTag) {
        
            const oldFileData = await this.READ_TYPE(category, oldType);
            const holdData = oldFileData[dataTag.toUpperCase()];
            this.data = this.#REMOVAL(dataTag.toUpperCase(), oldFileData);
            await this.SAVE();
    
            const newFileData = await this.READ_TYPE(category, newType);
            newFileData[dataTag.toUpperCase()] = holdData;
            this.data = newFileData;
            await this.SAVE();
    };

    // == READ == //
    async READ_LOCATION_FILE(planetName) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: planetName.toUpperCase,
                SECTION: category.toUpperCase(),
                SUBSECTION: this.headers.PLANET,
            });
            return await this.Read();
    };
    async READ_ALL_TYPE_FILE(section) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: 'ALL',
                SECTION: section.toUpperCase(),
                SUBSECTION: this.headers.CONSOLE,
            });
            return await this.Read();
    };
    async READ_TYPE(category, typeName) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: typeName.toUpperCase(),
                SECTION: category.toUpperCase(),
                SUBSECTION: this.headers.TYPE,
            });
            return Object.keys(await this.Read());
    };
    async READ_ALL(category) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: 'LIST',
                SECTION: category.toUpperCase(),
                SUBSECTION: this.headers.CONSOLE,
            });
            return await this.Read();
    };
    async READ_PLANET_FILE(category, location) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: location.toUpperCase,
                SECTION: category.toUpperCase(),
                SUBSECTION: this.headers.PLANET,
            });
            return await this.Read();
    };
    async READ_ITEN(category, item) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: item.toUpperCase(),
                SECTION: category.toUpperCase(),
                SUBSECTION: this.headers.LIBRARY,
            });
            return await this.Read();
    };
    // async READ_DETAILS (category, item){
    //     this.path = await this.EXPLORER_INIT_ROUTE({
    //         TAG: item.toUpperCase(),
    //         SECTION: category.toUpperCase(),
    //         SUBSECTION: this.headers.DESCRIPTION,
    //     });
    //     return await this.ReadText();
    // };

    // == SEARCH == //
    async FETCH_TYPE_FROM_ITEM(category, item) {
            const itemFile = await this.READ_ITEN(category, item);
            return itemFile.TYPE;
    };
    async FETCH_LOCATION_FROM_ITEM(category, item) {
            const folderRoot = await this.EXPLORER_INIT_ROUTE({
                TAG: 'PLANETS',
                SECTION: category.toUpperCase(),
                SUBSECTION: this.headers.FOLDER
            });
            this.path = folderRoot;
            const files = await this.READ_FOLDERS();
            for (const file of files) {
                this.path = folderRoot + "/" + file;
                let data = await this.READ();
                if (data["ORIGIN"].includes(item.toUpperCase())){
                    this.location = file.replace(".json", "");
                    return this.location;
                }
            };
            return this.location;
    }
    async FETCH_TEMPLATE(templateTag, category) {
            this.path = await this.EXPLORER_INIT_ROUTE({
                TAG: templateTag.toUpperCase(),
                SECTION: category.toUpperCase(),
                SUBSECTION: 'MEMORY'
            });
            return await this.READ();
    };

    // == REMOVE == //
    async REMOVE_PLANET_FROM_PATHS(location, type) {
            await this.PATHS();
            let affectedRemovalObject = this.paths;
            // TODO CURRENTLY THE PLANET TYPE KEY WOULD NEED TO BE IDENTICAL TO PLANET PATH KEY
            if (type === "SPACE") {
                let affectedObject = this.#REMOVAL('SPACE', affectedRemovalObject);
                this.data = affectedObject;
            }
            if (type === "SECTOR") {
                affectedRemovalObject = this.paths[location.SPACE];
                let affectedObject = this.#REMOVAL('SECTOR', affectedRemovalObject);
                this.data = affectedObject;
                this.paths[location.SPACE.toUpperCase()] = affectedObject;
            }
            if (type === "SYSTEM") {
                affectedRemovalObject = this.paths[location.SPACE][location.SECTOR];
                let affectedObject = this.#REMOVAL('SYSTEM', affectedRemovalObject)
                this.data = affectedObject;
                this.paths[location.SPACE][location.SECTOR.toUpperCase()] = affectedObject;
            }
            if (type === "PLANET") {
                affectedRemovalObject = this.paths[location.SPACE][location.SECTOR][Location.SYSTEM];
                let affectedObject = this.#REMOVAL('PLANET', affectedRemovalObject)
                this.data = affectedObject;
                this.paths[location.SPACE][location.SECTOR][Location.SYSTEM.toUpperCase()] = affectedObject;
            };
            this.data = this.paths;
            await this.SAVE();
    };
    async #REMOVAL(tag, affectedObject) {
            affectedObject = Object.keys(affectedObject)
            .filter(objKey =>
                objKey !== location[tag].toUpperCase())
                .reduce((newObj, key) =>{
                    newObj[key] = affectedObject[key];
                    return newObj;
                }, {}
            );
            return affectedObject
    }
    async REMOVE_PROPERTY_FROM_ITEM(containerObject, removalTag) {
            containerObject = Object.keys(containerObject)
            .filter(objKey =>
                objKey !== removalTag)
                .reduce((newObj, key) => {
                    newObj[key] = containerObject[key];
                    return newObj;
                }, {}
            );
            return containerObject;
    } 
}

export {Explorer}