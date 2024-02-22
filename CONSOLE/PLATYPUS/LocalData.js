import { Stalk } from "../CONTROLLERS/StalkController.js";

class LocalData {

    constructor () {
		this.initialise().then((stalkInstance) => {return stalkInstance});
		this.state = {};
		this.username = "";
		this.message = "";
		this.bundle = "";
		this.news = "";
		this.squirrel = "";
		this.spirit = "";
		this.doodle = "";
		this.jellyfish ="";
        this.mushroom;
	}

	/**
	 * CREATE REQUIRED APP DATA
	 * @returns ACTIVE FROG OBJECT
	 */
	async initialise () {
		return await this.fetchResident();
	}
	/**
	 * FETCH FROG IN RESIDENCE
	 * @returns SETS RESIDENT FROG
	 */
	async fetchResident() {
		const frogPath = await this.frogRoute()
            .then((path) => {
                this.mushroom.path = path
                let frogObject = this.mushroom.Read()
                    .then((frogData) => {
                        this.state = frogData;
                        this.username = this.state.NAME;
                        this.message = this.state.MESSAGEPATH;
                        this.bundle = this.state.BUNDLEPATH;
                        this.news = this.state.NEWSPATH;
                        this.squirrel = this.state.SQUIRRELPATH;
                        this.spirit = this.state.SPIRITPATH;
                        this.doodle = this.state.DOODLEPATH;
						this.jellyfish = this.state.JELLYFISH;
                        return frogData;
                    });			
                return frogObject});

		return frogPath
	}
	/**
	 * ACCESS RESIDENT FROG PATH
	 * @returns FROG PATH
	 */
	async frogRoute () {
        this.mushroom = new Stalk();
		return await this.mushroom.machete("RESIDENT");
	}

	// == GETTERS AND SETTERS == //
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

	get JellyfishPath () {return this.jellyfish}
	set JellyfishPath (value) { this.jellyfish = value;}
}

export { LocalData }
