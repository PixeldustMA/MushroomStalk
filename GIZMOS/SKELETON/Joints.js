import { CreateSettings } from "../../SETTINGS/USER/SaveSettings.js"

class creation {

	constructor(
		state,
		drawArray,
		parentObject,
		detailsObject,
	) 
	{
		this.state = state;
		this.drawArray = drawArray;
		this.parent = parentObject;
		this.detailsObject = detailsObject;
	}

	detectSub(currentObject) {
		if(currentObject.sub === true) {
			let x = currentObject.subParent;
			console.log(x);
			const y = document.getElementById(x);
			return y;
		}
		else 
		{
			return this.parent
		}
	}
	draw() {
		for (let i = 0; i < this.drawArray.length; i++) {
			let item;
			let keys;
			let currentObject;
			switch (this.drawArray[i]) {
				case "File":
					item = this.createFileChooser();
					let parentObject = this.detectSub(currentObject);
					parentObject.appendChild(item);
					break;
				case "Header":
					let HeaderDetails = this.detailsObject.Header
					keys = Object.keys(HeaderDetails);
					for (let index = 0; index < keys.length; index++) {
						currentObject = HeaderDetails[keys[index]];
						item = this.createHeader(currentObject.Message, currentObject.Class, currentObject.ID);
						let parentObject = this.detectSub(currentObject);
						parentObject.appendChild(item);
					}
					break;
				case "Button":
					let ButtonDetails =  this.detailsObject.Button
					keys = Object.keys(ButtonDetails);
					for (let index = 0; index < keys.length; index++) {
						currentObject = ButtonDetails[keys[index]];
						item = this.createButton(currentObject.Message, currentObject.Class, currentObject.ID);
						let parentObject = this.detectSub(currentObject);
						parentObject.appendChild(item);
					}
					break;
				case "Text":
					let TextDetails = this.detailsObject.Text;
					keys = Object.keys(TextDetails);
					for (let index = 0; index < keys.length; index++) {
						currentObject = TextDetails[keys[index]];
						item = this.createText(currentObject.Message, currentObject.Class, currentObject.ID);
						let parentObject = this.detectSub(currentObject);
						parentObject.appendChild(item);
					}
					break;
				case "Cube":
					let DrawCube = this.detailsObject.Cube;
					keys = Object.keys(DrawCube);
					for (let index = 0; index < keys.length; index++) {
						currentObject = DrawCube[keys[index]];
						item = this.createCube(currentObject.Message, currentObject.Class, currentObject.ID);
						let parentObject = this.detectSub(currentObject);
						parentObject.appendChild(item);
					}
					break;
				case "ListContainer":
					let DrawUL = this.detailsObject.ListContainer;
					keys = Object.keys(DrawUL);
					for (let index = 0; index < keys.length; index++) {
						currentObject = DrawUL[keys[index]];
						console.log(currentObject)
						item = this.createUL(currentObject.Message, currentObject.Class, currentObject.ID);
						let parentObject = this.detectSub(currentObject);
						parentObject.appendChild(item);
					}
					break;
				case "ListItem":
					let DrawLI = this.detailsObject.ListContainer;
					keys = Object.keys(DrawLI);
					for (let index = 0; index < keys.length; index++) {
						currentObject = DrawLI[keys[index]];
						item = this.createUL(currentObject.Message, currentObject.Class, currentObject.ID);
						let parentObject = this.detectSub(currentObject);
						parentObject.appendChild(item);
					}
					break;
				default:
					break;
			}
		}
	}
	setStates(file) {

		let currentState = file;
		// == SAVE STATE == //
		currentState.localPath = file[0].path;
		console.log(currentState);
		let pathChosen = document.getElementById("pathChosen");
		pathChosen.innerHTML = currentState.localPath;
	}
	createFileChooser() {
		// == ELEMENTS == // 
		let input = document.createElement('input');
		input.setAttribute('id', 'AD')
		input.type = 'file';
	
		// == FUNCTIONALITY == //
		input.click();
		input.onchange = event => {
			let files =  Array.from(input.files);
			const x = new creation();
			x.setStates(files);
		};

		
	}
	createHeader(message, addClass, id) {
		let header = document.createElement('h1');
		this.DesignElement(header, message, addClass, id);
		return header;
	}
	createButton(message, addClass, id) {
		let button = document.createElement('button');
		this.DesignElement(button, message, addClass, id)
		return button;
	}
	createText(message, addClass, id){
		let text = document.createElement('p');
		this.DesignElement(text, message, addClass, id);
		return text;
	}
	createCube(message, addClass, id) {
		let Cube = document.createElement('div');
		this.DesignElement(Cube, message, addClass, id);
		return Cube;
	}
	createUL(message, addClass, id) {
		let UL = document.createElement('ul');
		this.DesignElement(UL, message, addClass, id);
		return UL;
	}
	createLI(message, addClass, id) {
		let LI = document.createElement('li');
		this.DesignElement(LI, message, addClass, id);
		return LI;
	}
	DesignElement(element, message, addClass, id) {
	
		if (message != "Empty") {
			element.innerHTML = message;
		}
		element.setAttribute('id', id);
		if (addClass != "empty" && addClass != "Empty") {
			this.addClasses(element, addClass)
		}
		console.log(element)
		return element;
	}
	addClasses(ElementName, ClassArray) {
		ClassArray.forEach(styleClass => {
			ElementName.classList.add(styleClass);
		});
	}
}

export { creation }