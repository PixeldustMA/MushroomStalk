
function fontStyles(button, fontObject, colour) {
	button.style.fontSize = fontObject.Size;
	button.style.fontFamily = fontObject.Family;
	button.style.color = colour;
	return button;
}
function borderStyles(button, borderObject, colour) {
	button.style.borderStyle = borderObject.Style;
	button.style.borderColor = colour;
	button.style.borderWidth = borderObject.Thickness;
	return button;
}
function backgroundStyle(button, colour) {
	button.style.backgroundColor = colour
	return button;
}

export { fontStyles,borderStyles, backgroundStyle}