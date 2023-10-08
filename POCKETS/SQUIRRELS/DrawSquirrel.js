document.getElementById('SquirrelTitle').innerHTML = "SQUIRRELS"

const viewBox = document.getElementById('SquirrelViewer')
const filterButton = document.getElementById('FilterButton');

filterButton.addEventListener('click', (e) => {
	viewBox.innerHTML = "FILTER"
})

viewBox.append(table)