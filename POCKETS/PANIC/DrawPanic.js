
import { Jellyfish } from "../../APPS/JELLYFISH/CONSOLE/Jellyfish.js";
import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";

const stlk = new Stalk();

let y = new Jellyfish();
document.body.appendChild(await y.navigate());
document.body.appendChild(y.buttonPanel());
document.body.appendChild(y.tracker());
document.body.appendChild(y.sideMenu());

let path = "../../BUTTONS/Test.js";
let funcname = 'test';

// const butt = new Buttons(stlk, path, funcname);
// document.body.appendChild(await butt.build());
