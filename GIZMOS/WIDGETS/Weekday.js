function getWeekday(input, monthNumber, day) {

	let lastTwo = parseInt(input.toString().slice(2));
	let firstTwo = parseInt(input.toString().slice(0, 2));

	let year = yearCode(lastTwo);
	let month = monthCode(monthNumber);
	let centuary = centuaryCode(firstTwo);
	let leap = leapCheck(input);

	return Math.floor((year + month + centuary + day - leap) % 7);
}

function yearCode(year) {
	return (year + year / 4) % 7;
}
function monthCode(month) {
	const monthValues = {
		1: 0,
		2: 3,
		3: 3,
		4: 6,
		5: 1,
		6: 4,
		7: 6,
		8: 2,
		9: 5,
		10: 0,
		11: 3,
		12: 5
	};
	return monthValues[month];
}
function centuaryCode(num) {
	const georgianCode = {
		1: 4,
		2: 2,
		3: 0,
		4: 6,
		5: 4,
		6: 2,
		7: 0,
		8: 6,
		9: 4,
		10: 2,

		11: 0,
		12: 6,
		13: 4,
		14: 2,
		15: 0,
		16: 6,
		17: 4,
		18: 2,
		19: 0,
		20: 6,

		21: 4,
		22: 2,
		23: 0,
		24: 6,
		25: 4,
		26: 2,
		27: 0,
		28: 6,
		29: 4,
		30: 2,

		31: 0,
		32: 6,
		33: 4,
		34: 2,
		35: 0,
		36: 6,
		37: 4,
		38: 2,
		39: 0,
		40: 6,

		41: 4,
		42: 2,
		43: 0,
		44: 6,
		45: 4,
		46: 2,
		47: 0,
		48: 6,
		49: 4,
		50: 2,

		51: 0,
		52: 6,
		55: 4,
		54: 2,
		55: 0,
		56: 6,
		57: 4,
		58: 2,
		59: 0,
		60: 6,
		
		61: 4,
		62: 2,
		63: 0,

	}
	return georgianCode[num];
}
function leapCheck(year) {
	let leap = false;
	let leapValue = 0;
	if (year % 400 === 0) {
		leap = true;
	}
	else if (year % 100 !== 0 && year % 4 === 0) {
		leap = true;
	}
	if (leap) {
		leapValue = 1;
	}
	return leapValue;
}

export {getWeekday}
