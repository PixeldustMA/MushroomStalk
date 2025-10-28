import Cap_Pokemon from "../LAVALAMPS/Cap_Pokemon.js";

export default class Cap_Lavalamps {

    constructor({
        LAVALAMP_CONFIG_PATHS = 0
    }) {

        this.PATH_ALL = LAVALAMP_CONFIG_PATHS;
        this.INSTANCE_POKEMON = 'UNSET';
    };

    async INITIALISE_MEMORY_LAVALAMPS() {
        await this.POKEMON();

        return {
            POKEMON: this.DATA_POKEMON
        }
    };
    async POKEMON() {

        console.log(this.PATH_ALL)
        this.INSTANCE_POKEMON = new Cap_Pokemon({
            POKEMON_CONFIG_BOX_CONSOLE: this.PATH_ALL.POKEMON.BOX.FOLDER.CONSOLE,
            POKEMON_CONFIG_BOX: this.PATH_ALL.POKEMON.BOX.FOLDER.ROOT,
            POKEMON_CONFIG_PIXELDEX: this.PATH_ALL.POKEMON.PIXELDEX.FOLDER.ROOT,
            POKEMON_CONFIG_PIXELDEX_CONSOLE: this.PATH_ALL.POKEMON.PIXELDEX.FOLDER.CONSOLE,
            POKEMON_CONFIG_POKEDEX: this.PATH_ALL.POKEMON.POKEDEX.FOLDER.ROOT,
            POKEMON_CONFIG_POKEDEX_CONSOLE: this.PATH_ALL.POKEMON.POKEDEX.FOLDER.CONSOLE,
        });
        this.DATA_POKEMON = await this.INSTANCE_POKEMON.INITIALISE_SESSION();
    }
}