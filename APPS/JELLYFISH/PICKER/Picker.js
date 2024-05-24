import { Jellyfish_Controller } from "../../../CONSOLE/CONTROLLERS/JellyfishController.js";

class Picker extends Jellyfish_Controller {

    constructor() {
        super();
        this.filePath = ""
    };

    async CHOOSE_FOLDER(display) {
        const path = this.FOLDER_SELECT().then((result) => {
            display.innerHTML = result;
            return result;});
        return path;
    };
    async CHOOSE_FILE(element) {
        element.type = 'file'
        element.click();
        element.onchange = event => {
            let files =  Array.from(element.files);
            this.SET_STATES(files).then((RESULT) => {return RESULT});
        };
        return element;
    }
    async SET_STATES(file) {
        let currentState = file;
        currentState.localPath = file[0].path;
        this.filePath = currentState.localPath
        console.log(this.filePath)
        return currentState.localPath;

        // let currentState = file;
        // currentState.localPath = file[0].path;
        // await MEMORY.loadLostData(currentState.localPath);
        // window.location.href = Route_Start;
    }
}

export {Picker};