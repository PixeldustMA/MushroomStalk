import { Renderer } from "../PLATYPUS/Renderer.js";
import { pathways } from "../ROUTES/Routes.js";

class Code_Explorer extends Renderer {

    constructor() {
        super();
    }

    async LOCATION_ARRAY(planet) {
        const keyFile = await this.KEYS();
        let planetArray = {};
        for (const space in keyFile) {
            if (Object.hasOwnProperty.call(keyFile, space)) {
                const SPACE_NAMES = keyFile[space];
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
    }
    async CODE_INIT_ROUTE({ TAG, SECTION = "DATABASE", SUBSECTION = "PLANETS", CUSTOM = 0, PLANET = 0, ASSET = 0, USER = 0}) {
        const pathway = new pathways({TAG, SECTION, SUBSECTION, CUSTOM, PLANET, ASSET, USER });
        await pathway.SETUP();
        return await pathway.ROUTE();
    };
    async PATHS(){
        this.path = await this.CODE_INIT_ROUTE({
            TAG: 'PATHS'
        });
        return await this.READ();
    };
    async KEYS(){
        this.path = await this.CODE_INIT_ROUTE({
            TAG: 'KEYS'
        });
        return await this.READ(); 
    };
    async READ_ALPHABET() {
        this.path = await this.CODE_INIT_ROUTE({
            TAG: 'ALPHABET',
            SUBSECTION: 'ARCHIVE'
        });
        console.log(this.path)
        return await this.READ(); 
    }
    async PLANET(space, sector, system, planet){
        const pathFile = await this.PATHS();
        let planetSystem = pathFile[space.toUpperCase()][sector.toUpperCase()][system.toUpperCase()];
        let planetList = Object.keys(planetSystem);
        for (const orb in planetList) {
            if (Object.hasOwnProperty.call(planetList, orb)) {
                let planets = planetList[orb];
                let chosenPlanet = planetSystem[planets];
                if (chosenPlanet[0] === planet.toUpperCase()) {
                    this.path = await this.CODE_INIT_ROUTE({
                        TAG: chosenPlanet[0],
                        SECTION: chosenPlanet[1],
                        SUBSECTION:chosenPlanet[2],
                        PLANET:1
                    });
                    return await this.READ();
                };
            }               
        };
    };
}

export {Code_Explorer}