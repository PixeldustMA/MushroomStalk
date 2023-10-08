
// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Access Renderer            //
//          for Database             //
// ================================= //

async function NewDatabase() {
	const build = await window.ipcRender.CreateDatabase()
		.then((result) => {
			console.log(result);
			return result;
		})
	return build;
}
async function addCharacter(request) {
	const query = await window.ipcRender.insertNewCharacter(request)
		.then((result) => {return result;})
}

async function DatabaseStructure(ToolboxQuery) {
	const toolbox = await window.ipcRender.DatabaseToolbox(ToolboxQuery)
		.then((result) => {
			console.log(Duck());
			console.log("Database Screws Updated");
			return result;
		})
	return toolbox;
}

async function select (query) {
	console.log(query)
	const quack = await window.ipcRender.DuckSelect(query);
	return quack;
}
async function insert (data) {
	console.log(data)
	const quack = await window.ipcRender.DuckInsert(data[0], data[1]);
	return quack;
}

export { DatabaseStructure, addCharacter, NewDatabase, select, insert }