import { fs } from '../GIZMOS/KNOTS/Global.js';

const IMAGE_BUCKET = '../ASSETS/IMAGES/PIXIES/';



// == GENERATE RANDOM NUMBER == // 
function getRandomInt(max) {
	let randomNumber = Math.floor(Math.random() * (max));
	return randomNumber;
}


// randomise image choice

function randomImage() {

	let RandomImage = fs.readdirSync(IMAGE_BUCKET);
	console.log(RandomImage);
	let Index = getRandomInt(RandomImage.length);
	console.log(RandomImage[Index])
	return RandomImage[Index];
}

export { randomImage };