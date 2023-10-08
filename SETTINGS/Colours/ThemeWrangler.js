import { route } from "../../GEARS/GNOME/Routes.js";
import { AccessFolder } from "../../GEARS/PLATYPUS/RenderFunctions.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Control Themes             //
// ================================= //

async function createTheme() {
	let themePath = await route("themeFolder")
		.then((pathResult) => {return pathResult});
	let themeList = await AccessFolder(themePath)
		.then((themeResult) => {return themeResult})
	return themeList;
}

export { createTheme }