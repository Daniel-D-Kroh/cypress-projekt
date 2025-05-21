const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  // Konfiguriere den JUnit Reporter
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'test-results/cypress/cypress-results-[hash].xml',
    toConsole: true,
    testsuitesTitle: 'Cypress Tests',
  },
});