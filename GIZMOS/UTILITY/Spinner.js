import { route } from '../../GEARS/GNOME/Routes.js';
import { createNewPath, AccessFolder } from '../../GEARS/PLATYPUS/RenderFunctions.js'

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//    Random Anything Generation       //
// ================================= //

function spinNumber(Barriers) {
	console.log("SPINNING NUMBER...")
	let randomNumber = Math.floor(Math.random() * (Barriers));
	console.log("RANDOM NUMBER IS: " + randomNumber)
	return randomNumber;
}

const randomImage = async () => {
		const image = await getResult()
		let Index = spinNumber(image.length);
		return image[Index]
	};
const getResult = async () => {
	const folder = await folderPath()
		.then((result) => {
			return result
		})
	return folder
	}
const folderPath = async () => {
	const imageRoute = route('welcomeImage')
		.then((path) => {
			const Folder = AccessFolder(path);
			return Folder
		});
	return imageRoute;
}

export { randomImage, spinNumber };