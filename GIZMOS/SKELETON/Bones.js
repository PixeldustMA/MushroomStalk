import { addClasses } from "../KNOTS/Global.js";
//-- ELEMENT FUNCTIONS --//

function PageTitle(title, id, styles) {
	
	let PageTitle = document.createElement('h1');
	PageTitle.innerHTML = title;
	PageTitle.id = id;
	addClasses(PageTitle, styles);
	return PageTitle;
	
}
function SetImage(sourcePath, id, styles) {
	
	let Image = document.createElement('img');
	Image.src = sourcePath;
	Image.id = id;
	if(styles != "Empty" && styles != "empty") {
		addClasses(Image, styles);
	}
	return Image;
}
function createButton(id, path, styles, text) {
	
	let Button = document.createElement('button');
	let clickpath = path;
	Button.id = id;
	Button.innerHTML = text;
	addClasses(Button, styles);
	if (clickpath != "empty" ) {
		console.log(path)
		clickpath = `location.href='${path}'`
		Button.setAttribute('onclick', clickpath);
	}
	return Button; 
}
function text(baseText, id, styles) {
	let basicParagraph = document.createElement('p');
	basicParagraph.innerHTML = baseText;
	basicParagraph.id = id;
	basicParagraph.style.color = 'white';
	if (styles != 'empty') {
		addClasses(basicParagraph, styles);
	}

	return basicParagraph;
	
}

export { 
	PageTitle, SetImage, 
	createButton, text
	};
