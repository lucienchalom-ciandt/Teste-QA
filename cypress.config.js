const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
  },

  expose: {
    serverUrl: 'https://serverest.dev',
    frontUrl: 'https://front.serverest.dev'

  }
});
