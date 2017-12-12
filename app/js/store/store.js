export const Store = {
	state: {
		winners: []
	},
	addValue (newValue) {
		if (!this.state.winners.includes(newValue)) {
			console.log("Value added to store", newValue);
			this.state.winners.push(newValue);
		}
	},
	clearValues () {
		this.state.message = []
	}
};