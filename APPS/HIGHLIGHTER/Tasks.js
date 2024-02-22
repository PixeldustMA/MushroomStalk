import { route } from "../../GEARS/GNOME/Routes";
import { ReadFile } from "../../GEARS/PLATYPUS/RenderFunctions";

let Daily = await route("Daily");

function readTasks(tag) {
	let result = "";
	switch (tag) {
		case "Dailies":
			let text = ReadFile(Daily).then((r) => {return r});
			result = markdownParser(text);
			break;
		default:
			break;
	};
	return result;
}
