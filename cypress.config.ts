import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://the-internet.herokuapp.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // Import plugins
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('./cypress/plugins/index.js')(on, config);

      // Mochawesome reporter configuration
      on('after:spec', (_spec, _results) => {
        // Custom reporting logic can be added here
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.{js,ts}',
    env: {
      // Add environment-specific variables here
      // These can be overridden via .env file or command line
    },
  },
  // Only use mochawesome reporter when not in CI (CI uses cypress-io/github-action reporter)
  ...(process.env.CI
    ? {}
    : {
        reporter: 'mochawesome',
        reporterOptions: {
          reportDir: 'cypress/reports/mochawesome',
          overwrite: false,
          html: true,
          json: true,
          charts: true,
          reportPageTitle: 'Cypress Test Report',
          embeddedScreenshots: true,
          inlineAssets: true,
        },
      }),
});
