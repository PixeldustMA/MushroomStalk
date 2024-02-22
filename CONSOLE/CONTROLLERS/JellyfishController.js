import { LocalData } from "../PLATYPUS/LocalData.js";
import { Stalk } from "./StalkController.js";

let u = new LocalData()
class Jellyfish extends Stalk {

    constructor(
    ) {
        super();
        this.userPath = u.jellyfish;
    }

    /**
     * Create a whole new Jellyfish
     */
    async newPanic(fileName) {
        this.path = await this.machete("RESIDENT");
        const resident = await this.Read();
        this.#panicPath(fileName, resident);
        this.data = {
            "NEWSTYLE": "GOES HERE"
        }
        this.Save();
    }

    /**
     * Update a jellyfish that already exists
     */
    updatePanic(fileName, updatedInformation) {

        // UPDATE AN EXISTING PANIC FILE

        // GET FILE
        this.#panicPath(fileName)
        let existingData = this.Read();

        // MERGE EXISTING WITH OLD
        let updatedData = updatedInformation;

        this.data = updatedData;
        this.Save();
    }
    /**
     * MAKE AN AREA A DROPPABLE ZONE
     * @param {*} ev 
     */
    allowDrop(ev) {
        ev.preventDefault();
    }
    /**
     * ALLOW AN ITEM TO BE DRAGGED
     * @param {*} ev 
     */
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    /**
     * ALLOW AN ITEM TO BE DROPPED
     * CURRENTLY ONLY WORKS FOR BUTTONS
     * @param {*} ev 
     */
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        let Panel = document.querySelector('jellyfish-buttons');
        let PanelShadow = Panel.shadowRoot;
        ev.target.appendChild(PanelShadow.getElementById(data));
    }
    /**
     * CREATE A PATH TO A PANIC FILE
     * @param {*} fileName 
     * @param {*} resident 
     */
    #panicPath(fileName, resident) {
        this.path = resident.JELLYFISH + "/" + fileName;
        console.log(this.path);
    }

}

export {Jellyfish};