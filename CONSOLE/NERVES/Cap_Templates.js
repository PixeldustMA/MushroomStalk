// ================================================ //
// ================================================ //
// ==                                            == //
// ##           THE MUSHROOM STALK               ## //
// ================================================ //
// ==                MEMORY                      == //
// ##                TEMPLATES                   ## //
// << ------------------------------------------ >> //
// ==       Generate the Session Templates       == //
// ==                                            == //
// ================================================ //
// ================================================ //

export default class Cap_Templates {

    /**
     * ## MEMORY CONSTRUCTOR -- TEMPLATES
     */
    constructor() {};

    // ========= //
    // ## RUN ## //
    // ========= //

    RUN_MEMORY_TEMPLATES() {
        return {
            MYCOLOGY: this.#LOAD_TEMPLATES()
        };
    };
    #LOAD_TEMPLATES() {
        return {
            CUPBOARD: {
                MEMORY_SESSION: this.#EMPTY(),
                PANTRY_FILES: this.#FILES(),
                PANTRY_TREE:  this.#TREE(),
                ROUTES_USER: this.#EMPTY(),
                USERS_RESIDENT: this.#RESIDENT(),
                USERS_FROGS: this.#EMPTY(),
                SETTINGS: this.#MUSHROOM()
            },
            NOVA: {
                GAMES_POKEMON_PARTY: this.#POKEMON_PARTY(),
                GAMES_POKEMON_ELEMENTS: this.#POKEMON_ELEMENTS(),
                GAMES_POKEMON_DATABASE: this.#EMPTY(),
                GAMES_DISNEY_WEEK: this.#DISNEY_WEEK(),
                BOOKMARK: this.#BOOKMARK()
            },
            ROUTES:{
                ROUTE_EXPLORER: this.#EXPLORER(),
                ROUTE_FONT: this.#FONTS(),
                ROUTE_LANGUAGE: this.#LANGUAGE()
            },
            SETTINGS: {
                SETTINGS: this.#MUSHROOM_SETTINGS(),
            },
            LANGUAGE: {
                VOCAB_ADJECTIVES: this.#VOCAB_ADJECTIVES(),
                VOCAB_ADVERBS: this.#VOCAB_ADVERBS(),
                VOCAB_NOUNS: this.#VOCAB_NOUNS(),
                VOCAB_PRONOUNS: this.#VOCAB_PRONOUNS()
            },
            ARCHIVE: {}
        };
    };

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
    };
    #MUSHROOM(){
        return {
            USER_COUNT: 0
        }
    }
    // ========== //
    // << NOVA >> //
    // ========== //

    #POKEMON_PARTY(){
        return {
            "ONE": "UNSET",
            "TWO": "UNSET",
            "THREE": "UNSET",
            "FOUR": "UNSET",
            "FIVE": "UNSET",
            "SIX": "UNSET"
        }
    };
    #POKEMON_ELEMENTS(){
        return [
            "FIRE",
            "WATER",
            "GRASS",
            "BUG",
            "FLYING",
            "DRAGON",
            "AIR",
            "POISON",
            "NORMAL",
            "FIGHTING",
            "GROUND",
            "ROCK",
            "GHOST"
        ]
    };
    #BOOKMARK(){
        return {
            "NAME": "UNSET",
            "MEDIA_ID": "",
            "AUTHOR": "UNSET",
            "PAGE": 0,
            "CHAPTER": 0,
            "LAST_READ": ""
        };
    };
    #DISNEY_WEEK(){
        return {
            VALLEY: {
                PLAZA: {
                    MINING: false
                }
            }
        }
    };

    // ============ //
    // << ROUTES >> //
    // ============ //

    #EXPLORER(){
        return {
            "ROOT": {
            "EXPLORER": "£££-UserMemory/USERNAME/EXPLORER/DATABASE/",
            "ROUTES": "£££-UserMemory/USERNAME/ROUTES/Explorer.json"
        },
        "CONSOLE": {
            "KEYS": "£££-UserMemory/USERNAME/EXPLORER/MEMORY/PlanetKeys.json"
        },
        "PLANET": {
            "CONSOLE": {
                "ALL": "£££-UserMemory/USERNAME/EXPLORER/MEMORY/AllPlanets.json",
                "PATHS": "£££-UserMemory/USERNAME/EXPLORER/MEMORY/PlanetPaths.json",
                "KEYS": "£££-UserMemory/USERNAME/EXPLORER/MEMORY/PlanetKeys.json"
            },
            "SPACE": {},
            "SECTOR": {},
            "SYSTEM": {},
            "PLANETS": {},
            "FOLDERS": {
                "SPACE": "£££-UserMemory/USERNAME/EXPLORER/DATABASE/EXPLORER/SPACE/"
            }
        },
        "ACTIVITY HEADER": "//",
        "MISC": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "LIBRARY": {}
        },
        "SPORT": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "LIBRARY": {}
        },
        "MUSIC": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "LIBRARY": {}
        },
        "CULTURE HEADER": "//",
        "FOOD": {
            "FOLDERS": {
                "DESCRIPTION": "",
                "TYPE": "",
                "LIBRARY": ""
            },
            "DESCRIPTION": {},
            "CONSOLE": {
                "ALL": "",
                "PLANETS": "",
                "TYPES": ""
            },
            "PLANETS": {},
            "TYPES": {},
            "LIBRARY": {}
        }};
    };
    #FONTS() {
        return {
            "ROOT": "£££-UserMemory/USERNAME/FONTS/"
        }
    };
    #LANGUAGE(){
        return {
            "ENGLISH": {
                "FRAGMENT": "£££-UserMemory/USERNAME/LANGUAGE/ENGLISH/English_Fragments.json",
                "PHRASES": "£££-UserMemory/USERNAME/LANGUAGE/ENGLISH/English_Prefab.json"
            }
        }
    };

    // ============== //
    // << SETTINGS >> //
    // ============== //

    #MUSHROOM_SETTINGS(){
        return {
            "LANGUAGE": "ENGLISH"
        }
    };

    // ============== //
    // << LANGUAGE >> //
    // ============== ///

    #VOCAB_ADJECTIVES(){
        return {
            "OLD": {
                "RULE": "AX1",
                "MOOD": "NEUTRAL",
                "CAT": {
                    "MAIN": "TIME",
                    "SUB": "OLD"
                },
                "LOCKED": ["YOUNG"]
            },
            "ANCIENT": {
                "RULE": "AX1",
                "MOOD": "NEUTRAL",
                "CAT": {
                    "MAIN": "TIME",
                    "SUB": "OLD"
                },
                "LOCKED": ["YOUNG"]
            },
            "NEW": {
                "RULE": "AX1",
                "MOOD": "NEUTRAL",
                "CAT": {
                    "MAIN": "TIME",
                    "SUB": "YOUNG"
                },
                "LOCKED": ["OLD"]
            },
            "YOUNG": {
                "RULE": "AX1",
                "MOOD": "NEUTRAL",
                "CAT": {
                    "MAIN": "TIME",
                    "SUB": "YOUNG"
                },
                "LOCKED": ["OLD"]
            },
            "PRETTY": {
                "RULE": "AX1",
                "MOOD": "POSITIVE",
                "CAT": {
                    "MAIN": "APPEARANCE",
                    "SUB": "ATTRACTIVE"
                },
                "LOCKED": "UNATTRACTIVE"
            },
            "UGLY": {
                "RULE": "AX1",
                "MOOD": "BAD",
                "CAT": {
                    "MAIN": "APPEARANCE",
                    "SUB": "UNATTRACTIVE"
                },
                "LOCKED": "ATTRACTIVE"
            }
        }
    };
    #VOCAB_ADVERBS(){
        return {
            "YESTERDAY": {
                "TIME": "PAST",
                "RULE": "AV1",
                "MOOD": "NEUTRAL"
            },
            "TOMORROW": {
                "TIME": "FUTURE",
                "RULE": "AV1",
                "MOOD": "NEUTRAL"
            },
            "SLOWLY": {
                "RULE":"AV1",
                "CAT": "SPEED",
                "SUB": "SLOW",
                "LOCKED": "FAST",
                "MOOD": "NEUTRAL"
            },
            "QUICKLY": {
                "RULE": "AV1",
                "CAT": "SPEED",
                "SUB": "FAST",
                "LOCKED": "SLOW",
                "MOOD": "NEUTRAL"
            }
        }
    };
    #VOCAB_NOUNS(){
        return {
            "CAT": "N1",
            "KITTY": "N2",
            "FELINE": "N1",
            "DOG": "N1",
            "HOUND": "N1",
            "PUPPER": "N1",
            "PUZZLE": "N1",
            "BALL": "N1"
        }
    };
    #VOCAB_PRONOUNS(){
        return {
            "FS": {
                "NM": "I",
                "DT": "TO ME",
                "AC": "ME",
                "GN": "MY//MINE"
            },
            "FP": {
                "NM": "WE",
                "DT": "TO US",
                "AC": "US",
                "GN": "OUR//OURS"
            },
            "SS": {
                "NM": "YOU",
                "DT": "TO YOU",
                "AC": "YOU",
                "GN": "YOU//YOURS"
            },
            "SP": {
                "NM": "YOU",
                "DT": "TO YOU",
                "AC": "YOU",
                "GN": "YOU//YOURS" 
            },
            "TS": {
                "NM": "HE<>SHE<>IT",
                "DT": "TO HIM<>TO HER<>TO IT",
                "AC": "HIM<>HER<>IT",
                "GN": "HIS<>HERS<>ITS"
            },
            "TP": {
                "NM": "THEY",
                "DT": "TO THEM",
                "AC": "THEM",
                "GN": "THEIR<>THEIRS"
            }
        }
    };
    // #VOCAB_NOUNS(){
    //     return {
    //         "LOOK AT": {
    //             "STEM": "LOOK>>AT",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR1"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW1"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "OBSERVE": {
    //             "STEM": "OBSERVE",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR1"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW2"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "WATCH": {
    //             "STEM": "WATCH",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR3"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW1"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "STARE AT": {
    //             "STEM": "STARE>>AT",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR1"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW2"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "SEARCH FOR": {
    //             "STEM": "SEARCH>>FOR",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR3"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW1"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "LOOK FOR": {
    //             "STEM": "LOOK>>FOR",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR2"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW1"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "WALK TOWARDS": {
    //             "STEM": "WALK>>TOWARDS",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR2"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW1"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "MEANDER TOWARDS": {
    //             "STEM": "MEANDER>>TOWARDS",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR2"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW1"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "RUN AT": {
    //             "STEM": "RUN>>TOWARDS",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR2"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW3"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "RACE TOWARDS": {
    //             "STEM": "RACE>>TOWARDS",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR2"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW2"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "DRIVE": {
    //             "STEM": "RACE>>TOWARDS",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR2"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW3"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         },
    //         "RIDE": {
    //             "STEM": "RACE>>TOWARDS",
    //             "PRESENT": {
    //                 "GENERAL": "STEM", 
    //                 "TS": "PR2"
    //             },
    //             "PAST": {
    //                 "GENERAL": "RW3"
    //             },
    //             "FUTURE": {
    //                 "GENERAL": "F1"
    //             }
    //         }
    //     }
    // };
}