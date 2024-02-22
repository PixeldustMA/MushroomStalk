import { jelly } from "../../SETTINGS/Jellyfish.js";

const jellyfish = new jelly
async function Load() {
    console.log("Load Button Clicked");
    console.log("This button will load an existing crumb pattern save");

    jellyfish.path = await jellyfish.search('CRUMBMEMORY');
    const ids = await jellyfish.Read();
    let dayObject = ids[jellyfish.fetchDay().toUpperCase()];

    const table = document.querySelector('jellyfish-tracker').shadowRoot;
    const crumbBars = table.querySelectorAll('jellyfish-crumbbar');

    if (dayObject !== undefined) {
    dayObject.forEach(cell => {

        crumbBars.forEach(bar => {

            let currentSearch = bar.shadowRoot.querySelector(`#${cell}`);
            if (currentSearch !== null) {
                currentSearch.classList.add('Selected');
            }   
        })
    });
}
}

export { Load}