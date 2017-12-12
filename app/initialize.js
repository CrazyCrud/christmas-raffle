import Vue from 'vue';
import App from './js/App'
import { EventBus } from './js/event-bus.js';
import createSnow from 'js/snow';

document.addEventListener('DOMContentLoaded', () => {
	createSnow();
	const app = new Vue({
		el: '#app',
		render: h => h(App),
		mounted: function() {
			var vm = this;
			window.addEventListener('keyup', function(event) {
				if (event.keyCode == 32 || event.keyCode == 0) {
					EventBus.$emit('start-spinning', this.winner);
				}
			});
		}
	});
});
