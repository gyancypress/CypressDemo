const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-terminal-report/src/installLogsPrinter')(on);
      return config;
     
      // implement node event listeners here
    },
    projectId: "4mebk9", // Replace with your actual projectId
    chromeWebSecurity: false, // Disable Chrome web security
    baseUrl: "https://calendly.com/", // Replace with your app's base URL

   
    // Default timeout for commands
    defaultCommandTimeout: 10000, // 10 seconds

    // Default timeout for page loads
    pageLoadTimeout: 60000, // 60 seconds

    // Support file for custom commands
    supportFile: "cypress/support/commands.js",

    // Set up Node event listeners
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },

    // Enable video recording for test runs
    video: true,

   // Specify the folder for test specs
   specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
   excludeSpecPattern: ["cypress/e2e/2-advanced-examples/*"],
  
   // Add Mochawesome reporter configuration
   reporter: "mochawesome",
   reporterOptions: {
     reportDir: "cypress/reports", // Directory to save reports
     overwrite: false,            // Do not overwrite existing reports
     html: true,                  // Generate HTML report
     json: true                   // Generate JSON report
   },

   
   
  },
});
