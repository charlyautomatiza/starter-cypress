// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands
import './commands';

// Import cypress-axe for accessibility testing
import 'cypress-axe';

// Import image snapshot for visual regression testing
import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command';

// Configure image snapshot
addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // Threshold for when a snapshot should fail
  failureThresholdType: 'percent', // Type of threshold (percent or pixel)
  customDiffConfig: { threshold: 0.1 },
  capture: 'viewport', // Capture only the viewport
});

// Global before hook
before(() => {
  cy.log('Starting test suite');
});

// Global after hook
after(() => {
  cy.log('Test suite completed');
});

// Global beforeEach hook
beforeEach(() => {
  // Reset any state before each test
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Handle uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
  // Returning false here prevents Cypress from failing the test
  // You can add custom logic to handle specific exceptions
  console.error('Uncaught exception:', err.message);

  // Don't fail tests on uncaught exceptions from the application
  // This is useful for external sites that might have their own errors
  return false;
});
