import { Stalk } from "../../CONSOLE/CONTROLLERS/StalkController.js";


// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Control Themes             //
// ================================= //

const MushroomStalk = new Stalk();

async function createTheme() {
    MushroomStalk.path = await MushroomStalk.machete('THEMEFOLDER');
	return await MushroomStalk.AccessFolder();
}

export { createTheme }