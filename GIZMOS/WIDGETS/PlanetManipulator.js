import { route } from "../../GEARS/GNOME/Routes";
import { ReadFile } from "../../GEARS/PLATYPUS/RenderFunctions";

class planet {

	constructor(
		planetName = "",
		planetCode = ""
	) {
		this.planet = planetName;
		this.code = planetCode;
		this.IndexObject = {};
		this.spaceName = "";
		this.sectorName = "";
		this.systemName = "";
	}

	// RETURN THE KEYS FILE (ARRAYS OF SPACE)
	// async readKeys() {
	// 	const planetKeys = await planetRoute("Keys")
	// 		.then((keys) => {return keys});
	// 	const data = await ReadFile(planetKeys)
	// 		.then((result) => {return result});
	// 	return data;
	// }
	// GET THE SPACE FILE FOR THE GIVEN PLANET
	async getSpaceArea() {
		const keyData = this.readKeys()
			.then((keyList) => {
				const space = Object.keys(keyList);
				for (let spaceIndex = 0; spaceIndex < space.length; spaceIndex++) {
					keyList[space[spaceIndex]].forEach(planetList => {
						if (planetList === planetName) {
							this.spaceName = space[spaceIndex];
						};
					});				
				}
				return keyList;
			});
		return keyData
	}
	async readAllied() {
		const planetKeys = await planetRoute("Allied")
			.then((keys) => {return keys});
		const data = await ReadFile(planetKeys)
			.then((result) => {return result});
		return data;
	}
	async AlliedSpace() {
		const alliedObject = await this.readAllied()
			.then((allied) => {
				// A list of Allied Sectors (objects)
				const sector = Object.keys(allied);
				const sectorObject = allied.Sectors;
				let holdSectorName = "";
				let holdSystemName = "";

				// Search each object
				// TODO SAVE SECTOR NAME
				for (let sectorIndex = 0; sectorIndex < sector.length; sectorIndex++) {

					let system = Object.keys(sector[sectorIndex]);
					holdSectorName = sector[sectorIndex];

					for (let systemIndex = 0; systemIndex < system.length; systemIndex++) {

						holdSystemName = allied[sectorName][system[systemIndex]];
						sectorObject[holdSectorName][holdSystemName].forEach(planetList => {
							if (planetList === planetName) {
								this.systemName = sectorObject[holdSectorName][holdSystemName][systemIndex];
							};
						});		
					}
				}
			})
	}
	getPlanetCode() {
		this.code = this.IndexObject[this.planet].code;
	}
}