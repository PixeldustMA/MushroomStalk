// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Colour Cube Clicker         //
// ================================= //

// -- SETS THE COLOURS ON CELLS WHEN CLICKED --//

window.onclick = function(e){ 

	let pathways = e.composedPath();
	let cellid = pathways[0]
	console.log(cellid)
	if (cellid.classList.contains("CrumbCell")){
		let colouredCell = cellid.classList[1];
		let firstLetter = colouredCell.charAt(0).toUpperCase();
		let colour = colouredCell.replace("Title", "")
		if (cellid.classList.contains(`${colouredCell}`)) {
			cellid.classList.toggle(`active${colour}`)
			cellid.classList.toggle(`selected`)
		}
	}
}  // -- CLICK LISTENER END -- //

