import { spin } from "../PLATYPUS/Randomiser.js";
import { Renderer } from "../PLATYPUS/Renderer.js";

class Language extends Renderer {

    constructor() {
        super();
        this.spinner = new spin();
        this.englishPath = "../../LANGUAGE/DICTIONARY_English.json"
        this.ENGLISH_TEXT = "";
    };
    async LOAD() {
        this.ENGLISH_TEXT = await this.READ_TEXT();
    };
    SCRIBE(tag) {
        let requested = this.ENGLISH_TEXT[tag[0]][tag[1]][tag[2]];
        let text = "";
        if (requested.length > 1) {
            let index = this.#RANDOMISE(requested);
            text = requested[index];
        }
        else {
            text = requested[0];
        };
        return text;
    }
    async READ_TEXT() {
        this.path = this.englishPath;
        this.path = await this.FETCH_PATH();
        return await this.READ();
    };
    READ_TRANSLATION() {
        // FETCH THE TRANSLATION FILE
    };
    TRANSLATE() {
        // IF THE REQUESTED TAG OCCURS IN THE TRANSLATION FILE, RETURN THAT
    }
    #RANDOMISE(textArray) {
        return this.spinner.NUMBER(0, textArray.length - 1);
    };

};

export {Language};