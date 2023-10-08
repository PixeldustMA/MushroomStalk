const draggableImage = document.getElementById("NumberOne");

function allowDrop(ev) {
	ev.preventDefault();
}
function drag(ev) {
	ev.dataTransfer.setData("image", ev.target.id);
}
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("image");
	ev.target.appendChild(document.getElementById("AnatomicalHeart").cloneNode(true));
}

    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("stickerPanel").style.width = "250px";
	document.getElementById("taskboard").style.marginLeft = "250px";
}

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("stickerPanel").style.width = "0";
	document.getElementById("taskboard").style.marginLeft = "0";
} 