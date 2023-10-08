function Minimise(className) {
	let elementArray = document.querySelectorAll(className);
	for (let Index = 0; Index < elementArray.length; Index++) {
		let elementID = elementArray[Index].getAttribute("id")
		let element = document.getElementById(elementID);
		if (element.style.display === "block") {
			element.style.display = "none"}
		else { element.style.display = "block"};
	}
}

function subCategoryStatusCheck(smallClass) {
	let subCategory = document.querySelectorAll(smallClass);
	for (let Index = 0; Index < subCategory.length; Index++) {
					
		let subCategoryId = subCategory[Index].getAttribute("id")
		let subElement = document.getElementById(subCategoryId);
		if (subElement.style.display === "block") {
			subElement.style.display = "none"}
}
}

function checkforFolds() {
	// ON CLICK --
	//  CHECK THROUGH CLASSES FOR FOLDS
	// USE FOUND FOLD TO IDENTIFY SUBS
	// CHECK THROUGH OTHER ELEMENTS TO FIND CHOSEN SUB
	// CLOSE OR OPEN THE SUBS

}

window.addEventListener('click', (e) => {
	let element = e.composedPath();
	let result = element[4];
	console.log(element[4]);
	let classes = result.classList;
	console.log(classes);

	for (let index = 0; index < classes.length; index++) {
		let bit = classes[index];
		console.log(bit)
		if (bit.includes('Fold')) {
			console.log("FOLD FOUND")
		}
	}
	

})

window.addEventListener('DOMContentLoaded', (e) => {
	let expandButton = document.getElementById('PanicStretchButton');
	expandButton.type = 'button';
	expandButton.onclick = expand;
	let contractButton = document.getElementById('PanicShrinkButton')
	contractButton.type = 'button';
	contractButton.onclick = contract;
});

function expand() {

	let tabtab = document.getElementById('TabTab');
	let tabRoot = tabtab.shadowRoot;
	let y = tabRoot.querySelectorAll('.FOLDME');
	y.forEach(element => {
		element.style.display = 'none';
		element.classList.add('OPENME')
	});
}

function contract() {
	let tabtab = document.getElementById('TabTab');
	let tabRoot = tabtab.shadowRoot;
	let y = tabRoot.querySelectorAll('.OPENME');
	y.forEach(element => {
		element.style.display = 'block';
		element.classList.add('FOLDME')
	});
}