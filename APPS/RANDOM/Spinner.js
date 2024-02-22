import { Stalk } from '../../CONSOLE/CONTROLLERS/StalkController.js';

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//    Random Anything Generation       //
// ================================= //

const mushroomStalk = new Stalk();

/**
 * RETURN A RANDOM NUMBER BETWEEN 0 AND BARRIER
 * @param {int} Barriers 
 * @returns numberwithin range
 */
function spinNumber(Barriers) {
	console.log("SPINNING NUMBER...")
	let randomNumber = Math.floor(Math.random() * (Barriers));
	console.log("RANDOM NUMBER IS: " + randomNumber);
	return randomNumber;
}
/**
 * GET A RANDOM IMAGE FROM AN ARRAY
 * @returns IMAGE PATH
 */
const randomImage = async () => {
	const image = await folderPath()
	let Index = spinNumber(image.length);
	return image[Index]
};
// /**
//  * 
//  * @returns 
//  */
// const getResult = async () => {
// 	const folder = await folderPath()
// 	return folder
// }
/**
 * GET FOLDER CONTENTS
 * @returns FOLDER CONTENTS
 */
const folderPath = async () => {
	mushroomStalk.path = await mushroomStalk.machete("WELCOMEFOLDER");
	return await mushroomStalk.AccessFolder();
}

export { randomImage, spinNumber };