const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Dein Testmuster
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/cypress-results-[hash].xml', // Pfad für die JUnit Reports
    toConsole: true, // Wichtig: Damit die Zeiten auch auf der Konsole erscheinen
  },
});