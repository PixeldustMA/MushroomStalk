import { Stalk } from "./CONSOLE/CONTROLLERS/StalkController.js";

class reset extends Stalk {

    constructor() {super()};

    CLEAN() {
        this.#RUNRESET("ACTIVECHARACTER", this.#ACTIVECHARACTER());
        this.#RUNRESET("ALPHABET", this.#ALPHABET());
    };

    #RUNRESET(tag, freshData) {
        this.path = this.resetPaths(tag);
        this.#REMOVEFILE();
        this.data = freshData;
        this.Save();
    }
    #ACTIVECHARACTER() {
        return {"CODES": {
                "MUSHROOM": "XXXX0000XXXX",
                "PERSONAL": "PCX0"
            },
            "FIRSTNAME": "XXXX",
            "LASTNAME": "XXXXX"
        };
    };
    #ALPHABET() {
            return {
            "A": "0",
            "B": "0",
            "C": "0",
            "D": "0",
            "E": "0",
            "F": "0",
            "G": "0",
            "H": "0",
            "I": "0",
            "J": "0",
            "K": "0",
            "L": "0",
            "M": "0",
            "N": "0",
            "O": "0",
            "P": "0",
            "Q": "0",
            "R": "0",
            "S": "0",
            "T": "0",
            "U": "0",
            "V": "0",
            "W": "0",
            "X": "0",
            "Y": "0",
            "Z": "0"
        }
    }
    async #REMOVEFILE() {
        return await this.removeFile();
    }
}

export {reset};