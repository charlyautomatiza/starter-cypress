/// <reference types="cypress" />

describe('Accessibility Testing with cypress-axe', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.injectAxe();
  });

  it('should have no accessibility violations on login page', () => {
    cy.checkA11y(null, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'],
      },
    });
  });

  it('should check specific element for accessibility', () => {
    cy.checkA11y('#login', {
      runOnly: {
        type: 'tag',
        values: ['wcag2a'],
      },
    });
  });

  it('should check accessibility with specific rules disabled', () => {
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: false },
      },
    });
  });

  it('should log accessibility violations to console', () => {
    cy.checkA11y(null, null, (violations) => {
      cy.task('log', violations);
    });
  });
});

describe('Accessibility Testing - Multiple Pages', () => {
  const pagesToTest = [
    '/login',
    '/checkboxes',
    '/dropdown',
    '/inputs',
  ];

  pagesToTest.forEach((page) => {
    it(`should have no accessibility violations on ${page}`, () => {
      cy.visit(`https://the-internet.herokuapp.com${page}`);
      cy.injectAxe();
      cy.checkA11y();
    });
  });
});
