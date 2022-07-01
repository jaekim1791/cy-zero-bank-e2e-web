const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "4gk1xn",
	watchForFileChanges: false,
	viewportWidth: 1920,
	viewportHeight: 1080,
	video: false,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require("./cypress/plugins/index.js")(on, config);
		},
		baseUrl: "http://zero.webappsecurity.com",
	},
});
