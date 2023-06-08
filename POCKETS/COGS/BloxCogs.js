class BloxCogs {

	constructor(){

	}

	returnObject(request) {
		switch (request) {
			case "view":
				return this.GetViewObject();
			case "header":
					return this.GetHeaderObject();
			case "path":
				return this.GetPathObject();
			case "name":
				return this.getNameObject();	
			default:
				break;
		}
	}
	GetViewObject(){
		const ViewObject = {
			Header: {
				LanguageHeader: {
					Message: "Language",
					Class: ["TitleView"], 
					ID: "Header_Language",
				},
			},
			Cube: {
				BorderCube: {
					Message: "Empty",
					Class: ["View"],
					ID: "View_Cube"
				},
				TitleCube: {
					Message: "Empty",
					Class: "Empty",
					ID: "Title_Cube"
				}
			},
			ListContainer: {
				Options: {
					Message: "Empty",
					Class: "Empty",
					ID: "OPTIONS-DISPLAY",
					sub: true,
					subParent: "View_Cube"
				}
			}
		}
		return ViewObject;
	}
	GetHeaderObject() {
		const HeaderObject = {
			Header: {
				CogHeader: {
					Message: "COGS",
					Class: "Empty", 
					ID: "Header_Cogs",
				}
			}
		}
		return HeaderObject;
	}
	GetPathObject() {
		const PathObject = {
			Button: {
				SetPath: {
					Message: "Set Path",
					Class: ["settingsButtons"], 
					ID: "pathButton"		
				}
			},
			Text: {
				PathText: {
					Message: "Path Chosen",
					Class: [],
					ID: "pathChosen"
				}
			}
		}
		return PathObject;
	}
	getNameObject() {
		const NameObject = {
			Button: {
				SetName: {
					Message: "Set Name",
					Class: ["settingsButtons"],
					ID: "nameButton"
				}
			}
		}
		return NameObject;
	}
}

export { BloxCogs };