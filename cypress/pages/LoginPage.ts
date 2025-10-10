import { BasePage } from './BasePage';

/**
 * Login Page Object Model
 * Represents the login page and its interactions
 */
export class LoginPage extends BasePage {
  // Selectors
  private readonly usernameInput = '#username';
  private readonly passwordInput = '#password';
  private readonly loginButton = '[type="submit"]';
  private readonly flashMessage = '#flash';
  private readonly logoutButton = '.button.secondary';

  constructor() {
    super('/login');
  }

  /**
   * Enter username
   */
  enterUsername(username: string): this {
    cy.get(this.usernameInput).clear().type(username);
    return this;
  }

  /**
   * Enter password
   */
  enterPassword(password: string): this {
    cy.get(this.passwordInput).clear().type(password);
    return this;
  }

  /**
   * Click login button
   */
  clickLogin(): this {
    cy.get(this.loginButton).click();
    return this;
  }

  /**
   * Perform complete login action
   */
  login(username: string, password: string): this {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
    return this;
  }

  /**
   * Verify flash message
   */
  verifyFlashMessage(expectedMessage: string): this {
    cy.get(this.flashMessage).should('contain', expectedMessage);
    return this;
  }

  /**
   * Verify successful login
   */
  verifySuccessfulLogin(): this {
    cy.get(this.flashMessage).should('contain', 'You logged into a secure area!');
    cy.get(this.logoutButton).should('be.visible');
    return this;
  }

  /**
   * Verify login failure
   */
  verifyLoginFailure(errorMessage: string = 'Your username is invalid!'): this {
    cy.get(this.flashMessage).should('contain', errorMessage);
    return this;
  }

  /**
   * Get username input element
   */
  getUsernameInput(): Cypress.Chainable {
    return cy.get(this.usernameInput);
  }

  /**
   * Get password input element
   */
  getPasswordInput(): Cypress.Chainable {
    return cy.get(this.passwordInput);
  }
}
