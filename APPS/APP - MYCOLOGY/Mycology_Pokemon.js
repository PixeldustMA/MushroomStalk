import MYCOLOGY_Main from "./Mycology_Main.js";

export default class MYCOLOGY_Pokemon extends MYCOLOGY_Main{

    constructor({
        POKE_CONFIG_REFERENCE = 0,
        POKE_CONFIG_ROOT = 0,
        POKE_CONFIG_PATHS = 0
    }) {

        super()
        this.PATH_POKEREFERENCE = `${POKE_CONFIG_REFERENCE}/KANTO`;
        this.PATHS_POKEMON = POKE_CONFIG_PATHS;
        this.PATHS_ROOT = POKE_CONFIG_ROOT;
    };

    async RUN() {

        this.EXISTANCE_CHECK(this.PATHS_ROOT);

        // =========== //
        // << BOXES >> //
        // =========== //

        await this.#BOX_FOLDERS();
        await this.#BOX_FILES();

        // ============== //
        // << PIXELDEX >> //
        // ============== //

        await this.#PIXELDEX_FOLDERS();
        await this.#PIXELDEX_FILES(); 

        // ============= //
        // << POKEDEX >> //
        // ============= //

        await this.#POKEDEX_FOLDERS();
        await this.#POKEDEX_FILES();

        // ==================== //
        // << REFERENCE DATA >> //
        // ==================== //

        await this.GENERATE_YELLOW()
    };

    // ============= //
    // ## FOLDERS ## //
    // ============= //

    async #POKEDEX_FOLDERS() {
        this.EXISTANCE_CHECK(this.PATHS_POKEMON.POKEDEX.FOLDER.ROOT);
        this.EXISTANCE_CHECK(this.PATHS_POKEMON.POKEDEX.FOLDER.CONSOLE);
        this.EXISTANCE_CHECK(this.PATHS_POKEMON.POKEDEX.FOLDER.KANTO);
    };
    async #PIXELDEX_FOLDERS() {
        this.EXISTANCE_CHECK(this.PATHS_POKEMON.PIXELDEX.FOLDER.ROOT);
        this.EXISTANCE_CHECK(this.PATHS_POKEMON.PIXELDEX.FOLDER.KANTO);
        this.EXISTANCE_CHECK(this.PATHS_POKEMON.PIXELDEX.FOLDER.CONSOLE);
    };
    async #BOX_FOLDERS() {
        this.EXISTANCE_CHECK(this.PATHS_POKEMON.BOX.FOLDER.ROOT);
        this.EXISTANCE_CHECK(this.PATHS_POKEMON.BOX.FOLDER.CONSOLE);
        this.EXISTANCE_CHECK(this.PATHS_POKEMON.BOX.FOLDER.YELLOW);
    };

    // =========== //
    // ## FILES ## //
    // =========== //

    async #POKEDEX_FILES() {
        this.RENDERER_PATH = this.PATHS_POKEMON.POKEDEX.LIST.KANTO;
        this.RENDERER_DATA = [
            'BULBASAUR',
            'IVYSAUR',
            'VENUSAUR',
            'CHARMANDER',
            'CHARMELEON',
            'CHARIZARD',
            'SQUIRTLE',
            'WARTORTLE',
            'BLASTOISE',
            'CATERPIE',
            'METAPOD',
            'BUTTERFREE',
            'WEEDLE',
            'KAKUNA',
            'BEEDRILL',
            'PIDGEY',
            'PIDGEOTTO',
            'PIDGEOT',
            'RATTATA',
            'RATICATE',
            'SPEAROW',
            'FEAROW',
            'EKANS',
            'ARBOK',
            'PIKACHU',
            'RAICHU',
            'SANDSHREW',
            'SANDSLASH',
            'NIDORAN',
            'NIDORINA',
            'NIDOQUEEN',
            'NIDORAN F',
            'NIDORINA',
            'NIDOQUEEN',
            'NIDORAN M',
            'NIDORINO',
            'NIDOKING',
            'CLEFAIRY',
            'CLEFABLE',
            'VULPIX',
            'NINETAILS',
            'JIGGLYPUFF',
            'WIGGLYTUFF',
            'ZUBAT',
            'GOLBAT',
            'ODDISH',
            'GLOOM',
            'VILEPLUME',
            'PARAS',
            'PARASECT',
            'VENONAT',
            'VENOMOTH',
            'DIGLETT',
            'DUGTRIO',
            'MEOWTH',
            'PERSIAN',
            'PSYDUCK',
            'GOLDUCK',
            'MANKEY',
            'PRIMEAPE',
            'GROWLITHE',
            'ARCANINE',
            'POLIWAG',
            'POLIWHIRL',
            'POLIWRATH',
            'ABRA',
            'KADABRA',
            'ALAKAZAM',
            'MACHOP',
            'MACHOKE',
            'MACHAMP',
            'BELLSPROUT',
            'WEEPINBELL',
            'VICTREEBEL',
            'TENTACOOL',
            'TENTACRUEL',
            'GEODUDE',
            'GRAVELER',
            'GOLEM',
            'PONYTA',
            'RAPIDASH',
            'SLOWPOKE',
            'SLOWBRO',
            'MAGNEMITE',
            'MAGNETON',
            'FARFETCHD',
            'DODUO',
            'DODRIO',
            'SEEL',
            'DEWGONG',
            'GRIMER',
            'MUK',
            'SHELLDER',
            'CLOYSTER',
            'GASTLY',
            'HAUNTER',
            'GENGAR',
            'ONIX',
            'DROWZEE',
            'HYPNO',
            'KRABBY',
            'KINGLER',
            'VOLTORB',
            'ELECTRODE',
            'EXEGGCUTE',
            'EXEGGUTOR',
            'CUBONE',
            'MAROWAK',
            'HITMONLEE',
            'HITMONCHAN',
            'LICKITUNG',
            'KOFFING',
            'WEEZING',
            'RHYHORN',
            'RHYDON',
            'CHANSEY',
            'TANGELA',
            'KANGASKHAN',
            'HORSEA',
            'SEADRA',
            'GOLDEEN',
            'SEAKING',
            'STARYU',
            'STARMIE',
            'MR MIME',
            'SCYTHER',
            'JYNX',
            'ELECTABUZZ',
            'MAGMAR',
            'PINSIR',
            'TAUROS',
            'MAGIKARP',
            'GYARADOS',
            'LAPRAS',
            'DITTO',
            'EEVEE',
            'VAPOREON',
            'JOLTEON',
            'FLAREON',
            'PORYGON',
            'OMANYTE',
            'OMASTAR',
            'KABUTO',
            'KABUTOPS',
            'AERODACTYL',
            'SNORLAX',
            'ARTICUNO',
            'ZAPDOS',
            'MOLTRES',
            'DRATINI',
            'DRAGONAIR',
            'DRAGONITE',
            'MEWTO',
            'MEW'

        ];
        await this.EXIST();
    };
    async #PIXELDEX_FILES() {
        this.RENDERER_PATH = this.PATHS_POKEMON.PIXELDEX.LIST.KANTO;
        console.log(this.PATHS_POKEMON)
        this.RENDERER_DATA = [];
        await this.EXIST();
    };
    async #BOX_FILES() {
        this.RENDERER_PATH = this.PATHS_POKEMON.BOX.LIST.YELLOW;
        this.RENDERER_DATA = [];
        await this.EXIST();
    };

    async GENERATE_YELLOW() {

        // =============== //
        // << BULBASAUR >> //
        // =============== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/BULBASAUR.json`;
        this.RENDERER_DATA = this.GENERATE_BULBASAUR();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/IVYSAUR.json`;
        this.RENDERER_DATA = this.GENERATE_IVYSAUR();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/VENUSAUR.json`;
        this.RENDERER_DATA = this.GENERATE_VENUSAUR();
        await this.EXIST();

        // ================ //
        // << CHARMANDER >> //
        // ================ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/CHARMANDER.json`;
        this.RENDERER_DATA = this.GENERATE_CHARMANDER();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/CHARMELEON.json`;
        this.RENDERER_DATA = this.GENERATE_CHARMELEON();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/CHARIZARD.json`;
        this.RENDERER_DATA = this.GENERATE_CHARIZARD();
        await this.EXIST();

        // ============== //
        // << SQUIRTLE >> //
        // ============== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SQUIRTLE.json`;
        this.RENDERER_DATA = this.GENERATE_SQUIRTLE();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/WARTORTLE.json`;
        this.RENDERER_DATA = this.GENERATE_WARTORTLE();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/BLASTOISE.json`;
        this.RENDERER_DATA = this.GENERATE_BLASTOISE();
        await this.EXIST();

        // =============== //
        // << CARTERPIE >> //
        // =============== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/CATERPIE.json`;
        this.RENDERER_DATA = this.GENERATE_CATERPIE();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/METAPOD.json`;
        this.RENDERER_DATA = this.GENERATE_METAPOD();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/BUTTERFREE.json`;
        this.RENDERER_DATA = this.GENERATE_BUTTERFREE();
        await this.EXIST();

        // ============ //
        // << WEEDLE >> //
        // ============ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/WEEDLE.json`;
        this.RENDERER_DATA = this.GENERATE_WEEDLE();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/KAKUNA.json`;
        this.RENDERER_DATA = this.GENERATE_KAKUNA();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/BEEDRILL.json`;
        this.RENDERER_DATA = this.GENERATE_BEEDRILL();
        await this.EXIST();

        // ============ //
        // << PIDGEY >> //
        // ============ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PIDGEY.json`;
        this.RENDERER_DATA = this.GENERATE_PIDGEY();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PIDGEOTTO.json`;
        this.RENDERER_DATA = this.GENERATE_PIDGEOTTO();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PIDGEOT.json`;
        this.RENDERER_DATA = this.GENERATE_PIDGEOT();
        await this.EXIST();

        // ============= //
        // << RATTATA >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/RATTATA.json`;
        this.RENDERER_DATA = this.GENERATE_RATTATA();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/RATICATE.json`;
        this.RENDERER_DATA = this.GENERATE_RATICATE();
        await this.EXIST();

        // ============= //
        // << SPEAROW >> // 
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SPEAROW.json`;
        this.RENDERER_DATA = this.GENERATE_SPEAROW();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/FEAROW.json`;
        this.RENDERER_DATA = this.GENERATE_FEAROW();
        await this.EXIST();

        // =========== //
        // << EKANS >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/EKANS.json`;
        this.RENDERER_DATA = this.GENERATE_EKANS();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ARBOK.json`;
        this.RENDERER_DATA = this.GENERATE_ARBOK();
        await this.EXIST();

        // ============= //
        // << PIKACHU >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PIKACHU.json`;
        this.RENDERER_DATA = this.GENERATE_PIKACHU();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/RAICHU.json`;
        this.RENDERER_DATA = this.GENERATE_RAICHU();
        await this.EXIST();

        // =============== //
        // << SANDSHREW >> //
        // =============== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SANDSHREW.json`;
        this.RENDERER_DATA = this.GENERATE_SANDSHREW();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SANDSLASH.json`;
        this.RENDERER_DATA = this.GENERATE_SANDSLASH();
        await this.EXIST();

        // ============= //
        // << NIDORAN >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/NIDORAN_G.json`;
        this.RENDERER_DATA = this.GENERATE_NIDORAN_G();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/NIDORINA.json`;
        this.RENDERER_DATA = this.GENERATE_NIDORINA();
        await this.EXIST();
        
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/NIDOQUEEN.json`;
        this.RENDERER_DATA = this.GENERATE_NIDOQUEEN();
        await this.EXIST();
        
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/NIDORAN_B.json`;
        this.RENDERER_DATA = this.GENERATE_NIDORAN_B();
        await this.EXIST();
        
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/NIDORINO.json`;
        this.RENDERER_DATA = this.GENERATE_NIDORINO();
        await this.EXIST();
        
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/NIDOKING.json`;
        this.RENDERER_DATA = this.GENERATE_NIDOKING();
        await this.EXIST();

        // ============== //
        // << CLEFAIRY >> //
        // ============== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/CLEFAIRY.json`;
        this.RENDERER_DATA = this.GENERATE_CLEFAIRY();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/CLEFABLE.json`;
        this.RENDERER_DATA = this.GENERATE_CLEFABLE();
        await this.EXIST();

        // ============ //
        // << VULPIX >> //
        // ============ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/VULPIX.json`;
        this.RENDERER_DATA = this.GENERATE_VULPIX();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/NINETAILS.json`;
        this.RENDERER_DATA = this.GENERATE_NINETAILS();
        await this.EXIST();

        // ================ //
        // << JIGGLYPUFF >> //
        // ================ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/JIGGLYPUFF.json`;
        this.RENDERER_DATA = this.GENERATE_JIGGLYPUFF();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/WIGGLYTUFF.json`;
        this.RENDERER_DATA = this.GENERATE_WIGGLYTUFF();
        await this.EXIST();

        // =========== //
        // << ZUBAT >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ZUBAT.json`;
        this.RENDERER_DATA = this.GENERATE_ZUBAT();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GOLBAT.json`;
        this.RENDERER_DATA = this.GENERATE_GOLBAT();
        await this.EXIST();

        // ============ //
        // << ODDISH >> //
        // ============ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ODDISH.json`;
        this.RENDERER_DATA = this.GENERATE_ODDISH();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GLOOM.json`;
        this.RENDERER_DATA = this.GENERATE_GLOOM();
        await this.EXIST();
        
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/VILEPLUME.json`;
        this.RENDERER_DATA = this.GENERATE_VILEPLUME();
        await this.EXIST();

        // =========== //
        // << PARAS >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PARAS.json`;
        this.RENDERER_DATA = this.GENERATE_PARAS();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PARASECT.json`;
        this.RENDERER_DATA = this.GENERATE_PARASECT();
        await this.EXIST();

        // ============= //
        // << VENONAT >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/VENONAT.json`;
        this.RENDERER_DATA = this.GENERATE_VENONAT();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/VENOMOTH.json`;
        this.RENDERER_DATA = this.GENERATE_VENOMOTH();
        await this.EXIST();

        // ============= //
        // << DIGLETT >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DIGLETT.json`;
        this.RENDERER_DATA = this.GENERATE_DIGLETT();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DUGTRIO.json`;
        this.RENDERER_DATA = this.GENERATE_DUGTRIO();
        await this.EXIST();

        // ============ //
        // << MEOWTH >> //
        // ============ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MEOWTH.json`;
        this.RENDERER_DATA = this.GENERATE_MEOWTH();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PERSIAN.json`;
        this.RENDERER_DATA = this.GENERATE_PERSIAN();
        await this.EXIST();

        // ============= //
        // << PSYDUCK >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PSYDUCK.json`;
        this.RENDERER_DATA = this.GENERATE_PSYDUCK();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GOLDUCK.json`;
        this.RENDERER_DATA = this.GENERATE_GOLDUCK();
        await this.EXIST();

        // ============ //
        // << MANKEY >> //
        // ============ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MANKEY.json`;
        this.RENDERER_DATA = this.GENERATE_MANKEY();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PRIMEAPE.json`;
        this.RENDERER_DATA = this.GENERATE_PRIMEAPE();
        await this.EXIST();

        // =============== //
        // << GROWLITHE >> //
        // =============== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GROWLITHE.json`;
        this.RENDERER_DATA = this.GENERATE_GROWLITHE();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ARCANINE.json`;
        this.RENDERER_DATA = this.GENERATE_ARCANINE();
        await this.EXIST();

        // ============= //
        // << POLIWAG >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/POLIWAG.json`;
        this.RENDERER_DATA = this.GENERATE_POLIWAG();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/POLIWHIRL.json`;
        this.RENDERER_DATA = this.GENERATE_POLIWHIRL();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/POLIWRATH.json`;
        this.RENDERER_DATA = this.GENERATE_POLIWRATH();
        await this.EXIST();

        // ========== //
        // << ABRA >> //
        // ========== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ABRA.json`;
        this.RENDERER_DATA = this.GENERATE_ABRA();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/KADABRA.json`;
        this.RENDERER_DATA = this.GENERATE_KADABRA();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ALAKAZAM.json`;
        this.RENDERER_DATA = this.GENERATE_ALAKAZAM();
        await this.EXIST();

        // ============ //
        // << MACHOP >> //
        // ============ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MACHOP.json`;
        this.RENDERER_DATA = this.GENERATE_MACHOP();
        await this.EXIST();
        
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MACHOKE.json`;
        this.RENDERER_DATA = this.GENERATE_MACHOKE();
        await this.EXIST();
        
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MACHAMP.json`;
        this.RENDERER_DATA = this.GENERATE_MACHAMP();
        await this.EXIST();

        // ================ //
        // << BELLSPROUT >> //
        // ================ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/BELLSPROUT.json`;
        this.RENDERER_DATA = this.GENERATE_BELLSPROUT();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/WEEPINBELL.json`;
        this.RENDERER_DATA = this.GENERATE_WEEPINBELL();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/VICTREEBEL.json`;
        this.RENDERER_DATA = this.GENERATE_VICTREEBEL();
        await this.EXIST();








        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/TENTACOOL.json`;
        this.RENDERER_DATA = this.GENERATE_TENTACOOL();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/TENTACRUEL.json`;
        this.RENDERER_DATA = this.GENERATE_TENTACRUEL();
        await this.EXIST();


        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GEODUDE.json`;
        this.RENDERER_DATA = this.GENERATE_GEODUDE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GRAVELER.json`;
        this.RENDERER_DATA = this.GENERATE_GRAVELER();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GOLEM.json`;
        this.RENDERER_DATA = this.GENERATE_GOLEM();
        await this.EXIST();






        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PONYTA.json`;
        this.RENDERER_DATA = this.GENERATE_PONYTA();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/RAPIDASH.json`;
        this.RENDERER_DATA = this.GENERATE_RAPIDASH();
        await this.EXIST();


        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SLOWPOKE.json`;
        this.RENDERER_DATA = this.GENERATE_SLOWPOKE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SLOWBRO.json`;
        this.RENDERER_DATA = this.GENERATE_SLOWBRO();
        await this.EXIST();




        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MAGNEMITE.json`;
        this.RENDERER_DATA = this.GENERATE_MAGNEMITE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MAGNETON.json`;
        this.RENDERER_DATA = this.GENERATE_MAGNETON();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/FARFETCHD.json`;
        this.RENDERER_DATA = this.GENERATE_FARFETCHD();
        await this.EXIST();


        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DUDUO.json`;
        this.RENDERER_DATA = this.GENERATE_DODUO();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DODRIO.json`;
        this.RENDERER_DATA = this.GENERATE_DODRIO();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SEEL.json`;
        this.RENDERER_DATA = this.GENERATE_SEEL();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DEWGONG.json`;
        this.RENDERER_DATA = this.GENERATE_DEWGONG();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GRIMER.json`;
        this.RENDERER_DATA = this.GENERATE_GRIMER();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MUK.json`;
        this.RENDERER_DATA = this.GENERATE_MUK();
        await this.EXIST();


        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SHELLDER.json`;
        this.RENDERER_DATA = this.GENERATE_SHELLDER();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/CLOYSTER.json`;
        this.RENDERER_DATA = this.GENERATE_CLOYSTER();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GHASTLY.json`;
        this.RENDERER_DATA = this.GENERATE_GHASTLY();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/HAUNTER.json`;
        this.RENDERER_DATA = this.GENERATE_HAUNTER();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GENGAR.json`;
        this.RENDERER_DATA = this.GENERATE_GENGAR();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ONIX.json`;
        this.RENDERER_DATA = this.GENERATE_ONIX();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DROWZEE.json`;
        this.RENDERER_DATA = this.GENERATE_DROWZEE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/HYPNO.json`;
        this.RENDERER_DATA = this.GENERATE_HYPNO();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/KRABBY.json`;
        this.RENDERER_DATA = this.GENERATE_KRABBY();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/KINGLER.json`;
        this.RENDERER_DATA = this.GENERATE_KINGLER();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/VOLTORB.json`;
        this.RENDERER_DATA = this.GENERATE_VOLTORB();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ELECTRODE.json`;
        this.RENDERER_DATA = this.GENERATE_ELECTRODE();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/EXEGGCUTE.json`;
        this.RENDERER_DATA = this.GENERATE_EXEGGCUTE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/EXEGGUTOR.json`;
        this.RENDERER_DATA = this.GENERATE_EXEGGUTOR();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/CUBONE.json`;
        this.RENDERER_DATA = this.GENERATE_CUBONE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MAROWAK.json`;
        this.RENDERER_DATA = this.GENERATE_MAROWAK();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/HITMONLEE.json`;
        this.RENDERER_DATA = this.GENERATE_HITMONLEE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/HITMONCHAN.json`;
        this.RENDERER_DATA = this.GENERATE_HITMONCHAN();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/LICKITUNG.json`;
        this.RENDERER_DATA = this.GENERATE_LICKITUNG();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/KOFFING.json`;
        this.RENDERER_DATA = this.GENERATE_KOFFING();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/WEEZING.json`;
        this.RENDERER_DATA = this.GENERATE_WEEZING();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/RHYHORN.json`;
        this.RENDERER_DATA = this.GENERATE_RHYHORN();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/RHYDON.json`;
        this.RENDERER_DATA = this.GENERATE_RHYDON();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/CHANSEY.json`;
        this.RENDERER_DATA = this.GENERATE_CHANSEY();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/TANGELA.json`;
        this.RENDERER_DATA = this.GENERATE_TANGELA();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/KANGASKHAN.json`;
        this.RENDERER_DATA = this.GENERATE_KANGASKHAN();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/HORSEA.json`;
        this.RENDERER_DATA = this.GENERATE_HORSEA();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SEADRA.json`;
        this.RENDERER_DATA = this.GENERATE_SEADRA();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GOLDEEN.json`;
        this.RENDERER_DATA = this.GENERATE_GOLDEEN();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SEAKING.json`;
        this.RENDERER_DATA = this.GENERATE_SEAKING();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/STARYU.json`;
        this.RENDERER_DATA = this.GENERATE_STARYU();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/STARMIE.json`;
        this.RENDERER_DATA = this.GENERATE_STARMIE();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MR_MIME.json`;
        this.RENDERER_DATA = this.GENERATE_MR_MIME();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SCYTHER.json`;
        this.RENDERER_DATA = this.GENERATE_SCYTHER();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/JYNX.json`;
        this.RENDERER_DATA = this.GENERATE_JYNX();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ELECTABUZZ.json`;
        this.RENDERER_DATA = this.GENERATE_ELECTABUZZ();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MAGMAR.json`;
        this.RENDERER_DATA = this.GENERATE_MAGMAR();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PINSIR.json`;
        this.RENDERER_DATA = this.GENERATE_PINSIR();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/TAUROS.json`;
        this.RENDERER_DATA = this.GENERATE_TAUROS();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MAGIKARP.json`;
        this.RENDERER_DATA = this.GENERATE_MAGIKARP();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/GYARADOS.json`;
        this.RENDERER_DATA = this.GENERATE_GYARADOS();
        await this.EXIST();

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/LAPRAS.json`;
        this.RENDERER_DATA = this.GENERATE_LAPRAS();
        await this.EXIST();

        // =========== //
        // << DITTO >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DITTO.json`;
        this.RENDERER_DATA = this.GENERATE_DITTO();
        await this.EXIST();

        // =========== //
        // << EEVEE >> //
        // =========== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/EEVEE.json`;
        this.RENDERER_DATA = this.GENERATE_EEVEE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/VAPOREON.json`;
        this.RENDERER_DATA = this.GENERATE_VAPOREON();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/JOLTEON.json`;
        this.RENDERER_DATA = this.GENERATE_JOLTEON();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/FLAREON.json`;
        this.RENDERER_DATA = this.GENERATE_FLAREON();
        await this.EXIST();

        // ============= //
        // << PORYGON >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/PORYGON.json`;
        this.RENDERER_DATA = this.GENERATE_PORYGON();
        await this.EXIST();

        // ============= //
        // << OMANYTE >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/OMANYTE.json`;
        this.RENDERER_DATA = this.GENERATE_OMANYTE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/OMASTAR.json`;
        this.RENDERER_DATA = this.GENERATE_OMASTAR();
        await this.EXIST();

        // ============ //
        // << KABUTO >> //
        // ============ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/KABUTO.json`;        
        this.RENDERER_DATA = this.GENERATE_KABUTO();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/KABUTOPS.json`;
        this.RENDERER_DATA = this.GENERATE_KABUTOPS();
        await this.EXIST();

        // ================ //
        // << AERODACTYL >> //
        // ================ //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/AERODACTYL.json`;
        this.RENDERER_DATA = this.GENERATE_AERODACTYL();
        await this.EXIST();

        // ============= //
        // << SNORLAX >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/SNORLAX.json`;
        this.RENDERER_DATA = this.GENERATE_SNORLAX();
        await this.EXIST();

        // ============== //
        // << ARTICUNO >> //
        // ============== //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ARTICUNO.json`;
        this.RENDERER_DATA = this.GENERATE_ARTICUNO();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/ZAPDOS.json`;
        this.RENDERER_DATA = this.GENERATE_ZAPDOS();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MOLTRES.json`;
        this.RENDERER_DATA = this.GENERATE_MOLTRES();
        await this.EXIST();

        // ============= //
        // << DRATINI >> //
        // ============= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DRAGONAIR.json`;
        this.RENDERER_DATA = this.GENERATE_DRAGONAIR();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DRAGGONITE.json`;
        this.RENDERER_DATA = this.GENERATE_DRAGONITE();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/DRATINI.json`;
        this.RENDERER_DATA = this.GENERATE_DRATINI();
        await this.EXIST();

        // ========= //
        // << MEW >> //
        // ========= //

        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MEWTWO.json`;
        this.RENDERER_DATA = this.GENERATE_MEWTWO();
        await this.EXIST();
        this.RENDERER_PATH = `${this.PATH_POKEREFERENCE}/MEW.json`;
        this.RENDERER_DATA = this.GENERATE_MEW();
        await this.EXIST();
    };

    // ========= //
    // << BUG >> // 
    // ========= //

    GENERATE_CATERPIE() {
        return {
            NAME: 'CATERPIE',
            TYPES: ['BUG'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'METAPOD',
                3: 'BUTTERFREE'
            },
            POKEDEX: {
                KANTO: '010'
            } 
        }
    };
    GENERATE_METAPOD() {
        return {
            NAME: 'METAPOD',
            TYPES: ['BUG'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'CATERPIE',
                3: 'BUTTERFREE'
            },
            POKEDEX: {
                KANTO: '011'
            } 
        }
    };
    GENERATE_BUTTERFREE() {
        return {
            NAME: 'BUTTERFREE',
            TYPES: ['BUG', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'CATERPIE',
                2: 'METAPOD'
            },
            POKEDEX: {
                KANTO: '012'
            } 
        }
    };
    GENERATE_WEEDLE() {
        return {
            NAME: 'WEEDLE',
            TYPES: ['BUG', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'KAKUNA',
                3: 'BEEDRILL'
            },
            POKEDEX: {
                KANTO: '013'
            } 
        }
    };
    GENERATE_KAKUNA() {
        return {
            NAME: 'KAKUNA',
            TYPES: ['BUG', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'WEEDLE',
                3: 'BEEDRILL'
            },
            POKEDEX: {
                KANTO: '014'
            } 
        }
    };
    GENERATE_BEEDRILL() {
        return {
            NAME: 'BEEDRILL',
            TYPES: ['BUG', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'WEEDLE',
                2: 'KAKUNA'
            },
            POKEDEX: {
                KANTO: '015'
            } 
        }
    };
    GENERATE_PARAS() {
        return {
            NAME: 'PARAS',
            TYPES: ['BUG', 'GRASS'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'PARASECT'
            },
            POKEDEX: {
                KANTO: '046'
            } 
        }
    };
    GENERATE_PARASECT() {
        return {
            NAME: 'PARASECT',
            TYPES: ['BUG', 'GRASS'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'PARAS'
            },
            POKEDEX: {
                KANTO: '047'
            } 
        }
    };
    GENERATE_VENONAT() {
        return {
            NAME: 'VENONAT',
            TYPES: ['BUG', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'VENOMOTH'
            },
            POKEDEX: {
                KANTO: '048'
            } 
        }
    };
    GENERATE_VENOMOTH() {
        return {
            NAME: 'VENOMOTH',
            TYPES: ['BUG', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'VENONAT'
            },
            POKEDEX: {
                KANTO: '049'
            } 
        }
    };
    GENERATE_SCYTHER() {
        return {
            NAME: 'SCYTHER',
            TYPES: ['BUG', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '123'
            } 
        }
    };
    GENERATE_PINSIR() {
        return {
            NAME: 'PINSIR',
            TYPES: ['BUG'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '127'
            } 
        }
    };

    // ============ //
    // << DRAGON >> //
    // ============ //

    GENERATE_DRATINI() {
        return {
            NAME: 'DRATINI',
            TYPES: ['DRAGON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'DRAGONAIR',
                3: 'DRAGONITE'
            },
            POKEDEX: {
                KANTO: '147'
            } 
        }
    };
    GENERATE_DRAGONAIR() {
        return {
            NAME: 'DRAGONAIR',
            TYPES: ['DRAGON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'DRATINI',
                3: 'DRAGONITE'
            },
            POKEDEX: {
                KANTO: '148'
            } 
        }
    };
    GENERATE_DRAGONITE() {
        return {
            NAME: 'DRAGONITE',
            TYPES: ['DRAGON', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'DRATINI',
                2: 'DRAGONAIR'
            },
            POKEDEX: {
                KANTO: '149'
            } 
        }
    };

    // ============== //
    // << ELECTRIC >> //
    // ============== //

    GENERATE_PIKACHU() {
        return {
            NAME: 'PIKACHU',
            TYPES: ['ELECTRIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'RAICHU'
            },
            POKEDEX: {
                KANTO: '025'
            } 
        }
    };
    GENERATE_RAICHU() {
        return {
            NAME: 'RAICHU',
            TYPES: ['ELECTRIC'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'PIKACHU'
            },
            POKEDEX: {
                KANTO: '026'
            } 
        }
    };
    GENERATE_MAGNEMITE() {
        return {
            NAME: 'MAGNEMITE',
            TYPES: ['ELECTRIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'MAGNETON'
            },
            POKEDEX: {
                KANTO: '081'
            } 
        }
    };
    GENERATE_MAGNETON() {
        return {
            NAME: 'MAGNETON',
            TYPES: ['ELECTRIC'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'MAGNEMITE'
            },
            POKEDEX: {
                KANTO: '082'
            } 
        }
    };
    GENERATE_VOLTORB() {
        return {
            NAME: 'VOLTORB',
            TYPES: ['ELECTRIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'ELECTRODE'
            },
            POKEDEX: {
                KANTO: '100'
            } 
        }
    };
    GENERATE_ELECTRODE() {
        return {
            NAME: 'ELECTRODE',
            TYPES: ['ELECTRIC'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'VOLTORB'
            },
            POKEDEX: {
                KANTO: '101'
            } 
        }
    };
    GENERATE_ELECTABUZZ() {
        return {
            NAME: 'ELECTABUZZ',
            TYPES: ['ELECTRIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '125'
            } 
        }
    };
    GENERATE_JOLTEON() {
        return {
            NAME: 'JOLTEON',
            TYPES: ['ELECTRIC'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'EEVEE'
            },
            POKEDEX: {
                KANTO: '135'
            } 
        }
    };
    GENERATE_ZAPDOS() {
        return {
            NAME: 'ZAPDOS',
            TYPES: ['ELECTIC', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '145'
            } 
        }
    };

    // =========== //
    // << FAIRY >> //
    // =========== //

    GENERATE_CLEFAIRY() {
        return {
            NAME: 'CLEFAIRY',
            TYPES: ['FAIRY'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'CLEFABLE'
            },
            POKEDEX: {
                KANTO: '035'
            } 
        }
    };
    GENERATE_CLEFABLE() {
        return {
            NAME: 'CLEFABLE',
            TYPES: ['FAIRY'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'CLEFAIRY'
            },
            POKEDEX: {
                KANTO: '036'
            } 
        }
    };

    // ============== //
    // << FIGHTING >> //
    // ============== //

    GENERATE_MANKEY() {
        return {
            NAME: 'MANKEY',
            TYPES: ['FIGHTING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'PRIMEAPE'
            },
            POKEDEX: {
                KANTO: '056'
            } 
        }
    };
    GENERATE_PRIMEAPE() {
        return {
            NAME: 'PRIMEAPE',
            TYPES: ['FIGHTING'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'MANKEY'
            },
            POKEDEX: {
                KANTO: '057'
            } 
        }
    };
    GENERATE_MACHOP() {
        return {
            NAME: 'MACHOP',
            TYPES: ['FIGHTING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'MACHOKE',
                3: 'MACHAMP'
            },
            POKEDEX: {
                KANTO: '066'
            } 
        }
    };
    GENERATE_MACHOKE() {
        return {
            NAME: 'MACHOKE',
            TYPES: ['FIGHTING'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'MACHOP',
                3: 'MACHAMP'
            },
            POKEDEX: {
                KANTO: '067'
            } 
        }
    };
    GENERATE_MACHAMP() {
        return {
            NAME: 'MACHAMP',
            TYPES: ['FIGHTING'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'MACHOP',
                2: 'MACHOKE'
            },
            POKEDEX: {
                KANTO: '068'
            } 
        }
    };
    GENERATE_HITMONLEE() {
        return {
            NAME: 'HITMONLEE',
            TYPES: ['FIGHTING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'HITMONCHAN'
            },
            POKEDEX: {
                KANTO: '106'
            } 
        }
    };
    GENERATE_HITMONCHAN() {
        return {
            NAME: 'HITMONCHAN',
            TYPES: ['FIGHTING'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'HITMONLEE'
            },
            POKEDEX: {
                KANTO: '107'
            } 
        }
    };

    // ========== //
    // << FIRE >> //
    // ========== //

    GENERATE_CHARMANDER() {
        return {
            NAME: 'CHARMANDER',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'CHARMELEON',
                3: 'CHARIZARD'
            },
            POKEDEX: {
                KANTO: '004'
            } 
        }
    };
    GENERATE_CHARMELEON() {
        return {
            NAME: 'CHARMELEON',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'CHARMANDER',
                3: 'CHARIZARD'
            },
            POKEDEX: {
                KANTO: '005'
            } 
        }
    };
    GENERATE_CHARIZARD() {
        return {
            NAME: 'CHARIZARD',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'CHARMANDER',
                2: 'CHARMELEON'
            },
            POKEDEX: {
                KANTO: '006'
            } 
        }
    };
    GENERATE_VULPIX() {
        return {
            NAME: 'VULPIX',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'NINETAILS'
            },
            POKEDEX: {
                KANTO: '037'
            } 
        }
    };
    GENERATE_NINETAILS() {
        return {
            NAME: 'NINETAILS',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                1: 'VULPIX'
            },
            POKEDEX: {
                KANTO: '038'
            } 
        }
    };
    GENERATE_GROWLITHE() {
        return {
            NAME: 'GROWLITHE',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'ARCANINE'
            },
            POKEDEX: {
                KANTO: '058'
            } 
        }
    };
    GENERATE_ARCANINE() {
        return {
            NAME: 'ARCANINE',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                1: 'GROWLITHE'
            },
            POKEDEX: {
                KANTO: '059'
            } 
        }
    };
    GENERATE_PONYTA() {
        return {
            NAME: 'PONYTA',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'RAPIDASH'
            },
            POKEDEX: {
                KANTO: '077'
            } 
        }
    };
    GENERATE_RAPIDASH() {
        return {
            NAME: 'RAPIDASH',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                1: 'PONYTA'
            },
            POKEDEX: {
                KANTO: '078'
            } 
        }
    };
    GENERATE_MAGMAR() {
        return {
            NAME: 'MAGMAR',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '126'
            } 
        }
    };
    GENERATE_FLAREON() {
        return {
            NAME: 'FLAREON',
            TYPES: ['FIRE'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'EEVEE'
            },
            POKEDEX: {
                KANTO: '136'
            } 
        }
    }; 
    GENERATE_MOLTRES() {    
        return {
            NAME: 'MOLTRES',
            TYPES: ['FIRE', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '146'
            } 
        }
    };

    // ============ //
    // << FLYING >> //
    // ============ //

    GENERATE_PIDGEY() {
        return {
            NAME: 'PIDGEY',
            TYPES: ['NORMAL', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'PIDGEOTTO',
                3: 'PIDGEY'
            },
            POKEDEX: {
                KANTO: '016'
            } 
        }
    };
    GENERATE_PIDGEOTTO() {
        return {
            NAME: 'PIDGEOTTO',
            TYPES: ['NORMAL', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'PIDGEY',
                3: 'PIDGEY'
            },
            POKEDEX: {
                KANTO: '017'
            } 
        }
    };
    GENERATE_PIDGEOT() {
        return {
            NAME: 'PIDGEOT',
            TYPES: ['NORMAL', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'PIDGEY',
                2: 'PIDGEOTTO'
            },
            POKEDEX: {
                KANTO: '018'
            } 
        }
    };
    GENERATE_SPEAROW() {
        return {
            NAME: 'SPEAROW',
            TYPES: ['NORMAL', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'FEAROW'
            },
            POKEDEX: {
                KANTO: '021'
            } 
        }
    };
    GENERATE_FEAROW() {
        return {
            NAME: 'FEAROW',
            TYPES: ['NORMAL', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'SPEAROW'
            },
            POKEDEX: {
                KANTO: '022'
            } 
        }
    };
    GENERATE_FARFETCHD() {
        return {
            NAME: 'FARFETCHD',
            TYPES: ['NORMAL', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '083'
            } 
        }
    };
    GENERATE_DODUO() {
        return {
            NAME: 'DODUO',
            TYPES: ['NORMAL', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'DODRIO'
            },
            POKEDEX: {
                KANTO: '084'
            } 
        }
    };
    GENERATE_DODRIO() {
        return {
            NAME: 'DODRIO',
            TYPES: ['NORMAL', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'DODUO'
            },
            POKEDEX: {
                KANTO: '085'
            } 
        }
    };

    // =========== //
    // << GHOST >> //
    // =========== //

    GENERATE_GHASTLY() {
        return {
            NAME: 'GHASTLY',
            TYPES: ['GHOST', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'HAUNTER',
                3: 'GENGAR'
            },
            POKEDEX: {
                KANTO: '092'
            } 
        }
    };
    GENERATE_HAUNTER() {
        return {
            NAME: 'HAUNTER',
            TYPES: ['GHOST', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'GHASTLY',
                3: 'GENGAR'
            },
            POKEDEX: {
                KANTO: '093'
            } 
        }
    };
    GENERATE_GENGAR() {
        return {
            NAME: 'GENGAR',
            TYPES: ['GHOST', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'GHASTLY',
                2: 'HAUNTER'
            },
            POKEDEX: {
                KANTO: '094'
            } 
        }
    };

    // =========== //
    // << GRASS >> //
    // =========== //

    GENERATE_BULBASAUR() {
        return {
            NAME: 'BULBASAUR',
            TYPES: ['GRASS', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'IVYSAUR',
                3: 'VENUSAUR'
            },
            POKEDEX: {
                KANTO: '001'
            } 
        }
    };
    GENERATE_IVYSAUR() {
        return {
            NAME: 'IVYSAUR',
            TYPES: ['GRASS', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'BULBASAUR',
                3: 'VENUSAUR'
            },
            POKEDEX: {
                KANTO: '002'
            } 
        }
    };
    GENERATE_VENUSAUR() {
        return {
            NAME: 'VENUSAUR',
            TYPES: ['GRASS', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'BULBASAUR',
                2: 'IVYSAUR'
            },
            POKEDEX: {
                KANTO: '003'
            } 
        }
    };
    GENERATE_ODDISH() {
        return {
            NAME: 'ODDISH',
            TYPES: ['GRASS', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'GLOOM',
                3: 'VILEPLUME'
            },
            POKEDEX: {
                KANTO: '043'
            } 
        }
    };
    GENERATE_GLOOM() {
        return {
            NAME: 'GLOOM',
            TYPES: ['GRASS', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'ODDISH',
                3: 'VILEPLUME'
            },
            POKEDEX: {
                KANTO: '044'
            } 
        }
    };
    GENERATE_VILEPLUME() {
        return {
            NAME: 'VILEPLUME',
            TYPES: ['GRASS', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'ODDISH',
                2: 'GLOOM'
            },
            POKEDEX: {
                KANTO: '045'
            } 
        }
    };
    GENERATE_BELLSPROUT() {
        return {
            NAME: 'BELLSPROUT',
            TYPES: ['GRASS', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'WEEPINGBELL',
                3: 'VICTREEBEL'
            },
            POKEDEX: {
                KANTO: '069'
            } 
        }
    };
    GENERATE_WEEPINBELL() {
        return {
            NAME: 'WEEPINBELL',
            TYPES: ['GRASS', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'BELLSPROUT',
                3: 'VICTREEBEL'
            },
            POKEDEX: {
                KANTO: '070'
            } 
        }
    };
    GENERATE_VICTREEBEL() {
        return {
            NAME: 'VICTREEBEL',
            TYPES: ['GRASS', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'BELLSPROUT',
                2: 'GLOOM'
            },
            POKEDEX: {
                KANTO: '071'
            } 
        }
    };
    GENERATE_EXEGGCUTE() {
        return {
            NAME: 'EXEGGCUTE',
            TYPES: ['GRASS', 'PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'EXEGGUTOR'
            },
            POKEDEX: {
                KANTO: '102'
            } 
        }
    };
    GENERATE_EXEGGUTOR() {
        return {
            NAME: 'EXEGGUTOR',
            TYPES: ['GRASS', 'PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'EXEGGCUTE'
            },
            POKEDEX: {
                KANTO: '103'
            } 
        }
    };
    GENERATE_TANGELA() {
        return {
            NAME: 'TANGELA',
            TYPES: ['GRASS'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '114'
            } 
        }
    };

    // ============ //
    // << GROUND >> //
    // ============ //

    GENERATE_SANDSHREW() {
        return {
            NAME: 'SANDSHREW',
            TYPES: ['GROUND'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'SANDSLASH'
            },
            POKEDEX: {
                KANTO: '027'
            } 
        }
    };
    GENERATE_SANDSLASH() {
        return {
            NAME: 'SANDSLASH',
            TYPES: ['GROUND'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'SANDSHREW'
            },
            POKEDEX: {
                KANTO: '028'
            } 
        }
    };
    GENERATE_DIGLETT() {
        return {
            NAME: 'DIGLETT',
            TYPES: ['GROUND'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'DUGTRIO'
            },
            POKEDEX: {
                KANTO: '050'
            } 
        }
    };
    GENERATE_DUGTRIO() {
        return {
            NAME: 'DUGTRIO',
            TYPES: ['GROUND'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'DIGLETT'
            },
            POKEDEX: {
                KANTO: '051'
            } 
        }
    };
    GENERATE_CUBONE() {
        return {
            NAME: 'CUBONE',
            TYPES: ['GROUND'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'MAROWAK'
            },
            POKEDEX: {
                KANTO: '104'
            } 
        }
    };
    GENERATE_MAROWAK() {
        return {
            NAME: 'MAROWAK',
            TYPES: ['GROUND'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'CUBONE'
            },
            POKEDEX: {
                KANTO: '105'
            } 
        }
    };
    GENERATE_RHYHORN() {
        return {
            NAME: 'RHYHORN',
            TYPES: ['GROUND', 'ROCK'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'RHYDON'
            },
            POKEDEX: {
                KANTO: '111'
            } 
        }
    };
    GENERATE_RHYDON() {
        return {
            NAME: 'RHYDON',
            TYPES: ['GROUND', 'ROCK'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'RHYHORN'
            },
            POKEDEX: {
                KANTO: '112'
            } 
        }
    };  

    // ========= //
    // << ICE >> //
    // ========= //

    GENERATE_ARTICUNO() {
        return {
            NAME: 'ARTICUNO',
            TYPES: ['ICE', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '144'
            } 
        }
    };

    // ============ //
    // << NORMAL >> //
    // ============ //

    GENERATE_RATTATA() {
        return {
            NAME: 'RATTATA',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'RATICATE'
            },
            POKEDEX: {
                KANTO: '019'
            } 
        }
    };
    GENERATE_RATICATE() {
        return {
            NAME: 'RATICATE',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                2: 'RATTATA'
            },
            POKEDEX: {
                KANTO: '020'
            } 
        }
    };
    GENERATE_JIGGLYPUFF() {
        return {
            NAME: 'JIGGLYPUFF',
            TYPES: ['NORMAL', 'FAIRY'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'WIGGLYTUFF'
            },
            POKEDEX: {
                KANTO: '039'
            } 
        }
    };
    GENERATE_WIGGLYTUFF() {
        return {
            NAME: 'WIGGLYTUFF',
            TYPES: ['NORMAL', 'FAIRY'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'JIGGLYPUFF'
            },
            POKEDEX: {
                KANTO: '040'
            } 
        }
    };
    GENERATE_MEOWTH() {
        return {
            NAME: 'MEOWTH',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'PERSIAN'
            },
            POKEDEX: {
                KANTO: '052'
            } 
        }
    };
    GENERATE_PERSIAN() {
        return {
            NAME: 'PERSIAN',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'MEOWTH'
            },
            POKEDEX: {
                KANTO: '053'
            } 
        }
    };
    GENERATE_LICKITUNG() {
        return {
            NAME: 'LICKITUNG',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '108'
            } 
        }
    };
    GENERATE_CHANSEY() {
        return {
            NAME: 'CHANSEY',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '113'
            } 
        }
    };
    GENERATE_KANGASKHAN() {
        return {
            NAME: 'KANGASKHAN',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '115'
            } 
        }
    };
    GENERATE_TAUROS() {
        return {
            NAME: 'TAUROS',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '128'
            } 
        }
    };
    GENERATE_DITTO() {
        return {
            NAME: 'DITTO',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '132'
            } 
        }
    };
    GENERATE_EEVEE() {
        return {
            NAME: 'EEVEE',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: ['VAPOREON', 'JOLTEON', 'FLAREON']
            },
            POKEDEX: {
                KANTO: '133'
            } 
        }
    };
    GENERATE_PORYGON() {
        return {
            NAME: 'PORYGON',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '137'
            } 
        }
    };
    GENERATE_SNORLAX() {
        return {
            NAME: 'SNORLAX',
            TYPES: ['NORMAL'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '143'
            } 
        }
    };

    // ============ //
    // << POISON >> //
    // ============ //

    GENERATE_EKANS() {
        return {
            NAME: 'EKANS',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'ARBOK'
            },
            POKEDEX: {
                KANTO: '023'
            } 
        }
    };
    GENERATE_ARBOK() {
        return {
            NAME: 'ARBOK',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'EKANS'
            },
            POKEDEX: {
                KANTO: '024'
            } 
        }
    };
    GENERATE_NIDORAN_G() {
        return {
            NAME: 'NIDORAN_G',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'NIDORINA',
                3: 'NIDOQUEEN'
            },
            POKEDEX: {
                KANTO: '029'
            } 
        }
    };
    GENERATE_NIDORINA() {
        return {
            NAME: 'NIDORINA',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'NIDORAN_G',
                3: 'NIDOQUEEN'
            },
            POKEDEX: {
                KANTO: '030'
            } 
        }
    };
    GENERATE_NIDOQUEEN() {
        return {
            NAME: 'NIDOQUEEN',
            TYPES: ['POISON', 'GROUND'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'NIDORAN_G',
                2: 'NIDORINA'
            },
            POKEDEX: {
                KANTO: '031'
            } 
        }
    };
    GENERATE_NIDORAN_B() {
        return {
            NAME: 'NIDORAN_B',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'NIDORINO',
                3: 'NIDOKING'
            },
            POKEDEX: {
                KANTO: '032'
            } 
        }
    };
    GENERATE_NIDORINO() {
        return {
            NAME: 'NIDORINO',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'NIDORAN_B',
                3: 'NIDOKING'
            },
            POKEDEX: {
                KANTO: '033'
            } 
        }
    };
    GENERATE_NIDOKING() {
        return {
            NAME: 'NIDOKING',
            TYPES: ['POISON', 'GROUND'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'NIDORAN_G',
                2: 'NIDORINO'
            },
            POKEDEX: {
                KANTO: '034'
            } 
        }
    };
    GENERATE_ZUBAT() {
        return {
            NAME: 'ZUBAT',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'GOLBAT'
            },
            POKEDEX: {
                KANTO: '041'
            } 
        }
    };
    GENERATE_GOLBAT() {
        return {
            NAME: 'GOLBAT',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'ZUBAT'
            },
            POKEDEX: {
                KANTO: '042'
            } 
        }
    };
    GENERATE_GRIMER() {
        return {
            NAME: 'GRIMER',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'MUK'
            },
            POKEDEX: {
                KANTO: '088'
            } 
        }
    };
    GENERATE_MUK() {
        return {
            NAME: 'MUK',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'GRIMER'
            },
            POKEDEX: {
                KANTO: '089'
            } 
        }
    };
    GENERATE_KOFFING() {
        return {
            NAME: 'KOFFING',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'WEEZING'
            },
            POKEDEX: {
                KANTO: '109'
            } 
        }
    };
    GENERATE_WEEZING() {
        return {
            NAME: 'WEEZING',
            TYPES: ['POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'KOFFING'
            },
            POKEDEX: {
                KANTO: '110'
            } 
        }
    };

    // ============= //
    // << PSYCHIC >> //
    // ============= //

    GENERATE_ABRA() {
        return {
            NAME: 'ABRA',
            TYPES: ['PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'KADABRA',
                3: 'ALAKAZAM'
            },
            POKEDEX: {
                KANTO: '063'
            } 
        }
    };
    GENERATE_KADABRA() {
        return {
            NAME: 'KADABRA',
            TYPES: ['PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'ABRA',
                3: 'ALAKAZAM'
            },
            POKEDEX: {
                KANTO: '064'
            } 
        }
    };
    GENERATE_ALAKAZAM() {
        return {
            NAME: 'ALAKAZAM',
            TYPES: ['PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'ABRA',
                2: 'KADABRA'
            },
            POKEDEX: {
                KANTO: '065'
            } 
        }
    };
    GENERATE_DROWZEE() {
        return {
            NAME: 'DROWZEE',
            TYPES: ['PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'HYPNO'
            },
            POKEDEX: {
                KANTO: '096'
            } 
        }
    };
    GENERATE_HYPNO() {
        return {
            NAME: 'HYPNO',
            TYPES: ['PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'DROWZEE'
            },
            POKEDEX: {
                KANTO: '097'
            } 
        }
    };
    GENERATE_MR_MIME() {
        return {
            NAME: 'MR_MIME',
            TYPES: ['PSYCHIC', 'FAIRY'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '122'
            } 
        }
    };
    GENERATE_JYNX() {
        return {
            NAME: 'JYNX',
            TYPES: ['PSYCHIC', 'ICE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '124'
            } 
        }
    };
    GENERATE_MEWTWO() {
        return {
            NAME: 'MEWTWO',
            TYPES: ['PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '150'
            } 
        }
    };
    GENERATE_MEW() {
        return {
            NAME: 'MEW',
            TYPES: ['PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '151'
            } 
        }
    };

    // ========== //
    // << ROCK >> //
    // ========== //

    GENERATE_GEODUDE() {
        return {
            NAME: 'GEODUDE',
            TYPES: ['ROCK', 'GROUND'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'GRAVELER',
                3: 'GOLEM'
            },
            POKEDEX: {
                KANTO: '074'
            } 
        }
    };
    GENERATE_GRAVELER() {
        return {
            NAME: 'GRAVELER',
            TYPES: ['ROCK', 'GROUND'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'GEODUDE',
                3: 'GOLEM'
            },
            POKEDEX: {
                KANTO: '075'
            } 
        }
    };
    GENERATE_GOLEM() {
        return {
            NAME: 'GOLEM',
            TYPES: ['ROCK', 'GROUND'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'GEODUDE',
                2: 'GRAVELER'
            },
            POKEDEX: {
                KANTO: '076'
            } 
        }
    };
    GENERATE_ONIX() {
        return {
            NAME: 'ONIX',
            TYPES: ['ROCK', 'GROUND'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '095'
            } 
        }
    };
    GENERATE_KABUTO() {
        return {
            NAME: 'KABUTO',
            TYPES: ['WATER', 'ROCK'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'KABUTOPS'
            },
            POKEDEX: {
                KANTO: '140'
            } 
        }
    };
    GENERATE_KABUTOPS() {
        return {
            NAME: 'KABUTOPS',
            TYPES: ['WATER', 'ROCK'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'KABUTO'
            },
            POKEDEX: {
                KANTO: '141'
            } 
        }
    }; 
    GENERATE_AERODACTYL() {
        return {
            NAME: 'AERODACTYL',
            TYPES: ['ROCK', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '142'
            } 
        }
    };

    // =========== //
    // << WATER >> //
    // =========== //

    GENERATE_SQUIRTLE() {
        return {
            NAME: 'SQUIRTLE',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'WARTORTLE',
                3: 'BLASTOISE'
            },
            POKEDEX: {
                KANTO: '007'
            } 
        }
    };
    GENERATE_WARTORTLE() {
        return {
            NAME: 'WARTORTLE',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'SQUIRTLE',
                3: 'BLASTOISE'
            },
            POKEDEX: {
                KANTO: '008'
            } 
        }
    };
    GENERATE_BLASTOISE() {
        return {
            NAME: 'BLASTOISE',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'SQUIRTLE',
                2: 'WARTORTLE'
            },
            POKEDEX: {
                KANTO: '009'
            } 
        }
    };
    GENERATE_PSYDUCK() {
        return {
            NAME: 'PSYDUCK',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'GOLDUCK'
            },
            POKEDEX: {
                KANTO: '054'
            } 
        }
    };
    GENERATE_GOLDUCK() {
        return {
            NAME: 'GOLDUCK',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'PSYDUCK'
            },
            POKEDEX: {
                KANTO: '055'
            } 
        }
    };
    GENERATE_POLIWAG() {
        return {
            NAME: 'POLIWAG',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 3,
                2: 'POLIWHIRL',
                3: 'POLIWRATH'
            },
            POKEDEX: {
                KANTO: '060'
            } 
        }
    };
    GENERATE_POLIWHIRL() {
        return {
            NAME: 'POLIWHIRL',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 3,
                1: 'POLIWAG',
                3: 'POLIWRATH'
            },
            POKEDEX: {
                KANTO: '061'
            } 
        }
    };
    GENERATE_POLIWRATH() {
        return {
            NAME: 'POLIWRATH',
            TYPES: ['WATER', 'FIGHTING'],
            EVOLUTIONS: {
                LEVEL: 3,
                TOTAL: 3,
                1: 'POLIWAG',
                2: 'POLIWHIRL'
            },
            POKEDEX: {
                KANTO: '062'
            } 
        }
    };
    GENERATE_TENTACOOL() {
        return {
            NAME: 'TENTACOOL',
            TYPES: ['WATER', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'TENTACRUEL'
            },
            POKEDEX: {
                KANTO: '072'
            } 
        }
    };
    GENERATE_TENTACRUEL() {
        return {
            NAME: 'TENTACRUEL',
            TYPES: ['WATER', 'POISON'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'TENTACOOL'
            },
            POKEDEX: {
                KANTO: '073'
            } 
        }
    };
    GENERATE_SLOWPOKE() {
        return {
            NAME: 'SLOWPOKE',
            TYPES: ['WATER', 'PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'SLOWBRO'
            },
            POKEDEX: {
                KANTO: '079'
            } 
        }
    };
    GENERATE_SLOWBRO() {
        return {
            NAME: 'SLOWBRO',
            TYPES: ['WATER', 'PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'SLOWPOKE'
            },
            POKEDEX: {
                KANTO: '080'
            } 
        }
    };
    GENERATE_SEEL() {
        return {
            NAME: 'SEEL',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'DEWGONG'
            },
            POKEDEX: {
                KANTO: '086'
            } 
        }
    };
    GENERATE_DEWGONG() {
        return {
            NAME: 'DEWGONG',
            TYPES: ['WATER', 'ICE'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'SEEL'
            },
            POKEDEX: {
                KANTO: '087'
            } 
        }
    };
    GENERATE_SHELLDER() {
        return {
            NAME: 'SHELLDER',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'CLOYSTER'
            },
            POKEDEX: {
                KANTO: '090'
            } 
        }
    };
    GENERATE_CLOYSTER() {
        return {
            NAME: 'CLOYSTER',
            TYPES: ['WATER', 'ICE'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'SHELLDER'
            },
            POKEDEX: {
                KANTO: '091'
            } 
        }
    }; 
    GENERATE_KRABBY() {
        return {
            NAME: 'KRABBY',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'KINGLER'
            },
            POKEDEX: {
                KANTO: '098'
            } 
        }
    };
    GENERATE_KINGLER() {
        return {
            NAME: 'KINGLER',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'KRABBY'
            },
            POKEDEX: {
                KANTO: '099'
            } 
        }
    }; 
    GENERATE_HORSEA() {
        return {
            NAME: 'HORSEA',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'SEADRA'
            },
            POKEDEX: {
                KANTO: '116'
            } 
        }
    };
    GENERATE_SEADRA() {
        return {
            NAME: 'SEADRA',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'HORSEA'
            },
            POKEDEX: {
                KANTO: '117'
            } 
        }
    }; 
    GENERATE_GOLDEEN() {
        return {
            NAME: 'GOLDEEN',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'SEAKING'
            },
            POKEDEX: {
                KANTO: '118'
            } 
        }
    };
    GENERATE_SEAKING() {
        return {
            NAME: 'SEAKING',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'GOLDEEN'
            },
            POKEDEX: {
                KANTO: '119'
            }
        }
    }; 
    GENERATE_STARYU() {
        return {
            NAME: 'STARYU',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'STARMIE'
            },
            POKEDEX: {
                KANTO: '120'
            } 
        }
    };
    GENERATE_STARMIE() {
        return {
            NAME: 'STARMIE',
            TYPES: ['WATER', 'PSYCHIC'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'STARYU'
            },
            POKEDEX: {
                KANTO: '121'
            } 
        }
    }; 
    GENERATE_MAGIKARP() {
        return {
            NAME: 'MAGIKARP',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'GYARADOS'
            },
            POKEDEX: {
                KANTO: '129'
            } 
        }
    };
    GENERATE_GYARADOS() {
        return {
            NAME: 'GYARADOS',
            TYPES: ['WATER', 'FLYING'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'MAGIKARP'
            },
            POKEDEX: {
                KANTO: '130'
            } 
        }
    }; 
    GENERATE_LAPRAS() {
        return {
            NAME: 'LAPRAS',
            TYPES: ['WATER', 'ICE'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 1
            },
            POKEDEX: {
                KANTO: '131'
            } 
        }
    };
    GENERATE_VAPOREON() {
        return {
            NAME: 'VAPOREON',
            TYPES: ['WATER'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'EEVEE'
            },
            POKEDEX: {
                KANTO: '134'
            } 
        }
    };
    GENERATE_OMANYTE() {
        return {
            NAME: 'OMANYTE',
            TYPES: ['WATER', 'ROCK'],
            EVOLUTIONS: {
                LEVEL: 1,
                TOTAL: 2,
                2: 'OMASTAR'
            },
            POKEDEX: {
                KANTO: '138'
            } 
        }
    };
    GENERATE_OMASTAR() {
        return {
            NAME: 'OMASTAR',
            TYPES: ['WATER', 'ROCK'],
            EVOLUTIONS: {
                LEVEL: 2,
                TOTAL: 2,
                1: 'OMANYTE'
            },
            POKEDEX: {
                KANTO: '139'
            } 
        }
    }; 

    async EXIST() {await this.EXISTANCE_FILE(this.RENDERER_PATH, this.RENDERER_DATA);}
};