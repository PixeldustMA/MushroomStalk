import { route } from "../../GEARS/GNOME/Routes.js";
import { duck } from "../../GEARS/PLATYPUS/AskDuck.js";
import { ReadFile, WelcomeSave } from "../../GEARS/PLATYPUS/RenderFunctions.js";

const characterMemoryRoute = await route("currentCharacter");
const modes = {
	DRAGON: 'Dragon',
	KESSYA: 'Kessya',
	PLANET: 'Planet',
	NIGHTMARE: 'Nightmare',
	WAR: 'War'
}
class character extends duck{

	constructor(
		mushroom = ""
	) {
		super();
		this.mushroom = mushroom;
		this.MODE = this.rowMode();
		this.FIRST = this.firstName();
		this.MIDDLE = this.middleName();
		this.LAST = this.surname();
	}

	async build() {

	}
	async search() {

	}
	async firstName() {
		const searchResults = await this.fetchName(this.mushroom);
		return searchResults.message[0].FirstName;
	};
	async middleName() {
		const searchResults = await this.fetchName(this.mushroom);
		return searchResults.message[0].Middle;
	};
	async surname() {
		const searchResults = await this.fetchName(this.mushroom);
		return searchResults.message[0].Family;
	};
	async rowMode() {
		const searchResults = await this.fetchName(this.mushroom);
		return searchResults.message[0].SectionDesignation;
	}
	async saveCurrent() {
		let current = {
			First: await this.FIRST,
			Last: await this.LAST,
			Mode: await this.MODE

		};
		const record = await WelcomeSave(characterMemoryRoute, current);
	}
	async readCurrent() {
		const current = await ReadFile(characterMemoryRoute);
		return current;
	}
}

export { character}