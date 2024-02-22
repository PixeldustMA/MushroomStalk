import { jellyRoute } from "../CONSOLE/JellyfishRoutes.js";
import {jelly } from "../SETTINGS/Jellyfish.js";

const trails = new jellyRoute();
 
class Memory {

    constructor() {
        this.currentCells = [];
        this.JELLY = new jelly();
    }

    /**
     * TEMPORARILY HOLD ALL ACTIVE CELLS
     */
    async holdCells() {

        const trackerContainer = document.querySelector('jellyfish-tracker')
                                .shadowRoot
                                .getElementById('ColumnnContainer')
                                .querySelectorAll('jellyfish-crumbbar');

        for (const bar of trackerContainer) {
            let cells = bar.shadowRoot
                        .querySelectorAll('.cell');
            for (const cell of cells) {
                if (cell.classList.contains('Selected')) {
                    this.currentCells.push(cell.id);
                }
            }
        }

        this.JELLY.path = await trails.route("HOLDCELLS");
        this.JELLY.data = this.currentCells;
        await this.JELLY.Save();
    }
    
}

export { Memory }