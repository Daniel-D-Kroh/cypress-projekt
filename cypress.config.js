const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: 'cypress/test/**/*.cy.{js,jsx,ts,tsx}',
  },

  forbidOnly: !!process.env.CI,

  retries: {
    runMode: process.env.CI ? 2 : 0,
    openMode: 0,
  },

  reporter: 'junit',

  reporterOptions: {
    mochaFile: process.env.CI ? 'test-results/cypress/cypress-results-[hash].xml' : 'results/cypress-results-[hash].xml',
    toConsole: true,
    testsuitesTitle: 'Cypress Tests',
  },

  video: true,

  screenshotOnRunFailure: true,
});