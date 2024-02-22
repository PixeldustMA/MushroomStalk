import { jelly } from "../../SETTINGS/Jellyfish.js";

const connector = new jelly();
const savePath = "./APPS/JELLYFISH/USERDATA/CRUMB PATTERNS/DaySaves.json";

async function Save() {

    console.log("Save Button Clicked");
    console.log("This button will Save a crumb pattern");

    connector.path = savePath;
    const existingData = await connector.Read();

    const trackerContainer = document.querySelector('jellyfish-tracker')
                    .shadowRoot
                    .getElementById('ColumnnContainer')
                    .querySelectorAll('jellyfish-crumbbar')


    let activeCells = [];
    for (const bar of trackerContainer) {
        let cells = bar.shadowRoot
                    .querySelectorAll('.cell');
        for (const cell of cells) {
            if (cell.classList.contains('Selected')) {
                activeCells.push(cell.id);
            }
        }
    }

    let keyy = connector.fetchDay().toUpperCase();
    existingData[keyy] = activeCells;
    connector.data = existingData

    await connector.Save();

}

export { Save}
