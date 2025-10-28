import Connector_Jellyfish from "../../../../CONSOLE/ARTERIES/Connector_Jellyfish.js";
import Create from "../../CREATE/Create.js";
import Draw_Alphabet from "../ALPHABET/Draw_Alphabet.js";

export default class PANEL_Countries {

    constructor() {

        // ============== //
        // ## WRAPPERS ## //
        // ============== //

        this.WRAPPER_TITLE = 'UNSET';
        this.WRAPPER_DISPLAY = 'UNSET';
        this.WRAPPER_COUNTRY = 'UNSET';

        // ============ //
        // ## BLOCKS ## //
        // ============ //

        this.BLOCK_ALPHABET = new Draw_Alphabet();
        this.BLOCK_CREATE = new  Create({});

        // ============ //
        // ## LABELS ## //
        // ============ //

        this.LABEL_SELECT = 'UNSET';
    };

    DRAW() {

        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_TITLE = new Connector_Jellyfish().INITIALISE_WRAPPER();
        this.WRAPPER_DISPLAY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        this.ACTIVATE_CHOOSE_LETTER();

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_TITLE.append(...[
            this.BLOCK_ALPHABET.DRAW(),
            this.BUTTON_LETTER,
            this.WRAPPER_DISPLAY
        ]);        
        return this.WRAPPER_TITLE;
    };
    PANEL_COUNTRY() {
        // ============== //
        // << WRAPPERS >> //
        // ============== //

        this.WRAPPER_COUNTRY = new Connector_Jellyfish().INITIALISE_WRAPPER();

        // =============== //
        // << LISTENERS >> //
        // =============== //

        // ================= //
        // << ATTACHMENTS >> //
        // ================= //

        this.WRAPPER_COUNTRY.append(...[
            this.LABEL_SELECT,
            this.SELECT_COUNTRY
        ]);        
        return this.WRAPPER_COUNTRY;
    };

    // =============== //
    // ## LISTENERS ## //
    // =============== //

    ACTIVATE_CHOOSE_LETTER() {
        this.BUTTON_LETTER.addEventListener('click', (event) => {
            let LETTER = this.BLOCK_ALPHABET.GET_LETTER();
            if (LETTER === 'A') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_A)}
            if (LETTER === 'B') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_B)}
            if (LETTER === 'C') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_C)}
            if (LETTER === 'D') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_D)}
            if (LETTER === 'E') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_E)}

            if (LETTER === 'F') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_F)}
            if (LETTER === 'G') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_G)}
            if (LETTER === 'H') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_H)}
            if (LETTER === 'I') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_I)}
            if (LETTER === 'J') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_J)}

            if (LETTER === 'K') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_K)}
            if (LETTER === 'L') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_L)}
            if (LETTER === 'M') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_M)}
            if (LETTER === 'N') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_N)}
            if (LETTER === 'O') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_O)}

            if (LETTER === 'P') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_P)}
            if (LETTER === 'Q') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_Q)}
            if (LETTER === 'R') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_R)}
            if (LETTER === 'S') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_S)}
            if (LETTER === 'T') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_T)}
        
            if (LETTER === 'U') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_U)}
            if (LETTER === 'V') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_V)}
            if (LETTER === 'W') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_W)}
            if (LETTER === 'X') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_X)}
            if (LETTER === 'Y') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_Y)}
            if (LETTER === 'Z') {this.BLOCK_CREATE.UPDATE_OPTIONS(this.SELECT_COUNTRY, this.OPTIONS_COUNTRIES_Z)}

            this.WRAPPER_DISPLAY.append(this.PANEL_COUNTRY())
        });
    };

    // ============ //
    // ## SET UP ## //
    // ============ //

    async INITIALISE() {

        await this.#BLOCKS();
        await this.#LABELS();
        await this.#BUTTONS();
        await this.#OPTIONS();
        await this.#SELECT();
    };

    // ============== //
    // ## ELEMENTS ## //
    // ============== //

    async #LABELS() {
        this.LABEL_SELECT = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'label',
            CREATE_CONFIG_PERSONALITY_ID: 'LABEL_Select-Country',
        }).INIT();

        this.LABEL_SELECT.innerHTML = 'SELECT A COUNTRY';
    };
    async #BUTTONS() {
        this.BUTTON_LETTER = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'button',
            CREATE_CONFIG_PERSONALITY_ID: 'BUTTON_Select-Letter',
        }).INIT();

        this.BUTTON_LETTER.innerHTML = 'CHOOSE';
    };
    async #SELECT() {
        this.SELECT_COUNTRY = await new Create({
            CREATE_CONFIG_ELEMENT_TAG: 'select',
            CREATE_CONFIG_PERSONALITY_ID: 'SELECT_Country',
            CREATE_CONFIG_ELEMENT_OPTIONS: ['Choose A Country']
        }).INIT();
    };
    async #BLOCKS() {
        await this.BLOCK_ALPHABET.INITIALISE();
    };
    async #OPTIONS() {

        this.OPTIONS_COUNTRIES_A = [
            'CHOOSE A COUNTRY',
            'AFGHANISTAN',
            'ALBANIA',
            'ALGERIA',
            'ANDORRA',
            'ANGOLA',
            'ANTIGUA AND BARBUDA',
            'ARGENTINA',
            'ARMENIA',
            'AUSTRALIA',
            'AUSTRIA',
            'AZERBAIJAN'
        ],
        this.OPTIONS_COUNTRIES_B = [
            'CHOOSE A COUNTRY',
            'BAHAMAS',
            'BAHRAIN',
            'BANGLADESH',
            'BARBADOS',
            'BELARUS',
            'BELGIUM',
            'BELIZE',
            'BENIN',
            'BHUTAN',
            'BOLIVIA',
            'BOSNIA AND HERZEGOVINA',
            'BOTSWANA',
            'BRAZIL',
            'BRUNEI',
            'BULGARIA',
            'BURKINA FASO',
            'BURUNDI'
        ];
        this.OPTIONS_COUNTRIES_C - [
            'CHOOSE A COUNTRY',
            'CABO VERDE',
            'CAMBODIA',
            'CAMEROON',
            'CANADA',
            'CENTRAL AFRICAN REPUBLIC',
            'CHAD',
            'CHILE',
            'CHINA',
            'COLOMBIA',
            'COMOROS',
            'CONGO',
            'COSTA RICA',
            'COTE DIVOIRE',
            'CROATIA',
            'CUBA',
            'CYPRUS',
            'CZECHIA'
        ];
        this.OPTIONS_COUNTRIES_D = [
            'CHOOSE A COUNTRY',
            'DEMOCRATIC REPUBLIC OF CONGO',
            'DENMARK',
            'DJIBOUTI',
            'DOMINICA',
            'DOMINICAN REPUBLIC'
        ]
        this.OPTIONS_COUNTRIES_E = [
            'CHOOSE A COUNTRY',
            'ECUADOR',
            'EGYPT',
            'EL SALVADOR',
            'ENGLAND',
            'EQUATORIAL GUINEA',
            'ERITREA',
            'ESTONIA',
            'ESWATINI',
            'ETHIOPIA'
        ];
        this.OPTIONS_COUNTRIES_F = [
            'CHOOSE A COUNTRY',
            'FIJI',
            'FINLAND',
            'FRANCE'
        ];
        this.OPTIONS_COUNTRIES_G = [
            'CHOOSE A COUNTRY',
            'GABON',
            'GAMBIA',
            'GEORGIA',
            'GERMANY',
            'GHANA',
            'GREECE',
            'GRENADA',
            'GUATEMALA',
            'GUINEA',
            'GUINEA-BISSAU',
            'GUYANA'
        ];
        this.OPTIONS_COUNTRIES_H = [
            'CHOOSE A COUNTRY',
            'HAITI',
            'HONDURAS',
            'HUNGARY'
        ];
        this.OPTIONS_COUNTRIES_I = [
            'CHOOSE A COUNTRY',
            'ICELAND',
            'INDIA',
            'INDONESIA',
            'IRAN',
            'IRAQ',
            'IRELAND',
            'ISRAEL',
            'ITALY'
        ];
        this.OPTIONS_COUNTRIES_J = [
            'CHOOSE A COUNTRY',
            'JAMAICA',
            'JAPAN',
            'JORDAN'
        ];
        this.OPTIONS_COUNTRIES_K = [
            'CHOOSE A COUNTRY',
            'KAZAKHSTAN',
            'KENYA',
            'KIRIBATI',
            'KUWAIT',
            'KYRGYZSTAN'
        ]
        this.OPTIONS_COUNTRIES_L = [
            'CHOOSE A COUNTRY',
            'LAOS',
            'LATVIA',
            'LEBANON',
            'LESOTHO',
            'LIBERIA',
            'LIBYA',
            'LIECHTENSTEIN',
            'LITHUANIA',
            'LUXEMBOURG'
        ];
        this.OPTIONS_COUNTRIES_M = [
            'CHOOSE A COUNTRY',
            'MADAGASCAR',
            'MALAWI',
            'MALAYSIA',
            'MALDIVES',
            'MALI',
            'MALTA',
            'MARSHALL ISLANDS',
            'MAURITAINIA',
            'MAURITIUS',
            'MEXICO',
            'MICRONESIA',
            'MOLDOVA',
            'MONACO',
            'MONGOLIA',
            'MONTENEGRO',
            'MOROCCO',
            'MOZAMBIQUE',
            'MYANMAR'
        ]
        this.OPTIONS_COUNTRIES_N = [
            'CHOOSE A COUNTRY',
            'NAMIBIA',
            'NAURU',
            'NEPAL',
            'NETHERLANDS',
            'NEW ZEALAND',
            'NICARAGUA',
            'NIGER',
            'NIGERIA',
            'NORTH KOREA',
            'NORTHERN IRELAND',
            'NORTH MACEDONIA',
            'NORWAY'
        ]
        this.OPTIONS_COUNTRIES_O = [
            'CHOOSE A COUNTRY',
            'OMAN'
        ]
        this.OPTIONS_COUNTRIES_P = [
            'CHOOSE A COUNTRY',
            'PAKISTAN',
            'PALAU',
            'PALESTINE',
            'PANAMA',
            'PAPUA NEW GUINEA',
            'PARAGUAY',
            'PERU',
            'PHILIPPINES',
            'POLAND',
            'PORTUGAL'
        ]
        this.OPTIONS_COUNTRIES_Q = [
            'CHOOSE A COUNTRY',
            'QATAR'
        ]
        this.OPTIONS_COUNTRIES_R = [
            'CHOOSE A COUNTRY',
            'ROMANIA',
            'RUSSIA',
            'RWANDA'
        ]
        this.OPTIONS_COUNTRIES_S = [
            'CHOOSE A COUNTRY',
            'SAINT KITTS AND NEVIS',
            'SAINT LUCIA',
            'SAINT VINCENT AND GRENADINES',
            'SAMOA',
            'SAN MARINO',
            'SAO TOME AND PRINCIPE',
            'SAUDI ARABIA',
            'SCOTLAND',
            'SENEGAL',
            'SERBIA',
            'SEYCHELLES',
            'SIERRA LEONE',
            'SINGAPORE',
            'SLOVAKIA',
            'SLOVENIA',
            'SOLOMON ISLANDS',
            'SOMALIA',
            'SOUTH AFRICA',
            'SOUTH KOREA',
            'SOUTH SUDAN',
            'SPAIN',
            'SRI LANKA',
            'SUDAN',
            'SURINAME',
            'SWEDEN',
            'SWITZERLAND',
            'SYRIA'
        ]
        this.OPTIONS_COUNTRIES_T = [
            'CHOOSE A COUNTRY',
            'TAJIKISTAN',
            'TANZANIA',
            'THAILAND',
            'TIMOR-LESTE',
            'TOGO',
            'TONGA',
            'TRINIDAD AND TOBEGO',
            'TUNISIA',
            'TURKEY',
            'TURKMENISTAN',
            'TUVALU'
        ]
        this.OPTIONS_COUNTRIES_U = [
            'CHOOSE A COUNTRY',
            'UGANDA',
            'UKRAINE',
            'UAE',
            'USA',
            'URUGUAY',
            'UZBEKISTAN'
        ]
        this.OPTIONS_COUNTRIES_V = [
            'CHOOSE A COUNTRY',
            'VANUATU',
            'VENEZUELA',
            'VIETNAM'
        ]
        this.OPTIONS_COUNTRIES_W = [
            'CHOOSE A COUNTRY',
            'WALES'
        ]
        this.OPTIONS_COUNTRIES_Y = [
            'CHOOSE A COUNTRY',
            'YEMEN'
        ]
        this.OPTIONS_COUNTRIES_Z = [
            'CHOOSE A COUNTRY',
            'ZAMBIA',
            'ZIMBABWE'
        ]
    };

    GET_COUNTRY() {
        return this.BLOCK_CREATE.READ_OPTION_TEXT(this.SELECT_COUNTRY)
    }
};