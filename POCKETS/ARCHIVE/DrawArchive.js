


let BackButton = document.getElementById('NewCharBackButton');
BackButton.addEventListener('click', (event) => {
	window.location.href = "./FrameworkArchive.html"
})
let d = document.getElementById('displayAndConfirm');

let f = document.getElementById('NewCharacterFirstName');
let formSubmit = document.getElementById('newCharacterFormSubmit');
formSubmit.addEventListener('click', (event) => {
	let submitObject = {
		"FirstName": f.value
	};
	console.log(submitObject);
	let first = document.createElement('p');
	d.appendChild(first);
	first.innerHTML = submitObject.FirstName
})

function GenerateMushroomCode(first, last, birthYear) {
	// READ FILE

	let codeString = ""
	codeString = codeString + first + obj[first].toString() + first + last;
	let planetString = GeneratePlanetCode();
	codeString = codeString + birthYear.toString() + planetString ;
	return codeString;
}

function GeneratePlanetCode(planet) {
	// READ FILE

	return obj[planet]
}