import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";
import Create from "../../../APP - JELLYFISH/CREATE/Create.js";
import Draw_Alphabet from "../../../APP - JELLYFISH/ELEMENTS/ALPHABET/Draw_Alphabet.js";
import PANEL_Countries from "../../../APP - JELLYFISH/ELEMENTS/COUNTRIES/Panel_Countries.js";

export default class Panel_Search_Author extends Stalk{

    constructor() {

        super();

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_AUTHOR = 'UNSET';
        this.WRAPPER_SEARCH =  'UNSET';
        this.WRAPPER_ALPHABET =  'UNSET';
        this.WRAPPER_DECADE =  'UNSET';
        this.WRAPPER_COUNTRY =  'UNSET';
        this.WRAPPER_DISPLAY =  'UNSET';

        // ============= //
        // ## HEADERS ## //
        // ============= //

        this.HEADER_SEARCH = 'UNSET';

        // ============= //
        // ## BUTTONS ## //
        // ============= //

        this.BUTTON_SEARCH_ALPHABET = 'UNSET';
        this.BUTTON_SEARCH_COUNTRY = 'UNSET';
        this.BUTTON_SEARCH_DECADE = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_ALPHABET = new Draw_Alphabet();
        this.BLOCK_CREATE = new Create({});
        this.BLOCK_COUNTRY = new PANEL_Countries();

        // ========== //
        // ## LIST ## //
        // ========== //

        this.LIST_AUTHORS = [];

        // ============= //
        // ## OPTIONS ## //
        // ============= //

        this.OPTIONS_AUTHOR = [];

        // ============ //
        // ## SELECT ## //
        // ============ //

        this.SELECT_AUTHOR = 'UNSET';
    };

    // =========== //
    // ## BUILD ## //
    // =========== //

    DRAW() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_AUTHOR = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_AUTHOR.append(...[
            this.#PANEL_CHOOSE_SEARCH()
        ]);        
        return this.WRAPPER_AUTHOR;
    };

    // ============ //
    // ## PANELS ## //
    // ============ //

    #PANEL_CHOOSE_SEARCH() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_SEARCH = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_ALPHABET_SEARCH();
        this.#ACTIVATE_DECADE_SEARCH();
        this.#ACTIVATE_COUNTRY_SEARCH();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_SEARCH.append(...[
            this.HEADER_SEARCH,
            this.BUTTON_SEARCH_ALPHABET,
            this.BUTTON_SEARCH_COUNTRY,
            this.BUTTON_SEARCH_DECADE,
            this.WRAPPER_DISPLAY
        ]);        
        return this.WRAPPER_SEARCH;

    };
    #PANEL_ALPHABET() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_ALPHABET = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_ALPHABET_CHOICE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_ALPHABET.append(...[
            this.BLOCK_ALPHABET.DRAW(),
            this.BUTTON_SELECT_LETTER,
            this.SELECT_AUTHOR
        ]);        
        return this.WRAPPER_ALPHABET;
    };
    #PANEL_DECADE() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_DECADE = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_DECADES_CHOICE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_DECADE.append(...[
            this.SELECT_DECADE,
            this.SELECT_AUTHOR
        ]);        
        return this.WRAPPER_DECADE;
    };
    #PANEL_COUNTRY() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_COUNTRY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.#ACTIVATE_COUNTRY_CHOICE();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_COUNTRY.append(...[
            this.BLOCK_COUNTRY.DRAW(),
            this.SELECT_AUTHOR
        ]);        
        return this.WRAPPER_COUNTRY;
    }

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    #ACTIVATE_ALPHABET_SEARCH() {
        this.BUTTON_SEARCH_ALPHABET.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.#PANEL_ALPHABET());
        });
    };
    #ACTIVATE_ALPHABET_CHOICE() {
        this.BUTTON_SELECT_LETTER.addEventListener('click', (event) => {
            this.OPTIONS_AUTHOR = [];
            let ACTIVE_LETTER = this.BLOCK_ALPHABET.GET_LETTER();
            for (let INDEX_AUTHOR = 0; INDEX_AUTHOR < this.LIST_AUTHORS.length; INDEX_AUTHOR++) {
                const AUTHOR = this.LIST_AUTHORS[INDEX_AUTHOR];
                let LETTER_FIRST = AUTHOR[0];
                if (LETTER_FIRST === ACTIVE_LETTER) {this.OPTIONS_AUTHOR.push(AUTHOR)};
            };
            this.OPTIONS_AUTHOR.unshift('CHOOSE AN AUTHOR')
            this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_AUTHOR, this.OPTIONS_AUTHOR)
        });
    };
    #ACTIVATE_DECADE_SEARCH() {
        this.BUTTON_SEARCH_DECADE.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.#PANEL_DECADE());
        });
    };
    #ACTIVATE_DECADES_CHOICE() {
        this.SELECT_DECADE.addEventListener('change', (event) => {
            this.OPTIONS_AUTHOR = [];
            let ACTIVE_DECADE = this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_DECADE)
            for (let INDEX_AUTHOR = 0; INDEX_AUTHOR < this.LIST_AUTHORS.length; INDEX_AUTHOR++) {
                const AUTHOR = this.LIST_AUTHORS[INDEX_AUTHOR];
                console.log(AUTHOR)
                let BIRTH = this.SESSION.MEDIA.AUTHORS.DATA[AUTHOR].BIOGRAPHICAL.BIRTH_YEAR
                console.log(BIRTH);
                console.log(ACTIVE_DECADE)

                if (ACTIVE_DECADE === 'ANCIENT') {
                    if (parseInt(BIRTH[1]) <= 6) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else if (ACTIVE_DECADE === '1700S') {
                    if (parseInt(BIRTH[1]) === 7) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else if (ACTIVE_DECADE === '1800S') {
                    if (parseInt(BIRTH[1]) === 8) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else if (ACTIVE_DECADE === '1900') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 0) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else if (ACTIVE_DECADE === '1910') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 1) {this.OPTIONS_AUTHOR.push(AUTHOR)};

                }
                else if (ACTIVE_DECADE === '1920') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 2) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else if (ACTIVE_DECADE === '1930') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 3) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else if (ACTIVE_DECADE === '1940') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 4) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else if (ACTIVE_DECADE === '1950') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 5) {this.OPTIONS_AUTHOR.push(AUTHOR)};

                }
                else if (ACTIVE_DECADE === '1960') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 6) {this.OPTIONS_AUTHOR.push(AUTHOR)};

                }
                else if (ACTIVE_DECADE === '1970') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 7) {this.OPTIONS_AUTHOR.push(AUTHOR)};

                }
                else if (ACTIVE_DECADE === '1980') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 8) {this.OPTIONS_AUTHOR.push(AUTHOR)};

                }
                else if (ACTIVE_DECADE === '1990') {
                    if (parseInt(BIRTH[1]) === 9 && parseInt(BIRTH[2]) === 9) {this.OPTIONS_AUTHOR.push(AUTHOR)};

                }
                else if (ACTIVE_DECADE === '2000') {
                    if (parseInt(BIRTH[0]) === 2 && parseInt(BIRTH[2]) === 0) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else if (ACTIVE_DECADE === '2010') {
                    if (parseInt(BIRTH[0]) === 2 && parseInt(BIRTH[2]) === 1) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else if (ACTIVE_DECADE === '2020') {
                    if (parseInt(BIRTH[0]) === 2 && parseInt(BIRTH[2]) === 2) {this.OPTIONS_AUTHOR.push(AUTHOR)};
                }
                else {this.OPTIONS_AUTHOR.push('NO OPTIONS FOUND')}
            };
            this.OPTIONS_AUTHOR.unshift('CHOOSE AN AUTHOR');
            this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_AUTHOR, this.OPTIONS_AUTHOR)
        });
    };
    #ACTIVATE_COUNTRY_SEARCH() {
        this.BUTTON_SEARCH_COUNTRY.addEventListener('click', (event) => {
            this.WRAPPER_DISPLAY.append(this.#PANEL_COUNTRY());
        });
    };
    #ACTIVATE_COUNTRY_CHOICE() {
        this.BLOCK_COUNTRY.SELECT_COUNTRY.addEventListener('change', (event) => {
            this.OPTIONS_AUTHOR = [];
            let ACTIVE_COUNTRY = this.BLOCK_COUNTRY.GET_COUNTRY()
            for (let INDEX_AUTHOR = 0; INDEX_AUTHOR < this.LIST_AUTHORS.length; INDEX_AUTHOR++) {
                const AUTHOR = this.LIST_AUTHORS[INDEX_AUTHOR];
                let COUNTRY = this.SESSION.MEDIA.AUTHORS.DATA[AUTHOR].BIOGRAPHICAL.COUNTRY;
                if (COUNTRY === ACTIVE_COUNTRY) {
                    this.OPTIONS_AUTHOR.push(AUTHOR);
                };
            };
            this.OPTIONS_AUTHOR.unshift('CHOOSE AN AUTHOR')
            this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_AUTHOR, this.OPTIONS_AUTHOR)
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {

        await this.REQUEST_SESSION_MEDIA();

        this.LIST_AUTHORS = this.SESSION.MEDIA.AUTHORS.LIST
        await this.#OPTIONS();
        await this.#HEADERS();
        await this.#BUTTONS();
        await this.#SELECT();
        await this.#BLOCKS();
    };

    // ============= //
    // ## ELEMENT ## //
    // ============= //

    async #HEADERS() {
        this.HEADER_SEARCH = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'h2',
            CREATE_CONFIG_PERSONALITY_ID: 'HEADER_Search-Author-Title',
        }).INIT();

        this.HEADER_SEARCH.innerHTML = 'SEARCH AUTHORS'
    };
    async #BUTTONS() {
        this.BUTTON_SEARCH_ALPHABET = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search-Author-Alphabet',
        }).INIT();
        this.BUTTON_SEARCH_DECADE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search-Author-Decade',
        }).INIT();
        this.BUTTON_SEARCH_COUNTRY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search-Author-Country',
        }).INIT();
        this.BUTTON_SELECT_LETTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search-Author-LetterChoice',
        }).INIT();
        this.BUTTON_SELECT_COUNTRY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Search-Author-LetterChoice',
        }).INIT();

        this.BUTTON_SEARCH_ALPHABET.innerHTML = 'ALPHABET';
        this.BUTTON_SEARCH_DECADE.innerHTML = 'DECADE';
        this.BUTTON_SEARCH_COUNTRY.innerHTML = 'COUNTRY';
        this.BUTTON_SELECT_LETTER.innerHTML = 'LOAD AUTHORS';
        this.BUTTON_SELECT_COUNTRY.innerHTML = 'LOAD AUTHORS'
    };
    async #SELECT() {
        this.SELECT_AUTHOR = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Search-Author-Name',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_AUTHOR
        }).INIT();
        this.SELECT_DECADE = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Search-Author-Decades',
            CREATE_CONFIG_ELEMENT_OPTIONS: this.OPTIONS_DECADES
        }).INIT();
    };
    async #BLOCKS() {
        await this.BLOCK_ALPHABET.INITIALISE();
        await this.BLOCK_COUNTRY.INITIALISE();
    };
    async #OPTIONS() {
        this.OPTIONS_AUTHOR = ['X-X-X-X-X-X-X-X-X-X-X-X'];
        this.OPTIONS_DECADES = [
            'CHOOSE A DECADE',
            'ANCIENT',
            '1700S',
            '1800S',
            '1900',
            '1910',
            '1920',
            '1930',
            '1940',
            '1950',
            '1960',
            '1970',
            '1980',
            '1990',
            '2000',
            '2010',
            '2020'
        ]
    };

    GET_AUTHOR() {return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_AUTHOR)}
}