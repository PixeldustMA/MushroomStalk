import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js"


/**
 * METHODS RELATED TO PLANET DATA
 */
class Planet {

    constructor (
		planetName
	) {
		this.planetName = planetName
        this.Keys = {}
        this.stalk = new Stalk();
		this.spaceObject = {};
		this.location = {};
		this.currentPath = "";
    }

	/**
	 * FIND PLANET KEY FILE
	 * @returns {object} PLANET KEY FILE
	 */
    async FetchPlanetKey() {

        this.stalk.path = await this.stalk.fetchPlanet("Keys");
        return await this.stalk.Read();
    }
	/**
	 * FETCH FILE CORRESPONDING TO PLANET
	 * @returns {Object} Space Object
	 */
    async fetchSpaceFile(Space) {
		this.stalk.path = await this.stalk.fetchPlanet(Space);
		this.spaceObject = await this.stalk.Read();
		return this.spaceObject;
	}
    /**
     * FETCH DATA FOR GIVEN PLANET
     */
	async fetchPlanetData() {
		await this.#fetchPlanetPath();
		this.details = await this.#fetchPlanetDetails();
		return this.details;
	}
	/**
	 * CREATE AN OBJECT WITH THE CORRECT PLANETARY LOCATIONS
	 * @returns {Object} LOCATION DATA
	 */
    planetObject() {
		return this.spaceObject.Planets[`Sector${this.location.Sector}`]
										[`System${this.location.System}`]
										[`${this.location.Planet}`];
	}
	/**
	 * FETCH THE FOUR LETTER CODE FOR GIVEN PLANET
	 * @returns {string} FOUR LETTER CODE
	 */
	planetCode() {
		return this.planetObject().Identification.FullCode;
	}
	async #fetchPlanetPaths() {
		this.stalk.path = await this.stalk.ExplorerRoutes('PATHS');
		return await this.stalk.Read();
	}
    /**
     * FETCH PATH FOR GIVEN PLANET
     */
    async #fetchPlanetPath() {
		const Keys = await this.#fetchPlanetPaths();
		const SpaceOptions = Object.keys(Keys);
		SpaceOptions.every(SpaceArea => {

			let SectorOptions = Object.keys(Keys[SpaceArea]);
			SectorLoop: for (let SectorIndex = 0; SectorIndex < SectorOptions.length; SectorIndex++) {
				let SystemOptions = Object.keys(Keys[SpaceArea][SectorOptions[SectorIndex]]);				SystemLoop: for (let SystemIndex = 0; SystemIndex < SystemOptions.length; SystemIndex++) {
					let PlanetOptions = Object.keys(Keys[SpaceArea][SectorOptions[SectorIndex]][SystemOptions[SystemIndex]]);
					let check = this.#PlanetCheck(PlanetOptions);
					if (check !== "No Planet Found") {
						this.currentPath = Keys[SpaceArea][SectorOptions[SectorIndex]][SystemOptions[SystemIndex]][this.currentPath];
						break SectorLoop;
					}
				}
			}
			if (this.currentPath != "NONE") {
				return false;
			}
			return true;
		});
		return this.currentPath;
	}

	#PlanetCheck(PlanetOptions) {
		this.currentPath = "NONE"

		PlanetOptions.forEach(planet => {
			if (planet.slice(5) === this.planetName) {
				this.currentPath = planet;
			}
		});
		return this.currentPath !== "NONE" 
				? this.currentPath
				: "No Planet Found"
	}
	/**
     * READ THE RELEVANT PLANET FILE
     */
	async #fetchPlanetDetails() {
		this.stalk.path = this.currentPath;
		return await this.stalk.Read();
	}
}

export {Planet}