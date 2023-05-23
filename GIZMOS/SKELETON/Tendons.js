//-- ATTRIBUTE FUNCTIONS --//

function addClasses(ElementName, ClassArray) {
	ClassArray.forEach(styleClass => {
		ElementName.classList.add(styleClass);
	});
}

export { addClasses }