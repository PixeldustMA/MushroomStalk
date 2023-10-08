import { ReadFile, WelcomeSave } from "../../../../GEARS/PLATYPUS/RenderFunctions.js";
import { pathCreation } from "../Utility/Radar.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//           DRAW THINGS             //
// ================================= //

async function statePath() {
	const stateObjectPath = await pathCreation('Button', 'State')
		.then((pathResult) => {return pathResult});
	return stateObjectPath;
}
async function readState() {
	let statePathString = await statePath()
		.then((result) => {return result;})
	let stateObject = await ReadFile(statePathString)
		.then((stateResult) => {return stateResult});
	return stateObject;
}
async function saveState(newState) {
	let statePathString = await statePath()
		.then((result) => {return result;})
	let stateObject = WelcomeSave(statePathString, newState)
		.then((stateResult) => {
			console.log('State Saved...')
			return stateResult;
		})
	return stateObject;
}

export { readState, saveState };