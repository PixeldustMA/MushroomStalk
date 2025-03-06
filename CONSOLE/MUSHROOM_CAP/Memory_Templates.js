export default class M_Templates {

    constructor() {};

    // ========= //
    // ## RUN ## //
    // ========= //

    RUN_MEMORY_TEMPLATES() {
        return {
            MYCOLOGY: this.#LOAD_TEMPLATES()
        };
    }
    #LOAD_TEMPLATES() {
        return {
            MEMORY_SESSION: this.#EMPTY(),
            PANTRY_FILES: this.#FILES(),
            PANTRY_TREE:  this.#TREE(),
            ROUTES_USER: this.#EMPTY(),
            USERS_RESIDENT: this.#RESIDENT()
        };
    }

    // ============= //
    // ## GENERAL ## //
    // ============= //

    #EMPTY(){return {}};

    // ============== //
    // ## MYCOLOGY ## //
    // ============== //

    // ============== //
    // << CUPBOARD >> //
    // ============== //

    #FILES(){
        return {
            "CUPBOARD": {
                "FOLDERS": [
                    "USERS",
                    "ROUTES",
                    "MEMORY",
                    "TEXT"
                ],
                "USERS": [
                    "FROGS"
                ],
                "TEXT": [
                    "WELCOME"
                ],
                "FILES": {
                    "Frogs.json": "USERS",
                    "ResidentFrog.json": "USERS",
                    "User.json": "ROUTES"
                },
                "TEXT_FILES": {
                    "WELCOME": {
                        "BUTTON": [
                            "ANALYSE",
                            "NEW"
                        ],
                        "INPUT": [
                            "NAME",
                            "PASSWORD"
                        ]
                    }
                }
            },
            "USERNAME": {
                "FOLDERS": [
                    "USERNAME",
                    "ARCHIVE",
                    "EXPLORER",
                    "FONTS",
                    "LANGUAGE",
                    "ROUTES",
                    "SETTINGS"
                ]
            },
            "ARCHIVE": {
                "FOLDERS": [
                    "MEMORY",
                    "SQLITE"
                ],
                "FILES": {
                    "Alphabet.json": "MEMORY",
                    "ActiveCharacter": "MEMORY",
                    "NewCharacter": "MEMORY"
                }
            },
            "EXPLORER": {
                "FOLDERS": [
                    "DATABASE",
                    "MEMORY"
                ],
                "DATABASE": [
                    "KESSIKAYA"
                ],
                "FILES": {
                    "AllPlanets.json": "MEMORY",
                    "PlanetPaths.json": "MEMORY",
                    "PlanetKeys.json": "MEMORY"
                }
            },
            "FONTS": {},
            "LANGUAGE": {
                "FOLDERS": [
                    "GRAMMAR",
                    "ENGLISH",
                    "MEMORY",
                    "OPTIONS"
                ],
                "FILES": {
                    "Fragment.json": "MEMORY",
                    "Phrases.json": "MEMORY",
                    "MOOD.json": "OPTIONS",
                    "TENSE.json": "OPTIONS"
                }
            },
            "ROUTES": {
                "FILES": {
                    "Explorer.json": "",
                    "Fonts.json": "",
                    "Languages.json": ""
                }
            },
            "SETTINGS": {
                "FILES": {
                    "Mushroom_Settings.json": ""
                }
            }
        }
    }
    #TREE(){
        return {
            "CULTURE": {
                "SPORT": {
                    "CONSOLE": [
                        "All_Sport",
                        "All_Planets",
                        "All_Types"
                    ]
                },
                "MUSIC": {
                    "CONSOLE": [
                        "All_Music",
                        "All_Planets",
                        "All_Types"
                    ]
                },
                "MISC": {
                    "CONSOLE": [
                        "All_Misc",
                        "All_Planets"
                    ]
                }
            }
        }
    };
    #RESIDENT(){
        return {
            "MESSAGEPATH": "BUNDLE",
            "BUNDLEPATH": "BUNDLE",
            "NEWSPATH": "NEWS",
            "SQUIRRELPATH": "SQUIRRELS",
            "SPIRITPATH": "SPIRITS",
            "DOODLEPATH": "DOODLES",
            "NAME": "TESTING",
            "PASSWORD": "debugging",
            "LOGGED": false
        }
    }
}