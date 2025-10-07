/// <reference types="cypress" />

import { LoginPage } from '../../pages/LoginPage';

describe('Login Page - Page Object Model', () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.visit();
  });

  it('should display login form', () => {
    loginPage.getUsernameInput().should('be.visible').and('have.value', '');
    loginPage.getPasswordInput().should('be.visible').and('have.value', '');
  });

  it('should login successfully with valid credentials', () => {
    loginPage
      .login('tomsmith', 'SuperSecretPassword!')
      .verifySuccessfulLogin();
  });

  it('should show error with invalid credentials', () => {
    loginPage
      .login('invaliduser', 'invalidpass')
      .verifyLoginFailure('Your username is invalid!');
  });

  it('should show error with empty username', () => {
    loginPage
      .enterPassword('SuperSecretPassword!')
      .clickLogin()
      .verifyLoginFailure('Your username is invalid!');
  });
});
