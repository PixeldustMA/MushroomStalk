import { ReadFile, WelcomeSave, createNewPath } from "../../../../GEARS/PLATYPUS/RenderFunctions.js"

// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//       Component Panic Theme       //
// ================================= //

let PanicObject = {}
let GrapefruitBowl = {}

const Arc = {
	Theme: "Theme Name",
	Classes: ["ArcCell", "bar"]
}
const Title = {
	Theme: "Theme Name",
	Classes: ["TitleRow", "Editable"]
}
const Sphinx = {
	Theme: "Theme Name", 
	Classes: ["SphinxCell", "bar"]
}
const Piece = {
	Theme: "Theme Name",
	Classes: ["PieceCell", "bar"]
}
const Fragment = {
	Theme: "Theme Name",
	Classes: ["FragmentCell", "bar"]
}
const Crumb = {
	Theme: "Theme Name",
	Classes: ["CrumbCell"]
}
const Table = {
	Theme: "None", 
	Classes: ["Empty"]
}
class Panic {
	constructor(
		shadows,
		request,
		componentTag
	) {
		this.shadows = shadows
		this.Columns = this.shadows.getElementById('ColumnContainer')
		this.num = 0
		this.request = request
		this.GrapefruitBox = {}
		this.Tag = componentTag
		this.count = 0;
		this.teNum = 0;
	}

	async DrawPanic(){
		const initialised = await this.setUpObjects()
			.then((result) => {
				this.GrapefruitBox = structuredClone(GrapefruitBowl)
				return result;
			})
		const CountArray = Object.keys(PanicObject);
		let Count = CountArray.length;
		this.num = Count;
		console.log(this.shadows.getElementById('ColumnContainer'))
		this.createColumns(this.shadows.getElementById('ColumnContainer'));
	}
	async DrawTitleBar() {
		let Add = this.shadows.getElementById('PlusButton');
		const Bar = await this.DrawPanic()
			.then((result) => {
				Add.addEventListener('click', this.AddColumns);
				return result;});
	}

	accessClass() {
		switch (this.Tag) {
			case "Arc":
				return Arc.Classes;
			case "Title":
				return Title.Classes;
			case "Sphinx":
				return Sphinx.Classes;
			case "Piece":
				return Piece.Classes;
			case "Fragment":
				return Fragment.Classes;
			case "Crumb":
				return Crumb.Classes;
			case "Table":
				return Table.Classes;
			default:
				break;
		}
	}
	addClass(classArray, container) {

		classArray.forEach(className => {
			container.classList.add(className);
		});
		return container;
	}
	async createColumns(container) {
		console.log(container)
		console.log("HHHH")
		const Key = await this.readColumns()
			.then((result) => {return Object.values(result);})
		const tagObject = this.accessClass();
		const shad = this.shadows
		if (this.Tag !== "Table") {
		Key.forEach(title => {
			let titleText = title[1];
			console.log(titleText)
			let stretchText = title[0];
			let colours = ["RedTitle", "OrangeTitle", 
							"YellowTitle", "GreenTitle", 
							"BlueTitle", "IndigoTitle", 
							"VioletTitle", "RaspberryTitle"]
			let newdiv = document.createElement('div');
				newdiv.id = titleText;
				newdiv.innerHTML = titleText.toUpperCase();
				newdiv.setAttribute("part", titleText);
				this.addClass(tagObject, newdiv);
				newdiv.classList.add(`${colours[this.count]}`);
				if (this.Tag === "Crumb") {
					newdiv.setAttribute('Te', `${this.teNum}`)
					this.teNum += 1;
				}
				if (this.count === 7) {
					this.count = 0;}
				else {
					this.count += 1;
				}
				newdiv.addEventListener("mouseover", (event) => {
					newdiv.innerHTML = stretchText.toUpperCase();
					newdiv.contentEditable = true;
				});
				newdiv.addEventListener("mouseout", (e) => {
					newdiv.innerHTML = titleText.toUpperCase();
				})

				container.append(newdiv)
			})
			return container;
		};
		
	};

	async AddColumns() {
		let shadows = document.querySelector('goblin-rainbow').shadowRoot;
		const classInstance = new Panic(shadows, "Columns", "Title");
			classInstance.clearColumns();
			classInstance.num = Object.keys(PanicObject).length;
			PanicObject[classInstance.num + 1] = ["New", "N"];
			classInstance.num += 1;
		const save = await classInstance.saveObject(PanicObject)
			.then((result) => {return result;})
		classInstance.createColumns(classInstance.Columns);
	}

	clearColumns = () => {
		while (this.Columns.firstChild) {
					this.Columns.removeChild(this.Columns.firstChild);
		};
	}

// HANDLE PEN OBJECT
	// UPDATE THE OBJECT WITH NEW INFORMATION
	updatePanicObject(newTitle, div) {
		let oldTitle = div.innerHTML;
		for (const [key, value] of Object.entries(PanicObject)) {
			if (value[0].toUpperCase() === oldTitle) {
				let PanicObjectArray = PanicObject[key];
				PanicObjectArray[0] = newTitle;
				break;
			}
		}
		return PanicObject
	}
	// ACCESS OBJECT
	getPanicObject() {
		return PanicObject;
	}

// HANDLE GRAPEFRUIT OBJECT
	// UPDATE THE OBJECT
	updateGrapefruitObject(newTitle, div) {
		let oldTitle = div.innerHTML;
		for (const [key, value] of Object.entries(GrapefruitBowl)) {
			if (value.toUpperCase() === oldTitle) {
				GrapefruitBowl[key] = newTitle;
				break;
			}
		}
		return GrapefruitBowl
	}
	// ACCESS OBJECT
	async getGrapefruitObject() {
		const grape = await this.setUpGrapefruit()
			.then((result) => {return result});
		return grape
	}
// INFORMATION FETCHING
	// GET CURRENT OBJECT PATH OF THE PAGE
	async getPanicObjectPath() {
		const path = await createNewPath("../../GIZMOS/BLOX/PenCategory.json")
			.then((result) => {
				return result;
			})
		this.PanicPath = path;
		return path
	}
	async getArcObjectPath() {
		const path = await createNewPath("../../GIZMOS/BLOX/PanicBlox.json")
		.then((result) => {
			return result;
		})
	this.PanicPath = path;
	return path
	}
	// READ THE OBJECT FROM GIVEN PATH
	async setUpGrapefruit() {
		const GrapeObj = await this.readGrapefruit()
		.then((result) =>{
			return result;
		}
	);
	return GrapeObj;
	};
	async setUpColumns() {
		const ColObj = await this.readColumns()
		.then((result) => {return result;});
		return ColObj;
	}
	async setUpObjects() {
		const ColObj = await this.readColumns()
			.then((result) => {return result;});
		const GrapeObj = await this.readGrapefruit()
			.then((result) =>{
				return result;
			}
		);
		return GrapeObj;
	}
	async readColumns() {
			const PanicPath = await this.getPanicObjectPath()
			.then((path) => {
				return path;
			})
		const PanicPens = await ReadFile(PanicPath)
			.then((panicObject) => {
				return panicObject;
			})
		PanicObject = PanicPens;
		return PanicObject; 
	}
	async readGrapefruit() {
		const GrapefruitPath = await this.getArcObjectPath()
		.then((path) => {
			return path;
		})
		const Grapefruit = await ReadFile(GrapefruitPath)
		.then((GrapefruitResult) => {
			return GrapefruitResult;
		})
		GrapefruitBowl = Grapefruit;
		return Grapefruit;
	}
	async readObject() {
		if (this.request == "Columns") {
			const Col = await this.readColumns()
				.then((result) => {
					return result;
				});
			return Col
		}
		else if (this.request == "Grapefruit") {
			const Grapefruit = await this.readGrapefruit()
				.then((result) => {
					return result;
				})
			return Grapefruit;
		}
	}

// SAVING FUNCTIONS
	// SAVE AN UPDATED OBJECT
	async saveObject(currentState) {
		if (this.request === "Columns") {
			const path = await this.getPanicObjectPath()
				.then((result) => {return result;})
			const Saved = await WelcomeSave(path, currentState)
				.then((result) => {
					console.log(PanicObject);
					console.log("Saving.. ... ... ")
					return result});
			return Saved 
		}
		else if (this.request === "Grapefruit") {
			const path = await this.getArcObjectPath()
				.then((result) => {return result;})
			const Saved = await WelcomeSave(path, GrapefruitBowl)
				.then((result) => {
					console.log("...Saving")
					return result;});
			return Saved; 
		}
}

}

export { Panic };