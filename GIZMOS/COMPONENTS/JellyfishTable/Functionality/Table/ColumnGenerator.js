import { getColourLength, getColours, getThemeObject } from "../LoadTheme.js";
import { accessClass } from "../StyleClass.js";

function titleColumns(template, tag) {
	let titleCellArrays = Object.values(template);
	let tagObject = accessClass(tag);
	titleCellArrays.forEach(title => {
		let titleText = title[1];
		let stretchText = title[0];
		let newdiv = document.createElement('div');
		newdiv.id = titleText;
		newdiv.innerHTML = titleText.toUpperCase();
		// newdiv.setAttribute("part", titleText);
		addClass(tagObject, newdiv);
		newdiv.classList.add(`${colours[this.count]}`);
		newdiv.addEventListener("mouseover", (event) => {
			newdiv.innerHTML = stretchText.toUpperCase();
			newdiv.contentEditable = true;
		});
		newdiv.addEventListener("mouseout", (e) => {
			newdiv.innerHTML = titleText.toUpperCase();
		})
		container.append(newdiv);
	})
}

function readColumnNumber(columnObject, tag) {
	let count = Object.keys(columnObject);
	let tagObject = accessClass(tag);
	let colours = getColours();
	let numEnd = getColourLength();
	count.forEach(title => {
		let num = 0;
		let newdiv = document.createElement('div');
			newdiv.id = `${num}temporary_id`;
			addClass(tagObject, newdiv);
			newdiv.classList.add(`${colours[num]}`);
			if (num === numEnd) {
				num = 0;}
			else {
				num += 1;
			};
	})
}

function addClass(classArray, container) {
	classArray.forEach(className => {
		container.classList.add(className);
	});
	return container;
}


