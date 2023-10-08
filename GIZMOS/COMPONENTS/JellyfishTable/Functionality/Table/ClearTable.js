let grabTable = document.querySelector('goblin-table');
let TableShadow = grabTable.shadowRoot;
let ColumnsToClear = TableShadow.getElementById('ColumnContainer');


function clearColumns() {
	while (ColumnsToClear.firstChild) {
		ColumnsToClear.removeChild(ColumnsToClear.firstChild);
	}
}
