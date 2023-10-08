import { planetRoute} from "../../../GEARS/GNOME/Routes.js";
import { ReadFile } from "../../../GEARS/PLATYPUS/RenderFunctions.js";
import { capitalise } from "../../UTILITY/Strings.js";
import { Planet } from "./PlanetController.js";

class Location extends Planet {

	constructor (
		planetName
	)
	{
		super();
		this.planet = planetName;
		this.location = {
			Space: "",
			Sector: "",
			System: "",
			Planet: this.planet
		}
		this.spaceObject = {}
	}

	async construct() {

		const keys = await this.FetchKeys();
		const spaceKeys = Object.keys(keys);
		spaceLoop: for (let SpaceIndex = 0; SpaceIndex < spaceKeys.length; SpaceIndex++) {
				const sectorKeys = Object.keys(keys[spaceKeys[SpaceIndex]]);
					sectorLoop: for (let SectorIndex = 0; SectorIndex < sectorKeys.length; SectorIndex++) {
						const systemKeys = Object.keys(
							keys [spaceKeys [SpaceIndex]]
								[sectorKeys[SectorIndex]])
						systemLoop: for (let SystemIndex = 0; SystemIndex < systemKeys.length; SystemIndex++) {
							const planetKeys = Object.keys(
								keys [spaceKeys [SpaceIndex]]
									[sectorKeys[SectorIndex]]
									[systemKeys[SystemIndex]]);
							planetLoop: for (let PlanetIndex = 0; PlanetIndex < planetKeys.length; PlanetIndex++) {
								if (this.planet === keys [spaceKeys [SpaceIndex]]
									[sectorKeys[SectorIndex]]
									[systemKeys[SystemIndex]]
									[planetKeys[PlanetIndex]]) {
								this.location.Space = spaceKeys[SpaceIndex];
								this.location.Sector = sectorKeys[SectorIndex];
								this.location.System = systemKeys[SystemIndex];
								break;
								}
							}
						}
					}
				}
		return this.location
	}
	async fetchFile() {
		console.log(this.location)
		const spaceFile = await planetRoute(capitalise(this.location.Space));
		this.spaceObject = await ReadFile(spaceFile);
		return this.spaceObject
	}
	planetObject() {
		return this.spaceObject.Planets[`Sector${capitalise(this.location.Sector)}`]
										[`System${capitalise(this.location.System)}`]
										[`${capitalise(this.location.Planet)}`];
	}
	planetCode() {
		return this.planetObject().Identification.FullCode;
	}
}

export { Location}