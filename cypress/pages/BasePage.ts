/**
 * Base Page class that all page objects should extend
 * Provides common methods and utilities for all pages
 */
export class BasePage {
  protected url: string;

  constructor(url: string = '/') {
    this.url = url;
  }

  /**
   * Navigate to the page
   */
  visit(): void {
    cy.visit(this.url);
  }

  /**
   * Get an element by selector
   */
  getElement(selector: string): Cypress.Chainable {
    return cy.get(selector);
  }

  /**
   * Get an element by data-testid attribute
   */
  getByTestId(testId: string): Cypress.Chainable {
    return cy.get(`[data-testid="${testId}"]`);
  }

  /**
   * Wait for element to be visible
   */
  waitForElement(selector: string, timeout: number = 10000): Cypress.Chainable {
    return cy.get(selector, { timeout }).should('be.visible');
  }

  /**
   * Check if element exists
   */
  elementExists(selector: string): Cypress.Chainable {
    return cy.get(selector).should('exist');
  }

  /**
   * Check if element is visible
   */
  elementIsVisible(selector: string): Cypress.Chainable {
    return cy.get(selector).should('be.visible');
  }
}
