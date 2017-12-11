// See http://brunch.io for documentation.
exports.files = {
	javascripts: {
		joinTo: {
			'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
			'app.js'   : /^app/
		}
	},
	stylesheets: {
		joinTo: {
			'styles/app.css'   : /^app/,
			'vendor.css': /^node_modules/
		}
	}
};

exports.plugins = {
	babel: {presets: ['latest']},
	sass : {
		options: {
			includePaths: [
				'node_modules/'
			]
		}
	},
	vue  : {
		extractCSS: true,
		out       : 'public/styles/components.css'
	}
};
