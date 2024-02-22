class create {

	constructor({tag = 0, id = 0, elementText = 0, classes = 0, options = 0, labelFor = 0, boxName = 0}) {
		this.tag = tag;
		this.id = id;
		this.elementText = elementText;
		this.classes = classes;
		this.options = options;
		this.labelFor = labelFor;
		this.boxName = boxName;
		this.instance = document.createElement(this.tag);
	}

	init() {
		if (this.checkNull(this.id)) {
			this.setId();
		};
		if (this.checkNull(this.elementText)) {
			this.setText();
		}
		if(this.checkNull(this.classes)) {
			this.setClasses();
		}
		if(this.checkNull(this.options)) {
			this.createOptions();
		}
		if(this.checkNull(this.boxName)) {
			this.setBoxName();
		}
		if(this.checkNull(this.labelFor)) {
			this.setLabelFor;
		}
		return this.instance
	}
	setId() {
		this.instance.id = this.id;
	}
	setText() {
		this.instance.innerHTML = this.elementText;
	}
	setClasses() {
		this.classes.forEach(className => {
			this.instance.classList.add(className);
		});
	}
	setLabelFor() {
		this.instance.htmlFor = this.labelFor;
	}
	setBoxName() {
		this.instance.name = this.boxName;
	}
	createOptions() {
		let num = this.options.length;
		for (let index = 1; index <= num; index++) {
			let currentOption = document.createElement('option');		
			currentOption.value = index;
			currentOption.innerHTML = this.options[index - 1];
			this.instance.appendChild(currentOption);
		}
		console.log(this.instance.options);
		return this.instance;
	}
	checkNull(property) {
		if (property != 0) {
			return true;
		}
		return false;
	}
	
}

export { create };

