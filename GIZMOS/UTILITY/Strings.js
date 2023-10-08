function capitalise(word) {
	let low = word.toLowerCase();
	return low.charAt(0).toUpperCase() + low.slice(1);
}

export {capitalise}