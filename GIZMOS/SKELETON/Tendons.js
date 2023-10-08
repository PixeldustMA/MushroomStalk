// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//          HTML Helpers             //
// ================================= //

//-- ATTRIBUTE FUNCTIONS --//

function addClasses(ElementName, ClassArray) {
	ClassArray.forEach(styleClass => {
		ElementName.classList.add(styleClass);
	});
}

function getCrumb(root) {

	const theCrumbList = []
	const shadow = document.querySelectorAll('goblin-panic')
	const searches = shadow[0].shadowRoot.querySelectorAll(`goblin-${root}`)
	console.log(searches)
		for (const {shadowRoot} of searches) {
			if (shadowRoot) {
				theCrumbList.push(shadowRoot);
			}
		
	}
	return theCrumbList;
}

export { addClasses, getCrumb }