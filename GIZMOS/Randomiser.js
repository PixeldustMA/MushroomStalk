import { fs, spinNumber } from '../GIZMOS/KNOTS/Global.js';

const IMAGE_BUCKET = './ASSETS/IMAGES/PIXIES/';

function randomImage() {

	let RandomImage = fs.readdirSync(IMAGE_BUCKET);
	let Index = spinNumber(RandomImage.length);
	return RandomImage[Index];
}

export { randomImage };