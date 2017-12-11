import Vue from 'vue';
import App from './js/App'
import createSnow from 'js/snow';

document.addEventListener('DOMContentLoaded', () => {
	// do your setup here
	// var $ = require('jquery');
	createSnow();

	const app = new Vue({
		el: '#app',
		render: h => h(App)
	});
});
