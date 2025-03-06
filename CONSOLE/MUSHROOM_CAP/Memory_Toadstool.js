export default class M_Toadstool {
    constructor(){}

    // ============= //
    // ## WELCOME ## //
    // ============= //

    #BUTTON_ANALYSE(){
        return {
            "REQUEST": "WORD",
            "MOOD": "NEUTRAL",
            "SPEECH": "VERB",
            "CATEGORY": "SENSES",
            "GROUP": "EYES",
            "CHOICE": "ANALYSE"
        }
    };

    #BUTTON_NEW(){
        return {
            "REQUEST": "WORD",
            "MOOD": "NEUTRAL",
            "SPEECH": "ADJEX",
            "CATEGORY": "CHARACTER",
            "GROUP": "AGE",
            "CHOICE": "NEW"
        }
    };
    #INPUT_NAME(){
        return {
            "REQUEST": "WORD",
            "MOOD": "NEUTRAL",
            "SPEECH": "NOUN",
            "CATEGORY": "USER",
            "GROUP": "PROFILE",
            "CHOICE": "USERNAME"
        }
    };
    #INPUT_PASSWORD(){
        return {
            "REQUEST": "WORD",
            "MOOD": "NEUTRAL",
            "CATEGORY": "USER",
            "SPEECH": "NOUN",
            "GROUP": "PROFILE",
            "CHOICE": "PASSWORD"
        }
    }
}