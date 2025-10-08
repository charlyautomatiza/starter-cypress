// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/// <reference types="cypress" />

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to login to the application
       * @param userData - Object containing username and password
       * @example cy.login({ username: 'tomsmith', password: 'SuperSecretPassword!' })
       */
      login(userData: { username: string; password: string }): Chainable<void>;

      /**
       * Custom command to check accessibility
       * @param context - Optional context to check (default: entire page)
       * @param options - Optional axe options
       * @param violationCallback - Optional callback for violations
       * @example cy.checkA11y()
       */
      checkA11y(
        context?: string | Node,
        options?: Record<string, unknown>,
        violationCallback?: (violations: unknown[]) => void
      ): Chainable<void>;

      /**
       * Custom command to take a visual snapshot
       * @param name - Name of the snapshot
       * @example cy.matchImageSnapshot('login-page')
       */
      matchImageSnapshot(name: string): Chainable<void>;
    }
  }
}

/**
 * Custom command to login to the application
 */
Cypress.Commands.add('login', (userData: { username: string; password: string }) => {
  cy.get('#username').type(userData.username);
  cy.get('#password').type(userData.password);
  cy.get('button[type="submit"]').click();
});

/**
 * Custom command for accessibility testing
 * Requires cypress-axe to be installed and configured
 */
Cypress.Commands.add(
  'checkA11y',
  (
    context?: string | Node,
    options?: Record<string, unknown>,
    violationCallback?: (violations: unknown[]) => void
  ) => {
    cy.injectAxe();
    cy.checkA11y(context, options, violationCallback);
  }
);

/**
 * Custom command for visual regression testing
 * Requires @simonsmith/cypress-image-snapshot to be installed
 */
Cypress.Commands.add('matchImageSnapshot', (name: string) => {
  cy.matchImageSnapshot(name);
});

// Export to make this a module
export {};
