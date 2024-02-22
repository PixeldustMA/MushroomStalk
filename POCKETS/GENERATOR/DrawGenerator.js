// GET A RANDOM NUMBER

import { spinNumber } from "../../APPS/RANDOM/Spinner.js";
import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";

const mushy = new Stalk();

mushy.path = "./POCKETS/GENERATOR/Shapes.json";
const shapes = await mushy.Read();
console.log(shapes)
const keyMush = Object.keys(shapes);

let randomNum = spinNumber(keyMush.length);

const label = document.getElementById('DISPLAY_LABEL');
const butt = document.getElementById('GENERATE_BUTTON');

console.log(keyMush.length)
butt.addEventListener('click', (event) => {
    label.innerHTML = shapes[randomNum];
})

// READ FROM A JSON FILE FOR THE GENERATOR

// GET ANYWHERE BETWEEN THREE AND SEVEN SHAPES

// DISPLAY LIST OF SHAPES