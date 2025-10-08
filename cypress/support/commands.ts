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

// Export to make this a module
export {};
