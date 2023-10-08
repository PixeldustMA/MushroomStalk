// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Connect Components          //
// ================================= //


function popUpConnector(shadow, idTag, Root, container, slotStatus) {
	let EditTitleButton = shadow.getElementById('AddTitle');
	EditTitleButton.addEventListener('click', (e) => {
		console.log(slotStatus + " Pop Up Connector")
		let PopElement = document.createElement('goblin-pop');
			PopElement.id = "createAPopBox"
			PopElement.setAttribute('AttachedID', `${idTag}${Root}Header`)
			PopElement.setAttribute('RootTag', Root);
			PopElement.setAttribute('slot_status', slotStatus);
		container.appendChild(PopElement)
	})
}
function arcConnector(container, grapeNumber, PageStyle) {
	let arcElement = document.createElement('goblin-arc');
		arcElement.setAttribute('PageStyle', PageStyle);
		arcElement.setAttribute('foldable', 'Static')
		arcElement.setAttribute('num', grapeNumber);
	container.appendChild(arcElement);
	return container;
}
function sphinxConnector(sphinx, container, grapeNumber, index, Arc) {
	let sphinxElement = document.createElement('goblin-sphinx');
		sphinxElement.setAttribute('PageStyle', 'panic');
		sphinxElement.setAttribute('num', grapeNumber);
		sphinxElement.setAttribute('index', index);
		sphinxElement.setAttribute('SphinxCat', sphinx);
		sphinxElement.setAttribute('GivenColour', 'blue');
		sphinxElement.setAttribute('ArcCat', Arc)
		sphinxElement.classList.add("FOLDME")
		container.appendChild(sphinxElement)
	return container;
}
function pieceConnector(container,  index, arcNum) {
	let pieceElement = document.createElement('goblin-piece');
		pieceElement.setAttribute('PageStyle', 'panic');
		pieceElement.setAttribute('PieceCat', "Boop");
		pieceElement.setAttribute('ArcCat', 'Peas');
		pieceElement.setAttribute('num', index);
		pieceElement.setAttribute('arcNum', arcNum);
		pieceElement.classList.add("FOLDME")
		container.appendChild(pieceElement);
	return container;
}
function fragmentConnector(container, index, key) {
	let fragmentElement = document.createElement('goblin-fragment');
		fragmentElement.setAttribute('PageStyle', 'panic');
		fragmentElement.setAttribute('num', index);
		fragmentElement.setAttribute('arcNum', key);
		fragmentElement.setAttribute('FragmentCat', "Frogs");
		fragmentElement.setAttribute('PieceCat', 'Nope');
		fragmentElement.setAttribute('ArcCat', 'Toot');
		fragmentElement.setAttribute('Title', 'Why');
		fragmentElement.classList.add("FOLDME")
		container.appendChild(fragmentElement);
	return container;
}
function crumbConnector(container, index, key, crumbName, fragNumber, usefulObject) {
	let crumbElement = document.createElement('goblin-crumb');
		crumbElement.setAttribute('PageStyle', 'panic');
		crumbElement.setAttribute('num', index);
		crumbElement.setAttribute('arcNum', key);
		crumbElement.setAttribute('CrumbCat', crumbName);
		crumbElement.setAttribute('FragmentCat', 'Frogs');
		crumbElement.setAttribute('PieceCat', 'Nope');
		crumbElement.setAttribute('ArcCat', 'Toot');
		crumbElement.setAttribute('frag', fragNumber);
		crumbElement.setAttribute('fragmentSub', usefulObject.FragmentSub);
		crumbElement.setAttribute('pieceSub', usefulObject.PieceSub);
		crumbElement.setAttribute('sphinxSub', usefulObject.SphinxSub);
		crumbElement.setAttribute('arcSub', usefulObject.ArcSub);
		crumbElement.classList.add("FOLDME")
		container.appendChild(crumbElement);
	return container;
}

export {popUpConnector, arcConnector, 
		sphinxConnector, pieceConnector,
		fragmentConnector, crumbConnector}

