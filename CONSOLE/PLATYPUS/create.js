import { Language } from "../CONTROLLERS/LanguageController.js";

class create extends Language{

	constructor(
		{
			tag = 0, 
			id = 0, 
			elementText = 0,
			customText = 0, 
			classes = 0, 
			options = 0, 
			labelFor = 0, 
			boxName = 0,
			placeholder = 0,
			title = 0,
			source = 0,
			type = 0
		}) 
		{
		super();
		this.tag = tag;
		this.id = id;
		this.elementText = elementText;
		this.customText = customText;
		this.classes = classes;
		this.options = options;
		this.labelFor = labelFor;
		this.boxName = boxName;
		this.instance = document.createElement(this.tag);
		this.placeholder = placeholder;
		this.title = title;
		this.source = source;
		this.type = type;
	}

	init() {
		if (this.#CHECK_NULL(this.id)) {
			this.#ID();
		};
		if (this.#CHECK_NULL(this.elementText)) {
			this.#TEXT();
		}
		if (this.#CHECK_NULL(this.customText)) {
			this.#TEXT(true);
		}
		if(this.#CHECK_NULL(this.classes)) {
			this.#CLASSES();
		}
		if(this.#CHECK_NULL(this.options)) {
			this.#OPTIONS();
		}
		if(this.#CHECK_NULL(this.boxName)) {
			this.#BOX_NAME();
		}
		if(this.#CHECK_NULL(this.labelFor)) {
			this.#LABEL_FOR();
		}
		if(this.#CHECK_NULL(this.placeholder)) {
			this.#PLACEHOLDER();
		}
		if(this.#CHECK_NULL(this.title)) {
			this.#TITLE();
		}
		if (this.#CHECK_NULL(this.source)) {
			this.#SOURCE();
		}
		if (this.#CHECK_NULL(this.type)) {
			this.#TYPE();
		}
		return this.instance
	};
	#ID() {
		this.instance.id = this.id;
	};
	#TEXT(CUSTOM = false) {
		if (!CUSTOM) {
			this.LOAD().then((RESULT) => {
				let scribblings = this.SCRIBE(this.elementText);
				this.instance.innerHTML = scribblings;
			});
		}
		else {
			this.instance.innerHTML = this.customText;
		}
	};
	#CLASSES() {
		this.classes.forEach(className => {
			this.instance.classList.add(className);
		});
	};
	#LABEL_FOR() {
		this.instance.htmlFor = this.labelFor;
	};
	#BOX_NAME() {
		this.instance.name = this.boxName;
	};
	#PLACEHOLDER() {
		this.LOAD().then((RESULT) => {
		let scribblings = this.SCRIBE(this.placeholder);
		this.instance.placeholder = scribblings;
	});
	}
	#OPTIONS() {
		let num = this.options.length;
		if (num === 0) {
			let currentOption = document.createElement('option');	
			currentOption.value = 1;
			currentOption.innerHTML = "NO OPTIONS AVAILABLE";
			this.instance.appendChild(currentOption);
		}
		if (num === 1 && typeof(this.options === "string")) {
			let currentOption = document.createElement('option');	
			currentOption.value = 1;
			currentOption.innerHTML = this.options;
			this.instance.appendChild(currentOption);
		}
		for (let index = 1; index <= num; index++) {
			let currentOption = document.createElement('option');		
			currentOption.value = index;
			currentOption.innerHTML = this.options[index - 1];
			this.instance.appendChild(currentOption);
		}
		return this.instance;
	};
	#TITLE() {
		this.instance.title = this.title;
	}
	#SOURCE() {
		this.instance.src = this.source;
	};
	#TYPE() {
		this.instance.type = this.type;
	}
	#CHECK_NULL(property) {
		if (property != 0) {
			return true;
		}
		return false;
	};
	changeOptions(selectBox, optionsArray) {
		this.instance = selectBox;
		this.options = optionsArray;
		var index, Length = selectBox.options.length - 1;
		for(index = Length; index >= 0; index--) {
			selectBox.remove(index);
		}
		this.#OPTIONS();
	};
	readOptionText(sel) {
		return sel.options[sel.selectedIndex].text
	}
}

export { create };

