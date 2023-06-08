import { AppState } from "../../src/appState.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//        Load User Settings         //
//          On App Start             //
// ================================= //

// Persistant App State Object
const appstate = new AppState();

class LoadSettings {

	constructor(
		{user, localPath, MessagePath, DesktopPath}
	){
		this.user = user;
		this.localPath = localPath
		this.MessagePath = MessagePath
		this.DesktopPath = DesktopPath
	};

	// Allow Access To Settings for Rest of App
	async Init() {
		const state = await appstate.CreateAppState();
		this.user = state.user;
		this.localPath = state.localPath;
		this.MessagePath = state.MessagePath;
		this.DesktopPath = state.DesktopPath
		const user = this.getObject();
		return user;
	}
	// Create Object to be used elsewhere
	getObject() {
		const state = {
			user: this.user,
			localPath: this.localPath,
			MessagePath: this.MessagePath,
			DesktopPath: this.DesktopPath
		}
		return state;
	}

}

// Access The Settings Classs
function newUser() {
	const user = new LoadSettings(appstate);
	return user;
}

export {newUser}