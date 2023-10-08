savebutton.addEventListener('click', (event) => {

	// SEARCH FOR THE CELLS WITH THE RIGHT CLASS
	selectedCellList = document.querySelectorAll(".selected");
	selectedCellList.forEach(cell => {
		// GET ID OF CELL
		let cellid = cell.getAttribute('id');
		console.log(cellid)
		let activecells = [];
		activecells.push(cellid);
	});

	// OLD SYSTEM TO PUT IN FILE
// 	// NEEDS TO BE RP
// 	let getDay = JSON.parse(fs.readFileSync('settings.json').toString());
// 	let test = JSON.stringify(ActiveCells, null, 4);
//     // Creating and Writing to Json File
// 	fs.writeFile(getDay, test, 'utf8', function(err) {
// 		if (err) throw err;
// 		console.log('complete');

// });
})