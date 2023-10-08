import { ReadFile } from "../PLATYPUS/RenderFunctions.js";
import { route } from "./Routes.js";

class Stalk {

	constructor () {
		this.state = {};
		this.username = "";
		this.message = "";
		this.bundle = "";
		this.news = "";
		this.squirrel = "";
		this.spirit = "";
		this.doodle = "";
		this.initialise().then((result) => {return result})
	}

	async initialise () {
		let frog = await this.fetchResident()
			.then((result) => {return result})
		const currentFrog = {
			USERNAME: this.username,
			MESSAGE: this.message,
			BUNDLE: this.bundle,
			NEWS: this.news,
			SQUIRREL: this.squirrel,
			SPIRIT: this.spirit,
			DOODLE: this.doodle
		};
		return currentFrog;
	}

	async fetchResident() {
		const frogPath = await this.frogRoute().then((path) => {
			let x = ReadFile(path)
				.then((frogData) => {
					console.log(frogData)
					this.state = frogData;
					this.username = this.state.NAME;
					this.message = this.state.MESSAGEPATH;
					this.bundle = this.state.BUNDLEPATH;
					this.news = this.state.NEWSPATH;
					this.squirrel = this.state.SQUIRRELPATH;
					this.spirit = this.state.SPIRITPATH;
					this.doodle = this.state.DOODLEPATH;
					return frogData;
				});			
			return x});
		return frogPath
	}
	async frogRoute () {
		const path = await route("resident")
			.then((pathResult) => {return pathResult});
		return path;
	}
	get State () { return this.state;}
	set State (value) {this.state = value; }

	get User () {return this.username;}
	set User (value) { this.username = value;}
	
	get MessagePath () { return this.message;}
	set MessagePath (value) { this.message = value; }
	
	get BundlePath () {return this.bundle;}
	set BundlePath (value) { this.bundle = value; }
	
	get NewsPath () {return this.news;}
	set NewsPath (value) { this.news = value; }
	
	get SquirrelPath () {return this.squirrel;}
	set SquirrelPath (value) { this.squirrel = value; }	
	
	get DoodlePath () {return this.doodle; }
	set DoodlePath (value) { this.doodle = value;}

	get SpiritPath () {return this.spirit}
	set SpiritPath (value) { this.spirit = value;}
}

export { Stalk }