import { ReadFile, WelcomeSave, createNewPath } from "./RenderFunctions.js";

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//         Hold App State            //
// ================================= //


class AppState {

	constructor () {
		this.state = {
			user: '',
			localPath: '',
			MessagePath: '',
			DesktopPath: ''
		};
		this.MessageObject = {}
	};

	// Read User Settings
	async initialise() {
		const SettingsPath = await createNewPath("../SETTINGS/USER/UserPixel.json")
			.then((result) => {
				return result;
			})
		const settings = await ReadFile(SettingsPath)
			.then((result) => {
				if(result.userPath === "") {
					this.createNewUser();
					return this.state;
				}
				return result;
			});
		return settings;
	}

	// Load App State Object
	async CreateAppState() {
		const init = await this.initialise()
		this.state.localPath = init.SavePath;
		this.state.DesktopPath = init.textFilePath;
		const Message = await createNewPath("../SETTINGS/TEXTS/Message.json")
			.then((result) => {
				this.state.MessagePath = result;
				return this.state;
			})
		this.showStatus();
		return this.state
	}

	// Access State Object
	getState() {
		return this.state;
	}
	// Getters And Setters
	setUser(value) {
		this.state.user = value
		console.log("User Path Changed");
		this.showStatus();
		return this.state
	}
	getUser() { return this.state.user;}
	setLocalPath(value) {
		this.state.localPath = value;
		console.log("Local Path Changed");
		this.showStatus();
		return this.state
	}
	getLocalPath() { return this.state.localPath; }
	setMessagePath(value) {
		this.state.MessagePath = value;
		console.log("Message Path Changed");
		this.showStatus();
		return this.state
	}
	getMessagePath() { return this.state.MessagePath;}

	// Show App Status
	showStatus() {
		console.log("APP STATUS...")
		console.log(this.state);
	}
	async createNewUser() {
		const SettingsPath = await createNewPath("../SETTINGS/USER/UserPixel.json")
			.then((result) => {
				return result;
			})
		const AppPath = await createNewPath("../SETTINGS/TEXTS/Message.json")
		.then((result) => {
			return result;
		});
		const UserPath = await createNewPath("../SETTINGS/USER/UserPixel.json")
		.then((result) => {
			return result;
		})
		const newSettingsPath = {
			appPath: AppPath,
			userPath: UserPath,
			textFilePath: "",
			user: '',
		}
		this.state.DesktopPath = newSettingsPath.textFilePath;
		this.state.MessagePath = newSettingsPath.appPath;
		this.state.localPath = newSettingsPath.userPath;
		this.state.user = newSettingsPath.user;

		const saveObject = await WelcomeSave(newSettingsPath.userPath, newSettingsPath)
			.then((result) => {
				console.log(result)
				return result;
			});
		return saveObject
	}
}

export { AppState}