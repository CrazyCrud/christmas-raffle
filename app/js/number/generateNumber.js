export function generateNumber(min = 0, max = 100) {
	return min + Math.floor((max - min + 1) * Math.random());
}