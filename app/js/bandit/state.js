export const state = {
	numbers       : [],
	checkForNumber: function (number) {
		return this.numbers.includes(number);
	},
	clearNumbers  : function () {
		this.numbers = [];
	}
};