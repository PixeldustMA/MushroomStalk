import { spinNumber } from '../KNOTS/Global.js';
import { createNewPath, AccessFolder } from '../../src/RenderFunctions.js'

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Access Randomisers        //
// ================================= //

// Randomise Images from folder
const randomImage = async () => {
		const image = await getResult()
		let Index = spinNumber(image.length);
		return image[Index]
	    };
const folderPath = async () => {
	const path = await createNewPath('../ASSETS/IMAGES/PIXIES')
		.then(
			(result) => {
				return result
			}
		).then(
			(result) => {
				const Folder = AccessFolder(result);
				return Folder
		})
	return path
}
const getResult = async () => {
	const folder = await folderPath()
		.then((result) => {
			return result
		})
	return folder
}

export { randomImage };