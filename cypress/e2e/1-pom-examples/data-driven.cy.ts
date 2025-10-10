/// <reference types="cypress" />

import { LoginPage } from '../../pages/LoginPage';

describe('Data-Driven Testing with Fixtures', () => {
  let loginPage: LoginPage;
  let validUser: { username: string; password: string; message: string };
  let invalidUsers: Array<{ username: string; password: string }>;

  before(() => {
    // Load test data from fixtures
    cy.fixture('userData.json').then((data) => {
      validUser = data;
    });

    cy.fixture('userBadData.json').then((data) => {
      invalidUsers = data;
    });

    cy.fixture('testData.json').then((data) => {
      cy.wrap(data).as('testData');
    });
  });

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.visit();
  });

  it('should login with valid credentials from fixture', () => {
    loginPage.login(validUser.username, validUser.password).verifyFlashMessage(validUser.message);
  });

  it('should fail login with invalid credentials from fixture', function () {
    invalidUsers.forEach((user: { username: string; password: string }) => {
      cy.visit('https://the-internet.herokuapp.com/login');
      loginPage.login(user.username, user.password).verifyLoginFailure('Your username is invalid!');
    });
  });

  it('should use test data from testData fixture', function () {
    cy.get('@testData').then((data: unknown) => {
      const testData = data as { selectors: { loginForm: Record<string, string> } };
      const selectors = testData.selectors.loginForm;

      cy.get(selectors.username).should('be.visible');
      cy.get(selectors.password).should('be.visible');
      cy.get(selectors.submitButton).should('be.visible');
    });
  });

  it('should test with environment-specific data', () => {
    cy.fixture('environments.json').then((envs) => {
      const prodEnv = envs.prod;

      cy.log(`Testing against: ${prodEnv.baseUrl}`);
      // In real scenarios, you would use the baseUrl from the environment
      expect(prodEnv.baseUrl).to.include('herokuapp.com');
    });
  });
});
