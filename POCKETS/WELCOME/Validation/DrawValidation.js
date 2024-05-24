import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";
import { create } from "../../../CONSOLE/PLATYPUS/Create.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Draw Validated Screen     //
// ================================= //

// == ROUTES AND INSTANCES == //
const MushroomStalk = new Stalk();
let frogGifPath = MushroomStalk.INIT_ROUTE({
	TAG: 'VALIDATING', 
	SECTION: 'ANIMATIONS', 
	SUBSECTION: 'FROGGY',
	ASSET: 1
}).then((RESULT) => {
	let imageValidation = new create({
		tag: 'img',
		source: RESULT
	}).init();
	document.body.appendChild(imageValidation);
});
// == RUN SCRIPT == //
setTimeout(() => {
	MushroomStalk.LOAD(['TITLE', 'MAINPAGES', 'WELCOME'])
}, 3000);

