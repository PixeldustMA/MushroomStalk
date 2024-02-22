import { Stalk } from "../../../CONSOLE/CONTROLLERS/StalkController.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Draw Validated Screen     //
// ================================= //

// == ROUTES AND INSTANCES == //
const MushroomStalk = new Stalk();
const Route_Start = await MushroomStalk.machete("START");

// == RUN SCRIPT == //
console.log("Script Attached")
setTimeout(() => {
	console.log("Timeout")
	window.location.href = Route_Start;
}, 3000);

