function spinNumber(Barriers) {
	console.log("SPINNING NUMBER...")
	let randomNumber = Math.floor(Math.random() * (Barriers));
	console.log("RANDOM NUMBER IS: " + randomNumber)
	return randomNumber;
}

export { spinNumber };