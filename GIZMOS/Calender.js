function SetDay() {
	const todayDate = new Date();
	const correctHour = todayDate.setHours(-3)
	const newDate = new Date(correctHour);
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
	console.log(day);
	return day;
	}
}

export { SetDay }