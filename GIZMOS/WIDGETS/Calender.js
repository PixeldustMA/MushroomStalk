// ================================= //
//         MUSHROOM STALK            //
// ================================= //
//      Last Updated - v0.8          //
//             Set Day               //
// ================================= //

function SetDay() {

	const todayDate = Date();
	const newDate = new Date(todayDate)
	newDate.setHours(newDate.getHours() - 6)
	console.log("CURRENT TIME IN PIXIE TIME IS: " + newDate)
	let day = ""
	if (typeof newDate === 'object' && newDate !== null && 'getDate' in newDate) {
	const numericalDay = newDate.getDay();
		switch (numericalDay) {
			case 1:
				day = "Monday";
				break;
			case 2:
				day = "Tuesday";	
				break;
			case 3:
				day = "Wednesday";			
				break;
			case 4:
				day = "Thursday";			
				break;
			case 5:
				day = "Friday";			
				break;
			case 6:
				day = "Saturday";			
				break;
			case 0:
				day = "Sunday";			
				break;
			default:
				break;
		}
	return day;
	}
}

export { SetDay }