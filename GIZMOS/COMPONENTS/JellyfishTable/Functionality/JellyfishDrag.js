function allowDrop(ev) {
	ev.preventDefault();
  }
  
  function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	let Panel = document.querySelector('jellyfish-buttons');
	let PanelShadow = Panel.shadowRoot;
	ev.target.appendChild(PanelShadow.getElementById(data));
  }

export {allowDrop, drag, drop};