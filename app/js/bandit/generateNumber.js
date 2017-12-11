export function generateNumber(min = 1, max = 200) {
	return min + Math.floor((max - min + 1) * Math.random());
}