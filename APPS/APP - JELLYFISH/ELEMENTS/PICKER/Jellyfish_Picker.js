import Stalk from "../../../../CONSOLE/LUNGS/Stalk.js";

export default class Jellyfish_Picker extends Stalk{

    constructor(){super()};

    async CHOOSE_FOLDER(PARAMETER_ELEMENT_DISPLAY) {
        const PATH_REQUESTED = await this.FOLDER_SELECT();
        PARAMETER_ELEMENT_DISPLAY.innerHTML = PATH_REQUESTED;
        return PATH_REQUESTED;
    };
    async CHOOSE_FILE(PARAMETER_ELEMENT) {

        PARAMETER_ELEMENT.type = 'file'
        PARAMETER_ELEMENT.click();
        PARAMETER_ELEMENT.onchange = event => {
            let files =  Array.from(PARAMETER_ELEMENT.files);
            this.SET_STATES(files, 'none').then((RESULT) => {return RESULT});
        };
        return PARAMETER_ELEMENT;
    };
    async SET_STATES(file) {
        let currentState = file;
        currentState.localPath = file[0].path;
        this.filePath = currentState.localPath
        return currentState.localPath;
    };
}