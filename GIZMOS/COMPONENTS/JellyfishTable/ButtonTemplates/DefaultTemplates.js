function DefaultLocation() {
	return {
		"rowOne": {
			"expand": "ExpandButton",
			"contract": "ContractButton"
		},
		"rowTwo": {
			"save": "SaveButton",
			"load": "LoadButton"
		},
		"rowThree": {
			"edit": "EditButton",
			"clear": "ClearButton"
		},
		"rowFour": {
			"boop": "BoopButton"
		}
	}
}

function DefaultTheme() {
	const buttonArray = ["expand", "contract", "save", "load", "edit", "clear", "boop"];
	let themeTemplate = {}
	buttonArray.forEach(button => {
		themeTemplate[button] = {
			"Colour": {
				"Type": "HexCode",
				"HexCode": "#000000",
				"ThemeName": "",
				"ColourName": ""
			},
			"FontStyle": {
				"Size": "20",
				"Family": "LEMON MILK",
				"Colour": {
					"Type": "HexCode",
					"HexCode": "#000000",
					"ThemeName": "",
					"ColourName": ""
				}
			},
			"Border": {
				"Style": "Dashed",
				"Colour": {
					"Type": "HexCode",
					"HexCode": "#000000",
					"ThemeName": "",
					"ColourName": ""
				},
				"Thickness": "3px"
			}
		}
	});
	return themeTemplate;
}
export { DefaultLocation, DefaultTheme }