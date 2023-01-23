import { defineConfig } from 'cypress';
const cypressSplit = require('cypress-split');

export default defineConfig({
  e2e: {
    projectId: 'FaU3OF',
    supportFile: 'cypress/support/e2e.ts',
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://www.demoblaze.com/',
    chromeWebSecurity: false,
    env: {
      accounts: {
        active: {
          name: 'SarahConnor',
          password: '12345678',
        },
      },
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      return config;
    },
  },
});
