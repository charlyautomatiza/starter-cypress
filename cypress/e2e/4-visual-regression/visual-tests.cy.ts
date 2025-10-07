/// <reference types="cypress" />

describe('Visual Regression Testing', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should match login page snapshot', () => {
    cy.matchImageSnapshot('login-page');
  });

  it('should match login form snapshot', () => {
    cy.get('#login').matchImageSnapshot('login-form');
  });

  it('should match snapshot after entering username', () => {
    cy.get('#username').type('tomsmith');
    cy.matchImageSnapshot('login-page-with-username');
  });

  it('should match error message snapshot', () => {
    cy.get('#username').type('invaliduser');
    cy.get('#password').type('invalidpass');
    cy.get('[type="submit"]').click();
    cy.get('#flash').should('be.visible');
    cy.matchImageSnapshot('login-error-message');
  });
});

describe('Visual Regression - Multiple Viewports', () => {
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1920, height: 1080 },
  ];

  viewports.forEach((viewport) => {
    it(`should match snapshot on ${viewport.name}`, () => {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.matchImageSnapshot(`login-page-${viewport.name}`);
    });
  });
});
