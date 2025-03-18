export default class Chunk {

    constructor({
        CHUNK_CONFIG_PEN = 0
    }){
        this.DATA_CHUNK = {
            PEN: CHUNK_CONFIG_PEN,
            POKEMON: {
                PARTY: {},
                LEVEL_CAP: 40
            }
        }
        this.POKEMON_DATABASE = {
            1: {
                NAME: "BULBASAUR",
                NICKNAME: "BULBASAUR",
                TYPE: {
                    ONE: 'GRASS',
                    TWO: 'POISON'
                },
                LEVEL: 30
            }
        };
    };

    GENERATE(){
        return this.DATA_CHUNK;
    };
    UPDATE_POKEMON_PARTY({PARAMETER_PARTY_INDEX, PARAMETER_POKEMON}) {
        DATA_CHUNK.POKEMON.PARTY[PARAMETER_PARTY_INDEX] = PARAMETER_POKEMON;
    };

    //? STEP ONE - LOAD PARTY
    //? STEP TWO - SAVE PARTY
    //? STEP THREE - UPDATE PARTY DATA

    //? STEP FOUR - UPDATE LEVEL CAP

    //? STEP FIVE - ADD POKEMON TO DATABASE WITH FULL DATA

    //? STEP SIX
    //? UPDATE POKEMON NAME
    //? UPDATE POKEMON TYPE 
    //? UPDATE POKEMON NICKNAME
    //? UPDATE THE LEVEL

    //? STEP SEVEN - HANDLE EVOLUTION PASSING DATA OVER

    // =================== //
    // ## POKEMON STATS ## //
    // =================== //
    
    /**
     * ## FIND POKEMON IN DATABASE
     */
    SEARCH_POKEMON_DATABASE(PARAMETER_SEARCH_INDEX = 0, PARAMETER_SEARCH_NAME = 0) {
        if (PARAMETER_SEARCH_INDEX !== 0) {
            if (this.POKEMON_DATABASE.hasOwnProperty(PARAMETER_SEARCH_INDEX)) {
                this.POKEMON_ACTIVE = this.POKEMON_DATABASE[PARAMETER_SEARCH_INDEX];
                return this.POKEMON_ACTIVE;
            }
            else {this.GENERATE_NEW_POKEMON()}
        }
        else if (PARAMETER_SEARCH_NAME !== 0) {
            let INDEX_Set = Object.keys(this.POKEMON_DATABASE);
            for (let INDEX_Pokemon = 0; INDEX_Pokemon < INDEX_Set.length; INDEX_Pokemon++) {
                const POKEMON = this.POKEMON_DATABASE[INDEX_Set[INDEX_Pokemon]];
                if (POKEMON.NAME === PARAMETER_SEARCH_NAME) {
                    this.POKEMON_ACTIVE = POKEMON;
                    break;
                };
            }
            return this.POKEMON_ACTIVE;
        };
    }
    /**
     * ## SET CURRENT POKEMON PARTY LEVEL CAP
     */
    UPDATE_POKEMON_LEVEL_CAP(PARAMETER_NEW_CAP) {
        this.DATA_CHUNK.POKEMON.LEVEL_CAP = PARAMETER_NEW_CAP;
    };
    GENERATE_NEW_POKEMON() {};
}